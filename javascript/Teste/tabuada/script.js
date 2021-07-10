    let tabuada = document.getElementById('tabuada')
    let item = document.createElement('option')
    let footer = document.getElementById('footer')
    let itemf = document.createElement('p')
    let numero = document.getElementById('numero')

    function carregar(){
    
    tabuada.appendChild(item)
    item.innerHTML = 'Digite um número acima: '

    
    footer.appendChild(itemf)
    itemf.innerHTML = '&copy; Teste tabuada'
}

function gerar(){
    let n = Number(numero.value)
    let tabuada = document.getElementById('tabuada')
    
    if(numero.value.length == 0 ){
        alert('[x]Por favor, digite um número: ')
    }
    else{
        let c = 1        
        tabuada.innerHTML = ''
        
        while(c <=10 ){
        item = document.createElement('option')
        tabuada.appendChild(item)            
        item.innerHTML = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}` //Cria um 'value' para o elemento 'item' dinamicamente pelo js, serve para 'PHP'
        c++
        }
        
        }
    }
