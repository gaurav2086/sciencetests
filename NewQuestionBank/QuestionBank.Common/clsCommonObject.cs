using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Security.Cryptography;
using System.IO;

namespace QuestionBank.Common
{
    public class clsResponse
    {
        public int responseCode { get; set; }
        public string responseMessage { get; set; }
        public string responseData { get; set; }

        public static string CheckResponse(clsResponse response, int operation)
        {
            clsExceptionLog ObjException = new clsExceptionLog();
            string responseMessage = string.Empty;
            int responseCode = response.responseCode;

            if (responseCode == (int)clsResponseValue.ResponseCode.InvalidModule ||
                responseCode == (int)clsResponseValue.ResponseCode.ConnectionUnavailable ||
                responseCode == (int)clsResponseValue.ResponseCode.InvalidProcedure ||
                responseCode == (int)clsResponseValue.ResponseCode.InvalidModule ||
                responseCode == (int)clsResponseValue.ResponseCode.InvalidSession)
            {
                responseMessage = ObjException.CheckException(responseCode.ToString());
            }
            else
            {
                responseMessage = ObjException.CheckException(responseCode.ToString() + operation);
            }

            return responseMessage;
        }
    }

    public enum OutputType
    {
        XML = 1,
        JSON = 2,
        Table = 3
    }

    public enum Operation : int
    {
        //Action
        Insert = 1,
        Update, //2
        Delete, //3
        Status, //4
        Availability, //5
        Select, //6
        AddUser, //7
        UnAssignedUser, //8
        InsertOnly, //9
        InsertInvestigation
    }

    public class clsResponseValue
    {
        public enum ResponseCode : int
        {
            Success = 0,
            Failed,
            NoRecord,
            ConnectionUnavailable,
            InvalidProcedure,
            InvalidModule,
            InvalidSession
        }

        public class ResponseMessage
        {
            public const string Success = "Success";
            //For Failed exception is catched
            public const string NoRecord = "No Records Found";
            public const string ConnectionUnavailable = "Unable to Establish Server Connection";
            public const string InvalidProcedure = "Invalid Functionality";
            public const string InvalidModule = "Invalid Module";
            public const string InvalidSession = "Invalid Session";
        }
    }
}
