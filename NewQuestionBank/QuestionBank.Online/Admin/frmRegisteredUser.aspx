<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="frmRegisteredUser.aspx.cs" Inherits="QuestionBank.Online.Admin.frmRegisteredUser" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">
  <div class="row">
        <div class="col-lg-12">
            <section class="panel">
            <%--<input id="btnAdduser" type="button" class="btn-success" value="Add User" />--%>
            
            <label><span id="lblCount" class="badge badge-info"></span></label>
            <div id="divRegstUserList">
                <div style="overflow: auto">
                    <table class="table table-bordered table-hover table-condensed " id="tblRegistUserList">
                        <thead>
                            <tr>
                              <th style="width: 6%; text-align: center;">
                                User No.
                                </th>
                                <th style="width: 8%; text-align: center;">
                                User Name
                                </th>
                                  <th style="width: 8%; text-align: center;">
                                User Email
                                </th>
                                <th style="width: 8%; text-align: center;">
                                Plan Name
                                </th>
                                <th style="width: 8%; text-align: center;">
                                   Plan Duration
                                </th>
                                <th style="width: 8%; text-align: center;">
                                  Plan Coast
                                </th>
                                 <th style="width: 8%; text-align: center;">
                                Plan Activation Date
                                </th>
                                 
                                <th style="width: 8%; text-align: center;">
                                   Plan Expiry Date
                                </th>
                                 <th style="width: 8%; text-align: center;">
                                 Day Remaing
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="row-fluid">
                    <div class="span6">
                        <div class="dataTables_info" id="pagination_info">
                        </div>
                    </div>
                    <input id="HidId" type="hidden" />
                </div>
            </div>
            
        </section>
            <div class="modal fade" style="width: 100%" id="myModal" tabindex="-1" role="dialog"
                aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog" style="width: 40%">
                    <%--class="modal-dialog"--%>
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                &times;</button>
                            <h4 class="modal-title">
                                Add User</h4>
                        </div>
                        <div class="modal-body">
                            <div id="divGeoAdd" class="panel-body" style="min-height: 100px;">
                                <input type="hidden" id="UserId" value="0" />
                                <div class="form-horizontal tasi-form">
                                 <div class="form-group">
                                        <label class="col-sm-5 control-label col-lg-5" for="inputSuccess">
                                           User Type</label>
                                        <div class="col-lg-12">
                                             <select id="UserType">
                                             <option value="0"><--Select--></option>
                                              <option value="Admin">Admin</option>
                                              <option value="Tutor">Tutor</option>
                                            </select>
                                            <span style="color:Red;">*</span>
                                        </div>
                                    </div>
                                       <div class="form-group row">
                                        <label class="col-lg-3" for="inputSuccess">
                                           Full Name </label>
                                        <div class="col-lg-8">
                                            <input type="text" id="txtName" class="form-control input-sm" placeholder="Full Name" />
                                        </div>
                                        <samp style="color:Red;">*</samp>
                                    </div>
                                     <div class="form-group">
                                        <label class="col-lg-3" for="inputSuccess">
                                           Email Id</label>
                                        <div class="col-lg-8">
                                            <input type="text" id="txtEmailid" class="form-control input-sm"  placeholder="Email Id" />
                                            <span id="emailerrormsg" style="font-size:14px;color:Red"></span>
                                        </div>
                                        <samp style="color:Red;">*</samp>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-lg-3" for="inputSuccess">
                                           User Name</label>
                                        <div class="col-lg-8">
                                            <input type="text" id="txtUserName" class="form-control input-sm" placeholder="User Name" />
                                        </div>
                                        <samp style="color:Red;">*</samp>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="col-lg-3" for="inputSuccess">
                                           Password</label>
                                        <div class="col-lg-8">
                                            <input type="password" id="txtPassword" class="form-control input-sm"  placeholder="Password" />
                                        </div>
                                        <samp style="color:Red;">*</samp>
                                    </div>
                                  
                                 
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button data-dismiss="modal" class="btn btn-default" type="button">
                                Close</button>
                            <button class="btn btn-success" id="btnSave" type="button">
                                Save </button>
                        </div>
                    </div>
                </div>
        
    </div>
    <div id="divtooltips" style='position: absolute; display: none;' class="errortip">
    </div>
            <script src='<%=ResolveUrl ("../CommonFiles/page-js/RegisteredUserList.js")%>' type="text/javascript"></script>
</asp:Content>
