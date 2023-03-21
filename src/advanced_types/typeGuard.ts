type Pessoa = { nome: string };
type Animal = { cor: string };

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
    public nome;
    constructor(nome: string) {
        this.nome = nome;
    }
}

export class Cachorro implements Animal {
    public cor;
    constructor(cor: string) {
        this.cor = cor;
    }
}

function showName(obj: PessoaOuAnimal): void {
    if("cor" in obj) console.log(obj.cor);
    if(obj instanceof Aluno) console.log(obj.nome);
}

showName(new Aluno("José"));
showName(new Cachorro("Laranja"));