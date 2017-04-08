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

            
            // tblaftrlogin.Visible = false;
            //if (Convert.ToString(Session["DisplayUserName"]) != null && Convert.ToString(Session["DisplayUserName"])!="")
            //{
               
            //    tblaftrlogin.Visible = true;
            //    tblbfrlogin.Visible = false;
            //    DivNotMember.Visible = false;
            //    lblUsername.Text = "Welcome :" + "  " + Session["DisplayUserName"].ToString();

               
            //}

           
        } 
      
        //protected void btnLogins_Click(object sender, EventArgs e)
        //{
        //    lbllogin.Visible = false;
        //    if (txtUername.Value == "")
        //    {
        //        lbllogin.Visible = true;
        //        lbllogin.Text = "Enter user name.";
        //        return;
        //    }
        //    if (txtPassword.Value == "")
        //    {
        //        lbllogin.Visible = true;
        //        lbllogin.Text = "Enter password.";
        //        return;
        //    }
           
         

        //    string inXML = "<Getlookup><ActionType>CheckUserforlogin</ActionType><Username>" + txtUername.Value + "</Username><Password>" + txtPassword.Value + "</Password></Getlookup>";

        //    GatewayServiceClient objRoutingService = new GatewayServiceClient();
        //    clsResponse objResponse = new clsResponse();
        //    string strOutput = string.Empty;
        //    strOutput = objRoutingService.Execute(Module.Admin, ActionType.Select_MembershipPlanDetails, inXML, "", OutputType.JSON);
        //    objResponse = JsonConvert.DeserializeObject<clsResponse>(strOutput);
        //     if (objResponse.responseCode == (int)Common.clsResponseValue.ResponseCode.Success)
        //     {
        //        DataSet ds = new DataSet();
        //        ds = JsonConvert.DeserializeObject<DataSet>(objResponse.responseData);
        //        if (ds.Tables[0].Rows.Count > 0)
        //        {
        //            Session["UserName"] = txtUername.Value;
        //            Session["DisplayUserName"] = ds.Tables[0].Rows[0]["DisplayUsername"].ToString();
        //            Session["UserID"] = ds.Tables[0].Rows[0]["UserID"].ToString();
                 
        //            Session["Status"] = ds.Tables[0].Rows[0]["Status"].ToString();
        //            lblUsername.Text = "Welcome" + "  " + Session["DisplayUserName"].ToString();
        //            txtUername.Value = "";
        //            txtPassword.Value = "";
                   
        //            tblaftrlogin.Visible = true;
        //            tblbfrlogin.Visible = false;
        //            DivNotMember.Visible = false;

        //            if (ds.Tables[0].Rows[0]["Status"].ToString() == "False")
        //            {
        //                Response.Redirect("frmMembership.aspx?Status=False");
        //            }
        //            else
        //            {
        //                Response.Redirect("frmDefault.aspx");
        //            }
                    
        //        }
               
               
        //    }
        //     else
        //     {
        //         lbllogin.Visible = true;
        //         lbllogin.Text = "Invalid UserName/Password";
        //     }
          


        //}

        //protected void btnlogout_Click(object sender, EventArgs e)
        //{
        //    Session.Abandon();
        //    Response.Redirect("frmDefault.aspx");
        //}
    }
}