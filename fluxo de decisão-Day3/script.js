const pergunta = prompt('Quer seguir para área de Front-End ou de Back-End?');

let linguagens = [];


if (pergunta !== 'Front-End' && pergunta !==  'Back-End') {
    alert('EROR!')
} else {
    if (pergunta == 'Front-End') {
        const reactVue = prompt('Quer aprender React ou aprender Vue?')
        const escolha = prompt(`Seguir se especializando em ${reactVue} ou seguir se desenvolvendo para se tornar Fullstack? digite 1 para ${reactVue} ou 2 para Fullstack`)

    } else if (pergunta == 'Back-End'){
        const javaC =prompt('Quer aprender C# ou aprender Java?')
        const escolha = prompt(`Seguir se especializando em ${javaC} ou seguir se desenvolvendo para se tornar Fullstack? digite 1 para ${reactVue} ou 2 para Fullstack`)
    }
}
let ordem = 'Primeira'
let num = 0
while (num < 2) {
    
    const tecnologia = prompt('Tem mais alguma tecnologia que você gostaria de aprender, cite 2? essa é a ' + ordem)
    linguagens.push(tecnologia);
    num++
    ordem =  'segunda'
}

alert(`Boas escolhas ${linguagens}`);