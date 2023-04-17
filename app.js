
/*document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault()
    const entrada = document.getElementById('textarea').value
})*/

let textoEncriptado = ''

const divTextoEncriptado = document.getElementById("texto-encriptado");
const botonEncriptar = document.getElementById('encriptar');
const botonDesencriptar = document.getElementById('desencriptar');

botonEncriptar.addEventListener('click', () => {

    const texto = document.getElementById('textarea').value

    textoEncriptado = encriptarTexto(texto)
    divTextoEncriptado.classList.remove('display-5');
    divTextoEncriptado.innerHTML = `<h2 class="text-center my-5">${textoEncriptado}</h2>`;
});

botonDesencriptar.addEventListener('click', () => {

    divTextoEncriptado.classList.remove('display-5');
   
    if (!textoEncriptado) {
        const texto = document.getElementById('textarea').value
        const textoDesencriptado = desencriptarTexto(texto)
        divTextoEncriptado.innerHTML = `<h2 class="text-center my-5">${textoDesencriptado}</h2>`;
        return
    }
    const textoDesencriptado = desencriptarTexto(textoEncriptado)
    divTextoEncriptado.innerHTML = `<h2 class="text-center my-5">${textoDesencriptado}</h2>`;
    // console.log(textoDesencriptado)
});


const encriptarTexto = (texto) => {

    const keys = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };
    let textoEncriptado = ""

    for (let index = 0; index < texto.length; index++) {
        let letra = texto[index];// g, a, t, o 

        if (keys[letra]) {

            textoEncriptado += keys[letra];
        } else {
            textoEncriptado += letra;
        }

    }
    return textoEncriptado;


}

const desencriptarTexto = (texto) => {

    let textoFinal = ""

    console.log(texto.length);
    for (let i = 0; i < texto.length; i++) {
        console.log(i);

        if (texto[i] == 'a') {
            textoFinal += 'a';
            i++;
        } else if (texto[i] == 'e') {
            textoFinal += 'e';
            i = i + 4;
        } else if (texto[i] == 'i') {
            textoFinal += 'i';
            i = i + 3;
        } else if (texto[i] == 'o') {
            textoFinal += 'o';
            i = i + 3;
        } else if (texto[i] == 'u') {
            textoFinal += 'u';
            i = i + 3;
        } else {
            textoFinal += texto[i]
        }

    }

    return textoFinal

};



const copiarTexto = () => {

    const texto = document.getElementById('texto-encriptado').textContent;

    if (texto) {
        navigator.clipboard.writeText(texto)
            .then(() => {
                // console.log('Texto copiado al portapapeles: ' + textoEncriptado);
                Swal.fire({
                    position: 'top-start',
                    icon: 'success',
                    title: 'Copiado a portapapeles',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
    }

}
