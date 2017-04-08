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
using System.Xml;
using System.ServiceModel.Syndication;
using System.Data;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace QuestionBank.Online.OnlinePortal.Pages
{
    public partial class defaut : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            

        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse GetQualifSubjectInfo(string inXML)
        {

            

           return ClsUICommon.CallToGateWay(Module.Admin, ActionType.Select_ExamBoardDesc, inXML, OutputType.JSON);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static clsResponse GetRssFeedInfo(string inXML)
        {
            DataSet dsRSSFeed = new DataSet();
            DataTable dtRSSFeed = new DataTable();
            clsResponse objResponse = new clsResponse();

            DataColumn dc = new DataColumn("subject", System.Type.GetType("System.String"));
            DataColumn dc1 = new DataColumn("summary", System.Type.GetType("System.String"));
            DataColumn dc2 = new DataColumn("Link", System.Type.GetType("System.String"));
            dtRSSFeed.Columns.Add(dc);
            dtRSSFeed.Columns.Add(dc1);
            dtRSSFeed.Columns.Add(dc2);



            string url = "http://feeds.bbci.co.uk/news/science_and_environment/rss.xml";
            XmlReader reader = XmlReader.Create(url);
            SyndicationFeed feed = SyndicationFeed.Load(reader);
            reader.Close();
            foreach (SyndicationItem item in feed.Items)
            {
                String subject = item.Title.Text;
                String summary = item.Summary.Text;
                String link = item.Id;

                dtRSSFeed.Rows.Add(subject, summary, link);

            }
            dsRSSFeed.Tables.Add(dtRSSFeed);

            objResponse.responseData = JsonConvert.SerializeObject(dsRSSFeed, new DataSetConverter());

            string Output = JsonConvert.SerializeObject(objResponse, Newtonsoft.Json.Formatting.Indented);

            objResponse = JsonConvert.DeserializeObject<clsResponse>(Output);
            return objResponse;
        }
    }
}