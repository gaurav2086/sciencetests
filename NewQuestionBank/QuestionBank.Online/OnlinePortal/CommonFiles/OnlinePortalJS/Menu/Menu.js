
var GlobalPath = "../../../..";
var GlobalServiceURL = GlobalPath + "/CommonFiles/CommonUIService/CommonUIService.asmx/";

$(function () {
    BindMenu();
   
});




function BindMenu() {

    $.ajax({
        type: "POST",

        //url: "../../../../CommonFiles/CommonUIService/CommonUIService.asmx/BindMenu", // Location of the service 
        url: GlobalServiceURL + "BindMenu", // Location of the service 
        data: "{inXML : ''}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var obj = jQuery.parseJSON(data.d.responseData);

            var MainMenu = "";
            var Qualification = "<ul>";
            var CatgorySaubject = "<ul>";


            for (var i = 0; i < obj.Table1.length; i++) { // for loop start for Bind Qualification

                var ExamBoard = "<ul>";

                for (var j = 0; j < obj.Table2.length; j++) { // for loop start for Bind ExamBoard

                    var Subject = "<ul>";
                    for (var l = 0; l < obj.Table3.length; l++) {// for loop start for Bind Subject

                        if (obj.Table2[j].GQEMID == obj.Table3[l].GQEMID) {
//                            Subject += "<li><a  id='SubjectlnkMenu-" + obj.Table3[l].SubjectID + "-Unit-" + obj.Table3[l].SubjectName + "' href='frmExamBoardInfo.aspx?SubjectID=" + obj.Table3[l].SubjectID + "&SubjectNames=" + obj.Table3[l].SubjectName + "'><span>" + obj.Table3[l].SubjectName + "</span></a></li>";
                            Subject += "<li><a  id='SubjectlnkMenu-" + obj.Table3[l].SubjectID + "-Unit-" + obj.Table3[l].SubjectName + "' href='../NewPages/ExamBoardInfo.aspx?SubjectID=" + obj.Table3[l].SubjectID + "&SubjectNames=" + obj.Table3[l].SubjectName + "'><span>" + obj.Table3[l].SubjectName + "</span></a></li>";
                        }

                    } // for loop end for Bind Subject

                    Subject += "</ul>";

                    if (obj.Table1[i].QualificationID == obj.Table2[j].QualificationID) {

                        ExamBoard += "<li ><a id='EBlnkMenu-" + obj.Table2[j].GQEMID + "-Subject-" + obj.Table2[j].ExamBoardName + "' href='../NewPages/ExamBoardInfo.aspx?ExamBoardID=" + obj.Table2[j].GQEMID + "&ExamBoardName=" + obj.Table2[j].ExamBoardName + "'><span>" + obj.Table2[j].ExamBoardName + "</span></a>" + Subject + "</li>";
                    }

                }  // for loop end for Bind ExamBoard

                ExamBoard += "</ul>";

                Qualification += "<li><a  id='QlnkMenu-" + obj.Table1[i].QualificationID + "-ExamBoard-" + obj.Table1[i].Qualification + "'  href='../NewPages/ExamBoardInfo.aspx?QualificationID=" + obj.Table1[i].QualificationID + "&QualificationName=" + obj.Table1[i].Qualification + "'><span>" + obj.Table1[i].Qualification + "</span></a>" + ExamBoard + "</li>";

            } // for loop end for Bind Qualification

            Qualification += "</ul>";

            for (var s = 0; s < obj.Table4.length; s++) {
                CatgorySaubject += "<li><a  id='CatgorySaubject-" + obj.Table4[s].SubjectId + "-Category-" + obj.Table4[s].SubjectName + "'  href='../NewPages/ExamBoardInfo.aspx?SubjectName=" + obj.Table4[s].SubjectName + "'><span>" + obj.Table4[s].SubjectName + "</span></a></li>";
            }
            CatgorySaubject += "</ul>";
            for (var k = 0; k < obj.Table.length; k++) {

                if (obj.Table[k].MenuId == '1') {
                    MainMenu += " <li class='has-sub'><a  id='AllQlnkMenu-" + obj.Table[k].MenuId + "-Qualification-" + obj.Table1[0].Qualification + "'   href='../NewPages/ExamBoardInfo.aspx?Type=Qualification'><span>" + obj.Table[k].MenuName + "</span></a>" + Qualification + "</li>";


                }
                else if (obj.Table[k].MenuId == '2') {
                    MainMenu += " <li class='has-sub'><a  id='SubjectforCategory-" + obj.Table[k].MenuId + "-Category-Biology'   href='../NewPages/ExamBoardInfo.aspx?Type=SubjectCategory'><span>" + obj.Table[k].MenuName + "</span></a>" + CatgorySaubject + "</li>";
                }
                else {

                    if (obj.Table[k].MenuId == '3') {
                        MainMenu += " <li><a href='frmReport.aspx'><span>" + obj.Table[k].MenuName + "</span></a></li>";
                    }
                    //To show Membership remove commnet
//                    else if (obj.Table[k].MenuId == '4') {
//                        MainMenu += " <li><a href='frmMembership.aspx'><span>" + obj.Table[k].MenuName + "</span></a></li>";
//                    }
                   
                }


            }
          //  MainMenu += "</ul>";
            $("#MainMenu").append(MainMenu);

        },
        failur: function (msg) {

            alert(msg);
        }

    });
};