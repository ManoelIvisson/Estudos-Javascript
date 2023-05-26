var butao = window.document.querySelector('input[type= button]')
butao.addEventListener('click', idade)
var imagem = document.getElementById('imagem')

var ano = document.getElementById('ano')
var homem = document.getElementById('masculino')
var mulher = document.getElementById('feminino')

var data_atual = new Date()
var ano_atual = Number(data_atual.getFullYear())

function idade() {
    if (ano.value != '' && (homem.checked == true || mulher.checked == true)) {
        var idade = ano_atual - Number(ano.value)

        if (homem.checked && idade < 12) {
            imagem.innerHTML = '<img src="imagens/crianca_h.png">' 
        }

    } else if (ano.value == '') {
        alert('Não foi informado o ano de nascimento')
    } else{
        alert('Não foi informado o seu sexo')
    }
}