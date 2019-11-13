//BREmployeeDAL.js
//Benjamin Reynolds
//CRUD functions for Employee

var Employee = {
    //INSERT
    brinsert: function(options,callBack){
        function txFunction(tx) {
            var sql = "INSERT INTO customer " +
                "(firstName,lastName,email,phoneNum,preferContact,dateOfShovel,timeOfShovel,payAmount,payMethod,addNotes)" +
                "VALUES(?,?,?,?,?,?,?,?,?,?);";

            tx.executeSql(sql,options,callBack,errorHandler)
        }

        function successTransaction() {
            console.info("Success: insert transaction successful");
        }

        db.transaction(txFunction,errorHandler,successTransaction);
    },
    //DELETE
    brdelete: function(options,callBack){
        function txFunction(tx) {
            var sql = "DELETE FROM employee WHERE id=?;";
            tx.executeSql(sql,options,callBack,errorHandler)
        }
        function successTransaction() {
            console.info("Success: Delete transaction successful");
        }
        db.transaction(txFunction,errorHandler,successTransaction);

    },
    //SELECT ALL
    brSelectAll: function(options,callBack){
        function txFunction(tx) {
            var sql = "SELECT * FROM employee;";
            tx.executeSql(sql,options,callBack,errorHandler)
        }
        function successTransaction() {
            console.info("Success: Select All transaction successful");
        }
        db.transaction(txFunction,errorHandler,successTransaction);
    },
    //SELECT
    brselect: function(options,callBack){
        function txFunction(tx) {
            var sql = "SELECT * FROM employee WHERE id=?;";
            tx.executeSql(sql,options,callBack,errorHandler)
        }
        function successTransaction() {
            console.info("Success: Select transaction successful");
        }
        db.transaction(txFunction,errorHandler,successTransaction);
    },
    //UPDATE
    brupdate: function(options, callBack){
        function txFunction(tx) {
            var sql = "UPDATE employee SET firstName=?, lastName=?, dateHired=?, department=? WHERE id=?;";
            tx.executeSql(sql,options,callBack,errorHandler)
        }
        function successTransaction() {
            console.info("Success: Update transaction successful");
        }
        db.transaction(txFunction,errorHandler,successTransaction);

    }

};

