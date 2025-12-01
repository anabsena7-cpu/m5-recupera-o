function contarLetras(texto) {
    try {
        if (typeof texto !== "string") {
            throw new Error("Informe uma string.");
        }
        return texto.length;
    } catch (erro) {
        console.error("Erro no exercício 4:", erro.message);
        return null;
    }
}
console.log("Ex4:", contarLetras("JavaScript"));