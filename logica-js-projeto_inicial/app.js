alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
    console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o número não foi = a n.s.
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se a data for correta 
    if (chute == numeroSecreto) {
        break;
    } else {
    if(numeroSecreto > chute) {
        alert(`O número secreto é maior que ${chute}`);
    } else {
        alert(`O número secreto é menor que ${chute}`);
    }
    // tentativas = tentativas + 1;
    tentativas++;
}
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Você descobriu a data mais importante! ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) {
//     alert(`Você descobriu a data mais importante!${numeroSecreto} com ${tentativas} tentativas!`);
// } else {
//     alert(`Você descobriu a data mais importante!${numeroSecreto} com ${tentativas} tentativa!`);
// }