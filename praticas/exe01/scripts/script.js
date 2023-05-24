var agora = new Date()
var horario = agora.getHours()

var fundo = window.document.body
var imagem = window.document.getElementById('imagem')

if (horario < 12) {
    fundo.style.backgroundImage = 'linear'
}