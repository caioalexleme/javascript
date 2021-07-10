function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML ='Erro faltam dados'
        //alert('[ERRO] faltam dados!')
    }else{
        res.innerHTML = 'Contando: <br>'
let i = Number(inicio.value)
let f = Number(fim.value)
let p = Number(passo.value)
if(p <= 0){
    res.innerHTML='Passo inválido, contando de 1 em 1:<br>'
    p = 1
}
if(i<f){
for(let c = i; c<=f; c+=p){
    res.innerHTML += ` ${c} `
}
}else{
    for(let c = i; c>=f; c-= p){
        res.innerHTML += ` ${c} `
}
}
}
}