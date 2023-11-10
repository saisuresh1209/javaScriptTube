function evenOrOdd(a) {
    if (a%2 === 0) {
        return true;
    }else{
        return false;
    }
}

console.log(evenOrOdd(4));

var isEven = (a) =>{
    return a %2 === 0;
}
// console.log(isEven(3));

var output = [2,4,6,8].every(isEven);
console.log(`17th line ${output}`);




var result = [2,4,6,8,10].every((e) => e%2 === 0);
console.log(result);