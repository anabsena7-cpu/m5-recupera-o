function dividir(a, b) {
    try {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Informe dois números.");
        }
        if (b === 0) {
            throw new Error("Divisão por zero não permitida.");
        }
        return a / b;
    } catch (erro) {
        console.error("Erro no exercício 3:", erro.message);
    }
}
console.log("Ex3:", dividir(10, 2));