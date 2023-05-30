var botao = document.getElementById('botao')
botao.addEventListener('click', contar)

var valorIncio = document.getElementById('inicio')
var valorFim = document.getElementById('fim')
var valorPasso = document.getElementById('passo') 

var localConta = document.querySelector('div#contagem > p')

function contar(){
    localConta.innerHTML = 'Contando... </br>'
    
    if (valorIncio.value == '' || valorFim.value == '' || valorPasso.value == '') {
        localConta.innerHTML = 'Impossível contar'
    } else {
        let inicio = Number(valorIncio.value)
        let fim = Number(valorFim.value)
        let passo = Number(valorPasso.value)

        if (passo <= 0) {
            alert('Impossível contar de 0 em 0 ou com número negativo, o valor foi mudado para 1')
            passo = 1
        }

        if (inicio < fim) { //Contagem crescente
            for (let c = inicio; c <= fim; c += passo) {
                localConta.innerHTML += ` ${c} &#x1F449; `
            }
        } else { //Contagem decrescente
            for (let c = inicio; c >= fim; c -= passo) {
                localConta.innerHTML += ` ${c} &#x1F449; `
            }
        }
        localConta.innerHTML += 'Fim &#x1F3C1;'
    }
}
