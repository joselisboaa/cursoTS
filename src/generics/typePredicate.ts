export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function soma<T>(...args: T[]): number {
  const resultado = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return resultado;
}

console.log(soma(1, 2, 3, 4, 5));
console.log(soma("s", "tr", "i", "n", "g"));
