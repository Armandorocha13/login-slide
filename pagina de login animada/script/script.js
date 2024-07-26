
document.addEventListener('DOMContentLoaded', () => {
    // Obtendo referências aos elementos
    const container = document.getElementById("container");
    const registerBtn = document.getElementById('criar-conta');
    const loginBtn = document.querySelector('.form-container.login button');

    // Verifica se os elementos foram obtidos corretamente
    if (!container || !registerBtn || !loginBtn) {
        console.error('Erro ao obter os elementos necessários.');
        return;
    }

    // Adiciona classe 'active' ao container quando o botão de criar conta é clicado
    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    // Remove classe 'active' do container quando o botão de login é clicado
    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });
});

