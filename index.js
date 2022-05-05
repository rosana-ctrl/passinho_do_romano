var tipoCifra = document.querySelector('#tipoCifra')
var divIncremento = document.querySelector("#divIncremento")
var mensagem = document.querySelector("#mensagem");
var divResultado = document.querySelector("#divResultado");
var incremento = document.querySelector("#incremento");
var executar = document.querySelector("#executar");


tipoCifra.addEventListener('change', function (e) {
    if (tipoCifra.value == "cifradecesar") {
        divIncremento.style.display = 'block'
    } else {
        divIncremento.style.display = 'none'
    }
    divResultado.innerHTML = '';
    mensagem.value = '';
})

function codificar(tipoCifra, mensagem, incremento) {
    var result = "";
    if (tipoCifra == "cifradecesar") {
        result = mensagem;
        for (var i = 0; i < incremento; i++) {
            result = codificaCifraDeCesar(result);
        }
    } else {
        result = btoa(mensagem);
    }
    return `Mensagem codificada: ${result}`;

}

function decodificar(tipoCifra, mensagem, incremento) {
    var result = "";
    if (tipoCifra == "cifradecesar") {
        result = mensagem;
        for (var i = 0; i < incremento; i++) {
            result = decodificaCifraDeCesar(result);
        }
    } else {
        result = atob(mensagem);
    }
    return `Mensagem decodificada: ${result}`;
}

executar.addEventListener('click', function (e) {
    var resultado = '';
    var metodo = document.querySelector('input[name="metodo"]:checked').value;
    if (metodo == "codificar") {
        resultado = codificar(tipoCifra.value, mensagem.value, incremento.value);
    } else {
        resultado = decodificar(tipoCifra.value, mensagem.value, incremento.value);
    }
    divResultado.innerHTML = resultado;

})

function codificaCifraDeCesar(str) {
    str = str.toUpperCase().split("")

    str = str.map(char => {
        var code = char.charCodeAt(0)

        if ((code >= 65 && code <= 89))
            code += 1
        else if (code >= 90)
            code = 65

        return String.fromCharCode(code)
    })

    return str.join("")
}

function decodificaCifraDeCesar(str) {

    str = str.toUpperCase().split("")

    str = str.map(char => {
        var code = char.charCodeAt(0)

        if ((code >= 65 && code <= 89))
            code -= 1
        else if (code >= 90)
            code = -65

        return String.fromCharCode(code)
    })

    return str.join("")
}