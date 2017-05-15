<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="RecoverPassword.aspx.cs"
    Inherits="QuestionBank.Online.OnlinePortal.NewPages.RecoverPassword" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<style>
    .topicSelect
    {
        background-color: #202C45 !important;
        border-right: 6px solid #F2184F !important;
        padding: 20px 5px 5px 15px;
        color: white;
        width: 40%;
        margin-left: 106px;
        font-size: 16pt;
    }
    .emailSelect
    {
        padding: 5px 5px 5px 15px;
        color: white;
        width: 40%;
        margin-left: 106px;
    }
    .emailSelect span
    {
        color: Black;
    }
    .emailText
    {
        padding: 6px;
        width: 80%;
    }
    .w3-red, .w3-hover-red:hover
    {
        color: #fff !important;
        background-color: #f44336 !important;
    }
    
    .submitBtn
    {
        background-color: #F2184F;
        padding: .5em;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 6px;
        color: #fff;
        font-family: 'Oswald';
        font-size: 20px;
        text-decoration: none;
        border: none;
    }
    
    .submitBtn:hover
    {
        border: none;
        background: orange;
        box-shadow: 0px 0px 1px #bbb;
    }
</style>
<body style="background-color: #E6E6FA !important;">
    <form runat="server">
    <div>
        <br />
        <br />
        <div class="topicSelect">
            Information Recovery Form</div>
        <br />
        <br />
        <div class="emailSelect">
            <span><strong>My Email Address</strong> </span>
            <br />
            <br />
            <input class="emailText" placeholder="myName@myemail.com" type="text" id="txtEmailId"
                name="email" class="form-control" required="">
            <br />
            <span id="lblemailerror" style="color: red !important">Invalid email address</span>
            <br />
            <br />
            <asp:Button runat="server" ID="btn" Text="Submit" class="submitBtn" 
                onclick="btn_Click" />
        </div>
        <div>
        </div>
    </div>
    </form>
</body>
</html>
