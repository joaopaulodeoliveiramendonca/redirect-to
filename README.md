# Redirecionamento para ERP Escalamais

Este projeto redireciona todas as rotas para https://erp.escalamais.com

## Deploy na Vercel

### Opção 1: Via CLI
1. Instale a Vercel CLI: `npm i -g vercel`
2. Execute: `vercel`
3. Siga as instruções

### Opção 2: Via Dashboard
1. Acesse https://vercel.com
2. Clique em "Add New" > "Project"
3. Importe este repositório
4. Clique em "Deploy"

## Configuração

O redirecionamento está configurado em dois lugares para garantir funcionamento:
- `vercel.json`: Configuração nativa da Vercel
- `next.config.js`: Fallback via Next.js

Todas as rotas (/, /qualquer-pagina, /a/b/c, etc) serão redirecionadas para https://erp.escalamais.com com status HTTP 301 (redirecionamento permanente).
