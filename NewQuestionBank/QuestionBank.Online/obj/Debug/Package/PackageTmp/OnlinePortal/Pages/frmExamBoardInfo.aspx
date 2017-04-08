<%@ Page Title="" Language="C#" MasterPageFile="~/OnlinePortal/MasterPage/mstOnlinePortal.Master"
    AutoEventWireup="true" CodeBehind="frmExamBoardInfo.aspx.cs" Inherits="QuestionBank.Online.OnlinePortal.Pages.frmQualification" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" type="text/css" href="../CommonFiles/DragablePlugin/jquery.nestable.css" />
    <!--JS For Flip Clock--->
    <link href="../CommonFiles/css/flipclock.css" rel="stylesheet" type="text/css" />
    <script src='<%= ResolveUrl("../CommonFiles/js/flipclock.js")%>' type="text/javascript"></script>
    <style type="text/css">
        .correct
        {
            background-color: #fcfff5;
            border: 1px solid #8cc713;
            border-radius: 2px;
            box-shadow: -1px 1px 6px 0px rgba(81, 116, 25, 0.49);
            display: inline-block;
            height: 150px;
          width:250px;
            padding: 0 30px;
            position: relative;
        }
        
        .btn:hover::before
        {
            position: absolute;
            border: 1px solid black;
            background: Red;
        }
        .correct1
        {
          
         font: bold 30px "Trebuchet MS", Verdana, arial, sans-serif;
       
        position:relative;
         color: #709a00;
        

        }
        .dd-list1 {
  display: block; 
    position: relative;
    margin: 3px;
    padding: 3px;
    list-style: none;
    width:150px;
}
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <!-- Breadcrumb Start Here -->
    <div class="breadcrumb">
        <div class="container">
            <div id="Divbreadcrumb" class="linkheading">
            </div>
        </div>
    </div>
    <!-- Breadcrumb End Here -->
    <!-- Middle Start Here -->
    <div id="DivSubEXamUnit">
        <div class="Qualifi_Container">
            <div id="Qualification">
                <div class="container">
                    <div id="QualificationDiv" class="row">
                    </div>
                </div>
            </div>
            <div id="ExamBoard">
                <div class="container">
                    <div id="ExamBoardDiv" class="row">
                    </div>
                    <div id="ExamBoardDiv2" class="row rowmargin">
                    </div>
                </div>
            </div>
            <div id="Subject">
                <div class="container">
                    <div class="row" id="SubjectDiv">
                    </div>
                    <div class="row rowmargin" id="SubjectDiv2">
                    </div>
                </div>
            </div>
            <div id="Category">
                <div class="container">
                    <div class="row rowmargin" id="DivCategory">
                    </div>
                </div>
            </div>
            <div id="DivNocategory" style="visibility: hidden">
                <center>
                    <span style='color: #00adef; font-size: 18px'>Category not Available for this subject</span>
                </center>
            </div>
            <div id="Unit">
                <div class="container text15pxblue">
                    Select Unit or Topics.
                </div>
                <div class="container">
                    <div class="row" id="DivUnit">
                    </div>
                    <div class="row rowmargin" id="DivUnit1">
                    </div>
                </div>
            </div>
            <div id="DivNoTopic" style="visibility: hidden">
                <center>
                    <span style='color: #00adef; font-size: 18px'>Topic are not Available for this subject</span>
                </center>
            </div>
            <div id="DivNoExamBoard" style="visibility: hidden">
                <center>
                    <span style='color: #00adef; font-size: 18px'>Exam Board is Not Available for this Qualification</span>
                </center>
            </div>
        </div>
    </div>
    <div id="DivNoQuestion" style="visibility: hidden">
        <center>
            <span style='color: #00adef; font-size: 18px'>No Question Available for this category</span></center>
    </div>
    <div id="QuationsDiv">
        <div class="Question_Container">
            <div class="container">
                <div class="col-sm-8 questionmainbox">
                    <div class="blue20px row" id="Question">
                    </div>
                    <div id="Divfiboptn"></div>
                    <hr id="h1" />
                    <div id="DivMsgNonRegUser" style="visibility: hidden">
                        <span style='color: Red; font-size: 20px'>To Get All Question.Please Register with us.</span>
                    </div>
                    <div id="DivMsgRenewalplan" style="visibility: hidden">
                        <span style='color: Red; font-size: 20px'>Your MembershipPlan is Expired.Please Renew
                            your MembershipPlan</span>
                    </div>
                    <div class="correct" id="DivCorrect" style="visibility: hidden">
                        <h4 class="correct1">
                            Good</h4>
                        <br />
                        <img src="../CommonFiles/img/Correct.png" style="height: 110px; width: 167px; margin-top: -60px" />
                    </div>
                    <div id="AnswerControl">
                    </div>
                    <div id="DivfibQuest">
                
                    
                    </div>

                  <%--  <div id="DivfibQuest1">
                    </div>--%>
                    <div class="questionimg" id="Expalnation">
                    </div>
                    <div class="questionimg" id="QuestionComplete">
                    </div>
                    <hr id="h2" />
                    <div class="submitbtn">
                        <input type="button" id="btnSubmit" class="btn btn-primary " value="SUBMIT"></div>
                    <div class="submitbtn">
                        <input type="button" id="btnGoit" class="btn btn-success" value="Got it"></div>
                </div>
                <div class="col-sm-4 leftshade">
                    <div class="col-xs-12">
                        <div class="row prob_attem_container">
                            <div class="col-xs-9 black13px">
                                Total Questions</div>
                            <div class="col-xs-3">
                                <div class="problems_box">
                                    <label id="lblTotalQuest">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="row prob_attem_container">
                            <div class="col-xs-9 black13px">
                                Question Attempted</div>
                            <div class="col-xs-3">
                                <div class="problems_box">
                                    <label id="lblQAttempt">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="row prob_attem_container">
                            <div class="col-xs-5 black13px">
                                Smart Score</div>
                            <div class="col-xs-2">
                                <div class="score_box">
                                    <label id="lblAttempMarks">
                                    </label>
                                </div>
                            </div>
                            <div class="col-xs-3 black13px">
                                Out of</div>
                            <div class="col-xs-2">
                                <div class="score_box">
                                    <label id="lblTotalMrks">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                  <div class="col-xs-12">
                    <div class="row prob_attem_container">
                        <br />
                        <label id="Timer">
                        </label>
                        <%-- <div  id="Timer"></div>--%>
                        </div>
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
    </div>
    <!--js Start for Show Description--->
    <script src='<%= ResolveUrl("../CommonFiles/js/jquery-ui-1.10.1.custom.min.js")%>'
        type="text/javascript"></script>
    <script src='<%= ResolveUrl("../CommonFiles/js/jquery.nicescroll.js")%>' type="text/javascript"></script>
    <script src='<%= ResolveUrl("../CommonFiles/js/bootstrap.min.js")%>' type="text/javascript"></script>
    <script src='<%= ResolveUrl("../CommonFiles/js/jquery.scrollTo.min.js")%>' type="text/javascript"></script>
    <script src='<%= ResolveUrl("../CommonFiles/OnlinePortalJS/ExamBoard/ExamBoardDesc.js")%>'
        type="text/javascript"></script>
    <!--js End for Show Discription--->
</asp:Content>
