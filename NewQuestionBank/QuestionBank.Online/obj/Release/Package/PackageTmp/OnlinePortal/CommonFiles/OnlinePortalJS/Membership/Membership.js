//var GlobalPath = "../../../..";
//var GlobalServiceURL = GlobalPath + "/CommonFiles/CommonUIService/CommonUIService.asmx/";

var MemebershipPlanType = "";
var MembershipPlanId = 0, AdditionaluserCost = 0, Totalplancoast = 0, Plancoast = 0, DurationInMonth = 0, UserId=0;
var PUserStatus = "", UserStatus = "", GUID = "" ;

$(document).ready(function () {



    $("#TermCondition").attr('href', TermCondition)
    var MonthName = $("#hdnmonthname").val();
    var Year = $("#hdnyear").val();

    BindMonthYear(MonthName, Year)

    var GUID = generateUUID();
    $("#cartId").val(GUID);

    $("#DivRenewal").hide();
    $("#btnRenew").hide();
    $("#lblemailerror").hide();
    $("#lblPostalcodeerror").hide();
    $("#btnJoin").attr("disabled", true);


    $("#PlanAmount").text("0");
    $("#Currency").text("");
    $("#planname").text("");
    //    $("#childrenno").text("1");
    $("#Country").FillCountry("Country", 0);




    UserId = $('#lblUserid').text();
    PUserStatus = GetParameterValues('Status');
    UserStatus = $('#hdnStatus').text();



    if (PUserStatus == 'False' || UserStatus == 'False') {
        $("#DivMembershipplan").hide();

        BindDataforRenewal(UserId)

    }
    else {
        $("#DivRenewal").hide();
        $("#DivMembershipplan").show();
        $("#DivMembershipplan").css("visibility", "visible");

        BindMembershipPlan();
    }


    $("#chkTermCondition").change(function () {

        if ($('input[name= TermCondition]:checked').length <= 0) {
            $("#btnJoin").attr("disabled", true);
        }
        else {

            $("#btnJoin").attr("disabled", false);
        }

    });


    $(document).on('click', '[id^="btnMonthly-"]', function () {

        MembershipPlanId = this.id.split('-')[1];
        MemebershipPlanType = this.id.split('-')[2];
        DurationInMonth = this.id.split('-')[3];
        $("#planname").text(MemebershipPlanType);
        BindMembershipPlanDetails(MembershipPlanId);
     

        $("#DivMonthly").removeClass('chooseplan');
        $("#DivMonthly").addClass('plan2bg');
        $("#DivAnnualy").addClass('chooseplan');

        $("#DivMonthlyP").removeClass('planprice1');
        $("#DivAnnualyP").removeClass('planprice2');
        $("#DivMonthlyP").addClass('planprice2');
        $("#DivAnnualyP").addClass('planprice1');

    });

    $(document).on('click', '[id^="btnAnnualy-"]', function () {

        MembershipPlanId = this.id.split('-')[1];
        MemebershipPlanType = this.id.split('-')[2];
        DurationInMonth = this.id.split('-')[3];

        $("#planname").text(MemebershipPlanType);
        BindMembershipPlanDetails(MembershipPlanId);
        $("#DivAnnualy").removeClass('chooseplan');
        $("#DivAnnualy").addClass('plan2bg');
        $("#DivMonthly").addClass('chooseplan');

        $("#DivAnnualyP").removeClass('planprice1');
        $("#DivMonthlyP").removeClass('planprice2');
        $("#DivMonthlyP").addClass('planprice1');
        $("#DivAnnualyP").addClass('planprice2');


    });


    $("#drpChildrenNo").change(function () {

        var ChildNo = $("#drpChildrenNo").val();
        $("#childrenno").text(ChildNo);

        var AdditionaluserCost1 = Number(ChildNo - 1) * Number(AdditionaluserCost);
        Totalplancoast = Number(AdditionaluserCost1) + Number(Plancoast);

        $("#PlanAmount").text(Totalplancoast);


    });

    $("#btnJoin").click(function () {


        if ($("#txtname").val() == "") {
            $("#stxtname").text("Please enter Your Name");
            return false;
        }
        else {
            $("#stxtname").text("");
        }
        //        if ($("#txtAddress").val() == "") {
        //            $("#stxtAddress").text("Please enter Your Address");
        //            return false;
        //        }
        //        else {
        //            $("#stxtAddress").text("");
        //        }
        if ($("#txtContactno").val() == "") {
            $("#stxtContactno").text("Please enter Contact No");
            return false;
        }
        else {
            $("#stxtContactno").text("");
        }
        //        if ($("#txtPostalcode").val() == "") {
        //            $("#stxtPostalcode").text("Please enter Your Postal Code");
        //            return false;
        //        }
        //        else {
        //            $("#stxtPostalcode").text("");
        //        }

        if ($("#txtemail").val() == "") {
            $("#stxtemail").text("Please enter Your EmailId");
            return false;
        }
        else {
            $("#stxtemail").text("");
        }
        //        if ($("#txtpasword").val() == "") {
        //            $("#stxtpasword").text("Please enter Your Password");
        //            return false;
        //        }
        //        else {
        //            $("#stxtpasword").text("");
        //        }


        //        if ($("#txtcreditcardno").val() == "") {
        //            $("#stxtcreditcardno").text("Please enter Your Credit Card No");
        //            return false;
        //        }
        //        else {
        //            $("#stxtcreditcardno").text("");
        //        }

        //        if ($("#txtSecuritycode").val() == "") {
        //            $("#stxtSecuritycode").text("Please enter Security Code");
        //            return false;
        //        }
        //        else {
        //            $("#stxtSecuritycode").text("");
        //        }

        //        if ($("#txtTown").val() == "") {
        //            $("#stxtTown").text("Please enter Town Name");
        //            return false;
        //        }
        //        else {
        //            $("#stxtTown").text("");
        //        }
        //        if ($("#Country").val() == "0" || $("#Country").val() == "") {
        //            $("#sCountry").text("Please Select Your Country");
        //            return false;
        //        }
        //        else {
        //            $("#sCountry").text("");
        //        }

        document.getElementById("BuyForm").submit();
       // SaveMembershipInfo();
    });


    $("#btnRenewal").click(function () {
        BindMembershipPlan();
        $("#DivMembershipplan").show();
        $("#DivMembershipplan").css("visibility", "visible")
        $("#DivRenewal").hide();
        $("#btnJoin").hide();
        $("#btnRenew").show();
        $("#DivContactInfo").hide();

        //window.location = window.location.href.split("?")[0];
    });

    $("#btnRenew").click(function () {


//        if ($("#txtcreditcardno").val() == "") {
//            $("#stxtcreditcardno").text("Please enter Your Credit Card No");
//            return false;
//        }
//        else {
//            $("#stxtcreditcardno").text("");
//        }

//        if ($("#txtSecuritycode").val() == "") {
//            $("#stxtSecuritycode").text("Please enter Security Code");
//            return false;
//        }
//        else {
//            $("#stxtSecuritycode").text("");
//        }

        // SaveRenewalDetails();

        document.getElementById("BuyForm").submit();

    });



})
function BindMonthYear(Month,Year) {
    var MonthName = [];
    var Years = [];
    MonthName = Month.split(',');
    Years = Year.split(',');

    for (var i = 0; i < MonthName.length; i++) {
        $('#sltMonth').append($("<option></option>").val(MonthName[i]).html(MonthName[i]));
    }

    for (var i = 0; i < Years.length; i++) {
        $('#sltYear').append($("<option></option>").val(Years[i]).html(Years[i]));
    }
    $("#sltMonth option:first").attr('selected', 'selected');
    $("#sltYear option:first").attr('selected', 'selected');


}


$("#txtname").change(function () {
    $("#stxtname").text('');
});
$("#txtAddress").change(function () {
    $("#stxtAddress").text('');
});
$("#txtContactno").change(function () {
    $("#stxtContactno").text('');
});
$("#txtpasword").change(function () {
    $("#stxtpasword").text('');
});

$("#txtcreditcardno").change(function () {
    $("#stxtcreditcardno").text('');
});
$("#txtSecuritycode").change(function () {
    $("#stxtSecuritycode").text('');
});
$("#txtTown").change(function () {
    $("#stxtTown").text('');
});
$("#Country").change(function () {
    $("#sCountry").text('');
});
$("#txtemail").change(function () {
    $("#stxtemail").text("");
    if (EmailValidation($("#txtemail").val()) == false) {
        $("#lblemailerror").show();
        $("#lblemailerror").css("visibility", "visible");
        return false;
    }
    else {
        $("#lblemailerror").hide();
    }
});

$("#txtPostalcode").change(function () {
    $("#stxtPostalcode").text("");
    var letters = /^[a-zA-Z0-9]+$/;
    var PostalCode = $("#txtPostalcode").val();
    var result = letters.test(PostalCode);
    if (result == false) {
        $("#lblPostalcodeerror").show();
        $("#lblPostalcodeerror").css("visibility", "visible");
    }
    else {
        $("#lblPostalcodeerror").hide();
    }

});


function BindMembershipPlan() {

    var XML = "<Getlookup><ActionType>SelectMembershipPlan</ActionType><GeoID>1</GeoID></Getlookup>";

    $.ajax({
        type: "POST",
        url: "frmMembership.aspx/GetMembershipPlanDetails", // Location of the service 

        data: "{inXML : '" + XML + "'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var obj = jQuery.parseJSON(data.d.responseData);

            $("#DivPlan").append('<div class="col-sm-6">'
                     + '<div id="DivMonthly" class="plan2bg"><a href="#" id="btnMonthly-' + obj.Table[0].MembershipPlanId + '-' + obj.Table[0].PlanName + '-' + obj.Table[0].PlanDuration + '">'
                	 + '<div class="priceheading">' + obj.Table[0].PlanName + '&nbsp;' + 'Plan</div>'
                     + '<div id="DivMonthlyP" class="planprice2">' + obj.Table[0].Currency + '&nbsp;' + obj.Table[0].PlanCost.toFixed(2) + '</div>'
                     + '</a>'
                     + '</div>'
                     + '</div>'
                     + '<div class="col-sm-6">'
                     + '<div id="DivAnnualy" class="chooseplan">'
                     + '<a href="#" id="btnAnnualy-' + obj.Table[1].MembershipPlanId + '-' + obj.Table[1].PlanName + '-' + obj.Table[1].PlanDuration + '">'
                     + '<div class="priceheading">' + obj.Table[1].PlanName + '&nbsp;' + 'Plan</div>'
                     + '<div id="DivAnnualyP" class="planprice1">' + obj.Table[1].Currency + '&nbsp; ' + obj.Table[1].PlanCost.toFixed(2) + '</div>'
                     + '</a>'
                     + '</div>'
                     + '</div>')
            MembershipPlanId = obj.Table[0].MembershipPlanId;
            DurationInMonth = obj.Table[0].PlanDuration;

            $("#planname").text(obj.Table[0].PlanName);
            $("#PlanAmount").text(obj.Table[0].PlanCost.toFixed(2));
            $("#Currency").text(obj.Table[0].Currency);
            $("#hdnCurrencyCode").val(obj.Table[0].CurrencyCode);
            $("#WPcurrency").val(obj.Table[0].CurrencyCode);
            $("#amount").val(obj.Table[0].PlanCost.toFixed(2));
            var WorldPayDesc = "" + obj.Table[0].PlanName + " ScienceTests Plan for " + obj.Table[0].CurrencyCode + " " + obj.Table[0].PlanCost.toFixed(2) + ""
            $("#desc").val(WorldPayDesc);


        },
        failur: function (msg) {
            alert(msg);
        }
    });

}

function BindMembershipPlanDetails(MembershipPlanId) {

    var XML = "<Getlookup><ActionType>SelectMembershipPlanDetails</ActionType><MembershipPlanID>" + MembershipPlanId + "</MembershipPlanID></Getlookup>";

    $.ajax({
        type: "POST",
        url: "frmMembership.aspx/GetMembershipPlanDetails", // Location of the service 

        data: "{inXML : '" + XML + "'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var obj = jQuery.parseJSON(data.d.responseData);

            $("#PlanAmount").text(obj.Table[0].PlanCost.toFixed(2));
           $("#Currency").text(obj.Table[0].Currency);
            AdditionaluserCost = obj.Table[0].AdditionaluserCost;
            Plancoast = obj.Table[0].PlanCost;
            $("#lblCurrency").text(obj.Table[0].Currency);
            $("#lblAdditionalAmnt").text(obj.Table[0].AdditionaluserCost);

            $("#WPcurrency").val(obj.Table[0].CurrencyCode);
            $("#amount").val(obj.Table[0].PlanCost.toFixed(2));

            var WorldPayDesc = "" + MemebershipPlanType + " ScienceTests Plan for " + obj.Table[0].CurrencyCode + " " + obj.Table[0].PlanCost.toFixed(2) + ""
            $("#desc").val(WorldPayDesc);

            //***Code For Multi User *****//

            //var ChildNo = $("#drpChildrenNo").val();
            
            //var AdditionaluserCost1 = Number(ChildNo - 1) * Number(AdditionaluserCost);
            //Totalplancoast = Number(AdditionaluserCost1) + Number(Plancoast);
            //$("#PlanAmount").text(Totalplancoast);
                    },
        failur: function (msg) {
            alert(msg);
        }
    });

}

function SaveMembershipInfo() {

    var RegistredUserName = $("#txtname").val();
    var RegistredUserEmail = $("#txtemail").val();
    var TotalPaid = $("#PlanAmount").text();
    var NumberOfUsers = $("#drpChildrenNo").val();
    var Password = $("#txtpasword").val();
    var ChildNo = $("#childrenno").text();
    var Address = $("#txtAddress").val();
    var ContactNo = $("#txtContactno").val();
    var Postalcode = $("#txtPostalcode").val();
    var CountryCode = $("#Country").val().split('-')[1];
    var CountryId = $("#Country").val().split('-')[0];
    var Town = $("#txtTown").val();
    var CurrencyCode = $("#hdnCurrencyCode").val();

   // var XML = "<Root><ActionType>InsertMembershipPlanDetail</ActionType><RegistredUserName>" + RegistredUserName + "</RegistredUserName><RegistredUserEmail>" + RegistredUserEmail + "</RegistredUserEmail><MPM_ID>" + MembershipPlanId + "</MPM_ID><NumberOfUsers>1</NumberOfUsers><TotalPaid>" + TotalPaid + "</TotalPaid><DurationInMonth>" + DurationInMonth + "</DurationInMonth><IsActive>1</IsActive><IsPaymentDone>0</IsPaymentDone><Password>" + Password + "</Password><Address>" + Address + "</Address><ContactNo>" + ContactNo + "</ContactNo><PostalCode>" + Postalcode + "</PostalCode><Town>" + Town + "</Town><CountryCode>" + CountryCode + "</CountryCode><CountryID>" + CountryId + "</CountryID><CurrencyCode>" + CurrencyCode + "</CurrencyCode></Root>";
    var XML = "<Root><ActionType>InsertMembershipPlanDetail</ActionType><RegistredUserName>" + RegistredUserName + "</RegistredUserName><RegistredUserEmail>" + RegistredUserEmail + "</RegistredUserEmail><MPM_ID>" + MembershipPlanId + "</MPM_ID><NumberOfUsers>1</NumberOfUsers><TotalPaid>" + TotalPaid + "</TotalPaid><DurationInMonth>" + DurationInMonth + "</DurationInMonth><IsActive>1</IsActive><IsPaymentDone>0</IsPaymentDone><ContactNo>" + ContactNo + "</ContactNo><GuID>"+GUID+"</GuID></Root>";


    $.ajax({
        type: "POST",
        url: "frmMembership.aspx/SaveMembershipDetails", // Location of the service 
        data: "{inXML : '" + XML + "'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
        //var UniqId = jQuery.parseJSON(data.d.responseData);
        //UniqId = "A400393AF54B4785A0ECB9535BBF80E8";
       //window.location.href = 'frmAuthorization.aspx?UniqId=' + UniqId + '';
         //   window.location.href = 'frmRegistrationsuccess.aspx';

        },
        failur: function (msg) {
            alert(msg);
        }
    });

}

function BindDataforRenewal(userid) {

    var XML = "<Getlookup><ActionType>SelectPlanDetailsforRenewal</ActionType><UserId>" + userid + "</UserId></Getlookup>";

    $.ajax({
        type: "POST",
        url: "frmMembership.aspx/GetMembershipPlanDetails", // Location of the service 

        data: "{inXML : '" + XML + "'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var obj = jQuery.parseJSON(data.d.responseData);

            var RenewalDetails = "";

            for (var i = 0; i < obj.Table.length; i++) {

                RenewalDetails += '<Div id=' + i + '><label>Plan Name:</label>&nbsp;&nbsp;<label id="lblplanname">' + obj.Table[i].PlanName + '</label><br /><label>Plan Duration:</label>&nbsp;&nbsp;<label id="lblplanduration">' + obj.Table[i].PlanDuration + '</label>'
                if (obj.Table[i].PlanName == 'Monthly') {
                    RenewalDetails += '&nbsp;<label id="lblMonthYear">Month</label><br />'
                }
                else {
                    RenewalDetails += '&nbsp;<label id="lblMonthYear">Month</label><br />'
                }

                RenewalDetails += '<label>Plan Amount:</label>&nbsp;&nbsp;<label id="lblcurrency">' + obj.Table[i].Currency + '</label>&nbsp;<label id="lblamount">' + obj.Table[i].PlanCost + '</label><br/>'

                if (Number(obj.Table[i].DayRemaing) > 0) {

                    RenewalDetails += '<label>Days Remaining:</label>&nbsp;<span style="text-decoration:blink;color:Red"><label>' + obj.Table[i].DayRemaing + '</label>&nbsp;<label>Days remaining</label></span></Div><br />'

                }
                else {
                    RenewalDetails += '<label>Days Remaining:</label>&nbsp;<label style="text-decoration:blink;color:Red">Your Plan is expired ..!</label></Div><br />'
                }

            }
            $("#lblUserName").text(obj.Table[0].UserName);
            $("#DivPlanDetails").append(RenewalDetails);
           
            // $("#lblplanname").text(obj.Table[0].PlanName);
            // $("#lblplanduration").text(obj.Table[0].PlanDuration);
            // $("#lblcurrency").text(obj.Table[0].Cuurency);
            // $("#lblamount").text(obj.Table[0].PlanCost);

            // if (obj.Table[0].PlanName == 'Monthly') {
            //     $("#lblMonthYear").text('Month');
            // }
            // else {
            //     $("#lblMonthYear").text('Year');
            // }
            $("#DivRenewal").show();
            $("#DivRenewal").css("visibility", "visible");


        },
        failur: function (msg) {
            alert(msg);
        }
    });
}

function SaveRenewalDetails() {


    var TotalPaid = $("#PlanAmount").text();
    //var NumberOfUsers = $("#childrenno").text();
    var XML = "<Root><ActionType>InsertRenewalDetail</ActionType><UserId>"+UserId+"</UserId><MPM_ID>" + MembershipPlanId + "</MPM_ID><NumberOfUsers>1</NumberOfUsers><TotalPaid>" + TotalPaid + "</TotalPaid><DurationInMonth>" + DurationInMonth + "</DurationInMonth><IsActive>1</IsActive><IsPaymentDone>0</IsPaymentDone></Root>";


    $.ajax({
        type: "POST",
        url: "frmMembership.aspx/SaveMembershipDetails", // Location of the service 
        data: "{inXML : '" + XML + "'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
        alert("You Renew Your Plan succesfuly");
        $("#btnRenew").hide();
        $("#DivContactInfo").show();
        $("#btnJoin").show();
        setTimeout(function () {
            window.location.href = 'frmDefault.aspx';
        }, 1000);
        },
        failur: function (msg) {
            alert(msg);
        }
    });

}

function GetParameterValues(param) {
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        if (urlparam[0] == param) {
            return urlparam[1];
        }
    }
}

jQuery.fn.FillCountry = function (Text, setVal) {
    var ddl = this;
    this.empty();
    var inXML = '<Root><QMMaster><Type>' + Text + '</Type></QMMaster></Root>';
    $.ajax({
        type: "POST",
        url: GlobalServiceURL + "Select_Lookups", // Location of the service 
        data: "{inXML :'" + inXML + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                var obj = jQuery.parseJSON(data.d.responseData);
                $(ddl).html(" ");
                $(ddl).append($("<option></option>").val(0).html('Select Country'));
                for (var i = 0; i < obj.Table.length; i++) {
                    $(ddl).append($("<option></option>").val(obj.Table[i].value).html(obj.Table[i].Text));
                }
                $(ddl).val(setVal);
            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}


function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};