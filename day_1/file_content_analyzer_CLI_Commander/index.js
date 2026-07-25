import fs from "fs";
import { program } from "commander";

function letterCount(filePath) {
    const data = fs.readFileSync(filePath, "utf8");
    console.log("The number of letter in the file :",data.length)
}

function lineCount(filePath) {
    const data = fs.readFileSync(filePath, "utf8");
    const lineCount = data.split("\n").length;
    console.log("The number of line in the file: ",lineCount)    
}

function wordCount(filePath) {
    const data = fs.readFileSync(filePath, "utf8");
    const wordCount = data.split(" ").length;
    console.log("The number of word in the file: ",wordCount);
}

program
.name("word CLI")
.description(" CLI based file analyzer to count letters, lines and words of a given file",)
.version("1.0.0")

program
.command("letter")
.description("command to count letters in a given file")
.argument("<file_path>", "Argument to take file path as command input")
.action(file_path => {
    letterCount(file_path)
})

program
.command("line")
.description("command to count line in a given file")
.argument("<file_path>", "Argument to take file path as command input")
.action(file_path => {
    lineCount(file_path)
})

program
.command("word")
.description("command to count words in a given file")
.argument("<file_path>", "Argument to take file path as command input")
.action(file_path => {
    wordCount(file_path)
})
    
program.parse();