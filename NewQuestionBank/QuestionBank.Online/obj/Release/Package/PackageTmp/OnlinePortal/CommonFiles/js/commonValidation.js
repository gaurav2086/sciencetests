
// for character validation
function onlyAlphabets(e) {
    if (e.ctrlKey || e.altKey) {
        e.preventDefault();
    } else {
        var key = e.keyCode;
        if (!((key == 8) || (key == 9) || (key == 46) || (key == 32) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
        }
    }
}

// for character,DOT,' validation only

function AlphabetsWithSpace(e) {

    if (e.ctrlKey || e.altKey) {
        e.preventDefault();
    } else {
        var key = e.keyCode;
        if (!((key == 8) || (key == 9) || (key == 32) || (key == 222) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90) || (key == 190) || (key == 110))) {
            e.preventDefault();
        }
    }
}


function OnlyNumDot(e) {
    if (e.shiftKey || e.ctrlKey || e.altKey) {
        e.preventDefault();
    } else {
        var key = e.keyCode;
        if (!((key == 8) || (key == 9) || (key == 46) || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (key == 190) || (key == 110))) {
            e.preventDefault();
        }
    }
}

// for number validation
function OnlyNumeric(e) {

    if (e.shiftKey || e.ctrlKey || e.altKey) {
        e.preventDefault();
    } else {
        var key = e.keyCode;
        if (!((key == 8) || (key == 9) || (key == 46) || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105))) {

            $('#spnNumber').text("Enter Only Numbers,(Allowed input:0-9)");
            e.preventDefault();
        }
        else {
            $('#spnNumber').text('');
        }

    }

}


// for no validation
function OnlyFax(e) {
    if (e.ctrlKey || e.altKey) {
        e.preventDefault();
    } else {
        var key = e.keyCode;
        if (!((key == 8) || (key == 9) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105))) {
            e.preventDefault();
        }
    }
}

// for email validation
function EmailValidation(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}

function IsDecimalNumber(evt, txt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode == 46 && txt.value.indexOf(".") < 0) {
        return true;
    }
    if ((charCode > 31 && (charCode < 48 || charCode > 57)))
        return false;

    return true;
}

// No special character validation
function OnlyAlphanumeric(e) {
    if (e.altKey) {
        e.preventDefault();
    } else {
        var key = e.keyCode;
        if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105))) {
            e.preventDefault();
        }
    }
}

