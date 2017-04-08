<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="frmQMNew.aspx.cs" Inherits="QuestionBank.Online.Admin.frmQMNew" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <script src='<%= ResolveUrl("../DesignStuff/assets/ckeditor/ckeditor.js")%>' type="text/javascript"></script>
    <script src='<%= ResolveUrl("../CommonFiles/page-js/AdvanceSearch.js")%>' type="text/javascript"></script>
    <style type="text/css">
        .highlightme
        {
            background-color: #DBFDBF;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">
    <div class="col-lg-12">
        <div class="modal fade" style="width: 100%" id="myModal" tabindex="-1" role="dialog"
            data-backdrop="static" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" style="width: 90%">
                <%--class="modal-dialog"--%>
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            &times;</button>
                        <h4 class="modal-title">
                            Add Question</h4>
                    </div>
                    <div class="modal-body">
                        <table width="100%">
                            <tr>
                                <td colspan="2">
                                    <div class="form-group">
                                        <div class="co-fluid">
                                            <label class="col-sm-2 control-label">
                                                Qualification</label>
                                            <div class="col-lg-3">
                                                <label id="lblmodal-Qualification">
                                                </label>
                                            </div>
                                            <label class="col-sm-2 control-label">
                                                Exam Board</label>
                                            <div class="col-lg-3">
                                                <label id="lblmodal-Board">
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <div class="form-group">
                                        <div class="co-fluid">
                                            <label class="col-sm-2 control-label">
                                                Subject</label>
                                            <div class="col-lg-3">
                                                <label id="lblmodal-Subject">
                                                </label>
                                            </div>
                                            <label class="col-sm-2 control-label">
                                                Unit</label>
                                            <div class="col-lg-3">
                                                <label id="lblmodal-Unit">
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <div class="form-group">
                                        <div class="co-fluid">
                                            <label class="col-sm-2 control-label">
                                                Topic</label>
                                            <div class="col-lg-3">
                                                <label id="lblmodal-Topic">
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                </td>
                                <td>
                                    <span style="margin-left:899px"><input id="btnClone" class="btn-success" type="button" value="Clone" /></span>
                                    <label style="font-size: 25px; color: Navy" id="lblClonemsg">
                                        Copied..!</label>
                                    <input type="hidden" id="hdnClone" value="No" />
                                </td>
                            </tr>
                            <tr align="right">
                                <td colspan="2">
                                    <input id="btnHideToolBar" class="btn-success" style="display: none" type="button"
                                        value="Hide ToolBar" />
                                    <input id="btnShowToolBar" class="btn-success" type="button" value="Show ToolBar" />
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 13%">
                                    Question
                                </td>
                                <td style="width: 83%">
                                    <textarea class="form-control" id="txtQuestion" name="adad" rows="1"></textarea>
                                </td>
                            </tr>
                             <tr id="trFillinblank">
                                <td style="width: 7%">
                                   No of Option
                                </td>
                                <td style="width: 42%">
                                    <input type="text" value="0" class="form-control input-sm" id="txtnoofoptn" />
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 13%">
                                    Explanation
                                </td>
                                <td style="width: 83%">
                                    <textarea class="form-control ckeditor" id="txtExplanation" name="adad" rows="1"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 7%">
                                    Marks
                                </td>
                                <td style="width: 42%">
                                    <input type="text" value="1" class="form-control input-sm" id="txtMarks" />
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 7%">
                                    Category
                                </td>
                                <td style="width: 42%">
                                    <select multiple="multiple" style="height: 70px; width: 80%" id="ddCategory">
                                        <option>--Select--</option>
                                    </select>
                                    <%-- <select id="ddCategory" multiple="multiple" style="width: 80%">
                                        <option>--Select--</option>
                                    </select>--%>
                                </td>
                            </tr>
                            <tr id="trCrossword">
                                <td style="width: 7%">
                                    Matrix (Number*Number)
                                </td>
                                <td style="width: 42%">
                                    <input type="text" value="0" class="form-control input-sm" id="txtMatrix" />
                                </td>
                            </tr>
                            

                            <tr>
                                <td colspan="2">
                                    <label id="lblmatrixalert" style="font-size: 15px; color: Red">
                                        To create Matrix enter value less than 20</label>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <hr />
                                </td>
                            </tr>
                        </table>
                        <div id="DivCrossWord">
                            <%--DivAllQuestions--%>
                        </div>
                        <table class="display table table-bordered " width="100%" id="tblQMDynamic">
                            <thead id="tblQMDynamicHead">
                                <%--  <tr class="btn-danger">
                                    <th style="width: 13%">
                                        #
                                    </th>
                                    <th id="colOption" style="width: 65%">
                                        Option DESC
                                    </th>
                                    <th id="colIsCorrect" style="width: 3%">
                                        IsCorrect
                                    </th>
                                    <th style="width: 0%; display: none">
                                        Category
                                    </th>
                                    <th style="width: 5%">
                                        Reorder
                                    </th>
                                    <th style="width: 3%">
                                        Add New
                                    </th>
                                    <th style="width: 3%">
                                        Remove
                                    </th>
                                </tr>
                                <tr>
                                    <td colspan="6">
                                        <hr />
                                    </td>
                                </tr>--%>
                            </thead>
                            <tbody id="tblQMDynamicBody">
                                <%--<tr id="tr-0">
                                    <td style="width: 13%">
                                        <input id="btn-0" class="btn-success" type="button" value="Option" /><input id="btnNum-0"
                                            class="btn-success" type="button" value="#1" />
                                    </td>
                                    <td style="width: 72%">
                                        <textarea id="txtOption0" class="form-control ckeditor" style="display: none; width: 20px"
                                            name="txtOption0" rows="1"></textarea>
                                    </td>
                                    <td style="width: 3%">
                                        <input id="ckhIsCorrect-0" class="btn-success" type="checkbox" value="+" />
                                    </td>
                                    <td style="width: 5%">
                                        <input id="btnUp-0" class="btn-warning" type="button" value="U" /><input id="btnDown-0"
                                            class="btn-warning" type="button" value="D" />
                                    </td>
                                    <td style="width: 3%">
                                        <input id="btnAddOption-0" class="btn-success" type="button" value="+" />
                                    </td>
                                    <td style="width: 3%">
                                        <input id="btnRemove-0" class="btn-danger" type="button" value="X" />
                                        <input id="IsDeleted-0" class="btn-danger" type="hidden" value="0" />
                                    </td>
                                </tr>--%>
                            </tbody>
                        </table>
                        <div id="DivAllQuestions">
                            <%--DivAllQuestions--%>
                            
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button id="btnAlert" style="display: none" class="btn btn-default" type="button">
                            Alert</button>
                        <button data-dismiss="modal" class="btn btn-default" type="button">
                            Close</button>
                        <button class="btn btn-success" id="BtnSave" type="button">
                            Save & Add New</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="divQMList">
            <div class="form-group">
                <input type="hidden" id="CountQuestion" value="0" />
                <input type="hidden" id="hdn_QM_ID" value="0" />
                <div class="co-fluid">
                    <label class="col-sm-2 control-label col-lg-1">
                        Qualification</label>
                    <div class="col-lg-5">
                        <label id="lblQualification">
                        </label>
                    </div>
                    <label class="col-sm-2 control-label col-lg-1">
                        Exam Board</label>
                    <div class="col-lg-5">
                        <label id="lblBoard">
                        </label>
                    </div>
                </div>
                <div class="co-fluid">
                    <label class="col-sm-2 control-label col-lg-1">
                        Subject</label>
                    <div class="col-lg-5">
                        <label id="lblSubject">
                        </label>
                    </div>
                    <label class="col-sm-2 control-label col-lg-1">
                        Unit</label>
                    <div class="col-lg-5">
                        <label id="lblUnit">
                        </label>
                    </div>
                </div>
                <div class="co-fluid">
                    <label class="col-sm-2 control-label col-lg-1">
                        Topic</label>
                    <div class="col-lg-5">
                        <select id="ddTopic" class="form-control input-sm m-bot5">
                            <option>--Select--</option>
                        </select>
                    </div>
                    <label class="col-sm-2 control-label col-lg-1">
                        Type</label>
                    <div class="col-lg-5">
                        <select id="ddQuestionType" class="form-control input-sm m-bot5">
                        </select>
                    </div>
                </div>
                <div class="co-fluid">
                    <div class="span6">
                        <a class="btn btn-success" id="btnAddQuestions" data-toggle="modal" id="btnAddQuestions">
                            Add Question </a>
                    </div>
                </div>
                <br />
                <div class="co-fluid">
                    <div class="span6">
                        <a class="btn btn-success" id="btnBack">Back</a>
                    </div>
                </div>
            </div>
            <div style="overflow: auto">
                <label>
                    <span id="lblCount" class="badge badge-info"></span>
                </label>
                <table class="table table-bordered table-hover table-condensed " id="tblQMList">
                    <thead>
                        <tr>
                            <th style="width: 7%; text-align: center;">
                                Question No.
                            </th>
                            <th style="width: 15%; text-align: center;">
                                Question
                            </th>
                            <th style="width: 15%; text-align: center;">
                                QuestionType
                            </th>
                            <th style="width: 15%; text-align: center;">
                                Number of Options
                            </th>
                             <th style="width: 15%; text-align: center;">
                               Options
                            </th>
                              <th style="width: 15%; text-align: center;">
                               Right Options
                            </th>
                            <th style="width: 15%; text-align: center;">
                            </th>
                        </tr>
                    </thead>
                    <tbody id="tblQMListBody">
                    </tbody>
                </table>
            </div>
            <div class="row-fluid">
                <div class="span6">
                    <div class="dataTables_info1" id="pagination_info1">
                    </div>
                </div>
                <input id="HidId" type="hidden" />
            </div>
        </div>
        <div id="DivMain">
            <div class="row">
                <div class="col-lg-12">
                    <section class="panel">
            <label>GEO
            </label>
            <select id="Select-GEO" style="width:150px;">
             </select>
             <label>Qualification
            </label>
            <select id="Select-QualificationName" style="width:150px;">
             </select>
             <label>ExamBoard
            </label>
            <select id="Select-ExamBoardName" style="width:150px;">
             </select>
              <label>Subject
            </label>
            <select id="Select-SubjectName" style="width:150px;">
             </select>
             <label>Unit
            </label>
            <select id="Select-UnitName" style="width:150px;">
             </select>
             <input id="btnSearch" type="button" class="btn-success" value="Search" />
            </section>
                </div>
            </div>
            <div style="overflow: auto">
                <label>
                    <span id="lblCount1" class="badge badge-info"></span>
                </label>
                <table class="table table-bordered table-hover table-condensed " style="width: 95%"
                    id="tblMain">
                    <thead>
                        <tr>
                            <th style="width: 7%; text-align: center;">
                                Sr No.
                            </th>
                            <th style="width: 20%; text-align: center;">
                                Qualification
                            </th>
                            <th style="width: 10%; text-align: center;">
                                Exam Board
                            </th>
                            <th style="width: 20%; text-align: center;">
                                Subject
                            </th>
                            <th style="width: 20%; text-align: center;">
                                Unit
                            </th>
                            <th style="width: 30%; text-align: center;">
                                Topic
                            </th>
                            <th style="width:30%; text-align: center;">
                                No of Questions
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="row-fluid">
                <div class="span6">
                    <div class="dataTables_info" id="pagination_info">
                    </div>
                </div>
                <input id="Hidden1" type="hidden" />
            </div>
        </div>
      
          <!--script for this page only-->
        <link href="../css/buttons.dataTables.min.css" rel="stylesheet" type="text/css" />
        <script src="../CommonFiles/ExportButtons/jquery.dataTables.min.js" type="text/javascript"></script>
        <script src="../CommonFiles/ExportButtons/dataTables.buttons.min.js" type="text/javascript"></script>
        <script src="../CommonFiles/ExportButtons/buttons.flash.min.js" type="text/javascript"></script>
        <script src="../CommonFiles/ExportButtons/buttons.html5.min.js" type="text/javascript"></script>
        <script src="../CommonFiles/ExportButtons/buttons.print.min.js" type="text/javascript"></script>
        <script src="../CommonFiles/ExportButtons/jszip.min.js" type="text/javascript"></script>
        <script src="../CommonFiles/ExportButtons/pdfmake.min.js" type="text/javascript"></script>

        <script src='<%= ResolveUrl("../DesignStuff/js/common-scripts.js")%>' type="text/javascript"></script>
       
        <script src='<%= ResolveUrl("../CommonFiles/page-js/QMNew.js")%>' type="text/javascript"></script>
        <script src='<%= ResolveUrl("../PlugIns/jquery.multi-select.js")%>' type="text/javascript"></script>
        <link href='<%= ResolveUrl("../PlugIns/multi-select.css")%>' rel="stylesheet" type="text/css" />
    </div>
</asp:Content>
