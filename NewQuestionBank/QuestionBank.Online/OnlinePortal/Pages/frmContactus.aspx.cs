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
using System.Net.Mail;
using System.Net;
using System.Configuration;

namespace QuestionBank.Online.OnlinePortal.Pages
{
    public partial class frmContactus : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Save_ContactInfo(string inXML, string Name, string Email, string ContactNo, string Address, string Msg)
        {

            string FromEmailId = ConfigurationManager.AppSettings["FromEmailId"].ToString();
            string FromEmailIdPWD = ConfigurationManager.AppSettings["FromEmailPwd"].ToString();
            string ToEmailId = ConfigurationManager.AppSettings["ToEmailId"].ToString();
            string Message = "";

            Message += "Enquiry Detail are Below." + "\n\n";
            Message += "Name :" + " " + Name +"\n";
            Message += "Email :" + " " + Email + "\n";
            Message += "ContactNo :" + " " + ContactNo + "\n";
            Message += "Address :" + " " + Address + "\n";
            Message += "Message :" + " " + Msg + "\n";

            using (MailMessage mm = new MailMessage(FromEmailId, ToEmailId))
            {
                mm.Subject = "Enquiry Detail";
                mm.Body = Message;

                mm.IsBodyHtml = false;
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.EnableSsl = true;
                NetworkCredential NetworkCred = new NetworkCredential(FromEmailId, FromEmailIdPWD);
                smtp.UseDefaultCredentials = true;
                smtp.Credentials = NetworkCred;
                smtp.Port = 587;
                smtp.Send(mm);
               

            }
            return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Save_ContactInfo, inXML, OutputType.JSON);
        }
    }
}