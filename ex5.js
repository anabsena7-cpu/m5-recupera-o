function login(usuario, senha) {
    try {
        const userCorreto = "admin";
        const senhaCorreta = "1234";

        if (usuario !== userCorreto || senha !== senhaCorreta) {
            throw new Error("Usuário ou senha incorretos.");
        }
        return "Login bem-sucedido!";
    } catch (erro) {
        console.error("Erro no exercício 5:", erro.message);
        return null;
    }
}
console.log("Ex5:", login("admin", "1234"));
