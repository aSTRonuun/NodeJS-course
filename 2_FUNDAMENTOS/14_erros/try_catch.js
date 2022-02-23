const a = 10;

try {

    a = 2;
}catch (err) {
    console.log(`Erro: ${err}`);
}

console.log("Continuação");