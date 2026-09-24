import subprocess,sys,tempfile,time,json,csv
from pathlib import Path
from datetime import datetime,timezone
root=Path.cwd()
with tempfile.TemporaryDirectory(prefix='a12-benigno-') as d:
    output=Path(d)/'observacao.txt'
    code='from pathlib import Path; import time,sys; Path(sys.argv[1]).write_text("observacao benigna", encoding="utf-8"); time.sleep(2)'
    child=subprocess.Popen([sys.executable,'-c',code,str(output)])
    try:
        for _ in range(40):
            if output.exists(): break
            time.sleep(.05)
        assert output.read_text()=='observacao benigna'
        observed=datetime.now(timezone.utc).isoformat(timespec='seconds')
        ps=subprocess.check_output(['ps','-p',str(child.pid),'-o','pid=,ppid=,comm='],text=True).strip()
        pid,ppid,comm=ps.split(maxsplit=2)
        stat=output.stat()
        assert int(ppid)>0 and int(pid)==child.pid
        rows=[['L1',observed,'consulta ps','P1','P0',comm,'processo presente no instante da consulta'],['L2',observed,'leitura de arquivo','P1 (associacao pelo ensaio)','P0','arquivo de teste','conteudo lido: observacao benigna; bytes: '+str(stat.st_size)]]
        target=root/'docs/assets/a11-a12/observacao-benigna.csv'
        with target.open('w') as f:
            w=csv.writer(f);w.writerow(['registro','instante_utc','fonte','processo','pai','objeto','observacao']);w.writerows(rows)
        raw={'observed_utc':observed,'ps':ps,'python':sys.version.split()[0],'file_bytes':stat.st_size,'content':output.read_text(),'note':'Sem coleta de rede; consulta pontual, nao rastreamento completo.'}
        Path('/tmp/a12-coleta-bruta.json').write_text(json.dumps(raw,ensure_ascii=False,indent=2))
        print(json.dumps({'observed':observed,'command_name':comm,'bytes':stat.st_size,'csv':str(target)},ensure_ascii=False))
    finally:
        child.wait(timeout=10)
