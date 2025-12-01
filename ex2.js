function somarArray(lista) {
    try {
        if (!Array.isArray(lista)) {
            throw new Error("Valor inválido: informe um array.");
        }
        for (let item of lista) {
            if (typeof item !== "number" || isNaN(item)) {
                throw new Error("O array contém valores não numéricos.");
            }
        }
        return lista.reduce((a, b) => a + b, 0);
    } catch (erro) {
        console.error("Erro no exercício 2:", erro.message);
    }
}
console.log("Ex2:", somarArray([1, 2, 3, 4]));