
var UniqId = "";
$(document).ready(function () {

    UniqId = GetParameterValues('ActivationId');

   

    $("#btnSavePassword").click(function () {


        if ($("#txtpassword").val() == "") {
            $("#stxtpasword").text("Please enter Your Password");
            return false;
        }
        else {
            $("#stxtpasword").text("");
        }

        if ($("#txtConformpasword").val() == "") {
            $("#stxtConfpasword").text("Please enter Your Conform Password");
            return false;
        }
        else {
            $("#stxtConfpasword").text("");
        }

        if ($("#txtConformpasword").val() !=$("#txtpassword").val()) {
            $("#stxtConfpasword").text("Password doesn't match.");
            return false;
        }
        else {
            $("#stxtConfpasword").text("");
        }


        UpdateUserPwd();
    });

});



function UpdateUserPwd() {

    var Password = $("#txtpassword").val();
    var XML = "<Root><ActionType>UpdateUserPwd</ActionType><Password>" + Password + "</Password><UniqId>" + UniqId + "</UniqId></Root>";


    $.ajax({

        type: "POST",
        url: "frmPasswordDetail.aspx/UpdateUserPwd", // Location of the service 
        data: "{inXML : '" + XML + "'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var obj = jQuery.parseJSON(data.d.responseData);
            var Responcecode = jQuery.parseJSON(data.d.responseCode);

            
                window.location.href = 'frmDefault.aspx';
         

        },
        failur: function (msg) {
            alert(msg);
        }

    });

}

function GetParameterValues(param) {
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        if (urlparam[0] == param) {
            return urlparam[1];
        }
    }
}