$(document).ready(function () {
    ClearControl();
    $("#lblemailerror").hide();
    $("#lblTitleerror").hide();
    $("#lblGendererror").hide();
    $("#lblFnameError").hide();
    $("#lblSurmaneerror").hide();
    $("#lblCountryerror").hide();



    $("#btnSubmit").click(function () {

        if ($("#Title").val() == "0") {
            $("#lblTitleerror").show();
            $("#Title").focus();
            return false;
        }
        else {
            $("#lblTitleerror").hide();
        }

        if ($("#Gender").val() == "0") {
            $("#lblGendererror").show();
            $("#Gender").focus();
            return false;
        }
        else {
            $("#lblGendererror").hide();
        }

        if ($("#txtFirstName").val() == "") {
            $("#lblFnameError").show();
            $("#txtFirstName").focus();
            return false;
        }
        else {
            $("#lblFnameError").hide();
        }


        if ($("#txtSurmane").val() == "") {
            $("#lblSurmaneerror").show();
            $("#txtSurmane").focus();
            return false;
        }
        else {
            $("#lblSurmaneerror").hide();
        }

        if ($("#txtCountry").val() == "") {
            $("#lblCountryerror").show();
            $("#txtCountry").focus();
            return false;
        }
        else {
            $("#lblCountryerror").hide();
        }

        if ($("#txtEmailId").val() == "") {
            $("#stxtemail").text("Please Enter Your Email Id");
            $("#txtEmailId").focus();
            return false;
        }
        else {
            $("#stxtemail").text("");
        }


        if ($("#txtPwd").val() == "") {
            $("#stxtpwd").text("Please Enter Your Password");
            $("#txtPwd").focus();
            return false;
        }
        else {
            $("#stxtpwd").text("");
        }

        if ($("#txtEmailId").val() != $("#txtConEmailId").val()) {

            $("#stxtemail").text("Confirm Email not match with Email ");
            return false;
        }
        else {
            $("#stxtemail").text("");
        }

        if ($("#txtPwd").val() != $("#txtConPwd").val()) {

            $("#stxtpwd").text("Confirm Password not match with password ");
            return false;
        }
        else {
            $("#stxtpwd").text("");
        }

        Save_PromotionUserDetail();


    });

});

$("#txtEmailId").change(function () {

    $("#stxtemail").text("");
    if (EmailValidation($("#txtEmailId").val()) == false) {
        $("#lblemailerror").show();
        return false;
    }
    else {
        $("#lblemailerror").hide();
    }

});
$("#txtPwd").change(function () {
    $("#stxtpwd").text('');
});


function ClearControl() {


    $("#txtEmailId").val("");
    $("#txtPwd").val("");


}

function Save_PromotionUserDetail() {


    // var XML = "<Root><ActionType>InsertPromotionalUser</ActionType><EmailId>" + $("#txtEmailId").val() + "</EmailId><Password>" + $("#txtPwd").val() + "</Password></Root>";

    var name = $("#txtFirstName").val() + " " + $("#txtSurmane").val();

    var isPromotionEmailsent = 0;
    if ($("#chkPromotionEmail").is(':checked'))
        isPromotionEmailsent = 1;

    var XML = "<Root><ActionType>InsertPromotionalUser</ActionType><EmailId>" + $("#txtEmailId").val() + "</EmailId><Password>" + $("#txtPwd").val() + "</Password><Title>" + $("#Title").val() + "</Title><Gender>" + $("#Gender").val() + "</Gender><Name>" + name + "</Name><Class>" + $("#txtClass").val() + "</Class><NameOfInstitute>" + $("#txtInstitute").val() + "</NameOfInstitute><Address>" + $("#txtAddress").val() + "</Address><Town>" + $("#txtTown").val() + "</Town><Country>" + $("#txtCountry").val() + "</Country><PromotionEmail>" + isPromotionEmailsent + "</PromotionEmail></Root>";

    $.ajax({
        type: "POST",
        url: "frmPromotionalSignIn.aspx/Save_PromotionUserDetail", // Location of the service 
        data: "{inXML : '" + XML + "'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            alert("Your promotional account has been created successfully....!");
            ClearControl();
            window.location.href = 'frmDefault.aspx';
        },
        failur: function (msg) {
            //alert(msg);
            alert("An error occurred please try again later..");
        }
    });
}