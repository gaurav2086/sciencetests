<%@ Page Title="" Language="C#" MasterPageFile="~/OnlinePortal/MasterPage/mstOnlinePortal.Master"
    AutoEventWireup="true" CodeBehind="frmMembership.aspx.cs" Inherits="QuestionBank.Online.OnlinePortal.Pages.frmMembership" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Breadcrumb Start Here -->
    <div class="breadcrumb">
        <div class="container">
            <div class="linkheading">
                REGISTRATION</div>
        </div>
    </div>
    <!-- Breadcrumb End Here -->
    <div class="Question_Container">
        <div class="container">
            <div id="DivRenewal" style="visibility: hidden">
                <br />
                <div style="color: #00AEEF; font-size: 25px; font-family: 'trebuchet ms'; display: block;">
                    <label>
                        Dear</label>&nbsp;&nbsp<label id="lblUserName"></label>&nbsp;<label style="color: Red;
                            font-size: 27px">Your Plan is Expired</label></div>
                <br />
                <label>
                    Your Plan is Detail is Below</label><br />
                <div id="DivPlanDetails">
                </div>
                <br />
                <br />
                <div class="submitbtn">
                    <input id="btnRenewal" type="button" class="btn btn-primary" value="Renew Now" /></div>
            </div>
            <div id="DivMembershipplan" style="visibility: hidden">



             <form action="https://secure.worldpay.com/wcc/purchase" name="BuyForm" id="BuyForm" method="POST">
                    <input type="hidden" name="instId" id="instId" value="1110214"/>
                    <!-- The "instId" value "211616" should be replaced with the Merchant's own installation Id -->
                    <input type="hidden" name="cartId" id="cartId"/>
                    <!-- This is a unique identifier for merchants use. Example: PRODUCT123 -->
                    <input type="hidden" name="currency" id="WPcurrency"  />
                    <!-- Choose appropriate currency that you would like to use -->
                    <input type="hidden" name="amount" id="amount" />
                     <input type="hidden" name="testMode" value="100"/>
                     <input type="hidden" name="desc" id="desc" value="Paid using http://www.sciencetests.co.uk"/>
                   
           </form>





                <div class="col-sm-9 questionmainbox">
                    <div class="black20px">
                        Choose Your Plan</div>
                    <div id="DivPlan">
                    </div>
                    <p>
                        &nbsp;</p>
                    <hr />
                  <%--  <div id="DivContactInfo">
                        <div class="black20px">
                            Contact Details</div>
                        <br/>
                        <div class="row">
                            <div class="col-md-6">
                                <input id="txtname"  class="form-control textfield" type="text" placeholder="Full Name" /><span
                                    style="color: Red; font-size: 16px;">*</span> <span id="stxtname" style="font-size: 14px;
                                        color: Red"></span>
                            </div>
                            <div class="col-md-6">
                                <input id="txtContactno" class="form-control textfield" type="text" placeholder="Contact No"/><span
                                    style="color: Red; font-size: 16px">*</span> <span id="stxtContactno" style="font-size: 14px;
                                        color: Red"></span>
                            </div>
                        </div>
                         <br />
                        <div class="row">
                            <div class="col-md-6">
                                <input id="txtemail" class="form-control textfield" type="text" placeholder="Email Address"/><samp
                                    style="color: Red; font-size: 16px">*</samp>
                                <label id="lblemailerror" style="font-size: 14px; color: Red; visibility: hidden">
                                    Please Enter Correct Email Address</label>
                                <span id="stxtemail" style="font-size: 14px; color: Red"></span>
                            </div>
                           
                        </div>
                        </div>--%>
                <%--    <div id="DivContactInfo">
                        <div class="black20px">
                            Contact Details</div>
                        <br>
                        <div class="row">
                            <div class="col-md-6">
                                <input id="txtname" class="form-control textfield" type="text" placeholder="Full Name" /><span
                                    style="color: Red; font-size: 16px">*</span> <span id="stxtname" style="font-size: 14px;
                                        color: Red"></span>
                            </div>
                            <div class="col-md-6">
                                <input id="txtAddress" class="form-control textfield" type="text" placeholder="Address" /><span
                                    style="color: Red; font-size: 16px">*</span> <span id="stxtAddress" style="font-size: 14px;
                                        color: Red"></span>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-md-6">
                                <input id="txtContactno" class="form-control textfield" type="text" placeholder="Contact No"><span
                                    style="color: Red; font-size: 16px">*</span> <span id="stxtContactno" style="font-size: 14px;
                                        color: Red"></span>
                            </div>
                            <div class="col-md-6">
                                <input id="txtPostalcode" class="form-control textfield" type="text" placeholder="Postal Code" /><span
                                    style="color: Red; font-size: 16px">*</span> <span id="stxtPostalcode" style="font-size: 14px;
                                        color: Red"></span>
                                <label id="lblPostalcodeerror" style="font-size: 14px; color: Red; visibility: hidden">
                                    Please Enter Only Alphanumeric value</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <input id="txtTown" class="form-control textfield" type="text" placeholder="Town" /><span
                                    style="color: Red; font-size: 16px">*</span> <span id="stxtTown" style="font-size: 14px;
                                        color: Red"></span>
                            </div>
                            <div class="col-md-6">
                                <select id="Country" class="form-control textfield">
                                    <option></option>
                                </select>
                                <span style="color: Red; font-size: 16px">*</span> <span id="sCountry" style="font-size: 14px;
                                    color: Red"></span>
                            </div>
                        </div>
                        <br />
                        <hr />
                        <div class="black20px">
                            User Credential</div>
                        <br />
                        <div class="row">
                            <div class="col-md-6">
                                <input id="txtemail" class="form-control textfield" type="text" placeholder="Email Address"/><samp
                                    style="color: Red; font-size: 16px">*</samp>
                                <label id="lblemailerror" style="font-size: 14px; color: Red; visibility: hidden">
                                    Please Enter Correct Email Address</label>
                                <span id="stxtemail" style="font-size: 14px; color: Red"></span>
                            </div>
                            <div class="col-md-6">
                                <input id="txtpasword" class="form-control textfield" type="password" placeholder="Password"/><span
                                    style="color: Red; font-size: 16px">*</span> <span id="stxtpasword" style="font-size: 14px;
                                        color: Red"></span>
                            </div>
                        </div>
                        <br />
                        <br />
                        <hr />
                    </div>--%>
                    
                    <br />
                   <%-- <div class="black20px">
                        <img src="../CommonFiles/img/card-icons.png" style="width: 420px" />
                    </div>--%>
                    <div class="terms">
                        <input type="checkbox" id="chkTermCondition" name="TermCondition" />
                        <label for="chkTermCondition">
                            By clicking Join ScienceTests, you acknowledge that you have read and agree to our
                            <a href="#" id="TermCondition" target="_blank">Terms of Service.</a></label></div>
                    <div class="submitbtn">
                        <input id="btnJoin" type="button" class="btn btn-primary" value="Join Now" /></div>
                    <div class="submitbtn">
                        <input id="btnRenew" type="button" class="btn btn-primary" value="Renew Now" /></div>
                </div>
                <div class="col-sm-3 leftshade">
                    <div class="sideheading">
                        Purchase summary</div>
                    <div class="rightpanelbg">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td height="30">
                                    <strong>Membership:</strong> <span id="planname"></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td class="pricebg">
                                    <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td>
                                                Total
                                            </td>
                                            <td align="right" class="priceheading2">
                                                <label id="Currency">
                                                </label>
                                                &nbsp;
                                                <label id="PlanAmount">
                                                </label>
                                                <%-- &#8377; 4,999--%>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <hr style="border-color: #94999d;" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Any Question Contact Us</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <br />
                                    <div class="bulletpoints">
                                        <ul>
                                            <li><span style="font-weight: bold">Address: </span>38 Elms Park Avenue Sudbury, Middlesex
                                                Greater London – HA0 2RS UK</li>
                                            <li><span style="font-weight: bold">Email:</span> admin@sciencetests.co.uk</li>
                                            <li><span style="font-weight: bold">Phone: </span>+44 7932976947</li>
                                        </ul>
                                        <input type="hidden" id="hdnCurrencyCode" />
                                    </div>
                                </td>
                            </tr>
                            <%-- <tr>
                                <td>
                                    &nbsp;
                                </td>
                            </tr>--%>
                        </table>
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
    <script src='<%= ResolveUrl("../CommonFiles/OnlinePortalJS/Membership/Membership.js")%>'
        type="text/javascript"></script>
</asp:Content>
