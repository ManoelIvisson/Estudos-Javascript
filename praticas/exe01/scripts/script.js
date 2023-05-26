function carregar() {
    var agora = new Date()
    var horario = agora.getHours()

    var fundo = window.document.body
    var paragrafo = window.document.querySelector('div > p')
    var imagem = window.document.getElementById('imagem')

    paragrafo.innerHTML = `Agora são <strong>${horario}</strong> horas`

    if (horario < 12) {
        fundo.style.backgroundImage = 'linear-gradient(to right, orange, yellow)'
        imagem.setAttribute('src', 'imagens/manha.png')
    } else if (horario < 18) {
        fundo.style.backgroundImage = 'linear-gradient(to bottom, darkorange, orange)'
        imagem.setAttribute('src', 'imagens/tarde.png')
    } else {
        fundo.style.backgroundImage = 'linear-gradient(to right, dimgray, black)'
        imagem.setAttribute('src', 'imagens/noite.png')
    }
}
