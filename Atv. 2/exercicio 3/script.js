function verificarMaioridade() {
    var dataNascimento = document.getElementById("dob").value;
    var dataNascimentoObj = new Date(dataNascimento);
    var hoje = new Date();

    var idade = hoje.getFullYear() - dataNascimentoObj.getFullYear();

    // Verificar se o aniversário já ocorreu este ano
    if (hoje.getMonth() < dataNascimentoObj.getMonth() || (hoje.getMonth() === dataNascimentoObj.getMonth() && hoje.getDate() < dataNascimentoObj.getDate())) {
      idade--;
    }

    if (idade >= 18) {
      document.getElementById("result").innerHTML = "Você é maior de idade.";
    } else {
      document.getElementById("result").innerHTML = "Você é menor de idade.";
    }
  }