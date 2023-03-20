export class Pessoa {
  private static _nome: string;
  private readonly sobrenome: string;
  private readonly idade: number;
  private _cpf: string;
  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    Pessoa._nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this._cpf = cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get nome() {
    return Pessoa._nome;
  }
}