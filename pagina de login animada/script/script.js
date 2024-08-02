document.addEventListener('DOMContentLoaded', () => {
    // Obtendo referências aos elementos
    const container = document.getElementById("container");
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login'); // Corrigido: buscando o botão de login correto

    registerBtn.addEventListener(`click`, () => {
        container.classList.add(`active`);
    })
    loginBtn.addEventListener(`click`, () => {
        container.classList.remove(`active`);
    })
});
