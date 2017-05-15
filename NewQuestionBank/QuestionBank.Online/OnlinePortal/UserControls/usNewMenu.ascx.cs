using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace QuestionBank.Online.OnlinePortal.UserControls
{
    public partial class usNewMenu : System.Web.UI.UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            bool isLogIn = false;
            if (Session["DisplayUserName"] != null)
            {
                // lblUserName.Text = "Welcome :" + "  " + Session["DisplayUserName"].ToString();
                isLogIn = true;

            }

            //  divLoginAfter.Visible = isLogIn;
            lnkAdminEmail.Visible = !isLogIn;
            lnkSignIn.Visible = !isLogIn;
        }

        protected void btnlogout_Click(object sender, EventArgs e)
        {
            Session.Abandon();
            Response.Redirect("Home.aspx");
        }

    }
}