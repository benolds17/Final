//BRGlobal.js
//Benjamin Reynolds
//Global functions

function fToC(){

    var temp = document.getElementById("input").value;

    var calc = (temp-32) * 5/9;

    document.getElementById("output").value = calc;

}

function cToF(){

    var temp = document.getElementById("input").value;

    var calc = temp * 9/5+32;

    document.getElementById("output").value = calc;

}