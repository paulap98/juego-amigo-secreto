// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; 

function agregarAmigo() {

    let nombreAmigo = document.getElementById('amigo').value;


    if (nombreAmigo === "") {

        alert("Por favor, inserte un nombre.");
        return;
        
    }

    amigos.push(nombreAmigo);
    console.log(amigos);
    document.getElementById('amigo').value = "";
    
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = amigos[i]; 
        lista.appendChild(li);
        
    }
}

function nombreAleatorio() {

    if (amigos.length === 0) {
        alert ("No hay amigos disponibles para sorteo.");
        return;
    }
    
    let aleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[aleatorio]; 
    //alert(`El amigo secreto sorteado es: ${amigoSorteado}`);
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
}

