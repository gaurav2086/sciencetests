<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="frmQM.aspx.cs" Inherits="QuestionBank.Online.Admin.frmQM" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%--<script src="/DesignStuff/js/jquery.tagsinput.js" type="text/javascript"></script>
    --%>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">
    <div class="row">

        <input type="hidden" id="CountQuestion" value="0" />
        <div class="col-lg-12">
            <section class="panel">
                        <input id="btnListQuestions" type="button" class="btn-success" value="Add Questions" />
                      
                        <input id="btnAddQuestions" type="button"  class="btn-success" value="Display List" />
          
                        <%--<input id="btnSingleChoice1-100" type="button"  class="btn-success" value="Test Call" />
                        
                        <div id="TestDynamic">
                        
                        </div>
          --%>

                     <div id="divQMList">
                        <div style="overflow: auto">
                            <table class="table table-bordered table-hover table-condensed " id="tblQMList">
                                <thead>
                                    <tr>
                                        <th style="width: 8%; text-align: center;">
                                            Qualification
                                        </th>
                                        <th style="width: 8%; text-align: center;">
                                            Exam Board
                                        </th>
                                        <th style="width: 8%; text-align: center;">
                                            Subject
                                        </th>
                                        <th style="width: 10%; text-align: center;">
                                            Unit
                                        </th>
                                        <th style="width: 18%; text-align: center;">
                                            Topic
                                        </th>
                                        <th style="width: 10%; text-align: center;">
                                            #Single Choice
                                        </th>
                                        <th style="width: 10%; text-align: center;">
                                            #Multi Choice                                        </th>
                                        <th style="width: 10%; text-align: center;">
                                            #Fill In The Blank                                        </th>
                                        <th style="width: 10%; text-align: center;">
                                            #Map The Column                                        </th>
                                 
                                    </tr>
                                </thead>
                                
                            </table>
                        </div>
                        <div class="row-fluid">
                            <div class="span6">
                                <div class="dataTables_info" id="pagination_info">
                                </div>
                            </div>
                            <input id="HidId" type="hidden" />
                        </div>
                    </div>
         
                       
                          
            <div id="divQMAdd" class="panel-body" style="min-height:400px; display:none;">


             <div class="form-horizontal tasi-form" >
                              <div>

                                  <div class="form-group">
                              
                          <label class="col-sm-1 control-label col-lg-1">Topic</label>

                                      <div class="col-lg-5">
        <select id="ddTopic" class="form-control input-sm m-bot5">
                                              <option>--Select--</option>
                                              </select>
                              </div>

                                <label class="col-sm-1 control-label col-lg-1">Type</label>

                                      <div class="col-lg-5">
        <select id="ddQuestionType" class="form-control input-sm m-bot5">
                                              </select>
                              </div>

                              </div>

                              </div>
                              <div id="DivAllQuestionsEdit" style="padding-left:10px;padding-right:20px;padding-bottom:20px; -moz-box-shadow:inset 10 10px #000000;-webkit-box-shadow: inset 0 0 10px #000000;box-shadow:inset 0 0 10px #000000;">
                              </div>
                              <div id="DivAllQuestions">
                              
                              
                               </div>
                              
                                  
                                  </div>
           
           
                                       <div class="col-sm-10">
           
     
            
            
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
    <textarea class="form-control ckeditor" name="adad" rows="6"></textarea>
    <script src="../CommonFiles/page-js/QM.js" type="text/javascript"></script>
    <script src="/DesignStuff/assets/ckeditor/ckeditor.js"></script>
    <script type="text/javascript">
        //                $('#txtOptions1').tokenize();
        //        $('#txttest').tokenize();
        //

        function load_js() {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '/DesignStuff/assets/ckeditor/ckeditor.js';
            head.appendChild(script);
        }
       

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
