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
            txtPayAmount:{
                required:true,
            }

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
            txtPayAmount:{
                required:"You must enter a pay amount",
            }
        }
    });
    if(form.valid()){
        window.alert("Shovel request successfully submitted! Redirecting to homepage...");
        return form.valid();
    }
}

function validateSeasonalShovelForm(){

    var form = $("#brSeasonalShovelForm");
    form.validate({

        rules:{
            txtSeasonalAddress:{
                required:true,
            },
            txtSeasonalFirstName:{
                required:true,
                rangelength:[2,30]
            },
            txtSeasonalLastName:{
                required:true,
                rangelength:[2,30]
            },
            txtSeasonalPhoneNum:{
                required:true,
                rangelength:[9,10]
            },
            txtSeasonalDateHired:{
                required:true,
            },
            txtSeasonalPayAmount:{
                required:true,
            }

        },
        messages:{
            txtSeasonalAddress:{
                required:"You must enter an address",
            },
            txtSeasonalFirstName:{
                required:"You must enter a first name",
                rangelength:"Must be between 2 and 30 characters"
            },
            txtSeasonalLastName:{
                required:"You must enter a last name",
                rangelength:"Must be between 2 and 30 characters"
            },
            txtSeasonalPhoneNum:{
                required:"You must enter a phone number",
                rangelength:"Must be a valid phone number (do not use dashes)"
            },
            txtSeasonalDateHired:{
                required:"You must enter the date of the shovel",
            },
            txtSeasonalPayAmount:{
                required:"You must enter a pay amount",
            }
        }
    });
    if(form.valid()){
        window.alert("Shovel request successfully submitted! Redirecting to homepage...");
        return form.valid();
    }


}
