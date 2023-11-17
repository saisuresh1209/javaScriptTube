var User = {
    name : "",
    getUsername : function(){
        console.log(this.name);
    }
}

var result = Object.create(User);
console.log(result);

result.name = "Saisuresh";
result.getUsername();