var PagePath = GlobalPath + "/Admin/frmQM.aspx/";

$(document).ready(function () {

    $("txtQuestion").keyup(function (e) {
        while ($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
            $(this).height($(this).height() + 1);
        };
    });

//    $('#txtQuestion').css('overflow', 'hidden').autogrow()

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

                alert("Data has been saved successfully");
                //$('#lblMessage').text('Data has been updated successfully.');


            },
            failure: function (msg) {
                alert(msg);
            }
        });


    });




    $('#ddQualification').DDFillData('Qualification', 0);
    $('#ddBoard').DDFillData('ExamBoard', 0);
    $('#ddSubject').DDFillData('Subject', 0);
    $('#ddQuestionType').DDFillData('QType', 0);
    $('#ddUnit').DDFillData('Unit', 0);
    $('#ddTopic').DDFillData('Topic', 0);



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
                '                         <br />                                                                                                                                ' +
                '                                                                                                                                                               ' +
                '                                                  <label class="col-sm-10 control-label col-sm-10">Question ' + countQ + '</label>                                            ' +
                '                                                  <div class="col-sm-10">                                                                                      ' +
                '                                                      <textarea class="form-control ckeditor" name="txtQuestion' + countQ + '" id="txtQuestion' + countQ + '" rows="4"></textarea>         ' +
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
                    //TestOutPut(id);
                    AddToDropDown(id, AnswerIDname);
                }
            });

            //            alert($(id).val());


            //            onAddToken	function(value, text, e){}


            //$("#Div-" + countQ).scrollTop($("#Div-" + countQ).prop("scrollHeight"));

            // $("#Div-" + countQ).animate({ scrollTop: $("#Div-" + countQ)[0].scrollHeight }, 1000);
        }
        else if (QuestionType == "Multi Choice") //|| QuestionType="Multi Choice"
        {
            QuestionHTML = '<div class="form-group">                                                                                                            ' +
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
            QuestionHTML = '<div class="form-group">                                                                                                            ' +
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
    // alert($(id).val());
    var str = $(id).val();
    var AllOptions = str.toString().split(",");
    $(AnswerIDname).empty();
    for (var i = 0; i < AllOptions.length; i++) {
        $('<option/>').val(AllOptions[i]).html(AllOptions[i]).appendTo(AnswerIDname);
    }


    //    alert($(id).val());
    //    alert($(id).innerText);



}

function GetQMXML() {


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

        alert($("#txtOptions" + i).val());
        InputXML = InputXML + '       <Root>                                             ' +
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

    InputXML = InputXML + '    </Detail>                                            ' +
          '  </AddBulkQuestion>';


    return InputXML;
}

function RemoveDiv(DivToBeRemove) {
    //alert(DivToBeRemove);
    $(DivToBeRemove).hide(1000);
}

          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          