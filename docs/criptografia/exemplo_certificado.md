# Exemplo Prático: Como Ler um Certificado Digital

> **Objetivos de aprendizagem**
> - Identificar os campos mais importantes de um certificado X.509.
> - Entender o que realmente deve ser validado em um certificado de site ou serviço.
> - Relacionar leitura de certificado com TLS, PKI e troubleshooting em Security+.
>
> **Tempo estimado:** 18 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/qoO84zK3aJY)

## 1. O que observar primeiro

Ao inspecionar um certificado, os campos mais úteis são:

- **subject**: para quem o certificado foi emitido;
- **issuer**: quem assinou;
- **validade**: início e vencimento;
- **SAN**: nomes de domínio cobertos;
- **algoritmo**: tipo de assinatura e chave;
- **cadeia de confiança**: como o certificado chega até a raiz confiável.

Se um desses elementos falha, a conexão pode até usar criptografia, mas a confiança fica comprometida.

---

## 2. Leitura prática de um certificado web

Em um navegador ou com ferramenta de linha de comando, você normalmente verifica:

1. se o certificado corresponde ao domínio acessado;
2. se não está vencido;
3. se a cadeia é válida;
4. se o algoritmo e o tamanho de chave ainda são aceitáveis;
5. se há sinais de revogação ou erro de configuração.

Em Security+, esse tipo de raciocínio aparece quando a questão descreve erro de TLS, mTLS ou certificado inválido.

---

## 3. O que um certificado não resolve sozinho

Certificado válido não significa ambiente seguro por completo.

Ainda é preciso observar:

- configuração de TLS;
- proteção da chave privada;
- renovação antes do vencimento;
- revogação quando houver comprometimento;
- processo de emissão e aprovação.

> Analogia: o crachá pode ser legítimo, mas isso não garante que a porta esteja sendo monitorada nem que o crachá não tenha sido copiado.

---

## 4. Onde isso aparece fora do navegador

Certificados também são usados em:

- VPNs;
- assinatura de código;
- autenticação de dispositivos;
- mTLS entre serviços;
- gateways e equipamentos industriais.

Por isso, saber ler um certificado ajuda tanto em troubleshooting quanto em análise de arquitetura.

---

## 5. Mini-caso prático

Uma API institucional apresenta erro de conexão segura após troca de domínio.

Ao inspecionar o certificado, a equipe descobre:

- o `subject alternative name` não cobre o novo hostname;
- o certificado está válido, mas para outro nome;
- a cadeia é confiável, porém o mapeamento do serviço está incorreto.

Conclusão: o problema não é a CA; é o alinhamento entre certificado e serviço publicado.

---

## 6. Perguntas de revisão rápida

1. Quais campos de um certificado devem ser verificados primeiro?
2. Por que validade correta não basta para garantir confiança?
3. O que o `SAN` resolve em um certificado moderno?

---

## 7. Fontes de referência

- RFC 5280 - Internet X.509 Public Key Infrastructure Certificate and CRL Profile  
  https://datatracker.ietf.org/doc/html/rfc5280
- NIST SP 800-52 Rev. 2  
  https://csrc.nist.gov/pubs/sp/800/52/r2/final
- Let's Encrypt - Certificate Chains  
  https://letsencrypt.org/certificates/
