// Exercício 1
//import { Pedido } from "./ex1";

import { Subway } from "./ex4";

// import { Circulo, Retangulo } from "./ex2";

// let minhaLista = new Pedido(
//   [
//     { valor: 10, nome: "livro" },
//     { valor: 15, nome: "chocolate" },
//   ],
//   10
// );
// minhaLista.mostrarValorTotal();
//Exercício 2
// let meuCirculo = new Circulo(2);
// meuCirculo.desenhar();
// meuCirculo.redimensionar(2);

// let meuRetangulo = new Retangulo(2, 4);
// meuRetangulo.desenhar();
// meuRetangulo.redimensionar(4);
//Exercício 4
let meuRest = new Subway(
  "Subway",
  "Rua Princesa Isabel 45, Taquara",
  "08:00 às 16:00"
);
meuRest.mostrarDados();
meuRest.escolherSanduiche(
  "Pão parmesão com orégano, tomate, alface, queijo cheddar, frango cream cheese"
);
