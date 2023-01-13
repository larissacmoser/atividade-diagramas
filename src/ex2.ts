export interface FormatoDeElemento {
  desenhar(): void;
  redimensionar(valor: number): void;
}

export class Circulo implements FormatoDeElemento {
  raio!: number;

  constructor(raio: number) {
    this.raio = raio;
  }
  desenhar(): void {
    console.log(2 * 3.1428 * this.raio);
  }
  redimensionar(valor: number): void {
    console.log(valor * 2 * 3.1428 * this.raio);
  }
}

export class Retangulo implements FormatoDeElemento {
  comprimento!: number;
  altura!: number;

  constructor(comprimento: number, altura: number) {
    this.comprimento = comprimento;
    this.altura = altura;
  }
  desenhar(): void {
    console.log(2 * this.comprimento + 2 * this.altura);
  }
  redimensionar(valor: number): void {
    console.log(valor * (2 * this.comprimento + 2 * this.altura));
  }
}
