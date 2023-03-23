type mergeObjectsFn = <T, U>(obj1: T, obj2: U) => typeof obj1 & typeof obj2;

const mergeObjects: mergeObjectsFn = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

function mergeObjects2<T, U>(fn: mergeObjectsFn, obj1: T, obj2: U) {
  console.log(fn(obj1, obj2));
}

mergeObjects2(mergeObjects, { nome: "elisson" }, { sobrenome: "Saldanha" });
