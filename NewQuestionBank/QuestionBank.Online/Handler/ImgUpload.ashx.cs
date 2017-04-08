using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;

namespace ckeditor.Handler
{
    /// <summary>
    /// Summary description for ImgUpload
    /// </summary>
    public class ImgUpload : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {

            string ImgPath = ConfigurationManager.AppSettings["ImagePath"].ToString();
            string ImgPathRetrive = ConfigurationManager.AppSettings["ImagePathRetrive"].ToString();

            HttpPostedFile uploads = context.Request.Files["upload"];
            string CKEditorFuncNum = context.Request["CKEditorFuncNum"];
            string file = System.IO.Path.GetFileName(uploads.FileName);
           
            Guid guid = new Guid();
            string UniqePath = Convert.ToString(DateTime.Now.Ticks) + file;
            string Savepath = ImgPath + UniqePath;
        
            uploads.SaveAs(Savepath);

            //uploads.SaveAs(context.Server.MapPath("~\\UploadImage\\" + Convert.ToString(DateTime.Now.Ticks) + guid.ToString() + file));
           // string url = "http://localhost:7908/UploadImage/" + file;
           // string url = ImgPath + Convert.ToString(DateTime.Now.Ticks) + guid.ToString() + file;
            string url = ImgPathRetrive + UniqePath;

            // uploads.SaveAs(url);



            context.Response.Write("<script>window.parent.CKEDITOR.tools.callFunction(" + CKEditorFuncNum + ", \"" + url + "\");</script>");
            //context.Response.Write("<script>window.parent.CKEDITOR.tools.callFunction(" + CKEditorFuncNum + ", \"" + url + "\");</script>");
            context.Response.End();
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}