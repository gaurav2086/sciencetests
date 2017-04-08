<%@ Page Title="" Language="C#" MasterPageFile="~/OnlinePortal/MasterPage/mstOnlinePortal.Master"
    AutoEventWireup="true" CodeBehind="frmPromotionalSignIn.aspx.cs" Inherits="QuestionBank.Online.OnlinePortal.Pages.frmPromotionalSignIn" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Breadcrumb Start Here -->
    <div class="breadcrumb">
        <div class="container">
            <div class="linkheading">
                Promotional Account</div>
        </div>
    </div>
    <!-- Breadcrumb End Here -->
    <!-- Middle Start Here -->
    <div class="Question_Container">
        <div class="container" style="padding: 20px;">
            <div class="col-md-6">
                <h4>
                    Create Your Promotional Account</h4>
                <br />
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <select id="Title" class="col-md-10 textfield">
                                <option value="0">Select Title</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Miss.">Miss.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Dr.">Dr.</option>
                                <option value="Others">Others</option>
                            </select>
                            <span style="color: Red; font-size: 16px">*</span>
                        </div>
                        <label id="lblTitleerror" style="font-size: 12px; color: Red">
                            Please Select Title</label>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <select id="Gender" class="col-md-10 textfield">
                                <option value="0">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <span style="color: Red; font-size: 16px">*</span>
                        </div>
                        <label id="lblGendererror" style="font-size: 12px; color: Red">
                            Please Select Gender</label>
                        <span id="Span2" style="font-size: 14px; color: Red"></span>
                    </div>
                </div>
                <div class="row">
                    &nbsp;
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="col-md-10 textfield" type="text" placeholder="First Name" id="txtFirstName" /><span
                                style="color: Red; font-size: 16px">*</span>
                        </div>
                        <label id="lblFnameError" style="font-size: 12px; color: Red">
                            Enter First Name</label>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="textfield col-md-10" type="text" placeholder="Surmane" id="txtSurmane" />
                            <span style="color: Red; font-size: 16px">*</span>
                        </div>
                        <label id="lblSurmaneerror" style="font-size: 12px; color: Red">
                            Enter Surmane Name</label>
                    </div>
                </div>
                <div class="row">
                    &nbsp;
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="col-md-10 textfield" type="text" placeholder="Class Studying in" id="txtClass" />
                        </div>
                        <span id="Span5" style="font-size: 14px; color: Red"></span>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="textfield col-md-10" type="text" placeholder="Name of the institute"
                                id="txtInstitute" />
                        </div>
                        <span id="Span6" style="font-size: 14px; color: Red"></span>
                    </div>
                </div>
                <div class="row">
                    &nbsp;
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="col-md-10 textfield" type="text" placeholder="Address" id="txtAddress" />
                        </div>
                        <span id="Span7" style="font-size: 14px; color: Red"></span>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="textfield col-md-10" type="text" placeholder="Country of Residence"
                                id="txtCountry" />
                            <label id="lblCountryerror" style="font-size: 12px; color: Red">
                                Please Enter Country</label>
                        </div>
                        <span id="Span8" style="font-size: 14px; color: Red"></span>
                    </div>
                </div>
                <div class="row">
                    &nbsp;
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="col-md-10 textfield" type="text" placeholder="Email Address" id="txtEmailId" /><span
                                style="color: Red; font-size: 16px">*</span>
                        </div>
                        <label id="lblemailerror" style="font-size: 12px; color: Red">
                            Please Enter Correct Email Id</label>
                        <span id="stxtemail" style="font-size: 14px; color: Red"></span>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="textfield col-md-10" type="text" placeholder="Confirm Email address"
                                id="txtConEmailId" />
                            <span style="color: Red; font-size: 16px">*</span>
                        </div>
                        <span id="Span9" style="font-size: 14px; color: Red"></span>
                    </div>
                </div>
                <div class="row">
                    &nbsp;
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="textfield col-md-10" type="password" placeholder="Password" id="txtPwd" />
                            <span style="color: Red; font-size: 16px">*</span>
                        </div>
                        <span id="Span10" style="font-size: 14px; color: Red"></span>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="textfield col-md-10" type="password" placeholder="Confirm Password"
                                id="txtConPwd" />
                            <span style="color: Red; font-size: 16px">*</span>
                        </div>
                        <span id="stxtpwd" style="font-size: 14px; color: Red"></span>
                    </div>
                </div>
                <div class="row">
                    &nbsp;
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="col-md-10 textfield" type="text" placeholder="Country/State/Province"
                                id="txtTown" />
                        </div>
                        <span id="Span11" style="font-size: 14px; color: Red"></span>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="checkbox" id="chkPromotionEmail" />
                            Would you like Promotion email?
                        </div>
                        <span id="Span12" style="font-size: 14px; color: Red"></span>
                    </div>
                </div>
                <div class="row">
                    &nbsp;
                </div>
                <br />
                <div class="row">
                    <div class="col-md-6">
                        <div class="submitbtn" align="center">
                            <input type="button" id="btnSubmit" class="btn btn-primary" value="Create Acc." /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Middle End Here -->
    <script src="../CommonFiles/js/commonValidation.js" type="text/javascript"></script>
    <script src="../CommonFiles/OnlinePortalJS/PromotionalSignIn/PromotionalSign.js"
        type="text/javascript"></script>
</asp:Content>
