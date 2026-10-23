// Escolhe a paleta de cores da página. As cores de cada paleta estão em
// style.css (:root[data-paleta]). Carregado no <head>, antes do CSS, para a
// página já pintar com a paleta certa.
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
