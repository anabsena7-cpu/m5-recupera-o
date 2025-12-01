function dobrarNumero(valor) {
    try {
        if (typeof valor !== "number" || isNaN(valor)) {
            throw new Error("Valor inválido: informe um número.");
        }
        return valor * 2;
    } catch (erro) {
        console.error("Erro no exercício 1:", erro.message);
    }
}
console.log("Ex1:", dobrarNumero(10));
