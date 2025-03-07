// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let valorUsuario = document.getElementById('amigo').value;
    if (valorUsuario == '') {
       alert('Por favor, inserte un nombre'); 
       return;    
    }
    else {
        amigos.push(valorUsuario);
        limpiarCaja();
        actualizarLista();
    }
    return;
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }

}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Ingrese al menos un amigo');
        return;
    } else{
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es ${amigoSorteado}`;   
    }
}

function reiniciarSorteo() {
    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
    resultado.innerHTML = '';
    amigos.length = 0;
}