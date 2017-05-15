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
using Newtonsoft.Json;
using System.Text;
using System.Data;
using System.Xml;

namespace QuestionBank.Online.OnlinePortal.Pages
{
    public partial class frmMembership : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Redirect("~/OnlinePortal/NewPages/home.aspx");
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse GetMembershipPlanDetails(string inXML)
        {
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Select_MembershipPlanDetails, inXML, OutputType.JSON);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse SaveMembershipDetails(string inXML)
        {
            DataTable dtUserInfo = new DataTable();
            // DataSet ds = new DataSet();
            //ds.Tables.Add(dtUserInfo);

            GatewayServiceClient objRoutingService = new GatewayServiceClient();
            clsResponse objResponse = new clsResponse();
            string strOutput = string.Empty;
            StringBuilder strinXML = new StringBuilder();
            Guid guid = Guid.NewGuid();

            int index = inXML.IndexOf("</Root>");

            strinXML.Append(inXML);
            strinXML.Insert(index, "<GuID>" + guid + "</GuID>");

            DataColumn DCUserName = new DataColumn("RegistredUserName", System.Type.GetType("System.String"));
            DataColumn DCUAddress = new DataColumn("RegistredUserEmail", System.Type.GetType("System.String"));
            DataColumn DCUEmail = new DataColumn("Address", System.Type.GetType("System.String"));
            DataColumn DCUTown = new DataColumn("Town", System.Type.GetType("System.String"));
            DataColumn DCUCountryCode = new DataColumn("CountryCode", System.Type.GetType("System.String"));
            DataColumn DCUCurrencyCode = new DataColumn("CurrencyCode", System.Type.GetType("System.String"));
            DataColumn DCUTotalPaid = new DataColumn("TotalPaid", System.Type.GetType("System.String"));

            dtUserInfo.Columns.Add(DCUserName);
            dtUserInfo.Columns.Add(DCUAddress);
            dtUserInfo.Columns.Add(DCUEmail);
            dtUserInfo.Columns.Add(DCUTown);
            dtUserInfo.Columns.Add(DCUCountryCode);
            dtUserInfo.Columns.Add(DCUCurrencyCode);
            dtUserInfo.Columns.Add(DCUTotalPaid);



            XmlDocument xmldoc = new XmlDocument();
            xmldoc.LoadXml(strinXML.ToString());

            XmlElement root = xmldoc.DocumentElement;

            XmlNodeList nodes = root.SelectNodes("//Root");
            foreach (XmlNode node in nodes)
            {
                dtUserInfo.Rows.Add(node["RegistredUserName"].InnerText.ToString(),
                    node["RegistredUserEmail"].InnerText.ToString(),
                    node["Address"].InnerText.ToString(),
                    node["Town"].InnerText.ToString(),
                    node["CountryCode"].InnerText.ToString(),
                    node["CurrencyCode"].InnerText.ToString(),
                    node["TotalPaid"].InnerText.ToString()
                    );
            }

            strOutput = objRoutingService.Execute(Module.Admin, ActionType.Save_MembershipDetails, strinXML.ToString(), "", OutputType.JSON);
            objResponse = JsonConvert.DeserializeObject<clsResponse>(strOutput);
            if (objResponse.responseCode != (int)Common.clsResponseValue.ResponseCode.Success)
            {
                objResponse.responseMessage = clsResponse.CheckResponse(objResponse, (int)Operation.Select);
            }
            return objResponse;
            //return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Save_MembershipDetails, inXML, OutputType.JSON);
        }
    }
}