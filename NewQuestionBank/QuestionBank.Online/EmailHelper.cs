using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;
using System.Net.Mail;
using System.Net;

namespace QuestionBank.Online
{
    public static class EmailHelper
    {
        private static string _FromEmailId = "admin@sciencetests.co.uk";
        private static string _FromEmailIdPWD = "Vledreamer1!";
        private static string _Host = "smtp.office365.com";

        public static bool SendRegistrationEmail(string inXML, out string displayUserName)
        {
            bool isSend = false;
            string userEmail = string.Empty;
            string Username = string.Empty;
            string Message = string.Empty;
            displayUserName = string.Empty;
            try
            {
                XmlDocument xml = new XmlDocument();
                xml.LoadXml(inXML);

                XmlNodeList xnList = xml.SelectNodes("/Root/EmailId");
                if (xnList != null && xnList.Count > 0)
                    userEmail = xnList[0].InnerText;

                xnList = xml.SelectNodes("/Root/Name");

                if (xnList != null && xnList.Count > 0)
                {
                    Username = xnList[0].InnerText;
                    displayUserName = Username;
                }

                Message += "<p><hr/><b>This is a system generated mail. Please do not reply to this email ID</b><hr/><br/><br/>";
                Message += "<b>Dear " + "  " + Username + ",</b>";
                Message += "<br/><br/>&nbsp;Welcome. We thank you for your registration with www.sciencetests.co.uk.<br/>";
                Message += "<br/> Name : " + Username;
                Message += "<br/> Email : " + userEmail;

                Message += "<br/><br/><br/>Thanks & Regards <br/>Our Team<br/><br/><br/><hr/></p>";


                using (MailMessage mm = new MailMessage(_FromEmailId, userEmail))
                {
                    mm.Subject = "Congratulations! You have now registered with www.sciencetests.co.uk ";
                    mm.Body = Message;

                    mm.IsBodyHtml = true;
                    SmtpClient smtp = new SmtpClient();
                    smtp.Host = _Host;
                    smtp.EnableSsl = true;
                    NetworkCredential NetworkCred = new NetworkCredential(_FromEmailId, _FromEmailIdPWD);
                    smtp.UseDefaultCredentials = true;
                    smtp.Credentials = NetworkCred;
                    smtp.Port = 587;
                    smtp.Send(mm);
                }
                isSend = true;
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }

            return isSend;

        }
    }
}