let nomes = ['Manoel', 'Ivanaldo', 'Yasmin', 'Cristina']

let pos = nomes.indexOf('Cristina')

if (pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O nome ${nomes[pos]} está na posição ${pos}`)
}
