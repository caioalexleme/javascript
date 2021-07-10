let num = [9,6,8,5,7]//Vetor com 5 posições (0,1,2,3,4)
console.log('O vetor é: let num = ' + '['+num+']')
console.log('')
console.log(`O vetor tem ${num.length} posições.`)//'.length' Conta o número de posições do vetor
console.log('')
console.log('Alterando o valor (5) da posição `3` pelo valor (6):')
console.log(num)
num[3] = 6 //Altera o valor '5' da posição '3' pelo valor '6'
console.log(num)
console.log('')
console.log(`O valor da posição '0' é: (${num[0]})`)// 'num[0]' exibe o valor da posição '0' no vetor 'num'
console.log(num)
console.log('')
console.log('Adicionando uma nova posição com o valor (3)')
num.push(3) //Adiciona uma nova posição com o valor '3'
console.log(num)

console.log(`O vetor tem ${num.length} posições.`)//.lenght conta o nº de posições do vetor

console.log('')
console.log('Ordenando os valores nas posições do maior para o menor')
num.sort()//'num.sort()'Ordena os valores nos índices do menor para o maior
console.log(num)
console.log('')

console.log('Usando `for` para simplificar a programação')
for(let pos = 0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log('')
console.log('Usando `for in`. Maneira mais simplificada, mesmo resultado.')
for(let pos in num){ //Maneira mais simplificada. Mesmo resultado de cima. Usando 'for in'. 
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
console.log('')

console.log('Usando `indexOf()` para indicar a posição de algum valor desejado')
let n1 = 3
if(num.indexOf(n1) == -1){
console.log('Número inválido')
}else{
console.log(`O valor ${n1} está na posição ${num.indexOf(n1)}`)
}
//console.log(num.indexOf(9))

console.log('')

