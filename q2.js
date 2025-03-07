export function FahToCel (fah){
    return ((fah - 32)*(5/9));
}

console.log(FahToCel(100));
console.log(FahToCel(32));
console.log(FahToCel(-50));
