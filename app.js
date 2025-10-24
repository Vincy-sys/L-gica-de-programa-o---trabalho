let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.Speak(texto,'Brazilian Portuguese Female', {rate:1.2}); 
}

function exibirMensagem(){
    exibirTexto('h1', 'jogo do número secreto');
    exibirTexto('p', 'escolha um número ente 1 e 10');
}

exibirMensagem();

function verficarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTexto ('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTexto('p', mensagemTentativas);
        document.getElementyById('reiniciar').removeAttribute ('disabled');
    } else{
        if (chute > numeroSecreto )
        exibirTexto ('p', 'O número secreto é menor');
     else{
        exibirTexto('p', 'o número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaNumerosSorteados.length;

        if (quantidadeDeElementos == numeroLimite) {
        listaNumerosSorteados = [];
        }
        if (listaNumerosSorteados.includes(numeroEscolhido)){
            return gerarNumero();
        }
        else{
            listaNumerosSorteados.push(numeroEscolhido);
            console.log(listaNumerosSorteados);
            return numeroEscolhido;
        }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}