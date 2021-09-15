//MENU MOBILE INICIO
let btnArrow = document.querySelector('.btn-arrow');
let itensMenu = document.querySelector('.menu-mobile-items-container');


btnArrow.addEventListener('click', () => {
itensMenu.classList.toggle('menu-fechado')
btnArrow.classList.toggle('btn-aberto')
});

//MENU MOBILE FIM

//TROCAR CARD ESQUERDA INICIO
let links = document.querySelectorAll('.menu-item a');
let form = document.querySelector('.form-container');

for(link of links){
    link.addEventListener('click', () => {
        if(link.innerText == 'Meus Dados')
        form.classList.toggle('d-none');
    })
}

//TROCAR CARD ESQUERDA FIM