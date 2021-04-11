var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite de 1 a 10 o número secreto que estou pensando"))

  if (numeroSecreto == chute) { 
     alert ("ACERTOU!")
  break 
  } else if (chute > numeroSecreto) {
    alert ("O número secreto é menor")
    tentativas = tentativas - 1
  } else if (chute < numeroSecreto) {
    alert ("O número secreto é maior")
    tentativas = tentativas - 1
  }
}

if (chute != numeroSecreto) {
  alert("Suas tentativas acabaram. O número secreto era " + numeroSecreto)
}
