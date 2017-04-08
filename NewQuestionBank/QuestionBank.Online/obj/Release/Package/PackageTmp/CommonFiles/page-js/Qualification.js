var PagePath = GlobalPath + "/Admin/frmQualification.aspx/";
//var PagePath = GlobalPath + "../Admin/frmQualification.aspx/";

$(document).ready(function () {
    BindGrid();
    $("#btnSave").click(function () {
        if ($("#txtQualification").val() == "") {
            alert("Enter Qualification");
            $("#txtQualification").focus();
            return false;
        }
        if ($("#Description").val() == "") {
            alert("Enter Description");
            $("#Description").focus();
            return false;
        }
        SaveQualification();
        $('#myModal').modal('toggle');
        $('#myModal').modal('hide');
    });
    $("#btnAddQualification").click(function () {
        $("#QualificationID").val("0");
        $("#txtQualification").val("");
        $("#Description").val("");
        $("#chkIsActive").prop("checked", true);
        $('#myModal').modal('toggle');
        $('#myModal').modal('show');
    });

    });


    function BindGrid() {
        var InputXMLParam = "";
        $.ajax({
            type: "POST",
            url: PagePath + "Select_Qualification", // Location of the service 
            data: "{inXML :'" + InputXMLParam + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $('#tblQualificationList tbody').remove();
                var respCode = data.d.responseCode;
                if (respCode == 0) {
                    obj = jQuery.parseJSON(data.d.responseData);
                    for (i = 0; i < obj.Table.length; i++) {
                        $('#tblQualificationList').append('<tr class="tr" id="tr_' + obj.Table[i].QualificationID + '"><td style="display:none;">' + obj.Table[i].QualificationID + '</td><td>' + obj.Table[i].RN + '</td><td>' + obj.Table[i].QualificationName + "</td><td>" + obj.Table[i].Description + "</td><td>" + obj.Table[i].IsActive + "</td><td><input  onclick='EditQualification(this);' type='button' class='btn-success' value='Edit' /></td><td><input  onclick='delete_Qualification(" + obj.Table[i].QualificationID + ");' type='button' class='btn-success' value='delete' /></td></tr>");
                    }
                    $('#lblCount').html("Total Records : " + obj.Table.length);

                }
                $('#tblQualificationList').dataTable({

                    "bDestroy": true//,
                    //"bSort": false
                });
            },
            failure: function (msg) {
                alert(msg);
            }
        });
    }

    function EditQualification(btn) {

        $("#QualificationID").val($(btn).parent().parent().find("td")[0].innerHTML);
        $("#txtQualification").val($(btn).parent().parent().find("td")[2].innerHTML);
        $("#Description").val($(btn).parent().parent().find("td")[3].innerHTML);

        if ($(btn).parent().parent().find("td")[4].innerHTML == "true")
            $("#chkIsActive").prop("checked", true);
        else
            $("#chkIsActive").prop("checked", false);
        $('#myModal').modal('toggle');
        $('#myModal').modal('show');
    }

    function SaveQualification() {
        var InputXMLParam = "<Root><QualificationID>" + $("#QualificationID").val() + "</QualificationID><QualificationName>" + $("#txtQualification").val() + "</QualificationName><Description>" + $("#Description").val() + "</Description><IsActive>" + $("#chkIsActive").prop("checked") + "</IsActive></Root>";
        $.ajax({
            type: "POST",
            url: PagePath + "Save_Qualification", // Location of the service 
            data: "{inXML :'" + InputXMLParam + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                BindGrid();
                $("#QualificationID").val("0");
                $("#txtQualification").val("");
                $("#chkIsActive").prop("checked", false);
                

            },
            failure: function (msg) {
                alert(msg);
            }
        });
    }

    function delete_Qualification(Id) {

        $("#QualificationID").val(Id);
        var InputXMLParam = "<Root><QualificationID>" + $("#QualificationID").val() + "</QualificationID></Root>";
        $.ajax({
            type: "POST",
            url: PagePath + "delete_Qualification", // Location of the service 
            data: "{inXML :'" + InputXMLParam + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                BindGrid();
                $("#QualificationID").val("0");

            },
            failure: function (msg) {
                alert(msg);
            }
        });

    }