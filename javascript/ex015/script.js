function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var resultado = document.getElementById('resultado')
    

    if(fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value)<1900){
        alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano -  Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade<=5){
                //Criança
                img.setAttribute('src', 'bbh.png')
            }else if(idade < 18){
                //Jovem
                img.setAttribute('src', 'adh.png')
            }else if(idade<40){
                //adulto
                img.setAttribute('src', 'homem.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else{
            genero = 'Mulher'
            if(idade<=5){
                //Criança
                img.setAttribute('src', 'bbm.png')
            }else if(idade < 18){
                //Jovem
                img.setAttribute('src', 'adm.png')
            }else if(idade<40){
                //adulto
                img.setAttribute('src', 'mulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.style.textAlign = 'center'
        resultado.appendChild(img)
    }

}