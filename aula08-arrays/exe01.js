let num = [5,8,4, 2, 9, 3]

num.push(1)
console.log(num.sort())

console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

/*let pos = 0

 while (pos < num.length) {
     console.log(`A posição ${pos} do vetor guarda o valor ${num[pos]}`)
     pos++
 }
*/

for (let pos in num) {
    console.log(`A posição ${pos} do vetor guarda o valor ${num[pos]}`)
}