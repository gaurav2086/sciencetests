<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ucFooter.ascx.cs" Inherits="QuestionBank.Online.OnlinePortal.UserControls.ucFooter" %>
<!-- Footer Start Here -->
<%--<script type="text/javascript">
    $(function () {
        var name = '<%= Session["UserName"] %>'
        var Userid = '<%= Session["UserID"] %>'
        $('#lbluername').text(name)
        $('#lblUserid').text(Userid)
    });
</script>--%>
  <div class="footerrow1inner text-center">
  <a href="../Pages/frmMembership.aspx"> Membership</a><a href="../Pages/frmReport.aspx">Report</a><a href="../Pages/frmContactus.aspx">Contact us</a><a href="../Pages/frmAboutUs.aspx">About us</a></div>
  
  <%--<div class="footerrow2">
  	<div class="container">
    	<div class="col-sm-6 footertxt">© 2015 MAX. All rights reserved. </div>
        <div class="col-sm-6 footerico"><a href="#"><img src='<%= ResolveUrl("../CommonFiles/img/fb.png")%>' width="22" height="22" alt=""/></a> <a href="#"><img src='<%= ResolveUrl("../CommonFiles/img/twitter.png")%>' width="22" height="22" alt=""/></a> <a href="#"><img src='<%= ResolveUrl("../CommonFiles/img/gplus.png")%>' width="22" height="22" alt=""/></a> <a href="#"><img src='<%= ResolveUrl("../CommonFiles/img/in.png")%>' width="22" height="22" alt=""/></a> <img src='<%= ResolveUrl("../CommonFiles/img/pintrest.png")%>' width="22" height="22" alt=""/></div>
    </div>
  </div>--%>

  <div class="footerrow2">
    <div class="container">
      <div class="col-sm-6 footertxt">© 2015 MAX. All rights reserved. </div>
      <%--<div class="col-sm-6 footerico"><a href="#"><img src='<%= ResolveUrl("../CommonFiles/img/fb.png")%>' width="22" height="22" alt=""/></a> <a href="#"><img src='<%= ResolveUrl("../CommonFiles/img/twitter.png")%>' width="22" height="22" alt=""/></a> <a href="#"><img src='<%= ResolveUrl("../CommonFiles/img/gplus.png")%>' width="22" height="22" alt=""/></a> <a href="#"><img src='<%= ResolveUrl("../CommonFiles/img/in.png")%>' width="22" height="22" alt=""/></a> <img src='<%= ResolveUrl("../CommonFiles/img/pintrest.png")%>' width="22" height="22" alt=""/></div>--%>
    </div>
  </div>
  <!-- Footer End Here --> 
