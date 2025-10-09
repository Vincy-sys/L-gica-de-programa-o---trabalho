
function exibirTexto(tag){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

exibirTexto('h1', 'jogo do número secreto');
exibirTexto('p', 'escolha um número ente 1 e 10');

function verficarChute(){
    console.log('botão clicado!');
}