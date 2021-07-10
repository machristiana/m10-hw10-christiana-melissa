// It is always helpful to use comments in your code!

//Print 212 degrees using an arrow function
const boilingTemp = document.getElementById('boiling-temp');

var boilingTempFunction = () => boilingTemp.innerHTML = 212;

boilingTempFunction();


//Print 32 degrees using an arrow function
const freezingTemp = document.getElementById('freezing-temp');

var freezingTempFunction = () => freezingTemp.innerHTML = 32;

freezingTempFunction();


//Print any # degrees using an arrow function
let waterTemp = document.getElementById('water-temp');

var waterTempFunction = () => waterTemp.innerHTML = 90;

waterTempFunction();


//Use setTimeout method and have message appear after 3 seconds
const boiling = document.getElementById('boiling');
const frozen = document.getElementById('frozen');
let goodTemp = document.getElementById('good-temp');
let waterTempVariable = 90;

setTimeout(function() {
    if (waterTempVariable > 212) {
        boiling.classList.remove('hide');
        boiling.classList.add('show');
    } else if (waterTemp < 32) {
        frozen.classList.remove('hide');
        frozen.classList.add('show');
    } else {
        goodTemp.classList.remove('hide');
        goodTemp.classList.add('show');
    }
}, 3000);