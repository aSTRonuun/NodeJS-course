const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question(`Qual a sua linguagem preferida? `, (language) => {
    if(language === "html") {
        console.log("Isso nem é linguagem haha");
        readline.close();
    }else {
        console.log(`Você escolheu a linguagem ${language}`);
        readline.close();
    }
})