var num = [1,2,3,4,5,6,7,8,9];


for (let index = 0; index < num.length; index++) {
    if(index%2 !== 0) continue;
    var result = num[index]*10;
    console.log(result);

}

var names = ["sai", "nithin", "chaad", 1999, "chandu", "raju"];

for(let i = 0; i< names.length; i++){
    if(typeof names[i] !== "string") continue;
    console.log(names[i]);
}

let i = 20;

do {
    console.log(names[i]);
    i++;
}while(i<names.length)


