function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imge')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora}`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#dbc8b3'
    } else if (hora >= 12 && hora < 18) {
    // boa tarde
    img.src = 'img/tarde.png'
    document.body.style.background = '#925b3b'
    }
    else {
        //boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#3674b0'
    }
}