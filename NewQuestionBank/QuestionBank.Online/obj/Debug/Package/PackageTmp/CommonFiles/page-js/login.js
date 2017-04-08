$(document).ready(function () {
    $("#btnlogin").click(function () {
        if ($("#txtUser").val() == '') {
            alert('Enter User Name');
            $("#txtUser").focus();
            return;
        }
        if ($("#txtPassword").val() == '') {
            alert('Enter User Password');
            $("#txtPassword").focus();
            return;

        }
       

    });
});