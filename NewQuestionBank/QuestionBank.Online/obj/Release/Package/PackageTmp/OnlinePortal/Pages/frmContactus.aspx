<%@ Page Title="" Language="C#" MasterPageFile="~/OnlinePortal/MasterPage/mstOnlinePortal.Master"
    AutoEventWireup="true" CodeBehind="frmContactus.aspx.cs" Inherits="QuestionBank.Online.OnlinePortal.Pages.frmContactus" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css">
        .address
        {
            font-size: 14px;
            line-height: 1.4em;
            font-weight: bold;
            display: inline-block;
            font-family: "Glyphicons Halflings";
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Breadcrumb Start Here -->
    <div class="breadcrumb">
        <div class="container">
            <div class="linkheading">
                CONTACT US</div>
        </div>
    </div>
    <!-- Breadcrumb End Here -->
    <!-- Middle Start Here -->
    <div class="Question_Container">
        <div class="container" style="padding: 20px;">
            
            <div class="col-md-7">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="textfield col-md-10" type="text" placeholder="Full Name" id="txtName">
                            <span style="color: Red; font-size: 16px">*</span>
                        </div>
                        <span id="stxtName" style="font-size: 14px; color: Red"></span>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="col-md-10 textfield" type="text" placeholder="Email Address" id="txtEmailId"><span
                                style="color: Red; font-size: 16px">*</span>
                        </div>
                        <label id="lblemailerror" style="font-size: 12px; color: Red">
                            Please Enter Correct Email Address</label>
                        <span id="stxtemail" style="font-size: 14px; color: Red"></span>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="col-md-10 textfield" type="text" placeholder="Contact No" id="txtMobileNo">
                            <span style="color: Red; font-size: 16px">*</span>
                        </div>
                        <span id="stxtMobileNo" style="font-size: 14px; color: Red"></span>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="col-md-10 textfield" type="text" placeholder="Address" id="txtAddress"></div>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <textarea class="col-md-11 textfield" placeholder="Message" id="txtmsg" maxlength="100"></textarea>
                            <span style="color: Red; font-size: 14px">*</span>
                        </div>
                    </div>
                    <span id="stxtmsg" style="font-size: 14px; color: Red"></span>
                </div>
               <br />
                <div class="row">
          
                    <div class="col-md-6">
                        <div class="submitbtn" align="center">
                            <input type="button" id="btnSubmit" class="btn btn-primary" value="Submit"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
           
                <div>
                    <b>GET IN TOUCH</b>
                </div>
                <br />
                <div class="col-md-5">
                    <span class="glyphicon glyphicon-map-marker" aria-hidden="true" style="font-size: 25px">
                    </span>
                    <p class="address">
                        38 Elms Park Avenue Sudbury, 
                        Middlesex Greater London – HA0 2RS
                        UK
                    </p>
                    
                </div>
                <div class="col-md-4">
                    <span class="glyphicon glyphicon-earphone" aria-hidden="true" style="font-size:25px">
                     </span>
                    
                    <p>
                    <b>+ 44 7932976947</b>
                    </p>
                   
                </div>

                <div class="col-md-4">
                    <span class="glyphicon glyphicon-envelope" aria-hidden="true" style="font-size:25px">
                     </span>
                    <p class="address">
                        admin@sciencetests.co.uk
                    </p>
                   
                </div>
            
            </div>
        </div>
    </div>
    <!-- Middle End Here -->
    <script src="../CommonFiles/js/commonValidation.js" type="text/javascript"></script>
    <script src="../CommonFiles/OnlinePortalJS/ContactUs/Contactus.js" type="text/javascript"></script>
</asp:Content>
