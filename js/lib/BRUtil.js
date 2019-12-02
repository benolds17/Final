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
            txtContactName:{
                required:true,
                rangelength:[2,50]
            },
            txtEmail:{
                required:true,
            },
            txtPhoneNum:{
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
            txtContactName:{
                required:"You must enter a contact name",
                rangelength:"Must be between 2 and 50 characters"
            },
            txtEmail:{
                required:"You must enter an email"
            },
            txtPhoneNum:{
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
            txtSeasonalContactName:{
                required:true,
                rangelength:[2,50]
            },
            txtSeasonalEmail:{
                required:true,
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
            txtSeasonalContactName:{
                required:"You must enter a first name",
                rangelength:"Must be between 2 and 50 characters"
            },
            txtSeasonalEmail:{
                required:"You must enter an email address",
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
