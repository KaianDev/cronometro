let iniciar = document.querySelector('.start');
let pausar = document.querySelector('.pause');
let parar = document.querySelector('.stop');
let ass = document.querySelector('p');
let hora = document.querySelector('.hora');
let minuto = document.querySelector('.min');
let segundo = document.querySelector('.sec');

//Váriaveis do cronometro
let hr = 0;
let min = 0;
let sec = 0;

let intervalo = '';

//Variáveis para teste de click
let pauserClicado = false;
let iniciarClicado = false;
let pararClicado = false;

//Definição padrão para deixar o botão oculto de Pause e Stop
pausar.style.display = 'none'; 
parar.style.display = 'none';

function start() {
    iniciarClicado = true;
    cron();
    intervalo = setInterval(cron, 1000);
    testeClick();
}

function pause() {
    clearInterval(intervalo);
    iniciar.innerHTML = 'Reiniciar'
    pauserClicado = true;
    console.log(pauserClicado);
    testeClick();
}

function stopT() {
    clearInterval(intervalo);
    hora.innerHTML = '00';
    minuto.innerHTML = '00';
    segundo.innerHTML = '00';
    sec = 0;
    min = 0;
    hr = 0;
    iniciar.innerHTML = 'Iniciar';
    pararClicado = true;
    testeClick();
}

function doisDigitos(digito) {
    if (digito < 10) {
        return '0' + digito;
    } else {
        return digito;
    }
}
function cron() {
    sec++; 
    if (sec == 60) {
        min++;
        sec = 0;
        minuto.innerHTML = doisDigitos(min);
        if (min == 60) {
            hr++
            min = 0;
            hora.innerHTML = doisDigitos(hr);
        }
    }
    segundo.innerHTML = doisDigitos(sec);
}

function testeClick() {
    if (iniciarClicado == true) {
        iniciar.style.display = 'none';
        pausar.style.display = 'inline-block'
        parar.style.display = 'none';
        iniciarClicado = false;
    }
    if (pauserClicado == true) {
        iniciar.style.display = 'inline-block';
        pausar.style.display = 'none';
        parar.style.display = 'inline-block';
        pauserClicado = false;
    }
    if (pararClicado == true) {
        iniciar.style.display = 'inline-block';
        pausar.style.display = 'none';
        parar.style.display = 'none';
        pararClicado = false;
    }
}


ass.innerHTML += ' - ' + new Date().getFullYear()

iniciar.addEventListener('click', start);
pausar.addEventListener('click', pause);
parar.addEventListener('click', stopT);
