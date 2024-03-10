function classificarTriangulo() {
    var lado1 = parseFloat(document.getElementById("side1").value);
    var lado2 = parseFloat(document.getElementById("side2").value);
    var lado3 = parseFloat(document.getElementById("side3").value);

    // Verificar se os lados formam um triângulo válido
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
      if (lado1 === lado2 && lado2 === lado3) {
        document.getElementById("result").innerHTML = "O triângulo é equilátero.";
      } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        document.getElementById("result").innerHTML = "O triângulo é isósceles.";
      } else {
        document.getElementById("result").innerHTML = "O triângulo é escaleno.";
      }
    } else {
      document.getElementById("result").innerHTML = "Os lados fornecidos não formam um triângulo válido.";
    }
  }