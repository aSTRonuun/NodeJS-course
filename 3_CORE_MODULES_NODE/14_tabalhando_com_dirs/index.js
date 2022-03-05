const fs = require('fs');

// Se não houver a pasta
if (!fs.existsSync("./mypaste")) {
    console.log("Não existe!");

    // mkdirSync () - cria a pasta de forma sincrona
    fs.mkdirSync("mypaste");
} else if(fs.existsSync("./mypaste")) {
    console.log("Existe!");
}