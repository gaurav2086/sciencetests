<%@ Page Title="Science Tests | Education & Courses" Language="C#" MasterPageFile="~/OnlinePortal/NewMasterPage/newOnlinePortal.Master"
    AutoEventWireup="true" CodeBehind="ExamBoardInfo.aspx.cs" Inherits="QuestionBank.Online.OnlinePortal.NewPages.ExamBoardInfo" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css">
        .questionmainbox {
    padding: 37px 20px 20px 20px;
  
}
.flip-clock-wrapper ul{
	
	width: 41px !important;
}
        .prob_attem_container
        {
         padding-bottom:10px;
            }
        .score_box {
    display: block;
    min-width: 45px;
    margin-right: 10px;
    text-align: center;
    border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 5px 5px 5px 5px;
    -webkit-border-radius: 5px 5px 5px 5px;
    background-color: #7f5799;
    padding: 10px 0px;
    height: 41px;
    vertical-align: middle;
    text-align: center;
    color: #fff;
    font-size: 13px;
    text-decoration: none;
    font-family: 'open_sansregular';
}
        .problems_box {
    display: block;
    min-width: 45px;
    margin-right: -15px;
    text-align: center;
    border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 5px 5px 5px 5px;
    -webkit-border-radius: 5px 5px 5px 5px;
    background-color: #7ea82b;
    padding: 10px 0px;
    height: 41px;
    vertical-align: middle;
    color: #ffffff;
    font-size: 13px;
    text-decoration: none;
    float: right !important;
    font-family: 'open_sansregular';
}
        .subjectcontainer a
        {
            padding: 12px 10px;
            display: block;
            text-decoration: none;
            text-align: center;
            border: 4px solid;
            color: #000;
            font-family: 'open_sanssemibold';
            border-color: transparent;
        }
        
        
        .color1
        {
            background-color: #95dde5;
        }
        
        .color2
        {
            background-color: #95e5b3;
        }
        .color3
        {
            background-color: #c8e595;
        }
        .qualification_box
        {
            background-color: #d3d3d3;
            font-family: 'open_sanslight';
            text-align: center;
            padding: 20px 2px 2px 20px;
        }
        
        
        
        .quali_heading
        {
            font-size: 35px;
            color: #F2184F;
        }
        .quali_desc
        {
            font-size: 14px;
            color: #00adf1;
        }
        .topicSelect
        {
            background-color: #202C45 !important;
            border-right: 6px solid #F2184F !important;
            padding: 5px 5px 5px 15px;
            color: white;
            width: 20%;
            margin-left: 106px;
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
                <div class="container text15pxblue topicSelect">
                    Select Unit or Topics.
                </div>
                <br />
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
                    <div id="Divfiboptn">
                    </div>
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
    <script src='<%= ResolveUrl("../CommonFiles/OnlinePortalJS/ExamBoard/newExamBoardDesc.js")%>'
        type="text/javascript"></script>
    <!--js End for Show Discription--->
</asp:Content>
