function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // hora = 4
    
    if(hora<12){
        msg.innerHTML = 'Bom dia'
        img.src = 'manha.png'
        document.body.style.background = '#bdc9d5'
    }else if(hora<18){
        msg.innerHTML = 'Boa tarde'
        img.src = 'tarde.png'
        document.body.style.background = '#fbad47'
    }else if(hora<=23.59){
        msg.innerHTML = 'Boa noite'
        img.src = 'noite.png'
        document.body.style.background = '#443659'
    }else{
        msg.innerHTML = 'Hora errada'
        img.src = ''
        document.body.style.background = '#d9e4ef'
    }
}