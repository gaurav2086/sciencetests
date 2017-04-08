var PagePath = GlobalPath + "../Admin/frmQMNew.aspx/";
var GlobalTopicID;
$(document).ready(function () {
    BindGrid();
    // Hide ToolBar On lOad
    $(".cke_top").hide();
    $(".cke_bottom").hide();
    $("#btnHideToolBar").hide();
    $("#btnShowToolBar").show();

    //=============================


    $('#txtSearch').keyup(function () {
        var $rows = $('#tblMain tbody tr');
        var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
        $rows.show().filter(function () {
            var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
            return ! ~text.indexOf(val);
        }).hide();

    });


    $("#divQMList").hide();

    $('#ddTopic').DDFillData('Topic', "0");
    $('#ddQuestionType').DDFillData('QType', "0");




    $("#btnBack").click(function () {
        $("#divQMList").hide();
        $("#DivMain").show();

    });

    $("#tblMain").on("dblclick", "[id^='tr_']", function (event) {
        var id = parseInt(((this.id.split('_'))[1]).toString());
        $("#lblQualification").text($(this).find("td")[0].innerHTML);
        $("#lblBoard").text($(this).find("td")[1].innerHTML);
        $("#lblSubject").text($(this).find("td")[2].innerHTML);
        $("#lblUnit").text($(this).find("td")[3].innerHTML);

        $("#lblmodal-Qualification").text($(this).find("td")[0].innerHTML);
        $("#lblmodal-Board").text($(this).find("td")[1].innerHTML);
        $("#lblmodal-Subject").text($(this).find("td")[2].innerHTML);
        $("#lblmodal-Unit").text($(this).find("td")[3].innerHTML);
        $('#ddTopic').val(id).attr("selected", "selected");

        $("#lblmodal-Topic").text($("#ddTopic option:selected").text());

        $("#divQMList").show();
        $("#DivMain").hide();
        //  $("#ddQuestionType").value(id);
        GlobalTopicID = id;
        $('#ddTopic').attr("disabled", "disabled");
        $("#tblQMListBody").empty();
        $("#ddCategory").FillCategory("Category", '', $(this).find("td")[2].innerHTML);
        Select_TopicWise_Questions_Details(id);

    });


    // config.toolbarCanCollapse = false;

    //    btnRemove - 13

    $("#tblQMDynamic").on("click", "[id^='btnRemove']", function (event) {
        var id = parseInt(((this.id.split('-'))[1]).toString());
        $("#tr-" + id).hide(500);
        $("#IsDeleted-" + id).val("1");



    });


    $("#tblQMList").on("dblclick", "[id^='tr-']", function (event) {
        var QM_ID = parseInt(((this.id.split('-'))[1]).toString());
        ClearControl();
        $('#myModal').modal('toggle');
        $('#myModal').modal('show');
        //ClearControl();
        //$('#myModal').modal('hide');

        FillForUpdate(QM_ID);
        // alert("Clicked");

    });

    $("#tblQMDynamic").on("click", "[id^='ckhIsCorrect']", function (event) {
        var id = parseInt(((this.id.split('-'))[1]).toString())

        var QTypeVal = $("#ddQuestionType").val();
        if (QTypeVal == 1) {
            $("[id ^= 'tr-']").removeClass("highlightme");
        }
        if (this.checked == true) {

            $("#tr-" + id).addClass("highlightme");
        }
        else {
            $("#tr-" + id).removeClass("highlightme");

        }
    });





    $("#tblQMDynamic").on("click", "[id^='btnAddOption']", function (event) {

        GetRow(0);

        $(".cke_top").hide();
        $(".cke_bottom").hide();
        $("#btnHideToolBar").hide();
        $("#btnShowToolBar").show();

    });

    $("#tblQMDynamic").on("click", "[id^='btnUp']", function (event) {

        // var row = $(this).parents("tr:first");

        //  row.insertBefore(row.prev());

        //  row.insertAfter(row.next());

    });


    $("#tblQMDynamic").on("click", "[id^='btnDown']", function (event) {
        //  var row = $(this).parents("tr:first");

        //  row.insertBefore(row.prev());

        //  row.insertAfter(row.next());

    });



    $("#BtnSave").click(function () {

        if (Validate("Save") == true) {


            //        $('#myModal').modal('toggle');
            //        $('#myModal').modal('show');
            //        //$('#myModal').modal('hide');

            var InputXMLParam = getXML();
            $.ajax({
                type: "POST",
                url: PagePath + "InsertBulkData", // Location of the service 
                data: "{inXML :'" + InputXMLParam + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    //                $("#divQMList").show();

                    //                $("#divQMAdd").hide();
                    //                $("#DivAllQuestions").empty();
                    Select_TopicWise_Questions_Details(GlobalTopicID);
                    alert("Data has been saved successfully");
                    ClearControl();
                    GetRow(0);

                    $(".cke_top").hide();
                    $(".cke_bottom").hide();
                    $("#btnHideToolBar").hide();
                    $("#btnShowToolBar").show();


                    //      $("#divQMList").scrollTop($("#divQMList").prop("scrollHeight"));


                },
                failure: function (msg) {
                    alert(msg);
                }
            });



        }

    });
    $("#btnAlert").click(function () {

        var countLoop = parseInt($("#CountQuestion").val());



        for (i = 1; i <= countLoop; i++) {


            //            txtOptions = '#txtOptions-' + i;
            //            $(txtOptions).ckeditor(function (textarea) {
            //                //  obj.value = $(textarea).val();
            //                alert($(textarea).val());
            //            });
            //CKEDITOR.instances['txtOption1'].getData()
            alert(CKEDITOR.instances['txtOption' + i].getData());
            //            var x = CKEDITOR.instances[i].getData();
            //            alert(x);
            // alert($("#txtOptions-" + i).val);



        }


    });



    $("#btnHideToolBar").click(function () {

        $(".cke_top").hide();
        $(".cke_bottom").hide();
        $("#btnHideToolBar").hide();
        $("#btnShowToolBar").show();

    });


    $("#btnShowToolBar").click(function () {

        $(".cke_top").show();
        $(".cke_bottom").show();

        $("#btnHideToolBar").show();
        $("#btnShowToolBar").hide();

    });

    $("#btnAddQuestions").click(function () {

        if (Validate("Popup") == true) {


            $('#myModal').modal('toggle');
            $('#myModal').modal('show');
            ClearControl();
            //$('#myModal').modal('hide');
            GetRow(1);
            CKEDITOR.replace('txtQuestion', { toolbarStartupExpanded: false });
            CKEDITOR.replace('txtExplanation', { toolbarStartupExpanded: false });
            $("#txtMarks").val("");
            $("#ddCategory").val("0");

            $(".cke_top").hide();
            $(".cke_bottom").hide();
            $("#btnHideToolBar").hide();
            $("#btnShowToolBar").show();





        }
    });



});










function GetRow(Sequence) {

    //type

    if (Sequence == 1) {

        var HeaderHTML = getDefaultHeader();
        $("#tblQMDynamic").append(HeaderHTML);

    }

    //    $("#btnHideToolBar").show();
    //    $("#btnShowToolBar").hide();
    //
    var countQ = parseInt($("#CountQuestion").val());
    countQ = countQ + 1;
    $("#CountQuestion").val(countQ)

    var QuestionHTML = "";

    var QTypeVal = $("#ddQuestionType").val();

    if (QTypeVal == 1) {
        QuestionHTML = '<tr id="tr-' + countQ + '">                                                                                                        ' +
                '     <td >                                                                                  ' +
                '          <input id="btn-' + countQ + '" class="btn-success" type="button" value="Option " /><input id="btnNum-' + countQ + '"           ' +
                '              class="btn-success" type="button" value="#' + (countQ) + '" />                                                  ' +
                '      </td>                                                                                                    ' +
                '      <td >                                                                                  ' +
                '          <textarea class="form-control ckeditor" name="txtOption' + countQ + '" id="txtOption' + countQ + '" style="display: none; width: 20px" name="adad"               ' +
                '              rows="1"></textarea>                                                                             ' +
                '      </td>                                                                                                    ' +
                '      <td >                                                                                  ' +
                '          <input id="ckhIsCorrect-' + countQ + '" class="checkbox form-control" name="group1" type="radio" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%;display:none">  ' +
                  '                      <select id="ddCategory-' + countQ + '"  class="form-control input-sm m-bot5">' +
                  '      <option>--Select--</option>' +
                   ' </select></td>' +

              '<td > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%">  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';

        $("#tblQMDynamic").append(QuestionHTML);
        $("#ddCategory-" + countQ).DDFillData("Category", "0");
        var TxtID = 'txtOption' + countQ;
        //CKEDITOR.replace('textarea-id');


        //  $('#' + TxtID).ckeditor();
        CKEDITOR.replace(TxtID);

    }

    else if (QTypeVal == 2) {
        QuestionHTML = '<tr id="tr-' + countQ + '">                                                                                                        ' +
                '     <td >                                                                                  ' +
                '          <input id="btn-' + countQ + '" class="btn-success" type="button" value="Option " /><input id="btnNum-' + countQ + '"           ' +
                '              class="btn-success" type="button" value="#' + (countQ) + '" />                                                  ' +
                '      </td>                                                                                                    ' +
                '      <td >                                                                                  ' +
                '          <textarea class="form-control ckeditor" name="txtOption' + countQ + '" id="txtOption' + countQ + '" style="display: none; width: 20px" name="adad"               ' +
                '              rows="1"></textarea>                                                                             ' +
                '      </td>                                                                                                    ' +
                '      <td >                                                                                  ' +
                '          <input id="ckhIsCorrect-' + countQ + '" class="checkbox form-control" type="checkbox" />                                   ' +
                '      </td>                                                                                                    ' +
                               '<td style="width: 3%;display:none">  ' +
                  '                      <select id="ddCategory-' + countQ + '"  class="form-control input-sm m-bot5">' +
                  '      <option>--Select--</option>' +
                   ' </select></td>' +

              '<td > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%">  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';

        $("#tblQMDynamic").append(QuestionHTML);
        $("#ddCategory-" + countQ).DDFillData("Category", "0");

        var TxtID = 'txtOption' + countQ;
        //CKEDITOR.replace('textarea-id');


        //  $('#' + TxtID).ckeditor();
        CKEDITOR.replace(TxtID);


    }

    else if (QTypeVal == 3) {
        QuestionHTML = '<tr id="tr-' + countQ + '">                                                                                                        ' +
                '     <td >                                                                                  ' +
                '          <input id="btn-' + countQ + '" class="btn-success" type="button" value="Option " /><input id="btnNum-' + countQ + '"           ' +
                '              class="btn-success" type="button" value="#' + (countQ) + '" />                                                  ' +
                '      </td>                                                                                                    ' +
                '      <td >                                                                                  ' +
                '          <textarea class="form-control ckeditor" name="txtOption' + countQ + '" id="txtOption' + countQ + '" style="display: none; width: 20px" name="adad"               ' +
                '              rows="1"></textarea>                                                                             ' +
                '      </td>                                                                                                    ' +
                '      <td style="display:none">                                                                                  ' +
                '          <input id="ckhIsCorrect-' + countQ + '" class="btn-success" type="checkbox" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%;display:none">  ' +
                  '                      <select id="ddCategory-' + countQ + '"  class="form-control input-sm m-bot5">' +
                  '      <option>--Select--</option>' +
                   ' </select></td>' +

              '<td > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%">  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';



        $("#colIsCorrect").hide();
        $("#tblQMDynamic").append(QuestionHTML);
        var TxtID = 'txtOption' + countQ;
        //CKEDITOR.replace('textarea-id');

        $("#ddCategory-" + countQ).DDFillData("Category", "0");

        //  $('#' + TxtID).ckeditor();
        CKEDITOR.replace(TxtID);

    }
    else if (QTypeVal == 4) {
        var iloop = 0;
        var val = 10;
        QuestionHTML = '<tr id="tr-' + countQ + '">                                                                                                        ' +
                        ' <td colspan="7">                                                                                  ';


        for (iloop = 0; iloop < val; iloop++) {
            QuestionHTML = QuestionHTML + '<input type="text" id="txtCrossword-' + iloop + '"></input>';

        }
        QuestionHTML = QuestionHTML + '</td></tr>';
        $("#tblQMDynamic").append(QuestionHTML);

        alert("This type is in under development");
    }
    else if (QTypeVal == 5) {
        QuestionHTML = '<tr id="tr-' + countQ + '">                                                                                                        ' +
                '     <td >                                                                                  ' +
                '          <input id="btn-' + countQ + '" class="btn-success" type="button" value="Option " /><input id="btnNum-' + countQ + '"           ' +
                '              class="btn-success" type="button" value="#' + (countQ) + '" />                                                  ' +
                '      </td>                                                                                                    ' +
                '      <td >                                                                                  ' +
                '          <textarea class="form-control ckeditor" name="txtOption' + countQ + '" id="txtOption' + countQ + '" style="display: none; width: 20px"                ' +
                '              rows="1"></textarea>                                                                             ' +
                '      </td>                                                                                                    ' +
                '      <td >                                                                                  ' +
                '          <textarea class="form-control ckeditor" name="txtOptionR' + countQ + '" id="txtOptionR' + countQ + '" style="display: none; width: 20px"                ' +
                '              rows="1"></textarea>                                                                             ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%;display:none">  ' +
                  '                      <select id="ddCategory-' + countQ + '"  class="form-control input-sm m-bot5">' +
                  '      <option>--Select--</option>' +
                   ' </select></td>' +

             '<td > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%">  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';



        $("#colOption").css('width', "38%");
        $("#colIsCorrect").css('width', "38%");
        $("#colOption").html("Mapping Column Left");
        $("#colIsCorrect").html("Mapping Column Right");
        $("#tblQMDynamic").append(QuestionHTML);
        var TxtID = 'txtOption' + countQ;
        var TxtIDR = 'txtOptionR' + countQ;
        $("#ddCategory-" + countQ).DDFillData("Category", "0");

        //CKEDITOR.replace('textarea-id');


        //  $('#' + TxtID).ckeditor();
        CKEDITOR.replace(TxtID);
        CKEDITOR.replace(TxtIDR);
    }


    $(".cke_top").hide();
    $(".cke_bottom").hide();
    $("#btnHideToolBar").hide();
    $("#btnShowToolBar").show();


}


function getXML() {

    var countLoop = parseInt($("#CountQuestion").val());
    var Qtext = CKEDITOR.instances['txtQuestion'].getData();
    var ExplanationText = CKEDITOR.instances['txtExplanation'].getData();
    var Questiontype = $("#ddQuestionType").val();
    var QM_ID = $("#hdn_QM_ID").val();
    var mCategory = $("#ddCategory").val();
    //alert(QM_ID);
    var Marks = $("#txtMarks").val();


    var QMXML = '<QM><QMMaster>' +
'<QM_ID>' + QM_ID + '</QM_ID>' +
  '<Topic_ID>' + $("#ddTopic").val() + '</Topic_ID>' +
  '<QuestionTypeID>' + $("#ddQuestionType").val() + '</QuestionTypeID>' +
  '<QuestionText><![CDATA[' + Qtext + ']]></QuestionText>' +
  '<Explanation><![CDATA[' + ExplanationText + ']]></Explanation>' +
  '<Marks><![CDATA[' + Marks + ']]></Marks>' +
  '<mCategory>' + mCategory + '</mCategory>' +
    '<IsActive>1</IsActive>' +
 '<SortOrder>1</SortOrder>' +
'</QMMaster>';

    //alert(QMXML);

    QMXML = QMXML + '<Details>'



    for (i = 1; i <= countLoop; i++) {


        var ISDeleted = $("#IsDeleted-" + i).val();

        if (ISDeleted != "1") {
            var option = CKEDITOR.instances['txtOption' + i].getData();
            var ckhIsCorrect; //= $('#ckhIsCorrect-' + i).is(':checked'); // $('#ckhIsCorrect-' + i).val();
            var CategoryID = $('#ddCategory-' + i).val();

            if (Questiontype == 1 || Questiontype == 2) {
                ckhIsCorrect = $('#ckhIsCorrect-' + i).is(':checked'); // $('#ckhIsCorrect-' + i).val();
                //        alert(i + ' : Value : ' + ckhIsCorrect)

                QMXML = QMXML + ('<QMDetails><QMOD_ID></QMOD_ID>' +
    '<QM_ID></QM_ID>' +
    '<OptionText><![CDATA[' + option + ']]></OptionText>' +
    '<IsCorrect>' + ckhIsCorrect + '</IsCorrect>' +
    '<isCorrectMappedID>0</isCorrectMappedID>' +
    '<IsActive>0</IsActive>' +

    '<SortOrder>0</SortOrder><CategoryID>' + CategoryID + '</CategoryID></QMDetails>');

                //        alert(CKEDITOR.instances['txtOption' + i].getData());
            }
            else if (Questiontype == 3) {
                QMXML = QMXML + ('<QMDetails><QMOD_ID></QMOD_ID>' +
    '<QM_ID></QM_ID>' +
    '<OptionText><![CDATA[' + option + ']]></OptionText>' +
    '<isCorrectMappedID>0</isCorrectMappedID>' +
    '<IsActive>0</IsActive>' +
    '<SortOrder>0</SortOrder><CategoryID>' + CategoryID + '</CategoryID></QMDetails>');


            }
            else if (Questiontype == 5) {
                var optionR = CKEDITOR.instances['txtOptionR' + i].getData();

                QMXML = QMXML + ('<QMDetails><QMOD_ID></QMOD_ID>' +
    '<QM_ID></QM_ID>' +
    '<OptionText><![CDATA[' + option + ']]></OptionText>' +
    '<OptionTextRight><![CDATA[' + optionR + ']]></OptionTextRight>' +
    '<isCorrectMappedID>0</isCorrectMappedID>' +
    '<IsActive>0</IsActive>' +
    '<SortOrder>0</SortOrder><CategoryID>' + CategoryID + '</CategoryID></QMDetails>');


            }
        }
    }
    QMXML = QMXML + '</Details></QM>'
    //  alert(QMXML);
    return QMXML;

}






function Validate(type) {

    var Questiontype = $("#ddQuestionType").val();

    var IsValid = true;
    if (type == "Popup") {
        if (Questiontype == "0") {

            alert("Must Select QuestionType Before adding a new question");
            $("#ddQuestionType").focus();
            IsValid = false;
        }
//        if (Questiontype == 4) {
//            alert("This type is in under development");
//            $("#ddQuestionType").focus();
//            IsValid = false;
//        }

    }
    if (type == "Save") {

        var countLoop = parseInt($("#CountQuestion").val());
        var Qtext = CKEDITOR.instances['txtQuestion'].getData();
        //        var txtExplanation = CKEDITOR.instances['txtExplanation'].getData();
        //        

        if (Qtext == "") {

            alert("Must Enter value in question field before submit ");
            IsValid = false;
            return IsValid;
        }


        //        if (txtExplanation == "") {

        //            alert("Must Enter value in Explanation field before submit ");
        //            IsValid = false;
        //            return IsValid;
        //        }




        var flagIsOneSelected = false;
        for (i = 1; i <= countLoop; i++) {

            var option = CKEDITOR.instances['txtOption' + i].getData();
            var ckhIsCorrect = $('#ckhIsCorrect-' + i).is(':checked'); // $('#ckhIsCorrect-' + i).val();

            var ISDeleted = $("#IsDeleted-" + i).val();

            if (ISDeleted != 1) {

                if (Questiontype == 1 || Questiontype == 2) {
                    if (option == "") {

                        alert("Must Enter Value is Option " + i);
                        IsValid = false;
                        return IsValid;
                    }

                    if (ckhIsCorrect == true) {
                        flagIsOneSelected = true;
                    }
                }

                if (Questiontype == 3) {
                    flagIsOneSelected = true;

                    if (option == "") {

                        alert("Must Enter Value is Option " + i);
                        IsValid = false;
                        return IsValid;
                    }
                }


                if (Questiontype == 5) {
                    flagIsOneSelected = true;
                    if (option == "") {

                        alert("Must Enter Value in Left column field of option number " + i);
                        IsValid = false;
                        return IsValid;
                    }


                    var optionR = CKEDITOR.instances['txtOptionR' + i].getData();
                    if (optionR == "") {

                        alert("Must Enter Value in Right column field of option number  " + i);
                        IsValid = false;
                        return IsValid;
                    }

                }


            }
        }

        if (flagIsOneSelected != true) {
            alert("Select at least one correct option before submit");
            IsValid = false;
            return IsValid;

        }
    }


    return Boolean(IsValid);
}




function ClearControl() {
    $('#hdn_QM_ID').val("0");

    $("#CountQuestion").val("0");
    CKEDITOR.instances['txtQuestion'].setData("");
    CKEDITOR.instances['txtExplanation'].setData("");
    $("#txtMarks").val("");
    $("#ddCategory").val("0")
    $("#tblQMDynamic").empty();
    //   '<SortOrder>0</SortOrder><CategoryID><CategoryID>' + CategoryID + '</QMDetails>');

    //    $("#tbodyid").empty();

}

function Select_TopicWise_Questions_Details(id) {
    InputXMLParam = "<Root><QMMaster><TopicID>" + id + "</TopicID></QMMaster></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "Select_TopicWise_Questions_Details", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                var QuestionHTML = "";
                var QType, QuestionText, CountTotal;
                var QM_ID;
                $("#tblQMListBody").empty();
                for (i = 0; i < obj.Table.length; i++) {
                    //if (Qtype === 1) {

                    //TopicID = obj.Table[i].TopicID;
                    QType = obj.Table[i].QType;
                    QuestionText = obj.Table[i].QuestionText;
                    CountTotal = obj.Table[i].CountTotal;
                    QM_ID = obj.Table[i].QM_ID

                    var QuestionHTMList = '<tr id="tr-' + QM_ID + '"><td>' + QuestionText + '</td><td>' + QType + '</td><td>' + CountTotal + "</td><td><input  onclick='Delete_QM(" + QM_ID + ");' type='button' class='btn-success' value='delete' /></td></tr>";
                    //$.tblQMList.appe
                    $("#tblQMList").append(QuestionHTMList);

                }
                $('#lblCount').html("Total Records : " + obj.Table.length);


            }
        },
        failure: function (msg) {
            alert(msg);
        }
    });


}





//==============================================

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
                    $('#tblMain').append('<tr class="tr" id="tr_' + obj.Table[i].TopicID + '"><td>' + obj.Table[i].QualificationName + "</td><td>" + obj.Table[i].ExamBoardName + "</td><td>" + obj.Table[i].SubjectName + "</td><td>" + obj.Table[i].UnitName + "</td><td>" + obj.Table[i].Topic + "</td><td>" + obj.Table[i].TotalQuestions + "</td></tr>");

                    //$('#TestDynamic').append("<button id='btnSingleChoice1-" + obj.Table[i].TopicID + "'  style='width:100%' >" + obj.Table[i].TotalSingleChoice + "</button>");
                }
                $("#pagination_info").pagination({ items: obj.Table.length, itemsOnPage: 10, cssStyle: 'light-theme', TabGrid: 'tblMain' });
                $('#lblCount1').html("Total Records : " + obj.Table.length);

            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });


}


function getDefaultHeader() {

    var HeaderHTML = '                                <tr class="btn-danger">            ' +
    '                   <th style="width: 13%">                             ' +
    '                      #                                                ' +
    '                   </th>                                               ' +
    '                  <th id="colOption" style="width: 65%">               ' +
    '                        Option DESC                                    ' +
    '                    </th>                                              ' +
    '                    <th id="colIsCorrect" style="width: 3%">           ' +
    '                        IsCorrect                                      ' +
    '                   </th>                                               ' +
    '                  <th style="width: 0%; display: none">                ' +
    '                      Category                                         ' +
    '                  </th>                                                ' +
    '                  <th style="width: 5%">                               ' +
    '                      Reorder                                          ' +
    '                 </th>                                                 ' +
    '                <th style="width: 3%">                                 ' +
    '                    Add New                                            ' +
    '                </th>                                                  ' +
    '                <th style="width: 3%">                                 ' +
    '                   Remove                                              ' +
    '              </th>                                                    ' +
    '          </tr>                                                        ' +
    '          <tr>                                                         ' +
    '              <td colspan="6">                                         ' +
    '                 <hr />                                                ' +
    '            </td>                                                      ' +
    '        </tr>                                                          '

    return HeaderHTML;

}


/**** Get Row On Edit *****/


function GetRowOnEdit(QMOD_ID, OptionText, OptionTextRight, IsCorrect, isCorrectMappedID, IsActive, SortOrder) {

    //type

    //    $("#btnHideToolBar").show();
    //    $("#btnShowToolBar").hide();
    var countQ = parseInt($("#CountQuestion").val());
    countQ = countQ + 1;
    $("#CountQuestion").val(countQ)

    var QuestionHTML = "";

    var QTypeVal = $("#ddQuestionType").val();

    if (QTypeVal == 1) {
        QuestionHTML = '<tr id="tr-' + countQ + '">                                                                                                        ' +
                '     <td >                                                                                  ' +
                '          <input id="btn-' + countQ + '" class="btn-success" type="button" value="Option " /><input id="btnNum-' + countQ + '"           ' +
                '              class="btn-success" type="button" value="#' + (countQ) + '" />                                                  ' +
                '      </td>                                                                                                    ' +
                '      <td >                                                                                  ' +
                '          <textarea class="form-control ckeditor" name="txtOption' + countQ + '" id="txtOption' + countQ + '" style="display: none; width: 20px" name="adad"               ' +
                '              rows="1"></textarea>                                                                             ' +
                '      </td>                                                                                                    ' +
                '      <td >                                                                                  ' +
                '          <input id="ckhIsCorrect-' + countQ + '" class="checkbox form-control" name="group1" type="radio" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%;display:none">  ' +
                  '                      <select id="ddCategory-' + countQ + '"  class="form-control input-sm m-bot5">' +
                  '      <option>--Select--</option>' +
                   ' </select></td>' +

              '<td > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%">  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';

        $("#tblQMDynamic").append(QuestionHTML);
        $("#ddCategory-" + countQ).DDFillData("Category", "0");
        var TxtID = 'txtOption' + countQ;
        //CKEDITOR.replace('textarea-id');


        //  $('#' + TxtID).ckeditor();
        CKEDITOR.replace(TxtID);
        CKEDITOR.instances[TxtID].setData(OptionText);

        $("#ckhIsCorrect-" + countQ).prop('checked', IsCorrect);




    }

    else if (QTypeVal == 2) {
        QuestionHTML = '<tr id="tr-' + countQ + '">                                                                                                        ' +
                '     <td >                                                                                  ' +
                '          <input id="btn-' + countQ + '" class="btn-success" type="button" value="Option " /><input id="btnNum-' + countQ + '"           ' +
                '              class="btn-success" type="button" value="#' + (countQ) + '" />                                                  ' +
                '      </td>                                                                                                    ' +
                '      <td >                                                                                  ' +
                '          <textarea class="form-control ckeditor" name="txtOption' + countQ + '" id="txtOption' + countQ + '" style="display: none; width: 20px" name="adad"               ' +
                '              rows="1"></textarea>                                                                             ' +
                '      </td>                                                                                                    ' +
                '      <td >                                                                                  ' +
                '          <input id="ckhIsCorrect-' + countQ + '" class="checkbox form-control" type="checkbox" />                                   ' +
                '      </td>                                                                                                    ' +
                               '<td style="width: 3%;display:none">  ' +
                  '                      <select id="ddCategory-' + countQ + '"  class="form-control input-sm m-bot5">' +
                  '      <option>--Select--</option>' +
                   ' </select></td>' +

              '<td > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%">  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';

        $("#tblQMDynamic").append(QuestionHTML);
        $("#ddCategory-" + countQ).DDFillData("Category", "0");

        var TxtID = 'txtOption' + countQ;
        //CKEDITOR.replace('textarea-id');


        //  $('#' + TxtID).ckeditor();
        CKEDITOR.replace(TxtID);
        CKEDITOR.instances[TxtID].setData(OptionText);

        $("#ckhIsCorrect-" + countQ).prop('checked', IsCorrect);


    }

    else if (QTypeVal == 3) {
        QuestionHTML = '<tr id="tr-' + countQ + '">                                                                                                        ' +
                '     <td >                                                                                  ' +
                '          <input id="btn-' + countQ + '" class="btn-success" type="button" value="Option " /><input id="btnNum-' + countQ + '"           ' +
                '              class="btn-success" type="button" value="#' + (countQ) + '" />                                                  ' +
                '      </td>                                                                                                    ' +
                '      <td >                                                                                  ' +
                '          <textarea class="form-control ckeditor" name="txtOption' + countQ + '" id="txtOption' + countQ + '" style="display: none; width: 20px" name="adad"               ' +
                '              rows="1"></textarea>                                                                             ' +
                '      </td>                                                                                                    ' +
                '      <td style="display:none">                                                                                  ' +
                '          <input id="ckhIsCorrect-' + countQ + '" class="btn-success" type="checkbox" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%;display:none">  ' +
                  '                      <select id="ddCategory-' + countQ + '"  class="form-control input-sm m-bot5">' +
                  '      <option>--Select--</option>' +
                   ' </select></td>' +

              '<td > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%">  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';



        $("#colIsCorrect").hide();
        $("#tblQMDynamic").append(QuestionHTML);
        var TxtID = 'txtOption' + countQ;
        //CKEDITOR.replace('textarea-id');

        $("#ddCategory-" + countQ).DDFillData("Category", "0");

        //  $('#' + TxtID).ckeditor();
        CKEDITOR.replace(TxtID);
        CKEDITOR.instances[TxtID].setData(OptionText);

        //$("#ckhIsCorrect-" + countQ).prop('checked', IsCorrect);    

    }
    else if (QTypeVal == 4) {
       // alert("This type is in under development");
    }
    else if (QTypeVal == 5) {
        QuestionHTML = '<tr id="tr-' + countQ + '">                                                                                                        ' +
                '     <td >                                                                                  ' +
                '          <input id="btn-' + countQ + '" class="btn-success" type="button" value="Option " /><input id="btnNum-' + countQ + '"           ' +
                '              class="btn-success" type="button" value="#' + (countQ) + '" />                                                  ' +
                '      </td>                                                                                                    ' +
                '      <td >                                                                                  ' +
                '          <textarea class="form-control ckeditor" name="txtOption' + countQ + '" id="txtOption' + countQ + '" style="display: none; width: 20px"                ' +
                '              rows="1"></textarea>                                                                             ' +
                '      </td>                                                                                                    ' +
                '      <td >                                                                                  ' +
                '          <textarea class="form-control ckeditor" name="txtOptionR' + countQ + '" id="txtOptionR' + countQ + '" style="display: none; width: 20px"                ' +
                '              rows="1"></textarea>                                                                             ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%;display:none">  ' +
                  '                      <select id="ddCategory-' + countQ + '"  class="form-control input-sm m-bot5">' +
                  '      <option>--Select--</option>' +
                   ' </select></td>' +

             '<td > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%">  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';



        $("#colOption").css('width', "38%");
        $("#colIsCorrect").css('width', "38%");
        $("#colOption").html("Mapping Column Left");
        $("#colIsCorrect").html("Mapping Column Right");
        $("#tblQMDynamic").append(QuestionHTML);
        var TxtID = 'txtOption' + countQ;
        var TxtIDR = 'txtOptionR' + countQ;
        $("#ddCategory-" + countQ).DDFillData("Category", "0");

        //CKEDITOR.replace('textarea-id');


        //  $('#' + TxtID).ckeditor();
        CKEDITOR.replace(TxtID);
        CKEDITOR.replace(TxtIDR);
        CKEDITOR.instances[TxtID].setData(OptionText);

        CKEDITOR.instances[TxtIDR].setData(OptionTextRight);



    }



    $(".cke_top").hide();
    $(".cke_bottom").hide();
    $("#btnHideToolBar").hide();
    $("#btnShowToolBar").show();


}


/**********************************/
function FillForUpdate(QM_ID) {
    var HeaderHTML = getDefaultHeader();
    $("#tblQMDynamic").append(HeaderHTML);

    InputXMLParam = "<Root><QMMaster><QM_ID>" + QM_ID + "</QM_ID></QMMaster></Root>";
    $.ajax({
        type: "POST",
        url: PagePath + "Select_QuestionDetails_FillForUpdate", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);

                var QM_ID, Topic_ID, QuestionTypeID, QuestionText, IsActive, SortOrder, Explanation, Marks, CategoryID;
                QM_ID = obj.Table[0].QM_ID;
                Topic_ID = obj.Table[0].Topic_ID;
                QuestionTypeID = obj.Table[0].QuestionTypeID;
                QuestionText = obj.Table[0].QuestionText;
                IsActive = obj.Table[0].IsActive;
                SortOrder = obj.Table[0].SortOrder;
                Explanation = obj.Table[0].Explanation;
                Marks = obj.Table[0].Marks;
                CategoryID = obj.Table[0].CategoryID;

                $('#ddQuestionType').val(QuestionTypeID);

                $('#hdn_QM_ID').val(QM_ID);
                $("#txtMarks").val(Marks);
                $("#ddCategory").val(CategoryID);

                CKEDITOR.instances['txtQuestion'].setData(QuestionText);
                CKEDITOR.instances['txtExplanation'].setData(Explanation);


                //$("#tblQMListBody").empty();

                for (i = 0; i < obj.Table1.length; i++) {
                    //if (Qtype === 1) {
                    var QMOD_ID, OptionText, OptionTextRight, IsCorrect, isCorrectMappedID, IsActive, SortOrder;
                    QMOD_ID = obj.Table1[i].QMOD_ID;
                    OptionText = obj.Table1[i].OptionText;
                    OptionTextRight = obj.Table1[i].OptionTextRight;
                    IsCorrect = obj.Table1[i].IsCorrect;
                    isCorrectMappedID = obj.Table1[i].isCorrectMappedID;
                    SortOrder = obj.Table1[i].SortOrder;
                    IsActive = obj.Table1[i].IsActive;

                    GetRowOnEdit(QMOD_ID, OptionText, OptionTextRight, IsCorrect, isCorrectMappedID, IsActive, SortOrder)


                    $(".cke_top").hide();
                    $(".cke_bottom").hide();
                    $("#btnHideToolBar").hide();
                    $("#btnShowToolBar").show();


                }

            }
        },
        failure: function (msg) {
            alert(msg);
        }
    });



}



function Delete_QM(QM_ID) {
    if (confirm("Do you want to delete ?")) {
        var InputXMLParam = '<QM><QMMaster><QM_ID>' + QM_ID + '</QM_ID><Operation>delete</Operation></QMMaster></QM>';
        $.ajax({
            type: "POST",
            url: PagePath + "InsertBulkData", // Location of the service 
            data: "{inXML :'" + InputXMLParam + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {

                Select_TopicWise_Questions_Details(GlobalTopicID);
                alert("Data has been Deleted successfully");
            },
            failure: function (msg) {
                alert(msg);
            }
        });


    }

}

jQuery.fn.FillCategory = function (Text, setVal, SubjectText) {
    var ddl = this;
    this.empty();
    var inXML = '<Root><QMMaster><Type>' + Text + '</Type><SelectedValue>' + SubjectText + '</SelectedValue></QMMaster></Root>';
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
                $(ddl).append($("<option></option>").val(0).html('--Select--'));
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