<%@ Page Title="" Language="C#" MasterPageFile="~/OnlinePortal/MasterPage/mstOnlinePortal.Master"
    AutoEventWireup="true" CodeBehind="frmDefault.aspx.cs" Inherits="QuestionBank.Online.OnlinePortal.Pages.defaut" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css">
        /*   #container {
    border-radius: 10px;
    text-align: left;
 
    margin: 0;
    margin-top:-95px;
    padding: 0;
    width: 300px;
  
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    border: 0px solid #CCCCCC;
    float:right;
}
#header {
    margin: 0px;
    padding: 5px 5px 5px 5px;
    color: #FFFFFF;
    background-color: #0D8EFF;
    background-image: none;
}
#header .feed_title {
    margin: 0;
    padding: 0;
    font-weight: bold;
    word-wrap: break-word;
}
#content {
    overflow:scroll;
    height:420px;
    margin: 0 0 0 0;
    padding: 5px 0px 0px 0px;
    background-color: #FFFFFF;
    background-image: none;
}
#content .feed_item {
    margin: 0 0 7px 0;
    padding: 0 0 7px 0;
    border-bottom: 0px dashed #CCCCCC;
    clear: both;
}

#content .feed_item_title {
    margin: 1px 0 1px 3px;
    padding: 1px 2px 1px 3px;
    color: #0D8EFF;
    font-weight: bold;
}

#content .feed_item_description {
    overflow: hidden;
    margin: 0 0 0 3px;
    padding: 0 2px 0 3px;
    color: #757575;
    line-height: 135%;
    word-wrap: break-word;
    clear: both;
}*/
        
        
        
        #header
        {
            margin: 0px;
            padding: 5px 5px 5px 5px;
            color: #FFFFFF;
            width: 300px;
            overflow: hidden;
            float: inherit;
            margin-top: 10px;
            background-color: #0D8EFF;
            background-image: none;
        }
        #header .feed_title
        {
            margin: 0;
            padding: 0;
            color: #FFFFFF;
            font-weight: bold;
            word-wrap: break-word;
        }
        
        .feed_item
        {
            margin: 0 0 7px 0;
            padding: 0 0 7px 0;
            border-bottom: 0px dashed #CCCCCC;
            clear: both;
        }
        
        .feed_item_title
        {
            margin: 1px 0 1px 3px;
            padding: 1px 2px 1px 3px;
            color: #0D8EFF;
            font-weight: bold;
        }
        
        .feed_item_description
        {
            overflow: hidden;
            margin: 0 0 0 3px;
            padding: 0 2px 0 3px;
            color: #757575;
            line-height: 135%;
            word-wrap: break-word;
            clear: both;
        }
        
        
        .text-center
        {
            text-align: center;
        }
        
        .text-right
        {
            text-align: right;
        }
        
        .text-justify
        {
            text-align: justify;
        }
        
        .newstape
        {
            text-align: left;
            margin: 0;
            margin-top: 0px;
            padding: 0;
            width: 300px;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 12px;
            border: 0px solid #CCCCCC;
            background-color: #FFFFFF;
            color: #757575;
            line-height: 135%;
            height: 200px;
            width: 300px;
            overflow: hidden;
            float: inherit;
            margin-top: 2px;
        }
        
        .newstape-content
        {
            position: relative;
            padding: 15px;
        }
        
        .newstape-drag
        {
            cursor: ns-resize;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="homeslider">
        <ul class="rslides" id="slider1">
            <li>
                <img src='<%=ResolveUrl ("../CommonFiles/img/img1.jpg")%>' alt=""></li>
            <li>
                <img src='<%=ResolveUrl ("../CommonFiles/img/img2.jpg")%>' alt=""></li>
            <li>
                <img src='<%=ResolveUrl ("../CommonFiles/img/img3.jpg")%>' alt=""></li>
            <li>
                <img src='<%=ResolveUrl ("../CommonFiles/img/img4.jpg")%>' alt=""></li>
        </ul>
    </div>
    <!-- Collage End Here -->
    <%-- <div class="Subject_Container">
        <div class="container">
        <div class="col-md-8">
            <div class="heading">
                Subjects</div>
            <div class="row" id="DivSubject">
            </div>
        </div>
             <div class="col-md-6" style="text-align:center">
           <div id="header">
                    <div class="feed_title">
                       <a href="#" target="_blank" rel="nofollow">BBC News</a>
                     </div>
           </div>
            <div class="newstape">
           
                <div class="newstape-content" id="content">
                  
                </div>
            </div>
            </div>
        </div>
        
    </div>--%>
    <!-- Middle Start Here -->
    <%-- <div class="Qualifi_Container">
        <div class="container">
            <div class="heading">
                Qualification</div>
            <div class="row" id="QualifDiv">
            </div>
            <div id="QualifDiv1" class="row rowmargin">
            </div>
        </div>
    </div>--%>
    <div class="Subject_Container">
        <div class="container">
            <div class="col-sm-8">
                <%--<div id="DivMainsubject" style="visibility:hidden">
      <div class="heading">
                Subjects</div>
            <div class="row" id="DivSubject">
            </div>
      </div>--%>
                <div class="Qualifi_Container">
                    <div class="heading">
                        Qualification</div>
                    <div class="row">
                        <div class="row" id="QualifDiv">
                        </div>
                        <div id="QualifDiv1" class="row rowmargin">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div id="header">
                    <div class="feed_title">
                        <a href="#" target="_blank" rel="nofollow">BBC News</a>
                    </div>
                </div>
                <div class="newstape">
                    <div class="newstape-content" id="content">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="icon_section">
        <article>
			<img src='<%=ResolveUrl ("../CommonFiles/img/home_bg_img.jpg")%>' alt="" data-parallax='{"y": 130}'/>
<div>
            	<div class="container" style="margin:0px auto !important; position:relative" align="center">
                	<%--<div class="row" style="position:relative;margin-left:125px"   align="center">--%>
                    	<div class="col-sm-6 col-xs-6 text-center">
                        <a href="../Pages/frmReport.aspx">
                        	<span class="icons"><img src='<%=ResolveUrl ("../CommonFiles/img/report.png")%>' alt=""/></span><br>

                            <span class="icoheading">Report</span><br>

                            <span class="icotxt">

 </span>      
</a>                  </div>
                      
                        <div class="col-sm-6 col-xs-6 text-center">
                        <a href="../Pages/frmMembership.aspx">
                        <span class="icons"><img src='<%=ResolveUrl ("../CommonFiles/img/membership.png")%>' alt=""/></span><br>

                            <span class="icoheading">Membership</span><br>

                            <span class="icotxt">
                             </span>
</a>                      
                    </div>

                 

                   <%-- </div>--%>
                </div>
            </div>
                           
	</article>
    </div>
    <script src="../CommonFiles/js/jquery.mousewheel.min.js" type="text/javascript"></script>
    <script src="../CommonFiles/js/jquery.event.drag.min.js" type="text/javascript"></script>
    <script src="../CommonFiles/js/jquery.newstape.js" type="text/javascript"></script>
    <script src='<%= ResolveUrl("../CommonFiles/OnlinePortalJS/ExamBoard/Default.js")%>'
        type="text/javascript"></script>
    <!-- Middle End Here -->
</asp:Content>
