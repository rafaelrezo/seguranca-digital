#!/usr/bin/env python3
"""Gera a captura sintética C-01 (Modbus/TCP) usada na A20.

Dados artificiais: nenhum pacote foi coletado em planta, CLP ou rede real.
Endereços privados de documentação didática; MACs administrados localmente.

Uso:
    python3 tools/materials/generate_a20_modbus_c01.py docs/assets/a19-a20/a20-modbus-c01.pcap

Conteúdo:
- IHM 10.10.2.20 lê, a cada 1 s, os registradores 0 e 1 do CLP 10.10.1.10:502
  (função 3, Read Holding Registers). Registrador 0 = nível (%);
  registrador 1 = limite de desligamento da bomba (%).
- Em t = 5 s, a estação de engenharia 10.10.3.30 abre outra conexão e lê os
  mesmos registradores (função 3).
- Em t = 7 s, a mesma estação escreve 85 no registrador 1 (função 6,
  Write Single Register). As leituras seguintes da IHM mostram o novo limite.
"""
import struct
import sys

BASE_TS = 1767225600  # instante fixo e arbitrário; a aula usa o tempo relativo


def checksum(data: bytes) -> int:
    if len(data) % 2:
        data += b"\0"
    s = sum(struct.unpack(f"!{len(data) // 2}H", data))
    while s >> 16:
        s = (s & 0xFFFF) + (s >> 16)
    return ~s & 0xFFFF


def ip_bytes(addr: str) -> bytes:
    return bytes(int(p) for p in addr.split("."))


MAC = {
    "10.10.1.10": bytes.fromhex("020000010110"),
    "10.10.2.20": bytes.fromhex("020000020220"),
    "10.10.3.30": bytes.fromhex("020000030330"),
}


def frame(src, dst, sport, dport, seq, ack, flags, payload=b"", ip_id=1):
    tcp_len = 20
    tcp = struct.pack("!HHIIBBHHH", sport, dport, seq, ack, (tcp_len // 4) << 4,
                      flags, 64240, 0, 0)
    pseudo = ip_bytes(src) + ip_bytes(dst) + struct.pack("!BBH", 0, 6, tcp_len + len(payload))
    tcp = tcp[:16] + struct.pack("!H", checksum(pseudo + tcp + payload)) + tcp[18:]
    total = 20 + tcp_len + len(payload)
    ip = struct.pack("!BBHHHBBH4s4s", 0x45, 0, total, ip_id, 0x4000, 64, 6, 0,
                     ip_bytes(src), ip_bytes(dst))
    ip = ip[:10] + struct.pack("!H", checksum(ip)) + ip[12:]
    eth = MAC[dst] + MAC[src] + struct.pack("!H", 0x0800)
    return eth + ip + tcp + payload


SYN, ACK, PSH = 0x02, 0x10, 0x08


class Conn:
    """Conexão TCP cliente → CLP com números de sequência consistentes."""

    def __init__(self, client, cport, isn_c, isn_s):
        self.c, self.cp = client, cport
        self.s, self.sp = "10.10.1.10", 502
        self.cseq, self.sseq = isn_c, isn_s
        self.ipid = 100

    def _id(self):
        self.ipid += 1
        return self.ipid

    def handshake(self, t, out):
        out.append((t, frame(self.c, self.s, self.cp, self.sp, self.cseq, 0, SYN, ip_id=self._id())))
        self.cseq += 1
        out.append((t + 0.0004, frame(self.s, self.c, self.sp, self.cp, self.sseq, self.cseq, SYN | ACK, ip_id=self._id())))
        self.sseq += 1
        out.append((t + 0.0008, frame(self.c, self.s, self.cp, self.sp, self.cseq, self.sseq, ACK, ip_id=self._id())))

    def exchange(self, t, req, resp, out):
        out.append((t, frame(self.c, self.s, self.cp, self.sp, self.cseq, self.sseq, PSH | ACK, req, self._id())))
        self.cseq += len(req)
        out.append((t + 0.012, frame(self.s, self.c, self.sp, self.cp, self.sseq, self.cseq, PSH | ACK, resp, self._id())))
        self.sseq += len(resp)
        out.append((t + 0.0125, frame(self.c, self.s, self.cp, self.sp, self.cseq, self.sseq, ACK, ip_id=self._id())))


def mbap(tid, pdu, unit=1):
    return struct.pack("!HHHB", tid, 0, len(pdu) + 1, unit) + pdu


def read_req(tid):
    return mbap(tid, struct.pack("!BHH", 3, 0, 2))


def read_resp(tid, level, limit):
    return mbap(tid, struct.pack("!BBHH", 3, 4, level, limit))


def write_req(tid, reg, value):
    return mbap(tid, struct.pack("!BHH", 6, reg, value))


def main(path):
    packets = []
    ihm = Conn("10.10.2.20", 49152, 1000, 5000)
    eng = Conn("10.10.3.30", 50211, 7000, 9000)

    ihm.handshake(0.0, packets)
    levels = [50, 50, 51, 51, 52, 52, 53, 53, 54, 54, 55]
    limit = 60
    for i, level in enumerate(levels):
        t = 0.1 + i
        if i >= 8:  # após a escrita de t = 7,2 s
            limit = 85
        tid = 0x0100 + i
        ihm.exchange(t, read_req(tid), read_resp(tid, level, limit), packets)

    eng.handshake(5.3, packets)
    eng.exchange(5.4, read_req(0x0001), read_resp(0x0001, 52, 60), packets)
    eng.exchange(7.2, write_req(0x0002, 1, 85), write_req(0x0002, 1, 85), packets)

    packets.sort(key=lambda p: p[0])
    with open(path, "wb") as f:
        f.write(struct.pack("<IHHiIII", 0xA1B2C3D4, 2, 4, 0, 0, 65535, 1))
        for t, data in packets:
            sec = BASE_TS + int(t)
            usec = int(round((t - int(t)) * 1_000_000))
            f.write(struct.pack("<IIII", sec, usec, len(data), len(data)))
            f.write(data)


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "a20-modbus-c01.pcap")
