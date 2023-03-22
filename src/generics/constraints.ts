//extends representa restrição nos genéricos
type ObterValorFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];
type Car = typeof carro;
type identifyCarsFn = (car: Car) => Car["marca"];
//o U e o V estarão restritos a um objeto, caso o contrário dará erro
type mergeFn = <U extends object, V extends object>(obj1: U, obj2: V) => typeof obj1 & typeof obj2;

const obterChave: ObterValorFn = (objeto, chave) => objeto[chave];

const animal = {
    cor: "Verde",
    apelidos: ["Verdão"],
    idade: 5,
};

const carro = {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2020,
};

const apelidos = obterChave(animal, "apelidos");
const marcaCarro = obterChave(carro, "marca");

const identifyCars: identifyCarsFn = (car) => {
    return obterChave(car, "marca");
}

const carroTeste = {
    marca: "BMW",
    modelo: "M3",
    ano: 2015,
};

console.log(identifyCars(carroTeste));

const mergeFunction: mergeFn = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2
    };
};

const objetoMisturado = mergeFunction(carro, animal);

console.log(objetoMisturado);