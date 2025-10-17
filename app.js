let listaNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumero;
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagem(){
    exibirTexto('h1', 'jogo do número secreto');
    exibirTexto('p', 'escolha um número ente 1 e 10');
}


function verficarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTexto ('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : tentativa;
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${tentativas!}`;
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
    let NumeroEscolhido parseInt(Math.random() * numeroLimite + 1);
    let QuantidadeDeElementos = listaNumerosSorteados.length;

        if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
        }
        if (listaDeNumerosSorteados.includes(NumeroEscolhido){
            return gerarNumero();
        })
        } else{
            listaNumerosSorteados.push;
            console.log()
            return NumeroEscolhido;
        }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = GerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}