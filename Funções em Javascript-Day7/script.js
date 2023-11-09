function soma(num1, num2) {
    return num1 + num2;
};

function divisão(num1, num2) {
    return num1 / num2;
};

function multiplicação(num1, num2) {
    return num1 * num2;
};

function subtração(num1, num2) {
    return num1 - num2;
};

const opçãoOperação = prompt('Escolha uma opção de operação')

while (opçãoOperação == "") {
    alert('DIGITE ALGO PARA QUE O PROGRAMA FUNCIONE, E QUE SEJA UMA OPERAÇÃO EXISTENTE!')
    const opçãoOperação = prompt('Escolha uma opção de operação')
}

let falso = true


if (opçãoOperação == "soma") {
    const valor1 = parseInt(prompt('Adicione o primeiro valor que ira ser somado'))
    const valor2 = parseInt(prompt('Agora adicione o segundo'))
    const resultado = soma(valor1, valor2)
    alert(`Esse é o resultado: ${resultado}`)

} else if (opçãoOperação == 'divisão') {
    const valor1 = parseInt(prompt('Adicione o primeiro valor que ira ser dividido'))
    const valor2 = parseInt(prompt('Agora adicione o segundo'))
    const resultado = divisão(valor1, valor2)
    alert(`Esse é o resultado: ${Math.round(resultado)}`)
} else if (opçãoOperação == 'multiplicação') {
    const valor1 = parseInt(prompt('Adicione o primeiro valor que ira ser multiplicado'))
    const valor2 = parseInt(prompt('Agora adicione o segundo'))
    const resultado = multiplicação(valor1, valor2)
    alert(`Esse é o resultado: ${resultado}`)
} else if (opçãoOperação == 'subtração') {
    const valor1 = parseInt(prompt('Adicione o primeiro valor que ira ser subtraído'))
    const valor2 = parseInt(prompt('Agora adicione o segundo'))
    const resultado = subtração(valor1, valor2)
    alert(`Esse é o resultado: ${resultado}`)
} else {
    alert('Isso não é uma operacão!!! >:[')
}


