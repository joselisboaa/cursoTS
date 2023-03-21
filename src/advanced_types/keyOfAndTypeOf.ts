type CoresObj = typeof objColors;
type CoresChaves = keyof CoresObj;

const objColors = {
    red: "vermelho",
    green: "verde",
    blue: "azul",
    purple: "roxo",
    rosa: "pink",
    teste: "teste",
};

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
    return cores[cor];
};