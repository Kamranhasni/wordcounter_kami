// import the 'inquirer' module,which is a command line interface for node.js
import inqrirer from "inquirer";
//Declare a constant 'answer'and assign it to the result of inquirer.prompt function
const answers = await inqrirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
//print the array of words to the console
console.log(words);
//print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
