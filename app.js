let amigos = [];
function adicionarAmigo() {
    
    let nome = document.querySelector('#amigo').value;

    if (nome === '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nome);

        document.querySelector('#amigo').value = '';

        atualizarLista();
    }
}


function atualizarLista() {
   
    let lista = document.querySelector('#listaAmigos');
    
   lista.innerHTML = "";

    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}


function sortearAmigo() {
   
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para o sorteio.");
        return;
    }

  
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

   
    let amigoSorteado = amigos[indiceAleatorio];

    
    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
