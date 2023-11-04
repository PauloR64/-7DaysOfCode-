let numero = Math.round(Math.random()*10);
let resultado = 2;

while (resultado >= 0) {
    let pergunta = prompt('Adivinhe o numero');
    if (pergunta == numero) {
        alert('Acertou!');
        break;
    }else if (resultado == 0) {
        alert('Você perdeu! a resposta correta era ' + numero);
        break;
    }else {
        alert('Errado! voçê tem mais ' + resultado + ' chances');
        resultado -= 1;
    }
    
}