using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using QuestionBank.Online.App_Code;
using QuestionBank.Online.GatewayService;
using QuestionBank.Common;
using Newtonsoft.Json;

namespace QuestionBank.Online.OnlinePortal.Pages
{
    public partial class frmSuccess : System.Web.UI.Page
    {
        GatewayServiceClient objRoutingService = new GatewayServiceClient();
        clsResponse objResponse = new clsResponse();
        string strOutput = string.Empty;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.Form["transStatus"] == "Y")
            {
                string EmailId = Request.Form["email"];
                string Amount = Request.Form["amount"];
                string Country = Request.Form["countryString"];
                string Address = Request.Form["address"];
                string GUID = Request.Form["cartId"];
                string PostCode = Request.Form["postcode"];
                string Town = Request.Form["town"];
                string Description = Request.Form["desc"];
                string Username = Request.Form["name"];
                string ContactNo = Request.Form["tel"];
                string MesgType = Request.Form["msgType"];
                string transId = Request.Form["transId"];
                string amountString = Request.Form["amountString"];
                string currency = Request.Form["currency"];
                string cardType = Request.Form["cardType"];
                string instId = Request.Form["instId"];
              





                StringBuilder strInputXML = new StringBuilder();

                strInputXML.Append("<Root>");
                strInputXML.Append("<ActionType>InsertMembershipPlanDetail</ActionType>");
                strInputXML.Append("<RegistredUserName>" + Username + "</RegistredUserName>");
                strInputXML.Append("<RegistredUserEmail>" + EmailId + "</RegistredUserEmail>");
                strInputXML.Append("<IsActive>1</IsActive>");
                strInputXML.Append("<TotalPaid>" + Amount + "</TotalPaid>");
                strInputXML.Append("<IsPaymentDone>1</IsPaymentDone>");
                strInputXML.Append("<Address>" + Address + "</Address>");
                strInputXML.Append("<ContactNo>" + ContactNo + "</ContactNo>");
                strInputXML.Append("<Town>" + Town + "</Town>");
                strInputXML.Append("<PostalCode>" + PostCode + "</PostalCode>");
                strInputXML.Append("<Country>" + Country + "</Country>");
                strInputXML.Append("<Desc>" + Description + "</Desc>");
                strInputXML.Append("<GuID>" + GUID + "</GuID>");
                strInputXML.Append("<msgType>" + MesgType + "</msgType>");
                strInputXML.Append("<transId>" + transId + "</transId>");
                strInputXML.Append("<amountString>" + amountString + "</amountString>");
                strInputXML.Append("<currency>" + currency + "</currency>");
                strInputXML.Append("<cardType>" + cardType + "</cardType>");
                strInputXML.Append("<instId>" + instId + "</instId>");
                strInputXML.Append("</Root>");

                strOutput = objRoutingService.Execute(Module.Admin, ActionType.Save_MembershipDetails, strInputXML.ToString(), "", OutputType.JSON);
                objResponse = JsonConvert.DeserializeObject<clsResponse>(strOutput);
                if (objResponse.responseCode != (int)Common.clsResponseValue.ResponseCode.Success)
                {
                    objResponse.responseMessage = clsResponse.CheckResponse(objResponse, (int)Operation.Select);
                }
               
             
            }

        }
    }
}