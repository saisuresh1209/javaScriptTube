const numbers = [9,7,5,4,8,9,4];

console.log(numbers.fill("Hi" , 3,5));


var objects = new Array (87,8,89,55,44,56,22,88,99);
var result = objects.filter((num) => num < 99);
console.log(result);


var names = ["sai", "nithin", "chaad", "chandu", "raju"];


// console.log(names.slice(2,3 ));
names.splice(2,3, "pandu");
console.log(names);
