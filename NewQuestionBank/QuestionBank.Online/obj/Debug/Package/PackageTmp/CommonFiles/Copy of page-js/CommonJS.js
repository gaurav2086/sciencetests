﻿
var GlobalPath = "..";
var GlobalServiceURL = GlobalPath +"/CommonFiles/CommonUIService/CommonUIService.asmx/";

jQuery.fn.DDFillData = function (Text, setVal) {
    var ddl = this;
    this.empty();
    var inXML = '<Root><QMMaster><Type>' + Text + '</Type><SelectedValue>' + setVal + '</SelectedValue></QMMaster></Root>';
    $.ajax({
        type: "POST",
        url: GlobalServiceURL + "Select_Lookups", // Location of the service 
        data: "{inXML :'" + inXML + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                var obj = jQuery.parseJSON(data.d.responseData);
                $(ddl).html(" ");
                $(ddl).append($("<option></option>").val(0).html('--Select--'));
                for (var i = 0; i < obj.Table.length; i++) {
                    $(ddl).append($("<option></option>").val(obj.Table[i].value).html(obj.Table[i].Text));
                }
                $(ddl).val(setVal);
            }

        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
