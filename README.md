# Ewerton Souza · Portfolio

Portfolio estático em **Next.js 16, TypeScript, React e Tailwind CSS 4**. Inglês por defeito, opção português, tema escuro/claro, navegação móvel, projetos expansíveis, contacto por email, LinkedIn e impressão otimizada. Sem backend, analytics, cookies de rastreamento ou dependências de serviços externos para funcionar.

## Executar

Requer Node.js 22 ou superior e npm.

```sh
npm ci
npm run dev
```

Abrir o endereço apresentado no terminal. Para validar e gerar o site:

```sh
npm run typecheck
npm run build
```

O resultado estático fica em `out/`. `next start` não é suportado pelo modo `output: export`; para pré-visualizar a exportação use `npx serve out`.

## Publicação no GitHub Pages

Site da conta ewertondevti: https://ewertondevti.github.io/. O workflow é iniciado manualmente para publicar atualizações.

1. Cria um repositório na tua conta e coloca o conteúdo desta pasta na raiz. Se usares Git, trabalha numa branch própria e abre um PR; não faças commits diretamente em `main`, `master`, `qual` ou `dev`.
2. No GitHub, abre **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Em **Actions**, escolhe **Deploy portfolio to GitHub Pages → Run workflow**.
4. A execução calcula automaticamente o caminho do repositório. Funciona tanto num site de conta como num site de projeto. O endereço real aparece no resultado do deploy.

O workflow tem permissões limitadas a leitura do código e publicação no Pages. O GitHub pode solicitar a ativação de Pages antes da primeira execução.

Referências oficiais: [exportação estática do Next.js](https://nextjs.org/docs/app/guides/static-exports) e [workflows personalizados do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

### Configuração

Para desenvolvimento, copia `.env.example` para `.env.local`. Os valores são públicos e incorporados durante o build. Não colocar segredos.

| Variável local | Variável de repositório no GitHub | Utilização |
| --- | --- | --- |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `CONTACT_EMAIL` | Email profissional. Por defeito usa o email do CV. |
| `NEXT_PUBLIC_LINKEDIN_URL` | `LINKEDIN_URL` | LinkedIn fornecido pelo utilizador. |
| `NEXT_PUBLIC_GITHUB_URL` | `GITHUB_URL` | Conta verificada ewertondevti. |
| `NEXT_PUBLIC_SITE_URL` | Automática no workflow | Origem real do site, sem barra final. Ativa canonical e sitemap. |
| `NEXT_PUBLIC_BASE_PATH` | Automática no workflow | Caminho `/nome-do-repositorio`; vazio num site de conta. |

As variáveis do GitHub ficam em **Settings → Secrets and variables → Actions → Variables**. Para domínio próprio, configura também a origem real no build e adiciona o domínio em Pages; nunca uses um endereço fictício.

## Editar conteúdo

- `lib/profile.ts`: contactos e textos EN/PT.
- `lib/experience.ts`: histórico profissional traduzido.
- `components/portfolio.tsx`: estrutura e interações.
- `app/globals.css`: cores, tipografia, responsive e impressão.
- `app/layout.tsx`: metadata e dados estruturados Person.
- `public/social.png`: imagem social; `public/icon.svg`: favicon.

O tema e o idioma ficam guardados apenas no armazenamento local do navegador. A página tem inglês no HTML inicial; a opção PT traduz o conteúdo e atualiza o atributo `lang`. Não há URLs individuais por idioma nem se declaram hreflang fictícios. Uma estrutura `/en/` e `/pt/` seria uma evolução para indexação independente das duas versões.

## Critérios editoriais e privacidade

Fontes: CV profissional, diploma e histórico académico fornecidos, complementados pelas correções explícitas do utilizador. Não se incluem os PDFs originais no projeto ou no site, pois contêm dados pessoais.

- Experiência desde janeiro de 2019; a apresentação usa 7+ anos, confirmados em outubro de 2026.
- IFSP, Campus Piracicaba: Tecnólogo em Análise e Desenvolvimento de Sistemas, conclusão em **24 de agosto de 2020**. A conclusão substitui a data incorreta do CV; não se confunde com colação de grau ou emissão do diploma.
- Atividade atual através da Ewerton Souza Unipessoal Lda, constituída em janeiro de 2025 conforme certidão fornecida. Aquasis e Watermelon são clientes ativos; Cofidis Portugal é o cliente final da Watermelon desde **1 de setembro de 2026**.
- O período histórico da Aquasis em 2024 não significa fim da relação: o vínculo atual é apresentado separadamente.
- Babel Group é experiência anterior, conforme a correção do utilizador. Período: **janeiro de 2025–abril de 2026**, com saída explicitamente corrigida pelo utilizador.
- Não se afirma que a reestruturação da Aquasis ocorreu apenas no período histórico de 2024; a relação de consultoria atual é contínua.
- As ilustrações de projetos são composições abstratas, explicitamente identificadas, não capturas de sistemas de clientes.
- Não foram inventadas métricas, resultados comerciais, demos, certificações ou links de projetos. O GitHub e o endereço do portfólio pertencem à conta verificada e selecionada pelo utilizador.
- Morada, telefone pessoal, nascimento, documentos de identificação, matrícula, notas académicas, códigos de validação e assinaturas foram excluídos. Os PDFs de CV em public/ foram criados de raiz apenas com dados profissionais e incluem o endereço do portfólio. O email profissional do CV e o LinkedIn partilhado são os únicos contactos publicados.

## Acessibilidade e limitações

HTML semântico, link para saltar navegação, foco visível, botões com rótulos, estados de expansão, navegação por teclado, preferência por movimento reduzido, tema claro e responsive. O contacto usa `mailto:` e o cliente de email do visitante; não existe um formulário que finja enviar mensagens. O botão de copiar trata indisponibilidade da área de transferência. O site não precisa de fontes remotas.

LinkedIn exige acesso autenticado para alterações; a preparação de textos não equivale a uma atualização publicada no perfil.
