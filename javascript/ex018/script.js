let numero = document.querySelector('input#numero')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
    
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
        if(isNumero(numero.value) && !inLista(numero.value, valores)){
            valores.push(Number(numero.value))
            let item = document.createElement('option')
            item.innerHTML = `Valor ${numero.value} adicionado!` 
            lista.appendChild(item)
            res.innerHTML = ''

        }else{
            alert('Valor inválido ou ja encontrado na lista')
        }
        numero.value = '' // Para esvaziar o campo 'input numero' após ser adicionado a lista
        numero.focus() //Para selecionar o 'input numero' após ser esvaziado
}

function finalizar(){
 if(valores.length == 0){
     res.innerHTML = '[ERRO] Lista vazia, adicione dados antes de finalizar'
 } else{
     let tot = valores.length
     let maior = valores[0]
     let menor = valores[0]
     let soma = 0
     for(let pos in valores){
         soma += valores[pos]
         if(valores[pos] > maior){
             maior = valores[pos]
         }
         if(valores[pos]< menor){
             menor = valores[pos]
         }

     }
     let media = soma/tot
     res.innerHTML = `<p>Ao todo temos ${tot} valor(es) cadastrado(s)!</p>`
     res.innerHTML += `<p>O maior valor é ${maior}!</p>`
     res.innerHTML += `<p>O menor valor é ${menor}!</p>`
     res.innerHTML += `<p>A soma dos valores é ${soma}!</p>`
     res.innerHTML += `<p>A média dos valores é ${media}!</p>`
    }
}