$(function () {
    $('.newstape').newstape();
    BindQualification();
    BindSubject();
    BindRssFeedInfo();
   
});

function BindSubject() {

    $.ajax({

        type: "POST",
        url: "frmDefault.aspx/GetQualifSubjectInfo", // Location of the service 
        data: "{inXML : '<Getlookup><ActionType>SelectAllSubject</ActionType></Getlookup>'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var obj = jQuery.parseJSON(data.d.responseData);
            $("#DivSubject").empty();

            var colorno = 0;


            for (var i = 0; i < obj.Table.length; i++) {
                var subject = ""
                colorno++

                subject += '<div class="col-sm-4">'
            	          + '<div class="subjectcontainer color' + colorno + ' "><a id="Subject-' + obj.Table[i].SubjectName + '" href="frmExamBoardInfo.aspx?SubjectName=' + obj.Table[i].SubjectName + '">' + obj.Table[i].SubjectName + '</a></div>'
                          + '</div>'
                if (i >= 6) {
                    $("#DivSubject1").append(subject);
                }
                else {
                    $("#DivSubject").append(subject);
                }

               
            }


        },
        failur: function (msg) {
            alert(msg);
        }

    });

}


function BindQualification() {
    $.ajax({

        type: "POST",
        //url: "frmExamBoardInfo.aspx/GetExamBoardDesc", // Location of the service 
        url: "frmDefault.aspx/GetQualifSubjectInfo", // Location of the service 
        data: "{inXML : '<Getlookup><ActionType>SelectQualfication</ActionType></Getlookup>'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var obj = jQuery.parseJSON(data.d.responseData);
            $("#QualifDiv1").empty();
            $("#QualifDiv1").empty();

            for (var i = 0; i < obj.Table.length; i++) {

                if (i >= 3) {
                    $("#QualifDiv1").append("<div class='col-sm-4 col-margin'> <div class='qualification_box'><a id='Qualification-" + obj.Table[i].QualificationID + "' href='frmExamBoardInfo.aspx?QualificationID=" + obj.Table[i].QualificationID + "&QualificationName=" + obj.Table[i].Qualification + "'><div class='quali_heading'><center>" + obj.Table[i].Qualification + "</center></div><div class='quali_desc'>" + obj.Table[i].Description + "</div></a></div></div>");
                }
                else {
                    $("#QualifDiv").append("<div class='col-sm-4 col-margin'> <div class='qualification_box'><a id='Qualification-" + obj.Table[i].QualificationID + "' href='frmExamBoardInfo.aspx?QualificationID=" + obj.Table[i].QualificationID + "&QualificationName=" + obj.Table[i].Qualification + "'><div class='quali_heading'><center>" + obj.Table[i].Qualification + "</center></div><div class='quali_desc'>" + obj.Table[i].Description + "</div></a></div></div>");
                }



            }
        },
        failur: function (msg) {
            alert(msg);
        }

    });

}

function BindRssFeedInfo() {

    $.ajax({

        type: "POST",
        url: "frmDefault.aspx/GetRssFeedInfo", // Location of the service 
        data: "{inXML : ''}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var obj = jQuery.parseJSON(data.d.responseData);
            $("#Divrssfeed").empty();

          
            var colorno = 0;

            var RssFeed = ""
            for (var j = 0; j < obj.Table1.length; j++) {


               // RssFeed += '<marquee  direction="up" >'
                //RssFeed += '<div class="newstape-content">'
                RssFeed += '<div class="feed_item">'
                RssFeed += '<div class="feed_item_title">'
                RssFeed += '<a  id="rss-' + obj.Table1[j].subject + '" href='+ obj.Table1[j].Link +' target="_blank" >'+ obj.Table1[j].subject +'</a>'
                RssFeed += '</div>'           
                RssFeed += '<div class="feed_item_description">'
                RssFeed +=  obj.Table1[j].summary 
                RssFeed += '</div>'
                RssFeed += '</div>'
               // RssFeed += '</div>'
                // RssFeed += '</marquee>'






//                 RssFeed += '<div>'
//                 RssFeed += '<h3><a  id="rss-' + obj.Table1[j].subject + '" href=' + obj.Table1[j].Link + ' target="_blank" >' + obj.Table1[j].subject + '</a></h3>'
//                 RssFeed += '<p class="text-justify">'
//                 RssFeed += obj.Table1[j].summary 
//                 RssFeed += '</p>'
//                 RssFeed += ' <hr />'
//                 RssFeed += '</div>'



            }
            $("#content").append(RssFeed);

         
        },
        failur: function (msg) {
            alert(msg);
        }

    });

}
