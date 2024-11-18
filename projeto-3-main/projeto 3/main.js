const numeroSenha=document.querySelector('.parametro-senha-texto');
let tamanhoSenha=6;
numeroSenha.textContent=tamanhoSenha;
const botoes=document.querySelectorAll('.parametro-senha-botao');
botoes[0].onclick=diminuirTamanho;
function diminuirTamanho(){
    if(tamanhoSenha>6){
    tamanhoSenha--;
    numeroSenha.textContent=tamanhoSenha;
    }
}
botoes[1].onclick=aumentarTamanho;