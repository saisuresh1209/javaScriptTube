let getRole =  (name , role) => {
    switch (role) {
        case role = "admin":
            return `Hi ${name} you can able to change all`;
        case role = "subadmin":
            return `Hi ${name} able to see users and can delete or edit the content`;
        case role = "user":
            return `Hi ${name} able to access the content`;       
    
        default:
            return `Hi ${name} your unaurthorised make sure to give proper role `;
    }
}
console.log(getRole("Saisuresh" , "abc"));