let isLoggedInFromFacebook = true;

let isLoggedInFromGoogle = true;

let isLoggedInFromMail = false;

if (isLoggedInFromFacebook && isLoggedInFromGoogle){
    console.log("welcome to landing page");
}else{
    console.log("craete a account to access the banking form");
}

var authenticated = true;

authenticated ? console.log("show logout button") : console.log("show login button");