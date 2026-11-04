// Menu do botão "Login": abre as opções Beneficiário, Colaborador e Doador.

var botaoLogin = document.querySelector("#botao-login");
var menuLogin = document.querySelector("#menu-login");

function fecharMenuLogin() {
    menuLogin.hidden = true;
    botaoLogin.setAttribute("aria-expanded", "false");
}

if (botaoLogin && menuLogin) {
    botaoLogin.addEventListener("click", function () {
        var abrir = menuLogin.hidden;
        menuLogin.hidden = !abrir;
        botaoLogin.setAttribute("aria-expanded", String(abrir));
    });

    document.addEventListener("click", function (evento) {
        if (!menuLogin.hidden && !evento.target.closest(".login-menu")) {
            fecharMenuLogin();
        }
    });

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape" && !menuLogin.hidden) {
            fecharMenuLogin();
            botaoLogin.focus();
        }
    });
}
