var PagePath = GlobalPath + "/Admin/frmQMNew.aspx/";
var GlobalTopicID;
$(document).ready(function () {
    var Imgid = "txtQuestion";
    CKEDITOR.replace(Imgid, { filebrowserImageUploadUrl: '../Handler/ImgUpload.ashx' });

    $('#Select-GEO').html($("<option></option>").val(0).html('--Select--'));
    $('#Select-QualificationName').html($("<option></option>").val(0).html('--Select--'));
    $('#Select-ExamBoardName').html($("<option></option>").val(0).html('--Select--'));
    $('#Select-SubjectName').html($("<option></option>").val(0).html('--Select--'));
    $('#Select-UnitName').html($("<option></option>").val(0).html('--Select--'));
    BindGrid();
    // Hide ToolBar On lOad
    $(".cke_top").hide();
    $(".cke_bottom").hide();
    $("#btnHideToolBar").hide();
    $("#btnShowToolBar").show();
    $("#lblmatrixalert").hide();
    //    my_multi_select1

    //=============================


    $('#txtSearch').keyup(function () {
        var $rows = $('#tblMain tbody tr');
        var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
        $rows.show().filter(function () {
            var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
            return ! ~text.indexOf(val);
        }).hide();

    });


    $("#lblClonemsg").hide();


    $("#btnClone").click(function () {

        $("#lblClonemsg").show();

        $("#lblClonemsg").fadeOut(2400);
        $("#hdnClone").val("Yes");
    });


    $("#divQMList").hide();

    $('#ddTopic').DDFillData('Topic', "0");
    $('#ddQuestionType').DDFillData('QType', "0");




    $("#btnBack").click(function () {
        $("#divQMList").hide();
        $("#DivMain").show();
        $("#tblQMList").empty();


    });

    $("#tblMain").on("dblclick", "[id^='tr_']", function (event) {
        var id = parseInt(((this.id.split('_'))[1]).toString());
        $("#lblQualification").text($(this).find("td")[1].innerHTML);
        $("#lblBoard").text($(this).find("td")[2].innerHTML);
        $("#lblSubject").text($(this).find("td")[3].innerHTML);
        $("#lblUnit").text($(this).find("td")[4].innerHTML);

        $("#lblmodal-Qualification").text($(this).find("td")[1].innerHTML);
        $("#lblmodal-Board").text($(this).find("td")[2].innerHTML);
        $("#lblmodal-Subject").text($(this).find("td")[3].innerHTML);
        $("#lblmodal-Unit").text($(this).find("td")[4].innerHTML);
        $('#ddTopic').val(id).attr("selected", "selected");

        $("#lblmodal-Topic").text($("#ddTopic option:selected").text());

        $("#divQMList").show();
        $("#DivMain").hide();
        //  $("#ddQuestionType").value(id);
        GlobalTopicID = id;
        $('#ddTopic').attr("disabled", "disabled");
        $("#tblQMListBody").empty();
        $("#ddCategory").FillCategory("Category", '', $(this).find("td")[3].innerHTML);
        //$("#ddCategory").tokenize({ displayDropdownOnFocus: true, newElements: false });

        //$('#ddCategory').multiSelect();

        // alert("alert2");
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
        if (QTypeVal == 1 || QTypeVal == 6) {
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

        GetRow(0, '');

        //        $(".cke_top").hide();
        //        $(".cke_bottom").hide();
        //        $("#btnHideToolBar").hide();
        //        $("#btnShowToolBar").show();

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
                    $("#lblClonemsg").hide();
                    $("#hdnClone").val("No");

                    var QTypeVal = $("#ddQuestionType").val();

                    if (QTypeVal == 6) {
                        GetRow(1, 'True');
                        GetRow(1, 'False');

                    }
                    else {
                        GetRow(1, '');
                        //GetRow(0, '');
                    }
                    $(".cke_top").hide();
                    $(".cke_bottom").hide();
                    $("#btnHideToolBar").hide();
                    $("#btnShowToolBar").show();
                    $("#tblQMList").empty();


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
            //           
            ClearControl();
            //$('#myModal').modal('hide');

            var QTypeVal = $("#ddQuestionType").val();

            if (QTypeVal == 6) {
                GetRow(1, 'True');
                GetRow(2, 'False');

            }
            else {
                GetRow(1, '');
                GetRow(2, '');
                GetRow(3, '');
                GetRow(4, '');

            }


            //            alert(1);
            //            
            //            alert(2);

            //            CKEDITOR.replace('txtQuestion', { toolbarStartupExpanded: false });
            //            CKEDITOR.replace('txtExplanation', { toolbarStartupExpanded: false });
            $("#txtMarks").val("1");
            $("#txtnoofoptn").val("0");




        }
    });



});

function HideToolBar() {

    $(".cke_top").hide();
    $(".cke_bottom").hide();
    $("#btnHideToolBar").hide();
    $("#btnShowToolBar").show();

}


$("#txtnoofoptn").change(function () {

    var NoofOptn = $("#txtnoofoptn").val()
    var QuestionHTML = "";


    $("#CountQuestion").val('0')

    if (Number(NoofOptn) != "0" || Number(NoofOptn) != "") {


        for (var i = 0; i < NoofOptn; i++) {
            var QuestionHTML = "";
            var countQ = parseInt($("#CountQuestion").val());
            countQ = countQ + 1;
            QuestionHTML = '<tr id="tr-' + countQ + '">                                                                                                     ' +
                '            <td >                                                                                                                           ' +
                '            <input id="btn-' + countQ + '" class="btn-success" type="button" value="Option " /><input id="btnNum-' + countQ + '"            ' +
                '              class="btn-success" type="button" value="#' + (countQ) + '" />                                                  ' +
                '            </td>                                                                                                    ' +
                '            <td >                                                                                  ' +

                '            <input type="text"  class="form-control input-sm" name="txtOption' + countQ + '" id="txtOption' + countQ + '" />  ' +
                '            </td>                                                                                                    ' +
                '            <td >                                                                                  ' +
                '         <select id="ddCorrectOptn-' + countQ + '"  class="form-control input-sm m-bot5">' +
                '         <option value="0">--Select--</option>' +
                '       </select></td>' +

                '           </td>                                                                                                    ' +
                 '         <td style="width: 3%;display:none">  ' +
                  '         <select id="ddCorrectOptn-' + countQ + '"  class="form-control input-sm m-bot5">' +
                  '         <option value="0">--Select--</option>' +
                   '       </select></td>' +

              '<td style="display:none" > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%">  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';
            $("#tblQMDynamic").append(QuestionHTML);

            var filldrp = 0;
            for (var j = 0; j < NoofOptn; j++) {

                filldrp++;
                $("#ddCorrectOptn-" + countQ).append($("<option></option>").val(filldrp).html(filldrp));
            }

            $("#CountQuestion").val(countQ)
        }




    }
    else {
        $('#tblQMDynamic   [id^="tr-"]').each(function () {

            $(this).remove();

        });
    }

});

$('#txtnoofoptn').keyup(function () {

    $('#tblQMDynamic   [id^="tr-"]').each(function () {

        $(this).remove();

    });
   
    

});

$('#txtMatrix').keyup(function () {
    var CountMatrix = $('#txtMatrix').val();
    //if (Number(CountMatrix) != "0" || Number(CountMatrix) != "") {
        $('#tblQMDynamic   [id^="trcw-"]').each(function () {

            $(this).remove();

        });
        $('#tblQMDynamic   [id^="trcwl-"]').each(function () {

            $(this).remove();

        });
   // }

});


$('#txtMatrix').change(function () {



    var CountMatrix = $('#txtMatrix').val()

    if (Number(CountMatrix) > 20) {
        //alert("To create Matrix enter value less than 20");
        $("#lblmatrixalert").show();
        return false;
    }
    $("#lblmatrixalert").hide();
    if (Number(CountMatrix) != "0" || Number(CountMatrix) != "") {
        var FinalCrossword = GetCrossword();
        $("#tblQMDynamic").append(FinalCrossword);
    }
    else {
        $('#tblQMDynamic   [id^="trcw-"]').each(function () {

            $(this).remove();

        });

        $('#tblQMDynamic   [id^="trcwl-"]').each(function () {

            $(this).remove();

        });
    }



});

function GetCrossword() {

    var crossword = "";
    var crossword1= "";
    var lblnum = 0;

    var crossfinal = "";
    var CountMatrix = $('#txtMatrix').val()
    if (CountMatrix != "0" || CountMatrix != "") {

        for (i = 0; i < CountMatrix; i++) {
            crossword1 = "<tr id='trcwl-" + i + "'><td style='height:1px'>"
            crossword = "<tr id='trcw-"+i+"'><td>"
            for (j = 0; j < CountMatrix; j++) {
                lblnum++;

                crossword1 += "<label style='text-align:center;width:40px;'>" + lblnum + "</label>";
                crossword += "<input style='width:40px;text-align: center' type='text' id='txtcw-" + i + '' + j + "' maxlength='1'  ></input>";
            }
            crossword1 += "</td></tr>";
            crossword += "</td></tr>";
            crossfinal += crossword1 + crossword;
        }
      

    }
   //return crossword;
   return crossfinal;

}


function GetRow(Sequence, DefaultValue) {

    //type
    var QTypeVal = $("#ddQuestionType").val();
    if (Sequence == 1) {

        var HeaderHTML = getDefaultHeader(QTypeVal);
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

              '<td style="display:none" > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%">  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';

        $("#tblQMDynamic").append(QuestionHTML);
        //$("#ddCategory-" + countQ).DDFillData("Category", "0");
        var TxtID = 'txtOption' + countQ;
        //CKEDITOR.replace('textarea-id');


        //  $('#' + TxtID).ckeditor();
        //CKEDITOR.replace(TxtID);
        $("#trCrossword").hide();
        $("#trFillinblank").hide();
        CKEDITOR.replace(TxtID, { filebrowserImageUploadUrl: '../Handler/ImgUpload.ashx' });
       

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

              '<td style="display:none"  > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%">  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';

        $("#tblQMDynamic").append(QuestionHTML);
        //$("#ddCategory-" + countQ).DDFillData("Category", "0");

        var TxtID = 'txtOption' + countQ;
        //CKEDITOR.replace('textarea-id');


        //  $('#' + TxtID).ckeditor();
        //CKEDITOR.replace(TxtID);
        $("#trCrossword").hide();
        $("#trFillinblank").hide();
        CKEDITOR.replace(TxtID, { filebrowserImageUploadUrl: '../Handler/ImgUpload.ashx' });
     

    }

    else if (QTypeVal == 3) {

        if (Sequence == 0) {

         
        QuestionHTML = '<tr id="tr-' + countQ + '">                                                                                                     ' +
                '            <td >                                                                                                                           ' +
                '            <input id="btn-' + countQ + '" class="btn-success" type="button" value="Option " /><input id="btnNum-' + countQ + '"            ' +
                '              class="btn-success" type="button" value="#' + (countQ) + '" />                                                  ' +
                '            </td>                                                                                                    ' +
                '            <td >                                                                                  ' +

                '            <input type="text"  class="form-control input-sm" name="txtOption' + countQ + '" id="txtOption' + countQ + '" />  ' +
                '            </td>                                                                                                    ' +
                '            <td >                                                                                  ' +
                '         <select id="ddCorrectOptn-' + countQ + '"  class="form-control input-sm m-bot5">' +
                '         <option value="0">--Select--</option>' +
                '       </select></td>' +

                '           </td>                                                                                                    ' +
                 '         <td style="width: 3%;display:none">  ' +
                  '         <select id="ddCorrectOptn1-' + countQ + '"  class="form-control input-sm m-bot5">' +
                  '         <option value="0">--Select--</option>' +
                   '       </select></td>' +

              '<td style="display:none" > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%">  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';
        $("#tblQMDynamic").append(QuestionHTML);
        var filldrp = 0;

        var NoofOptn = $("#txtnoofoptn").val()
        for (var j = 0; j < NoofOptn; j++) {

            filldrp++;
            $("#ddCorrectOptn-" + countQ).append($("<option></option>").val(filldrp).html(filldrp));
        }
    }

        $("#trCrossword").hide();
        $("#trFillinblank").show();

       
    }
    else if (QTypeVal == 4) {
        $("#trCrossword").show();
        $("#trFillinblank").hide();
       // var dd = GetCrossword();
       
        //alert("This type is in under development");
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

             '<td style="display:none" > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
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
        //$("#ddCategory-" + countQ).DDFillData("Category", "0");
        $("#trCrossword").hide();
        $("#trFillinblank").hide();
        //CKEDITOR.replace('textarea-id');


        //  $('#' + TxtID).ckeditor();
        //CKEDITOR.replace(TxtID);
        CKEDITOR.replace(TxtID, { filebrowserImageUploadUrl: '../Handler/ImgUpload.ashx' });
        CKEDITOR.replace(TxtIDR, { filebrowserImageUploadUrl: '../Handler/ImgUpload.ashx' });
        //CKEDITOR.replace(TxtIDR);
       
    }
    else if (QTypeVal == 6) {

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

              '<td style="display:none" > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td style="display:none" >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%;display:none" >  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';


        $("#tblQMDynamic").append(QuestionHTML);
        //$("#ddCategory-" + countQ).DDFillData("Category", "0");
        var TxtID = 'txtOption' + countQ;
        CKEDITOR.replace(TxtID, { filebrowserImageUploadUrl: '../Handler/ImgUpload.ashx' });
       // CKEDITOR.replace(TxtID);

        CKEDITOR.instances[TxtID].setData(DefaultValue);
        $("#colIsAddNew").hide();
        $("#colIsRemove").hide();
        $("#trCrossword").hide();
        $("#trFillinblank").hide();


    }


    //alert("Code Executed - " + countQ)

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


    //var mCategory = $("#ddCategory").val();
    var mCategory = "";

    $('#ddCategory :selected').each(function (i, selected) {
        mCategory = mCategory + $(selected).val() + ",";
    });

    //alert(mCategory);
    //alert(QM_ID);
    var Marks = $("#txtMarks").val();
    var CloneValue=$("#hdnClone").val();


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
'<Clone>' + CloneValue + '</Clone>'+
'</QMMaster>';

    //alert(QMXML);

    QMXML = QMXML + '<Details>'

    if (Questiontype == 4) {
        var CategoryID = $('#ddCategory-' + i).val();
        var CountMatrix = $('#txtMatrix').val();
        var txtval = ""
        $('#tblQMDynamic  tr [id^="txtcw-"]').each(function () {


            txtval += $(this).val() + ',';

        });
        txtval = txtval.slice(0, -1);
        QMXML = QMXML + ('<QMDetails><QMOD_ID></QMOD_ID>' +
    '<QM_ID></QM_ID>' +
    '<CrosswordText><![CDATA[' + txtval + ']]></CrosswordText>' +
    '<CWMatrixcount>' + CountMatrix + '</CWMatrixcount>' +
    '<IsCorrect>1</IsCorrect><isCorrectMappedID>0</isCorrectMappedID>' +
    '<IsActive>0</IsActive>' +
    '<SortOrder>0</SortOrder><CategoryID>0</CategoryID></QMDetails>');


    }
    else {

        for (i = 1; i <= countLoop; i++) {


            var ISDeleted = $("#IsDeleted-" + i).val();

            if (ISDeleted != "1") {
                if (Questiontype != 3) {
                    var option = CKEDITOR.instances['txtOption' + i].getData();
                    var ckhIsCorrect; //= $('#ckhIsCorrect-' + i).is(':checked'); // $('#ckhIsCorrect-' + i).val();
                    var CategoryID = $('#ddCategory-' + i).val();
                }

                if (Questiontype == 1 || Questiontype == 2 || Questiontype == 6) {
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

                    var OptionText = $("#txtOption" + i).val();
                    var BlankNumber = $("#ddCorrectOptn-" + i).val();
                    var CategoryID = $('#ddCategory-' + i).val();
                    var Noofoption = $("#txtnoofoptn").val();
                    QMXML = QMXML + ('<QMDetails><QMOD_ID></QMOD_ID>' +
    '<QM_ID></QM_ID>' +
    '<OptionText><![CDATA[' + OptionText + ']]></OptionText>' +
    '<isCorrectMappedID>0</isCorrectMappedID>' +
    '<IsActive>0</IsActive>' +
    '<SortOrder>0</SortOrder><CategoryID>' + CategoryID + '</CategoryID><BlankNumber><![CDATA[' + BlankNumber + ']]></BlankNumber><Noofoption><![CDATA[' + Noofoption + ']]></Noofoption></QMDetails>');


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
        if (Questiontype == 4) {
        // alert("This type is in under development");
            $("#ddQuestionType").focus();
            //IsValid = false;

            IsValid = true
        }
        //        if (Questiontype == 6) {
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

            if (Questiontype == 3)
             {
                 var optiontext = $("#txtOption" + i).val();

             }
            else if (Questiontype != 4 && Questiontype != 3 ) {
                var option = CKEDITOR.instances['txtOption' + i].getData();
               
                var ckhIsCorrect = $('#ckhIsCorrect-' + i).is(':checked'); // $('#ckhIsCorrect-' + i).val();

                var ISDeleted = $("#IsDeleted-" + i).val();
            }
            
           

            if (ISDeleted != 1) {

                if (Questiontype == 1 || Questiontype == 2 || Questiontype == 6) {
                    if (option == "") {

                        alert("Must Enter Value in Option " + i);
                        IsValid = false;
                        return IsValid;
                    }

                    if (ckhIsCorrect == true) {
                        flagIsOneSelected = true;
                    }
                }

                if (Questiontype == 3) {
                    flagIsOneSelected = true;

                    if (optiontext == "") {

                        alert("Must Enter Value in Option " + i);
                        IsValid = false;
                        return IsValid;
                    }
                }
                if (Questiontype == 4) {
                    flagIsOneSelected = true;
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


    if (!CKEDITOR.instance || !CKEDITOR.instance['txtQuestion']) {
        CKEDITOR.instances['txtQuestion'].setData("");
    }

    CKEDITOR.instances['txtExplanation'].setData("");
  
    
    $("#txtMarks").val("1");
    $("#ddCategory").val("0");
    $("#txtMatrix").val("0");
    $("#txtnoofoptn").val("0");
    $("#tblQMDynamic").empty();

    //$("#ddCategory").data("tokenize").clear();

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
                var QM_ID, SrNo,Option,WrightOption;
                $("#tblQMList Body").empty();
                for (i = 0; i < obj.Table.length; i++) {
                    //if (Qtype === 1) {

                    //TopicID = obj.Table[i].TopicID;
                    QType = obj.Table[i].QType;
                    QuestionText = obj.Table[i].QuestionText;
                    CountTotal = obj.Table[i].CountTotal;
                    QM_ID = obj.Table[i].QM_ID
                    SrNo = obj.Table[i].SrNo
                    Option = obj.Table[i].Options
                    WrightOption = obj.Table[i].WrightOption

                    var QuestionHTMList = '<tr id="tr-' + QM_ID + '"><td>' + SrNo + '</td><td>' + QuestionText + '</td><td>' + QType + '</td><td>' + CountTotal + "</td><td>" + Option + "</td><td>" + WrightOption + "</td><td><input  onclick='Delete_QM(" + QM_ID + ");' type='button' class='btn-success' value='delete' /></td></tr>";
                    //$.tblQMList.appe
                    $("#tblQMList").append(QuestionHTMList);

                }
                $('#lblCount').html("Total Records : " + obj.Table.length);


            }
           // $('#tblQMList').DataTable(dataExportOptions);
            $('#tblQMList').dataTable({

                "bDestroy": true,
                dom: 'Bfrtip',
                buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ]
                   //"bSort": false
            });



           
        },
        failure: function (msg) {
            alert(msg);
        }
    });


}





//==============================================

function BindGrid() {
    var InputXMLParam = "";
    var XMLParam = "";
    if ($('#Select-GEO').val() != "0") {
        XMLParam = '<GeoId>' + $('#Select-GEO').val() + '</GeoId>';
    }
    if ($('#Select-QualificationName').val() != "0") {
        XMLParam += '<QualificationID>' + $('#Select-QualificationName').val() + '</QualificationID>';
    }
    if ($('#Select-ExamBoardName').val() != "0") {
        XMLParam += '<ExamBoardID>' + $('#Select-ExamBoardName').val() + '</ExamBoardID>';
    }
    if ($('#Select-SubjectName').val() != "0") {
        XMLParam += '<SubjectID>' + $('#Select-SubjectName').val() + '</SubjectID>';
    }
    if ($('#Select-UnitName').val() != "0") {
        XMLParam += '<UnitId>' + $('#Select-UnitName').val() + '</UnitId>';
    }
    InputXMLParam = '<Root>' + XMLParam + '</Root>';
    $.ajax({
        type: "POST",
        url: PagePath + "Select_TopicWise_Questions", // Location of the service 
        data: "{inXML :'" + InputXMLParam + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#tblMain tbody').remove();
           // $("#pagination_info").pagination({ items: 0, itemsOnPage: 10, cssStyle: 'light-theme', TabGrid: 'tblMain' });
            $('#lblCount1').html("Total Records : " + 0);
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                for (i = 0; i < obj.Table.length; i++) {
                    $('#tblMain').append('<tr class="tr" id="tr_' + obj.Table[i].TopicID + '"><td>' + obj.Table[i].RN + '</td><td>' + obj.Table[i].QualificationName + "</td><td>" + obj.Table[i].ExamBoardName + "</td><td>" + obj.Table[i].SubjectName + "</td><td>" + obj.Table[i].UnitName + "</td><td>" + obj.Table[i].Topic + "</td><td>" + obj.Table[i].TotalQuestions + "</td></tr>");

                    //$('#TestDynamic').append("<button id='btnSingleChoice1-" + obj.Table[i].TopicID + "'  style='width:100%' >" + obj.Table[i].TotalSingleChoice + "</button>");
                }
                //$("#pagination_info").pagination({ items: obj.Table.length, itemsOnPage: 10, cssStyle: 'light-theme', TabGrid: 'tblMain' });
                $('#lblCount1').html("Total Records : " + obj.Table.length);
              
            }
            $('#tblMain').dataTable({

                "bDestroy": true
                //"bSort": false
            });
        },
        failure: function (msg) {
            alert(msg);
        }
    });


}


function getDefaultHeader(QTypeVal) {

    var HeaderHTML = "";
    if (QTypeVal == 4) {


        HeaderHTML = '<tr class="btn-danger"><th style="width: 90%"><center>Crosswords</center></th></tr><tr><td colspan="6"></td></tr>'
    }
    else if (QTypeVal == 3) {

        HeaderHTML = ' <tr class="btn-danger">            ' +
    '                  <th style="width: 10%">                             ' +
    '                      #                                               ' +
    '                  </th>                                               ' +
    '                  <th id="colOption" style="width: 50%">              ' +
    '                        Option DESC                                   ' +
    '                  </th>                                               ' +
    '                  <th id="colIsCorrect" style="width: 10%">            ' +
    '                       Select  Blank Number                         ' +
    '                  </th>                                               ' +
    '                  <th style="width: 0%; display: none">               ' +
    '                      Category                                        ' +
    '                  </th>                                               ' +
    '                  <th style="width: 5%;display:none" >                ' +
    '                      Reorder                                         ' +
    '                 </th>                                                ' +
    '                 <th id="colIsAddNew"   style="width: 5%">            ' +
    '                    Add New                                           ' +
    '                 </th>                                                ' +
    '                 <th id="colIsRemove"  style="width: 5%">             ' +
    '                   Remove                                             ' +
    '                </th>                                                 ' +
    '                </tr>                                                 ' +
    '                <tr>                                                  ' +
    '                <td colspan="6">                                      ' +
    '                 <hr />                                               ' +
    '            </td>                                                     ' +
    '        </tr>                                                         '

    }

    else
    {

        HeaderHTML = ' <tr class="btn-danger">            ' +
    '                  <th style="width: 13%">                             ' +
    '                      #                                               ' +
    '                  </th>                                               ' +
    '                  <th id="colOption" style="width: 65%">              ' +
    '                        Option DESC                                   ' +
    '                  </th>                                               ' +
    '                  <th id="colIsCorrect" style="width: 3%">            ' +
    '                        IsCorrect                                     ' +
    '                  </th>                                               ' +
    '                  <th style="width: 0%; display: none">               ' +
    '                      Category                                        ' +
    '                  </th>                                               ' +
    '                  <th style="width: 5%;display:none" >                ' +
    '                      Reorder                                         ' +
    '                 </th>                                                ' +
    '                 <th id="colIsAddNew"   style="width: 3%">            ' +
    '                    Add New                                           ' +
    '                 </th>                                                ' +
    '                 <th id="colIsRemove"  style="width: 3%">             ' +
    '                   Remove                                             ' +
    '                </th>                                                 ' +
    '                </tr>                                                 ' +
    '                <tr>                                                  ' +
    '                <td colspan="6">                                      ' +
    '                 <hr />                                               ' +
    '            </td>                                                     ' +
    '        </tr>                                                         '
    }
   

    return HeaderHTML;

}


/**** Get Row On Edit *****/


function GetRowOnEdit(QMOD_ID, OptionText, OptionTextRight, IsCorrect, isCorrectMappedID, IsActive, SortOrder, Matrixcount, CrosswordText, BlankNumber, NoofOptn) {

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

              '<td style="display:none" > <input  id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%">  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';

        $("#tblQMDynamic").append(QuestionHTML);
      //  $("#ddCategory-" + countQ).DDFillData("Category", "0");
        var TxtID = 'txtOption' + countQ;
        //CKEDITOR.replace('textarea-id');


        //  $('#' + TxtID).ckeditor();
        CKEDITOR.replace(TxtID, { filebrowserImageUploadUrl: '../Handler/ImgUpload.ashx' });
       // CKEDITOR.replace(TxtID);
        CKEDITOR.instances[TxtID].setData(OptionText);

        $("#ckhIsCorrect-" + countQ).prop('checked', IsCorrect);
        $("#trCrossword").hide();
        $("#trFillinblank").hide();




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

              '<td style="display:none" > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%">  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';

        $("#tblQMDynamic").append(QuestionHTML);
       // $("#ddCategory-" + countQ).DDFillData("Category", "0");

        var TxtID = 'txtOption' + countQ;
        //CKEDITOR.replace('textarea-id');


        //  $('#' + TxtID).ckeditor();
        //CKEDITOR.replace(TxtID);
        CKEDITOR.replace(TxtID, { filebrowserImageUploadUrl: '../Handler/ImgUpload.ashx' });
        CKEDITOR.instances[TxtID].setData(OptionText);

        $("#ckhIsCorrect-" + countQ).prop('checked', IsCorrect);
        $("#trCrossword").hide();
        $("#trFillinblank").hide();


    }

    else if (QTypeVal == 3) {


        QuestionHTML = '<tr id="tr-' + countQ + '">                                                                                                     ' +
                '            <td >                                                                                                                           ' +
                '            <input id="btn-' + countQ + '" class="btn-success" type="button" value="Option " /><input id="btnNum-' + countQ + '"            ' +
                '              class="btn-success" type="button" value="#' + (countQ) + '" />                                                  ' +
                '            </td>                                                                                                    ' +
                '            <td >                                                                                  ' +

                '            <input type="text"  class="form-control input-sm" name="txtOption' + countQ + '" id="txtOption' + countQ + '" />  ' +
                '            </td>                                                                                                    ' +
                '            <td >                                                                                  ' +
                '         <select id="ddCorrectOptn-' + countQ + '"  class="form-control input-sm m-bot5">' +
                '         <option value="0">--Select--</option>' +
                '       </select></td>' +

                '           </td>                                                                                                    ' +
                 '         <td style="width: 3%;display:none">  ' +
                  '         <select id="ddCorrectOptn-' + countQ + '"  class="form-control input-sm m-bot5">' +
                  '         <option value="0">--Select--</option>' +
                   '       </select></td>' +

              '<td style="display:none" > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%">  ' +
                  '                      <input id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';
        $("#tblQMDynamic").append(QuestionHTML);


        var filldrp = 0;
        for (var j = 0; j < NoofOptn; j++) {

            filldrp++;
            $("#ddCorrectOptn-" + countQ).append($("<option></option>").val(filldrp).html(filldrp));
        }

        $("#txtOption" + countQ).val(OptionText);
        $("#ddCorrectOptn-" + countQ).val(BlankNumber);

        $("#trCrossword").hide();
        $("#trFillinblank").show();
        //$("#ckhIsCorrect-" + countQ).prop('checked', IsCorrect);    

    }
    else if (QTypeVal == 4) {


      

        var crossword = "";
        var crossword1 = "";
        var crossfinal = "";
        var crosswordIndex= -1;
        var lblnum = 0;
        var CrosswordTextt = CrosswordText.split(",");
       
        if (Matrixcount != "0" || Matrixcount != "") {

            for (i = 0; i < Matrixcount; i++) {
                crossword1 = "<tr id='trcwl-" + i + "'><td style='height:1px'>"
                crossword = "<tr id='trcw-" + i + "'><td>"
                for (j = 0; j < Matrixcount; j++) {
                    crosswordIndex++;
                    lblnum++;
                    crossword1 += "<label style='text-align:center;width:40px;'>" + lblnum + "</label>";
                    crossword += "<input style='width:40px;text-align: center' type='text' id='txtcw-" + i + '' + j + "' maxlength='1' value=" + CrosswordTextt[crosswordIndex] + "></input>";
              
               
                    
                }

                crossword1 += "</td></tr>";
                crossword += "</td></tr>";
                crossfinal += crossword1 + crossword;

            }


        }

        $("#tblQMDynamic").append(crossfinal);
        $("#trFillinblank").hide();

//        alert("This type is in under development");
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

             '<td style="display:none" > <input id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
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
       // $("#ddCategory-" + countQ).DDFillData("Category", "0");

        //CKEDITOR.replace('textarea-id');


        //  $('#' + TxtID).ckeditor();
        //CKEDITOR.replace(TxtID);
        CKEDITOR.replace(TxtID, { filebrowserImageUploadUrl: '../Handler/ImgUpload.ashx' });
        //CKEDITOR.replace(TxtIDR);
        CKEDITOR.replace(TxtIDR, { filebrowserImageUploadUrl: '../Handler/ImgUpload.ashx' });
        CKEDITOR.instances[TxtID].setData(OptionText);

        CKEDITOR.instances[TxtIDR].setData(OptionTextRight);

        $("#trCrossword").hide();
        $("#trFillinblank").hide();

    }
    else if (QTypeVal == 6) {
        //        alert("This type is in under development");
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

              '<td style="display:none" > <input  id="btnUp-' + countQ + '" class="btn-warning"  type="button" value="U" /><input id="btnDown-' + countQ + '" class="btn-warning"  type="button" value="D" /></td>' +
               '      <td style="display:none" >                                                                                  ' +
                '          <input id="btnAddOption-' + countQ + '" class="btn-success" type="button" value="+" />                                   ' +
                '      </td>                                                                                                    ' +
                 '<td style="width: 3%;display:none" >  ' +
                  '                      <input style="display:none"  id="btnRemove-' + countQ + '" class="btn-danger" type="button" value="X" /> ' +
                     '        <input id="IsDeleted-' + countQ + '" class="btn-danger" type="hidden" value="0" />         </td>' +
                '  </tr> ';

        $("#tblQMDynamic").append(QuestionHTML);
       // $("#ddCategory-" + countQ).DDFillData("Category", "0");
        var TxtID = 'txtOption' + countQ;
        //CKEDITOR.replace('textarea-id');


        //  $('#' + TxtID).ckeditor();
        //CKEDITOR.replace(TxtID);
        CKEDITOR.replace(TxtID, { filebrowserImageUploadUrl: '../Handler/ImgUpload.ashx' });
        CKEDITOR.instances[TxtID].setData(OptionText);

        $("#ckhIsCorrect-" + countQ).prop('checked', IsCorrect);
        $("#colIsAddNew").hide();
        $("#colIsRemove").hide();
        $("#trCrossword").hide();
        $("#trFillinblank").hide();

    }



    $(".cke_top").hide();
    $(".cke_bottom").hide();
    $("#btnHideToolBar").hide();
    $("#btnShowToolBar").show();


}


/**********************************/
function FillForUpdate(QM_ID) {

    //var QTypeVal = $("#ddQuestionType").val();
//    var HeaderHTML = getDefaultHeader(QTypeVal);
//    $("#tblQMDynamic").append(HeaderHTML);   

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

                var QM_ID, Topic_ID, QuestionTypeID, QuestionText, IsActive, SortOrder, Explanation, Marks, CategoryID, MatrixCount,NoofOptn;
                QM_ID = obj.Table[0].QM_ID;
                Topic_ID = obj.Table[0].Topic_ID;
                QuestionTypeID = obj.Table[0].QuestionTypeID;
                QuestionText = obj.Table[0].QuestionText;
                IsActive = obj.Table[0].IsActive;
                SortOrder = obj.Table[0].SortOrder;
                Explanation = obj.Table[0].Explanation;
                Marks = obj.Table[0].Marks;
                CategoryID = obj.Table[0].CategoryID;
                MatrixCount = obj.Table1[0].CWMatrixcount;
                NoofOptn = obj.Table1[0].NoofOption;


                var HeaderHTML = getDefaultHeader(QuestionTypeID);
                $("#tblQMDynamic").append(HeaderHTML);
                $("#lblClonemsg").hide();
                $("#hdnClone").val("No");

                $('#ddQuestionType').val(QuestionTypeID);
                
                $('#hdn_QM_ID').val(QM_ID);
                $("#txtMarks").val(Marks);
                $("#txtMatrix").val(MatrixCount);
                $("#txtnoofoptn").val(NoofOptn);

                //CategoryID 

                //$("#ddCategory").val(CategoryID);

                $("#ddCategory > option").each(function () {
                    //  alert(this.text);
                    var AllOptions = CategoryID.toString().split(",");
                    for (var i = 0; i < AllOptions.length; i++) {
                        if (this.value == AllOptions[i]) {
                            this.selected = AllOptions[i];
                            //this.attr("selected", "selected");

                        }

                    }


                    //alert(this.text + ' ' + this.value);
                });
                //$('#ddCategory').multiSelect();



                //                $("#ddCategory").tokenize({ displayDropdownOnFocus: true, newElements: false });



                CKEDITOR.instances['txtQuestion'].setData(QuestionText);
                CKEDITOR.instances['txtExplanation'].setData(Explanation);


                //$("#tblQMListBody").empty();

                for (i = 0; i < obj.Table1.length; i++) {
                    //if (Qtype === 1) {
                    var QMOD_ID, OptionText, OptionTextRight, IsCorrect, isCorrectMappedID, IsActive, SortOrder, CrosswordText, BlankNumber;
                    QMOD_ID = obj.Table1[i].QMOD_ID;
                    OptionText = obj.Table1[i].OptionText;
                    OptionTextRight = obj.Table1[i].OptionTextRight;
                    IsCorrect = obj.Table1[i].IsCorrect;
                    isCorrectMappedID = obj.Table1[i].isCorrectMappedID;
                    SortOrder = obj.Table1[i].SortOrder;
                    IsActive = obj.Table1[i].IsActive;
                    CrosswordText = obj.Table1[i].CrosswordText;
                    BlankNumber = obj.Table1[i].BlankNumber;
                    GetRowOnEdit(QMOD_ID, OptionText, OptionTextRight, IsCorrect, isCorrectMappedID, IsActive, SortOrder, MatrixCount, CrosswordText, BlankNumber,NoofOptn)


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