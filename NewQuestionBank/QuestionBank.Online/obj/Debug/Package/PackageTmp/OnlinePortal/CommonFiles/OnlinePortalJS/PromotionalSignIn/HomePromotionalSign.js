$(document).ready(function () {
    ClearControl();
    $("#lblemailerror").hide();
    $("#stxtpwd").text("");
    $("#lblPhone").hide();


    $("#btnSubmit").click(function () {
        debugger;
        if ($("#txtPwd").val() != $("#txtConPwd").val()) {
            $("#stxtpwd").text("Confirm Password not match with password ");
            return false;
        }
        else {
            $("#stxtpwd").text("");
        }

        if (EmailValidation($("#txtEmailId").val()) == false) {
            $("#lblemailerror").show();
            return false;
        }
        else {
            $("#lblemailerror").hide();
        }
        if ($("#txtPhone").val()) {
            if (PhoneValidation($("#txtPhone").val()) == false) {
                $("#lblPhone").show();
                return false;
            }
            else {
                $("#lblPhone").hide();
            }
        }
        Save_PromotionUserDetail();

    });

});

$("#txtEmailId").change(function () {
    debugger;
    if (EmailValidation($("#txtEmailId").val()) == false) {
        $("#lblemailerror").show();
        return false;
    }
    else {
        $("#lblemailerror").hide();
    }
});


$("#txtPhone").change(function () {
    debugger;
    if (PhoneValidation($("#txtPhone").val()) == false) {
        $("#lblPhone").show();
        return false;
    }
    else {
        $("#lblPhone").hide();
    }
});
function EmailValidation(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function PhoneValidation(phone) {
    var re = /^\d+$/;
    return re.test(phone);
}



function ClearControl() {


    $("#txtEmailId").val("");
    $("#txtPwd").val("");
    $("#txtFirstName").val("");
    $("#txtSurmane").val("");
    $("#txtPhone").val("");


}

function Save_PromotionUserDetail() {


    var name = $("#txtFirstName").val() + " " + $("#txtSurmane").val();


    var XML = "<Root><ActionType>InsertPromotionalUser</ActionType><EmailId>" + $("#txtEmailId").val() + "</EmailId><Password>" + $("#txtPwd").val() + "</Password><Name>" + name + "</Name><Phone>" + $("#txtPhone").val() + "</Phone><PromotionEmail>" + 0 + "</PromotionEmail></Root>";

    $.ajax({
        type: "POST",
        url: "home.aspx/Save_PromotionUserDetail", // Location of the service 
        data: "{inXML : '" + XML + "'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            alert("Your promotional account has been created successfully....!");
            ClearControl();
            window.location.href = 'home.aspx';

        },
        failur: function (msg) {
            // alert(msg);
            alert("An error occurred please try again later..");
        }
    });
}