var PagePath = GlobalPath + "/Admin/frmMapping.aspx/";
//var PagePath = GlobalPath + "../Admin/frmMapping.aspx/";

$(document).ready(function () {
    BindGeo();
    BindQualification();
    BindExamBoard();
    BindGrid();
    $("#btnSave").click(function () {
        if ($("#GeoName").val() == "0") {
            alert("Select Geo");            
            return false;
        }
        if ($("#QualificationName").val() == "0") {
            alert("Select Qualification");
            return false;
        }
        if ($("#ExamBoardName").val() == "0") {
            alert("Select ExamBoard");
            return false;
        }
        SaveMapping();
        $('#myModal').modal('toggle');
        $('#myModal').modal('hide');
    });
    $("#btnAddMapping").click(function () {
        $("#GQEM_ID").val("0");
        $('#myModal').modal('toggle');
        $('#myModal').modal('show');
    });
});
function BindGeo() {
    var InputXMLParam = "";
    $.ajax({
        type: "POST",
        url: PagePath + "Select_Geo", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                $('#GeoName').html(" ");
                $('#GeoName').append($("<option></option>").val(0).html('--Select--'));
                for (var i = 0; i < obj.Table.length; i++) {
                    $('#GeoName').append($("<option></option>").val(obj.Table[i].GeoID).html(obj.Table[i].GeoName));
                }
          
            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function BindQualification() {
    var InputXMLParam = "";
    $.ajax({
        type: "POST",
        url: PagePath + "Select_Qualification", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                $('#QualificationName').html(" ");
                $('#QualificationName').append($("<option></option>").val(0).html('--Select--'));
                for (var i = 0; i < obj.Table.length; i++) {
                    $('#QualificationName').append($("<option></option>").val(obj.Table[i].QualificationID).html(obj.Table[i].QualificationName));
                }
            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function BindExamBoard() {
    var InputXMLParam = "";
    $.ajax({
        type: "POST",
        url: PagePath + "Select_ExamBoard", // Location of the service 
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
            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function BindGrid() {
    var InputXMLParam = "";
    $.ajax({
        type: "POST",
        url: PagePath + "Select_Mapping", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#tblMappingList tbody').remove();
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                for (i = 0; i < obj.Table.length; i++) {
                    $('#tblMappingList').append('<tr class="tr" id="tr_' + obj.Table[i].GQEM_ID + '"><td style="display:none;">' + obj.Table[i].GQEM_ID + '</td><td style="display:none;">' + obj.Table[i].GeoID + "</td><td>" + obj.Table[i].RN + "</td><td>" + obj.Table[i].GeoName + "</td><td style='display:none;'>" + obj.Table[i].QualificationID + "</td><td>" + obj.Table[i].QualificationName + "</td><td style='display:none;'>" + obj.Table[i].ExamBoardID + "</td><td>" + obj.Table[i].ExamBoardName + "</td><td><input  onclick='EditMapping(this);' type='button' class='btn-success' value='Edit' /></td><td><input  onclick='delete_Mapping(" + obj.Table[i].GQEM_ID + ");' type='button' class='btn-success' value='delete' /></td></tr>");
                }
                $('#lblCount').html("Total Records : " + obj.Table.length)
         
            }
            $('#tblMappingList').dataTable({

                "bDestroy": true//,
                //"bSort": false
            });
        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function EditMapping(btn) {

    $("#GQEM_ID").val($(btn).parent().parent().find("td")[0].innerHTML);
    $("#GeoName").val($(btn).parent().parent().find("td")[1].innerHTML)
    $("#QualificationName").val($(btn).parent().parent().find("td")[4].innerHTML)
    $("#ExamBoardName").val($(btn).parent().parent().find("td")[6].innerHTML)
    $('#myModal').modal('toggle');
    $('#myModal').modal('show');
}
function SaveMapping() {
    var InputXMLParam = "<Root><GQEM_ID>" + $("#GQEM_ID").val() + "</GQEM_ID><GeoId>" + $("#GeoName").val() + "</GeoId><QualificationID>" + $("#QualificationName").val() + "</QualificationID><ExamBoardID>" + $("#ExamBoardName").val() + "</ExamBoardID></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "Save_Mapping", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            BindGrid();
            $("#GQEM_ID").val("0");
            $("#GeoName").val("0");
            $("#QualificationName").val("0");
            $("#ExamBoardName").val("0");
           

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function delete_Mapping(Id) {

    $("#GQEM_ID").val(Id);
    var InputXMLParam = "<Root><GQEM_ID>" + $("#GQEM_ID").val() + "</GQEM_ID></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "delete_Mapping", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            BindGrid();
            $("#GQEM_ID").val("0");

        },
        failure: function (msg) {
            alert(msg);
        }
    });

}