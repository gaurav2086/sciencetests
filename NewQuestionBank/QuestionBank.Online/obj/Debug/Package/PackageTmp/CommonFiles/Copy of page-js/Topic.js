var PagePath = GlobalPath + "../Admin/frmTopic.aspx/";

$(document).ready(function () {
    $('#Select-GEO').html($("<option></option>").val(0).html('--Select--'));
    $('#Select-QualificationName').html($("<option></option>").val(0).html('--Select--'));
    $('#Select-ExamBoardName').html($("<option></option>").val(0).html('--Select--'));
    $('#Select-SubjectName').html($("<option></option>").val(0).html('--Select--'));
    $('#Select-UnitName').html($("<option></option>").val(0).html('--Select--'));
    BindGeo();
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
            return false;
        }
        if ($("#UnitName").val() == "0") {
            alert("select Unit");
            return false;
        }
        if ($("#txtTopicName").val() == "") {
            alert("Enter Topic");
            $("#txtTopicName").focus();
            return false;
        }
        SaveTopic();
        $('#myModal').modal('toggle');
        $('#myModal').modal('hide');
    });
    $("#btnAddTopic").click(function () {
        $("#TopicID").val("0");
        $("#GeoName").val("0");
        $('#QualificationName').html($("<option></option>").val(0).html('--Select--'));
        $('#ExamBoardName').html($("<option></option>").val(0).html('--Select--'));
        $('#SubjectName').html($("<option></option>").val(0).html('--Select--'));
        $('#UnitName').html($("<option></option>").val(0).html('--Select--'));
        $("#txtTopicName").val("");
        $("#chkIsActive").prop("checked", true);
        $('#myModal').modal('toggle');
        $('#myModal').modal('show');
    });
    $("#SubjectName").change(function () {
        BindUnit("0",$(this).val());

    });
    $("#GeoName").change(function () {
        BindQualification("0");
    });
    $("#QualificationName").change(function () {
        BindExamBoard("0", $("#QualificationName").val());
    });
    $("#ExamBoardName").change(function () {
        BindSubject(0, $("#GeoName").val(), $("#QualificationName").val(), $("#ExamBoardName").val());
    });
});
function BindGeo() {
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
                $('#QualificationName').html($("<option></option>").val(0).html('--Select--'));
                $('#ExamBoardName').html($("<option></option>").val(0).html('--Select--'));
                $('#SubjectName').html($("<option></option>").val(0).html('--Select--'));
                $('#UnitName').html($("<option></option>").val(0).html('--Select--'));  
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
function BindUnit(Id, SubjectId) {
    var InputXMLParam = "<Root><SubjectID>" + SubjectId + "</SubjectID></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "Select_Subject_Unit", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#tblUnitList tbody').remove();
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                $('#UnitName').html(" ");
                $('#UnitName').append($("<option></option>").val(0).html('--Select--'));
                for (var i = 0; i < obj.Table.length; i++) {
                    $('#UnitName').append($("<option></option>").val(obj.Table[i].UnitID).html(obj.Table[i].UnitName));
                }
                $('#UnitName').val(Id);
                
            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}

function BindGrid() {
    var InputXMLParam = "";
    var XMLParam = "";
    if ($('#Select-GEO').val() != "0") {
        XMLParam = '<GeoId>' + $('#Select-GEO').val() + '</GeoId>';
    }
    if ($('#Select-QualificationName').val() != "0") {
        XMLParam += '<QualificationID>' + $('#Select-QualificationName').val() + '</QualificationID>';
    }
    if ($('#Select-ExamBoardName').val() != "0") {
        XMLParam += '<ExamBoardID>' + $('#Select-ExamBoardName').val() + '</ExamBoardID>';
    }
    if ($('#Select-SubjectName').val() != "0") {
        XMLParam += '<SubjectID>' + $('#Select-SubjectName').val() + '</SubjectID>';
    }
    if ($('#Select-UnitName').val() != "0") {
        XMLParam += '<UnitId>' + $('#Select-UnitName').val() + '</UnitId>';
    }
    InputXMLParam = '<Root>' + XMLParam + '</Root>';
    $.ajax({
        type: "POST",
        url: PagePath + "Select_Topic", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#tblTopicList tbody').remove();
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                for (i = 0; i < obj.Table.length; i++) {

                    $('#tblTopicList').append('<tr class="tr" id="tr_' + obj.Table[i].TopicID + '"><td style="display:none;">' + obj.Table[i].TopicID + '</td><td style="display:none;">' + obj.Table[i].GeoID + "</td><td>" + obj.Table[i].GeoName + "</td><td style='display:none;'>" + obj.Table[i].QualificationID + "</td><td>" + obj.Table[i].QualificationName + "</td><td style='display:none;'>" + obj.Table[i].ExamBoardID + "</td><td>" + obj.Table[i].ExamBoardName + '</td><td style="display:none;">' + obj.Table[i].SubjectID + "</td><td>" + obj.Table[i].SubjectName + '</td><td style="display:none;">' + obj.Table[i].UnitID + "</td><td>" + obj.Table[i].UnitName + "</td><td>" + obj.Table[i].TopicDESC + "</td><td>" + obj.Table[i].IsActive + "</td><td>" + obj.Table[i].QuestionCount + "</td><td><input  onclick='EditTopic(this);' type='button' class='btn-success' value='Edit' /></td><td><input  onclick='delete_Topic(" + obj.Table[i].TopicID + ");' type='button' class='btn-success' value='delete' /></td></tr>");
                }
                $("#pagination_info").pagination({ items: obj.Table.length, itemsOnPage: 10, cssStyle: 'light-theme', TabGrid: 'tblTopicList' });
                $('#lblCount').html("Total Records : " + obj.Table.length);

            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function EditTopic(btn) {

    $("#TopicID").val($(btn).parent().parent().find("td")[0].innerHTML);
    var GId = $(btn).parent().parent().find("td")[1].innerHTML;
    var QId = $(btn).parent().parent().find("td")[3].innerHTML;
    $("#GeoName").val(GId)
    BindQualification(QId);
    BindExamBoard($(btn).parent().parent().find("td")[5].innerHTML, $(btn).parent().parent().find("td")[3].innerHTML);
    BindSubject($(btn).parent().parent().find("td")[7].innerHTML, GId, QId, $(btn).parent().parent().find("td")[5].innerHTML);
    BindUnit($(btn).parent().parent().find("td")[9].innerHTML, $(btn).parent().parent().find("td")[7].innerHTML);

    $("#txtTopicName").val($(btn).parent().parent().find("td")[11].innerHTML)

    if ($(btn).parent().parent().find("td")[12].innerHTML == "true")
        $("#chkIsActive").prop("checked", true);
    else
        $("#chkIsActive").prop("checked", false);
    //$("#divTopicAdd").show();
    $('#myModal').modal('toggle');
    $('#myModal').modal('show');
}

function SaveTopic() {
    var InputXMLParam = "<Root><TopicID>" + $("#TopicID").val() + "</TopicID><TopicDESC>" + $("#txtTopicName").val() + "</TopicDESC><UnitId>" + $("#UnitName").val() + "</UnitId><SubjectID>" + $("#SubjectName").val() + "</SubjectID><IsActive>" + $("#chkIsActive").prop("checked") + "</IsActive></Root>";

    $.ajax({
        type: "POST",
        url: PagePath + "Save_Topic", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            BindGrid();
            $("#UnitName").val("0");
            $("#SubjectName").val("0");            
            $("#TopicID").val("0");
            $("#txtTopicName").val("");
            $("#chkIsActive").prop("checked", false);
            //$("#divTopicAdd").hide();

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}

function delete_Topic(Id) {

    $("#TopicID").val(Id);
    var InputXMLParam = "<Root><TopicID>" + $("#TopicID").val() + "</TopicID></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "delete_Topic", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            BindGrid();
            $("#TopicID").val("0");

        },
        failure: function (msg) {
            alert(msg);
        }
    });

}

  

function BindSubject(id, GeoId, QualificationId, ExamBoardId) {
    var InputXMLParam = "";
    var XMLParam = "";
    if ($('#GeoName').val() != "0") {
        XMLParam = '<GeoId>' + GeoId + '</GeoId>';
    }
    if ($('#QualificationName').val() != "0") {
        XMLParam += '<QualificationID>' + QualificationId + '</QualificationID>';
    }
    if ($('#ExamBoardName').val() != "0") {
        XMLParam += '<ExamBoardID>' + ExamBoardId + '</ExamBoardID>';
    }
    InputXMLParam = '<Root>' + XMLParam + '</Root>';
    $.ajax({
        type: "POST",
        url: PagePath + "Select_Subject", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            $('#SubjectName').html('');
            $('#SubjectName').append($("<option></option>").val(0).html('--Select--'));

            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                for (var i = 0; i < obj.Table.length; i++) {
                    $('#SubjectName').append($("<option></option>").val(obj.Table[i].SubjectID).html(obj.Table[i].SubjectName));
                }
                $('#SubjectName').val(id);
            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}