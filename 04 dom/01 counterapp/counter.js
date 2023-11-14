var counter = document.querySelector(".count");
var follwerscount = document.querySelector(".followers");

let count = 1;

setInterval( ()=>{
    if(count < 1000){
        count++;
        counter.innerHTML = count;
    }
},1);


setTimeout(()=>{
    follwerscount.innerHTML = "1000 followers on insta"
},5000);