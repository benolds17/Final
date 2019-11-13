//BRFacade.js
//Benjamin Reynolds
//loading to page functions

//Add page adding employee function
function brAddCustomer() {

    //call validateAddForm from BRUtil
    if (validateAddForm()){

        //validation was successful
        console.info("validation is successful");

        //get input from fields
        var firstName = $("#txtFirstName").val();
        var lastName = $("#txtLastName").val();
        var email = $("#txtEmail").val();
        var phoneNum = $("#txtPhoneNum").val();
        var preferContact = $("#comboBoxPreferContact").val();
        var dateHired = $("#txtDateHired").val();
        var timeOfShovel = $("#txtTimeOfShovel").val();
        var payAmount = $("#txtPayAmount").val();
        var payMethod = $("#comboBoxPayMethod").val();
        var addNotes= $("#txtAddNotes").val();

        //set review object
        var customer = [firstName,lastName,email,phoneNum, preferContact,
        dateHired, timeOfShovel, payAmount, payMethod, addNotes];

        function callback(){
            alert("Record inserted successfully");
            console.info("Success: record inserted successfully");
        }

        //Insert record into db
        Employee.brinsert(customer, callback);
    }
    else{
        console.info("validation failed");
    }
}

//Edit employee validation and db update
function brUpdateEmployee(){

    //call validateEditForm from BRUtil
    if (validateEditForm()){

        //validation was successful
        console.info("validation is successful");

        //get id from localstorage to update correct record
        var id = localStorage.getItem("id");

        //get input from fields
        var firstName = $("#txtEditFirstName").val();
        var lastName = $("#txtEditLastName").val();
        var dateHired = $("#txtEditDateHired").val();
        var department = $("#comboBoxEditDepartment").val();

        //if user didnt select anything in select box default to first option, shipping
        if(department == null){
            department = "Shipping";
        }

        //set employee object
        //must include id at end to identify correct record
        var employee = [firstName,lastName,dateHired,department, id];

        function callback(){
            alert("Record updated successfully");
            console.info("Success: record inserted successfully");
        }

        //Update record in db
        Employee.brupdate(employee, callback);
    }
    else{
        console.info("validation failed");
    }
}

//Get all employees and add to list
function brGetEmployees(){
    var options = [];

    function callback(tx, results) {
        var htmlCode = "";

        //for how many rows in db...
        for (var i = 0; i < results.rows.length; i++) {

            var row = results.rows[i];

            //String to show employees in list view
            //This creates one listview per employee record
            htmlCode += "<li>" +
                "<a data-role='button' data-row-id=" + row['id'] + " href='#'>" +
                "<h3>Name: " + row['lastName'] + ", " + row['firstName'] + "</h3>" +
                "<p>Date Hired: " + row['dateHired'] + "</p>" +
                "<p>Department: " + row['department'] + "</p>" +
                "</a>" +
                "</li>";
        }

        //send string to listview of list employees
        var lv = $("#listEmployees");
        lv = lv.html(htmlCode);
        lv.listview("refresh");

        //when clicking on a employee set the id to the localstorage attribute "id"
        //use this id to load the employee from db
        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            console.info("ID: " + localStorage.getItem(("id")));
            $(location).prop('href', '#BREditEmployeePage');
        }

        $("#listEmployees a").on("click", clickHandler);

    }

    //CRUD function
    Employee.brSelectAll(options, callback);
}

//Get single employee for edit / delete
function brShowCurrentEmployee(){

    //get id from local storage
    var id = localStorage.getItem("id");
    var options = [id];

    function callback(tx, results) {
        var row = results.rows[0];

        //set values to the value of the row requested in id
        $("#txtEditFirstName").val(row['firstName']);
        $("#txtEditLastName").val(row['lastName']);
        $("#txtEditDateHired").val(row['dateHired']);
        $("#comboBoxEditDepartment").val(row['department']);

    }

    //CRUD function
    Employee.brselect(options, callback);
}



//Delete employee database delete
function brDeleteEmployee(){
    //get id from local storage
    var id = localStorage.getItem("id");
    var options = [id];

    function callback() {
        alert("Record deleted successfully");
        console.info("Success: Record deleted successfully");
        $(location).prop('href', '#BRViewEmployeePage');
    }

    //CRUD function
    Employee.brdelete(options, callback);
}

function clearAddForm(){

    //clear the add form on load so previous input is not still on page
    //if this isn't here when user reloads add form they will see the previously entered data
    console.info("CLEAR ADD FORM");
    document.getElementById("txtFirstName").value = "";
    document.getElementById("txtLastName").value = "";
    document.getElementById("txtDateHired").value = "";
    document.getElementById("comboBoxDepartment").value = "";

}

function brClearDatabase(){

    //try to drop all tables, alert if failed or successful
    try{
        DB.brDropTables();
        alert("Database cleared");
    }catch{
        alert("Dropping database failed");
    }


}
