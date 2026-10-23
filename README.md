# rodrigo.ghed.in

Site pessoal em Jekyll, publicado no Cloudflare Pages.

## Front matter dos posts

```yaml
---
title: Título do post          # opcional em notinhas, citações, imagens e links
type: link                     # opcional: image, quote, aside, lista, namidia, link
categories: [notinhas]         # define em qual filtro do blog o post aparece
---
```

- **`type`** muda a apresentação: `image`, `quote`, `aside` e `link` não mostram título;
  `lista` e `namidia` mostram. Sem `type`, o post é um textão com título.
- Todo post termina com "Responder por e-mail", com o título do post no assunto.

## Filtros do blog

Cada arquivo em `blog/` com `pagination.category` vira um filtro no menu do blog, na
ordem do campo `ordem`. `rotulo` é o nome no singular que aparece ao lado da data.

## Identidade

Nome, e-mail e perfis em outros sites ficam em `_config.yml` (`author`, `email`,
`perfis`). Eles alimentam o h-card do cabeçalho, os `rel="me"` do `<head>` e do rodapé,
e o link "Responder por e-mail".

## Paletas de cores

`assets/paleta.js` sorteia uma paleta ao recarregar a página e a mantém durante a
navegação. As cores estão em `style.css` (`:root[data-paleta="…"]`).

## Fonte

Inter 4.1, subconjunto latino em `assets/fonts/` (licença SIL OFL). Ao trocar a
versão, troque o nome do arquivo: o `_headers` guarda fontes em cache por 1 ano.
