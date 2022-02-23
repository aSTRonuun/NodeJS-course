const fs = require("fs");

console.log("Iniciando");

fs.writeFileSync("archive.txt", "Hello World");

console.log("Finalizado");