var butao = window.document.querySelector('input[type= button]')
butao.addEventListener('click', idade)
var imagem = document.getElementById('imagem')

var ano = document.getElementById('ano')
var homem = document.getElementById('masculino')
var mulher = document.getElementById('feminino')

var data_atual = new Date()
var ano_atual = Number(data_atual.getFullYear())

function idade() {
    ano.value = Number(ano.value)
    if ((ano.value != 0 && ano.value <= ano_atual && ano.value >= 1800) && (homem.checked == true || mulher.checked == true)) {
        var idade = ano_atual - ano.value

        var mostra_idade = document.getElementById('idade')

        if (homem.checked) {
            if (idade < 12){
                imagem.innerHTML = '<img src="imagens/crianca_h.png">'
                mostra_idade.innerHTML = `<strong>Detectamos uma criança de ${idade} anos </strong>`
            } else if (idade < 18) {
                imagem.innerHTML = '<img src="imagens/adolescente_h.png">'
                mostra_idade.innerHTML = `<strong>Detectamos um adolescente de ${idade} anos </strong>`
            } else if (idade < 70) {
                imagem.innerHTML = '<img src="imagens/homem.png">'
                mostra_idade.innerHTML = `<strong>Detectamos um homem de ${idade} anos </strong>`
            } else {
                imagem.innerHTML = '<img src="imagens/idoso.png">'
                mostra_idade.innerHTML = `<strong>Detectamos um idoso de ${idade} anos </strong>`
            }
        } else {
            if (idade < 12) {
                imagem.innerHTML = '<img src="imagens/crianca_m.png">'
                mostra_idade.innerHTML = `<strong>Detectamos uma criança de ${idade} anos </strong>`
            } else if (idade < 18) {
                imagem.innerHTML = '<img src="imagens/adolescente_m.png">'
                mostra_idade.innerHTML = `<strong>Detectamos uma adolescente de ${idade} anos </strong>`
            } else if (idade < 70) {
                imagem.innerHTML = '<img src="imagens/mulher.png">'
                mostra_idade.innerHTML = `<strong>Detectamos uma mulher de ${idade} anos </strong>`
            } else {
                imagem.innerHTML = '<img src="imagens/idosa.png">'
                mostra_idade.innerHTML = `<strong>Detectamos uma idosa de ${idade} anos </strong>`
            }
        }

    } else if (ano.value == 0 || ano.value >= ano_atual || ano.value <= 1800) {
        alert('O ano de nascimento não foi preenchido ou não está correto')
    } else{
        alert('Não foi informado o seu sexo')
    }
}