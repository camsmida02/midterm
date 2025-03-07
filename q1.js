
export function coinValue (nickel, dime, quarter, loonie, toonie){
    return (nickel * 0.05) + (dime * 0.10) + (quarter * 0.25) + (loonie * 1.00) + (toonie * 2.00);
}

console.log(coinValue (0, 0, 0, 0, 0));          
console.log(coinValue (5, 2, 7, 4, 1));          
console.log(coinValue (1, 1, 12, 3, 10));    