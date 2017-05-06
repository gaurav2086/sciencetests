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
            if (Session["DisplayUserName"] != null)
            {
                lblUserName.Text = "Welcome :" + "  " + Session["DisplayUserName"].ToString();

                loginLink.Visible = false;
                SignInLink.Visible = false;
                lnkUserName.Visible = true;
                lblWhiteBar.Visible = false;
            }
            else
            {
                loginLink.Visible = true;
                SignInLink.Visible = true;
                lnkUserName.Visible = false;
                lblWhiteBar.Visible = true;
            }
        }


        protected void btnlogout_Click(object sender, EventArgs e)
        {
            Session.Abandon();
            Response.Redirect("Home.aspx");
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            Session.Abandon();
            Response.Redirect("Home.aspx");
        }
    }
}