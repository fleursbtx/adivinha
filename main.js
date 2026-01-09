var numeroSecreto = parseInt(Math.random() * 100);
var botaoChute = document.getElementById("chutar");
var botaoJogar = document.getElementById("jogar");
var valor = document.getElementById("valor");
var secao = document.getElementById("flex");

botaoJogar.addEventListener("click", function() {
  location.reload();
});

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  
  if(chute == numeroSecreto){
    resultado.innerHTML = "Parabéns, você acertou";
    botaoChute.style.display = 'none';
    valor.style.display = 'none';
    botaoJogar.style.display = 'block';
    secao.style.gap = '0';

  } else if (chute > 100 || chute < 0) {
    window.alert("Valor Inválido! Você deve digitar um número de 0 a 50");
  } else if(chute > numeroSecreto){
    resultado.innerHTML = "Que pena, você errou, o número secreto é menor que " + chute + ". Tente novamente!";
  } else {
    resultado.innerHTML = "Que pena, você errou, o número secreto é maior que " + chute + ". Tente novamente!";
  }

}
