var PagePath = GlobalPath + "/Admin/frmQM.aspx/";

$(document).ready(function () {



    //    $("[id^= 'tr_']").dblclick(function () {
    //        var id = parseInt(((this.id.split('_'))[1]).toString())
    //        alert("HEllo");
    //    });


    //    $("[id^='btnSingleChoice1']").click(function () {
    //        alert("HEllo");
    //    });


    $("#tblQMList").on("dblclick", "[id^='btnSingleChoice']", function (event) {
        var id = parseInt(((this.id.split('-'))[1]).toString());
        $("#divQMAdd").show();
        $("#divQMList").hide();
        //  $("#ddQuestionType").value(id);

        $('#ddQuestionType').val("1").attr("selected", "selected");
        Select_TopicWise_Questions_Details(id, 1);

    });

    $("#tblQMList").on("dblclick", "[id^='btnMultiChoice']", function (event) {
        var id = parseInt(((this.id.split('-'))[1]).toString());
        $("#divQMAdd").show();
        $("#divQMList").hide();
        //  $("#ddQuestionType").value(id);
        $('#ddQuestionType').val("2").attr("selected", "selected");
        Select_TopicWise_Questions_Details(id, 2);

    });

    $("#tblQMList").on("dblclick", "[id^='btnFillInTheBlank']", function (event) {
        var id = parseInt(((this.id.split('-'))[1]).toString());
        $("#divQMAdd").show();
        $("#divQMList").hide();
        //  $("#ddQuestionType").value(id);
        $('#ddQuestionType').val("3").attr("selected", "selected");
        Select_TopicWise_Questions_Details(id, 3);

    });

    $("#tblQMList").on("dblclick", "[id^='btnMapTheColumn']", function (event) {
        var id = parseInt(((this.id.split('-'))[1]).toString());
        $("#divQMAdd").show();
        $("#divQMList").hide();
        //  $("#ddQuestionType").value(id);
        $('#ddQuestionType').val("4").attr("selected", "selected");
        Select_TopicWise_Questions_Details(id, 5);
        //Here
    });






    BindGrid();
    $("#btnAddQuestions").click(function () {
        $("#divQMList").show();
        $("#divQMAdd").hide();
    });

    //    $("#btnCheckToken").click(function () {
    //        alert($("#txtOptions1").val());
    //    });



    $("#btnListQuestions").click(function () {
        $("#divQMAdd").show();
        $("#divQMList").hide();

    });

    $("#btnSubmit").click(function () {
        var InputXMLParam = GetQMXML();
        $.ajax({
            type: "POST",
            url: PagePath + "InsertBulkData", // Location of the service 
            data: "{inXML :'" + InputXMLParam + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $("#divQMList").show();

                $("#divQMAdd").hide();
                $("#DivAllQuestions").empty();
                alert("Data has been saved successfully");
                $("#divQMList").scrollTop($("#divQMList").prop("scrollHeight"));


            },
            failure: function (msg) {
                alert(msg);
            }
        });


    });

    $('#ddQualification').DDFillData('Qualification', 0);

    $("#ddQualification").change(function () {
        $('#ddBoard').DDFillData('ExamBoard', $('#ddQualification').val());
        $('#ddSubject').empty();
        $('#ddUnit').empty();
        $('#ddTopic').empty();


    });
    //--------------------=-------------------

    //    $("[id^=btnSingleChoice]").click(function () 
    //    {   alert("HEllo");
    //    });

    //    $("#btnSingleChoice-1").click(function () {
    //        alert("HEllo");
    //    });


    //    $("[id^=tr]").click(function () {
    //        $("#divQMAdd").show();
    //        $("#divQMList").hide();

    //    });




    //----------------------------------------


    $("#ddBoard").change(function () {
        $('#ddSubject').DDFillData('Subject', $("#ddBoard").val());
        $('#ddUnit').empty();
        $('#ddTopic').empty();
    });

    $("#ddSubject").change(function () {
        $('#ddUnit').DDFillData('Unit', $("#ddSubject").val());
        $('#ddTopic').empty();
    });

    $("#ddUnit").change(function () {
        $('#ddTopic').DDFillData('Topic', $("#ddUnit").val());
    });



    $('#ddQuestionType').DDFillData('QType', 0);





    $("#btnReset").click(function () {
        $("#btnmore").val("Add Question");
        $("#ddQuestionType").prop("disabled", false);
        $("#DivAllQuestions").empty();
        $("#btnReset").hide();
        $("#CountQuestion").val("0");
        $("#btnSubmit").hide();



    });


    $("#btnmore").click(function () {

        var countQ = parseInt($("#CountQuestion").val());
        var QuestionType = $('#ddQuestionType :selected').text(); // $("#ddQuestionType").val();

        if (QuestionType != "--Select--") //|| QuestionType="Multi Choice"
        {
            $("#btnReset").show();
            $("#btnSubmit").show();

            $("#btnmore").val("Add More..");
            $("#ddQuestionType").prop("disabled", true);
            countQ = countQ + 1;
            $("#CountQuestion").val(countQ)

        }

        var QuestionHTML;
        var id;
        if (QuestionType == "Single Choice") //|| QuestionType="Multi Choice"
        {
            QuestionHTML = '<div class="form-group" id="Div-' + countQ + '"  > <span id="close" onclick=\'RemoveDiv("#Div-' + countQ + '")\'  data-toggle="tooltip" title="Remove This Question">X</span>                                                                                                           ' +
                '                         <hr />                                                                                                                                ' +
                '                                                                                                                                                               ' +
                '                                                  <label class="col-sm-10 control-label col-sm-10">New Question #' + countQ + '</label>                                            ' +
                '                                                  <div class="col-sm-10">                                                                                      ' +
                '                                          <textarea class="form-control ckeditor" style="display:none" name="adad" rows="6"></textarea>            <textarea class="form-control ckeditor" name="txtQuestion' + countQ + '" id="txtQuestion' + countQ + '" rows="4"></textarea>         ' +
                '                                                  </div>                                                                                                       ' +
                '                                                  <label class="col-sm-10 control-label col-sm-10">Options</label>                                             ' +
                '                                                  <div class="col-sm-10">                                                                                      ' +
                '                                                      <select name="txtOptions' + countQ + '" id="txtOptions' + countQ + '" multiple="multiple" ></select>                                    ' +
                '                                                  </div>                                                                                                       ' +
                '                                                <label class="col-sm-10 control-label col-sm-10">Answer</label>                                        ' +
                '                                                  <div class="col-sm-5">                                                                                      ' +
                '                                                      <select name="txtAnswers' + countQ + '" id="txtAnswers' + countQ + '" class="form-control input-sm m-bot5"></select>                                                       ' +
                '                                                  </div>                                                                                                       ' +
                '                                                                                                                                                               ' +
                '                                                                                                                                                               ' +
                '                                  </div>';
            $("#DivAllQuestions").append(QuestionHTML);
            id = '#txtOptions' + countQ;

            var AnswerIDname = "#txtAnswers" + countQ;



            $(id).tokenize({

                onAddToken: function () {
                    //alert(id);
                    //TestOutPut(id);
                    AddToDropDown(id, AnswerIDname);
                }
            });
            var TxtID = 'txtQuestion' + countQ;
            //CKEDITOR.replace('textarea-id');
            CKEDITOR.replace(TxtID);
            //$("#txtQuestion" + countQ).hide();
         
            //CKEDITOR.replace('editor1');
            //            $.getScript("/DesignStuff/assets/ckeditor/ckeditor.js", function () {
            //                alert("Script loaded and executed.");
            //            });

            // load_js();
            //            alert($(id).val());


            //            onAddToken	function(value, text, e){}


            //$("#Div-" + countQ).scrollTop($("#Div-" + countQ).prop("scrollHeight"));

            // $("#Div-" + countQ).animate({ scrollTop: $("#Div-" + countQ)[0].scrollHeight }, 1000);
        }
        else if (QuestionType == "Multi Choice") //|| QuestionType="Multi Choice"
        {
            QuestionHTML = '<div class="form-group" id="Div-' + countQ + '"  > <span id="close" onclick=\'RemoveDiv("#Div-' + countQ + '")\'  data-toggle="tooltip" title="Remove This Question">X</span>                                                                                                           ' +
                '                         <br />                                                                                                                                ' +
                '                                                                                                                                                               ' +
                '                                                  <label class="col-sm-10 control-label col-sm-10">Question ' + countQ + '</label>                                            ' +
                '                                                  <div class="col-sm-10">                                                                                      ' +
                '                                                      <textarea class="form-control ckeditor" name="txtQuestion' + countQ + '" id="txtQuestion' + countQ + '" rows="4"></textarea>         ' +
                '                                                  </div>                                                                                                       ' +
                '                                                  <label class="col-sm-10 control-label col-sm-10">Options</label>                                             ' +
                '                                                  <div class="col-sm-10">                                                                                      ' +
                '                                                      <select name="txtOptions' + countQ + '" id="txtOptions' + countQ + '" multiple="multiple"></select>                                    ' +
                '                                                  </div>                                                                                                       ' +
                '                                                <label class="col-sm-10 control-label col-sm-10">Answer/Answers</label>                                        ' +
                '                                                  <div class="col-sm-10">                                                                                      ' +
                '                                                      <select name="txtAnswers' + countQ + '" id="txtAnswers' + countQ + '"  ></select>                                                       ' +
                '                                                  </div>                                                                                                       ' +
                '                                                                                                                                                               ' +
                '                                                                                                                                                               ' +
                '                                  </div>';
            $("#DivAllQuestions").append(QuestionHTML);
            id = '#txtOptions' + countQ;
            idAns = '#txtAnswers' + countQ;

            $(id).tokenize({

                onAddToken: function () {
                    AddToDropDown(id, idAns);
                }
            });


            //            $(id).tokenize({
            //                                AddToDropDown(id, idAns);
            //            }
            //            );

            $(idAns).tokenize({
                newElements: false,
                displayDropdownOnFocus: true
            }
            );


        }
        else if (QuestionType == "Map the Column") {
            QuestionHTML = '<div class="form-group" id="Div-' + countQ + '"  > <span id="close" onclick=\'RemoveDiv("#Div-' + countQ + '")\'  data-toggle="tooltip" title="Remove This Question">X</span>                                                                                                           ' +
                        '                         <br />                                                                                                                                ' +
                        '                                                                                                                                                               ' +
                        '                                                  <label class="col-sm-10 control-label col-sm-10">Mapping Question' + countQ + '</label>                                             ' +
                        '                                                  <div class="col-sm-10">                                                                                      ' +
                        '                                                      <select name="txtOptions' + countQ + '" id="txtOptions' + countQ + '" multiple="multiple"></select>                                    ' +
                        '                                                      <select name="txtOptionsMap' + countQ + '" id="txtOptionsMap' + countQ + '" multiple="multiple"></select>                                    ' +
                        '                                                  </div>                                                                                                       ' +
                        '                                                                                                                                        ' +
                        '                                                                                                                                                               ' +
                        '                                                                                                                                                               ' +
                        '                                  </div>';
            $("#DivAllQuestions").append(QuestionHTML);
            id = '#txtOptions' + countQ;
            var idMap = '#txtOptionsMap' + countQ;
            $(id).tokenize();
            $(idMap).tokenize();
            displayDropdownOnFocus

        }
        else {
            alert(QuestionType);
            $("#ddQuestionType").val();
            alert("Please select question type");
            $("#ddQuestionType").focus();
        }
    });




});


function AddToDropDown(id, AnswerIDname) {
    alert($(id).val());
    var str = $(id).val();
    var AllOptions = str.toString().split(",");
    $(AnswerIDname).empty();
    for (var i = 0; i < AllOptions.length; i++) {
        $('<option/>').val(AllOptions[i]).html(AllOptions[i]).appendTo(AnswerIDname);
    }
}


function AddCommaSeperatedToDropDown(str, AnswerIDname) {
    //    alert(str);
    //    alert(AnswerIDname);
    //    //var str = $(id).val();
    var AllOptions = str.toString().split(",");
    $(AnswerIDname).empty();
    for (var i = 0; i < AllOptions.length; i++) {
        $('<option/>').val(AllOptions[i]).html(AllOptions[i]).appendTo(AnswerIDname).attr("selected", "selected"); ;
    }

}


function AddCommaSeperatedToDropDownChild(str, AnswerIDname) {
    //    alert(str);
    //    alert(AnswerIDname);
    //    //var str = $(id).val();
    var AllOptions = str.toString().split(",");
    $(AnswerIDname).empty();
    for (var i = 0; i < AllOptions.length; i++) {
        $('<option/>').val(AllOptions[i]).html(AllOptions[i]).appendTo(AnswerIDname);
    }

}


function GetQMXML() {



    //    alert($('#ddTopic').val());
    //    var Topic = $('#ddQuestionType :selected').text();
    //    var Topic1 = $('#ddQuestionType :selected').val();

    //    alert(Topic);
    //    alert(Topic1);

    var InputXML =
        '   <AddBulkQuestion>                                      ' +
         '     <Master>                                             ' +
    //'   <QuestionID></QuestionID>                              ' +
         '   <TopicID>' + $('#ddTopic').val() + '</TopicID>                                    ' +
         '   <QType>' + $('#ddQuestionType').val() + '</QType>                          ' +
         '   <QualificationID>' + $('#ddQualification').val() + '</QualificationID>                    ' +
         '   <SubjectID>' + $('#ddSubject').val() + '</SubjectID>                                ' +
         '   <ExamBoardID>' + $('#ddBoard').val() + '</ExamBoardID>                            ' +
         '   <UnitID>' + $('#ddUnit').val() + '</UnitID>                                      ' +
         '   <IsActive>1</IsActive>                                  ' +
         '     </Master>                                            ' +
         '     <Detail>                                             '

    var countLoop = parseInt($("#CountQuestion").val());



    // InputXML = InputXML;
    for (i = 1; i <= countLoop; i++) {


        var QuestionType = $('#ddQuestionType :selected').text(); // $("#ddQuestionType").val();

        if (QuestionType == "Single Choice") //|| QuestionType="Multi Choice"
        {

            InputXML = InputXML + '<Root>                                             ' +
         '         <QuestionDetID></QuestionDetID>                  ' +
            //'         <QuestionID></QuestionID>                        ' +
         '         <Question>' + $("#txtQuestion" + i).val() + '</Question>                            ' +
         '         <Options>' + $("#txtOptions" + i).val() + '</Options>                              ' +
          '        <Answer>' + $("#txtAnswers" + i).val() + '</Answer>                                ' +
            // '        <MapColumnLeft></MapColumnLeft>                  ' +
            //'        <MapColumnRight></MapColumnRight>                ' +
          '        <IsActive></IsActive>                            ' +
          '      </Root>                                            '
        }
        else if (QuestionType == "Multi Choice") {
            InputXML = InputXML + '<Root>                                             ' +
         '         <QuestionDetID></QuestionDetID>                  ' +
         '         <Question>' + $("#txtQuestion" + i).val() + '</Question>                            ' +
         '         <Options>' + $("#txtOptions" + i).val() + '</Options>                              ' +
          '        <Answer>' + $("#txtAnswers" + i).val() + '</Answer>                                ' +
          '        <IsActive></IsActive>                            ' +
          '      </Root>                                            '

        }


        else if (QuestionType == "Map the Column") {
            InputXML = InputXML + '<Root>                                             ' +
         '         <QuestionDetID></QuestionDetID>                  ' +
            '        <MapColumnLeft>' + $("#txtOptions" + i).val() + '</MapColumnLeft>                  ' +
           '        <MapColumnRight>' + $("#txtOptionsMap" + i).val() + '</MapColumnRight>                ' +
          '        <IsActive></IsActive>                            ' +
          '      </Root>                                            '

        }
        else if (QuestionType == "Fill in the blank") {
            InputXML = InputXML + '<Root>                                             ' +
         '         <QuestionDetID></QuestionDetID>                  ' +
         '         <Question>' + $("#txtQuestion" + i).val() + '</Question>                            ' +
         '         <Options>' + $("#txtOptions" + i).val() + '</Options>                              ' +
          '        <Answer>' + $("#txtAnswers" + i).val() + '</Answer>                                ' +
          '        <IsActive></IsActive>                            ' +
          '      </Root>                                            '

        }
        else if (QuestionType == "Crossword") {
            alert("Not Implemented")
        }
    }

    InputXML = InputXML + '    </Detail>                                            ' +
          '  </AddBulkQuestion>';


    return InputXML;
}

function RemoveDiv(DivToBeRemove) {
    //alert(DivToBeRemove);
    $(DivToBeRemove).hide(1000);
}




function BindGrid() {
    var InputXMLParam = "";
    $.ajax({
        type: "POST",
        url: PagePath + "Select_TopicWise_Questions", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            // $('#tblQMList tbody').remove();
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);


                for (i = 0; i < obj.Table.length; i++) {
                    $('#tblQMList').append('<tr class="tr" id="tr_' + obj.Table[i].TopicID + '"><td>' + obj.Table[i].QualificationName + "</td><td>" + obj.Table[i].ExamBoardName + "</td><td>" + obj.Table[i].SubjectName + "</td><td>" + obj.Table[i].UnitName + "</td><td>" + obj.Table[i].Topic + "</td><td><button id='btnSingleChoice-" + obj.Table[i].TopicID + "'  style='width:100%' class='btn btn-shadow btn-default'>" + obj.Table[i].TotalSingleChoice + "</button></td><td><button id='btnMultiChoice-" + obj.Table[i].TopicID + "' style='width:100%' class='btn btn-shadow btn-default'>" + obj.Table[i].TotalMultiChoice + "</button></td><td><button id='btnMapTheColumn-" + obj.Table[i].TopicID + "'  style='width:100%' class='btn btn-shadow btn-default'>" + obj.Table[i].FillIntheBlank + "</button></td><td><button id='btnMapTheColumn-" + obj.Table[i].TopicID + "' style='width:100%' class='btn btn-shadow btn-default'>" + obj.Table[i].MapTheColumn + "</button></td></tr>");

                    //$('#TestDynamic').append("<button id='btnSingleChoice1-" + obj.Table[i].TopicID + "'  style='width:100%' >" + obj.Table[i].TotalSingleChoice + "</button>");


                }

                $('#lblCount').html("Total Records : " + obj.Table.length);



            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });


}

//================================
//Select_TopicWise_Questions_Details






function Select_TopicWise_Questions_Details(id, Qtype) {
    InputXMLParam = "<Root><QMMaster><QType>" + Qtype + "</QType><TopicID>" + id + "</TopicID></QMMaster></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "Select_TopicWise_Questions_Details", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            // $('#tblQMList tbody').remove();
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                var QuestionHTML = "";

                var TopicID, QType, QualificationID, SubjectID, ExamBoardID, UnitID, QuestionDetID, QuestionID, Question, Options, Answer, MapColumnLeft, MapColumnRight;
                for (i = 0; i < obj.Table.length; i++) {

                    if (Qtype === 1) {

                        TopicID = obj.Table[i].TopicID;
                        QType = obj.Table[i].QType;
                        QualificationID = obj.Table[i].QualificationID;
                        SubjectID = obj.Table[i].SubjectID;
                        ExamBoardID = obj.Table[i].ExamBoardID;
                        UnitID = obj.Table[i].UnitID;
                        QuestionDetID = obj.Table[i].QuestionDetID;
                        QuestionID = obj.Table[i].QuestionID;
                        Question = obj.Table[i].Question;

                        Options = obj.Table[i].Options;
                        Answer = obj.Table[i].Answer;
                        MapColumnLeft = obj.Table[i].MapColumnLeft;
                        MapColumnRight = obj.Table[i].MapColumnRight;

                        j = i + 1;
                        //alert(Question);

                        var QuestionHTML = '<div class="form-group" id="DivEdit-' + QuestionDetID + '"  > <span id="close" onclick=\'RemoveDiv("#DivEdit-' + QuestionDetID + '")\'  data-toggle="tooltip" title="Remove This Question">X</span>                                                                                                           ' +
                '                         <br />                                                                                                                                ' +
                '                                                                                                                                                               ' +
                '                                                  <label class="col-sm-10 control-label col-sm-10">Question # ' + j + '</label>                                            ' +
                '                                                  <div class="col-sm-10">                                                                                      ' +
                '                                                      <textarea class="form-control ckeditor" style="display:none" name="txtQuestionEdit' + QuestionDetID + '" id="txtQuestionEdit' + QuestionDetID + '" rows="4">' + Question + '</textarea>         ' +
                '                                                  </div>                                                                                                       ' +
                '                                                  <label class="col-sm-10 control-label col-sm-10">Options</label>                                             ' +
                '                                                  <div class="col-sm-10">                                                                                      ' +
                '                                                      <select name="txtOptionsEdit' + QuestionDetID + '" id="txtOptionsEdit' + QuestionDetID + '" multiple="multiple" ></select>                                    ' +
                '                                                  </div>                                                                                                       ' +
                '                                                <label class="col-sm-10 control-label col-sm-10">Answer</label>                                        ' +
                '                                                  <div class="col-sm-5">                                                                                      ' +
                '                                                      <select name="txtAnswersEdit' + QuestionDetID + '" id="txtAnswersEdit' + QuestionDetID + '" class="form-control input-sm m-bot5"></select>                                                       ' +
                '                                                  </div>                                                                                                       ' +
                '                                                                                                                                                               ' +
                '                                                                                                                                                               ' +
                '                                  </div>';
                        $("#DivAllQuestionsEdit").append(QuestionHTML);
                        idx = '#txtOptionsEdit' + QuestionDetID;
                        var AnswerIDname = "#txtAnswersEdit" + QuestionDetID;
                        // ' + Options + '
                        AddCommaSeperatedToDropDown(Options, idx);
                        AddCommaSeperatedToDropDownChild(Options, AnswerIDname);
                        $(AnswerIDname).val(Answer).attr("selected", "selected");

                        $(idx).tokenize({
                            onAddToken: function () {
                                AddToDropDown(idx, AnswerIDname);
                            }
                        });

                        //End If
                    }

                }




            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });


}



          
          


          
          
          
          
          
          
          
          
          
          
          
          