<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="usNewMenu.ascx.cs" Inherits="QuestionBank.Online.OnlinePortal.UserControls.usNewMenu" %>
<%--<script src='<%= ResolveUrl("../CommonFiles/OnlinePortalJS/Menu/newMenu.js")%>' type="text/javascript"></script>--%>
<%--<script src="../CommonFiles/OnlinePortalJS/Menu/newMenu.js" type="text/javascript"></script>--%>
<ul class="menuzord-menu" id="MainMenu" >
    <li class="active"><a href="Home.aspx">Home </a></li>
</ul>
<%--
<ul class="menuzord-menu menuzord-indented scrollable" style="max-height: 400px;">
    <li class="scrollable-fix"></li>
    <li><a href="Home.aspx">Home </a></li>
    <li><a id="AllQlnkMenu-1-Qualification-A2" href="ExamBoardInfo.aspx?Type=Qualification">
        Qualification <span class="label label-info">New</span></a><ul class="dropdown">
            <li><a id="QlnkMenu-8-ExamBoard-A2" href="ExamBoardInfo.aspx?QualificationID=8&amp;QualificationName=A2">
                <span>A2</span></a><ul class="dropdown">
                    <li><a id="EBlnkMenu-12-Subject-Edexcel" href="ExamBoardInfo.aspx?ExamBoardID=12&amp;ExamBoardName=Edexcel">
                        <span>Edexcel</span></a>
                        <ul class="dropdown">
                            <li><a id="SubjectlnkMenu-40-Unit-Physics" href="ExamBoardInfo.aspx?SubjectID=40&amp;SubjectNames=Physics">
                                Physics</a></li><li><a id="SubjectlnkMenu-41-Unit-Chemistry" href="ExamBoardInfo.aspx?SubjectID=41&amp;SubjectNames=Chemistry">
                                    Chemistry</a></li><li><a id="SubjectlnkMenu-42-Unit-Biology" href="ExamBoardInfo.aspx?SubjectID=42&amp;SubjectNames=Biology">
                                        Biology</a></li></ul>
                    </li>
                    <li><a id="EBlnkMenu-13-Subject-AQA" href="ExamBoardInfo.aspx?ExamBoardID=13&amp;ExamBoardName=AQA">
                        <span>AQA</span></a>
                        <ul class="dropdown">
                            <li><a id="SubjectlnkMenu-43-Unit-Physics" href="ExamBoardInfo.aspx?SubjectID=43&amp;SubjectNames=Physics">
                                Physics</a></li><li><a id="SubjectlnkMenu-44-Unit-Chemistry" href="ExamBoardInfo.aspx?SubjectID=44&amp;SubjectNames=Chemistry">
                                    Chemistry</a></li><li><a id="SubjectlnkMenu-45-Unit-Biology" href="ExamBoardInfo.aspx?SubjectID=45&amp;SubjectNames=Biology">
                                        Biology</a></li></ul>
                    </li>
                </ul>
            </li>
            <li><a id="QlnkMenu-1-ExamBoard-GCSE" href="ExamBoardInfo.aspx?QualificationID=1&amp;QualificationName=GCSE">
                <span>GCSE</span></a><ul class="dropdown">
                    <li><a id="EBlnkMenu-1-Subject-Edexcel" href="ExamBoardInfo.aspx?ExamBoardID=1&amp;ExamBoardName=Edexcel">
                        <span>Edexcel</span></a>
                        <ul class="dropdown">
                            <li><a id="SubjectlnkMenu-17-Unit-Physics" href="ExamBoardInfo.aspx?SubjectID=17&amp;SubjectNames=Physics">
                                Physics</a></li><li><a id="SubjectlnkMenu-18-Unit-Chemistry" href="ExamBoardInfo.aspx?SubjectID=18&amp;SubjectNames=Chemistry">
                                    Chemistry</a></li><li><a id="SubjectlnkMenu-19-Unit-Biology" href="ExamBoardInfo.aspx?SubjectID=19&amp;SubjectNames=Biology">
                                        Biology</a></li></ul>
                    </li>
                    <li><a id="EBlnkMenu-2-Subject-AQA" href="ExamBoardInfo.aspx?ExamBoardID=2&amp;ExamBoardName=AQA">
                        <span>AQA</span></a>
                        <ul class="dropdown">
                            <li><a id="SubjectlnkMenu-20-Unit-Physics" href="ExamBoardInfo.aspx?SubjectID=20&amp;SubjectNames=Physics">
                                Physics</a></li><li><a id="SubjectlnkMenu-21-Unit-Chemistry" href="ExamBoardInfo.aspx?SubjectID=21&amp;SubjectNames=Chemistry">
                                    Chemistry</a></li><li><a id="SubjectlnkMenu-22-Unit-Biology" href="ExamBoardInfo.aspx?SubjectID=22&amp;SubjectNames=Biology">
                                        Biology</a></li></ul>
                    </li>
                    <li><a id="EBlnkMenu-3-Subject-OCR 21st Century" href="ExamBoardInfo.aspx?ExamBoardID=3&amp;ExamBoardName=OCR 21st Century">
                        <span>OCR 21st Century</span></a>
                        <ul class="dropdown">
                            <li><a id="SubjectlnkMenu-23-Unit-Physics" href="ExamBoardInfo.aspx?SubjectID=23&amp;SubjectNames=Physics">
                                Physics</a></li><li><a id="SubjectlnkMenu-24-Unit-Chemistry" href="ExamBoardInfo.aspx?SubjectID=24&amp;SubjectNames=Chemistry">
                                    Chemistry</a></li><li><a id="SubjectlnkMenu-25-Unit-Biology" href="ExamBoardInfo.aspx?SubjectID=25&amp;SubjectNames=Biology">
                                        Biology</a></li></ul>
                    </li>
                    <li><a id="EBlnkMenu-4-Subject-OCR Gateway" href="ExamBoardInfo.aspx?ExamBoardID=4&amp;ExamBoardName=OCR Gateway">
                        <span>OCR Gateway</span></a>
                        <ul class="dropdown">
                            <li><a id="SubjectlnkMenu-26-Unit-Physics" href="ExamBoardInfo.aspx?SubjectID=26&amp;SubjectNames=Physics">
                                Physics</a></li><li><a id="SubjectlnkMenu-27-Unit-Chemistry" href="ExamBoardInfo.aspx?SubjectID=27&amp;SubjectNames=Chemistry">
                                    Chemistry</a></li><li><a id="SubjectlnkMenu-28-Unit-Biology" href="ExamBoardInfo.aspx?SubjectID=28&amp;SubjectNames=Biology">
                                        Biology</a></li></ul>
                    </li>
                </ul>
            </li>
            <li><a id="QlnkMenu-2-ExamBoard-AS" href="ExamBoardInfo.aspx?QualificationID=2&amp;QualificationName=AS">
                <span>AS</span></a><ul class="dropdown">
                    <li><a id="EBlnkMenu-10-Subject-Edexcel" href="ExamBoardInfo.aspx?ExamBoardID=10&amp;ExamBoardName=Edexcel">
                        <span>Edexcel</span></a>
                        <ul class="dropdown">
                            <li><a id="SubjectlnkMenu-34-Unit-Physics" href="ExamBoardInfo.aspx?SubjectID=34&amp;SubjectNames=Physics">
                                Physics</a></li><li><a id="SubjectlnkMenu-35-Unit-Chemistry" href="ExamBoardInfo.aspx?SubjectID=35&amp;SubjectNames=Chemistry">
                                    Chemistry</a></li><li><a id="SubjectlnkMenu-36-Unit-Biology" href="ExamBoardInfo.aspx?SubjectID=36&amp;SubjectNames=Biology">
                                        Biology</a></li></ul>
                    </li>
                    <li><a id="EBlnkMenu-11-Subject-AQA" href="ExamBoardInfo.aspx?ExamBoardID=11&amp;ExamBoardName=AQA">
                        <span>AQA</span></a>
                        <ul class="dropdown">
                            <li><a id="SubjectlnkMenu-37-Unit-Physics" href="ExamBoardInfo.aspx?SubjectID=37&amp;SubjectNames=Physics">
                                Physics</a></li><li><a id="SubjectlnkMenu-38-Unit-Chemistry" href="ExamBoardInfo.aspx?SubjectID=38&amp;SubjectNames=Chemistry">
                                    Chemistry</a></li><li><a id="SubjectlnkMenu-39-Unit-Biology" href="ExamBoardInfo.aspx?SubjectID=39&amp;SubjectNames=Biology">
                                        Biology</a></li></ul>
                    </li>
                </ul>
            </li>
            <li><a id="QlnkMenu-4-ExamBoard-IGCSE" href="ExamBoardInfo.aspx?QualificationID=4&amp;QualificationName=IGCSE">
                <span>IGCSE</span></a><ul class="dropdown">
                    <li><a id="EBlnkMenu-9-Subject-Edexcel" href="ExamBoardInfo.aspx?ExamBoardID=9&amp;ExamBoardName=Edexcel">
                        <span>Edexcel</span></a>
                        <ul class="dropdown">
                            <li><a id="SubjectlnkMenu-31-Unit-Physics" href="ExamBoardInfo.aspx?SubjectID=31&amp;SubjectNames=Physics">
                                Physics</a></li><li><a id="SubjectlnkMenu-32-Unit-Chemistry" href="ExamBoardInfo.aspx?SubjectID=32&amp;SubjectNames=Chemistry">
                                    Chemistry</a></li><li><a id="SubjectlnkMenu-33-Unit-Biology" href="ExamBoardInfo.aspx?SubjectID=33&amp;SubjectNames=Biology">
                                        Biology</a></li></ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li><a id="SubjectforCategory-2-Category-Biology" href="ExamBoardInfo.aspx?Type=SubjectCategory">
        Subject</a><ul class="dropdown">
            <li><a id="CatgorySaubject-1-Category-Biology" href="ExamBoardInfo.aspx?SubjectName=Biology">
                <span>Biology</span></a></li><li><a id="CatgorySaubject-2-Category-Physics" href="ExamBoardInfo.aspx?SubjectName=Physics">
                    <span>Physics</span></a></li><li><a id="CatgorySaubject-3-Category-Chemistry" href="ExamBoardInfo.aspx?SubjectName=Chemistry">
                        <span>Chemistry</span></a></li></ul>
    </li>
    <li><a href="../../onlineportal/Pages/frmPromotionalSignIn.aspx"><span>Report</span></a></li>
    <li><a href="../../onlineportal/Pages/frmPromotionalSignIn.aspx"><span>Membership</span></a></li>
    </ul>
--%>