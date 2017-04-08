using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
using System.Resources;
using System.Reflection;

namespace QuestionBank.Common
{

    public class clsExceptionLog
    {
        public string CheckException(string responseCode)
        {
            string responseMessage = GetResxNameByValue("Message" + responseCode);
            return responseMessage;
        }

        private string GetResxNameByValue(string value)
        {
            ResourceManager objResourceManager = new ResourceManager("QuestionBank.Common.Message", Assembly.GetExecutingAssembly());

            string resValue = objResourceManager.GetString(value);
            return resValue;
        }
    }
   
}
