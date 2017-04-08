using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.ServiceModel.Web;
using QuestionBank.Common;


namespace GatewayService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IGatewayService" in both code and config file together.
    [ServiceContract]
    public interface IGatewayService
    {
        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest, ResponseFormat = WebMessageFormat.Json)]
        string Execute(Module ModuleName, ActionType Action, string inXML, string SessionID, OutputType Format);

        
        //[OperationContract]
        //bool isSessionActive(string sessionId);
    }
}
