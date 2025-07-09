let botao = document.querySelector('.botao-menu')
let menu = document.querySelector('.menu')

botao.addEventListener('click', () => {
    menu.classList.toggle('ativo')
})