﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Web.Script.Services;
using QuestionBank.Common;
using QuestionBank.Online.App_Code;
using QuestionBank.Online.GatewayService;

namespace QuestionBank.Online.Admin
{
    public partial class frmhome : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Select_DeshBoard(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.DeshBoard, inXML, OutputType.JSON);
        }
    }
}