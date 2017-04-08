<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="frmGeo.aspx.cs" Inherits="QuestionBank.Online.Admin.frmGeo" %>

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
            <input id="btnAddGeo" type="button" class="btn-success" value="Add Geo" />
            <%--<input type="text" disabled="disabled" id="lblCount" />--%>
            <label><span id="lblCount" class="badge badge-info"></span></label>
            <div id="divGeoList">
                <div style="overflow: auto">
                    <table class="table table-bordered table-hover table-condensed " id="tblGeoList">
                        <thead>
                            <tr>
                                <th style="width: 8%; text-align: center;display:none;">
                                    #
                                </th>
                                <th style="width: 3%; text-align: center;">
                                   Geo No.
                                </th>
                                <th style="width: 8%; text-align: center;">
                                    Geo Name
                                </th>
                                <th style="width: 8%; text-align: center;">
                                    IsActive
                                </th>
                                <th style="width: 8%; text-align: center;">
                                    Edit
                                </th>
                                 <th style="width: 8%; text-align: center;">
                                    delete
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
                                Add Geo</h4>
                        </div>
                        <div class="modal-body">
                            <div id="divGeoAdd" class="panel-body" style="min-height: 100px;">
                                <input type="hidden" id="GeoId" value="0" />
                                <div class="form-horizontal tasi-form">
                                    <div class="form-group">
                                       
                                       
                                       
                                        <label class="col-sm-5 control-label col-lg-5" for="inputSuccess">
                                            Geo Name</label>
                                        <div class="col-lg-12">
                                            <input type="text" id="txtGeo" class="form-control input-sm m-bot12" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-5 control-label col-lg-5" for="inputSuccess">
                                            IsActive</label>
                                        <div class="col-lg-12">
                                            <input type="checkbox" id="chkIsActive"   class="checkbox form-control" />
                                        </div>
                                    </div>
                                    <%--<div class="form-group">
                                        <input id="btnSave" class="btn-success" type="button" value="Save" />
                                    </div>--%>
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
        </div>
    </div>
    <div id="divtooltips" style='position: absolute; display: none;' class="errortip">
    </div>
    <script src='<%= ResolveUrl("../CommonFiles/page-js/Geo.js")%>' type="text/javascript"></script>
   

      
     
     
     
</asp:Content>
