// Sorteia uma paleta de cores a cada carregamento de página, sem repetir a
// anterior. As cores de cada paleta estão em style.css (:root[data-paleta]).
// Carregado no <head>, antes do CSS, para a página já pintar com a paleta certa.
(function () {
  var paletas = ["atual", "lavanda", "salvia", "pessego", "ceu", "salmao"];
  var anterior = null;
  try {
    anterior = sessionStorage.getItem("paleta");
  } catch (e) {}

  var opcoes = paletas.filter(function (p) {
    return p !== anterior;
  });
  var escolhida = opcoes[Math.floor(Math.random() * opcoes.length)];

  document.documentElement.setAttribute("data-paleta", escolhida);
  try {
    sessionStorage.setItem("paleta", escolhida);
  } catch (e) {}
})();
