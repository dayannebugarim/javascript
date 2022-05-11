function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (f_ano.value.length == 0 || Number(f_ano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    }
    else {
        var f_sex =document.getElementsByName('radsex')
        var idade = ano - Number(f_ano.value)
        //res.innerHTML = `Idade calculada: ${idade} anos`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (f_sex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','foto-bebe-m.png')
            }
            else if (idade < 21) {
                // Jovem
                img.setAttribute('src','foto-jovem-m.png')
            }
            else if (idade < 50) {
                // Adulto
                img.setAttribute('src','foto-adulto-m.png')
            }
            else {
                // Idoso
                img.setAttribute('src','foto-idoso-m.png')
            }
        }
        else if (f_sex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','foto-bebe-f.png')
            }
            else if (idade < 21) {
                // Jovem
                img.setAttribute('src','foto-jovem-f.png')
            }
            else if (idade < 50) {
                // Adulto
                img.setAttribute('src','foto-adulto-f.png')
            }
            else {
                // Idoso
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}