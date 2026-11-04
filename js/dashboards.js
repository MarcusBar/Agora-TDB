// Dashboard público: todos os valores são estáticos e fictícios.
// Este script apenas anima as barras do gráfico quando entram na tela.

var itens = document.querySelectorAll(".painel");
var reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reduzirMovimento) {
    document.documentElement.classList.add("anima-pronto");

    var observador = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.2 });

    itens.forEach(function (item) {
        observador.observe(item);
    });
}
