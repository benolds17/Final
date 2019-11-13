//BRGlobal.js
//Benjamin Reynolds
//Global functions

//Run when program starts
$(document).ready(function () {
    //init();
});

document
    .getElementById("brAddForm")
    .addEventListener("submit", function(e) {
        e.preventDefault();
        window.location.href = "#BRThankYou";
    });

