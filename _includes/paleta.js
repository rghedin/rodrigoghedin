// Escolhe a paleta de cores da página. As cores de cada paleta estão em
// style.scss (:root[data-paleta]). Vai embutido no <head>, antes do CSS, para
// a página já pintar com a paleta certa sem um pedido extra ao servidor.
//
// Este é o código-fonte. O que vai para a página é _includes/paleta.min.js,
// e a CSP em _headers só aceita esse arquivo exato (hash sha256). Depois de
// mudar este arquivo, rode na raiz do projeto:
//
//   npx terser _includes/paleta.js -c -m --ecma 5 -o _includes/paleta.min.js
//   printf '%s' "$(cat _includes/paleta.min.js)" | openssl dgst -sha256 -binary | base64
//
// e troque o hash 'sha256-…' em script-src no _headers pelo novo valor.
//
// - Ao recarregar a página (ou na primeira visita da sessão), sorteia uma
//   paleta diferente da anterior.
// - Ao navegar entre páginas do site, mantém a mesma paleta.
// - Quem pede alto contraste no sistema (prefers-contrast: more) sempre vê a
//   paleta "atual", de fundo branco puro.
(function () {
  var paletas = ["atual", "lavanda", "salvia", "pessego", "ceu", "salmao"];

  var anterior = null;
  try {
    anterior = sessionStorage.getItem("paleta");
  } catch (e) {}

  var recarregou = false;
  try {
    var nav = performance.getEntriesByType("navigation")[0];
    recarregou = nav
      ? nav.type === "reload"
      : performance.navigation && performance.navigation.type === 1;
  } catch (e) {}

  var altoContraste =
    window.matchMedia && window.matchMedia("(prefers-contrast: more)").matches;

  var escolhida;
  if (altoContraste) {
    escolhida = "atual";
  } else if (!recarregou && paletas.indexOf(anterior) !== -1) {
    escolhida = anterior;
  } else {
    var opcoes = paletas.filter(function (p) {
      return p !== anterior;
    });
    escolhida = opcoes[Math.floor(Math.random() * opcoes.length)];
  }

  document.documentElement.setAttribute("data-paleta", escolhida);
  try {
    sessionStorage.setItem("paleta", escolhida);
  } catch (e) {}
})();
