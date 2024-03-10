// Número secreto entre 1 e 100
var numeroSecreto = Math.floor(Math.random() * 100) + 1;

function verificarPalpite() {
  var palpite = document.getElementById("guess").value;

  if (palpite > 0 && palpite <= 100) {
    if (palpite == numeroSecreto) {
      document.getElementById("result").innerHTML = "Parabéns! Você acertou o número secreto.";
    } else if (palpite < numeroSecreto) {
      document.getElementById("result").innerHTML = "Tente novamente. O número secreto é maior.";
    } else {
      document.getElementById("result").innerHTML = "Tente novamente. O número secreto é menor.";
    }
  } else {
    document.getElementById("result").innerHTML = "Por favor, insira um palpite válido entre 1 e 100.";
  }
}