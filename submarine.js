//Part 1
const fs = require("fs");
const input = fs.readFileSync("./input.txt");

// make up & down commands affect depth
// make forward commands affects horizontal
//function processCommand()
let horiz = 0;
let depth = 0;

let commands = input.toString().split("\n");
for (let i = 0; i <= commands.length - 1; i++) {
  let command = commands[i].split(" ");
  if (command[0] === "forward") {
    horiz += Number(command[1]);
  } else if (command[0] === "down") {
    depth += Number(command[1]);
  } else if (command[0] === "up") {
    depth -= Number(command[1]);
  }
}
console.log(
  "Horizontal position is " + horiz + ". ",
  "Depth is " + depth + ". "
);

console.log("Position * Depth = " + horiz * depth);
