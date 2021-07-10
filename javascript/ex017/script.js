function carregar(){
    let tab = document.getElementById('seltab') //Criando variável para select = 'seltab' do html
    let item = document.createElement('option')//Criando elemento 'option' com id: 'item' dinamicamente pelo js
    tab.appendChild(item)//Adcionando elemento 'item' ao objeto 'tab' dinamicamente pelo js
    item.innerHTML = 'Digite um número acima: ' // Criando um texto para o elemento 'item' dinamicamente pelo js
    
}



function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
if(num.value.length == 0){
    alert('Por favor, digite um número!')
    
}else{
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while(c<=10){
        let item = document.createElement('option')//Criando elemento 'option' com id: 'item' dinamicamente pelo js
        tab.appendChild(item)//Adicionando elemento 'item' ao objeto 'tab' dinamicamente pelo js
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}` //Adicionando 'value' ao elemento 'item('option') dinamicamente pelo js.
        // ('value') é usado para enviar valores pro PHP.
        
        c++ //adicionando valor +1 ao operando 'c' e retornando ao 'while' até que 'c' seja <=10  

    }
}
    
}