# Verificação

- Build de produção Next.js: aprovado.
- TypeScript em modo estrito: aprovado.
- Exportação estática: aprovada, incluindo HTML, CSS, JavaScript, favicon, imagem social e `.nojekyll`.
- Caminho de repositório GitHub Pages: testado com `/portfolio-check`; referências a assets, imagem social e sitemap receberam o prefixo correto. O resultado entregue usa caminho raiz; o workflow calcula o caminho real no deploy.
- Interface no navegador: validada em 320, 390, 768 e 1440 px. Sem transbordamento horizontal nas larguras verificadas.
- Idioma: inglês inicial e mudança para português confirmados, incluindo `lang="pt-PT"`.
- Temas: escuro e claro confirmados; preferência local persistente.
- Menu móvel: abertura e fecho após seleção confirmados.
- Projetos: abertura de contexto e estado de expansão confirmados.
- Consola do navegador: sem erros ou avisos na sessão de validação.
- Contactos: email do CV e LinkedIn fornecido pelo utilizador. GitHub verificado ewertondevti, selecionado pelo utilizador.
- PDFs originais: não incluídos. Os CVs públicos foram criados de raiz com dados profissionais, sem informação sensível dos documentos originais.
- Publicação: solicitada pelo utilizador para ewertondevti.github.io. Workflow manual de GitHub Pages.

As verificações de interface são amostrais, não uma auditoria completa de acessibilidade ou uma garantia para todos os navegadores. O deploy real do GitHub Actions requer um repositório do utilizador e ainda não foi executado, conforme pedido.
