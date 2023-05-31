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
    numeros = numeros.sort()
    alert(numeros.sort())

    if (numeros.length > 0) {
        let quantidade = document.createElement('p') // adiciona um paragrafo para mostrar a quantiadde de elementos
        quantidade.innerHTML = `Ao todo, temos ${numeros.length} números adicionados.`
        analise.appendChild(quantidade)

        let maior = document.createElement('p') // adciona um paragrafo para mostrar o maior número
        maior.innerHTML = `O maior valor informado foi o ${numeros[numeros.length - 1]}`
        analise.appendChild(maior)
        
    } else {
        alert('Por favor, adicione pelo menos um número na lista')
    }
}

let num = [5,8,4, 2, 9, 3]

console.log(num.sort())

numeros = [5,8,4, 2, 9, 3]

console.log(numeros.sort())