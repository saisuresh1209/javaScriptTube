let listPrice = 5999;
let sellingPrice = 2999;
let discount = ((listPrice-sellingPrice)/listPrice * 100);
console.log(discount);
var displayDiscount = Math.round(discount);
console.log(displayDiscount + "%OFF");