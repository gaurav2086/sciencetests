<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="frmLogin.aspx.cs" Inherits="QuestionBank.Online.frmLogin" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <link href="~/Styles/Site.css" rel="stylesheet" type="text/css" />
    <title>QB | Admin Login</title>
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/theme.css" rel="stylesheet">
    <link href="css/bootstrap-reset.css" rel="stylesheet">
    <!--external css-->
    <link href="assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/flexslider.css" />
    <link href="assets/bxslider/jquery.bxslider.css" rel="stylesheet" />
    <link href="assets/fancybox/source/jquery.fancybox.css" rel="stylesheet" />
    <link rel="stylesheet" href="assets/revolution_slider/css/rs-style.css" media="screen">
    <link rel="stylesheet" href="assets/revolution_slider/rs-plugin/css/settings.css"
        media="screen">
    <!-- Custom styles for this template -->
    <link href="css/style.css" rel="stylesheet">
    <link href="css/style-responsive.css" rel="stylesheet" />
    <style>
        .modal-body
        {
            border: #00A8B3 SOLID;
        }
    </style>
</head>
<body>
    <form id="Form1" runat="server">
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 tooltipss and media queries -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
      <script src="js/respond.min.js"></script>
    <![endif]-->
    <!--header start-->
    <header class="header-frontend">
        <div class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html">Admin <span>Panel</span></a>
                </div>
                <div class="navbar-collapse collapse ">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Login</a></li>
                      <%--  <li><a href="#">Sign Up</a></li>--%>
                        
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <!--header end-->
    <div class="main">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">
                        Login</h4>
                </div>
                <div class="modal-body">
                    <form role="form">
                    <asp:Label runat="server" id="lblErrorMgs" ForeColor="Red"></asp:Label> 
                    <div class="form-group">
                        <label for="exampleInputEmail1">
                            User Name</label>
                        <input runat="server"  type="text" class="form-control" id="txtUser" placeholder="Enter User Name">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">
                            Password</label>
                        <input runat="server"  type="password" class="form-control" id="txtPassword" placeholder="Password">
                    </div>
                    <asp:Button ID="btnlogin" runat="server" Text="Login" class="btn btn-default" 
                        onclick="btnlogin_Click"/>
                    
                       <%-- <a  href ="#">New User</a>--%>
                   
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="clear">
    </div>
    <!--footer end-->
    <!-- js placed at the end of the document so the pages load faster -->
    <script src='<%= ResolveUrl("~/js/jquery-1.10.1.min.js")%>' type="text/javascript"></script>
    <script src='<%= ResolveUrl("~/js/bootstrap.min.js")%>' type="text/javascript" ></script>
    <script src='<%= ResolveUrl("~/CommonFiles/page-js/login.js")%>' type="text/javascript"></script>
    
    
    <!--footer start-->
    <footer class="footer">
        
    </footer>
    </form>
</body>
</html>
