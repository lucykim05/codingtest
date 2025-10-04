const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

let total = input[0];
for (let i = 1; i <= 9; i++) {
    total -= input[i];
}
console.log(total);
