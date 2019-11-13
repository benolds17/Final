//BRDatabase.js
//Benjamin Reynolds
//Database create and drop sql script

function errorHandler(tx, error) {
    console.log("SQL error: " + tx + " (" + error.code + ") " + error.message);
}

var db;

var DB = {


    brCreateDatabase: function () {

        var shortName = "ShovelDB";
        var version = "1.0";
        var displayName = "DB for snow shovelling";
        var dbSize = 2 * 1024 * 1024;


        function dbCreateSuccess() {

            console.info(("Success: Database created Successfully."))
        }

        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);

    },


    brCreateTables: function () {

        function txFunction(tx) {

            var options = [];

            //Create customer table and execute SQL

            var sql = "CREATE TABLE IF NOT EXISTS customer   (" +
                    "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                    "firstName VARCHAR(20) NOT NULL," +
                    "lastName VARCHAR(20) NOT NULL," +
                    "email VARCHAR(50) NOT NULL," +
                    "phoneNum VARCHAR(20) NOT NULL," +
                    "preferContact VARCHAR(20) NOT NULL," +
                    "dateOfShovel DATE NOT NULL," +
                    "timeOfShovel VARCHAR(20) NOT NULL," +
                    "payAmount VARCHAR(20) NOT NULL," +
                    "payMethod VARCHAR(20) NOT NULL," +
                    "addNotes VARCHAR(300));";

            tx.executeSql(sql, options, successCreate, errorHandler);


            function successCreate() {
                console.info("Success: customer table created successfully");
            }

        }

        function successCreateTables() {
            console.info(("Success: Table created Successfully."))
        }

        db.transaction(txFunction, errorHandler, successCreateTables);
    },


    brDropTables: function () {


        function txFunction(tx) {

            var options = [];

            //Drop employee table

            var sql ="DROP TABLE IF EXISTS customer;";

            tx.executeSql(sql, options, successDrop, errorHandler)

            function successDrop() {
                console.info("Success: dropping customer tables successful");
            }

            tx.executeSql(sql, options, successDrop, errorHandler)
        }

        function successTransaction() {
            console.info("Success: Drop table transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};