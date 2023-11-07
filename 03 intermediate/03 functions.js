var name = "sai";

function myName(name) {
    console.log(`my name is ${name}`);
   

   function sayMyName() {
        console.log("hello there!" +" "+ name);
    }
    sayMyName(name)
}
myName(name);

var num = "2288";

if (2288 === parseInt(num)) {
    console.log("your are correct");
}else{
    console.log("your are wrong");
}
 (2288 === parseInt(num)) ? console.log("your are correct"): console.log("your are wrong");