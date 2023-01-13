export default class Item {
  valor!: number;
  nome!: string;
  descricao?: string;
}

export class Pedido {
  items!: Array<Item>;
  valorTotal!: number;

  constructor(items: Array<Item>, valorTotal: number) {
    this.items = items;
    this.valorTotal = valorTotal;
  }

  mostrarValorTotal() {
    let soma = this.items.reduce((current, item) => {
      return current + item.valor;
    }, 0);
    console.log(soma);
  }
}
