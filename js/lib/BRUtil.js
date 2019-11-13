//BRUtil.js
//Benjamin Reynolds
//Validation input

function validatePayShovelForm(){

    var form = $("#brPayShovelForm");
    form.validate({

        rules:{
            txtAddress:{
                required:true,
            },
            txtFirstName:{
                required:true,
                rangelength:[2,30]
            },
            txtLastName:{
                required:true,
                rangelength:[2,30]
            },
            txtPhoneNum:{
                required:true,
                rangelength:[9,10]
            },
            txtDateHired:{
                required:true,
            },

        },
        messages:{
            txtAddress:{
                required:"You must enter an address",
            },
            txtFirstName:{
                required:"You must enter a first name",
                rangelength:"Must be between 2 and 30 characters"
            },
            txtLastName:{
                required:"You must enter a last name",
                rangelength:"Must be between 2 and 30 characters"
            },
            txtPhoneNum:{
                required:"You must enter a phone number",
                rangelength:"Must be a valid phone number (do not use dashes)"
            },
            txtDateHired:{
                required:"You must enter the date of the shovel",
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
