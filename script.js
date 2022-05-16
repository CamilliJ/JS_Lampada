// recebendo os dados do html referente aos botoes e a imagem.

const ligar = document.getElementById ( 'turnOn' );
const desligar = document.getElementById ( 'turnOff' );
const lampada = document.getElementById ( 'lamp' );
const comprar = document.getElementById ( 'BuyNew' );
var quantl = 0


var btnQuant= document.querySelector("#quantlpm");

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

function Comprar () {
    if ( LampadaQuebrada () ) {
        lamp.src = './img/desligada.jpg';
        alert("Prontinho, sua Lâmpada nova chegou!")
        quantl ++
    }else{
        alert("Você já tem uma Lâmpada!")
    }
}

turnOn.addEventListener ( 'click', Ligada );
turnOff.addEventListener ( 'click', Desligada );
comprar.addEventListener('click', Comprar);
lamp.addEventListener ( 'mouseover', Ligada );
lamp.addEventListener ( 'mouseleave', Desligada );
lamp.addEventListener ( 'dblclick', Quebrada );

// era para aqui ser submit, mas não ta rolando, no meu outro codigo deu, mas aqui não, então vou deixar click.
btnQuant.addEventListener('click', quantidade)

function quantidade(){

    var resposta = document.getElementById('resposta');
    if(quantl == 0){
        resposta.innerHTML = "Você não comprou nenhuma lâmpada!"
    }else if(quantl == 1){
        resposta.innerHTML = "Você já comprou " + quantl + ' lâmpada!'
    }else{
        resposta.innerHTML = "Você já comprou " + quantl + ' lâmpadas!'

    }

    document.getElementById('resposta').style.textAlign = 'center'
    document.getElementById('resposta').style.fontSize = '14px'
    document.getElementById('resposta').style.marginTop = '30px'
    document.getElementById('resposta').style.color = 'black'


}


var btnSomar= document.querySelector("#btnsomar");



btnSomar.addEventListener('submit', somar)

function somar(){
    var valor1 =  parseInt(document.getElementById("num1").value);
    var valor2 =  parseInt(document.getElementById("num2").value);

    var resposta = document.getElementById('resposta3');
    let r = valor1 + valor2
    resposta.innerHTML = "A soma é " + r

    document.getElementById('resposta3').style.textAlign = 'center'
    document.getElementById('resposta3').style.fontSize = '19px'
    document.getElementById('resposta3').style.marginTop = '30px'
    document.getElementById('resposta3').style.fontWeight = 'bold'


}
