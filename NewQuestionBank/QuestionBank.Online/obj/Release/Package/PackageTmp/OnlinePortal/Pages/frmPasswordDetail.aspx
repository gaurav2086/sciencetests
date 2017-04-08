<%@ Page Title="" Language="C#" MasterPageFile="~/OnlinePortal/MasterPage/mstOnlinePortal.Master"
    AutoEventWireup="true" CodeBehind="frmPasswordDetail.aspx.cs" Inherits="QuestionBank.Online.OnlinePortal.Pages.frmPasswordDetail" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<style type="text/css">
        .UserInfo
        {
            color: #70AB00;
            font-size: 16px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div style="color: #00AEEF; font-size: 25px; font-family: 'trebuchet ms'; display: block;">
        <center>
           
               Thank you for verify ur Email <br />Please Create Your Password
           
        </center>
    </div>
    <div class="Question_Container">
        <div class="container">
          <%--  <div id="UserInfo">
             <span class="UserInfo">
                Your Username  is Below.
                </span>
                <br />
                <label>Username:</label>
               
                <label id="lblusername">
                </label>
                <br />
         
            </div>--%>
            <hr />
            <div>
                <label for="txtusername" id="lblemail">
                    Password:
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<input
                    id="txtpassword" type="password" value="" class="sub-input textfield" />&nbsp;<samp style="color: Red;
                        font-size: 16px">*</samp>
                <span id="stxtpasword" style="font-size: 14px; color: Red"></span>
                <br />
                <br />
                <label for="txtpasword" id="lblpawd">
                    Confirm Password: &nbsp;</label>
                <input id="txtConformpasword" type="password" value="" class="sub-input textfield" />&nbsp;
                <samp style="color: Red; font-size: 16px">
                    *</samp>
                <span id="stxtConfpasword" style="font-size: 14px; color: Red"></span>
            </div>
            <div class="submitbtn">
                <input type="button" id="btnSavePassword" class="btn btn-primary" value="Save Password" /></div>
        </div>
    </div>
    <script src='<%= ResolveUrl("../CommonFiles/OnlinePortalJS/Membership/Authorization.js")%>' type="text/javascript"></script>
</asp:Content>
