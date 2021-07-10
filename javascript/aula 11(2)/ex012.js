var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}h `)
if(hora<5){
    console.log('Boa magruga!')
}else if(hora<=12){
    console.log('Bom dia')
}else if(hora <18){
    console.log('Boa tarde')
}else if(hora<=23.59){
    console.log('Boa noite')
}else{
    console.log('Digite a hora correta')
}
