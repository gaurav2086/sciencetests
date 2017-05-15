<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="usNewMenu.ascx.cs" Inherits="QuestionBank.Online.OnlinePortal.UserControls.usNewMenu" %>
<%--<script src='<%= ResolveUrl("../CommonFiles/OnlinePortalJS/Menu/newMenu.js")%>' type="text/javascript"></script>--%>
<%--<script src="../CommonFiles/OnlinePortalJS/Menu/newMenu.js" type="text/javascript"></script>--%>
<%--<ul class="menuzord-menu" id="MainMenu" >
    <li class="active"><a href="Home.aspx">Home </a></li>
</ul>--%>
<style>
    .formStype
    {
    }
    .adminLink
    {
        margin-left: 90px;
    }
    .useName
    {
        color: white;
        margin-left: 90px;
        font-size: 13pt;
    }
    @media screen and (max-width: 600px) and (min-width: 320px)
    {
        .adminLink
        {
            margin-left: 0px;
        }
        .useName
        {
            margin-left: 0px;
        }
    }
</style>
<a class="menuzord-brand pull-left flip xs-pull-center mb-15" href="../../OnlinePortal/NewPages/Home.aspx">
    <img src="../Includes/images/logo.jpg" alt="" /></a>
<ul class="menuzord-menu menuzord-indented scrollable" style="max-height: 400px;">
    <li class="scrollable-fix"></li>
    <li class="active"><a href="Home.aspx">Home </a></li>
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
    <li style="display: none"><a id="SubjectforCategory-2-Category-Biology" href="ExamBoardInfo.aspx?Type=SubjectCategory">
        Subject</a><ul class="dropdown">
            <li><a id="CatgorySaubject-1-Category-Biology" href="ExamBoardInfo.aspx?SubjectName=Biology">
                <span>Biology</span></a></li><li><a id="CatgorySaubject-2-Category-Physics" href="ExamBoardInfo.aspx?SubjectName=Physics">
                    <span>Physics</span></a></li><li><a id="CatgorySaubject-3-Category-Chemistry" href="ExamBoardInfo.aspx?SubjectName=Chemistry">
                        <span>Chemistry</span></a></li></ul>
    </li>
    <%--remove this section --%>
    <li><a href="ExamBoardInfo.aspx?SubjectName=Biology">BIOLOGY</a></li>
    <li><a href="ExamBoardInfo.aspx?SubjectName=Physics">PHYSICS</a></li>
    <li><a href="ExamBoardInfo.aspx?SubjectName=Chemistry">CHEMISTRY</a></li>
    <li style="display: none" runat="server" id="lnkReportBeforelogin"><a href="../../onlineportal/Pages/frmPromotionalSignIn.aspx">
        <span>Report</span></a></li>
    <li style="display: none" runat="server" id="lnkReportAfterLogin"><a href="../../onlineportal/Pages/frmReport.aspx">
        <span>Report</span></a></li>
    <li id="lnkSignIn" runat="server"><a href="../../onlineportal/Pages/frmPromotionalSignIn.aspx"
        class="blink"><i class="fa fa-cog fa-spin fa-fw"></i>Free Login</a></li>
    <%--<li><a href="../../onlineportal/Pages/frmPromotionalSignIn.aspx"><span>Membership</span></a></li>--%>
    <li id="lnkAdminEmail" runat="server"><a class="adminLink" href="mailto:admin@sciencetests.co.uk">
        [ Contact us - admin@sciencetests.co.uk ]</a></li>
   <%-- <li class="useName" id="divLoginAfter" runat="server">
        <form id="Form1" runat="server" style="margin-bottom: 0">
        <asp:Label runat="server" ID="lblUserName"></asp:Label>&nbsp;&nbsp;
        <asp:Button ID="btnlogout" runat="server" Text="Logout" class="btn-default" OnClick="btnlogout_Click" />
        </form>
    </li>--%>
</ul>
