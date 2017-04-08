using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using QuestionBank.Online.GatewayService;
using QuestionBank.Common;
using Newtonsoft.Json;
using System.Configuration;
using System.Net.Mail;
using System.Net;
using System.Data;

namespace QuestionBank.Online.OnlinePortal.Pages
{
    public partial class success : System.Web.UI.Page
    {
        GatewayServiceClient objRoutingService = new GatewayServiceClient();
        clsResponse objResponse = new clsResponse();
        string strOutput = string.Empty;
        protected void Page_Load(object sender, EventArgs e)
        {


            if (Request.Form["transStatus"] == "Y")
            {
                renewal.Visible = false;
                newuser.Visible = false;

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
                String guid = Guid.NewGuid().ToString();
                string GuId = guid.Replace("-", "");

                string Flag = "";



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
                strInputXML.Append("<UniqueGUID>" + GuId + "</UniqueGUID>");
                strInputXML.Append("</Root>");

                strOutput = objRoutingService.Execute(Module.Admin, ActionType.Save_MembershipDetails, strInputXML.ToString(), "", OutputType.JSON);
                objResponse = JsonConvert.DeserializeObject<clsResponse>(strOutput);
                Flag = objResponse.responseData;
                //if (objResponse.responseCode == (int)Common.clsResponseValue.ResponseCode.Success)
                //{
                //    DataSet ds = new DataSet();
                //    ds = JsonConvert.DeserializeObject<DataSet>(objResponse.responseData);
                //    if (ds.Tables[0].Rows.Count > 0)
                //    {
                //        Flag = ds.Tables[0].Rows[0]["flag"].ToString();
                //    }
                //}

                string FromEmailId = ConfigurationManager.AppSettings["FromEmailId"].ToString();
                string FromEmailIdPWD = ConfigurationManager.AppSettings["FromEmailPwd"].ToString();
                string ToEmailId = ConfigurationManager.AppSettings["ToEmailId"].ToString();
                string Message = "";

                string link = "http://www.sciencetests.co.uk/onlineportal/pages/frmPasswordDetail.aspx?ActivationId=" + GuId;
                //string link = "http://localhost:24535/onlineportal/pages/frmPasswordDetail.aspx?ActivationId=" + GuId;
                Message += "<p><hr/><b>This is a system generated mail. Please do not reply to this email ID</b><hr/><br/><br/>";
                Message += "Dear " + "  " + Username;
                Message += "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;Welcome. We thank you for your registration with us.<br/>using the link given below.";
                Message += "<br/>Please<a href=" + link + " target=_parent>";
                Message += "Click Here</a>&nbsp;to Activate your account<br/>or copy paste this link:<br/>";
                Message += "<a href=" + link + " target=_parent><span>" + link + "</span></a>";
                Message += "<br/><br/><br/>Thanks & Regards <br/>Our Team<br/><br/><br/><hr/></p>";


                if (Flag == "1")
                {

                    newuser.Visible = true;


                    using (MailMessage mm = new MailMessage(FromEmailId, EmailId))
                    {
                        mm.Subject = "Question Bank Activation Link";
                        mm.Body = Message;

                        mm.IsBodyHtml = true;
                        SmtpClient smtp = new SmtpClient();
                        smtp.Host = "smtp.gmail.com";
                        smtp.EnableSsl = true;
                        NetworkCredential NetworkCred = new NetworkCredential(FromEmailId, FromEmailIdPWD);
                        smtp.UseDefaultCredentials = true;
                        smtp.Credentials = NetworkCred;
                        smtp.Port = 587;
                        smtp.Send(mm);


                    }

                }
                else
                {

                    renewal.Visible = true;
                }

            }

        }
    }
}