
function ajaxBase(url, inXML, callBack) {
    $.ajax({
        type: "POST",
        url: "CommonFiles/CommonUIService/" + url,
        data: "{inXML :'" + inXML + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

        }
    });
}

jQuery.fn.lookup = function (Text, setVal) {
    var ddl = this;
    var inXML = Text; // '<root><LookUp><Text>' + Text + '</Text></LookUp></root>';
    $.ajax({
        type: "POST",
        url: "CommonFiles/CommonUIService/CommonUIService.asmx/FillDropDown", // Location of the service 
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

jQuery.fn.fetchMaster = function (Text, setVal) {
    var inXML = Text; //'<root><Master><Text>' + Text + '</Text></Master></root>';
    var ddl = this;
    $.ajax({
        type: "POST",
        url: "CommonFiles/CommonUIService/CommonUIService.asmx/fetchMaster", // Location of the service 
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
jQuery.fn.fetchMasterMultiList = function (Text, Nlist, Olist, datatable) {
    var inXML = Text; //'<root><Master><Text>' + Text + '</Text></Master></root>';
    var ddl = this;
    $.ajax({
        type: "POST",
        url: "../CommonFiles/CommonUIService/CommonUIService.asmx/fetchMaster", // Location of the service 
        data: "{inXML :'" + inXML + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                var obj = jQuery.parseJSON(data.d.responseData);
                $(ddl).html(" ");
                $('#' + Olist).html(" ");
                for (var i = 0; i < obj.Table.length; i++) {
                    $(ddl).append($("<option></option>").val(obj.Table[i].value).html(obj.Table[i].Text));
                    if (Olist != '') {
                        for (var j = 0; j < datatable.length; j++) {
                            if (datatable[j].n_Verification_Id == obj.Table[i].value) {
                                $('#' + Olist).append($("<option></option>").val(obj.Table[i].value).html(obj.Table[i].Text));
                            }

                        }
                    }
                }
            }
        },
        failure: function (msg) {
            alert(msg);
        }
    });
}
jQuery.fn.fetchMasterDetails = function (Master, MasterId, Id) {
    var inXML = '<root><Master><MasterTable>' + Master + '</MasterTable><MasterId>' + MasterId + '</MasterId></Master></root>';
    var ddl = this;
    var type = $(this).prop("type");

    $.ajax({
        type: "POST",
        url: "../CommonFiles/CommonUIService/CommonUIService.asmx/fetchMasterDetails", // Location of the service 
        data: "{inXML :'" + inXML + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                var obj = jQuery.parseJSON(data.d.responseData);
                if (type == 'select-one') {
                    $(ddl).html(" ");
                    $(ddl).append($("<option></option>").val(0).html('--Select--'));
                    for (var i = 0; i < obj.Table.length; i++) {
                        $(ddl).append($("<option></option>").val(obj.Table[i].value).html(obj.Table[i].Text));
                    }
                    $(ddl).val(Id);
                    if (parseInt(Id) > 0)
                        $(ddl).data('default', $(ddl).find('option:selected').text());

                }
                if (type == 'text') {
                    $(ddl).val(obj.Table[0].Text);
                }
            }
        },
        failure: function (msg) {
            alert(msg);
        }
    });
}



function GobalSearch(tblGrid, tabPageControls, Search) {
    var ReadyXML = ReadFields(tabPageControls);
    $('#' + tblGrid + ' tbody').remove();
    $.ajax({
        type: "POST",
        url: "../CommonFiles/CommonUIService/CommonUIService.asmx/GobalSearch", // Location of the service 
        data: "{inXML :'" + ReadyXML + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var respCode = data.d.responseCode;
            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                $('#' + tblGrid + ' tbody').remove();

                if (Search == 'LeadOpportunity') {
                    for (i = 0; i < obj.Table.length; i++) {
                        $('#' + tblGrid).append('<tr onclick="SetValues(this);"> <td><a href="#" >' + obj.Table[i].s_Lead_No + '</a></td><td id="First_Name">' + obj.Table[i].s_First_Name + ' ' + obj.Table[i].s_Last_Name + "</td><td style='display:none;'>" + obj.Table[i].n_Assign_to_Group + "</td><td style='display:none;'>" + obj.Table[i].n_Assign_to + "</td><td style='display:none;'>" + obj.Table[i].n_Rate_Code_Sell + "</td><td style='display:none;'>" + obj.Table[i].n_Rate_Code_Buy + "</td><td style='display:none;'>" + obj.Table[i].n_Sell_Amount + "</td><td style='display:none;'>" + obj.Table[i].n_Buy_Amount + "</td><td style='display:none;'>" + obj.Table[i].n_Source + "</td><td style='display:none;'>" + obj.Table[i].n_Sub_Source + "</td><td>" + obj.Table[i].s_Email + '</td></tr>');
                    }
                }
                //Rakesh Date=11-04-2015
                if (Search == 'Lead') {
                    for (i = 0; i < obj.Table.length; i++) {
                        $('#' + tblGrid).append('<tr onclick="SetValues(this);"> <td><a href="#" >' + obj.Table[i].s_Lead_No + '</a></td><td id="First_Name">' + obj.Table[i].s_First_Name + '</td><td id="Middle_Name">' + obj.Table[i].s_Middle_Name + '</td><td id="Last_Name">' + obj.Table[i].s_Last_Name + "</td><td>" + obj.Table[i].s_Phone + "</td><td>" + obj.Table[i].s_Email + "</tr>");
                    }
                }               
                          
                //Rakesh Date=10-04-2015
                if (Search == 'Affiliate') {
                    for (i = 0; i < obj.Table.length; i++) {
                        $('#' + tblGrid).append('<tr onclick="SetValues(this);"> <td><a href="#" >' + obj.Table[i].Affiliate_Number + '</a></td><td>' + obj.Table[i].Affiliate_Name + '</td><td>' + obj.Table[i].s_First_Name + '</td><td>' + obj.Table[i].s_Last_Name + '</td><td>' + obj.Table[i].b_Alert_Phone + '</td></tr>');
                    }
                }
                //End
                if (Search == 'LeadAudit' || Search == "CustomerAudit" || Search == "OppotunityAudit") {
                    for (i = 0; i < obj.Table.length; i++) {
                        $('#' + tblGrid).append('<tr> <td>' + obj.Table[i].d_Memo_Added + '</td><td>' + obj.Table[i].s_UserName + '</td><td>' + obj.Table[i].s_Memo_Description + '</td></tr>');
                    }
                }
                if (Search == 'User' || Search == 'RecordOwner') {
                    for (i = 0; i < obj.Table.length; i++) {
                        $('#' + tblGrid).append('<tr onclick="ChangeLeadOwner(this);"> <td style="display:none"><a href="#" >' + obj.Table[i].n_UserId + '</a></td><td><a href="#" >' + obj.Table[i].s_UserName + '</a></td><td>' + obj.Table[i].s_FirstName + '</td><td>' + obj.Table[i].s_LastName + '</td></tr>');

                    }
                }
                //
                if (Search == "Staff") {
                    for (i = 0; i < obj.Table.length; i++) {
                        $('#' + tblGrid).append('<tr onclick="ChangeLeadOwner(this);"> <td style="display:none"><a href="#" >' + obj.Table[i].s_UserName + '</a></td><td><a href="#" >' + obj.Table[i].s_UserName + '</a></td><td>' + obj.Table[i].FullName + '</td></tr>');

                    }
                }
                //
                if (Search == 'LeadTask' || Search == 'CustomerTask') {
                    for (i = 0; i < obj.Table.length; i++) {
                        $('#' + tblGrid).append("<tr> <td>" + obj.Table[i].Subject + "</td><td>" + obj.Table[i].d_DueDate + "</td><td>" + obj.Table[i].AssignedTo + "</td><td>" + obj.Table[i].s_Task_Note + "</td><td>" + obj.Table[i].Status + "</td><td>" + obj.Table[i].Priority + "</td><td>" + obj.Table[i].d_Reminder + "</td>/tr>");

                    }
                }
                if (Search == 'Customer') {
                    for (i = 0; i < obj.Table.length; i++) {
                        $('#' + tblGrid).append('<tr onclick="SetValues(this);"> <td><a href="#" >' + obj.Table[i].n_Customer_NO + '</a></td><td id="s_Customer_Name">' + obj.Table[i].s_Customer_Name + '</td></tr>');
                    }
                }
                if (Search == 'CustomerInfo') {
                    for (i = 0; i < obj.Table.length; i++) {
                        $('#' + tblGrid).append('<tr onclick="SetValues(this);"><td id="s_Customer_Id" style="display:none;">' + obj.Table[i].n_Customer_ID + '</td> <td><a href="#" >' + obj.Table[i].s_Customer_Name + '</a></td><td id="s_Customer_Name">' + obj.Table[i].s_First_Name + ' ' + obj.Table[i].s_Last_Name + '</td></tr>');
                    }
                }
                if (Search == 'CustomerContact') {
                    for (i = 0; i < obj.Table.length; i++) {
                        $('#' + tblGrid).append('<tr onclick="SetValues(this);"> <td><a href="#" >' + obj.Table[i].s_First_Name + ' ' + obj.Table[i].s_Last_Name + '</a></td></tr>');
                    }
                }
                if (Search == 'Complaint') {
                    for (i = 0; i < obj.Table.length; i++) {
                        $('#' + tblGrid).append('<tr onclick="SetValues(this);"> <td><a href="#" >' + obj.Table[i].n_ReferenceNumber + '</a></td><td>' + obj.Table[i].s_AccountName + '</td></tr>');
                    }
                }
                if (Search == 'Department') {
                    for (i = 0; i < obj.Table.length; i++) {
                        $('#' + tblGrid).append('<tr onclick="SetValues(this);"> <td style="display:none;">' + obj.Table[i].n_Dept_ID + '</td><td><a href="#" >' + obj.Table[i].s_Dept_Name + '</a></td><td>' + obj.Table[i].s_Dept_Code + '</td></tr>');
                    }
                }
                $("#pagination_info").pagination({ items: obj.Table.length, itemsOnPage: 10, cssStyle: 'light-theme' });
                
            }
        },
        failure: function (msg) {
            alert(msg);
        }
    });
}


function SaveAuditData(MemoFrom, Id) {
    var str = "";

    $("select,input:text,input:checkbox").each(function (i) {
        if ($(this).attr('type') == "text" ) {
            if ($(this).data('default') != $(this).val()) {
                str += $(this).prop('id') + " has change from &#039;" + $(this).data('default') + "&#039; to &#039;" + $(this).val() + "&#039; , ";
            }
        }
        else if ($(this).attr('type') == "checkbox") {
            if ($(this).data('default') != $(this).prop("checked")) {
                str += $(this).prop('id') + " has change from &#039;" + $(this).data('default') + "&#039; to &#039;" + $(this).prop("checked") + "&#039; , ";
            }
        }
        else if ($(this).prop('type') == "select-one") {
            if ($(this).data('default') != $(this).find('option:selected').text()) {
                str += $(this).prop('id') + " has change from &#039;" + $(this).data('default') + "&#039; to &#039;" + $(this).find('option:selected').text() + "&#039; ,";

            }
        }
    });

    if (str.length > 0) {
        parameters = [];
        parameters.push('Integration_ID');
        parameters.push('Memo_From');
        parameters.push('UserID');
        parameters.push('Memo_Description');
        parameters.push('MemoFor');

        values = [];
        values.push(Id);
        values.push(MemoFrom);
        values.push(UserId);
        values.push(str);
        values.push('Lead');
        var ReadyXML = CreateXML(parameters, values);
        $.ajax({
            type: "POST",
            url: "../CommonFiles/CommonUIService/CommonUIService.asmx/InsertMemo", // Location of the service 
            data: "{inXML :'" + ReadyXML + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                //var obj = jQuery.parseJSON(data.d.responseData);
            },
            failure: function (msg) {
                alert(msg);
            }
        });
    }
}

/* added by pradeep to implement field level access right */
function AccessRight(module, submodule) {
    xml = "<Root><Mdoule>" + module + "</Mdoule><submodule>" + submodule + "</submodule></Root>";
    $.ajax({
        type: "POST",
        url: "../../../CRM/frmAddLead.aspx/AcessRight",
        data: "{inXML:'" + xml + "'}", //Data sent to server        
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (data) {
            var respCode = data.d.responseCode;

            if (respCode == 0) {
                obj = jQuery.parseJSON(data.d.responseData);
                for (i = 0; i < obj.Table.length; i++) {

                    if (obj.Table[i].Access == 0) {
                        var controlname = obj.Table[i].Control_Name;
                        controlname = '#' + controlname;

                        $(controlname).attr("disabled", true);
                    }
                    else { }
                }
            }
            else {
                showMessage(data.d.responseMessage, "Error", "Info");
            }
        },
        failure: function (msg) {
            showMessage(msg, "Error", "Error");
        }
    });
}
