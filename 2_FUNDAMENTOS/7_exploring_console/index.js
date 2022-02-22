const x = 21;
const y = "Vitor";
const z = [1, 2, 3, 4, 5];

console.log(x, y, z);

//contagem de impressoes
console.count(`O valor de x é ${x}, contagem: `);
console.count(`O valor de x é ${x}, contagem: `);
console.count(`O valor de x é ${x}, contagem: `);
console.count(`O valor de x é ${x}, contagem: `);
console.count(`O valor de x é ${x}, contagem: `);
console.count(`O valor de x é ${x}, contagem: `);

console.log("O nome do usuário é %s e ele é Programador.", y);

// limpar console
setTimeout(() => {
    console.clear();
}, 2000);