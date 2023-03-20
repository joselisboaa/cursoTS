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
  protected readonly colaboradores: Colaborador[];
  constructor(name: string, colaboradores: Colaborador[]) {
    this.name = name;
    this.colaboradores = colaboradores;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

class GitHub extends Empresa {
  constructor() {
    super("GitHub", [newCollab1, newCollab2]);
  }
  pop(): Colaborador | null {
    const colaborador = this.colaboradores;
    const lastColaborador = colaborador[colaborador.length - 1];
    colaborador.length = colaborador.length - 1;
    return lastColaborador;
  }

  getColaboradores(): Colaborador[] {
    return this.colaboradores;
  }
}

const newCollab1 = new Colaborador("Zé", 50);
const newCollab2 = new Colaborador("Carlos", 20);

const novaEmpresa = new Empresa("Github", [newCollab1, newCollab2]);
const novaEmpresa2 = new Empresa("Teste", [newCollab1]);
console.log(novaEmpresa);

const gitHub = new GitHub();
console.log(gitHub.pop());
console.log(gitHub.getColaboradores());
