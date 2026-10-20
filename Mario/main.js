/*Mario Kiri ke Kanan*/
// let n = prompt("Enter the number of rows:");
// let a = [];

// if(n < 1 || isNaN(n) || n > 8) {
//     console.log("Please enter a number greater than 0 and less than or equal to 8.");
// } else {
//     for (let i = 0; i < n; i++) {
//         a.push("#");
//         console.log(a.toString().replace(/,/g, ""));
//     }
// }

/*Mario Kanan ke Kiri*/
// let n = prompt("Enter the number of rows:");
// let a = [];

// if(n < 1 || isNaN(n) || n > 8) {
//     console.log("Please enter a number greater than 0 and less than or equal to 8.");
// } else {
//     for (let i = 0; i < n; i++) {
//         a.push("#");
//         console.log(a.toString().replace(/,/g, "").padStart(n, " "));
//     }
// }

/*Mario Kanan Kiri*/
let n = prompt("Enter the number of rows:");
let a = [];

if (n < 1 || isNaN(n) || n > 8) {
    console.log("Please enter a number greater than 0 and less than or equal to 8.");
} else {
    for (let i = 0; i < n; i++) {
        a.push("#");
        console.log(a.toString().replace(/,/g, "").padStart(n, " ") + "  " + a.toString().replace(/,/g, ""));
    }
}