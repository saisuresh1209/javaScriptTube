var user = "admin";

switch (user) {
    case user = "admin":
        console.log("welcome! you can access anything and can change anything");
        break;

    case user = "User":
        console.log("welcome! you can access only content")
        break;
    case user = "tester":
        console.log("Hello There! you are the tester");
        break;
    default:
        console.log("your unaurthorizied please make sure to enter correct role");
        break;
}