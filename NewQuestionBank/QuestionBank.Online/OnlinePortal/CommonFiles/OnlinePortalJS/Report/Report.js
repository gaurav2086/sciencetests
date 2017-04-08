var UserId = 0, DivCollapaseId = 0,PreDivCollapaseId;
var HdrDate = "";
$(document).ready(function () {
  google.charts.load('current', { 'packages': ['bar'] });
    $("#DivGraph").hide();
    $('#txtfrmDate').Zebra_DatePicker({
        format: 'm/d/Y'
    });
    $('#txttoDate').Zebra_DatePicker({
        format: 'm/d/Y'
    });

    $("#Loader").hide();
    UserId = $('#lblUserid').text();
    var username = $('#lblusername').text();

    if (UserId==0) {
        UserId = 0;
        $("#DivNonRegMsg").show();
        $("#DivNonRegMsg").css("visibility", "visible");
        $("#DivReportSection").hide();
        setTimeout(function () {
            window.location.href = 'frmMembership.aspx';
        }, 2000);
    }
    else {
        $("#DivNonRegMsg").hide();
        $("#DivReportSection").show();
        $("#DivReportSection").css("visibility", "visible");


        BindReportSummary(UserId);
    }


    $(document).on('click', '[id^="Hdr-"]', function () {

        DivCollapaseId = this.id.split('-')[1];
        HdrDate = this.id.split('-')[2];
        BindReportDetails(UserId, HdrDate, DivCollapaseId);

        $("#Divactiveaccord" + DivCollapaseId).attr("tabindex", -1).focus();


        $("#Divactiveaccord" + DivCollapaseId).removeClass("panel-heading");
        $("#Divactiveaccord" + DivCollapaseId).css("background-color", "green");



    });



});

$("#btnSearch").click(function () {

    if ($("#txtfrmDate").val() == "") {
        alert("Enter From Date")
        return
    }
    if ($("#txttoDate").val() == "") {
        alert("Enter From To Date")
        return
    }

    GetDatewiseReport();
})

$("#ViewGraph").click(function () {
      
       

         
     var flag = $(this).data('flag');
  
    if (flag) {
         $("#DivGraph").hide();
    } else {
           google.charts.setOnLoadCallback(drawStuff);
             $("#DivGraph").show();
    }

    $(this).data('flag', !flag);
 

});

function drawStuff() {
   // $("#DivGraph").show();

    $("#Loader").show();
     var XML = "<Getlookup><ActionType>SelectGraphData</ActionType><UserId>" + UserId + "</UserId></Getlookup>";

     $.ajax({
         type: "POST",
         url: "frmReport.aspx/GetReportDetails", // Location of the service 
         data: "{inXML : '" + XML + "'}", //Data sent to server
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         success: function (data) {
             var obj = jQuery.parseJSON(data.d.responseData);


             var Event={Day:"1"};
             var dataArray = [['Day', 'Attempted Question','Right  Answer']];

             for (var i = 0; i < obj.Table.length; i++) {
                 dataArray.push([obj.Table[i].Date, obj.Table[i].Question,obj.Table[i].WrightAnswer])
             }

           var  a=[];
           a.push([Event])
           alert(a);
             var data = new google.visualization.arrayToDataTable(dataArray)



                          var options = {
                              width: 900,
                              chart: {
                                  title: 'Day Wise Attemted Question'//,
                                  //subtitle: 'distance on the left, brightness on the right'
                              },
                              bars: 'horizontal', // Required for Material Bar Charts.
                             
                              series: {
                                   // 0: { axis: 'Attemted Question'}, // Bind series 0 to an axis na
                                   // 1: { axis: 'Wright Answer'} // Bind series 1 to an axis named 'b
                                  1: {color: 'green', visibleInLegend: false}
                              },
//                              axes: {
//                                  x: {
//                                      AttemtedQuestion: { label: 'Attemted Question'}, // Bottom x-axis.
//                                      WrightAnswer: { side: 'top', label: 'Wright Answer'}
//                                  }
//                              }
                          };

                          var chart = new google.charts.Bar(document.getElementById('DivGraph'));
                          chart.draw(data, options);
                          $("#Loader").hide();


         },
         failur: function (msg) {
             alert(msg);
         }
     });





};


function GetDatewiseReport() {


    var XML = "<Getlookup><ActionType>SelectReportDetailDateWise</ActionType><UserId>" + UserId + "</UserId><FromDate>" + $("#txtfrmDate").val() + "</FromDate><ToDate>" + $("#txttoDate").val() + "</ToDate></Getlookup>";

    $.ajax({
        type: "POST",
        url: "frmReport.aspx/GetReportDetails", // Location of the service 
        data: "{inXML : '" + XML + "'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var obj = jQuery.parseJSON(data.d.responseData);
            if(data.d.responseData==null)
            {
            alert("No Record Found");
            }
            $('#DivHeadingAccord').empty();

             $("#lblusername1").text(UserName);
            if (obj.Table != null) {
               
                $("#lblQuestion").text(obj.Table2.length);
                $("#lblTopic").text(obj.Table[0].Topic);
            }
            var TotalAttemtQuest = [];
            var UserAttemAnswer = [];
            var CorrectAttemAnswer = [];
            var UserAttemtMapColAns = [];
            var CorrectMapColumnAns = [];
            var FinalReport = "";
            var BindHeading = ""
            var SummaryTotalMarks = 0;
            var summaryObtainedMarks = 0;

            BindHeading += "";
            for (var i = 0; i < obj.Table1.length; i++) {

                var CountCorrectAnswer = 0;
                var CountWrongAnswer = 0;
                var MapColumnCount = 0;
                var QuestionIds = 0;
                var TotalMarks = 0;
                var UserObtainmarks = 0;

                TotalAttemtQuest = _.where(obj.Table2, { Date: obj.Table1[i].Date });
                UserAttemAnswer = _.where(obj.Table3, { Date: obj.Table1[i].Date });
                CorrectAnswer = _.where(obj.Table4, { Date: obj.Table1[i].Date });


                // To get Total Marks of All Question
                for (var mark = 0; mark < TotalAttemtQuest.length; mark++) {
                    TotalMarks += Number(TotalAttemtQuest[mark].Marks);
                }

                SummaryTotalMarks += Number(TotalMarks);

                BindHeading += '<tr><td>'
                           + '<div class="panel panel-default" >'
                              + '<div class="panel-heading" id="Divactiveaccord' + i + '"  tabindex="-1">'
                              + '<div class="panel-title">'
                              + '<a href="#collapse' + i + '"   data-parent="#DivHeadingAccord"  data-toggle="collapse" id="Hdr-' + i + '-' + obj.Table1[i].Date + '" class="collapsed">'
                              + '<div class="row" style="margin-left:10px">'
                              + '<label style="font-size:17px">' + obj.Table1[i].Date + '</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                              + '<span style="font-size:14px"><label> Attemted Question :</label>&nbsp;<label>' + TotalAttemtQuest.length + '</label></span>&nbsp;&nbsp;&nbsp;&nbsp;'

                                for (var j = 0; j < TotalAttemtQuest.length; j++) {

                                      if(TotalAttemtQuest[j].IsCorrect=="1")
                                      {
                                        CountCorrectAnswer++;
                                        UserObtainmarks += Number(TotalAttemtQuest[j].Marks);
                                      }
                                      else{
                                      CountWrongAnswer++;
                                      }

                              }

//                for (var j = 0; j < UserAttemAnswer.length; j++) {  //S UserAttemp Loop

//                    if (UserAttemAnswer[j].QuestionType == 'Single Choice' || UserAttemAnswer[j].QuestionType == "True/False" || UserAttemAnswer[j].QuestionType == "Multi Choice") { // S Question Type

//                        for (var k = 0; k < CorrectAnswer.length; k++) { //S CA Loop

//                            if (UserAttemAnswer[j].QuestionId == CorrectAnswer[k].QuestionId) { //s check Question is similar or not
//                                if (UserAttemAnswer[j].OptionIdUserAttenmt == CorrectAnswer[k].OptionIdCorrect) { // s Option Checking
//                                    CountCorrectAnswer++;
//                                    UserObtainmarks += Number(UserAttemAnswer[j].Marks);
//                                } // s Option Checking
//                                else {
//                                    CountWrongAnswer++;
//                                }
//                            } // e quetion checking
//                        } //E CA Loop

//                    } // E Question Type
//                    else if (UserAttemAnswer[j].QuestionType == 'Crossword') { //S QuestionType

//                        for (var ck = 0; ck < CorrectAnswer.length; ck++) { //S CA Loop

//                            if (UserAttemAnswer[j].QuestionId == CorrectAnswer[ck].QuestionId) { //s check Question is similar or not
//                                if (UserAttemAnswer[j].CrosswordText == CorrectAnswer[ck].CrosswordText) { // s Option Checking
//                                    CountCorrectAnswer++;
//                                    UserObtainmarks += Number(UserAttemAnswer[j].Marks);
//                                } // e Option Checking
//                                else {
//                                    CountWrongAnswer++;
//                                }
//                            } // e quetion checking 
//                        } //E CA Loop

//                    } //E QuestionType



//                    else if (UserAttemAnswer[j].QuestionType == 'Map the Column') { //S QuestionType


//                        if (QuestionIds != UserAttemAnswer[j].QuestionId) {
//                            UserAttemtMapColAns = _.where(UserAttemAnswer, { QuestionType: 'Map the Column', Date: obj.Table1[i].Date });
//                            CorrectMapColumnAns = _.where(obj.Table5, { QuestionType: 'Map the Column', Date: obj.Table1[i].Date });

//                            for (var x = 0; x < CorrectMapColumnAns.length; x++) {//S CA Loop

//                                if (UserAttemtMapColAns[x].QuestionId == CorrectMapColumnAns[x].QuestionId) { //s check Question is similar or not
//                                    if (Number(UserAttemtMapColAns[x].OptionIdMapColumn) == CorrectMapColumnAns[x].OptionIdCorrect) { // s Option Checking

//                                        MapColumnCount++
//                                    } // e Option Checking

//                                } // e quetion checking 


//                            } //E CA Loop
//                            if (CorrectMapColumnAns.length == Number(MapColumnCount)) {
//                                CountCorrectAnswer++;
//                                UserObtainmarks += Number(UserAttemAnswer[j].Marks);
//                            }
//                            else {
//                                CountWrongAnswer++;
//                            }
//                            QuestionIds = UserAttemAnswer[j].QuestionId;
//                        }

//                    } //E Question Type


//                } //E UserAttemp Loop 
                BindHeading += '<span style="font-size:14px"><label>Correct Answer :</label></span>&nbsp;<label style="font-size:16px" class="rightans">' + CountCorrectAnswer + '</label>&nbsp;&nbsp;&nbsp;&nbsp;'
                BindHeading += '<span style="font-size:14px"><label>Wrong Answer :</label></span>&nbsp;<label style="font-size:16px" class="wrongans">' + CountWrongAnswer + '</label>&nbsp;&nbsp;&nbsp;&nbsp;'
                BindHeading += '<span style="font-size:14px"><label>Obtained Marks :</label></span>&nbsp;<label style="font-size:16px">' + UserObtainmarks + '</label>&nbsp;<label style="font-size:16px">out of</label>&nbsp;<label style="font-size:16px">' + TotalMarks + '</label>'
                              + '</div>'
                              + '</a>'
                              + '</div>'
                                + '</div>'
                              + '<div id="collapse' + i + '" class="panel-collapse collapse">'
                              + '<div class="panel-body" id="DetailReport' + i + '"></div>'
                              + '</div>'
                              + '</div>'
                              + '</td></tr>'
                summaryObtainedMarks += Number(UserObtainmarks);
            }
            $("#lblobtanmarks").text(summaryObtainedMarks);
            $("#lbltotalmarks").text(SummaryTotalMarks);
            $("#DivHeadingAccord").append(BindHeading);
            //$("#tblReportList").append(BindHeading);

            $('#DivHeadingAccord').dataTable({
                "bSort": false,
                "bDestroy": true

            });
            $("#txtfrmDate").val("");
            $("#txttoDate").val("");
        },
        failur: function (msg) {
            alert(msg);
        }
    });

}
function BindReportSummary(userid) {


    var XML = "<Getlookup><ActionType>SelectReportDetailsSummary</ActionType><UserId>" + userid + "</UserId></Getlookup>";

    $.ajax({
        type: "POST",
        url: "frmReport.aspx/GetReportDetails", // Location of the service 
        data: "{inXML : '" + XML + "'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var obj = jQuery.parseJSON(data.d.responseData);
              $("#lblusername1").text(UserName);
            if (obj.Table != null) {
               // $("#lblusername1").text(obj.Table[0].UserName);
                $("#lblQuestion").text(obj.Table2.length);
                $("#lblTopic").text(obj.Table[0].Topic);
            }
           
            var TotalAttemtQuest = [];
            var UserAttemAnswer = [];
            var CorrectAttemAnswer = [];
            var UserAttemtMapColAns = [];
            var CorrectMapColumnAns = [];
            var FinalReport = "";
            var BindHeading = ""
            var SummaryTotalMarks = 0;
            var summaryObtainedMarks = 0;

            BindHeading += "";
            for (var i = 0; i < obj.Table1.length; i++) {

                var CountCorrectAnswer = 0;
                var CountWrongAnswer = 0;
                var MapColumnCount = 0;
                var QuestionIds = 0;
                var TotalMarks = 0;
                var UserObtainmarks = 0;

                TotalAttemtQuest = _.where(obj.Table2, { Date: obj.Table1[i].Date });
                UserAttemAnswer = _.where(obj.Table3, { Date: obj.Table1[i].Date });
                CorrectAnswer = _.where(obj.Table4, { Date: obj.Table1[i].Date });


                // To get Total Marks of All Question
                for (var mark = 0; mark < TotalAttemtQuest.length; mark++) {
                    TotalMarks += Number(TotalAttemtQuest[mark].Marks);
                    
                }

                SummaryTotalMarks += Number(TotalMarks);

                BindHeading += '<tr><td>'
                           +'<div class="panel panel-default" >'
                              + '<div class="panel-heading" id="Divactiveaccord' + i + '"  tabindex="-1">'
                              + '<div class="panel-title">'
                              + '<a href="#collapse' + i + '"   data-parent="#DivHeadingAccord"  data-toggle="collapse" id="Hdr-' + i + '-' + obj.Table1[i].Date + '" class="collapsed">'
                              + '<div class="row" style="margin-left:10px">'
                              + '<label style="font-size:17px">' + obj.Table1[i].Date + '</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                              + '<span style="font-size:14px"><label> Attemted Question :</label>&nbsp;<label>' + TotalAttemtQuest.length + '</label></span>&nbsp;&nbsp;&nbsp;&nbsp;'

                              for (var j = 0; j < TotalAttemtQuest.length; j++) {

                                      if(TotalAttemtQuest[j].IsCorrect=="1")
                                      {
                                        CountCorrectAnswer++;
                                        UserObtainmarks += Number(TotalAttemtQuest[j].Marks);
                                      }
                                      else{
                                      CountWrongAnswer++;
                                      }

                              }


//                for (var j = 0; j < UserAttemAnswer.length; j++) {  //S UserAttemp Loop

//                    if (UserAttemAnswer[j].QuestionType == 'Single Choice' || UserAttemAnswer[j].QuestionType == "True/False" || UserAttemAnswer[j].QuestionType == "Multi Choice") { // S Question Type

//                        for (var k = 0; k < CorrectAnswer.length; k++) { //S CA Loop

//                            if (UserAttemAnswer[j].QuestionId == CorrectAnswer[k].QuestionId) { //s check Question is similar or not
//                                if (UserAttemAnswer[j].OptionIdUserAttenmt == CorrectAnswer[k].OptionIdCorrect) { // s Option Checking
//                                    CountCorrectAnswer++;
//                                    UserObtainmarks += Number(UserAttemAnswer[j].Marks);
//                                } // s Option Checking
//                                else {
//                                    CountWrongAnswer++;
//                                }
//                            } // e quetion checking
//                        } //E CA Loop

//                    } // E Question Type
//                    else if (UserAttemAnswer[j].QuestionType == 'Crossword') { //S QuestionType

//                        for (var ck = 0; ck < CorrectAnswer.length; ck++) { //S CA Loop

//                            if (UserAttemAnswer[j].QuestionId == CorrectAnswer[ck].QuestionId) { //s check Question is similar or not
//                                if (UserAttemAnswer[j].CrosswordText == CorrectAnswer[ck].CrosswordText) { // s Option Checking
//                                    CountCorrectAnswer++;
//                                    UserObtainmarks += Number(UserAttemAnswer[j].Marks);
//                                } // e Option Checking
//                                else {
//                                    CountWrongAnswer++;
//                                }
//                            } // e quetion checking 
//                        } //E CA Loop

//                    } //E QuestionType



//                    else if (UserAttemAnswer[j].QuestionType == 'Map the Column') { //S QuestionType


//                        if (QuestionIds != UserAttemAnswer[j].QuestionId) {
//                            UserAttemtMapColAns = _.where(UserAttemAnswer, { QuestionType: 'Map the Column', Date: obj.Table1[i].Date });
//                            CorrectMapColumnAns = _.where(obj.Table5, { QuestionType: 'Map the Column', Date: obj.Table1[i].Date });

//                            for (var x = 0; x < CorrectMapColumnAns.length; x++) {//S CA Loop

//                                if (UserAttemtMapColAns[x].QuestionId == CorrectMapColumnAns[x].QuestionId) { //s check Question is similar or not
//                                    if (Number(UserAttemtMapColAns[x].OptionIdMapColumn) == CorrectMapColumnAns[x].OptionIdCorrect) { // s Option Checking

//                                        MapColumnCount++
//                                    } // e Option Checking

//                                } // e quetion checking 


//                            } //E CA Loop
//                            if (CorrectMapColumnAns.length == Number(MapColumnCount)) {
//                                CountCorrectAnswer++;
//                                UserObtainmarks += Number(UserAttemAnswer[j].Marks);
//                            }
//                            else {
//                                CountWrongAnswer++;
//                            }
//                            QuestionIds = UserAttemAnswer[j].QuestionId;
//                        }

//                    } //E Question Type


//                } //E UserAttemp Loop 
                BindHeading += '<span style="font-size:14px"><label>Correct Answer :</label></span>&nbsp;<label style="font-size:16px" class="rightans">' + CountCorrectAnswer + '</label>&nbsp;&nbsp;&nbsp;&nbsp;'
                BindHeading += '<span style="font-size:14px"><label>Wrong Answer :</label></span>&nbsp;<label style="font-size:16px" class="wrongans">' + CountWrongAnswer + '</label>&nbsp;&nbsp;&nbsp;&nbsp;'
                BindHeading += '<span style="font-size:14px"><label>Obtained Marks :</label></span>&nbsp;<label style="font-size:16px">' + UserObtainmarks + '</label>&nbsp;<label style="font-size:16px">out of</label>&nbsp;<label style="font-size:16px">' + TotalMarks + '</label>'
                              + '</div>'
                              + '</a>'
                              + '</div>'
                                + '</div>'
                              + '<div id="collapse' + i + '" class="panel-collapse collapse">'
                              + '<div class="panel-body" id="DetailReport' + i + '"></div>'
                              + '</div>'
                              + '</div>'
                              +'</td></tr>'
                summaryObtainedMarks += Number(UserObtainmarks);
            }
            $("#lblobtanmarks").text(summaryObtainedMarks);
            $("#lbltotalmarks").text(SummaryTotalMarks);
            $("#DivHeadingAccord").append(BindHeading);
            //$("#tblReportList").append(BindHeading);

            $('#DivHeadingAccord').dataTable({
                  "bSort": false,
                "bDestroy": true
                
            });


        },
        failur: function (msg) {
            alert(msg);
        }
    });


}


function BindReportDetails(UserId,HdrDate,DivCollapaseId) {


    $("#Loader").show();

    var XML = "<Getlookup><ActionType>SelectReportDetails</ActionType><UserId>" + UserId + "</UserId></Getlookup>";

    $.ajax({
        type: "POST",
        url: "frmReport.aspx/GetReportDetails", // Location of the service 
        data: "{inXML : '" + XML + "'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var obj = jQuery.parseJSON(data.d.responseData);

            $("#DetailReport" + PreDivCollapaseId).empty();
            $("#Divactiveaccord" + PreDivCollapaseId).addClass("panel-heading");
         
            $("#collapse" + PreDivCollapaseId).removeClass("panel-collapse collapse in");
            $("#collapse" + PreDivCollapaseId).addClass("panel-collapse collapse");
            $("#collapse" + PreDivCollapaseId).attr("aria-expanded", "false");
            $("#Hdr-" + PreDivCollapaseId + "-" + HdrDate).attr("aria-expanded", "false");
            $("#Hdr-" + PreDivCollapaseId + "-" + HdrDate).addClass("collapsed");


            var FinalReport = "";
            var GetDateForHdr = [];
            var GetTopicforHdr = [];
            var GetQuestion = [];
            var GetAnsgivebyuser = [];
            var GetCorrectAns = [];
            var GetMapColumnData = [];
            var GetMapColundataQwise = [];
            var GetFIBuserattmpans=[];
            var GetFIBuserattmpansbnwise=[];
            var GetFIBCorrectAnswer=[];
            var GetFIBuserattmpansbnwise1=[];
            var GetCorectMCQAnsGivenbyUser=[];
            var GetwrongMCQAnsGivenbyUser=[];
            var GetSingleCTrueFalseAnswerGivenByuser=[];



            GetDateForHdr = _.where(obj.Table, { Date: HdrDate });
            GetTopicforHdr = _.where(obj.Table1, { Date: HdrDate });
            GetQuestion = _.where(obj.Table2, { Date: HdrDate });
            GetAnsgivebyuser = _.where(obj.Table3, { Date: HdrDate });
            GetCorrectAns = _.where(obj.Table4, { Date: HdrDate });
            GetMapColumnData = _.where(obj.Table5, { Date: HdrDate });
            GetFIBCorrectAnswer = _.where(obj.Table6, { Date: HdrDate });


            for (var i = 0; i < GetDateForHdr.length; i++) {
                FinalReport += '<table class="table" >'
                       + '<tr>'
                       + '<td class="tbheading">'
                       + '<table width="100%" border="0" cellspacing="0" cellpadding="0">'
                       + '<tr>'
                FinalReport += '<td>' + GetDateForHdr[i].Date + '</td>'
                            + '<td class="blue13px text-right">' + GetDateForHdr[i].Question + ' ' + 'Question' + '|' + GetDateForHdr[i].Topic + '  ' + 'Topic' + '</td>'
                FinalReport += '</tr>'
                            + '</table>'
                            + '</td>'
                            + '</tr>'
                            + '<tr>'

                for (var j = 0; j < GetTopicforHdr.length; j++) {

                    FinalReport += '<td class="tbsubheading">' + GetTopicforHdr[j].Title + '</td>'
                                + '</tr>'
                                + '<tr id="tr">'

                    for (var k = 0; k < GetQuestion.length; k++) {

                        if (GetTopicforHdr[j].Title == GetQuestion[k].Title) {
                            FinalReport += '<td >'
                                        + '<table width="100%" border="0" cellspacing="0" cellpadding="0" id="CountTD-' + $("#hhdTotalCount").val() + '">'
                                        + '<tr>'
                                        + '<td>'
                                        + '<table width="100%" border="0" cellspacing="0" cellpadding="0">'
                                        + '<tr>'
                                        + '<td class="blue13px">'
                                        + '<strong>Question</strong>'
                                        + '</td>'
                                        + '</tr>'
                                        + '<tr>'
                                        + '<td class="black13px">'
                                        + '<strong>' + GetQuestion[k].Question + '</strong>'
                                        + '</td>'
                                        + '</tr>'
                                        + '<tr>'
                                        + '<td class="blue13px">'
                                        + '<strong>Correct Answer</strong>'
                                        + '</td>'
                                        + '</tr>'
                                        + '<tr>'
                            //Bind Correct Answer
                            if (GetQuestion[k].QuestionType == "Single Choice" || GetQuestion[k].QuestionType == "True/False" || GetQuestion[k].QuestionType == "Multi Choice") {

                                for (var m = 0; m < GetCorrectAns.length; m++) {
                                    if (GetQuestion[k].QuestionId == GetCorrectAns[m].QuestionId) {
                                        FinalReport += '<td class="black13px"><strong>' + GetCorrectAns[m].CorrectOption + '</strong></td>'
                                    }

                                }

                            }
                            else if (GetQuestion[k].QuestionType == "Map the Column") {

                                var CMapColumnA = "";
                                var CMapColumnB = "";

                                FinalReport += '<td class="rightans">'
                                CMapColumnA = "<table ><tr><td><h2 style='margin-left:65px'>A</h2></td>"
                                                           + "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><h2 style='margin-left:65px'>B</h2></td></tr>"
                                                           + "<tr><td><ul class='dd-list' id='MapColA'>"

                                for (var xc = 0; xc < GetMapColumnData.length; xc++) {

                                    if (GetQuestion[k].QuestionId == GetMapColumnData[xc].QuestionId) {
                                        CMapColumnA += '<li class="widget dd-item dd-handle" id="MapColmnA-' + GetMapColumnData[xc].COptionID + '">' + GetMapColumnData[xc].CLeftText + '</li>';
                                    }

                                }

                                for (var yc = 0; yc < GetMapColumnData.length; yc++) {
                                    if (GetQuestion[k].QuestionId == GetMapColumnData[yc].QuestionId) {
                                        CMapColumnB += '<li class="widget dd-item dd-handle" id="MapColmnB-' + GetMapColumnData[yc].COptionID + '">' + GetMapColumnData[yc].CRightText + '</li>';
                                    }
                                }

                                FinalReport += CMapColumnA + "</ul></td>" + "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id='RightText'><ul class='dd-list' id='MapColB'>" + CMapColumnB + "</ul></td></tr></table></td>";

                            }
                             else if(GetQuestion[k].QuestionType == "Fill in the blank")
                            {
                              var BlankNumberIndex =0;
                               GetFIBuserattmpans = _.where(GetFIBCorrectAnswer, { QuestionId: GetQuestion[k].QuestionId });

                               FinalReport += '<td class="rightans">'

                                   //if(GetQuestion[k].IsCorrect=="1"){

                                 cntrl = "<table id='tblfib'>"
                                    
                                        for(var fib = 0; fib < GetFIBuserattmpans.length; fib++)
                                        {
                                              BlankNumberIndex++
                                             GetFIBuserattmpansbnwise = _.where(GetFIBuserattmpans, { BlankNumber: BlankNumberIndex });

                                             cntrl += '<tr><td class="black13px"><strong>Blank '+ BlankNumberIndex +' :' +' ' + GetFIBuserattmpansbnwise[0].CorrectOption + '</strong></td></tr>'
                                     
                                        }
                                  //  }
                                   FinalReport +=cntrl+'</table></td>';
                            }

                            else if (GetQuestion[k].QuestionType == "Crossword") {
                                var cntrl = "";
                                var CrosswordDetails = [];
                                var MatrixCount = 0;
                                var CrosswordText = "";
                                var crosswordIndex = -1;
                                var MatrixNumber = 0;
                                CrosswordDetails = _.where(GetAnsgivebyuser, { QuestionType: 'Crossword', QuestionId: GetQuestion[k].QuestionId });
                                MatrixCount = CrosswordDetails[0].CrosswordMatrixCount;
                                CrosswordText = CrosswordDetails[0].CorrectCrosword;
                                var CrosswordTextt = CrosswordText.split(",");
                                FinalReport += '<td class="wrongans">'
                                cntrl = "<table id='tblcrossword'>"
                                for (var CWi = 0; CWi < MatrixCount; CWi++) {
                                    cntrl += "<tr id='trcw-" + CWi + "'><td>"
                                    for (var CWj = 0; CWj < MatrixCount; CWj++) {
                                        crosswordIndex++;
                                        MatrixNumber++

                                        if (CrosswordTextt[crosswordIndex] != "") {

                                            cntrl += "<input style='width:40px;text-align: center;background-color:WhiteSmoke;color:Black' placeholder=" + MatrixNumber + " type='text' id='txtcw-" + CWi + '' + CWj + "-" + CrosswordTextt[crosswordIndex] + "' maxlength='1' value=" + CrosswordTextt[crosswordIndex] + " ></input>";
                                        }
                                        else {
                                            cntrl += "<input style='width:40px;text-align: center;background-color:Black;color:Black' placeholder=" + MatrixNumber + " type='text' disabled id='txtcw-" + CWi + '' + CWj + "-" + CrosswordTextt[crosswordIndex] + "' maxlength='1' value=" + CrosswordTextt[crosswordIndex] + "></input>";
                                        }
                                    }
                                    cntrl += "</td></tr>";
                                }

                                cntrl += "</table>";


                                FinalReport += cntrl + '</td>';
                            } //end Correct Answer

                            FinalReport += '</tr>'
                                        + '</table>'
                                        + '</td>'
                                        + '<td width="290" style="vertical-align: top !important;">'
                                        + '<table width="100%" border="0" cellspacing="0" cellpadding="0">'
                                        + '<tr>'
                                        + '<td colspan="2" class="blue13px">'
                                        + '<strong>' + $("#lblusername1").text() + '  ' + 'answered</strong>'
                                        + '</td>'
                                        + '</tr>'
                                        + '<tr>'

                            //Bind  User Answer
                            var AnsAttemptCount = 0;
                            if (GetQuestion[k].QuestionType == "Single Choice" || GetQuestion[k].QuestionType == "True/False") {



                              if(GetQuestion[k].IsCorrect == "1"){
                                 GetSingleCTrueFalseAnswerGivenByuser=_.where(GetAnsgivebyuser, { IsCorrect: true, QuestionId: GetQuestion[k].QuestionId });

                                     for(var STFC = 0; STFC < GetSingleCTrueFalseAnswerGivenByuser.length; STFC++)
                                     {
                                          AnsAttemptCount++
                                         FinalReport += '<td class="blue10px">Attempt ' + AnsAttemptCount + '</td>&nbsp;<td class="rightans"><img src="../CommonFiles/img/right.png"  alt=""/>' + GetSingleCTrueFalseAnswerGivenByuser[STFC].Option + '</td>'
                                     }

                                 }
                                 else{
                                        GetSingleCTrueFalseAnswerGivenByuser=_.where(GetAnsgivebyuser, { IsCorrect:false, QuestionId: GetQuestion[k].QuestionId });
                                       for(var STFW = 0; STFW < GetSingleCTrueFalseAnswerGivenByuser.length; STFW++)
                                         {
                                           AnsAttemptCount++
                                             FinalReport += '<td class="blue10px">Attempt ' + AnsAttemptCount + '</td>&nbsp;<td class="wrongans"><img src="../CommonFiles/img/wrong.png" alt=""/>' + GetSingleCTrueFalseAnswerGivenByuser[STFW].Option + '</td>'
                                         }
                                 }


//                                for (var l = 0; l < GetAnsgivebyuser.length; l++) {
//                                   
//                                    if (GetQuestion[k].QuestionId == GetAnsgivebyuser[l].QuestionId) {
//                                        AnsAttemptCount++
//                                        for (var m1 = 0; m1 < GetCorrectAns.length; m1++) {
//                                            if (GetAnsgivebyuser[l].QuestionId == GetCorrectAns[m1].QuestionId) {
//                                                if (GetCorrectAns[m1].CorrectOption == GetAnsgivebyuser[l].Option) {

//                                                    FinalReport += '<td class="blue10px">Attempt ' + AnsAttemptCount + '</td>&nbsp;<td class="rightans"><img src="../CommonFiles/img/right.png"  alt=""/>' + GetAnsgivebyuser[l].Option + '</td>'
//                                                }
//                                                else {
//                                                    FinalReport += '<td class="blue10px">Attempt ' + AnsAttemptCount + '</td>&nbsp;<td class="wrongans"><img src="../CommonFiles/img/wrong.png" alt=""/>' + GetAnsgivebyuser[l].Option + '</td>'
//                                                }
//                                            }
//                                        }

//                                    }
//                                }
                            }
                            else if( GetQuestion[k].QuestionType == "Multi Choice"){

                                 if(GetQuestion[k].IsCorrect == "1"){
                                 GetCorectMCQAnsGivenbyUser=_.where(GetAnsgivebyuser, { IsCorrect: true, QuestionId: GetQuestion[k].QuestionId });

                                     for(var MCQC = 0; MCQC < GetCorectMCQAnsGivenbyUser.length; MCQC++)
                                     {
                                         FinalReport += '<td class="rightans"><img src="../CommonFiles/img/right.png"  alt=""/>' + GetCorectMCQAnsGivenbyUser[MCQC].Option + '</td>'
                                     }

                                 }
                                 else{
                                        GetwrongMCQAnsGivenbyUser=_.where(GetAnsgivebyuser, { IsCorrect:false, QuestionId: GetQuestion[k].QuestionId });
                                       for(var MCQW = 0; MCQW < GetwrongMCQAnsGivenbyUser.length; MCQW++)
                                         {
                                             FinalReport += '<td class="wrongans"><img src="../CommonFiles/img/wrong.png" alt=""/>' + GetwrongMCQAnsGivenbyUser[MCQW].Option + '</td>'
                                         }
                                 }





                                   // if(GetQuestion[k].IsCorrect == "1"){

//                                        for(var MulCh = 0; MulCh < GetAnsgivebyuser.length; MulCh++)
//                                        {

//                                          if (GetQuestion[k].QuestionId == GetAnsgivebyuser[MulCh].QuestionId) {
//                                           if(GetQuestion[k].IsCorrect == "1"){

//                                                FinalReport += '<td class="rightans"><img src="../CommonFiles/img/right.png"  alt=""/>' + GetAnsgivebyuser[MulCh].Option + '</td>'
//                                               }
//                                               else
//                                               {
//                                                FinalReport += '<td class="wrongans"><img src="../CommonFiles/img/wrong.png" alt=""/>' + GetAnsgivebyuser[MulCh].Option + '</td>'

//                                               }
//                                           }

//                                        }
                            }
                            else if (GetQuestion[k].QuestionType == "Map the Column") {

                                var MapColumnA = "";
                                var MapColumnB = "";
                                var Countcorrectmc = 0;
                                GetMapColundataQwise = _.where(GetMapColumnData, { QuestionId: GetQuestion[k].QuestionId });

                                for (var cmc = 0; cmc < GetMapColundataQwise.length; cmc++) {
                                    if (GetMapColundataQwise[cmc].COptionID == Number(GetMapColundataQwise[cmc].AOptionID)) {
                                        Countcorrectmc++;
                                    }
                                }
                                if (Countcorrectmc == GetMapColundataQwise.length) {
                                    FinalReport += '<td class="rightans"><img src="../CommonFiles/img/right.png"  alt="" style="margin-left:90px"/>'
                                }
                                else {
                                    FinalReport += '<td class="wrongans"><img src="../CommonFiles/img/wrong.png" alt="" style="margin-left:90px"/>'
                                }


                                MapColumnA = "<table ><tr><td><h2 style='margin-left:65px'>A</h2></td>"
                                                           + "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><h2 style='margin-left:65px'>B</h2></td></tr>"
                                                           + "<tr><td><ul class='dd-list' id='MapColA'>"

                                for (var x = 0; x < GetMapColumnData.length; x++) {
                                    if (GetQuestion[k].QuestionId == GetMapColumnData[x].QuestionId) {
                                        MapColumnA += '<li class="widget dd-item dd-handle" id="MapColmnA-' + GetMapColumnData[x].COptionID + '">' + GetMapColumnData[x].ALeftText + '</li>';

                                    }
                                }

                                for (var y = 0; y < GetMapColumnData.length; y++) {
                                    if (GetQuestion[k].QuestionId == GetMapColumnData[y].QuestionId) {
                                        MapColumnB += '<li class="widget dd-item dd-handle" id="MapColmnB-' + GetMapColumnData[y].AOptionID + '">' + GetMapColumnData[y].ARightText + '</li>';
                                    }
                                }

                                FinalReport += MapColumnA + "</ul></td>" + "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id='RightText'><ul class='dd-list' id='MapColB'>" + MapColumnB + "</ul></td></tr></table></td>";

                            }
                            else if(GetQuestion[k].QuestionType == "Fill in the blank")
                            {
                              var BlankNumberIndex =0;
                               

                               FinalReport += '<td class="rightans">'
                                cntrl = "<table id='tblfib'>"
                                   if(GetQuestion[k].IsCorrect=="1"){

                                    GetFIBuserattmpans = _.where(GetAnsgivebyuser, { QuestionId: GetQuestion[k].QuestionId, IsCorrect:true });

                                        for(var fib = 0; fib < GetFIBuserattmpans.length; fib++)
                                        {
                                              BlankNumberIndex++
                                             GetFIBuserattmpansbnwise = _.where(GetFIBuserattmpans, { BlankNumber: BlankNumberIndex.toString()   });

                                             cntrl += '<tr><td class="rightans"><img src="../CommonFiles/img/right.png"  alt=""/>Blank '+ BlankNumberIndex +' :' +' ' + GetFIBuserattmpansbnwise[0].Option + '</td></tr>'
                                     
                                        }
                                   }
                                   else
                                   {
                                        GetFIBuserattmpans = _.where(GetAnsgivebyuser, { QuestionId: GetQuestion[k].QuestionId, IsCorrect: false});
                                         for(var fib = 0; fib < GetFIBuserattmpans.length; fib++)
                                        {
                                              BlankNumberIndex++
                                              GetFIBuserattmpansbnwise = _.where(GetFIBuserattmpans, { BlankNumber: BlankNumberIndex.toString()   });
                                              GetFIBuserattmpansbnwise1 = _.where(GetFIBCorrectAnswer, { BlankNumber: BlankNumberIndex, QuestionId: GetQuestion[k].QuestionId    });

                                              if(Number(GetFIBuserattmpansbnwise[0].OptionId)==GetFIBuserattmpansbnwise1[0].OptionId){
                                             cntrl += '<tr><td class="rightans"><img src="../CommonFiles/img/right.png"  alt=""/>Blank '+ BlankNumberIndex +' :' +' ' + GetFIBuserattmpansbnwise[0].Option + '</td></tr>'
                                             }
                                             else
                                             {
                                                cntrl += '<tr><td class="wrongans"><img src="../CommonFiles/img/wrong.png"  alt=""/>Blank '+ BlankNumberIndex +' :' +' ' + GetFIBuserattmpansbnwise[0].Option + '</td></tr>'
                                             }
                                     
                                        }
                                      
                                   }
                                   FinalReport +=cntrl+'</table></td>';
                            }
                            else if (GetQuestion[k].QuestionType == "Crossword") {
                                var cntrl = "";
                                var CrosswordDetails = [];
                                var MatrixCount = 0;
                                var CrosswordText = "";
                                var crosswordIndex = -1;
                                var MatrixNumber = 0;
                                CrosswordDetails = _.where(GetAnsgivebyuser, { QuestionType: 'Crossword', QuestionId: GetQuestion[k].QuestionId });
                                MatrixCount = CrosswordDetails[0].CrosswordMatrixCount;
                                CrosswordText = CrosswordDetails[0].Crossword;
                                var CrosswordTextt = CrosswordText.split(",");
                                if (GetAnsgivebyuser[k].CorrectCrosword == GetAnsgivebyuser[k].Crossword) {
                                    FinalReport += '<td class="rightans"> <img src="../CommonFiles/img/right.png"  alt=""/>'
                                }
                                else {
                                    FinalReport += '<td class="wrongans"><img src="../CommonFiles/img/wrong.png" alt=""/>'
                                }

                                cntrl = "<table id='tblcrossword'>"
                                for (var CWi = 0; CWi < MatrixCount; CWi++) {
                                    cntrl += "<tr id='trcw-" + CWi + "'><td>"
                                    for (var CWj = 0; CWj < MatrixCount; CWj++) {
                                        crosswordIndex++;
                                        MatrixNumber++

                                        if (CrosswordTextt[crosswordIndex] != "") {

                                            cntrl += "<input style='width:40px;text-align: center;background-color:WhiteSmoke;color:Black' placeholder=" + MatrixNumber + " type='text' id='txtcw-" + CWi + '' + CWj + "-" + CrosswordTextt[crosswordIndex] + "' maxlength='1' value=" + CrosswordTextt[crosswordIndex] + " ></input>";
                                        }
                                        else {
                                            cntrl += "<input style='width:40px;text-align: center;background-color:Black;color:Black' placeholder=" + MatrixNumber + " type='text' disabled id='txtcw-" + CWi + '' + CWj + "-" + CrosswordTextt[crosswordIndex] + "' maxlength='1' value=" + CrosswordTextt[crosswordIndex] + "></input>";
                                        }
                                    }
                                    cntrl += "</td></tr>";
                                }

                                cntrl += "</table>";


                                FinalReport += cntrl + '</td>';

                            } //End User Answer

                            FinalReport += '</tr>'
                                        + '</table>'
                                        + '</td>'
                                        + '</tr>'
                                        + '</table>'
                                        + ' </td>'
                        }

                        FinalReport += '</tr>'

                    } //end table3
                    

                } //end table2

+' </table>'
                $("#hhdTotalCount").val(Number($("#hhdTotalCount").val()) + 1);

            } //end table1

            $("#DetailReport" + DivCollapaseId).append(FinalReport);

            PreDivCollapaseId = DivCollapaseId;
            $("#Loader").hide();
            // GetMore5Question();


        },
        failur: function (msg) {
            alert(msg);
        }
    });
}




function GetMore5Question() {
    var DisplayingRecords = Number($("#hhdDisplayedCount").val());


    if (DisplayingRecords < Number($("#hhdTotalCount").val())) {
        for (i = DisplayingRecords; i < DisplayingRecords + 2; i++) {
            $("#CountTD-" + i).css("display","block");
        }
    }
    $("#hhdDisplayedCount").val(DisplayingRecords + 2)
    // DisplayedRecords 1

}