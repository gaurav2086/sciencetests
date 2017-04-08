<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="frmAddEditQM.aspx.cs" Inherits="QuestionBank.Online.Admin.frmAddEditQM" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <script src="../DesignStuff/assets/ckeditor/ckeditor.js" type="text/javascript"></script>
    <script class="include" type="text/javascript" src="/DesignStuff/js/jquery.dcjqaccordion.2.7.js"></script>
    <script src="/DesignStuff/assets/ckeditor/ckeditor.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">
    <div class="row">
        <input type="hidden" id="CountQuestion" value="0" />
        <div class="col-lg-9">
            <section class="panel">
                        <input id="btnListQuestions" type="button" class="btn-success" value="Add Questions" />
                      
                        <input id="btnAddQuestions" type="button"  class="btn-success" value="Display List" />
                        
            <div id="divQMList" class="panel-body" style="min-height:400px;">
            <table id="tblQMList" class="table table-inbox table-hover">
             <thead>
                                                <tr>
                                                    <th>
                                                        Qualification
                                                    </th>
                                               <%--     <th >
                                                        Geo
                                                    </th>--%>
                                                    <th >
                                                        Exam Board
                                                    </th>
                                                    <th >
                                                        Subject
                                                    </th>
                                                    <th >
                                                        Unit
                                                    </th>
                                                    <th >
                                                        Topic
                                                    </th>
                                                    <th>
                                                        Question Type
                                                    </th>
                                                    <th>
                                                        Number of Questions
                                                    </th>
                                                    </tr>
                                            </thead>
                            <tbody>
                              
                              
                                                          
                              
                          </tbody>
                          </table>
            </div>
                          
            <div id="divQMAdd" class="panel-body" style="min-height:400px; display:none;">


             <div class="form-horizontal tasi-form" >
                                  <div class="form-group">
                                      <label class="col-sm-1 control-label col-lg-1" for="inputSuccess">Qualification</label>
                                      <div class="col-lg-5">
        <select id="ddQualification" class="form-control input-sm m-bot5">
                                              <option>--Select--</option>
                                              </select>
                              </div>
                         

                                      <label class="col-sm-1 control-label col-lg-1" >Board</label>
                                      <div class="col-lg-5">
        <select id="ddBoard" class="form-control input-sm m-bot5">
                                              <option>--Select--</option>
                                              </select>
                              </div>
                         

                          <label class="col-sm-1 control-label col-lg-1">Subject</label>
                                      <div class="col-lg-5">
        <select id="ddSubject" class="form-control input-sm m-bot5">
                                              <option>--Select--</option>
                                              </select>
                              </div>
                         
                         
                          <label class="col-sm-1 control-label col-lg-1">Unit</label>
                                      <div class="col-lg-5">
        <select id="ddUnit" class="form-control input-sm m-bot5">
                                              <option>--Select--</option>
                                              </select>
                              </div>


                              
                          <label class="col-sm-2 control-label col-lg-1">Topic</label>

                                      <div class="col-lg-5">
        <select id="ddTopic" class="form-control input-sm m-bot5">
                                              <option>--Select--</option>
                                              </select>
                              </div>

                                <label class="col-sm-2 control-label col-lg-1">Type</label>

                                      <div class="col-lg-5">
        <select id="ddQuestionType" class="form-control input-sm m-bot5">
                                        
                                              </select>
                              </div>

                              </div>
                              
                              <div id="DivAllQuestions">
                              
                              
            <div class="form-group">
                         <br />
                                       
                                                  <label class="col-sm-10 control-label col-sm-10">Question</label>
                                                  <div class="col-sm-10">
                                                      <input type="text" class="form-control" name="txtQuestion" id="txtQuestion" 
                                                      style="visibility: visible; overflow: hidden;"></input>
                                                  </div>
                                                  <label class="col-sm-10 control-label col-sm-10">Options</label>
                                                  <div class="col-sm-10">
                                             
                                                  
                                                  </div>
                                                <label class="col-sm-10 control-label col-sm-10">Answer/Answers</label>
                                                  <div class="col-sm-10">
                                                      <input name="txtAnswers" id="txtAnswers" ></input>
                                                  </div>
          
                                       
                                  </div>
            </div>
                              
                                  
                                  </div>
           
           
                                       <div class="col-sm-10">
           
     <hr />
           
                             <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                  <div class="modal-dialog">
                                      <div class="modal-content">
                                          <div class="modal-header">
                                              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                              <h4 class="modal-title">Modal Tittle</h4>
                                          </div>
                                          <div class="modal-body">

                                              Body goes here...

                                          </div>
                                          <div class="modal-footer">
                                              <button data-dismiss="modal" class="btn btn-default" type="button">Close</button>
                                              <button class="btn btn-success" type="button">Save</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
            
            <a class="btn btn-success" data-toggle="modal" href="#myModal">
                                  Add Question
                              </a>
                                                     <input id="btnmore" style="display:none" class="btn-success"  type="button" value="Add Questions" />
                                                     <input id="btnReset" class="btn-success"  type="button" value="Reset" style="display:none" />
                                               
                                                  </div>
     
     
                                       <div class="col-sm-10">
     
     <hr />
           
                                                          <input id="btnSubmit" class="btn-send"  type="button" value="Submit" style="display:none"  />
                                                                                                    
                                                  </div>
     


                                  
                   </div>


        </section>
        </div>
    </div>
    <div id="divtooltips" style='position: absolute; display: none;' class="errortip">
    </div>
    <script src="../CommonFiles/page-js/QMAddEdit.js" type="text/javascript"></script>
    <script src="../CommonFiles/page-js/AutoGrow.js" type="text/javascript"></script>
    <script type="text/javascript">
        //                $('#txtOptions1').tokenize();
        //        $('#txttest').tokenize();
        //        
        
    </script>
    <style type="text/css">
        #close
        {
            display: block;
            float: right;
            padding-right: 10px;
            cursor: pointer;
        }
    </style>
</asp:Content>
