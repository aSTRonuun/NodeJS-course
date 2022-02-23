const fs = require("fs");

console.log("Iniciando");

fs.writeFile("archive.txt", "Hello World", function(err) {
    setTimeout(() => {
        console.log("Arquivo criado");
    }, 1000);
});

console.log("Fim");