//BRUtil.js
//Benjamin Reynolds
//Validation input

function validateAddForm(){

    var form = $("#brAddForm");
    form.validate({

        rules:{
            txtFirstName:{
                required:true,
                rangelength:[2,20]
            },
            txtLastName:{
                required:true,
                rangelength:[2,20]
            },
            txtDateHired:{
                required:true,
            },

        },
        messages:{
            txtFirstName:{
                required:"You must enter a first name",
                rangelength:"Must be between 2 and 20 characters"
            },
            txtLastName:{
                required:"You must enter a last name",
                rangelength:"Must be between 2 and 20 characters"
            },
            txtDateHired:{
                required:"You must enter date hired",
            },
        }
    });
    return form.valid();
}

function validateEditForm(){

    var form = $("#brEditForm");
    form.validate({

        rules:{
            txtEditFirstName:{
                required:true,
                rangelength:[2,20]
            },
            txtEditLastName:{
                required:true,
                rangelength:[2,20]
            },
            txtEditDateHired:{
                required:true,
            },

        },
        messages:{
            txtEditFirstName:{
                required:"You must enter a first name",
                rangelength:"Must be between 2 and 20 characters"
            },
            txtEditLastName:{
                required:"You must enter a last name",
                rangelength:"Must be between 2 and 20 characters"
            },
            txtEditDateHired:{
                required:"You must enter date hired",
            },
        }
    });
    return form.valid();
}
