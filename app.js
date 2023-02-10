console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) console.log(i);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i}. FIZZBUZZ`);
    } else if (i % 3 == 0) {
        console.log(`${i}. FIZZ`);
    } else if (i % 5 == 0) {
        console.log(`${i}. BUZZ`);
    } else {
        console.log(`${i}.`);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3a:\n==========\n");
let x = 1;
while (x <= 100) {
    if (x % 2 !== 0) console.log(x);
    x += 1;
}
console.log("EXERCISE 3b:\n==========\n");
x = 1;
while (x <= 100) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log(`${x}. FIZZBUZZ`);
    } else if (x % 3 == 0) {
        console.log(`${x}. FIZZ`);
    } else if (x % 5 == 0) {
        console.log(`${x}. BUZZ`);
    } else {
        console.log(`${x}.`);
    }
    x += 1;
}


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500-100) + 100);
for (let i = 0; i <= n; i++) {
    if (i == value) {
        console.log(`Found value ${value}!`);
        break;
    }
    if (i == n) {
        console.log(`Did not find value ${value}`);
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10-1) + 1);
let buzzDivisor = Math.round(Math.random() * (10-1) + 1);
let start = Math.round(Math.random() * (10-1) + 1);
let end = Math.round(Math.random() * (1000-100) + 100);
console.log(`Fizz = ${fizzDivisor}`);
console.log(`Buzz = ${buzzDivisor}`);
console.log(`Start = ${start}`);
console.log(`End = ${end}`);
console.log("==========\n");
for (let i = start; i <= end; i++) {
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log(`${i}. FIZZBUZZ`);
    } else if (i % fizzDivisor == 0) {
        console.log(`${i}. FIZZ`);
    } else if (i % buzzDivisor == 0) {
        console.log(`${i}. BUZZ`);
    } else {
        console.log(`${i}.`);
    }
}