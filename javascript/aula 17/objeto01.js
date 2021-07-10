let amigo = {nome: 'Caio', sexo: 'M', peso: 54, engordar(p=0){
    console.log(`Engordou ${Number(p)}Kg;`)
    this.peso+=p
}}

console.log(`${amigo.nome}, é do sexo '${amigo.sexo}' e pesava: ${amigo.peso}Kg;`)
amigo.engordar(4)
console.log(`Agora seu peso é ${amigo.peso}Kg.`)