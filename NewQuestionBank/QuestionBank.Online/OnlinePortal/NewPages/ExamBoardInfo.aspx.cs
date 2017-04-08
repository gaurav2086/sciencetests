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


namespace QuestionBank.Online.OnlinePortal.NewPages
{
    public partial class ExamBoardInfo : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse GetExamBoardDesc(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Select_ExamBoardDesc, inXML, OutputType.JSON);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse SubmitAnswer(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Save_AnswerDetails, inXML, OutputType.JSON);
        }
    }
}