//BRGlobal.js
//Benjamin Reynolds
//Global functions

//view feedback page load
function brViewEmployeePage_show() {
    brGetEmployees();
}

//edit feedback page load
function BREditEmployeePage_show() {
    brShowCurrentEmployee();
}

function BRAddEmployeePage_show(){
    clearAddForm();
}

//init function for pageshow
//this calls appropriate functions when the pages are loaded
function init() {

    $("#BRViewEmployeePage").on("pageshow", brViewEmployeePage_show);
    $("#BREditEmployeePage").on("pageshow", BREditEmployeePage_show);
    $("#BRAddEmployeePage").on("pageshow", BRAddEmployeePage_show);
}


//Database code
function initDB() {

    try {
        DB.brCreateDatabase();
        if (db) {


            console.info("Creating Tables....");
            DB.brCreateTables();
        }
        else {
            console.error("Error: cannot create Db. can not proceed.");
        }

    } catch (e) {
        console.error("Error: (Fatal) Error in initDB(). can not proceed.");
    }
}

//Run when program starts to createDB
$(document).ready(function () {
    initDB();
    init();
});


