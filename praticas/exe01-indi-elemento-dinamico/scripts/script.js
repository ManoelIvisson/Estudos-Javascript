function criaBotoes() {
    var botao = window.document.createElement('input') // cria o elemento input

    botao.setAttribute('type', 'button') // adiciona o tipo de input, que no caso é button
    botao.setAttribute('value', 'Botão') //adiciona o texto do input

    window.document.body.appendChild(botao) // adiciona o botao no corpo do HTML
}