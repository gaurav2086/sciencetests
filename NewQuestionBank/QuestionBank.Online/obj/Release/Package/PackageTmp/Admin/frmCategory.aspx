﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="frmCategory.aspx.cs" Inherits="QuestionBank.Online.Admin.frmCategory" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
  <style type="text/css">
        #close
        {
            display: block;
            float: right;
            padding-right: 10px;
            cursor: pointer;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">
    <div class="row">
        <div class="col-lg-12">
            <section class="panel">
            <input id="btnAddCategory" type="button" class="btn-success" value="Add Category" />
           <label><span id="lblCount" class="badge badge-info"></span></label>
            
            <div id="divCategoryList">
                <div style="overflow: auto">
                    <table class="table table-bordered table-hover table-condensed " id="tblCategoryList">
                        <thead>
                            <tr>
                                 <th style="width: 8%; text-align: center;display:none;">
                                      #
                                </th>
                                  <th style="width:3%; text-align: center;">
                                    Category No.
                                </th>
                                <th style="width: 8%; text-align: center;">
                                    Subject Name
                                </th>
                                 <th style="width: 8%; text-align: center;">
                                   Qualification
                                </th>                                                                                                                       
                                 <th style="width: 8%; text-align: center;">
                                    Category Name 
                                </th>
                                <th style="width: 8%; text-align: center;">
                                    Active
                                </th>
                                <th style="width: 5%; text-align: center;">
                                    Edit
                                </th>                                                                
                                 <th style="width: 5%; text-align: center;">
                                    Delete
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
                                Add Category</h4>
                        </div>
                        <div class="modal-body">
                            <div id="divCategoryAdd" class="panel-body" style="min-height: 400px;">
                                <input type="hidden" id="CategoryID" value="0" />
                                <div class="form-horizontal tasi-form">
                                  <div class="form-group">
                                       
                                        <label class="col-sm-5 control-label col-lg-5" for="inputSuccess">
                                            Qualification</label>
                                        <div class="col-lg-5">
                                            <select id="Qualification">
                                            </select>
                                        </div>
                                    </div>   
                                    <div class="form-group">
                                        <input type="hidden" id="GeoID" value="0" />
                                        <label class="col-sm-5 control-label col-lg-5" for="inputSuccess">
                                            Subject Name</label>
                                        <div class="col-lg-5">
                                            <select id="SubjectName">
                                            </select>
                                        </div>
                                    </div>    
                                                                     
                                    <div class="form-group">
                                        <label class="col-lg-5" for="inputSuccess">
                                            Category</label>
                                        <div class="col-lg-7">
                                            <input type="text" class="form-control input-sm" id="txtCategoryName" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-5 control-label col-lg-5" for="inputSuccess">
                                            IsActive</label>
                                        <div class="col-lg-5">
                                            <input type="checkbox" id="chkIsActive" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button data-dismiss="modal" class="btn btn-default" type="button">
                                Close</button>
                            <button class="btn btn-success" id="btnSave" type="button">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div id="divtooltips" style='position: absolute; display: none;' class="errortip">
    </div>
    <script src='<%= ResolveUrl("../CommonFiles/page-js/Category.js")%>' type="text/javascript"></script>
    
       
</asp:Content>
