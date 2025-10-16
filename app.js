let numeroSecreto = gerarNumero;
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto('h1', 'jogo do número secreto');
exibirTexto('p', 'escolha um número ente 1 e 10');

function verficarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTexto ('h1', 'acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : tentativa
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${tentativas!}`;
        exibirTexto('p', mensagemTentativas)
    } else{
        if (chute > numeroSecreto)
        exibirTexto ('p', 'O número secreto é menor')
     else{
        exibirTexto('p', 'o número secreto é maior')
        }
        tentativas++;
    }
}
function gerarNumero(){
    return parseInt(Math.random() * 10 + 1);
}