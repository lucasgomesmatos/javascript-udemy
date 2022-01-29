import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const checkMaiusculas = document.querySelector('.check-maiusculas');
const checkMinusculas = document.querySelector('.check-minusculas');
const checkNumeros = document.querySelector('.check-numeros');
const checkSimbolos= document.querySelector('.check-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
  gerarSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    qtdCaracteres.value,
    checkMaiusculas.checked,
    checkMinusculas.checked,
    checkNumeros.checked,
    checkSimbolos.checked,
  );

  return senha || 'Nada selecionado!';
}



