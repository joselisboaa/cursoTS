//extends representa restrição nos genéricos
type ObterValorFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];
type Car = typeof carro;
type identifyCarsFn = (car: Car) => Car["marca"];
//o U e o V estarão restritos a um objeto, caso o contrário dará erro
type mergeFn = <U extends object, V extends object>(obj1: U, obj2: V) => typeof obj1 & typeof obj2;

type mergeArrayFn = <U, V>(arr1: U[], arr2: V[]) => (U | V)[];

type mergeArrayNumbersFn = <U extends number, V extends number>(arr1: U[], arr2: V[]) => (U | V)[];

//mergeando vetores
type mergeArrayVectorsFn = <U extends Array<number>, V extends Array<number>>(arr1: U[], arr2: V[]) => (U | V)[];

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

const mergeArrays: mergeArrayFn = (arr1, arr2) => {
    const teste = [...arr1, ...arr2];
    return teste;
};
const mergeArrayNumbers: mergeArrayNumbersFn = (arr1, arr2) => {
    const teste = [...arr1, ...arr2];
    return teste;
};
const mergeArrayVectors: mergeArrayVectorsFn = (arr1, arr2) => {
    const teste = [...arr1, ...arr2];
    return teste;
};

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

const arrNum1 = [1, 2, 3];
const arrNum2 = [12, 23, 34];

const arrStr1 = ["1", "2", "3"];
const arrStr2 = ["112", "223", "31"];

const matrix1 = arrNum1.map((item) => {
    return [item];
});

const matrix2 = arrNum2.map((item) => {
    return [item];
});

const objetoMisturado = mergeFunction(carro, animal);
const arrayMisturado = mergeArrays(arrNum1, arrStr1);
const arrayMisturadoDeNumeros = mergeArrayNumbers(arrNum1, arrNum2);
const arrayMisturadoDeVetores = mergeArrayVectors(matrix1, matrix2);

console.log(objetoMisturado);
console.log(arrayMisturado);
console.log(arrayMisturadoDeNumeros);
console.log(arrayMisturadoDeVetores);