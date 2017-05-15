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
using System.Text;
using Newtonsoft.Json;
using System.Data;

namespace QuestionBank.Online.OnlinePortal.UserControls
{
    public partial class ucNewHeader : System.Web.UI.UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
           
            bool isLogIn = false;
            if (!IsPostBack)
            {
                if (Session["DisplayUserName"] != null)
                {
                    lblUserName.Text = "Welcome :" + "  " + Session["DisplayUserName"].ToString();
                    isLogIn = true;
                }

                btnlogout.Visible = isLogIn;
                divtextWhitLine.Visible = !isLogIn;
                lnkHelpDesk.Visible = !isLogIn;
                //   lnkLogout.Visible = isLogIn;
                divlnkLogin.Visible = !isLogIn;
                //  divLogin.Visible = !isLogIn;
                divSignInLink.Visible = !isLogIn;
                lblWhiteBar.Visible = !isLogIn;

            }
        }


        protected void btnLogins_Click(object sender, EventArgs e)
        {

            string inXML = "<Getlookup><ActionType>CheckUserforlogin</ActionType><Username>" + txtUername.Value + "</Username><Password>" + txtPassword.Value + "</Password></Getlookup>";

            GatewayServiceClient objRoutingService = new GatewayServiceClient();
            clsResponse objResponse = new clsResponse();
            string strOutput = string.Empty;
            strOutput = objRoutingService.Execute(Module.Admin, ActionType.Select_MembershipPlanDetails, inXML, "", OutputType.JSON);
            objResponse = JsonConvert.DeserializeObject<clsResponse>(strOutput);
            if (objResponse.responseCode == (int)Common.clsResponseValue.ResponseCode.Success)
            {
                DataSet ds = new DataSet();
                ds = JsonConvert.DeserializeObject<DataSet>(objResponse.responseData);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    Session["UserName"] = txtUername.Value;
                    Session["DisplayUserName"] = ds.Tables[0].Rows[0]["DisplayUsername"].ToString();
                    Session["UserID"] = ds.Tables[0].Rows[0]["UserID"].ToString();

                    Session["Status"] = ds.Tables[0].Rows[0]["Status"].ToString();

                    txtUername.Value = "";
                    txtPassword.Value = "";

                    tblbfrlogin.Visible = false;

                    if (ds.Tables[0].Rows[0]["Status"].ToString() == "False")
                    {
                        Response.Redirect("frmMembership.aspx?Status=False");
                    }
                    else
                    {
                        Response.Redirect("Home.aspx");
                    }

                }
                else
                {
                    Response.Write("<script>alert('Invalid UserName/Password');</script>");
                }

            }
            else
            {
                Response.Write("<script>alert('Invalid UserName/Password');</script>");
            }


        }

        protected void btnlogout_Click(object sender, EventArgs e)
        {
            Session.Abandon();
            Response.Redirect("Home.aspx");
        }


    }
}