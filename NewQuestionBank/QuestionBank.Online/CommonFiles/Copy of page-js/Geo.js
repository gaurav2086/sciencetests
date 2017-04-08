var PagePath = GlobalPath + "../Admin/frmGeo.aspx/";

$(document).ready(function () {
    BindGrid();
    $("#btnSave").click(function () {
        if ($("#txtGeo").val() == "") {
            alert("Enter Geo");
            $("#txtGeo").focus();
            return false;
        }
        SaveGeo();
        $('#myModal').modal('toggle');
        $('#myModal').modal('hide');

    });
    $("#btnAddGeo").click(function () {
        $("#GeoId").val("0");
        $("#txtGeo").val("");
        $("#chkIsActive").prop("checked", true);
        $('#myModal').modal('toggle');
        $('#myModal').modal('show');

        //  $("#divGeoAdd").show();
    });

});


function BindGrid() {
    var InputXMLParam = "";
    $.ajax({
        type: "POST",
        url: PagePath + "Select_Geo", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#tblGeoList tbody').remove();
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                for (i = 0; i < obj.Table.length; i++) {
                    $('#tblGeoList').append('<tr class="tr" id="tr_' + obj.Table[i].GeoID + '"><td style="display:none;">' + obj.Table[i].GeoID + '</td><td>' + obj.Table[i].GeoName + "</td><td>" + obj.Table[i].IsActive + "</td><td><input  onclick='EditGeo(this);' type='button' class='btn-success' value='Edit' /></td><td><input  onclick='deleteGeo(" + obj.Table[i].GeoID + ");' type='button' class='btn-success' value='delete' /></td></tr>");
                }
                $('#lblCount').html("Total Records : " + obj.Table.length)
            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function EditGeo(btn) {

    $("#GeoId").val($(btn).parent().parent().find("td")[0].innerHTML);
    $("#txtGeo").val($(btn).parent().parent().find("td")[1].innerHTML);

    if ($(btn).parent().parent().find("td")[2].innerHTML == "true")
        $("#chkIsActive").prop("checked", true);
    else
        $("#chkIsActive").prop("checked", false);
    // $("#divGeoAdd").show();
    $('#myModal').modal('toggle');
    $('#myModal').modal('show');

}

function SaveGeo() {
    var InputXMLParam = "<Root><GeoId>" + $("#GeoId").val() + "</GeoId><GeoName>" + $("#txtGeo").val() + "</GeoName><IsActive>" + $("#chkIsActive").prop("checked") + "</IsActive></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "Save_Geo", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            BindGrid();
            $("#GeoId").val("0");
            $("#txtGeo").val("");
            $("#chkIsActive").prop("checked", false);
            //$("#divGeoAdd").hide();
            //   $('#myModal').modal('toggle');
            // $('#myModal').modal('hide');

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}

function deleteGeo(Id) {

    $("#GeoId").val(Id);
    var InputXMLParam = "<Root><GeoId>" + $("#GeoId").val() + "</GeoId></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "delete_Geo", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            BindGrid();
            $("#GeoId").val("0");

        },
        failure: function (msg) {
            alert(msg);
        }
    });

}