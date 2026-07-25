const fs = require("fs");

const fliePath = process.argv[3];

const data = fs.readFileSync(fliePath, "utf8");

function letterCount() {
    console.log("The number of letter in  the file", data.length)
}

function lineCount() {
    lineCount = data.split("\n").length;
    console.log("The number of letter in the file", lineCount)
}

function wordCount() {
    wordCount = data.split(" ").length;
    console.log("The number of words in the file",wordCount)
}

if (process.argv[2] == "letter") {
    letterCount()
} else if(process.argv[2] == "word"){
    wordCount()
} else if(process.argv[2] == "line"){
    lineCount()
} else {
    console.log("Enter a valid arguement:")
}



