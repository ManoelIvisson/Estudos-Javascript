let numeros = []
let analise = document.getElementById('analise')

//Função que adiciona o número no array números e no <select>
function adicionarNumero() {
    analise.innerHTML = ''

    let numero = document.getElementById('num')
    let num = Number(numero.value)
    let lista = document.querySelector('div#listagem > select')
    
    if (numero.length == 0 || numeros.indexOf(num) != -1 || (num < 0 || num > 100)) {
        alert('Valor não informado ou já adicionado a lista')
    } else {
        numeros.push(Number(num)) //adiciona o número do input no array numeros
        
        let item = document.createElement('option')
        item.text = `O valor ${numero.value} foi adicionado na lista`

        lista.appendChild(item) //apresenta visualmente que o número foi adicionado no <select>
    }
}

//Função que analisará os números contidos no vetor: numeros
function analisarNumeros() {    
    analise.innerHTML = ''
    numeros = numeros.sort(compararNumeros)
    let soma = 0

    if (numeros.length > 0) {
        // adiciona um paragrafo para mostrar a quantiadde de elementos
        analise.innerHTML += `<p>Ao todo, temos ${numeros.length} números adicionados.</p>`

        // adciona um paragrafo para mostrar o maior número
        analise.innerHTML += `<p>O maior valor informado foi o ${numeros[numeros.length - 1]}.</p>`

        //adiciona um paragrafo para mostrar o mnenor número
        analise.innerHTML += `<p>O menor valor informado foi o ${numeros[0]}.</p>`

        for (c = 0; c < numeros.length; c++) {
            soma += numeros[c]
        }
        
        let media = soma/numeros.length

        //adiciona um parágrafo para mostrar a soma dos valores
        analise.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`

        //adiciona um parágrafo para mostrar a média dos valores
        analise.innerHTML += `<p>A média entre todos os valores é ${media}.</p>`

    } else {
        alert('Por favor, adicione pelo menos um número na lista')
    }
}

function compararNumeros(a, b) {
    return a - b
}
