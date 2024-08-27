function validarTexto(texto) {
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\/><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;

    if (texto.match(mayusculas) || texto.match(caracteres)) {
        alert("No se permiten caracteres especiales ni mayúsculas");
        return false;
    } else if (texto.trim() === "") {
        alert("Ingrese un mensaje para encriptar");
        return false;
    } else {
        return true;
    }
}

let btnEncriptar = document.querySelector("#btn-encriptar");

btnEncriptar.addEventListener("click", function () {
    let textInput = document.querySelector("#input-texto").value;
   
    if (validarTexto(textInput)) {       
        let encriptado = encriptar(textInput);
        let resultado = document.querySelector("#msg");
        resultado.value = encriptado;
    } else {        
        document.querySelector("#input-texto").value = "";     
    }      
});

const reglas = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

function encriptar(textoIngresado) {
    let encriptado = textoIngresado;
    for (const [key, value] of Object.entries(reglas)) {
        encriptado = encriptado.replaceAll(key, value);
    }
    return encriptado;
}

let btnCopiar = document.querySelector("#btn-copy");

btnCopiar.addEventListener("click", function () {
    let copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(copiado);
    document.querySelector("#input-texto").value = "";
});

let btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click", function () {
    let textoIngresado = document.querySelector("#input-texto").value;
    let desencriptado = desencriptar(textoIngresado);

    let resultado = document.querySelector("#msg");
    resultado.value = desencriptado;
});

function desencriptar(textoIngresado) {
    let desencriptado = textoIngresado;
    for (const [key, value] of Object.entries(reglas)) {
        desencriptado = desencriptado.replaceAll(value, key);
    }
    return desencriptado;
}
