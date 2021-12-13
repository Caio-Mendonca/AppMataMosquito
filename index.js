var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

function TamanhoAPP(){
    altura = window.innerHeight
    largura = window.innerWidth
}
TamanhoAPP()

var cronometro = setInterval(function(){
    tempo -= 1
    if (tempo < 0){
        window.location.href= 'vitoria.html'
    }
    else{
    document.getElementById('cronometro').innerHTML = tempo
    }
},1000)

function Posicao(){
    //removendo elemento caso já exista
    if (document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()
        //Controle de vidas
        if(vidas > 3){
            window.location.href= 'game_over.html'
        }
        else{
        document.getElementById('vida' + vidas ).src="imagens/coracao_vazio.png"
        vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0  ? 0 : posicaoX
    posicaoY = posicaoY < 0  ? 0 : posicaoY
   
    //criando elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = './imagens/mosca.png'
    mosquito.className = Classe() +' '+ Lados()
    mosquito.style.left = posicaoX +'px'
    mosquito.style.top = posicaoY +'px'
    mosquito.style.position = 'absolute'
    mosquito.id ='mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}
//Função responsável pelo tamanho do mosquito
function Classe(){
    var classe = Math.floor(Math.random() * 3)

    switch (classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
//Função responsável pelo lado que o mosquito está olhando
function Lados(){
    var lado = Math.floor(Math.random() * 2)

    switch (lado){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}