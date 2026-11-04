// Tela de acesso demonstrativa.
// Não existe autenticação: nenhum dado digitado é enviado, salvo ou validado.
// O objetivo é só ilustrar o fluxo de entrada de cada perfil.

var formulario = document.querySelector("#form-login");
var feedback = document.querySelector("#feedback-login");
var botaoDemo = document.querySelector("#botao-demo");

var perfis = {
    beneficiario: {
        titulo: "Acesso do beneficiário",
        intro: "Entre com os seus dados para acessar o ambiente do beneficiário.",
        email: "E-mail",
        destino: "dashboards.html",
        mensagem: "Formulário demonstrativo enviado. Abrindo o painel público…"
    },
    colaborador: {
        titulo: "Acesso do colaborador",
        intro: "Entre com suas credenciais institucionais para acessar o ambiente de trabalho.",
        email: "E-mail institucional",
        destino: "painel-interno.html",
        mensagem: "Formulário demonstrativo enviado. Abrindo o painel de exemplo…"
    },
    doador: {
        titulo: "Acesso do doador",
        intro: "Entre com os seus dados para acompanhar o impacto das doações.",
        email: "E-mail",
        destino: "dashboards.html",
        mensagem: "Formulário demonstrativo enviado. Abrindo o painel público…"
    }
};

// O perfil vem do botão de login (?perfil=...). Sem parâmetro, usa o colaborador.
var pedido = new URLSearchParams(window.location.search).get("perfil");
var chave = Object.prototype.hasOwnProperty.call(perfis, pedido) ? pedido : "colaborador";
var perfil = perfis[chave];

document.querySelector("#titulo-acesso").textContent = perfil.titulo;
document.querySelector("#intro-acesso").textContent = perfil.intro;
document.querySelector("#rotulo-email").textContent = perfil.email;
document.title = perfil.titulo + " | Ágora";

document.querySelectorAll(".perfis a").forEach(function (link) {
    if (link.dataset.perfil === chave) {
        link.setAttribute("aria-current", "true");
    }
});

function abrirPainel() {
    window.location.href = perfil.destino;
}

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        if (!formulario.reportValidity()) {
            return;
        }

        feedback.textContent = perfil.mensagem;
        window.setTimeout(abrirPainel, 450);
    });
}

if (botaoDemo) {
    botaoDemo.addEventListener("click", abrirPainel);
}
