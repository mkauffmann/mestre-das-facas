//MENU MOBILE INICIO
let btnArrow = document.querySelector('.btn-arrow');
let itensMenu = document.querySelector('.menu-mobile-items-container');


btnArrow.addEventListener('click', () => {
itensMenu.classList.toggle('menu-fechado')
btnArrow.classList.toggle('btn-aberto')
});

//MENU MOBILE FIM