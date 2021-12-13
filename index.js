var altura = 0
var largura = 0

function TamanhoAPP(){
    var altura = window.innerHeight
    var largura = window.innerWidth
}
TamanhoAPP()

var posicaoX = Math.floor(Math.random() * largura)
var posicaoY = Math.floor(Math.random() * altura)

var mosquito = document.createElement('img')
document.body.appendChild(mosquito)