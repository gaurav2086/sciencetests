<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ucNewHeader.ascx.cs"
    Inherits="QuestionBank.Online.OnlinePortal.UserControls.ucNewHeader" %>
<%@ Register TagPrefix="uc" TagName="Menu" Src="~/OnlinePortal/UserControls/usNewMenu.ascx" %>
<script type="text/javascript">

    function showLogin() {
        var x = document.getElementById('ucHederMenu_divLogin');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    }
</script>
<style>
    .UserName
    {
        border-radius: 5px 0px 0px 5px;
        -moz-border-radius: 5px 0px 0px 5px;
        -webkit-border-radius: 5px 0px 0px 5px;
        border-left: 1px solid #bbb9b9;
        border-top: 1px solid #bbb9b9;
        border-bottom: 1px solid #bbb9b9;
        border-right: 1px solid #bbb9b9;
        padding: 3px 4px;
        font-size: 11px;
        color: #374047;
        height: 30px;
    }
    .btn-default
    {
        background-image: -webkit-linear-gradient(top, #54c7f5 0%, #04aef1 100%);
        background-image: -o-linear-gradient(top, #54c7f5 0%, #04aef1 100%);
        background-image: -webkit-gradient(linear, left top, left bottom, from(#54c7f5), to(#04aef1));
        background-image: linear-gradient(to bottom, #54c7f5 0%, #04aef1 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#54c7f5', endColorstr='#04aef1', GradientType=0);
        filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
        background-repeat: repeat-x;
        color: #ffffff;
        text-transform: uppercase;
        border-radius: 5px;
        border: 1px solid #19a8e1;
        font-size: 11px;
        padding: 3px 8px;
    }
</style>
<header id="header" class="header">
     <form id="Form1" runat="server" style="margin-bottom: 0">
    <div class="header-top bg-theme-color-2 sm-text-center p-0" >
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="widget no-border m-0">
              <ul class="list-inline font-13 sm-text-center mt-5">
                <li>
                  <a class="text-white" runat="server" style="display:none" id="lnkHelpDesk" href="#">Help Desk</a>
                </li>
                <li class="text-white" runat="server" style="display:none" id="lblWhiteBar">|</li>
                <li runat="server" id="divlnkLogin">
                  <a class="text-white" onclick="showLogin()" href="#" >Login</a>
                </li>
				<li class="text-white" runat="server" id="divtextWhitLine">|</li>
                <li  runat="server" id="divSignInLink">
                  <a class="text-white" href="/OnlinePortal/Pages/frmPromotionalSignIn.aspx">Register Here</a>
                </li>
                 <li runat="server" id="lnkUserName" class="text-white">
                      <b><asp:Label runat="server" ID="lblUserName"></asp:Label></b> 
                  </li>
              </ul>
              <div runat="server" id="divLogin" style="display:none"> 
                <table width="100%" border="0" cellspacing="0" cellpadding="0" id="tblbfrlogin" runat="server">
                        <tr>
                            <td>
                                <input id="txtUername" type="text" class="UserName form-control" value="" placeholder="Username"
                                 required="true"    runat="server"  />
                            </td>
                            <td style="padding-right: 5px !important;">
                                <input id="txtPassword" type="password" class="UserName form-control" value="" placeholder="Password"
                                  required="true"  runat="server" />
                            </td>
                            <td>
                                <asp:Button ID="btnLogins" runat="server" Text="login" class="btn-default" OnClick="btnLogins_Click" />
                            </td>
                        </tr><tr><td style="display:none">
                         <a href="#" onclick="window.open(&quot;RecoverPassword.aspx&quot;, &quot;extwindow&quot;,&quot;location=0,status=0,scrollbars=1,alwaysRaised=yes, width=900,height=330&quot;).focus();return false;"> <span>Forgot
             Password</span></a></td>
                        </tr>
                    </table>
              </div>
               
            </div>
          </div>
          <div class="col-md-8">
          <div class="widget m-0 pull-right sm-pull-none sm-text-center" >
           <asp:LinkButton ID="btnlogout" runat="server" Text="Logout" class="btn-default" OnClick="btnlogout_Click" ></asp:LinkButton></div>
            <div class="widget m-0 pull-right sm-pull-none sm-text-center" style="display:none">
              <ul class="list-inline pull-right">                
                <li class="mb-0 pb-0">
                  <div class="top-dropdown-outer pt-5 pb-10">
                    <%--<a class="top-search-box has-dropdown text-white text-hover-theme-colored"><i class="fa fa-search font-13"></i> &nbsp;</a>--%>
                    <ul class="dropdown">
                      <li>
                        <div class="search-form-wrapper">
                         <%-- <form method="get" class="mt-10">
                            <input type="text" onfocus="if(this.value =='Enter your search') { this.value = ''; }" onblur="if(this.value == '') { this.value ='Enter your search'; }" value="Enter your search" id="searchinput" name="s" class="">
                            <label><input type="submit" name="submit" value=""></label>
                          </form>--%>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div class="widget no-border m-0 mr-15 pull-right flip sm-pull-none sm-text-center" style="display:none">
         <%--   <ul class="styled-icons icon-circled icon-sm pull-right flip sm-pull-none sm-text-center mt-sm-15">
                <li><a target="_blank" href="https://www.facebook.com/sciencetests/"><i class="fa fa-facebook text-white"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter text-white"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus text-white"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram text-white"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin text-white"></i></a></li>
              </ul>--%>
                 
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-middle p-0 bg-lightest xs-text-center" style="display:none">
      <div class="container pt-0 pb-0">
        <div class="row">
          <div class="col-xs-12 col-sm-4 col-md-5">
            <div class="widget no-border m-0">
              <%--<a class="menuzord-brand pull-left flip xs-pull-center mb-15" href="javascript:void(0)"><img src="../Includes/images/logo.jpg" alt="" /></a>--%>
              <a class="menuzord-brand pull-left flip xs-pull-center mb-15" href="../../OnlinePortal/NewPages/Home.aspx"><img src="../Includes/images/logo.jpg" alt="" /></a>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4" >
            <div class="widget no-border pull-right sm-pull-none sm-text-center mt-10 mb-10 m-0">
              <ul class="list-inline" style="display:none">
                <li><i class="fa fa-phone-square text-theme-colored font-36 mt-5 sm-display-block"></i></li>
                <li >
                  <a href="#" class="font-12 text-gray text-uppercase">Call us today!</a>
                  <h5 class="font-14 m-0"> +(44) 793 297 6947</h5>
                </li>
              </ul>
            </div>
          </div>  
          <div class="col-xs-12 col-sm-4 col-md-3">
            <div class="widget no-border pull-right sm-pull-none sm-text-center mt-10 mb-10 m-0">
              <ul class="list-inline">
                <li><i class="fa fa-clock-o text-theme-colored font-36 mt-5 sm-display-block"></i></li>
                <li>
                  <a href="#" class="font-12 text-gray text-uppercase">We are open!</a>
                  <h5 class="font-13 text-black m-0"> <a href="mailto:admin@sciencetests.co.uk">admin@sciencetests.co.uk</a></h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-nav">
      <div class="header-nav-wrapper navbar-scrolltofixed bg-theme-colored border-bottom-theme-color-2-1px">
        <div class="container">
        <nav id="menuzord" class="menuzord bg-theme-colored pull-left flip menuzord-responsive">
        <uc:Menu ID="ucMenu" runat="server" />
            <ul class="pull-right flip hidden-sm hidden-xs">
              <li>
                <!-- Modal: Book Now Starts -->
              <%--  <a class="btn btn-colored btn-flat bg-theme-color-2 text-white font-14 bs-modal-ajax-load mt-0 p-25 pr-15 pl-15" data-toggle="modal" data-target="#BSParentModal" href="ajax-load/reservation-form.html">Book Now</a>
              --%>
                <!-- Modal: Book Now End -->
              </li>
            </ul>
            <div id="top-search-bar" class="collapse">
              <div class="container">
                <form role="search" action="#" class="search_form_top" method="get">
                  <input type="text" placeholder="Type text and press Enter..." name="s" class="form-control" autocomplete="off">
                  <span class="search-close"><i class="fa fa-search"></i></span>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    </form>
 </header>
