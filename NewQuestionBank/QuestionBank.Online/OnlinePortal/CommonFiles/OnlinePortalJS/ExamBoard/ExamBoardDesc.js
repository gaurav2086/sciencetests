
var QualificationId = 0, GQEMID = 0, SubjectId = 0, TopicId = 0, Index = 0, EBID = 0, SbjctId = 0;
var XML = "", Type = "", ControlType = "", ExamBoardName = "", QualificationName = "", SubjectName = "", TopicName = "", QualId = "", QualName = "", SubjectNamecatg = "", EBName = "", SbjctName = "", BredcrumbType = "", MainType = "";
var ControlDetails = [], ControlDetailsMapCol = [], MltChOptionId = [], MltChCorrectAnswer = [], obj = [], CorrectAnswer = [];
var userstatus = "";
var Totalmarks = 0
$(document).ready(function () {

    $("#btnGoit").hide();
    $("#DivCorrect").hide();
    $("#DivMsgNonRegUser").hide();
    $("#DivMsgRenewalplan").hide();
    $("#DivNoTopic").hide();
    $("#DivNoExamBoard").hide();
    $("#DivNoQuestion").hide();
    $("#lblAttempMarks").text('0');
    $("#lblQAttempt").text('0');

    // Type = 'Qualification';

    QualId = GetParameterValues("QualificationID");
    QualName = GetParameterValues("QualificationName");
    SubjectNamecatg = GetParameterValues("SubjectName");
    EBID = GetParameterValues("ExamBoardID");
    EBName = GetParameterValues("ExamBoardName");
    SbjctId = GetParameterValues("SubjectID");
    SbjctName = GetParameterValues("SubjectNames");
    MainType = GetParameterValues("Type");




    if (QualId != "" || QualId != undefined || SubjectNamecatg != "" || SubjectNamecatg != undefined || EBID != "" || EBID != undefined || SbjctId != "" || SbjctId != undefined) {


        if (QualId != "" && QualId != undefined) {
            Type = "ExamBoard";
            QualificationId = QualId;
            QualificationName = QualName;
            Showbreadcrumb(QualName, QualId, '', '', '', '', '');
            GetExamBoardDesc(ShowQualSubject('ExamBoard', QualId));
        }
        else if (SubjectNamecatg != "" && SubjectNamecatg != undefined) {
            Type = "Category";
            Showbreadcrumbcategory(SubjectNamecatg, '');
            GetExamBoardDesc(ShowQualSubject('Category', SubjectNamecatg));

        }
        else if (EBID != "" && EBID != undefined) {
            Type = "Subject";
            BredcrumbType = "ExamBoard";
            GetBredCrumb(BredcrumbType, EBID, 0);
            // Showbreadcrumb('', '', EBName, EBID, '', '', '');
            GetExamBoardDesc(ShowQualSubject(Type, EBID));

        }
        else if (SbjctId != "" && SbjctId != undefined) {
            Type = "Unit";
            BredcrumbType = "Subject";
            // Showbreadcrumb('', '', '', '', SbjctName, SbjctName, '');
            GetBredCrumb(BredcrumbType, 0, SbjctId);
            GetExamBoardDesc(ShowQualSubject(Type, SbjctId));
        }
        else {

            if (MainType == 'Qualification') {

                Type = 'Qualification';
                GetExamBoardDesc(ShowQualSubject('Qualification', 0));
            }
            else {
                Type = 'SubjectCategory';
                GetExamBoardDesc(ShowQualSubject('SubjectCategory', 0));
            }

        }
    }


    $(document).on('click', '[id^="Category-"]', function () {
        Index = 0
        Totalmarks = 0
        $("#lblAttempMarks").text('0');
        $("#lblQAttempt").text('0');
        $("#Divbreadcrumb").empty();



        SubjectNamecatg = this.id.split('-')[1];

        Type = "Category";
        Showbreadcrumbcategory(SubjectNamecatg, '');
        GetExamBoardDesc(ShowQualSubject('Category', SubjectNamecatg));
        return false;

    });

    $(document).on('click', '[id^="AllQlnkMenu-"]', function () {
        Index = 0
        Totalmarks = 0
        $("#lblAttempMarks").text('0');
        $("#lblQAttempt").text('0');
        $("#Divbreadcrumb").empty();
        var RowID = parseInt(((this.id.split('-'))[1]).toString());

        Type = this.id.split('-')[2];
        QualificationName = this.id.split('-')[3];
        Showbreadcrumb(QualificationName, 1, '', '', '', '', '');

        GetExamBoardDesc(ShowQualSubject(Type, 0));
        return false;

    });
    $(document).on('click', '[id^="SubjectforCategory-"]', function () {
        Index = 0
        Totalmarks = 0
        $("#lblAttempMarks").text('0');
        $("#lblQAttempt").text('0');
        $("#Divbreadcrumb").empty();
        Type = 'SubjectCategory';
        GetExamBoardDesc(ShowQualSubject('SubjectCategory', 0));
        return false;

    });

    $(document).on('click', '[id^="QlnkMenu-"]', function () {
        Index = 0
        Totalmarks = 0
        $("#lblAttempMarks").text('0');
        $("#lblQAttempt").text('0');

        $("#Divbreadcrumb").empty();
        var RowID = parseInt(((this.id.split('-'))[1]).toString());

        Type = this.id.split('-')[2];

        QualificationId = RowID;

        QualificationName = this.id.split('-')[3];
        Showbreadcrumb(QualificationName, QualificationId, '', '', '', '', '');


        GetExamBoardDesc(ShowQualSubject(Type, QualificationId));
        return false;

    });

    $(document).on('click', '[id^="EBlnkMenu-"]', function () {
        Index = 0;
        Totalmarks = 0;
        $("#lblAttempMarks").text('0');
        $("#lblQAttempt").text('0');

        $("#Divbreadcrumb").empty();
        var RowID = parseInt(((this.id.split('-'))[1]).toString());
        Type = this.id.split('-')[2];

        GQEMID = RowID;
        ExamBoardName = this.id.split('-')[3];



        Showbreadcrumb(QualificationName, QualificationId, ExamBoardName, GQEMID, '', '', '');
        GetExamBoardDesc(ShowQualSubject(Type, GQEMID));
        return false;

    });

    $(document).on('click', '[id^="SubjectlnkMenu-"]', function () {
        Index = 0;
        Totalmarks = 0;
        $("#lblAttempMarks").text('0');
        $("#lblQAttempt").text('0');

        $("#Divbreadcrumb").empty();
        var RowID = parseInt(((this.id.split('-'))[1]).toString());
        Type = this.id.split('-')[2];

        SubjectId = RowID;

        SubjectName = this.id.split('-')[3];

        Showbreadcrumb(QualificationName, QualificationId, ExamBoardName, GQEMID, SubjectName, SubjectId, '');

        GetExamBoardDesc(ShowQualSubject(Type, SubjectId));
        return false;

    });
    $(document).on('click', '[id^="CatgorySaubject-"]', function () {
        Index = 0;
        Totalmarks = 0;
        $("#lblAttempMarks").text('0');
        $("#lblQAttempt").text('0');

        $("#Divbreadcrumb").empty();
        var RowID = parseInt(((this.id.split('-'))[1]).toString());
        Type = this.id.split('-')[2];

        SubjectId = RowID;

        SubjectNamecatg = this.id.split('-')[3];

        Showbreadcrumbcategory(SubjectNamecatg, '');
        GetExamBoardDesc(ShowQualSubject(Type, SubjectNamecatg));
        return false;

    });
    $(document).on('click', '[id^="TopiclnkMenu-"]', function () {
        Index = 0;
        Totalmarks = 0;
        $("#lblAttempMarks").text('0');
        $("#lblQAttempt").text('0');

        $("#Divbreadcrumb").empty();
        var RowID = parseInt(((this.id.split('-'))[1]).toString());
        Type = this.id.split('-')[2];

        TopicId = RowID;
        clock = $('#Timer').FlipClock({
            clockFace: 'HourlyCounter'
        });

        TopicName = this.id.split('-')[3];
        Showbreadcrumb(QualificationName, QualificationId, ExamBoardName, GQEMID, SubjectName, SubjectId, TopicName);

        GetExamBoardDesc(ShowQualSubject(Type, TopicId));
        return false;

    });

    $(document).on('click', '[id^="SelectAllTopic-"]', function () {
        Index = 0;
        Totalmarks = 0;
        $("#lblAttempMarks").text('0');
        $("#lblQAttempt").text('0');

        $("#Divbreadcrumb").empty();
        var RowID = parseInt(((this.id.split('-'))[1]).toString());
        Type = this.id.split('-')[0];



        var TopicId1 = this.id.split('-')[1];
        var UnitName = this.id.split('-')[2];
        Showbreadcrumb(QualificationName, QualificationId, ExamBoardName, GQEMID, SubjectName, SubjectId, UnitName);

        GetExamBoardDesc(ShowQualSubject(Type, TopicId1));
        return false;

    });

    $(document).on('click', '[id^="SelectAllCategory-"]', function () {
        Index = 0;
        Totalmarks = 0;
        $("#lblAttempMarks").text('0');
        $("#lblQAttempt").text('0');

        $("#Divbreadcrumb").empty();

        Type = this.id.split('-')[0];



        var subjectname = this.id.split('-')[1];
        var CategoryName = "";
        CategoryName = this.id.split('-')[2];
        Showbreadcrumbcategory(SubjectNamecatg, '')
        GetExamBoardDesc(ShowQualSubject(Type, subjectname));
        return false;

    });



    $(document).on('click', '[id^="CategoryWiseQues-"]', function () {
        Index = 0;
        Totalmarks = 0;

        $("#lblAttempMarks").text('0');
        $("#lblQAttempt").text('0');

        $("#Divbreadcrumb").empty();


        clock = $('#Timer').FlipClock({
            clockFace: 'HourlyCounter'
        });
        Type = this.id.split('-')[0];
        var CategoryId = 0;
        var CategoryName = "";

        CategoryId = this.id.split('-')[1];
        CategoryName = this.id.split('-')[2];

        Showbreadcrumbcategory(SubjectNamecatg, CategoryName)
        GetExamBoardDesc(ShowQualSubject(Type, CategoryId));
        return false;




    });



    $("#btnSubmit").click(function () {  //Submit Button Click

        SubmitAnswer();



    }); //end Submit Button click

    $("#btnGoit").click(function () { //Go it Button  click

        if (obj.Table.length == Index) {
            $("#Expalnation").empty();
            $("#QuestionComplete").empty();
            $("#AnswerControl").empty();
            $("#Question").empty();
            $("#DivfibQuest").empty();
            $("#Divfiboptn").empty();
            $("#btnSubmit").hide();
            $("#btnGoit").hide();
            $("#QuestionComplete").show();
            $("#QuestionComplete").append("<span style='color: #00adef;font-size:20px'>Great... you attempted all questions in this topic.</span>");
        }
        else {
            $("#btnGoit").hide();
            $("#btnSubmit").show();
            $("#Expalnation").empty();
            // $("#Expalnation").hide();
            $("#AnswerControl").empty();
            $("#Question").empty();
            $("#DivfibQuest").empty();
            $("#Divfiboptn").empty();
            BindQuestionControl(Index);
        }
    }); //End Go it Button click



    $(document).on('click', '[id^="btnfib-"]', function () {

        var OptionText = this.id.split('-')[1]
        var BlankNumber = parseInt(((this.id.split('-'))[2]).toString());
        var OptionId = this.id.split('-')[3]

        var BlankNumberIndex = 0;
        var QuestinIndex = 0;

        BlankNumberIndex = $("#drpblank").val();
        QuestinIndex = "place_" + BlankNumberIndex;
        var HdnID = "hdn-" + BlankNumberIndex

        $("#" + QuestinIndex).text(OptionText);

        var Hdnval = BlankNumber + '-' + OptionId

        $("#" + HdnID).val(Hdnval);

        $("#btnSubmit").attr("disabled", false);
        $("#btnSubmit").removeAttr('title');
        //$("#hdn-" + BlankNumberIndex + "-" + OptionId + "").val(BlankNumber);

    });


});

function GetBredCrumb(Breadcrumbtype, EbId, subjctid) {

    var INXML = "<Getlookup><ActionType>SelectBreadcrumbDetail</ActionType><GQEM_ID>" + EbId + "</GQEM_ID><SubjectId>" + subjctid + "</SubjectId></Getlookup>"
    $.ajax({
        type: "POST",
        url: "frmExamBoardInfo.aspx/GetExamBoardDesc", // Location of the service 

        data: "{inXML : '" + INXML + "'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            obj = jQuery.parseJSON(data.d.responseData);

            if (Breadcrumbtype == "Subject") {
                QualificationId = obj.Table[0].QualificationId;
                QualificationName = obj.Table[0].QualificationName;
                ExamBoardName = obj.Table[0].ExamBoardName;
                GQEMID = obj.Table[0].GQEM_ID;
                Showbreadcrumb(obj.Table[0].QualificationName, obj.Table[0].QualificationId, obj.Table[0].ExamBoardName, obj.Table[0].GQEM_ID, SbjctName, SbjctId, '');
            }
            else {
                QualificationId = obj.Table[0].QualificationId;
                QualificationName = obj.Table[0].QualificationName;

                Showbreadcrumb(obj.Table[0].QualificationName, obj.Table[0].QualificationId, EBName, EBID, '', '', '');
            }
        },
        failur: function (msg) {
            alert(msg);
        }
    })

};

function GetExamBoardDesc(XML) {

    $.ajax({
        type: "POST",
        url: "frmExamBoardInfo.aspx/GetExamBoardDesc", // Location of the service 

        data: "{inXML : '" + XML + "'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            obj = jQuery.parseJSON(data.d.responseData);
            $("#QualificationDiv").empty();
            $("#ExamBoardDiv2").empty();
            $("#ExamBoardDiv").empty();
            $("#SubjectDiv2").empty();
            $("#SubjectDiv").empty();
            $("#DivUnit").empty();
            $("#DivCategory").empty();
            $("#DivUnit1").empty();
            $("#AnswerControl").empty();
            $("#Question").empty();
            $("#Expalnation").empty();
            $("#DivMsgNonRegUser").hide();
            $("#DivMsgRenewalplan").hide();
            $("#btnGoit").hide();
            $("#DivNoTopic").hide();
            $("#DivNoExamBoard").hide();
            $("#DivNocategory").hide();
            $("#DivNoQuestion").hide();
            $("#DivfibQuest").empty();
            $("#Divfiboptn").empty();
            var TotalTopic1 = 0;
            var TotalTopic2 = 0;
            var BindTopicwithQuestion = [];


            if (Type == "ExamBoard") {  //Start ExamBoard

                if (data.d.responseCode == 2) {
                    $("#DivNoExamBoard").css("visibility", "visible");
                    $("#DivNoExamBoard").show();
                    $("#ExamBoardDiv2").hide();
                    $("#ExamBoardDiv").hide();
                }
                else {
                    $("#DivNoExamBoard").hide();
                    $("#ExamBoardDiv2").show();
                    $("#ExamBoardDiv").show();
                }

                for (var i = 0; i < obj.Table.length; i++) {

                    if (i >= 3) {
                        $("#ExamBoardDiv2").append("<div class='col-sm-4 col-margin'> <div class='qualification_box'><a  id='EBlnkMenu-" + obj.Table[i].GQEMID + "-Subject-" + obj.Table[i].ExamBoardName1 + "' href='#'><div class='quali_heading'><center>" + obj.Table[i].ExamBoardName1 + "</center></div><div class='quali_desc'>" + obj.Table[i].Description + "</div></a></div></div>");
                    }
                    else {
                        $("#ExamBoardDiv").append("<div class='col-sm-4 col-margin'> <div class='qualification_box'><a id='EBlnkMenu-" + obj.Table[i].GQEMID + "-Subject-" + obj.Table[i].ExamBoardName1 + "' href='#'><div class='quali_heading'><center>" + obj.Table[i].ExamBoardName1 + "</center></div><div class='quali_desc'>" + obj.Table[i].Description + "</div></a></div></div>");
                    }


                }
            } //End ExamBoard

            else if (Type == "Qualification" || Type == "SubjectCategory") {//Start qualification

                if (data.d.responseCode == 2) {
                    $("#DivNoExamBoard").css("visibility", "visible");
                    $("#DivNoExamBoard").show();
                    $("#QualificationDiv").hide();
                }
                else {
                    $("#DivNoExamBoard").hide();
                    $("#QualificationDiv").show();
                }
                if (Type == "Qualification") {

                    for (var i = 0; i < obj.Table.length; i++) {
                        $("#QualificationDiv").append("<div class='col-sm-4 col-margin'> <div class='qualification_box'><a id='QlnkMenu-" + obj.Table[i].QualificationID + "-ExamBoard-" + obj.Table[i].Qualification + "' href='#'><div class='quali_heading'><center>" + obj.Table[i].Qualification + "</center></div><div class='quali_desc'>" + obj.Table[i].Description + "</div></a></div></div>");
                    }
                }
                else {
                    var colorno = 0;
                    for (var i = 0; i < obj.Table.length; i++) {

                        var subject = ""
                        colorno++

                        subject += '<div class="col-sm-4">'
            	          + '<div class="subjectcontainer color' + colorno + ' "><a id="CatgorySaubject-' + obj.Table[i].SubjectId + '-Category-' + obj.Table[i].SubjectName + '" href="#">' + obj.Table[i].SubjectName + '</a></div>'
                          + '</div>'

                        $("#QualificationDiv").append(subject);
                    }
                }

            }
            //End Qualification

            else if (Type == "Subject") { //Start Subject

                for (var j = 0; j < obj.Table.length; j++) {


                    if (j >= 3) {
                        $("#SubjectDiv2").append("<div class='col-sm-4 col-margin'> <div class='qualification_box'><a id='SubjectlnkMenu-" + obj.Table[j].SubjectID + "-Unit-" + obj.Table[j].SubjectName + "' href='#'><div class='quali_heading'>" + obj.Table[j].SubjectName + "</div></a> </div> </div> </div>");
                    }
                    else {
                        $("#SubjectDiv").append("<div class='col-sm-4 col-margin'> <div class='qualification_box'><a  id='SubjectlnkMenu-" + obj.Table[j].SubjectID + "-Unit-" + obj.Table[j].SubjectName + "' href='#'><div class='quali_heading'>" + obj.Table[j].SubjectName + "</div></a> </div> </div> </div>");
                    }


                }
            } //Start Subject

            else if (Type == "Unit") { //Start Unit


                if (data.d.responseCode == 2 || obj.Table1.length == 0) {
                    $("#DivNoTopic").css("visibility", "visible");
                    $("#DivNoTopic").show();
                    $("#Unit").hide();
                }
                else {
                    $("#DivNoTopic").hide();
                    $("#Unit").show();
                }

                for (var i = 0; i < obj.Table.length; i++) {
                    BindTopicwithQuestion = _.where(obj.Table1, { UnitId: obj.Table[i].UnitId });
                    if (i >= 3) {
                        TotalTopic1 = 0;
                        if (BindTopicwithQuestion.length > 0) {
                            $("#DivUnit1").append('<div class="col-sm-4 col-margin">' +
                            '<div class="topicbox">' +
                            '<div class="quali_heading2" style="padding-bottom:10px;"> ' + obj.Table[i].UnitName + ' </div>' +
                            '<div class="questions" id="divQuestion-' + i + '">');
                        }

                        for (var j = 0; j < obj.Table1.length; j++) {


                            if (obj.Table[i].UnitId == obj.Table1[j].UnitId) {
                                TotalTopic1++;

                                //                                if (obj.Table3[j].UnitId == obj.Table1[j].UnitId && obj.Table3[j].TopicId == obj.Table1[j].TopicId) {
                                //                                    //  BindTopicwithQuestion = _.where(obj.Table3, { TopicId: obj.Table1[j].TopicId });

                                //                                    if (Number(obj.Table3[j].QuationCount) > 0) {

                                $("#divQuestion-" + i).append("<li><a id='TopiclnkMenu-" + obj.Table1[j].TopicId + "-Topic-" + obj.Table1[j].TopicDesc + "' href='#'>" + obj.Table1[j].TopicDesc + "</a></li>");
                                //                                    }
                                //                                }
                            }
                        }

                        if (obj.Table2[i].Total > Number(TotalTopic1)) {

                            $("#divQuestion-" + i).append('<hr style="padding:0px !important;"/>' +
                            ' <div class="blue13px"><a  id="SelectAllTopic-' + obj.Table[i].UnitId + '"  href="#">View all ' + obj.Table2[i].Total + ' Topic</a></div>' +
                            ' </div>' +
                            '</div>' +
                            '</div>');
                        }
                        else {

                            $("#divQuestion-" + i).append('<hr style="padding:0px !important;"/>' +
                            ' <div class="blue13px"><a href="topics.html"></a></div>' +
                            ' </div>' +
                            '</div>' +
                            '</div>');
                        }

                    }
                    else {
                        // TotalTopic = obj.Table1.length;



                        TotalTopic2 = 0;
                        if (BindTopicwithQuestion.length > 0) {
                            $("#DivUnit").append('<div class="col-sm-4 col-margin">' +
                            '<div class="topicbox">' +
                            '<div class="quali_heading2" style="padding-bottom:10px;"> ' + obj.Table[i].UnitName + ' </div>' +
                            '<div class="questions" id="divQuestion-' + i + '">');
                        }

                        for (var j = 0; j < obj.Table1.length; j++) {

                            if (obj.Table[i].UnitId == obj.Table1[j].UnitId) {
                                TotalTopic2++;



                                $("#divQuestion-" + i).append("<li><a id='TopiclnkMenu-" + obj.Table1[j].TopicId + "-Topic-" + obj.Table1[j].TopicDesc + "' href='#'>" + obj.Table1[j].TopicDesc + "</a></li>");

                            }
                        }

                        if (obj.Table2[i].Total > Number(TotalTopic2)) {


                            $("#divQuestion-" + i).append('<hr style="padding:0px !important;"/>' +
                            ' <div class="blue13px"><a id="SelectAllTopic-' + obj.Table[i].UnitId + '-' + obj.Table[i].UnitName + '"   href="#">View all ' + obj.Table2[i].Total + ' Topic</a></div>' +
                            ' </div>' +
                            '</div>' +
                            '</div>');
                        }
                        else {

                            $("#divQuestion-" + i).append('<hr style="padding:0px !important;"/>' +
                            ' <div class="blue13px"><a href="topics.html"></a></div>' +
                            ' </div>' +
                            '</div>' +
                            '</div>');
                        }

                    }
                }

            } //Unit End

            else if (Type == "SelectAllTopic") {

                for (var i = 0; i < obj.Table.length; i++) {
                    $("#DivUnit").append('<div class="col-sm-4 col-margin">' +
                            '<div class="topicbox">' +
                            '<div class="quali_heading2" style="padding-bottom:10px;"> ' + obj.Table[i].UnitName + ' </div>' +
                            '<div class="questions" id="divQuestion-' + i + '">');

                    for (var j = 0; j < obj.Table1.length; j++) {
                        $("#divQuestion-" + i).append("<li><a id='TopiclnkMenu-" + obj.Table1[j].TopicId + "-Topic-" + obj.Table1[j].TopicDesc + "' href='#'>" + obj.Table1[j].TopicDesc + "</a></li></div></div></div>");
                    }
                }
            }

            else if (Type == "Topic") { //Start Quations
                BindQuestionControl(Index);
            } //End Quations

            else if (Type == "Category") {//start category Bind


                if (data.d.responseCode == 2 || obj.Table1.length == 0) {
                    $("#DivNocategory").show();
                    $("#DivNocategory").css("visibility", "visible");
                    $("#Category").hide();
                }
                else {
                    $("#DivNocategory").hide();
                    $("#Category").show();
                }

                $("#DivCategory").append('<div class="col-sm-4 col-margin">' +
                                    '<div class="topicbox">' +
                                    '<div class="quali_heading2" style="padding-bottom:10px;">Chapter Name</div><div class="questions" id="Categorylist">');
                for (var i = 0; i < obj.Table1.length; i++) {

                    $("#Categorylist").append('<li><a id="CategoryWiseQues-' + obj.Table1[i].CategoryID + '-' + obj.Table1[i].CategoryName + '" href="javascript:;">' + obj.Table1[i].CategoryName + '</a></li></div></div></div>');


                }
                if (obj.Table.length > 5) {
                    $("#Categorylist").append('<hr style="padding:0px !important;"/>' +
                                    ' <div class="blue13px"><a  href="javascript:;"  id="SelectAllCategory-' + SubjectNamecatg + '"   >View all ' + obj.Table.length + ' Chapters</a></div>' +
                                    ' </div>' +
                                    '</div>' +
                                    '</div>');
                }
            } //End Category Binding

            else if (Type == "SelectAllCategory") {//Start Bind All Category

                $("#DivCategory").append('<div class="col-sm-4 col-margin">' +
                                '<div class="topicbox">' +
                                '<div class="quali_heading2" style="padding-bottom:10px;">Chapter Name</div><div class="questions" id="Categorylist">');
                for (var i = 0; i < obj.Table.length; i++) {

                    $("#Categorylist").append('<li><a id="CategoryWiseQues-' + obj.Table[i].CategoryID + '-' + obj.Table[i].CategoryName + '" href="javascript:;">' + obj.Table[i].CategoryName + '</a></li></div></div></div>');
                }

            } //End Bind all Category

            else if (Type == "CategoryWiseQues") {

                if (data.d.responseCode == 2) {
                    $("#DivNoQuestion").show();
                    $("#DivNoQuestion").css("visibility", "visible");
                }
                else {

                    $("#QuationsDiv").show();
                    BindQuestionControl(Index);
                }

            }
        },
        failur: function (msg) {
            alert(msg);
        }
    });
};

function CreateControl(type, Details, DetailsMapColm) {
    var cntrl = "";
    var MapColumnA = "";
    var MapColumnB = "";
    var ControlDetails = [];
    var ControlDetailsMapColmn = [];
    ControlDetails = Details;
    ControlDetailsMapColmn = DetailsMapColm;
    if (type == "Single Choice") {

        for (var i = 0; i < ControlDetails.length; i++) {

            cntrl += '<label><input type="radio"   id="rdoS-' + ControlDetails[i].OptionID + '-' + ControlDetails[i].CorrectAnswer + '-' + ControlDetails[i].Option + '"  name="SingleChoice" value="' + ControlDetails[i].Option + '"/>' + ' ' + ControlDetails[i].Option + '</label><br/>';
            // cntrl += "<label><input type='radio'   id="+ ControlDetails[i].Option + "  name='SingleChoice' value=" + ControlDetails[i].Option + "/>"+ ControlDetails[i].Option + "</label><br/>";

        }

    }
    else if (type == "Multi Choice") {

        for (var i = 0; i < ControlDetails.length; i++) {
            cntrl += '<label><input type="checkbox" id="chkM-' + ControlDetails[i].OptionID + '-' + ControlDetails[i].CorrectAnswer + '-' + ControlDetails[i].Option + '" name="chkMultiChoice"/>' + ' ' + ControlDetails[i].Option + '</label><br/>';
        }
    }

    else if (type == "True/False") {

        for (var i = 0; i < ControlDetails.length; i++) {
            cntrl += '<label><input type="radio"   id="rdoTF-' + ControlDetails[i].OptionID + '-' + ControlDetails[i].CorrectAnswer + '-' + ControlDetails[i].Option + '"  name="TrueFalse" value=' + ControlDetails[i].Option + '/>' + ' ' + ControlDetails[i].Option + '</label><br/>';
        }
    }
    else if (type == "Map the Column") {




        MapColumnA = "<table ><tr><td><h2 style='margin-left:65px'>A</h2></td>"
        + "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><h2 style='margin-left:65px'>B</h2></td></tr>"
        + "<tr><td><ul class='dd-list' id='MapColA'>"



        for (var i = 0; i < ControlDetails.length; i++) {
            MapColumnA += '<li class="widget dd-item dd-handle" id="MapColmnA-' + ControlDetails[i].OptionID + '">' + ControlDetails[i].Option + '</li>';
        }



        for (var j = 0; j < ControlDetailsMapColmn.length; j++) {
            MapColumnB += '<li class="widget dd-item dd-handle" id="MapColmnB-' + ControlDetailsMapColmn[j].OptionID + '">' + ControlDetailsMapColmn[j].RightOption + ''
            + '<div id="Imgcorrect-' + ControlDetailsMapColmn[j].OptionID + '" style="margin-top:-23px;margin-left:250px;visibility:hidden;"><img src="../CommonFiles/img/correctm.png" /></div>'
            + '<div id="Imgincorrect-' + ControlDetailsMapColmn[j].OptionID + '" style="margin-top:-12px;margin-left:250px; visibility:hidden;"><img src="../CommonFiles/img/incorrect.png" /></div></li>';
            // $("#Imgcorrect-640").hide();


        }


        cntrl += MapColumnA + "</ul></td>" + "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id='RightText'><ul class='dd-list' id='MapColB'>" + MapColumnB + "</ul></td></tr></table>";


    }
    else if (type == "Crossword") {

        var MatrixCount = 0;
        var CrosswordText = "";
        var crosswordIndex = -1;
        var MatrixNumber = 0;
        MatrixCount = ControlDetails[0].MatrixCount;
        CrosswordText = ControlDetails[0].CrosswordText;

        var CrosswordTextt = CrosswordText.split(",");

        cntrl = "<table id='tblcrossword'>"
        for (i = 0; i < MatrixCount; i++) {
            cntrl += "<tr id='trcw-" + i + "'><td>"
            for (j = 0; j < MatrixCount; j++) {
                crosswordIndex++;
                MatrixNumber++



                if (CrosswordTextt[crosswordIndex] != "") {

                    cntrl += "<input style='width:40px;text-align: center;background-color:Snow;' placeholder=" + MatrixNumber + " type='text' id='txtcwv-" + i + '' + j + "-" + CrosswordTextt[crosswordIndex] + "-" + ControlDetails[0].OptionID + "' maxlength='1' ></input>";
                }
                else {
                    cntrl += "<input style='width:40px;text-align: center;background-color:Black;' placeholder=" + MatrixNumber + " type='text' disabled id='txtcw-" + i + '' + j + "-" + CrosswordTextt[crosswordIndex] + "-" + ControlDetails[0].OptionID + "' maxlength='1' ></input>";
                }
            }
            cntrl += "</tr></td>";
        }

        cntrl += "</table>";

    }

    else if (type == "Fill in the blank") {




        cntrl = '<table width=60% border=2 align=center cellspacing="10"  bgcolor="#d1d1f1">'
        cntrl += '<tr>'
        cntrl += '<td><br> <select name="quest" id="drpblank">'
        cntrl += '<option value="0">--Select--</option>'
        cntrl += '</select></td>'
        cntrl += '<td><br>'
        cntrl += '<table>'
        cntrl += '<tr>'
        for (var i = 0; i < ControlDetails.length; i++) {


            cntrl += '<td style="padding-right: 20px;"><input type="button" value=' + ControlDetails[i].Option + ' id="btnfib-' + ControlDetails[i].Option + '-' + ControlDetails[i].BlankNumber + '-' + ControlDetails[i].OptionID + '"></button></td>'

        }

        cntrl += '</tr>'
        cntrl += '</table></td>'
        cntrl += '</tr>'
        cntrl += '</table>'





    }

    return cntrl;


}

function SubmitAnswer() {

    var SnglChOptionId = 0;
    var SnglChCorrectAnswer = 0;
    var SnglChAnswerd = "";
    var TFOptionId = 0;
    var TFCorrectAnswer = 0;
    var TFAnswerd = "";
    var MltChAnswerd = "";
    var MltChOptionId = "";
    var LeftOptionIds = "";
    var RightOptionIds = "";
    var MltChCorrectAnswer = 1;
    var arryLeftOptionIds = [];
    var arryRightOptionIds = [];
    var MapColmnCorrectAnswCount = 0;
    var MapColmnCorrectAnslegth = 0;
    var CorrectCrosswordText = "";
    var CorrectcwTextCount = 0;
    var arrCorrectcwTextlength = [];
    var CorrectcwTextlength = 0;
    var CWUserAnsewerd = "";
    var UserId = 0;
    var TotalBalnk = 0;
    var CountCorrectFIB = 0;
    var FIBBalnkIndex = 0;
    var FIBOptionId = "";
    var FIBNumber = "";
    var croswordOptionId = 0;
    var username = ""

    var Second = clock.getTime().getSeconds(true);
    var Minutes = clock.getTime().getMinutes(true);
    var Hours = clock.getTime().getHours(true);

    var Time = Hours + ':' + Minutes + ':' + Second;

    var QuestionId = $('[id^="divQuestion-"]').attr("id").split('-')[1];
    var TopicId = $('[id^="divQuestion-"]').attr("id").split('-')[2];
    var marks = $('[id^="divQuestion-"]').attr("id").split('-')[3];

    username = $('#lblusername').text();

    if (username == "") {
        UserId = 0;
    }
    else {
        UserId = $('#lblUserid').text();
    }


    var parameters = [];
    var values = [];

    parameters.push('QuestionType');
    parameters.push('UserId');
    parameters.push('TopicId');
    parameters.push('QuestionId');
    parameters.push('OptionId');
    if (ControlType == "Map the Column") {
        parameters.push('RightOptionId')
    }
    if (ControlType == "Crossword") {
        parameters.push('CrosswordText')
    }
    if (ControlType == "Fill in the blank") {
        parameters.push('BlankNumber')
    }

    parameters.push('IsCorrectAnsAttempt')
    parameters.push('QuestionAttenTime')


    values.push(ControlType);
    values.push(UserId);
    values.push(TopicId);
    values.push(QuestionId);

    if (ControlType == "Single Choice") {

        SnglChOptionId = $('input[name=SingleChoice]:radio:checked').attr("id").split('-')[1];
        SnglChCorrectAnswer = $('input[name=SingleChoice]:radio:checked').attr("id").split('-')[2];
        SnglChAnswerd = $('input[name=SingleChoice]:radio:checked').attr("id").split('-')[3];
        values.push(SnglChOptionId);
        if (SnglChCorrectAnswer == 1) {
            values.push('1');
        }
        else {
            values.push('0');
        }
    }
    else if (ControlType == "Multi Choice") {

        $('input[name="chkMultiChoice"]:checked').each(function () {
            MltChOptionId += this.id.split('-')[1] + ',';
            MltChAnswerd += this.id.split('-')[3] + ',';
            if (this.id.split('-')[2] == "0") {
                MltChCorrectAnswer = 0;
            }


        });
        MltChAnswerd = MltChAnswerd.slice(0, -1);
        MltChOptionId = MltChOptionId.slice(0, -1);
        values.push(MltChOptionId);
        if (MltChCorrectAnswer == 1) {
            values.push('1');
        }
        else {
            values.push('0');
        }
    }
    else if (ControlType == "True/False") {

        TFOptionId = $('input[name=TrueFalse]:radio:checked').attr("id").split('-')[1];
        TFCorrectAnswer = $('input[name=TrueFalse]:radio:checked').attr("id").split('-')[2];
        TFAnswerd = $('input[name=TrueFalse]:radio:checked').attr("id").split('-')[3];
        values.push(TFOptionId);

        if (TFCorrectAnswer == 1) {
            values.push('1');
        }
        else {
            values.push('0');
        }
    }

    else if (ControlType == "Map the Column") {


        $('#MapColA li').each(function () {
            LeftOptionIds += this.id.split('-')[1] + ',';
            arryLeftOptionIds.push(this.id.split('-')[1]);
        });
        $('#MapColB li').each(function () {

            RightOptionIds += this.id.split('-')[1] + ',';
            arryRightOptionIds.push(this.id.split('-')[1]);
        });

        RightOptionIds = RightOptionIds.slice(0, -1);
        LeftOptionIds = LeftOptionIds.slice(0, -1);
        MapColmnCorrectAnslegth = arryLeftOptionIds.length;

        for (var i = 0; i < arryLeftOptionIds.length; i++) {
            if (arryLeftOptionIds[i] == arryRightOptionIds[i]) {
                $('#Imgcorrect-' + arryRightOptionIds[i]).css("visibility", "visible");
                MapColmnCorrectAnswCount++;
            }
            else {
                $('#Imgincorrect-' + arryRightOptionIds[i]).css("visibility", "visible");
            }

        }


        values.push(LeftOptionIds);
        values.push(RightOptionIds);
        if (MapColmnCorrectAnslegth == MapColmnCorrectAnswCount) {
            values.push('1');
        }
        else {
            values.push('0');
        }



    }
    else if (ControlType == "Crossword") {

        $('#tblcrossword  tr [id^="txtcwv-"]').each(function () {

            CorrectCrosswordText += this.id.split('-')[2] + ',';
            CWUserAnsewerd += $(this).val() + ',';
            arrCorrectcwTextlength.push(this.id.split('-')[2]);

            if ($(this).val().toLowerCase() == this.id.split('-')[2].toLowerCase()) {
                CorrectcwTextCount++;
            }
            croswordOptionId = this.id.split('-')[3];
        });
        CWUserAnsewerd = CWUserAnsewerd.slice(0, -1);
        CorrectCrosswordText = CorrectCrosswordText.slice(0, -1);
        CorrectcwTextlength = arrCorrectcwTextlength.length;

        values.push(croswordOptionId);
        values.push(CWUserAnsewerd);

        if (CorrectcwTextlength == CorrectcwTextCount) {
            values.push('1');
        }
        else {
            values.push('0');
        }
    }

    else if (ControlType == "Fill in the blank") {

        TotalBalnk = $('#DivfibQuest input[type="hidden"]').length;

        $('#DivfibQuest input[type="hidden"]').each(function () {

            FIBBalnkIndex = this.id.split('-')[1];
            FIBNumber += this.id.split('-')[1] + ',';
            FIBOptionId += $(this).val().split('-')[1] + ',';


            if (FIBBalnkIndex == $(this).val().split('-')[0]) {
                CountCorrectFIB++
            }
        });
        FIBOptionId = FIBOptionId.slice(0, -1);
        FIBNumber = FIBNumber.slice(0, -1);
        values.push(FIBOptionId);
        values.push(FIBNumber);
        if (TotalBalnk == CountCorrectFIB) {
            values.push('1');
        }
        else {
            values.push('0');
        }

    }


    values.push(Time);

    var XML = CreateXML(parameters, values);
    $.ajax({
        type: "POST",
        url: "frmExamBoardInfo.aspx/SubmitAnswer", // Location of the service 
        data: "{inXML : '" + XML + "'}", //Data sent to server
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {


            var username1 = $('#lblusername').text();
            userstatus = $('#hdnStatus').text();

            Index = Number(Index) + 1;

            $("#lblQAttempt").text(Index);

//            if (username1 == "" && Number(Index) == 15) {
//                $("#AnswerControl").empty();
//                $("#Question").empty();
//                $("#Divfiboptn").empty();
//                $("#DivfibQuest").empty();
//                $("#btnSubmit").hide();
//                $("#DivMsgNonRegUser").css("visibility", "visible");
//                $("#DivMsgNonRegUser").show();
//                setTimeout(function () {
//                    window.location.href = 'frmMembership.aspx';
//                }, 2000);

//                return
//            }

//            if (username1 != "" && Number(Index) == 15 && userstatus == 'False') {

//                $("#AnswerControl").empty();
//                $("#Question").empty();
//                $("#Divfiboptn").empty();
//                $("#DivfibQuest").empty();
//                $("#btnSubmit").hide();
//                $("#DivMsgRenewalplan").css("visibility", "visible");
//                $("#DivMsgRenewalplan").show();
//                setTimeout(function () {
//                    window.location.href = 'frmMembership.aspx?Status=False';
//                }, 2000);

//                return
//            }


            $("#QuestionComplete").hide();
            if (ControlType == "Single Choice") {
                if (SnglChCorrectAnswer == 1) {
                    $("#AnswerControl").empty();
                    $("#Question").empty();
                    Totalmarks = Number(marks) + Number(Totalmarks);
                    $("#DivCorrect").css("visibility", "visible");
                    $("#h1").hide();
                    $("#h2").hide();
                    $("#btnSubmit").hide();
                    $("#DivCorrect").fadeIn(1000);
                    $("#DivCorrect").fadeOut(1000);



                    if (obj.Table.length == Index) {
                        $("#QuestionComplete").empty();
                        $("#AnswerControl").empty();
                        $("#Question").empty();
                        $("#btnSubmit").hide();
                        $("#QuestionComplete").show();
                        $("#QuestionComplete").append("<span style='color: #00adef;font-size:20px'>Great... you attempted all questions in this topic.</span>");
                    }
                    else {
                        setTimeout(function () {
                            BindQuestionControl(Index);
                            $("#h1").show();
                            $("#h2").show();
                            $("#btnSubmit").show();
                        }, 2000);
                        //BindQuestionControl(Index);
                    }


                }
                else {


                    BindExplanation(Index, SnglChAnswerd);

                    $("#btnGoit").show();
                    $("#btnSubmit").hide();
                    $("#AnswerControl").show();
                    $("#Question").show();
                    //}

                }
            }
            else if (ControlType == "True/False") {
                if (TFCorrectAnswer == 1) {
                    $("#AnswerControl").empty();
                    $("#Question").empty();
                    Totalmarks = Number(marks) + Number(Totalmarks);
                    $("#DivCorrect").css("visibility", "visible");
                    $("#h1").hide();
                    $("#h2").hide();
                    $("#btnSubmit").hide();
                    $("#DivCorrect").fadeIn(1000);
                    $("#DivCorrect").fadeOut(1000);
                    if (obj.Table.length == Index) {
                        $("#QuestionComplete").empty();
                        $("#AnswerControl").empty();
                        $("#Question").empty();
                        $("#btnSubmit").hide();
                        $("#QuestionComplete").show();
                        $("#QuestionComplete").append("<span style='color: #00adef;font-size:20px'>Great... you attempted all questions in this topic.</span>");
                    }
                    else {
                        // BindQuestionControl(Index);
                        setTimeout(function () {
                            BindQuestionControl(Index);
                            $("#h1").show();
                            $("#h2").show();
                            $("#btnSubmit").show();
                        }, 2000);
                    }
                }
                else {
                    BindExplanation(Index, TFAnswerd);
                    $("#btnSubmit").hide();
                    $("#btnGoit").show();
                    $("#AnswerControl").show();
                    $("#Question").show();
                }
            }
            else if (ControlType == "Multi Choice") {
                if (MltChCorrectAnswer == 1) {
                    $("#AnswerControl").empty();
                    $("#Question").empty();
                    Totalmarks = Number(marks) + Number(Totalmarks);
                    $("#DivCorrect").css("visibility", "visible");
                    $("#h1").hide();
                    $("#h2").hide();
                    $("#btnSubmit").hide();

                    $("#DivCorrect").fadeIn(1000);
                    $("#DivCorrect").fadeOut(1000);
                    if (obj.Table.length == Index) {
                        $("#QuestionComplete").empty();
                        $("#AnswerControl").empty();
                        $("#Question").empty();
                        $("#btnSubmit").hide();
                        $("#QuestionComplete").show();
                        $("#QuestionComplete").append("<span style='color: #00adef;font-size:20px'>Great... you attempted all questions in this topic.</span>");
                    }
                    else {
                        // BindQuestionControl(Index);
                        setTimeout(function () {
                            BindQuestionControl(Index);
                            $("#h1").show();
                            $("#h2").show();
                            $("#btnSubmit").show();
                        }, 2000);
                    }
                }
                else {
                    BindExplanation(Index, MltChAnswerd);
                    $("#btnSubmit").hide();
                    $("#btnGoit").show();
                    $("#AnswerControl").show();
                    $("#Question").show();
                }
            }

            else if (ControlType == "Map the Column") {
                if (MapColmnCorrectAnslegth == MapColmnCorrectAnswCount) {
                    $("#AnswerControl").empty();
                    $("#Question").empty();
                    Totalmarks = Number(marks) + Number(Totalmarks);
                    $("#DivCorrect").css("visibility", "visible");
                    $("#h1").hide();
                    $("#h2").hide();
                    $("#btnSubmit").hide();
                    $("#DivCorrect").fadeIn(1000);
                    $("#DivCorrect").fadeOut(1000);
                    if (obj.Table.length == Index) {
                        $("#QuestionComplete").empty();
                        $("#AnswerControl").empty();
                        $("#Question").empty();
                        $("#btnSubmit").hide();
                        $("#QuestionComplete").show();
                        $("#QuestionComplete").append("<span style='color: #00adef;font-size:20px'>Great... you attempted all questions in this topic.</span>");
                    }
                    else {
                        //BindQuestionControl(Index);
                        setTimeout(function () {
                            BindQuestionControl(Index);
                            $("#h1").show();
                            $("#h2").show();
                            $("#btnSubmit").show();
                        }, 2000);
                    }
                }
                else {
                    BindExplanation(Index, '');
                    $("#btnSubmit").hide();
                    $("#btnGoit").show();
                    $("#AnswerControl").show();
                    $("#Question").show();
                }
            }
            else if (ControlType == "Fill in the blank") {
                if (TotalBalnk == CountCorrectFIB) {
                    $("#Divfiboptn").empty();
                    $("#DivfibQuest").empty();
                    Totalmarks = Number(marks) + Number(Totalmarks);
                    $("#DivCorrect").css("visibility", "visible");
                    $("#h1").hide();
                    $("#h2").hide();
                    $("#btnSubmit").hide();
                    $("#DivCorrect").fadeIn(1000);
                    $("#DivCorrect").fadeOut(1000);
                    if (obj.Table.length == Index) {
                        $("#QuestionComplete").empty();
                        $("#DivfibQuest").empty();
                        $("#Divfiboptn").empty();
                        $("#btnSubmit").hide();
                        $("#QuestionComplete").show();
                        $("#QuestionComplete").append("<span style='color: #00adef;font-size:20px'>Great... you attempted all questions in this topic.</span>");
                    }
                    else {
                        //BindQuestionControl(Index);
                        setTimeout(function () {
                            BindQuestionControl(Index);
                            $("#h1").show();
                            $("#h2").show();
                            $("#btnSubmit").show();
                        }, 2000);
                    }
                }

                else {
                    BindExplanation(Index, '');


                    var fibMark = 0;
                    var correctfibmark = 0

                    fibMark = Number(marks) / Number(TotalBalnk)

                    correctfibmark = Number(fibMark) * Number(CountCorrectFIB)


                    Totalmarks = Math.round(correctfibmark) + Number(Totalmarks);


                    $("#btnSubmit").hide();
                    $("#btnGoit").show();
                    $("#Divfiboptn").show();
                    $("#DivfibQuest").show();
                }
            }


            else if (ControlType == "Crossword") {
                if (CorrectcwTextlength == CorrectcwTextCount) {
                    $("#AnswerControl").empty();
                    $("#Question").empty();
                    Totalmarks = Number(marks) + Number(Totalmarks);
                    $("#DivCorrect").css("visibility", "visible");
                    $("#h1").hide();
                    $("#h2").hide();
                    $("#DivCorrect").fadeIn(1000);
                    $("#DivCorrect").fadeOut(1000);
                    if (obj.Table.length == Index) {
                        $("#QuestionComplete").empty();
                        $("#AnswerControl").empty();
                        $("#Question").empty();
                        $("#btnSubmit").hide();
                        $("#QuestionComplete").show();
                        $("#QuestionComplete").append("<span style='color: #00adef;font-size:20px'>Great... you attempted all questions in this topic.</span>");
                    }
                    else {
                        //BindQuestionControl(Index);
                        setTimeout(function () {
                            BindQuestionControl(Index);
                            $("#h1").show();
                            $("#h2").show();
                            $("#btnSubmit").show();
                        }, 2000);
                    }
                }
                else {

                    BindExplanation(Index, CorrectCrosswordText);

                    var Crosswordmark = 0;
                    var CWMarkMultyply = 0

                    Crosswordmark = Number(marks) / Number(CorrectcwTextlength)

                    CWMarkMultyply = Number(Crosswordmark) * Number(CorrectcwTextCount)


                    Totalmarks = Math.round(CWMarkMultyply) + Number(Totalmarks);

                    $("#btnSubmit").hide();
                    $("#btnGoit").show();
                    $("#AnswerControl").show();
                    $("#Question").show();
                }
            }


            $("#lblAttempMarks").text(Totalmarks);
            //}
        },
        failur: function (msg) {
            alert(msg);
        }
    });

}


function ShowQualSubject(Type, id) {

    if (Type == "ExamBoard") {
        $("#Subject").hide();
        $("#ExamBoard").show();
        $("#Qualification").hide();
        $("#Unit").hide();
        $("#QuationsDiv").hide();
        $("#DivSubEXamUnit").show();
        XML = "<Getlookup><ActionType>SelectExamBoardDesc</ActionType><QualificationId>" + id + "</QualificationId></Getlookup>";

    }
    else if (Type == "Subject") {
        $("#ExamBoard").hide();
        $("#Qualification").hide();
        $("#Subject").show();
        $("#Unit").hide();
        $("#QuationsDiv").hide();
        $("#DivSubEXamUnit").show();
        XML = "<Getlookup><ActionType>SelectSubject</ActionType><GqemId>" + id + "</GqemId></Getlookup>";
    }
    else if (Type == "Qualification") {
        $("#Subject").hide();
        $("#ExamBoard").hide();
        $("#Qualification").show();
        $("#Unit").hide();
        $("#QuationsDiv").hide();
        $("#DivSubEXamUnit").show();

        XML = "<Getlookup><ActionType>SelectQualfication</ActionType></Getlookup>";
    }
    else if (Type == "SubjectCategory") {
        $("#Subject").hide();
        $("#ExamBoard").hide();
        $("#Qualification").show();
        $("#Unit").hide();
        $("#QuationsDiv").hide();
        $("#DivSubEXamUnit").show();

        XML = "<Getlookup><ActionType>SelectAllSubject</ActionType></Getlookup>";
    }
    else if (Type == "Unit") {
        $("#Subject").hide();
        $("#ExamBoard").hide();
        $("#Qualification").hide();
        //        $("#Unit").show();
        $("#QuationsDiv").hide();
        $("#DivSubEXamUnit").show();
        XML = "<Getlookup><ActionType>SelectUnit</ActionType><SubjectId>" + id + "</SubjectId></Getlookup>";
    }
    else if (Type == "Topic") {
        $("#Subject").hide();
        $("#ExamBoard").hide();
        $("#Unit").hide();
        $("#QuationsDiv").show();
        $("#DivSubEXamUnit").hide();
        $("#Qualification").hide();
        //$("#Expalnation").hide();
        XML = "<Getlookup><ActionType>SelectQuations</ActionType><TopicId>" + id + "</TopicId></Getlookup>";
    }
    else if (Type == "CategoryWiseQues") {
        $("#Subject").hide();
        $("#ExamBoard").hide();
        $("#Qualification").hide();
        $("#Unit").hide();
        //$("#QuationsDiv").show();
        $("#DivSubEXamUnit").hide();
        //$("#Expalnation").hide();
        XML = "<Getlookup><ActionType>SelectQuationsCategoryWise</ActionType><CategoryId>" + id + "</CategoryId></Getlookup>";
    }
    else if (Type == "SelectAllTopic") {
        $("#Subject").hide();
        $("#ExamBoard").hide();
        $("#Unit").show();
        $("#QuationsDiv").hide();
        $("#DivSubEXamUnit").show();
        $("#Qualification").hide();
        XML = "<Getlookup><ActionType>SelectAllTopic</ActionType><UnitId>" + id + "</UnitId></Getlookup>";
    }
    else if (Type == "Category" || Type == "SelectAllCategory") {
        $("#Subject").hide();
        $("#ExamBoard").hide();
        $("#Unit").hide();
        //$("#Category").show();
        $("#Qualification").hide();
        $("#QuationsDiv").hide();
        $("#DivSubEXamUnit").show();
        XML = "<Getlookup><ActionType>SelectCategory</ActionType><Subject>" + id + "</Subject></Getlookup>";
    }

    return XML;
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

function CreateXML(Parameters, values) {
    Getlookupstart = "<Root>";
    generatexml = Getlookupstart;

    for (xmlindex = 0; xmlindex < Parameters.length; xmlindex++) {
        Module = "<";
        Module += Parameters[xmlindex];
        Module += ">";
        Module += values[xmlindex];
        Module += "</";
        Module += Parameters[xmlindex];
        Module += ">";
        generatexml += Module;
    }
    Getlookupend = "</Root>";
    generatexml += Getlookupend;
    return generatexml;
}

function BindQuestionControl(Index) {

    // $("#lblQuestNo").text(obj.Table[Index].RN)





    ControlType = obj.Table[Index].QuestionType
    var QuationId = obj.Table[Index].QuestionID



    CorrectAnswer = _.where(obj.Table1, { QuestionID: QuationId, CorrectAnswer: 1 });
    ControlDetails = _.where(obj.Table1, { QuestionID: QuationId });

    ControlDetailsMapCol = _.where(obj.Table3, { QuestionID: QuationId });

    var cntrl = CreateControl(ControlType, ControlDetails, ControlDetailsMapCol);

    var finalcntrl = cntrl.replace(/(<p>|<\/p>)/g, "")


    if (ControlType == 'Fill in the blank') {

        var strNewString = "";
        var strNewString1 = "";
        var Question = obj.Table[Index].Question;
        var BlankIndex = 0, m = 0;

        for (var k = 0; k < ControlDetails[0].Noofoption; k++) {

            BlankIndex++
            if (BlankIndex == 1) {
                strNewString1 = Question.replace('(' + BlankIndex + ')', '<u><font color=green><b>___<span id="place_' + BlankIndex + '">(' + BlankIndex + ')</span>___</b></font><input type="hidden" id="hdn-' + BlankIndex + '" /></u>');
            }
            else if (BlankIndex == 2) {


                strNewString = strNewString1.replace('(' + BlankIndex + ')', '<u><font color=green><b>___<span id="place_' + BlankIndex + '">(' + BlankIndex + ')</span>___</b></font><input type="hidden" id="hdn-' + BlankIndex + '" /></u>');
            }
            else {
                strNewString = strNewString.replace('(' + BlankIndex + ')', '<u><font color=green><b>___<span id="place_' + BlankIndex + '">(' + BlankIndex + ')</span>___</b></font><input type="hidden" id="hdn-' + BlankIndex + '" /></u>');
            }
        }


        $("#DivfibQuest").append('<span>' + obj.Table[Index].RN + '.</span><div style="margin-top:-21px;margin-left:25px"  id="divQuestion-' + obj.Table[Index].QuestionID + '-' + obj.Table[Index].TopicID + '-' + obj.Table[Index].Marks + '">' + strNewString + '</div>');
        $("#Divfiboptn").append(finalcntrl.replace(/<\/?span[^>]*>/g, ""));

        var BlankNumber = 0;
        for (var j = 0; j < ControlDetails[0].Noofoption; j++) {

            BlankNumber++;
            $("#drpblank").append($("<option></option>").val(BlankNumber).html('Blank' + ' ' + BlankNumber));
        }

    }
    else {
        $("#AnswerControl").append(finalcntrl.replace(/<\/?span[^>]*>/g, ""));
        $("#Question").append('<span>' + obj.Table[Index].RN + '.</span><div style="margin-top:-28px;margin-left:25px"  id="divQuestion-' + obj.Table[Index].QuestionID + '-' + obj.Table[Index].TopicID + '-' + obj.Table[Index].Marks + '">' + obj.Table[Index].Question + '</div>');
    }


    $("#lblTotalQuest").text(obj.Table2[0].TotalQuation);
    $("#lblTotalMrks").text(obj.Table2[0].TotalMarks);

    $("#btnSubmit").show();
    $("#QuestionComplete").hide();

    DraggablePortlet1.init();

    if (ControlType == "Single Choice") {
        var isChecked = jQuery("input[name=SingleChoice]:checked").val();

        if (!isChecked) {
            $("#btnSubmit").attr("disabled", true);


            $("#btnSubmit").attr('title', 'Please Select at least one option');
        } else {
            $("#btnSubmit").attr("disabled", false);
        }
    }
    else if (ControlType == "Multi Choice") {
        if ($('input[name= chkMultiChoice]:checked').length <= 0) {
            $("#btnSubmit").attr("disabled", true);
            $("#btnSubmit").attr('title', 'Please Select at least one option');
        }
        else {
            $("#btnSubmit").attr("disabled", false);
        }
    }
    else if (ControlType == "True/False") {
        var isChecked = jQuery("input[name=TrueFalse]:checked").val();

        if (!isChecked) {
            $("#btnSubmit").attr("disabled", true);


            $("#btnSubmit").attr('title', 'Please Select at least one option');
        } else {
            $("#btnSubmit").attr("disabled", false);
        }
    }

    else if (ControlType == 'Fill in the blank') {
        $('#DivfibQuest input[type="hidden"]').each(function () {

            if ($(this).val() == "") {
                $("#btnSubmit").attr("disabled", true);
                $("#btnSubmit").attr('title', 'Please fill in the blank');
            }
            else {
                $("#btnSubmit").attr("disabled", false);
            }

        });
    }
};


$(document).on('change', '[id^="rdoS-"]', function () {
    var isChecked = jQuery("input[name=SingleChoice]:checked").val();
    if (!isChecked) {
        $("#btnSubmit").attr("disabled", true);
    } else {
        $("#btnSubmit").attr("disabled", false);
        $("#btnSubmit").removeAttr('title');
    }
});
$(document).on('change', '[id^="rdoTF-"]', function () {
    var isChecked = jQuery("input[name=TrueFalse]:checked").val();
    if (!isChecked) {
        $("#btnSubmit").attr("disabled", true);
    } else {
        $("#btnSubmit").attr("disabled", false);
        $("#btnSubmit").removeAttr('title');
    }
});

$(document).on('change', '[id^="chkM-"]', function () {
    if ($('input[name= chkMultiChoice]:checked').length <= 0) {
        $("#btnSubmit").attr("disabled", true);
    }
    else {
        $("#btnSubmit").attr("disabled", false);
        $("#btnSubmit").removeAttr('title');
    }
});




function BindExplanation(Index, YouAnswered) {

    Index = Number(Index) - 1;
    $("#Expalnation").empty();
    ControlType = obj.Table[Index].QuestionType
    var QuationId = obj.Table[Index].QuestionID
    var cntrl = "";
    var strNewString = "";


    if (ControlType == "Crossword") {
        CorrectAnswer = _.where(obj.Table1, { QuestionID: QuationId });

        var MatrixCount = 0;
        var CrosswordText = "";
        var crosswordIndex = -1;
        var MatrixNumber = 0;
        MatrixCount = CorrectAnswer[0].MatrixCount;
        CrosswordText = CorrectAnswer[0].CrosswordText;

        var CrosswordTextt = CrosswordText.split(",");

        cntrl = "<table id='tblcrossword'>"
        for (i = 0; i < MatrixCount; i++) {
            cntrl += "<tr id='trcw-" + i + "'><td>"
            for (j = 0; j < MatrixCount; j++) {
                crosswordIndex++;
                MatrixNumber++

                if (CrosswordTextt[crosswordIndex] != "") {

                    cntrl += "<input style='width:40px;text-align: center;background-color:Snow;' placeholder=" + MatrixNumber + " type='text' id='txtcwv-" + i + '' + j + "-" + CrosswordTextt[crosswordIndex] + "' maxlength='1' value=" + CrosswordTextt[crosswordIndex] + " ></input>";
                }
                else {
                    cntrl += "<input style='width:40px;text-align: center;background-color:Black;' placeholder=" + MatrixNumber + " type='text' disabled id='txtcw-" + i + '' + j + "-" + CrosswordTextt[crosswordIndex] + "' maxlength='1' value=" + CrosswordTextt[crosswordIndex] + "></input>";
                }
            }
            cntrl += "</td></tr>";
        }

        cntrl += "</table>";

    }
    else if (ControlType == "Map the Column") {
        CorrectAnswer = _.where(obj.Table1, { QuestionID: QuationId });

        var MapColumnA = "";
        var MapColumnB = "";

        MapColumnA = "<table ><tr><td><h2 style='margin-left:65px'>A</h2></td>"
        + "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><h2 style='margin-left:65px'>B</h2></td></tr>"
        + "<tr><td><ul class='dd-list' id='MapColA'>"

        for (var i = 0; i < CorrectAnswer.length; i++) {
            MapColumnA += '<li class="widget dd-item dd-handle" id="MapColmnA-' + CorrectAnswer[i].OptionID + '">' + CorrectAnswer[i].Option + '</li>';

        }



        for (var j = 0; j < CorrectAnswer.length; j++) {
            MapColumnB += '<li class="widget dd-item dd-handle" id="MapColmnB-' + CorrectAnswer[j].OptionID + '">' + CorrectAnswer[j].RightOption + '</li>';

        }


        cntrl += MapColumnA + "</ul></td>" + "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id='RightText'><ul class='dd-list' id='MapColB'>" + MapColumnB + "</ul></td></tr></table>";


    }
    else if (ControlType == "Fill in the blank") {

        var CorrectBlankNumber = []
        CorrectAnswer = _.where(obj.Table1, { QuestionID: QuationId });

        var strNewString1 = "";
        var Question = obj.Table[Index].Question;
        var BlankIndex = 0, m = 0;

        for (var k = 0; k < CorrectAnswer[0].Noofoption; k++) {

            BlankIndex++
            CorrectBlankNumber = _.where(obj.Table1, { QuestionID: QuationId, BlankNumber: BlankIndex });

            if (BlankIndex == 1 && CorrectBlankNumber.length != 0) {

                strNewString1 = Question.replace('(' + BlankIndex + ')', '<u><font color=green><b>___<span id="place_' + BlankIndex + '">' + CorrectBlankNumber[0].Option + '</span>___</b></font><input type="hidden" id="hdn-' + BlankIndex + '" /></u>');
            }
            else if (BlankIndex == 2 && CorrectBlankNumber.length != 0) {


                strNewString = strNewString1.replace('(' + BlankIndex + ')', '<u><font color=green><b>___<span id="place_' + BlankIndex + '">' + CorrectBlankNumber[0].Option + '</span>___</b></font><input type="hidden" id="hdn-' + BlankIndex + '" /></u>');
            }
            else if (CorrectBlankNumber.length != 0) {
                strNewString = strNewString.replace('(' + BlankIndex + ')', '<u><font color=green><b>___<span id="place_' + BlankIndex + '">' + CorrectBlankNumber[0].Option + '</span>___</b></font><input type="hidden" id="hdn-' + BlankIndex + '" /></u>');
            }
        }




    }

    else {
        CorrectAnswer = _.where(obj.Table1, { QuestionID: QuationId, CorrectAnswer: 1 });
    }




    if (ControlType == "Map the Column") {
        $("#Expalnation").append('<span style="color: #00adef;font-size:36px">Sorry, incorrect...</span><br/><h2><span style="color:#77a200;font-size:25px">Explanation</span></h2><br/>' + obj.Table[Index].Explanation + '<span style="color: #719B07;font-size:15px">The Correct answer is:</span><br/><br/>' + cntrl);
    }
    else if (ControlType == "Crossword") {
        $("#Expalnation").append('<span style="color: #00adef;font-size:36px">Sorry, incorrect...</span><br/><h2><span style="color:#77a200;font-size:25px">Explanation</span></h2><br/>' + obj.Table[Index].Explanation + '<span style="color: #719B07;font-size:15px">The Correct answer is:</span><br/><br/>' + cntrl);
    }
    else if (ControlType == "Fill in the blank") {

        $("#Expalnation").append('<span style="color: #00adef;font-size:36px">Sorry, incorrect...</span><br/><h2><span style="color:#77a200;font-size:25px">Explanation</span></h2><br/>' + obj.Table[Index].Explanation + '<span style="color: #719B07;font-size:15px">The Correct answer is:</span><br/><br/>' + strNewString);
    }
    else {
        // $("#Expalnation").append('<span style="color: #00adef;font-size:36px">Sorry, incorrect...</span><br/><span style="color: #719B07;font-size:15px">The Correct answer is:</span>' + CorrectAnswer[0].Option + '<h2><span style="color:#77a200;font-size:25px">Explanation</span></h2><br/>' + obj.Table[Index].Explanation + '<br/><span style="color: #719B07;font-size:15px">You answered:</span><br/>' + YouAnswered);

        $("#Expalnation").append('<span style="color: #00adef;font-size:36px">Sorry, incorrect...</span><br/><span style="color: #719B07;font-size:15px">The Correct answer is:</span>' + CorrectAnswer[0].Option + '<h2><span style="color:#77a200;font-size:25px">Explanation</span></h2><br/>' + obj.Table[Index].Explanation);
    }
}


function Showbreadcrumb(Qualification, QualificationId, ExamBoard, ExamBoardId, Subject, SubjectId, Topic) {


    if (Qualification != "") {
        $("#Divbreadcrumb").append("<a id='QlnkMenu-" + QualificationId + "-ExamBoard-" + Qualification + "' href=''>" + Qualification + "</a>&nbsp;&nbsp;");

    }
    if (ExamBoard != "") {
        $("#Divbreadcrumb").append('<img src="../CommonFiles/img/breadcrumbdivider.png" alt=""/>&nbsp;&nbsp; <span class="linkheading2"><a  id="EBlnkMenu-' + ExamBoardId + '-Subject-' + ExamBoard + '"   href="">' + ExamBoard + '</a></span>&nbsp;&nbsp;');
    }
    if (Subject != "") {
        $("#Divbreadcrumb").append('<img src="../CommonFiles/img/breadcrumbdivider.png" alt=""/>&nbsp;&nbsp; <span class="linkheading2"><a id="SubjectlnkMenu-' + SubjectId + '-Unit-' + Subject + '" href="">' + Subject + '</a></span>&nbsp;&nbsp;');
    }
    if (Topic != "") {
        $("#Divbreadcrumb").append('<img src="../CommonFiles/img/breadcrumbdivider.png" alt=""/>&nbsp;&nbsp; <span class="linkheading2">' + Topic + '</span>');
    }
    // $("#Divbreadcrumb").append('<a href="#">' + Qualification + '</a> &nbsp;&nbsp;<img src="../CommonFiles/img/breadcrumbdivider.png" alt=""/>&nbsp;&nbsp; <span class="linkheading2"><a href="#">' + ExamBoard + '</a></span> &nbsp;&nbsp;<img src="../CommonFiles/img/breadcrumbdivider.png" alt=""/>&nbsp;&nbsp; <span class="linkheading2">' + Subject + '</span>&nbsp;&nbsp;<img src="../CommonFiles/img/breadcrumbdivider.png" alt=""/>&nbsp;&nbsp; <span class="linkheading2">' + Topic + '</span>');

};

function Showbreadcrumbcategory(Subject, Category) {
    if (Subject != "") {
        $("#Divbreadcrumb").append("<a id='Category-" + Subject + "' href='#'>" + Subject + "</a>&nbsp;&nbsp;");
    }
    if (Category != "") {
        $("#Divbreadcrumb").append('<img src="../CommonFiles/img/breadcrumbdivider.png" alt=""/>&nbsp;&nbsp; <span class="linkheading2">' + Category + '</span>');
    }

}



var DraggablePortlet1 = function () {

    return {
        //main function to initiate the module
        init: function () {

            if (!jQuery().sortable) {
                return;
            }
            //draggable_portlets
            $("#RightText,#DivfibQuest1").sortable({
                connectWith: ".widget,#DivfibQuest1",
                items: ".widget",
                opacity: 0.8,
                coneHelperSize: true,
                placeholder: 'sortable-box-placeholder round-all',
                forcePlaceholderSize: true,
                tolerance: "pointer"
            });

            $(".column").disableSelection();

        }

    };

} ();
