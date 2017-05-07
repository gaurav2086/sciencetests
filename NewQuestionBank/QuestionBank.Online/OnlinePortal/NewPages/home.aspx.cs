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
using System.Reflection;
using QuestionBank.Online.GatewayService;
using System.Configuration;
using System.Net.Mail;
using System.Net;
using System.Xml;

namespace QuestionBank.Online.OnlinePortal.NewPages
{
    public partial class home : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (Session["DisplayUserName"] != null)
            {
                divSignIn.Visible = false;
            }
            else
            {
                divSignIn.Visible = true;
            }

        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Save_PromotionUserDetail(string inXML)
        {
            clsResponse retVal = null;
            string displayUserName = string.Empty;
            try
            {
                retVal = ClsUICommon.CallToGateWay(QuestionBank.Online.GatewayService.Module.Admin, ActionType.Save_MembershipDetails, inXML, OutputType.JSON);

                EmailHelper.SendRegistrationEmail(inXML, out displayUserName);


                if (!string.IsNullOrEmpty(displayUserName))
                    HttpContext.Current.Session["DisplayUserName"] = displayUserName;

            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }

            return retVal;


        }
    }
}