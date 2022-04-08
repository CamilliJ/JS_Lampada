// recebendo os dados do html referente aos botoes e a imagem.

const ligar = document.getElementById ( 'turnOn' );
const desligar = document.getElementById ( 'turnOff' );
const lampada = document.getElementById ( 'lamp' );

// criar as funções para a execução da troca de imagens;
function LampadaQuebrada () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function Ligada () {
    if ( !LampadaQuebrada () ) {
        lamp.src = './img/ligada.jpg';
    }
}

function Desligada () {
    if ( !LampadaQuebrada () ) {
        lamp.src = './img/desligada.jpg';
    }
}

function Quebrada () {
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener ( 'click', Ligada );
turnOff.addEventListener ( 'click', Desligada );
lamp.addEventListener ( 'mouseover', Ligada );
lamp.addEventListener ( 'mouseleave', Desligada );
lamp.addEventListener ( 'dblclick', Quebrada );

