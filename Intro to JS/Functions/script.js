//1 hour = 60 minutes
function hourToMinutes(hours) {
    let result = hours * 60;
    console.log(result);
    return result;
    //OR 
    //return hours * 60;

}

let a = hourToMinutes(10);
console.log(a);


//function expression
let dayToHours = function(days) {
    return days * 24;
};

let balance = 100;
let stock = 50;
let price = 5;

//check if stock
//reduce stock increase balance
function sellItem(quantity) {
    if(quantity <= stock) {
        stock -= quantity;

        balance += price * quantity;

        console.log('purchase complete. BALANCE: ' + balance + ' STOCK: ' + stock);
    } else {
        console.log('insufficient stock');
    }

}
