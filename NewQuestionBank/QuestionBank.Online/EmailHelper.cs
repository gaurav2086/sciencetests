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
            string password = string.Empty;
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

                xnList = xml.SelectNodes("/Root/Password");
                if (xnList != null && xnList.Count > 0)
                {
                    password = xnList[0].InnerText;
                }


                Message = GetRegistrationEmailBody(Username, userEmail, password);

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

        private static string GetRegistrationEmailBody(string Username, string email, string password)
        {
            string message = string.Empty;
            try
            {
                message += "Dear " + Username + "," + "<br/><br/>";

                message += "<b>Congratulations and a  warm welcome to Science Tests family.</b><br/><br/>";

                message += "<b>Your login details are as follows.</b> <br/><br/>";

                message += "User Id : " + email + "<br/>";
                message += "Password : " + password + "<br/><br/>";

                message += "If you need to practise Science questions to assist in your homework on the daily basis or you need to revise the whole syllabus for the exams revision, ‘Science Tests’ is an attempt to assist you. You will get detailed explanation for each question. Even if you are not a Science student, these questions will help you to understand and explore this complex and beautiful universe.<br/><br/>";

                message += "Despite our best efforts and our passion to provide the seamless sessions of practice, there may be instances when you would like to communicate with us for further improving our services. You are suggested to email at admin@sciencetests.co.uk, you can also leave your name, email and number in ‘Contact Us’ page and one of our team member will be happy to be in touch with you.. <br/><br/>";

                message += "Please accept the assurance of the highest consideration all the time.<br/><br/>";

                message += "We wish you an enjoyable and learning experience with Science Tests.<br/><br/>";

                message += "<br/><br/>Warmest Regards. <br/>Science Tests team<br/><br/><br/><hr/></p>";
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return message;
        }
    }
}