function contar() {
    var ini = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')

    if(ini.value,length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('Os campos devem ser preenchidos')
    } else {
        window.alert('Tudo ok')
    }
    }