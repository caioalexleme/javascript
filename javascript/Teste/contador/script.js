let res = document.querySelector('div#resultado')
function carregar(){
    
    res.innerHTML = 'Preencha os dados e comece a contagem!'
}

function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = '[ERRO] Verifique todos os campos'
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
if(p<=0){
res.innerHTML = 'Passo inválido, contando de 1 em 1:<br>'
p = 1   
}
        if(i<f){
        for(let contar = i; contar<=f;contar+=p){
            res.innerHTML += ` ${contar} `
        }
    }else{
        for(let contar = i; contar>=f;contar-=p){
            res.innerHTML += ` ${contar} `
        }
    }
  }
}


