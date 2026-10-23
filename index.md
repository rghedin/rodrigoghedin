---
layout: default
title: Rodrigo Ghedin
excerpt: Site pessoal, jardim digital e cartão de visitas do Rodrigo Ghedin.
buscavel: true
---
<h1 class="visualmente-oculto">Rodrigo Ghedin</h1>

Olá!

Meu nome é Rodrigo Ghedin e este é o meu sítio na web.

Meu [blog](/blog/) também está aqui, além do [formulário de inscrição da newsletter](/newsletter) por onde envio os textos do blog, caso você não mexa com [feeds RSS](/feed.xml).

Escrevo o [Manual do Usuário](https://manualdousuario.net), otimizo sites na [Célere](https://celere.dev), apresento o [Nós da Internet](https://www.nic.br/podcasts/nos-da-internet/) e co-organizo o [Site com Café](https://www.sitecomcafe.com.br) (Homebrew Website Club).

<h2 class="ultimos-titulo">Últimos posts</h2>
<ul class="ultimos">
{%- for post in site.posts limit: 5 %}
{%- capture titulo_ultimo %}{% include titulo-post.html post=post %}{% endcapture %}
<li><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d/%-m/%Y" }}</time> <a href="{{ post.url | relative_url }}">{{ titulo_ultimo | strip_html | escape_once }}</a></li>
{%- endfor %}
</ul>

<p><a href="{{ site.Blog | relative_url }}">Ver todos os posts →</a></p>
