const throwError = (): never => {
  throw new Error("Erro");
};

try {
  throwError();
} catch (error) {
  console.log(error);
}
