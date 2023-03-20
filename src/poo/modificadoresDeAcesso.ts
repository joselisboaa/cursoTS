export class Aluno {
  public readonly nome;
  private matricula;
  constructor(nome: string, matricula: string) {
    this.nome = nome;
    this.matricula = matricula;
  }

  getMatricula() {
    return this.matricula;
  }

  setMatricula(matricula: string) {
    this.matricula = matricula;
  }
}

const newAluno = new Aluno("José", "20000222013103");
newAluno.setMatricula("20201045050000");
console.log(newAluno.getMatricula());
