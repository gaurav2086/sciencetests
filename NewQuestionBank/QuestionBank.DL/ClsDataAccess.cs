using System;
using System.Data;
using System.Data.SqlClient;
using System.Xml;
using System.IO;
using System.Configuration;
using System.Resources;
using System.Globalization;
using System.Web;
using System.Text.RegularExpressions;
using System.Text;
using System.Web.Script.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using QuestionBank.Common;

namespace QuestionBank.DL
{
    public class ClsDataAccess
    {
        private SqlConnection MyConnection;
        private SqlConnection SConnect;
        private string strError;          ///to store the Error Message in XML Format

        public ClsDataAccess()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public string sqlInsertUpdate(InsertUpdate eNumFunctionalityName, string strXMLInput)
        {
            //'strFunctionalityName : Stores the Functionality Name
            //'strInputXML : Stores the Input Data in XML Format
            //'strError : Stores the Error Message that occurs during the DB Operation
            //'sqlInsert() String : On Successful Operation Returns 0 else Error Number and Error Description

            SqlCommand MYCommand = new SqlCommand();  //'SQL Command Object
            clsResponse objResponse = new clsResponse();
            try
            {
                if (!SetConnection())
                {
                    //'if connection properties not found or if the connection is not established 
                    objResponse.responseCode = (int)Common.clsResponseValue.ResponseCode.ConnectionUnavailable;
                    objResponse.responseMessage = Common.clsResponseValue.ResponseMessage.ConnectionUnavailable;
                    //'Error Message is Returned
                    return JsonConvert.SerializeObject(objResponse, Newtonsoft.Json.Formatting.Indented);
                }
                else
                {
                    //  LogData("sqlInsert() " + eNumFunctionalityName + " " + strXMLInput);

                    int returnValue;	//'returns identity value
                    string strSPName;	//'to store the Stored Procedure Name

                    strSPName = "";

                    switch (eNumFunctionalityName)
                    {
                        case InsertUpdate.InsertData:
                            strSPName = "QuestionBank_InsertData";
                            break;
                        case InsertUpdate.InsertQMBulkData:
                            //strSPName = "QB_InsertQMBulkData";
                            strSPName = "QB_Insert_QMMaster_QMDetails";
                            break;
                        case InsertUpdate.Save_Geo:
                            strSPName = "QB_Save_Geo";
                            break;

                        case InsertUpdate.Save_Qualification:
                            strSPName = "QB_Save_Qualification";
                            break;

                        case InsertUpdate.Save_ExamBoard:
                            strSPName = "QB_Save_ExamBoard";
                            break;
                        case InsertUpdate.Save_Mapping:
                            strSPName = "QB_Save_Mapping";
                            break;
                        case InsertUpdate.Save_Subject:
                            strSPName = "QB_Save_Subject";
                            break;
                        case InsertUpdate.Save_Unit:
                            strSPName = "QB_Save_Unit";
                            break;
                        case InsertUpdate.Save_Topic:
                            strSPName = "QB_Save_Topic";
                            break;
                        case InsertUpdate.Save_Category:
                            strSPName = "QB_Save_Category";
                            break;

                        case InsertUpdate.Save_AnswerDetails:
                            strSPName = "QB_Save_AnswerDetails";
                            break;
                        case InsertUpdate.Save_MembershipDetails:
                            strSPName = "QB_Save_MembershipDetails";
                            break;
                        case InsertUpdate.Save_UserDetail:
                            strSPName = "QB_Save_UserDetail";
                            break;
                        case InsertUpdate.Save_ContactInfo:
                            strSPName = "QB_Save_ContactInfo";
                            break;
                    }


                    if (strSPName != "")
                    {
                        using (MYCommand = new SqlCommand(strSPName, MyConnection)) //'Passing the Stored Procedure Name and Connection Object as Parameters
                        {
                            MYCommand.CommandType = CommandType.StoredProcedure; 						//'Setting the Command Type as Stored Procedure
                            MYCommand.CommandTimeout = 900;
                            MYCommand.Parameters.Add(new SqlParameter("@XMLParam", strXMLInput));    //'Adding the Parameter to the Stored Procedure
                            returnValue = Convert.ToInt32(MYCommand.ExecuteScalar());
                        }

                        MyConnection.Close();

                        if (returnValue > 0)
                        {
                            //'for success
                            objResponse.responseCode = (int)Common.clsResponseValue.ResponseCode.Success;
                            //'Success Message is Returned
                            objResponse.responseData = returnValue.ToString();//Common.clsResponseValue.ResponseMessage.Success;
                            objResponse.responseMessage = Common.clsResponseValue.ResponseMessage.Success;
                        }
                        else
                        {
                            //'Error Message is Returned
                            objResponse.responseCode = (int)Common.clsResponseValue.ResponseCode.NoRecord;
                            objResponse.responseMessage = Common.clsResponseValue.ResponseMessage.NoRecord;
                        }

                        return JsonConvert.SerializeObject(objResponse, Newtonsoft.Json.Formatting.Indented);
                    }
                    else
                    {
                        MyConnection.Close();
                        //'if Stored Procedure Not Found / Invalid Functionality Name Provided.
                        objResponse.responseCode = (int)Common.clsResponseValue.ResponseCode.InvalidProcedure;
                        objResponse.responseMessage = Common.clsResponseValue.ResponseMessage.InvalidProcedure;
                        //'Error Message is Returned
                        return JsonConvert.SerializeObject(objResponse, Newtonsoft.Json.Formatting.Indented);
                    }
                }
            }
            catch (Exception ex)
            {
                MyConnection.Close();
                //'logging the exception to a log file here
                LogException(ex);
                //'if any exception occurs
                objResponse.responseCode = (int)Common.clsResponseValue.ResponseCode.Failed;
                objResponse.responseMessage = ex.Message.ToString();
                //'Error Message is Returned
                return JsonConvert.SerializeObject(objResponse, Newtonsoft.Json.Formatting.Indented);
            }
            finally
            {
                MYCommand = null;
                MyConnection = null;
            }
        }

        public string sqlSelect(Select eNumFunctionalityName, string strXMLInput, OutputType format)
        {
            string OutPut = "";

            if (format == OutputType.JSON)
            {
                OutPut = sqlSelectJSON(eNumFunctionalityName, strXMLInput);
            }
            else if (format == OutputType.XML)
            {
                OutPut = sqlSelectXML(eNumFunctionalityName, strXMLInput);
            }
            return OutPut;
        }

        public string sqlSelectJSON(Select eNumFunctionalityName, string strXMLInput)
        {

            //'strFunctionalityName : Stores the Functionality Name
            //'strInputXML : Stores the Input Data in XML Format
            //'strError : Stores the Error Message that occurs during the DB Operation
            //'sqlSelect() String : On Successful Operation Returns String of Records in XML Format else Empty String

            SqlCommand MYCommand;       //'SQL Command Object
            clsResponse objResponse = new clsResponse();
            try
            {
                if (!SetConnection())
                {
                    //'if connection properties not found or if the connection is not established 
                    objResponse.responseCode = (int)Common.clsResponseValue.ResponseCode.ConnectionUnavailable;
                    objResponse.responseMessage = Common.clsResponseValue.ResponseMessage.ConnectionUnavailable;
                    //'Error Message is Returned
                    return JsonConvert.SerializeObject(objResponse, Newtonsoft.Json.Formatting.Indented);
                }

                //  LogData("sqlSelect() " + eNumFunctionalityName + " " + strXMLInput);

                string strSPName;		  //'to store the Stored Procedure Name
                StringBuilder strOutputXML = new StringBuilder();

                strSPName = "";

                switch (eNumFunctionalityName)
                {

                    case Select.QBAdmin_Login:
                        strSPName = "SP_QBAdmin_Login";
                        break;
                    case Select.select_Menu:
                        strSPName = "QSP_SelectQualfMenu";
                        break;
                    case Select.Select_Lookups:
                        strSPName = "SP_Select_Lookups";
                        break;
                    case Select.Select_TopicWise_Questions:
                        strSPName = "SP_Select_TopicWise_Questions";
                        break;
                    case Select.Select_TopicWise_Questions_Details:
                        strSPName = "SP_Select_TopicWise_Questions_Details_New";
                        break;

                    case Select.Select_Geo:
                        strSPName = "SP_Select_Geo";
                        break;
                    case Select.Select_Qualification:
                        strSPName = "SP_Select_Qualification";
                        break;
                    case Select.Select_ExamBoard:
                        strSPName = "SP_Select_ExamBoard";
                        break;
                    case Select.Select_Mapping:
                        strSPName = "SP_Select_Mapping";
                        break;
                    case Select.Select_MappedGeo:
                        strSPName = "SP_Select_MappedGeo";
                        break;
                    case Select.Select_MappedQualification:
                        strSPName = "SP_Select_MappedQualification";
                        break;
                    case Select.Select_MappedExamBoard:
                        strSPName = "SP_Select_MappedExamBoard";
                        break;
                    case Select.Select_Subject:
                        strSPName = "SP_Select_Subject";
                        break;
                    case Select.Select_DistinctSubject:
                        strSPName = "SP_Select_DistinctSubject";
                        break;
                        
                    case Select.Select_Unit:
                        strSPName = "SP_Select_Unit";
                        break;
                    case Select.Select_QuestionDetails_FillForUpdate:
                        strSPName = "SP_Select_QuestionDetails_FillForUpdate";
                        break;

                    case Select.Select_Topic:
                        strSPName = "SP_Select_Topic";
                        break;
                    case Select.Select_Category:
                        strSPName = "SP_Select_Category";
                        break;

                    case Select.Select_Subject_Unit:
                        strSPName = "SP_Select_Subject_Unit";
                        break;
                    case Select.DeshBoard:
                        strSPName = "SP_DeshBoard";
                        break;

                    case Select.Select_ExamBoardDesc:
                        strSPName = "QSP_GetExamBoardDesc";
                        break;
                    case Select.Select_MembershipPlanDetails:
                        strSPName = "QSP_GetMembershipPlanDetails";
                    break;
                    case Select.Select_ReportDetails:
                    strSPName = "QSP_GetReportDetails";
                    break;
                    case Select.Select_UserDetail:
                    strSPName = "QSP_Select_UserDetail";
                    break;
                        
                    //.........End
                }


                if (strSPName != "")
                {
                    var ds = new DataSet();

                    using (MYCommand = new SqlCommand(strSPName, MyConnection))
                    {
                        MYCommand.CommandType = CommandType.StoredProcedure; 					//'Setting the Command Type as Stored Procedure
                        MYCommand.CommandTimeout = 9000;
                        MYCommand.Parameters.Add(new SqlParameter("@XMLParam", strXMLInput));
                        var adapter = new SqlDataAdapter(MYCommand);

                        adapter.Fill(ds);
                    }

                    //'If MYSQLReader.Read Then
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        objResponse.responseCode = 00;
                        objResponse.responseData = JsonConvert.SerializeObject(ds, new DataSetConverter());
                        objResponse.responseMessage = Common.clsResponseValue.ResponseMessage.Success;
                        return JsonConvert.SerializeObject(objResponse, Newtonsoft.Json.Formatting.Indented);
                    }
                    else
                    {
                        ////'if no data found
                        objResponse.responseCode = (int)Common.clsResponseValue.ResponseCode.NoRecord;
                        objResponse.responseMessage = Common.clsResponseValue.ResponseMessage.NoRecord;
                        ////'Error Message is Returned
                        return new JavaScriptSerializer().Serialize(objResponse);
                    }
                }
                else
                {
                    //'if Stored Procedure Not Found / Invalid Functionality Name Provided.
                    objResponse.responseCode = (int)Common.clsResponseValue.ResponseCode.InvalidProcedure;
                    objResponse.responseMessage = Common.clsResponseValue.ResponseMessage.InvalidProcedure;
                    //'Error Message is Returned
                    return new JavaScriptSerializer().Serialize(objResponse);
                }
            }
            catch (Exception ex)
            {
                //'logging the exception to a log file here
                LogException(ex);
                //'if any exception occurs
                objResponse.responseCode = (int)Common.clsResponseValue.ResponseCode.Failed;
                objResponse.responseMessage = ex.Message;
                //'Error Message is Returned
                return new JavaScriptSerializer().Serialize(objResponse);
            }
            finally
            {
                //'Closing the Connection
                MyConnection.Close();
                MYCommand = null;
                MyConnection = null;
            }


        }


        public string sqlSelectXML(Select eNumFunctionalityName, string strXMLInput)
        {
            //'strFunctionalityName : Stores the Functionality Name
            //'strInputXML : Stores the Input Data in XML Format
            //'strError : Stores the Error Message that occurs during the DB Operation
            //'sqlSelect() String : On Successful Operation Returns String of Records in XML Format else Empty String

            SqlCommand MYCommand;       //'SQL Command Object

            try
            {
                if (!SetConnection())
                {
                    //'if connection properties not found or if the connection is not opened
                    strError = "<status><errNo>900</errNo></status>";
                    return strError;
                }

                //  LogData("sqlSelect() " + eNumFunctionalityName + " " + strXMLInput);

                string strSPName;		  //'to store the Stored Procedure Name
                string strOutputXML;

                strSPName = "";
                strOutputXML = "";

                SqlDataReader MYSQLReader;      //'SQL Reader Object

                switch (eNumFunctionalityName)
                {
                    case Select.Select_Lookups:
                        strSPName = "SP_Select_Lookups";
                        break;

                }


                if (strSPName != "")
                {
                    MYCommand = new SqlCommand(strSPName, MyConnection);                    //'Passing the Stored Procedure Name and Connection Object as Parameters
                    MYCommand.CommandType = CommandType.StoredProcedure; 					//'Setting the Command Type as Stored Procedure
                    MYCommand.CommandTimeout = 9000;
                    MYCommand.Parameters.Add(new SqlParameter("@XMLParam", strXMLInput));   //'Adding the Parameter to the Stored Procedure
                    MYSQLReader = MYCommand.ExecuteReader(CommandBehavior.CloseConnection);

                    //'If MYSQLReader.Read Then
                    if (MYSQLReader.HasRows)
                    {


                        while (MYSQLReader.Read())
                        {
                            strOutputXML = strOutputXML + MYSQLReader.GetString(0);
                        }
                        if (strOutputXML != "" && strOutputXML.Length > 1)
                        {
                            strOutputXML = "<root>" + strOutputXML + "</root>";
                        }

                        return strOutputXML;
                    }
                    else
                    {
                        //'if no records found
                        strError = "<status><errNo>No record found</errNo></status>";

                        //'Error Message is Returned
                        return strError;
                    }
                }
                else
                {
                    //'if Stored Procedure Not Found / Invalid Functionality Name Provided.
                    strError = "<status><errNo>901</errNo></status>";

                    //'Error Message is Returned
                    return strError;
                }
            }
            catch (Exception ex)
            {
                //'if any exception occurs
                strError = "<status><errNo>902</errNo><errMsg>" + ex.Message + "</errMsg></status>";

                //'logging the exception to a log file here
                LogException(ex);

                //'Error Message is Returned
                return strError;
            }
            finally
            {
                //'Closing the Connection
                MyConnection.Close();
                MYCommand = null;
                MyConnection = null;
            }
        }

        public string sqlDelete(Delete eNumFunctionalityName, string strXMLInput)
        {
            SqlCommand MYCommand; //'SQL Command Object
            clsResponse objResponse = new clsResponse();
            try
            {
                if (!SetConnection())
                {
                    //'if connection properties not found or if the connection is not established 
                    objResponse.responseCode = (int)Common.clsResponseValue.ResponseCode.ConnectionUnavailable;
                    objResponse.responseMessage = Common.clsResponseValue.ResponseMessage.ConnectionUnavailable;
                    //'Error Message is Returned
                    return JsonConvert.SerializeObject(objResponse, Newtonsoft.Json.Formatting.Indented);
                }
                else
                {
                    //      LogData("sqlDelete() " + eNumFunctionalityName + " " + strXMLInput);

                    int intRowsAffected;
                    string strSPName;

                    strSPName = "";

                    switch (eNumFunctionalityName)
                    {
                        case Delete.deleteMasters:
                            strSPName = "ESP_DeleteMasters";
                            break;
                        case Delete.delete_Geo:
                            strSPName = "QB_delete_Geo";
                            break;
                        case Delete.delete_Qualification:
                            strSPName = "QB_delete_Qualification";
                            break;
                        case Delete.delete_ExamBoard:
                            strSPName = "QB_delete_ExamBoard";
                            break;
                        case Delete.delete_Mapping:
                            strSPName = "QB_delete_Mapping";
                            break;
                        case Delete.delete_Subject:
                            strSPName = "QB_delete_Subject";
                            break;
                        case Delete.delete_Unit:
                            strSPName = "QB_delete_Unit";
                            break;

                        case Delete.delete_Topic:
                            strSPName = "QB_delete_Topic";
                            break;
                        case Delete.delete_Category:
                            strSPName = "QB_delete_Category";
                            break;
                        case Delete.Delete_UserDetail:
                            strSPName = "QB_Delete_UserDetail";
                            break;
                            
                    }

                    if (strSPName != "")
                    {
                        using (MYCommand = new SqlCommand(strSPName, MyConnection)) //'Passing the Stored Procedure Name and Connection Object as Parameters
                        {
                            MYCommand.CommandType = CommandType.StoredProcedure; 						//'Setting the Command Type as Stored Procedure
                            MYCommand.CommandTimeout = 900;
                            MYCommand.Parameters.Add(new SqlParameter("@XMLParam", strXMLInput));    //'Adding the Parameter to the Stored Procedure
                            intRowsAffected = MYCommand.ExecuteNonQuery();
                        }

                        MyConnection.Close();

                        if (intRowsAffected > 0)
                        {
                            //'for success
                            objResponse.responseCode = (int)Common.clsResponseValue.ResponseCode.Success;
                            //'Success Message is Returned
                            objResponse.responseMessage = Common.clsResponseValue.ResponseMessage.Success;
                        }
                        else
                        {
                            //'Error Message is Returned
                            objResponse.responseCode = (int)Common.clsResponseValue.ResponseCode.NoRecord;
                            objResponse.responseMessage = Common.clsResponseValue.ResponseMessage.NoRecord;
                        }

                        return JsonConvert.SerializeObject(objResponse, Newtonsoft.Json.Formatting.Indented);
                    }
                    else
                    {
                        MyConnection.Close();
                        //'if Stored Procedure Not Found / Invalid Functionality Name Provided.
                        objResponse.responseCode = (int)Common.clsResponseValue.ResponseCode.InvalidProcedure;
                        //'Error Message is Returned
                        objResponse.responseMessage = Common.clsResponseValue.ResponseMessage.InvalidProcedure;
                        return JsonConvert.SerializeObject(objResponse, Newtonsoft.Json.Formatting.Indented);
                    }
                }
            }
            catch (Exception ex)
            {
                MyConnection.Close();

                //'logging the exception to a log file here
                LogException(ex);

                //'if any exception occurs
                objResponse.responseCode = (int)Common.clsResponseValue.ResponseCode.Failed;
                //'Error Message is Returned
                objResponse.responseMessage = ex.Message.ToString();
                return JsonConvert.SerializeObject(objResponse, Newtonsoft.Json.Formatting.Indented);
            }
            finally
            {
                MYCommand = null;
                MyConnection = null;
            }
        }

        public string sqlInsert(Insert eNumFunctionalityName, string strXMLInput)
        {
            //'strFunctionalityName : Stores the Functionality Name
            //'strInputXML : Stores the Input Data in XML Format
            //'strError : Stores the Error Message that occurs during the DB Operation
            //'sqlInsert() String : On Successful Operation Returns 0 else Error Number and Error Description

            SqlCommand MYCommand = new SqlCommand();     //'SQL Command Object

            try
            {
                if (!SetConnection())
                {
                    //'if connection properties not found or if the connection is not established 
                    strError = "<status><errNo>900</errNo></status>";
                    //'Error Message is Returned
                    return strError;
                }
                else
                {

                    //  LogData("sqlInsert() " + eNumFunctionalityName + " " + strXMLInput);

                    int intRowsAffected;	//'to store the rows affected
                    string strSPName;		//'to store the Stored Procedure Name

                    strSPName = "";

                    switch (eNumFunctionalityName)
                    {

                        case Insert.InsertClient:
                            strSPName = "TVFS_ClientOperation";
                            break;


                    }

                    if (strSPName != "")
                    {
                        MYCommand = new SqlCommand(strSPName, MyConnection);                     //'Passing the Stored Procedure Name and Connection Object as Parameters
                        MYCommand.CommandType = CommandType.StoredProcedure; 						//'Setting the Command Type as Stored Procedure
                        MYCommand.CommandTimeout = 900;
                        MYCommand.Parameters.Add(new SqlParameter("@XMLParam", strXMLInput));    //'Adding the Parameter to the Stored Procedure
                        intRowsAffected = MYCommand.ExecuteNonQuery();

                        //'for success
                        strError = "<status><errNo>0</errNo></status>";

                        //'Success Message is Returned

                        MyConnection.Close();

                        return strError;

                    }
                    else
                    {
                        //'if Stored Procedure Not Found / Invalid Functionality Name Provided.
                        strError = "<status><errNo>901</errNo></status>";

                        //'Error Message is Returned
                        MyConnection.Close();

                        return strError;

                    }
                }
            }
            catch (Exception ex)
            {

                MyConnection.Close();

                //'if any exception occurs
                strError = "<status><errNo>902</errNo><errMsg>" + ex.Message.ToString() + "</errMsg></status>";

                //'logging the exception to a log file here
                LogException(ex);

                //'Error Message is Returned
                return strError;
            }

            finally
            {
                MYCommand = null;
                MyConnection = null;
            }
        }

        public string sqlUpdate(Update eNumFunctionalityName, string strXMLInput)
        {
            //'strFunctionalityName : Stores the Functionality Name
            //'strInputXML : Stores the Input Data in XML Format
            //'strError : Stores the Error Message that occurs during the DB Operation
            //'sqlUpdate() String : On Successful Operation Returns 0 else Error Number and Error Description

            SqlCommand MYCommand; //'SQL Command Object
            try
            {
                if (!SetConnection())
                {
                    //'if connection properties not found or if the connection is not established
                    strError = "<status><errNo>900</errNo></status>";
                    return strError;
                }
                else
                {
                    //  LogData("sqlUpdate() " + eNumFunctionalityName + " " + strXMLInput);

                    int intRowsAffected;	//'to store the rows affected
                    string strSPName;      //'to store the Stored Procedure Name

                    strSPName = "";

                    switch (eNumFunctionalityName)
                    {
                        case Update.UpdateClient:
                            strSPName = "TVFS_ClientOperation";
                            break;


                    }

                    if (strSPName != "")
                    {
                        MYCommand = new SqlCommand(strSPName, MyConnection);                     //'Passing the Stored Procedure Name and Connection Object as Parameters
                        MYCommand.CommandType = CommandType.StoredProcedure;  						//'Setting the Command Type as Stored Procedure
                        MYCommand.CommandTimeout = 900;
                        MYCommand.Parameters.Add(new SqlParameter("@XMLParam", strXMLInput));    //'Adding the Parameter to the Stored Procedure
                        intRowsAffected = MYCommand.ExecuteNonQuery();

                        //'for success
                        strError = "<status><errNo>0</errNo></status>";

                        //09/OCT/2006
                        MyConnection.Close();

                        return strError;
                    }
                    else
                    {
                        //'if Stored Procedure Not Found / Invalid Functionality Name Provided.
                        strError = "<status><errNo>901</errNo></status>";

                        //09/OCT/2006
                        MyConnection.Close();

                        return strError;
                    }
                }
            }

            catch (Exception ex)
            {

                MyConnection.Close();

                //'if any exception occurs
                strError = "<status><errNo>902</errNo><errMsg>" + ex.Message.ToString() + "</errMsg></status>";

                //'logging the exception to a log file here
                LogException(ex);

                //'Error Message is Returned

                //'Closing the Connection
                MyConnection.Close();
                MYCommand = null;
                MyConnection = null;

                return strError;
            }
            finally
            {
                MYCommand = null;
                MyConnection = null;
            }
        }

        private bool SetConnection()
        {
            string strConnectionString = "1";
            string strConnectionState = "1";

            XmlDocument objXMLDoc = new XmlDocument();

            objXMLDoc = null;
            strConnectionString = getConfigurationParameter("ConnectionString");

            MyConnection = new SqlConnection();
            //   strConnectionString = "Data Source=kamlesh-pc;Initial Catalog=final_QuestionBank;User ID=sa;Password=bethlehem";

            try
            {
                MyConnection.ConnectionString = strConnectionString;
                MyConnection.Open();
                strConnectionState = MyConnection.State.ToString();
                if (strConnectionState.Equals("Open"))
                {
                    //'if connection is established successfully
                    return true;
                }
                else
                {
                    return false;
                }
            }

            catch (Exception ex)
            {
                //'if error occurs during connection establishment
                //MyConnection=null;
                MyConnection.Close();

                //'logging the exception to a log file here
                LogException(ex);

                return false;
            }
        }

        public DataSet ExecuteSQL(string SQLString, SqlConnection SQLConnection)
        {
            try
            {
                SqlCommand objCMD = new SqlCommand();
                DataSet objDS = new DataSet();
                SqlDataAdapter objDA = new SqlDataAdapter();
                objCMD.Connection = SQLConnection;
                objCMD.CommandText = SQLString;
                objDA.SelectCommand = objCMD;
                objDA.Fill(objDS);
                return objDS;
            }
            catch (Exception ex)
            {
                LogException(ex);

                return null;
            }
        }

        public SqlConnection ConnectSQL()
        {
            //'to set the connection to the Database
            //'if success returns true else false

            string strConnectionString;
            string strConnectionState;

            SConnect = new SqlConnection();

            strConnectionString = getConfigurationParameter("dbConnection/connectionString");
            // LogData("setConnection() " + strConnectionString);

            try
            {
                SConnect.ConnectionString = strConnectionString;
                SConnect.Open();
                strConnectionState = SConnect.State.ToString();
                if (strConnectionState.Equals("Open"))
                {
                    //'if connection is established successfully
                    return SConnect;
                }
                else
                {
                    return SConnect;
                }
            }

            catch (Exception ex)
            {
                //'if error occurs during connection establishment
                SConnect.Close();

                //'logging the exception to a log file here
                LogException(ex);

                return SConnect;
            }
        }

        public void CloseSQL()
        {
            try
            {
                SConnect.Close();


            }
            catch (Exception ex)
            {
                LogException(ex);
            }



        }

        public string getConfigurationParameter(string xpath)
        {
            XmlDocument configDoc = new XmlDocument();
            XmlNode selectNode;

            try
            {

                configDoc.Load(@"C:\Debux\QuestionBank.config");
                selectNode = configDoc.SelectSingleNode("//Configuration/" + xpath);
                return selectNode.InnerText;
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
            finally
            {
                configDoc = null;
            }

        }

        public void LogException(Exception e)
        {
            try
            {

                string dir;
                StreamWriter logFile;
                dir = getConfigurationParameter("logFilePath") + "\\" + "logs";

                if (!Directory.Exists(dir))
                {
                    Directory.CreateDirectory(dir);
                }

                logFile = new StreamWriter(dir + "\\Exception" + DateTime.Now.ToString("ddMMMyyyy") + ".log", true);

                if (Directory.Exists(dir))
                {

                    logFile.WriteLine("----------------------------------------------------------------");
                    logFile.WriteLine(DateTime.Now);
                    logFile.WriteLine(e.Message);
                    logFile.WriteLine(e.Source.ToString());
                    logFile.WriteLine(e.GetBaseException().ToString());
                    logFile.WriteLine("----------------------------------------------------------------");

                }
                logFile.Close();

            }
            catch (Exception ex)
            {
                string strEx;
                strEx = ex.Message.ToString();
            }
            finally
            {

            }
        }

        public void LogData(string strData)
        {
            int TradingServiceLog = int.Parse(System.Configuration.ConfigurationSettings.AppSettings.Get("CRMServiceLog"));
            if (TradingServiceLog == 0)
            {
                try
                {
                    if (getConfigurationParameter("logInput").Equals("1"))
                    {
                        string dir;
                        StreamWriter logFile;
                        dir = getConfigurationParameter("logFilePath") + "\\" + "logs\\";

                        if (!Directory.Exists(dir))
                        {
                            Directory.CreateDirectory(dir);
                        }

                        logFile = new StreamWriter(dir + "\\Data" + DateTime.Now.ToString("ddMMMyyyy") + ".log", true);

                        if (Directory.Exists(dir))
                        {
                            logFile.WriteLine("----------------------------------------------------------------");
                            logFile.WriteLine(DateTime.Now + " : " + strData);
                            logFile.WriteLine("----------------------------------------------------------------");
                        }
                        logFile.Close();
                    }
                }
                catch (Exception ex)
                {
                    string strEx;
                    strEx = ex.Message.ToString();
                }
                finally
                {
                }
            }
        }
    }
}
