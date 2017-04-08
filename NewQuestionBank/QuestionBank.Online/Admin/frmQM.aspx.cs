using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Web.Script.Services;
using QuestionBank.Online.GatewayService;
using QuestionBank.Common;
using QuestionBank.Online.App_Code;

namespace QuestionBank.Online.Admin
{
    public partial class frmQM : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }



        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse InsertBulkData(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.InsertQMBulkData, inXML, OutputType.JSON);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Select_TopicWise_Questions_Details(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Select_TopicWise_Questions_Details, inXML, OutputType.JSON);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Select_TopicWise_Questions(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Select_TopicWise_Questions, inXML, OutputType.JSON);
        }

    }
}