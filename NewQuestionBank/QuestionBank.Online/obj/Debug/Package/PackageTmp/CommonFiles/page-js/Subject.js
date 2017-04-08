var PagePath = GlobalPath + "/Admin/frmSubject.aspx/";
//var PagePath = GlobalPath + "../Admin/frmSubject.aspx/";

$(document).ready(function () {
    BindGeoandSubject();

    BindGrid();
    $("#btnSave").click(function () {
        if ($("#GeoName").val() == "0") {
            alert("select Geo");
            return false;
        }
        if ($("#QualificationName").val() == "0") {
            alert("select Qualification");
            return false;
        }
        if ($("#ExamBoardName").val() == "0") {
            alert("select ExamBoard");
            return false;
        }
        if ($("#SubjectName").val() == "0") {
            alert("select Subject");
            $("#SubjectName").focus();
            return false;
        }

        SaveSubject();
        $('#myModal').modal('toggle');
        $('#myModal').modal('hide');
    });
    $("#btnAddSubject").click(function () {
        $("#SubjectID").val("0");
        $("#SubjectName").val("0");
        $("#GeoName").val("0");
        $("#QualificationName").val("0");
        $("#ExamBoardName").val("0");
        $("#chkIsActive").prop("checked", true);
        $('#myModal').modal('toggle');
        $('#myModal').modal('show');
    });
    $("#GeoName").change(function () {
        BindQualification("0");
    });
    $("#QualificationName").change(function () {
        BindExamBoard("0", $("#QualificationName").val());
    });
});
function BindGeoandSubject() {
    var InputXMLParam = "";
    $.ajax({
        type: "POST",
        url: PagePath + "Select_MappedGeo", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                $('#GeoName').html(" ");
                $('#QualificationName').html(" ");
                $('#ExamBoardName').html(" ");
                $('#SubjectName').html(" ");
                $('#GeoName').append($("<option></option>").val(0).html('--Select--'));
                $('#SubjectName').append($("<option></option>").val(0).html('--Select--'));
                for (var i = 0; i < obj.Table.length; i++) {
                    $('#GeoName').append($("<option></option>").val(obj.Table[i].GeoID).html(obj.Table[i].GeoName));
                }
                for (var i = 0; i < obj.Table1.length; i++) {
                    $('#SubjectName').append($("<option></option>").val(obj.Table1[i].SubjectName).html(obj.Table1[i].SubjectName));
                }
         
            }
        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function BindQualification(Id) {
    var InputXMLParam = "<Root><GeoId>" + $("#GeoName").val() + "</GeoId></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "Select_MappedQualification", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                $('#QualificationName').html(" ");
                $('#ExamBoardName').html(" ");
                $('#QualificationName').append($("<option></option>").val(0).html('--Select--'));
                for (var i = 0; i < obj.Table.length; i++) {
                    $('#QualificationName').append($("<option></option>").val(obj.Table[i].QualificationID).html(obj.Table[i].QualificationName));
                }
                $('#QualificationName').val(Id);
                
            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function BindExamBoard(id, QualificationId) {
    var InputXMLParam = "<Root><GeoId>" + $("#GeoName").val() + "</GeoId><QualificationId>" + QualificationId + "</QualificationId></Root>";

    $.ajax({
        type: "POST",
        url: PagePath + "Select_MappedExamBoard", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                $('#ExamBoardName').html(" ");
                $('#ExamBoardName').append($("<option></option>").val(0).html('--Select--'));
                for (var i = 0; i < obj.Table.length; i++) {
                    $('#ExamBoardName').append($("<option></option>").val(obj.Table[i].ExamBoardID).html(obj.Table[i].ExamBoardName));
                }
                $('#ExamBoardName').val(id);
            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function BindGrid() {
    var InputXMLParam = "<Root></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "Select_Subject", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#tblSubjectList tbody').remove();
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                for (i = 0; i < obj.Table.length; i++) {

                    $('#tblSubjectList').append('<tr class="tr" id="tr_' + obj.Table[i].SubjectID + '"><td style="display:none;">' + obj.Table[i].SubjectID + '</td><td style="display:none;">' + obj.Table[i].GeoID + "</td><td>" + obj.Table[i].RN + "</td><td>" + obj.Table[i].GeoName + "</td><td style='display:none;'>" + obj.Table[i].QualificationID + "</td><td>" + obj.Table[i].QualificationName + "</td><td style='display:none;'>" + obj.Table[i].ExamBoardID + "</td><td>" + obj.Table[i].ExamBoardName + "</td><td>" + obj.Table[i].SubjectName + "</td><td>" + obj.Table[i].TotalUnit + "</td><td>" + obj.Table[i].IsActive + "</td><td><input  onclick='EditSubject(this);' type='button' class='btn-success' value='Edit' /></td><td><input  onclick='delete_Subject(" + obj.Table[i].SubjectID + ");' type='button' class='btn-success' value='delete' /></td></tr>");
                }
                $('#lblCount').html("Total Records : " + obj.Table.length);

            }
            $('#tblSubjectList').dataTable({

                "bDestroy": true//,
               // "bSort": false
            });
        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function EditSubject(btn) {

    $("#SubjectID").val($(btn).parent().parent().find("td")[0].innerHTML);
    $("#GeoName").val($(btn).parent().parent().find("td")[1].innerHTML)    
    BindQualification($(btn).parent().parent().find("td")[4].innerHTML);
    BindExamBoard($(btn).parent().parent().find("td")[6].innerHTML,$(btn).parent().parent().find("td")[4].innerHTML);

   // $("#txtSubjectName").val($(btn).parent().parent().find("td")[8].innerHTML)
    $("#SubjectName").val($(btn).parent().parent().find("td")[8].innerHTML)
    //$("#SubjectName option:contains(" + $(btn).parent().parent().find("td")[8].innerHTML + ")").attr('selected', 'selected');
    
    if ($(btn).parent().parent().find("td")[10].innerHTML == "true")
        $("#chkIsActive").prop("checked", true);
    else
        $("#chkIsActive").prop("checked", false);
    $('#myModal').modal('toggle');
    $('#myModal').modal('show');
}

function SaveSubject() {
    var InputXMLParam = "<Root><SubjectID>" + $("#SubjectID").val() + "</SubjectID><SubjectName>" + $("#SubjectName").val() + "</SubjectName><GeoId>" + $("#GeoName").val() + "</GeoId><QualificationID>" + $("#QualificationName").val() + "</QualificationID><ExamBoardID>" + $("#ExamBoardName").val() + "</ExamBoardID><IsActive>" + $("#chkIsActive").prop("checked") + "</IsActive></Root>";

    $.ajax({
        type: "POST",
        url: PagePath + "Save_Subject", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            BindGrid();
            $("#GeoName").val("0");
            $("#QualificationName").val("0");
            $("#ExamBoardName").val("0");            
            $("#SubjectID").val("0");
            $("#SubjectName").val("0");
            $("#chkIsActive").prop("checked", false);
            

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}

function delete_Subject(Id) {

    $("#SubjectID").val(Id);
    var InputXMLParam = "<Root><SubjectID>" + $("#SubjectID").val() + "</SubjectID></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "delete_Subject", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            BindGrid();
            $("#SubjectID").val("0");

        },
        failure: function (msg) {
            alert(msg);
        }
    });

}