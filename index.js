var tipoCifra = document.querySelector('#tipoCifra')
var divIncremento = document.querySelector("#divIncremento")
var mensagem = document.querySelector("#mensagem");
var resultado = document.querySelector("#divResultado");
var codificar = document.querySelector("#codificar");
var decodificar = document.querySelector("#decodificar");
var incremento = document.querySelector("#incremento");


tipoCifra.addEventListener('change', function (e) {
    if (tipoCifra.value == "cifradecesar") {
        divIncremento.style.display = 'block'
    } else {
        divIncremento.style.display = 'none'
    }
})

codificar.addEventListener('click', function (e) {
    var result = "";
    if (tipoCifra.value == "cifradecesar") {
        result = mensagem.value;
        for (var i = 0; i < incremento.value; i++) {
            result = codificaCifraDeCesar(result);
        }

    } else {
        result = btoa(mensagem.value);

    }
    resultado.innerHTML = `Mensagem codificada: ${result}`;
})

decodificar.addEventListener('click', function (e) {
    var result = "";
    if (tipoCifra.value == "cifradecesar") {
        result = mensagem.value;
        for (var i = 0; i < incremento.value; i++) {
            result = decodificaCifraDeCesar(result);
        }
    } else {
        result = atob(mensagem.value);

    }
    resultado.innerHTML = `Mensagem decodificada: ${result}`;
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