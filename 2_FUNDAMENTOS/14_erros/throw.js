const x = "10";

// Throw encerra a execuçao do programa e retorna o erro
if(!Number.isInteger(x)) {
    throw new Error("x is not an integer");
}

console.log("x is an integer");