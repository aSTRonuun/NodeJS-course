const path = require("path");

// path.resolve() - retorna o diretorio absoluto do arquivo
console.log(path.resolve("test.txt"));

// formar path
const midFolder = "relatorios";
const fileName = "relatorio1.pdf";

const finalPath = path.join("/", "arquivos", midFolder, fileName);
console.log(finalPath);