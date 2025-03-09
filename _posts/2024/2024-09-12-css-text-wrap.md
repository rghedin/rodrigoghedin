---
layout: post
type: longform
title: "CSS: text-wrap para equilibrar títulos"
date: 2024-09-12 07:39 -0300
---
Tem tanta coisa possível no CSS hoje que já considero uma “obra aberta” — impossível conhecer tudo, sempre nos presenteando com pequenas pérolas.

Descobri o `text-wrap: balance`, que distribui as palavras dentro de um elemento de modo a deixá-las… equilibradas. É indicado para títulos (`h1`, `h2` etc.) e blocos curtos — cada navegador impõe uma limitação de linhas em que isso funciona.

Apliquei aos títulos do Órbita. ([Exemplo](https://manualdousuario.net/orbita-post/ticci-tabs-um-jeito-simples-de-acompanhar-seis-a-sete-sites-favoritos-ios/).)

Existe também o `text-wrap: pretty`, que parte do mesmo princípio do `balance`, porém menos rigoroso e, por isso, indicado para blocos de textos maiores, como parágrafos (`p`) e listas (`li`). O suporte [ainda é limitado](https://caniuse.com/mdn-css_properties_text-wrap_pretty) (só nos navegadores baseados no Chromium), mas isso deve mudar com o tempo.

Eu jamais teria pensado nisso. [Mais informações no MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap).

Dica extra. Para impedir que dois elementos que não podem ser separados não o sejam por uma quebra de linha (valores, tipo R$&nbsp;10), use um caracter invisível (`&nbsp;`) em vez de espaço, assim: `R$&nbsp;10`.