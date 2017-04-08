$(document).ready(function () {
    ClearControl();
    $("#lblemailerror").hide();
    $("#btnSubmit").click(function () {


        if ($("#txtName").val() == "") {
            $("#stxtName").text("Please enter Your Name");
            $("#txtName").focus();
            return false;
        }
        else {
            $("#stxtName").text("");
        }

        if ($("#txtEmailId").val() == "") {
            $("#stxtemail").text("Please enter EmailId");
            $("#txtEmailId").focus();
            return false;
        }
        else {
            $("#stxtemail").text("");
        }
        if ($("#txtMobileNo").val() == "") {
            $("#stxtMobileNo").text("Please Enter Contact No");
            $("#txtMobileNo").focus();
            return false;
        }
        else {
            $("#stxtMobileNo").text("");
        }


        if ($("#txtmsg").val() == "") {
            $("#stxtmsg").text("Please Enter Your Message");
            $("#txtmsg").focus();
            return false;
        }
        else {
            $("#stxtmsg").text("");
        }

        Save_ContactInfo();

    });

});


$("#txtName").change(function () {
    $("#stxtName").text('');
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
$("#txtMobileNo").change(function () {
    $("#stxtMobileNo").text('');
});
$("#txtmsg").change(function () {
    $("#stxtmsg").text('');
});

function ClearControl() {

    $("#txtName").val("");
    $("#txtEmailId").val("");
    $("#txtMobileNo").val("");
    $("#txtAddress").val("");
    $("#txtmsg").val(""); 

}

function Save_ContactInfo() {


    var XML = "<Root><Name>" + $("#txtName").val() + "</Name><EmailId>" + $("#txtEmailId").val() + "</EmailId><ContactNo>" + $("#txtMobileNo").val() + "</ContactNo><Address>" + $("#txtAddress").val() +"</Address><Message>" + $("#txtmsg").val() +"</Message></Root>";


    $.ajax({
        type: "POST",
        url: "frmContactus.aspx/Save_ContactInfo", // Location of the service 
        data: "{inXML : '" + XML + "',Name:'" + $("#txtName").val() + "',Email:'" + $("#txtEmailId").val() + "',ContactNo:'" + $("#txtMobileNo").val() + "',Address:'" + $("#txtAddress").val() + "',Msg:'" + $("#txtmsg").val() + "'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
           alert("Thank You for Contact with us...!");
           ClearControl();
        },
        failur: function (msg) {
            alert(msg);
        }
    });


   
}