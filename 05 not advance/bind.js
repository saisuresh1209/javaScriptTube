const user = {
    firstName : "Lokesh",
    lastName : "kanakrajan",
    role : "User",
    courseCount : 4,
    getInfo : function () {
        console.log(
            `FirstName of the person is ${this.firstName}
             lastname of the person is ${this.lastName}
             role of the person is ${this.role}
            how many courses that person is enrolled for is ${this.courseCount}`
            
        );
    },

};

const admin = {
    firstName : "Prasanth",
    lastName : "Neel",
    role : "admin",
    courseCount : "all",
}

// user.getInfo.call(admin);
var details = user.getInfo.bind(admin);
details();
