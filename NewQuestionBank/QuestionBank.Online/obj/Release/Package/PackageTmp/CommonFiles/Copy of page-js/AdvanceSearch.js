
var Path = GlobalPath + "../Admin/frmUnit.aspx/";
var UnitPath = GlobalPath + "../Admin/frmTopic.aspx/";

$(document).ready(function () {    
    BindAdvanceGeo();
    $("#Select-GEO").change(function () {
        BindAdvanceQualification("0");
    });
    $("#Select-QualificationName").change(function () {
        BindAdvanceExamBoard("0", $("#Select-QualificationName").val());
    });
    $("#Select-ExamBoardName").change(function () {
        BindAdvanceSubject(0, $("#Select-GEO").val(), $("#Select-QualificationName").val(), $("#Select-ExamBoardName").val());
    });
    $("#Select-SubjectName").change(function () {
        BindAdvanceUnit("0", $(this).val());

    });
    $("#btnSearch").click(function () {
        BindGrid();
    });
});

function BindAdvanceGeo() {
    var InputXMLParam = "";
    $.ajax({
        type: "POST",
        url: Path + "Select_MappedGeo", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);                
                $('#Select-GEO').html($("<option></option>").val(0).html('--Select--'));
                $('#Select-QualificationName').html($("<option></option>").val(0).html('--Select--'));
                $('#Select-ExamBoardName').html($("<option></option>").val(0).html('--Select--'));
                $('#Select-SubjectName').html($("<option></option>").val(0).html('--Select--'));
                $('#Select-UnitName').html($("<option></option>").val(0).html('--Select--'));
                for (var i = 0; i < obj.Table.length; i++) {
                    $('#Select-GEO').append($("<option></option>").val(obj.Table[i].GeoID).html(obj.Table[i].GeoName));
                }
            }
        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function BindAdvanceQualification(Id) {
    var InputXMLParam = "<Root><GeoId>" + $("#Select-GEO").val() + "</GeoId></Root>";
    $.ajax({
        type: "POST",
        url: Path + "Select_MappedQualification", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                $('#Select-QualificationName').html($("<option></option>").val(0).html('--Select--'));
                $('#Select-ExamBoardName').html($("<option></option>").val(0).html('--Select--'));
                $('#Select-SubjectName').html($("<option></option>").val(0).html('--Select--'));
                for (var i = 0; i < obj.Table.length; i++) {
                    $('#Select-QualificationName').append($("<option></option>").val(obj.Table[i].QualificationID).html(obj.Table[i].QualificationName));
                }
                $('#Select-QualificationName').val(Id);

            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function BindAdvanceExamBoard(id, QualificationId) {
    var InputXMLParam = "<Root><GeoId>" + $("#Select-GEO").val() + "</GeoId><QualificationId>" + QualificationId + "</QualificationId></Root>";

    $.ajax({
        type: "POST",
        url: Path + "Select_MappedExamBoard", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                $('#Select-ExamBoardName').html(" ");
                $('#Select-ExamBoardName').append($("<option></option>").val(0).html('--Select--'));
                for (var i = 0; i < obj.Table.length; i++) {
                    $('#Select-ExamBoardName').append($("<option></option>").val(obj.Table[i].ExamBoardID).html(obj.Table[i].ExamBoardName));
                }
                $('#Select-ExamBoardName').val(id);
            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function BindAdvanceSubject(id, GeoId, QualificationId, ExamBoardId) {
    var InputXMLParam = "";
    var XMLParam = "";
    if ($('#Select-GEO').val() != "0") {
        XMLParam = '<GeoId>' + GeoId + '</GeoId>';
    }
    if ($('#Select-QualificationName').val() != "0") {
        XMLParam += '<QualificationID>' + QualificationId + '</QualificationID>';
    }
    if ($('#Select-ExamBoardName').val() != "0") {
        XMLParam += '<ExamBoardID>' + ExamBoardId + '</ExamBoardID>';
    }


    InputXMLParam = '<Root>' + XMLParam + '</Root>';
    $.ajax({
        type: "POST",
        url: Path + "Select_Subject", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            $('#Select-SubjectName').html('');
            $('#Select-SubjectName').append($("<option></option>").val(0).html('--Select--'));

            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                for (var i = 0; i < obj.Table.length; i++) {
                    $('#Select-SubjectName').append($("<option></option>").val(obj.Table[i].SubjectID).html(obj.Table[i].SubjectName));
                }
                $('#Select-SubjectName').val(id);
            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function BindAdvanceUnit(Id, SubjectId) {
    var InputXMLParam = "<Root><SubjectID>" + SubjectId + "</SubjectID></Root>";
    $.ajax({
        type: "POST",
        url: UnitPath + "Select_Subject_Unit", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                $('#Select-UnitName').html(" ");
                $('#Select-UnitName').append($("<option></option>").val(0).html('--Select--'));
                for (var i = 0; i < obj.Table.length; i++) {
                    $('#Select-UnitName').append($("<option></option>").val(obj.Table[i].UnitID).html(obj.Table[i].UnitName));
                }
                $('#Select-UnitName').val(Id);

            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}