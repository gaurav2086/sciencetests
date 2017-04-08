<%@ Page Title="" Language="C#" MasterPageFile="~/OnlinePortal/MasterPage/mstOnlinePortal.Master"
    AutoEventWireup="true" CodeBehind="frmReport.aspx.cs" Inherits="QuestionBank.Online.OnlinePortal.Pages.frmReport" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="../CommonFiles/css/calenderstyle.css" rel="stylesheet" type="text/css" />
   
    <link rel="stylesheet" type="text/css" href="../CommonFiles/DragablePlugin/jquery.nestable.css" />
  <%--  <script src="../CommonFiles/js/jquery.canvasjs.min.js" type="text/javascript"></script>--%>
    <script src="../CommonFiles/js/ChartLoader.js" type="text/javascript"></script>
       <style type="text/css">
           .panel > .panel-heading {
            position: relative;
            padding: 15px;
            }
            .panel-title > a.collapsed:after {
            content: '+';
           
            position: absolute;
            margin-top:-25px;
            left:7px;
            }

            .panel-title > a:after {
             content: '-';
            position: absolute;
             margin-top:-25px;
              left: 7px;

            }
        
            .spacing-table {
     
                border-collapse: separate;
                border-spacing: 0 5px; /* this is the ultimate fix */
            }
    .loading
        {
        display: none;
  
        position: fixed;
        top: 50%;
        left: 50%;
        background:no-repeat center;
        text-align:center;
        padding:10px;
    
        margin-left: -50px;
        margin-top: -50px;
        z-index:2;
   
        }

       </style>
       

    
     
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="breadcrumb">
        <div class="container">
            <div class="linkheading">
                REPORT</div>
        </div>
    </div>
    <input id="hhdDisplayedCount" type="hidden" value="1" />
    <input id="hhdTotalCount" type="hidden" value="1" />
    <!-- Breadcrumb End Here -->
    <!-- Middle Start Here -->
    <div class="Question_Container">
        <div id="DivNonRegMsg" style="visibility:hidden">
            <br />
            <br />
            <center>
                <span style='color: #00adef; font-size: 20px'>To view Your Report.Please Register with
                    us.</span></center>
            <br />
            <br />
        </div>
        <div id="DivReportSection" style="visibility:hidden">
            <div class="container">
                <p>
                    &nbsp;</p>
                <div class="row">
                    <div class="col-xs-6 blue20px">
                        Usage Details</div>
                    <div class="col-xs-6" style="text-align: right;">
                        <%--<a href="progress.html">Progress & Improvement</a>--%></div>
                </div>
                <br>
                <div class="col-md-12 topicbox">
                    <div class="black20px">
                        <label id="lblusername1">
                        </label>
                        &nbsp;has...
                    </div>
                    <br>
                    <br>
                    <div>
                    
                        <div class="col-sm-3 text-center">
                            <div class="iconbox">
                                <div>
                                     <img src="../CommonFiles/img/answered.jpg" width="58" height="58" alt="" /></div>
                                <div>
                                    Answered</div>
                                <div class="blue40px">
                                    <label id="lblQuestion">0
                                </label></div>
                                <div>
                                    Questions</div>
                            </div>
                        </div>
                        <div class="col-sm-3 text-center">
                         <div class="iconbox">
                            <div>
                                <img src="../CommonFiles/img/spent.jpg" width="58" height="58" alt="" /></div>
                            <div>
                                Spent</div>
                            <div>
                                (Under Construction..)</div>
                            <div>
                                Practising</div>
                        </div>
                        </div>
                        <div class="col-sm-3 text-center">
                        <div class="iconbox">
                            <div>
                                <img src="../CommonFiles/img/progress.jpg" width="58" height="58" alt="" /></div>
                            <div>
                                Total Topic</div>
                            <div class="blue40px">
                                <label id="lblTopic">0
                                </label>
                            </div>
                            
                        </div>
                        </div>
                         
                         <div class="col-sm-3 text-center">
                         <div class="iconbox">
                            <div>
                            <div><img src="../CommonFiles/img/outof.jpg" width="58" height="58"  alt=""/></div>
                                </div>
                            <div>

                              Obtained   Marks</div>
                            <div class="blue40px">
                                <label id="lblobtanmarks">0</label>
                                </div>
                                <div>
                                 out of &nbsp;<label id="lbltotalmarks">0</label></div>
                            </div>
                        </div>
                        </div>
                        <p>
                            &nbsp;</p>
                  
                    <hr />
                    <div>
                       
         <%-- <div class="col-md-4 black20px">Practice by Category<br>
            <div class="text15black">peichart here</div>
          </div>--%>
          <div class="col-md-12 black20px"><a  title="Click here to show your chart" id="ViewGraph" href="javascript:;"  ><span class="black20px"> Practice by Day</span></a></div>  <br/><br />
            <div   id="DivGraph" style="width: 900px; height: 500px;"></div>
         
        </div>
                       
                   
                </div>
                <p>
                    &nbsp;</p>
                <div class="blue20px">
                    Practice sessions and skills</div>
                <br>
                <br>
                
               <%-- <div class="topicbox table-responsive" id="DivReport">
                    <div class="row" style="margin-left:100px">
                        <label class="control-label">
                            From Date
                        </label>
                        &nbsp;&nbsp;
                        <input type="text" id="txtfrmDate" />  &nbsp;&nbsp;&nbsp;&nbsp;
                        <label class="control-label">
                            To Date
                        </label>&nbsp;&nbsp;
                        <input type="text" id="txttoDate" />&nbsp;&nbsp;
                         <input id="btnSearch" type="button" class="btn btn-primary" value="Search"/>
                    </div>
                 <div id="Loader" class="loading">
               <center><img src="../CommonFiles/img/loading.gif" alt="#" /></center>
                </div>
                <table  class="panel-group spacing-table" id="DivHeadingAccord" style="width:100%">
               
                <thead>
                <tr><th></th></tr></thead>
                </table>
               
                  
         
                 
                
            </div>--%>
             <div class="topicbox table-responsive">
        <table class="table">
          <tr>
            <td style="background-color:#e3e3e3;"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr >
                <td >
                  <div class="row" style="margin-left:100px;">
                        <label class="control-label">
                            From Date
                        </label>
                        &nbsp;&nbsp;
                        <input type="text" id="txtfrmDate" />  &nbsp;&nbsp;&nbsp;&nbsp;
                        <label class="control-label">
                            To Date
                        </label>&nbsp;&nbsp;
                        <input type="text" id="txttoDate" />&nbsp;&nbsp;
                         <input id="btnSearch" type="button" class="btn btn-primary" value="Search"/>
                         
                    </div>
                    </td>
                </tr>
              </table></td>
          </tr>
          <tr>
            <td ></td>
          </tr>
          <tr>
            <td>
             <table  class="panel-group spacing-table" id="DivHeadingAccord" style="width:100%">
               
                <thead>
                <tr><th></th></tr></thead>
                </table>
            </td>
          </tr>
         
          
          <tr>
            <td class="showmore"><a href="#">Show More</a></td>
          </tr>
        </table>
      </div>
        </div>
        </div>
        <p>
            &nbsp;</p>
        <div class="container">
            <div class="clearfix mosaicflow">
            </div>
        </div>
    </div>
   
   
    <script src="../CommonFiles/js/jquery.dataTables.js" type="text/javascript"></script>
    <link href="../CommonFiles/css/demo_table.css" rel="stylesheet" type="text/css" />
     <script src="../CommonFiles/js/zebra_datepicker.js" type="text/javascript"></script>
    <script src='<%= ResolveUrl("../CommonFiles/OnlinePortalJS/Report/Report.js")%>' type="text/javascript"></script>
</asp:Content>
