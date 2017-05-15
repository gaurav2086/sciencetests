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


namespace QuestionBank.Online.OnlinePortal.Pages
{
    public partial class frmPromotionalSignIn : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse Save_PromotionUserDetail(string inXML)
        {

            clsResponse retVal = null;
            string displayUserName = string.Empty;
            try
            {
                retVal = ClsUICommon.CallToGateWay(Module.Admin, ActionType.Save_MembershipDetails, inXML, OutputType.JSON);
                if (retVal != null)
                {
                    //if (retVal.responseMessage == "Success")
                    //{
                    EmailHelper.SendRegistrationEmail(inXML, out displayUserName);

                    if (!string.IsNullOrEmpty(displayUserName))
                        HttpContext.Current.Session["DisplayUserName"] = displayUserName;
                    //}
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return retVal;
        }
    }
}