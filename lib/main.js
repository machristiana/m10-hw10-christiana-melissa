'use strict';

// It is always helpful to use comments in your code!

//Print 212 degrees using an arrow function
var boilingTemp = document.getElementById('boiling-temp');

var boilingTempFunction = function boilingTempFunction() {
    return boilingTemp.innerHTML = 212;
};

boilingTempFunction();

//Print 32 degrees using an arrow function
var freezingTemp = document.getElementById('freezing-temp');

var freezingTempFunction = function freezingTempFunction() {
    return freezingTemp.innerHTML = 32;
};

freezingTempFunction();

//Print any # degrees using an arrow function
var waterTemp = document.getElementById('water-temp');

var waterTempFunction = function waterTempFunction() {
    return waterTemp.innerHTML = 90;
};

waterTempFunction();

//Use setTimeout method and have message appear after 3 seconds
var boiling = document.getElementById('boiling');
var frozen = document.getElementById('frozen');
var goodTemp = document.getElementById('good-temp');
var waterTempVariable = 90;

setTimeout(function () {
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