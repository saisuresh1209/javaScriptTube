const red = document.querySelector(".red");
const pink = document.querySelector(".pink");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");
const white = document.querySelector(".white");

const centre = document.querySelector(".centre");


const getColor = (element) =>{
    return window.getComputedStyle(element).backgroundColor;
};

// var color = getColor(pink);

// pink.addEventListener('click', ()=> {
//     centre.style.backgroundColor = color;
// });

const magicColorPicker = (elementColor, color) =>{
    elementColor.addEventListener('mouseenter', ()=> {
        centre.style.backgroundColor = color;
    });
};

magicColorPicker(red,getColor(red));
magicColorPicker(pink,getColor(pink));
magicColorPicker(green,getColor(green));
magicColorPicker(yellow,getColor(yellow));
magicColorPicker(white,getColor(white));