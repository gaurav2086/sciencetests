
var Path = GlobalPath + "/Admin/frmHome.aspx/";
//var Path = GlobalPath + "../Admin/frmHome.aspx/";

$(document).ready(function () {
    BindDeshBoard();
});
function BindDeshBoard() {
    var InputXMLParam = "";
    $.ajax({
        type: "POST",
        url: Path + "Select_DeshBoard", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                $('#GEO').text(obj.Table[0].GeoID);
                $('#Qualification').text(obj.Table[0].QualificationID);
                $('#ExamBoard').text(obj.Table[0].ExamBoardID);
                $('#Subject').text(obj.Table[0].Subject);
                $('#Unit').text(obj.Table[0].UnitID);
                $('#Category').text(obj.Table[0].CategoryID);
                $('#Questions').text(obj.Table[0].QuestionID);
                $('#Topic').text(obj.Table[0].TopicID);
                
            }
        },
        failure: function (msg) {
            alert(msg);
        }
    });
}