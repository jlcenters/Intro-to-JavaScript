// add
let a = 1+1
console.log(a);

let b = 10;
let c = a + b;
console.log(c);

b += 1;
b++

//subtract
let x = 10 - 5;
console.log(x);

let y = b + x;
console.log(y);

x -= 1;
console.log(x);
x--;
console.log(x);

//multiply 
let unitPrice = 2;
let units = 10;
let total = unitPrice * units;
console.log(total);

//divide
let n = 10;
let result = n / 2;
console.log(n);

//modulus
let r = 5 % 2;
console.log(r);



//challenge
let baseWeight = 10000;
let foodWeight = 100;
let passengersWeight = 10;

let fuelUnitWeight = 2;
let fuelUnits = 100;

let fuelWeight = fuelUnitWeight * fuelUnits;

let totalWeight = baseWeight + foodWeight + passengersWeight + fuelWeight;
console.log(totalWeight);
