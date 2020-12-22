   export default class Pessoa {  //Exporta como padrão, pode importar com qualquer nome e sem chaves
       constructor(nome, sobrenome){
            this.nome;
            this.sobrenome;
       }
   }

   export const nome = 'irineu'; //Tem que importar entre chaves e com o mesmo nome
   const idade = 2;
   const pontuacao = 6;
   export {idade, pontuacao};
   //export {idade as default, pontuacao}