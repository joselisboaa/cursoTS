let random: unknown;

random = 10;
random = "12";
random = 12;

//console.log(random + 2); ERRO
if (typeof random === "number") {
  console.log(random + 5);
}
