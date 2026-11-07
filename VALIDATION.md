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
## Visual revision — October 2026
- Added an original animated parametric sculpture, pointer response, staggered heading entrances, scroll reveals, reading progress, project motion and a pause control.
- Reduced-motion preferences disable decorative animation. Canvas rendering is limited to 30fps and skips hidden/offscreen work.
- Replaced both downloadable CVs with two-page editorial layouts; all four PDF pages visually inspected.
- Added seven courses/certifications verified against the LinkedIn profile, preserving original titles and issue dates.
- Removed active-client and simultaneous-engagement language.
- Verified production build and TypeScript, language/theme/pause controls, project disclosure and mobile navigation. Checked widths 320, 390 and 768; fixed tablet overflow. Browser console has no errors.
## Impeccable audit — November 2026
- `impeccable detect` (v4.8.0) on the rendered site at 1280×800, 768×1024 and 390×844: 84 findings before, 0 after.
- Functional text raised to an 11px minimum and body copy to at least 13px; calmer tracking on mono labels.
- Removed numbered section labels, kickers above headings, list/card numbering and the decorative accent halos.
- Arial and Courier New replaced by self-hosted Schibsted Grotesk and IBM Plex Mono (no remote font requests).
- `text-wrap: balance` on headings and `pretty` on paragraphs; print styles now neutralise the darker surfaces.
- Fixed artwork caption icons stretching to fill the illustration.
- Visually checked dark and light themes at 1440px and mobile at 390px: fonts load, no horizontal overflow, no console errors.
