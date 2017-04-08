var PagePath = GlobalPath + "/Admin/frmExamBoard.aspx/";
//var PagePath = GlobalPath + "../Admin/frmExamBoard.aspx/";

$(document).ready(function () {
    BindGrid();
    $("#btnSave").click(function () {
        if ($("#txtExamBoard").val() == "") {
            alert("Enter ExamBoard");
            $("#txtExamBoard").focus();
            return false;
        }
        if ($("#Description").val() == "") {
            alert("Enter Description");
            $("#Description").focus();
            return false;
        }
        SaveExamBoard();
        $('#myModal').modal('toggle');
        $('#myModal').modal('hide');
    });
    $("#btnAddExamBoard").click(function () {       

        $("#ExamBoardID").val("0");
        $("#txtExamBoard").val("");
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
        url: PagePath + "Select_ExamBoard", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#tblExamBoardList tbody').remove();
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                for (i = 0; i < obj.Table.length; i++) {
                    $('#tblExamBoardList').append('<tr class="tr" id="tr_' + obj.Table[i].ExamBoardID + '"><td style="display:none;">' + obj.Table[i].ExamBoardID + '</td><td>' + obj.Table[i].RN + '</td><td>' + obj.Table[i].ExamBoardName + "</td><td>" + obj.Table[i].Description + "</td><td>" + obj.Table[i].IsActive + "</td><td><input  onclick='EditExamBoard(this);' type='button' class='btn-success' value='Edit' /></td><td><input  onclick='delete_ExamBoard(" + obj.Table[i].ExamBoardID + ");' type='button' class='btn-success' value='delete' /></td></tr>");
                }

                $('#lblCount').html("Total Records : " + obj.Table.length);

            }
            $('#tblExamBoardList').dataTable({

                "bDestroy": true//,
               // "bSort": false
            });
        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function EditExamBoard(btn) {

    $("#ExamBoardID").val($(btn).parent().parent().find("td")[0].innerHTML);
    $("#txtExamBoard").val($(btn).parent().parent().find("td")[2].innerHTML);
    $("#Description").val($(btn).parent().parent().find("td")[3].innerHTML);

    if ($(btn).parent().parent().find("td")[4].innerHTML == "true")
        $("#chkIsActive").prop("checked", true);
    else
        $("#chkIsActive").prop("checked", false);
    $('#myModal').modal('toggle');
    $('#myModal').modal('show');
}
function SaveExamBoard() {
    var InputXMLParam = "<Root><ExamBoardID>" + $("#ExamBoardID").val() + "</ExamBoardID><ExamBoardName>" + $("#txtExamBoard").val() + "</ExamBoardName><Description>" + $("#Description").val() + "</Description><IsActive>" + $("#chkIsActive").prop("checked") + "</IsActive></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "Save_ExamBoard", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            BindGrid();
            $("#ExamBoardID").val("0");
            $("#txtExamBoard").val("");
            $("#chkIsActive").prop("checked", false);
           

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function delete_ExamBoard(Id) {

    $("#ExamBoardID").val(Id);
    var InputXMLParam = "<Root><ExamBoardID>" + $("#ExamBoardID").val() + "</ExamBoardID></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "delete_ExamBoard", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            BindGrid();
            $("#ExamBoardID").val("0");

        },
        failure: function (msg) {
            alert(msg);
        }
    });

}