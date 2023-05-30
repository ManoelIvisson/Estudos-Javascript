function calculaTabuada() {
    let valorStr = document.getElementById('num')
    let valor = Number(valorStr.value)
    let tabuada = document.querySelector('div#div_tabuada > select')

    if (valorStr.value != ''){
        tabuada.innerHTML = ''

        for (c = 1; c <= 10; c++) {
            let multiplicacao = document.createElement('option')
            multiplicacao.value = `tab${c}`
            let calculo = document.createTextNode(`${valor} x ${c} = ${valor * c}`)
            
            multiplicacao.appendChild(calculo)
            tabuada.appendChild(multiplicacao)
        }
    } else {
        alert('Por favor, digite um valor')
    }
}