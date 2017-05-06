using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Services;
using Newtonsoft.Json;
using System.Text;
using QuestionBank.Common;
using QuestionBank.Online.GatewayService;
using QuestionBank.Online.App_Code;



namespace QuestionBank.Online.CommonFiles.CommonUIService
{
    /// <summary>
    /// Summary description for CommonUIService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [ScriptService]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class CommonUIService : System.Web.Services.WebService
    {

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public clsResponse BindMenu(string inXML)
        {

            return ClsUICommon.CallToGateWay(Module.Security, ActionType.SELECT_MenuMaster, inXML, OutputType.JSON);
            //string xml = "";
            //GatewayServiceClient objRoutingService = new GatewayServiceClient();
            //clsResponse objResponse = new clsResponse();
            //string strOutput = string.Empty;
            //strOutput = objRoutingService.Execute(Module.Security, ActionType.SELECT_MenuMaster, xml, "", OutputType.JSON);
            //objResponse = JsonConvert.DeserializeObject<clsResponse>(strOutput);
            //if (objResponse.responseCode != (int)Common.clsResponseValue.ResponseCode.Success)
            //{
            //    objResponse.responseMessage = clsResponse.CheckResponse(objResponse, (int)Operation.Select);
            //}
            //return objResponse;

        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public clsResponse Select_Lookups(string inXML)
        {
            clsResponse objResponse = new clsResponse();
            if (HttpContext.Current.Cache["Ch" + inXML] != null)
            {
                objResponse = JsonConvert.DeserializeObject<clsResponse>(HttpContext.Current.Cache["Ch" + inXML].ToString());
            }
            else
            {
                // inXML = "<root><LookUp><Text>" + inXML + "</Text></LookUp></root>";
                GatewayServiceClient objRoutingService = new GatewayServiceClient();
                string strOutput = string.Empty;
                strOutput = objRoutingService.Execute(Module.Admin, ActionType.Select_Lookups, inXML, "", OutputType.JSON);
                objResponse = JsonConvert.DeserializeObject<clsResponse>(strOutput);
            }
            if (objResponse.responseCode != (int)Common.clsResponseValue.ResponseCode.Success)
            {
                objResponse.responseMessage = clsResponse.CheckResponse(objResponse, (int)Operation.Select);
            }
            return objResponse;
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public clsResponse GetExamBoardDesc(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Select_ExamBoardDesc, inXML, OutputType.JSON);
        }
    }
}
