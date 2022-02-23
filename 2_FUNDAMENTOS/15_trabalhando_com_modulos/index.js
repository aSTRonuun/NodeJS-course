const inquirer = require("inquirer");
const chalk = require("chalk");


inquirer.prompt([
    {
        name: "name",
        message: "Digite seu nome: ",
    }, 
    {
        name: "age",
        message: "Digite sua idade: ",
    }
]).then((answers) => {

    if(!answers.name || !answers.age) {
        throw new Error("Name and age are required!");
    }

    console.log(chalk.bgYellow.black(`Hello ${answers.name}, you are ${answers.age} years!`));
}).catch(err => console.log(err.message));

