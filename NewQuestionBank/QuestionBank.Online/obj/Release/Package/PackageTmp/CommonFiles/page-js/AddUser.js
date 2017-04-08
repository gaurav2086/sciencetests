var PagePath = GlobalPath + "/Admin/frmAddUser.aspx/";
$(document).ready(function () {


    BindGrid();
    $("#btnAdduser").click(function () {
        ClearControl();
        $('#myModal').modal('toggle');
        $('#myModal').modal('show');
    });


    $("#btnSave").click(function () {
        if ($("#UserType").val() == "0") {
            alert("Select User Type");
            $("#UserType").focus();
            return false;
        }

        if ($("#txtName").val() == "") {
            alert("Enter Your Full Name");
            $("#txtName").focus();
            return false;
        }

        if ($("#txtUserName").val() == "") {
            alert("Enter User Name");
            $("#txtUserName").focus();
            return false;
        }
        if ($("#txtEmailid").val() == "") {
            alert("Enter Email");
            $("#txtEmailid").focus();
            return false;
        }
        if ($("#txtPassword").val() == "") {
            alert("Enter Pasword");
            $("#txtPassword").focus();
            return false;
        }

        saveUserDetail();
        $('#myModal').modal('toggle');
        $('#myModal').modal('hide');

    });


});

$("#txtEmailid").change(function () {

    if (EmailValidation($("#txtEmailid").val()) == false) {
//        alert("Enter Correct Emai Id");
        $("#emailerrormsg").text("Enter Correct Emai Id");
        $("#txtEmailid").focus();
        return false;
    }
    else {
        $("#emailerrormsg").text("");
       
    }
});

function ClearControl() {

    $("#UserType").val(0);
    $("#txtUserName").val("");
    $("#txtEmailid").val("");
    $("#txtPassword").val("");
    $("#txtName").val(""); 
}



function BindGrid() {
    var InputXMLParam = "";
    $.ajax({
        type: "POST",
        url: PagePath + "Select_UserDetail", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#tblUserList tbody').remove();
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                for (i = 0; i < obj.Table.length; i++) {
                    $('#tblUserList').append('<tr class="tr" id="tr_' + obj.Table[i].UserId + '"><td style="display:none;">' + obj.Table[i].UserId + '</td><td>' + obj.Table[i].RN + '</td><td>' + obj.Table[i].FullName + '</td><td>' + obj.Table[i].UserType + "</td><td>" + obj.Table[i].UserName + "</td><td>" + obj.Table[i].EmailId + "</td><td style='display:none;'>" + obj.Table[i].Password + "</td><td><input  onclick='EditUserDetail(this);' type='button' class='btn-success' value='Edit' /></td><td><input  onclick='DeleteDetail(" + obj.Table[i].UserId + ");' type='button' class='btn-success' value='delete' /></td></tr>");
                }
                $('#lblCount').html("Total Records : " + obj.Table.length)
            }
            $('#tblUserList').dataTable({
               
                "bDestroy": true
               // "bSort": false
            });
        },
        failure: function (msg) {
            alert(msg);
        }
    });
}




function saveUserDetail() {

    var FullName = "<![CDATA[" + $("#txtName").val() + "]]>";
    var UserName = "<![CDATA[" + $("#txtUserName").val() + "]]>";
    var InputXMLParam = "<Root><UserId>" + $("#UserId").val() + "</UserId><UserType>" + $("#UserType").val() + "</UserType><UserName>" + UserName + "</UserName><EmailId>" + $("#txtEmailid").val() + "</EmailId><Password>" + $("#txtPassword").val() + "</Password><FullName>" + FullName + "</FullName></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "Save_UserDetail", // Location of the service 
        data: '{inXML :"' + InputXMLParam + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            ClearControl();
            BindGrid();
            $("#UserId").val("0");
        },
        failure: function (msg) {
            alert(msg);
        }
    });

}

function EditUserDetail(btn) {

    $("#UserId").val($(btn).parent().parent().find("td")[0].innerHTML);
    $("#txtName").val($(btn).parent().parent().find("td")[2].innerHTML);
    $("#UserType").val($(btn).parent().parent().find("td")[3].innerHTML);
    $("#txtUserName").val($(btn).parent().parent().find("td")[4].innerHTML);
    $("#txtEmailid").val($(btn).parent().parent().find("td")[5].innerHTML);
    $("#txtPassword").val($(btn).parent().parent().find("td")[6].innerHTML);

   
    $('#myModal').modal('toggle');
    $('#myModal').modal('show');

}



function DeleteDetail(Id) {

    $("#UserId").val(Id);
    var InputXMLParam = "<Root><UserId>" + $("#UserId").val() + "</UserId></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "Delete_UserDetail", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            BindGrid();
            $("#UserId").val("0");

        },
        failure: function (msg) {
            alert(msg);
        }
    });

}