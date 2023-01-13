export class Restaurante {
  nome!: string;
  endereco!: string;
  horarioAtendimento!: string;

  constructor(nome: string, endereco: string, horarioAtendimento: string) {
    this.nome = nome;
    this.endereco = endereco;
    this.horarioAtendimento = horarioAtendimento;
  }

  mostrarDados() {
    console.log(this);
  }
}

export class Subway extends Restaurante {
  tipoSanduiche!: string;
  combo!: boolean;

  escolherSanduiche(sanduiche: string) {
    this.tipoSanduiche = sanduiche;
    console.log(this);
  }
}
