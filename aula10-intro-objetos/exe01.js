let amigo = {nome: 'Eduardo', sexo: 'M', peso: 100, engordar(p = 0){
    this.peso += p
    return p
}}

console.log(`Meu amigo engordou ${amigo.engordar(20)}kg e agora está com ${amigo.peso}Kg`)