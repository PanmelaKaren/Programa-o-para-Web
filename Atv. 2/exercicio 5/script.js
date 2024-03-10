function realizarSaque() {
    var valorSaque = parseInt(document.getElementById("amount").value);

    if (valorSaque % 10 === 0) {
      document.getElementById("result").innerHTML = "Saque realizado com sucesso.";
    } else {
      document.getElementById("result").innerHTML = "Valor inválido. Digite um valor múltiplo de 10.";
    }
  }