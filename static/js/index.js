function encriptar() {
    const inputText = document.getElementById("input-text");
    const textoMensaje = document.getElementById("output-text");
    const parrafo = document.getElementById("parrafo");
    const muñeco = document.getElementById("img-principal");
    const mensajeNoEncontrado = document.getElementById("mensaje-no-encontrado");
    const botonCopiar = document.querySelector(".button-copiar");

    const mensaje = inputText.value.toLowerCase();

    if (!mensaje) {
        alert("Ingresa el texto que deseas encriptar");
        return;
    }

    textoMensaje.value = mensaje
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    textoMensaje.style.display = "block";
    botonCopiar.style.display = "block";
    inputText.value = "";
    inputText.placeholder = "Ingrese el texto aquí";
    muñeco.style.display = "none";
    mensajeNoEncontrado.style.display = "none";
    parrafo.style.display = "none";
}

function desencriptar() {
    const inputText = document.getElementById("input-text");
    const textoMensaje = document.getElementById("output-text");
    const parrafo = document.getElementById("parrafo");
    const muñeco = document.getElementById("img-principal");
    const mensajeNoEncontrado = document.getElementById("mensaje-no-encontrado");
    const botonCopiar = document.querySelector(".button-copiar");

    const mensaje = inputText.value.toLowerCase();

    if (!mensaje) {
        alert("Ingresa el texto que deseas desencriptar");
        return;
    }

    textoMensaje.value = mensaje
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e")
        .replace(/ai/g, "a");

    textoMensaje.style.display = "block";
    botonCopiar.style.display = "block";
    inputText.value = "";
    inputText.placeholder = "Ingrese el texto aquí";
    muñeco.style.display = "none";
    mensajeNoEncontrado.style.display = "none";
    parrafo.style.display = "none";
}

function copiar() {
    const textoMensaje = document.getElementById("output-text");
    textoMensaje.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles");
}