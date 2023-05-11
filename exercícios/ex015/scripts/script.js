function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var bano = document.getElementById('iano')
    //var sexo = document.getElementById('isexo')
    var res = document.getElementById('resul')

    if (bano.value.length == 0 || bano > ano) {
        window.alert('[ERRO] Verifique a data e tente novamente')
    }
    else {
        var vsex = document.getElementById('sexo')
        var idade = ano - Number(bano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 

        if (isexo[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) { // criança
            img.setAttribute('src', 'img/bebem.png')
            }
            else if (idade >= 10 && idade < 21) {// jovem
                img.setAttribute('src', 'img/jovemm.png')
            }
            else if (idade >= 21 && idade < 50) { //adulto
                img.setAttribute('src', 'img/adultom.png')
            }
            else {
                img.setAttribute('src', 'img/idosom.png')
            }
        }
        else if(isexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/bebe-f.png') // criança
            }
             else if(idade >= 10 && idade < 21) {
                img.setAttribute('src','img/jovem-f.png') // jovem
             }
             else if(idade >= 21 && idade < 50) {
                img.setAttribute('src', 'img/adulto-f.png')
             }
             else {
                img.setAttribute('src', 'img/idoso-f.png')
             }
        }
         res.style.textAlign = 'center'
         res.innerHTML = `Você tem ${idade} anos e é ${genero}`
         res.appendChild(img)
        

    }
}