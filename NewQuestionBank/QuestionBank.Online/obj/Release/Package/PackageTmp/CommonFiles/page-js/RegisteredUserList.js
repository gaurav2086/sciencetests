var PagePath = GlobalPath + "/Admin/frmRegisteredUser.aspx/";
$(document).ready(function () {
    BindGrid();
});

function BindGrid() {
    var InputXMLParam = "<Getlookup><ActionType>SelectRegisteredUser</ActionType></Getlookup>";
    $.ajax({
        type: "POST",
        url: PagePath + "GetRegisteredUserDetails", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#tblUserList tbody').remove();
            var respCode = data.d.responseCode;
            var UserNo = 0;
            var DayRemainigStatus = "";

            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                for (i = 0; i < obj.Table.length; i++) {
                    UserNo++;
                    if (Number(obj.Table[i].DayRemaing)< 0) {
                        DayRemainigStatus="<label style='color:Red;font-size:13px'>Plan Expired..!</label>"
                    }
                    else {
                        DayRemainigStatus=obj.Table[i].DayRemaing;
                    }
                    $('#tblRegistUserList').append('<tr class="tr" id="tr_' + obj.Table[i].UserId + '"><td>' + UserNo + '</td><td>' + obj.Table[i].UserName + '</td><td>' + obj.Table[i].PlanName + '</td><td>' + obj.Table[i].PlanDuration + "</td><td>" + obj.Table[i].Cuurency + " " + obj.Table[i].PlanCost + "</td><td>" + obj.Table[i].ActivationDate + "</td><td>" + obj.Table[i].Expirydate + "</td><td>" + DayRemainigStatus + "</td></tr>");
                }
                $('#lblCount').html("Total Records : " + obj.Table.length)
            }
            $('#tblRegistUserList').dataTable({

                "bDestroy": true
               // "bSort": false
            });
        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
