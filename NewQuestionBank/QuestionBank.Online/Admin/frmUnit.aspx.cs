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
    public partial class frmUnit : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Select_MappedGeo(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Select_MappedGeo, inXML, OutputType.JSON);
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Select_MappedQualification(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Select_MappedQualification, inXML, OutputType.JSON);
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Select_MappedExamBoard(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Select_MappedExamBoard, inXML, OutputType.JSON);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Select_Subject(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Select_Subject, inXML, OutputType.JSON);
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Select_Unit(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Select_Unit, inXML, OutputType.JSON);
        }
        
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Save_Unit(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Save_Unit, inXML, OutputType.JSON);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse delete_Unit(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.delete_Unit, inXML, OutputType.JSON);
        }
    }
}