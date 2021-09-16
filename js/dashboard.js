//MENU MOBILE INICIO
let btnArrow = document.querySelector('.btn-arrow');
let itensMenu = document.querySelector('.menu-mobile-items-container');

function manipularMenu(){
    itensMenu.classList.toggle('menu-fechado')
    btnArrow.classList.toggle('btn-aberto')
}

btnArrow.addEventListener('click', manipularMenu);

//MENU MOBILE FIM

//TROCAR CARD ESQUERDA INICIO

let form = document.querySelector('.form-container');
let lista = document.querySelector('.container-listas');
let enderecos = document.querySelector('.container-enderecos');
let cartoes = document.querySelector('.container-cartoes');

let cards = document.querySelectorAll('.card-esquerda');

function ocultarTodosOsCardsEsquerdos(){
    for (let i = 0; i < cards.length; i++){
        if(!cards[i].classList.contains('d-none')){
            cards[i].classList.add('d-none');
        }
    }
}

function mostrarDados(){
    ocultarTodosOsCardsEsquerdos();
    form.classList.remove('d-none');
    manipularMenu();
}

function mostrarListas(){
    ocultarTodosOsCardsEsquerdos();
    lista.classList.remove('d-none');
    manipularMenu();
}

function mostrarCartoes(){
    ocultarTodosOsCardsEsquerdos();
    cartoes.classList.remove('d-none');
    manipularMenu();
}

function mostrarEnderecos(){
    ocultarTodosOsCardsEsquerdos();
    enderecos.classList.remove('d-none');
    manipularMenu();
}

//TROCAR CARD ESQUERDA FIM

//BTN VER LISTA INICIO
let btnsLista = document.querySelectorAll('.btn-ver-lista');
let listas = document.querySelectorAll('.lista-prod');

for (let i = 0; i < btnsLista.length; i++){
    btnsLista[i].addEventListener('click', () => {
        listas[i].classList.toggle('d-none');
    })
}


//BTN VER LISTA FIM