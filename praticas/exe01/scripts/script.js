var agora = new Date()
var horario = agora.getHours()

var fundo = window.document.body
var imagem = window.document.getElementById('imagem')

if (horario < 12) {
    fundo.style.backgroundImage = 'linear-gradient(to right, orange, yellow)'
    imagem.
} else if (horario <= 18) {
    fundo.style.backgroundImage = 'linear-gradient(to bottom, darkorange, orange)'
} else {
    fundo.style.backgroundImage = 'linear-gradient(to right, gray, black)'
}