export abstract class Pessoa {
  private readonly nome;
  private readonly sobrenome;
  private readonly idade;
  protected readonly cpf;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  getIdade(): number {
    return this.idade;
  }

  getCPF(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

class Aluno extends Pessoa {
  private readonly matricula;
  constructor(nome: string, sobrenome: string, idade: number, cpf: string, matricula: string) {
    super(nome, sobrenome, idade, cpf);
    this.matricula = matricula;
  }

  estudar(): void {
    console.log("Estudando...");
  }
}

class AlunoDedicado extends Aluno {
  estudar(): void {
    console.log("Estudando focadamente...");
  }
}

const alunoNormal = new Aluno("Maria", "Marcia", 20, "1231614156934", "86581002020");
const alunoFocado = new AlunoDedicado("João", "Marcia", 20, "5013014156934", "120202002020");
alunoNormal.estudar();
alunoFocado.estudar();
