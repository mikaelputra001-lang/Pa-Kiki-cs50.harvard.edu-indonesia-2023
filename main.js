let n = prompt("Enter a number: ");
let blocks = [];

if(n < 1 || isNaN(n) || n > 8) {
    console.log("Please enter a number greater than 0 and less than or equal to 8.");
} else {
    for(let i = 0; i < n; i++) {
        let row = "#";
        for(let j = 0; j < i; j++) {
            row += "#";
        }
        blocks.push(row);
    }
    console.log(blocks);
}