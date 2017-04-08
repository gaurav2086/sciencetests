using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Web.Script.Services;
using QuestionBank.Common;
using QuestionBank.Online.GatewayService;
using Newtonsoft.Json;
using System.Data;
using System.IO;

namespace QuestionBank.Online
{
    public partial class frmLogin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }


        protected void btnlogin_Click(object sender, EventArgs e)
        {

            



            string inXML = "<Root><userName>" + txtUser.Value + "</userName><Password>" + txtPassword.Value + "</Password></Root>";

            GatewayServiceClient objRoutingService = new GatewayServiceClient();
            clsResponse objResponse = new clsResponse();
            string strOutput = string.Empty;
            strOutput = objRoutingService.Execute(Module.Security, ActionType.QBAdmin_Login, inXML, "", OutputType.JSON);
            objResponse = JsonConvert.DeserializeObject<clsResponse>(strOutput);
            if (objResponse.responseCode == (int)Common.clsResponseValue.ResponseCode.Success)
            {
                DataSet ds = new DataSet();
                ds = JsonConvert.DeserializeObject<DataSet>(objResponse.responseData);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    Session["LoginId"] = txtUser.Value;
                    Session["AdminUserName"] = ds.Tables[0].Rows[0]["UserName"].ToString();
                    Session["UserType"] = ds.Tables[0].Rows[0]["UserType"].ToString();
                    Session["Name"] = ds.Tables[0].Rows[0]["FullName"].ToString();

                    if (Session["UserType"].ToString()=="Admin")
                    {
                         Response.Redirect("Admin/frmhome.aspx");
                    }
                    else{
                        Response.Redirect("Admin/frmQMNew.aspx");
                    }
                   
                }


            }
            else
            {

                lblErrorMgs.Text = "Invalid User Name or Password";
            }
         








            //if ((txtUser.Value == "test" || txtUser.Value == "test1") && txtPassword.Value == "test")
            //{
            //    Session["UserName"] = txtUser.Value;
            //    Response.Redirect("Admin/frmhome.aspx");
                
            //}
            //else
            //{
            //    lblErrorMgs.Text = "Invalid User Name or Password";
            //}
        }
    }
}