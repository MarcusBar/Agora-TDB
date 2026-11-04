// Painel interno demonstrativo: todos os valores são fictícios.

// Os dois formulários da página são só de filtro: nunca recarregam a página.
document.querySelectorAll("#form-periodo, #form-busca").forEach(function (form) {
    form.addEventListener("submit", function (evento) {
        evento.preventDefault();
    });
});

// ===== Seletor de período =====

var periodo = document.querySelector("#periodo");

var metricas = {
    mes: { cadastros: "246", atendimentos: "83", doacoes: "R$ 48.320", campanhas: "7" },
    trimestre: { cadastros: "612", atendimentos: "194", doacoes: "R$ 126.840", campanhas: "12" },
    ano: { cadastros: "1.845", atendimentos: "703", doacoes: "R$ 438.200", campanhas: "26" }
};

if (periodo) {
    periodo.addEventListener("change", function () {
        var valores = metricas[periodo.value] || metricas.mes;

        Object.keys(valores).forEach(function (id) {
            var alvo = document.getElementById(id);

            if (alvo) {
                alvo.textContent = valores[id];
            }
        });
    });
}

// ===== Filtro da tabela de registros =====

var filtro = document.querySelector("#filtro-registros");
var tabela = document.querySelector("#tabela-registros");
var resultado = document.querySelector("#resultado-filtro");

if (filtro && tabela) {
    filtro.addEventListener("input", function () {
        var termo = filtro.value.trim().toLocaleLowerCase("pt-BR");
        var visiveis = 0;

        Array.prototype.forEach.call(tabela.rows, function (linha) {
            var corresponde = linha.textContent.toLocaleLowerCase("pt-BR").indexOf(termo) !== -1;

            linha.hidden = !corresponde;

            if (corresponde) {
                visiveis++;
            }
        });

        if (resultado) {
            resultado.textContent = visiveis === 0
                ? "Nenhum registro fictício encontrado."
                : visiveis + (visiveis === 1 ? " registro fictício exibido." : " registros fictícios exibidos.");
        }
    });
}
