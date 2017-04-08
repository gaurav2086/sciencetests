var PagePath = GlobalPath + "../Admin/frmCategory.aspx/";

$(document).ready(function () {

    BindGrid();
    BindSubject('');
    $("#btnSave").click(function () {

        if ($("#SubjectName").val() == "0") {
            alert("select Subject");
            return false;
        }
        if ($("#txtCategoryName").val() == "") {
            alert("Enter Category");
            $("#txtCategoryName").focus();

            return false;
        }
        SaveCategory();
        $('#myModal').modal('toggle');
        $('#myModal').modal('hide');
    });
    $("#btnAddCategory").click(function () {
        $("#CategoryID").val("0");
        $("#txtCategoryName").val("");
        $("#chkIsActive").prop("checked", true);
        $('#myModal').modal('toggle');
        $('#myModal').modal('show');
    });

});

function BindSubject(Subject) {
    var InputXMLParam = "";
   
    InputXMLParam = '<Root></Root>';
    $.ajax({
        type: "POST",
        url: PagePath + "Select_DistinctSubject", // Location of the service 
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
                    $('#SubjectName').append($("<option></option>").val(obj.Table[i].SubjectName).html(obj.Table[i].SubjectName));
                }
                if(Subject!='')
                $("#SubjectName option:contains('" + Subject + "')").attr('selected', 'selected');
                
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
        url: PagePath + "Select_Category", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#tblCategoryList tbody').remove();
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                for (i = 0; i < obj.Table.length; i++) {
                    $('#tblCategoryList').append('<tr class="tr" id="tr_' + obj.Table[i].CategoryID + '"><td style="display:none;">' + obj.Table[i].CategoryID + "</td><td>" + obj.Table[i].Subject + "</td><td>" + obj.Table[i].CategoryName + "</td><td>" + obj.Table[i].IsActive + "</td><td><input  onclick='EditCategory(this);' type='button' class='btn-success' value='Edit' /></td><td><input  onclick='delete_Category(" + obj.Table[i].CategoryID + ");' type='button' class='btn-success' value='delete' /></td></tr>");
                }
                $('#lblCount').html("Total Records : " + obj.Table.length)
         
            }
            $("#pagination_info").pagination({ items: obj.Table.length, itemsOnPage: 10, cssStyle: 'light-theme', TabGrid: 'tblCategoryList' });

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
function EditCategory(btn) {
          
    $("#CategoryID").val($(btn).parent().parent().find("td")[0].innerHTML);    
    $("#SubjectName option:contains('" + $(btn).parent().parent().find("td")[1].innerHTML + "')").attr('selected', 'selected');
    $("#txtCategoryName").val($(btn).parent().parent().find("td")[2].innerHTML)

    if ($(btn).parent().parent().find("td")[3].innerHTML == "true")
        $("#chkIsActive").prop("checked", true);
    else
        $("#chkIsActive").prop("checked", false);
    $('#myModal').modal('toggle');
    $('#myModal').modal('show');
}

function SaveCategory() {
    var InputXMLParam = "<Root><CategoryID>" + $("#CategoryID").val() + "</CategoryID><CategoryName>" + $("#txtCategoryName").val() + "</CategoryName><SubjectID>" + $("#SubjectName").val() + "</SubjectID><IsActive>" + $("#chkIsActive").prop("checked") + "</IsActive></Root>";

    $.ajax({
        type: "POST",
        url: PagePath + "Save_Category", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            BindGrid();
            $("#SubjectName").val("0");           
            $("#CategoryID").val("0");
            $("#txtCategoryName").val("");
            $("#chkIsActive").prop("checked", false);


        },
        failure: function (msg) {
            alert(msg);
        }
    });
}

function delete_Category(Id) {
    $("#CategoryID").val(Id);
    var InputXMLParam = "<Root><CategoryID>" + $("#CategoryID").val() + "</CategoryID></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "delete_Category", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            BindGrid();
            $("#CategoryID").val("0");

        },
        failure: function (msg) {
            alert(msg);
        }
    });

}