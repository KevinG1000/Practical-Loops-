for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// Part 2 

let n = 4;

while (true) {
    n++;
    let isPrime = true;
    
    if (n > 1) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(n);
            break;
        }
    }
}


//Part 3 

let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cell = "";
let cells = [];
let row = [];

for (let i = 0; i < csvData.length; i++) {
    let char = csvData[i];
    
    if (char === ',') {
        row.push(cell);
        cell = "";
    } else if (char === '\n') {
        row.push(cell);
        console.log(row);
        cell = "";
        row = [];
    } else {
        cell += char;
    }
}

if (cell) {
    row.push(cell);
    console.log(row);
}
