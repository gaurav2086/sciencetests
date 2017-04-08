<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="frmhome.aspx.cs" Inherits="QuestionBank.Online.Admin.frmhome" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <script src="../CommonFiles/page-js/deshboard.js" type="text/javascript"></script>
    <%--
    <link href="../DesignStuff/assets/jquery-multi-select/css/multi-select.css" rel="stylesheet"
        type="text/css" />
    --%>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">
    <div class="row state-overview">
        <div class="col-lg-3 col-sm-6">
            <section class="panel">
                          <a href="frmGeo.aspx"><div class="symbol terques">
                              <i class="icon-user"></i>
                          </div>
                          <div class="value">
                              <h1 class="count" id="GEO"></h1>
                              <p>GEO</p>
                          </div>
                          </a> 
                      </section>
        </div>
        <div class="col-lg-3 col-sm-6">
            <section class="panel">
                        <a href="frmQualification.aspx">  
                          <div class="symbol red">
                              <i class="icon-tags"></i>
                          </div>
                          <div class="value">
                              <h1 class=" count2" id="Qualification"></h1>
                              <p>Qualifications</p>
                          </div>
                          </a>
                      </section>
        </div>
        <div class="col-lg-3 col-sm-6">
            <section class="panel">
                          <a href="frmExamBoard.aspx"><div class="symbol yellow">
                              <i class="icon-shopping-cart"></i>
                          </div>
                          <div class="value">
                              <h1 class=" count3" id="ExamBoard"></h1>
                              <p>ExamBoard</p>
                          </div>
                          </a>
                      </section>
        </div>
        <div class="col-lg-3 col-sm-6">
            <section class="panel">
                          <a href="frmSubject.aspx">
                          <div class="symbol blue">
                              <i class="icon-bar-chart"></i>
                          </div>
                          <div class="value">
                              <h1 class=" count4" id="Subject"></h1>
                              <p>Subject</p>
                          </div>
                          </a>
                      </section>
        </div>
        <div class="col-lg-3 col-sm-6">
            <section class="panel">
                          <a href="frmUnit.aspx"><div class="symbol red">
                              <i class="icon-bar-chart"></i>
                          </div>
                          <div class="value">
                              <h1 class=" count4" id="Unit"></h1>
                              <p>Units</p>
                          </div>
                          </a>
                      </section>
        </div>
        <div class="col-lg-3 col-sm-6">
            <section class="panel">
                          <a href="frmTopic.aspx"><div class="symbol yellow">
                              <i class="icon-bar-chart"></i>
                          </div>
                          <div class="value">
                              <h1 class=" count4" id="Topic"></h1>
                              <p>Topics</p>
                          </div>
                          </a>
                      </section>
        </div>
        <div class="col-lg-3 col-sm-6">
            <section class="panel">
                          <a href="frmCategory.aspx">
                          <div class="symbol terques">
                              <i class="icon-bar-chart"></i>
                          </div>
                          <div class="value">
                              <h1 class=" count4" id="Category"></h1>
                              <p>Category</p>
                          </div>
                          </a>
                      </section>
        </div>
        <div class="col-lg-3 col-sm-6">
            <section class="panel">
                  <a href="frmQMNew.aspx">
                          <div class="symbol red">
                              <i class="icon-bar-chart"></i>
                          </div>
                          <div class="value">
                              <h1 class=" count4" id="Questions"></h1>
                              <p>Questions</p>
                          </div>
                          </a>
                      </section>
        </div>
     
    </div>
</asp:Content>
