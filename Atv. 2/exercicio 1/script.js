function calcularIMC() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight > 0 && height > 0) {
      var imc = weight / (height * height);
      var result = "Seu IMC é: " + imc.toFixed(2);

      if (imc < 18.5) {
        result += " - Abaixo do peso";
      } else if (imc < 24.9) {
        result += " - Peso normal";
      } else if (imc < 29.9) {
        result += " - Excesso de peso";
    } else if (imc < 34.9) {
        result += " - Obesidade grau I";
    } else if (imc < 39.9) {
        result += " - Obesidade grau II";
      } else {
        result += " - Obesidade grau III";
      }

      document.getElementById("result").innerHTML = result;
    } else {
      document.getElementById("result").innerHTML = "Por favor, insira valores válidos para peso e altura.";
    }
  }