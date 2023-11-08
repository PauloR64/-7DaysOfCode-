let frutas = [];
let laticínios = [];
let congelados = [];
let doces = [];

let comida = '';
let categoria = '';

let pergunta = prompt('Você deseja adicionar uma comida na sua lista de compras, SIM OU NÃO?')

while (pergunta == 'sim') {
   
     comida = prompt('Qual comida você deseja inserir?');
     
     while (comida == "") {
          alert('por favor digite algo!')
          comida = prompt('Qual comida você deseja inserir?')
     }

     categoria = prompt('Qual categoria essa comida se encaixa?');

      if (categoria == 'frutas') {
          frutas.push(comida);
     }else if (categoria == 'laticínios') {
          laticínios.push(comida)
     }else if (categoria == 'congelados') {
          congelados.push(comida)
     }else if (categoria == 'doces') {
          doces.push(comida)
     }else (
          alert('ERRO! digite uma categoria existente')
     )
     
     let remover = prompt(`Essa é a lista de compras = frutas: (${frutas}). laticínios: (${laticínios}). congelados: (${congelados}). doces: (${doces}). voçê deseja remover algum, SIM OU NÃO?`)

     if (remover == "sim") {
          let selecione = prompt('Qual a categoria que terá um item removido da lista?')

          if (selecione == 'frutas') {
               frutas.shift();
               alert('Item removido de frutas: (' + frutas+')')
          }else if (selecione == 'laticínios') {
               laticínios.shift()
               alert('Item removido de laticínios: (' + laticínios+')')
          }else if (selecione == 'congelados') {
               congelados.shift()
               alert('Item removido de congelados: (' + congelados+')')
          }else if (selecione == 'doces') {
               doces.shift()
               alert('Item removido de doces: (' + doces + ")")
          } else (
               alert('ERRO! digite uma categoria existente')
          )
     } 

     pergunta = prompt('Deseja adicionar mais frutas? SIM OU NÃO?')

}

alert(`Essa é a lista completa de compras = frutas: (${frutas}). laticínios: (${laticínios}). congelados: (${congelados}). doces: (${doces}).`);