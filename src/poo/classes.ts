class Colaborador {
  public readonly name;
  public readonly age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Empresa {
  public readonly name;
  private readonly colaboradores: Colaborador[];
  constructor(name: string, colaboradores: Colaborador[]) {
    this.name = name;
    this.colaboradores = colaboradores;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

const newCollab1 = new Colaborador("Zé", 50);
const newCollab2 = new Colaborador("Carlos", 20);

const novaEmpresa = new Empresa("Github", [newCollab1, newCollab2]);
const novaEmpresa2 = new Empresa("Teste", [newCollab1]);
console.log(novaEmpresa);
