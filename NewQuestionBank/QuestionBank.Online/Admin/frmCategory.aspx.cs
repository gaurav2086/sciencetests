using System;
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
    public partial class frmCategory : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Select_DistinctSubject(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Select_DistinctSubject, inXML, OutputType.JSON);
        }
        
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Select_Subject(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Select_Subject, inXML, OutputType.JSON);
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Select_Category(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Select_Category, inXML, OutputType.JSON);
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Save_Category(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Save_Category, inXML, OutputType.JSON);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse delete_Category(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.delete_Category, inXML, OutputType.JSON);
        }
    }
}