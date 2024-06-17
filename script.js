const textArea = document.querySelector(".text-area");
const resultedo = document.querySelector(".resultado");

/*  La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */


//Encriptar//

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    resultedo.value = textoEncriptado
    textArea.value = ""
}


function encriptar(springEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    springEncriptado = springEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(springEncriptado.includes(matrizCodigo[i][0])){
            springEncriptado = springEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return springEncriptado
}

//Desencriptar//

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    resultedo.value = textoEncriptado
    textArea.value = ""
}

function desencriptar(springDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    springDesencriptado = springDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(springDesencriptado.includes(matrizCodigo[i][1])){
            springDesencriptado = springDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return springDesencriptado
}

//Copiar//

function copiarResultado() {
    let resultado = document.getElementById("result__text");
    let button = document.getElementById("btn__copiar");

    navigator.clipboard.writeText(resultado.value).then(() => {
        button.textContent = "Copiado";
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}