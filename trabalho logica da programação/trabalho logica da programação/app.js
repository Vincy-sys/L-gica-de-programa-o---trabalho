let numeroSecreto = 7;

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
        let palavraTentativa = tentativas > 1 ? 'tentativas'
        let mensagem = `você descobriu o número secreto com ${tentativas} tentativas!`;
        exibirTexto('p', 'você descobriu o número secreto!')
    } else{
        if (chute > numeroSecreto)
        exibirTexto ('p', 'O número secreto é menor')
     else{
        exibirTexto('p', 'o número secreto é maior')
        }
    }
}
function gerarNumero(){
    return parseInt(Math.random() * 10 + 1);
}
