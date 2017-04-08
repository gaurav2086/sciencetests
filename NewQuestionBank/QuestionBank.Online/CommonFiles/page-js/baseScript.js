function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
} // for create xml file
function CreateXML(Parameters, values) {
    Getlookupstart = "<Root>";
    generatexml = Getlookupstart;

    for (xmlindex = 0; xmlindex < Parameters.length; xmlindex++) {
        Module = "<";
        Module += Parameters[xmlindex];
        Module += ">";
        Module += values[xmlindex];
        Module += "</";
        Module += Parameters[xmlindex];
        Module += ">";
        generatexml += Module;
    }
    Getlookupend = "</Root>";
    generatexml += Getlookupend;
    return generatexml;
}

function CreateXMLMasterDetails(MasterParameters, Mastervalues, DetailsParameters, Detailsvalues) {
    var xml = "";
    var Masterxml = "";
    for (xmlindex = 0; xmlindex < MasterParameters.length; xmlindex++) {
        Mxml = "<";
        Mxml += MasterParameters[xmlindex];
        Mxml += ">";
        Mxml += Mastervalues[xmlindex];
        Mxml += "</";
        Mxml += MasterParameters[xmlindex];
        Mxml += ">";
        Masterxml += Mxml;
    }
    var Detailsxml = "";

    for (xmlindex = 0; xmlindex < DetailsParameters.length; xmlindex++) {
        Dxml = "<row><";
        Dxml += DetailsParameters[xmlindex];
        Dxml += ">";
        Dxml += Detailsvalues[xmlindex];
        Dxml += "</";
        Dxml += DetailsParameters[xmlindex];
        Dxml += "></row>";
        Detailsxml += Dxml;
    }
    xml = "<Root><Master>" + Masterxml + "</Master><Details>" + Detailsxml + "</Details></Root>";

    return xml;
}

function ResetFields(form) {
    $(':input', form).each(function () {
        var type = this.type;
        var tag = this.tagName.toLowerCase();
        if (type == 'text' || type == 'password' || tag == 'textarea' || type == 'file' )
            this.value = "";
        else if (type == 'checkbox' || type == 'radio')
            this.checked = false;
        else if (tag == 'select')
            this.selectedIndex = 0;
    });
}
function ReadFields(form) {
    parameters = [];
    values = [];
    
    $("#" + form + " select, input[type=checkbox],input[type=text],input[type=hidden]").each(function () {
        parameters.push($(this).attr("id"));
        values.push($(this).val());
    });    
  return CreateXML(parameters, values);

}

function tips(a, txt) {
    $('#divtooltips').text(txt);
    var offset = $(a).offset();
    divtooltips.style.left = parseInt(offset.left) + 'px';
    divtooltips.style.top = (parseInt(offset.top) + 25) + 'px';
    $('#divtooltips').show();
    $(a).focus();
}

function hidetips() {
    $('#divtooltips').hide();
    $('#divtooltips').text('');
}
function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }

    return (mm + "/" + dd + "/" + yyyy);
}
function getCurrentTime() {
    var today = new Date();
    var hh = today.getHours();
    if (hh < 10) { hh = '0' + hh }

    return (hh + ":00");
}
function getCurrentDay() {
    var today = new Date();
    return (today.getDay());
}
function Boolean(string) {
    if (string == "true") {
        return true;
    } else {
        return false;
    }
}
function padingZero(num, size) {
    var s = "00" + num;
    return s.substr(s.length - size);
}


function getAge(birth) {

    var today = new Date();
    var nowyear = today.getFullYear();
    var nowmonth = today.getMonth();
    var nowday = today.getDate();

    var birthyear = birth.getFullYear();
    var birthmonth = birth.getMonth();
    var birthday = birth.getDate();

    var age = nowyear - birthyear;
    var age_month = nowmonth - birthmonth;
    var age_day = nowday - birthday;

    if (age_month < 0 || (age_month == 0 && age_day < 0)) {
        age = parseInt(age) - 1;
    }
    return age;    

}
function isValidDate(dateStr) {
    var msg = "";
    
    var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;

    var matchArray = dateStr.match(datePat); // is the format ok?
    if (matchArray == null) {
        msg = "Date is not in a valid format.";
        return msg;
    }

    month = matchArray[1]; // parse date into variables
    day = matchArray[3];
    year = matchArray[4];


    if (month < 1 || month > 12) { // check month range
        msg = "Month must be between 1 and 12.";
        return msg;
    }

    if (day < 1 || day > 31) {
        msg = "Day must be between 1 and 31.";
        return msg;
    }

    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
        msg = "Month " + month + " doesn't have 31 days!";
        return msg;
    }

    if (month == 2) { // check for february 29th
        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day > 29 || (day == 29 && !isleap)) {
            msg = "February " + year + " doesn't have " + day + " days!";
            return msg;
        }
    }

    if (day.charAt(0) == '0') day = day.charAt(1);

    //Incase you need the value in CCYYMMDD format in your server program
    //msg = (parseInt(year,10) * 10000) + (parseInt(month,10) * 100) + parseInt(day,10);

    return msg;  // date is valid
}