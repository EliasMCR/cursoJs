function soma(){
    var nn1 = document.getElementById('ib1')
    var nn2 = document.getElementById('ib2')
    var nn3 = document.getElementById('ib3')
    var res = document.getElementById('contagem')

    if (nn1.value.length == 0 || nn2.value.lenght == 0 || nn3.value.lenght == 0){
        window.alert('As caixas precisam ser preeenchidas')
    } else {
        window.alert('Tudo certo')
    }
}