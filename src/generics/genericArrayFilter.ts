type FilterCallback = <U>(
    value: U,
    index?: number,
    array?: U[]
) => boolean;

function identify<Type>(arg: Type) : Type {
    return arg;
};


function myFilter<T>(array: T[], callbackfn: FilterCallback): T[] {
    const novoArray: T[] = [];

    for (let i = 0; i< array.length; i++) {
        if(callbackfn(array[i])) {
            novoArray.push(array[i]);
        }
    }

    return novoArray;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);

const arrayFiltrado = myFilter(array, (value) => value < 5);

console.log(arrayFiltrado);

const arrayFiltrado2 = myFilter(array, (value) => value === "ValorTeste");

console.log(arrayFiltrado2);
