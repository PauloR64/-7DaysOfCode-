let frutas = [];
let laticínios = [];
let congelados = [];
let doces = [];

let comida = '';
let categoria = '';

let pergunta = prompt('Você deseja adicionar uma comida na sua lista de compras, SIM OU NÃO?')

while (pergunta == 'sim') {
   
     comida = prompt('Qual comida você deseja inserir?');
     categoria = prompt('Qual categoria essa comida se encaixa?');

     if (categoria == 'frutas') {
          frutas.push(comida);
     }else if (categoria == 'laticínios') {
          laticínios.push(comida)
     }else if (categoria == 'congelados') {
          congelados.push(comida)
     }else if (categoria == 'doces') {
          doces.push(comida)
     }
     
     pergunta = prompt('Deseja adicionar mais frutas? SIM OU NÃO?')

}

alert(`Essa é a lista completa de compras. frutas: ${frutas}. laticínios: ${laticínios}. congelados: ${congelados}. doces: ${doces}.`);