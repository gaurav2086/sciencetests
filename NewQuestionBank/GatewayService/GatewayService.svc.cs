
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.ServiceModel.Activation;
using QuestionBank.Common;
using Newtonsoft.Json;
using QuestionBank.BL.Security;
using QuestionBank.BL;
using QuestionBank.BL.Admin;
namespace GatewayService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "GatewayService" in code, svc and config file together.

    [AspNetCompatibilityRequirements(RequirementsMode
   = AspNetCompatibilityRequirementsMode.Allowed)]
    public class GatewayService : IGatewayService
    {

        public string Execute(Module moduleName, ActionType action, string inXML, string sessionID, OutputType format)
        {
            clsResponse objResponse;
            try
            {
                string returnstr = " ";

                if (isSessionActive(sessionID))
                {
                    if (moduleName == Module.Security)
                    {
                        ClsAuthentication objAuthentication = new ClsAuthentication();

                        switch (action)
                        {
                            case ActionType.QBAdmin_Login:
                                returnstr = objAuthentication.QBAdmin_Login(inXML, format);
                                break;
                            case ActionType.SELECT_MenuMaster:
                                returnstr = objAuthentication.QBMenu(inXML, format);
                                break;
                                
                            default:
                                return string.Empty;
                       
                        
                        }


                    }
                    else if (moduleName == Module.Admin)
                    {
                        clsQuestionMaster objQuestionMaster = new clsQuestionMaster();

                        switch (action)
                        {
                           
                            case ActionType.Select_Lookups:
                                returnstr = objQuestionMaster.Select_Lookups(inXML, format);
                                break;
                            case ActionType.InsertQMBulkData:
                                returnstr = objQuestionMaster.InsertQMBulkData(inXML, format);
                                break;
                            case ActionType.Select_TopicWise_Questions:
                                returnstr = objQuestionMaster.Select_TopicWise_Questions(inXML, format);
                                break;
                            case ActionType.Select_TopicWise_Questions_Details:
                                returnstr = objQuestionMaster.Select_TopicWise_Questions_Details(inXML, format);
                                break;

                            case ActionType.Select_Geo:
                                returnstr = objQuestionMaster.Select_Geo(inXML, format);
                                break;

                            case ActionType.Save_Geo:
                                returnstr = objQuestionMaster.Save_Geo(inXML, format);
                                break;

                            case ActionType.delete_Geo:
                                returnstr = objQuestionMaster.delete_Geo(inXML, format);
                                break;

                            case ActionType.Select_Qualification:
                                returnstr = objQuestionMaster.Select_Qualification(inXML, format);
                                break;
                            case ActionType.Save_Qualification:
                                returnstr = objQuestionMaster.Save_Qualification(inXML, format);
                                break;

                            case ActionType.delete_Qualification:
                                returnstr = objQuestionMaster.delete_Qualification(inXML, format);
                                break;

                            case ActionType.Select_ExamBoard:
                                returnstr = objQuestionMaster.Select_ExamBoard(inXML, format);
                                break;
                            case ActionType.Save_ExamBoard:
                                returnstr = objQuestionMaster.Save_ExamBoard(inXML, format);
                                break;
                            case ActionType.delete_ExamBoard:
                                returnstr = objQuestionMaster.delete_ExamBoard(inXML, format);
                                break;

                            case ActionType.Select_Mapping:
                                returnstr = objQuestionMaster.Select_Mapping(inXML, format);
                                break;
                            case ActionType.Save_Mapping:
                                returnstr = objQuestionMaster.Save_Mapping(inXML, format);
                                break;
                            case ActionType.delete_Mapping:
                                returnstr = objQuestionMaster.delete_Mapping(inXML, format);
                                break;
                            case ActionType.Select_MappedGeo:
                                returnstr = objQuestionMaster.Select_MappedGeo(inXML, format);
                                break;
                            case ActionType.Select_MappedQualification:
                                returnstr = objQuestionMaster.Select_MappedQualification(inXML, format);
                                break;
                            case ActionType.Select_MappedExamBoard:
                                returnstr = objQuestionMaster.Select_MappedExamBoard(inXML, format);
                                break;
                            case ActionType.Select_Subject:
                                returnstr = objQuestionMaster.Select_Subject(inXML, format);
                                break;
                            case ActionType.Select_DistinctSubject:
                                returnstr = objQuestionMaster.Select_DistinctSubject(inXML, format);
                                break;
                            case ActionType.Save_Subject:
                                returnstr = objQuestionMaster.Save_Subject(inXML, format);
                                break;
                            case ActionType.delete_Subject:
                                returnstr = objQuestionMaster.delete_Subject(inXML, format);
                                break;

                            case ActionType.Select_Unit:
                                returnstr = objQuestionMaster.Select_Unit(inXML, format);
                                break;
                            case ActionType.Save_Unit:
                                returnstr = objQuestionMaster.Save_Unit(inXML, format);
                                break;
                            case ActionType.delete_Unit:
                                returnstr = objQuestionMaster.delete_Unit(inXML, format);
                                break;
                            case ActionType.Select_QuestionDetails_FillForUpdate:
                                returnstr = objQuestionMaster.Select_QuestionDetails_FillForUpdate(inXML, format);
                                break;

                            case ActionType.Select_Topic:
                                returnstr = objQuestionMaster.Select_Topic(inXML, format);
                                break;
                            case ActionType.Save_Topic:
                                returnstr = objQuestionMaster.Save_Topic(inXML, format);
                                break;
                            case ActionType.delete_Topic:
                                returnstr = objQuestionMaster.delete_Topic(inXML, format);
                                break;

                            case ActionType.Select_Category:
                                returnstr = objQuestionMaster.Select_Category(inXML, format);
                                break;
                            case ActionType.Save_Category:
                                returnstr = objQuestionMaster.Save_Category(inXML, format);
                                break;
                            case ActionType.delete_Category:
                                returnstr = objQuestionMaster.delete_Category(inXML, format);
                                break;

                            case ActionType.Select_Subject_Unit:
                                returnstr = objQuestionMaster.Select_Subject_Unit(inXML, format);
                                break;

                            case ActionType.DeshBoard:
                                returnstr = objQuestionMaster.DeshBoard(inXML, format);
                                break;

                            case ActionType.Select_ExamBoardDesc:
                                returnstr = objQuestionMaster.GetExamBoardDesc(inXML, format);
                                break;

                            case ActionType.Save_AnswerDetails:
                                returnstr = objQuestionMaster.Save_AnserDetails(inXML, format);
                                break;
                            case ActionType.Select_MembershipPlanDetails:
                                returnstr = objQuestionMaster.GetMembershipPlanDetails(inXML, format);
                                break;
                            case ActionType.Save_MembershipDetails:
                                returnstr = objQuestionMaster.Save_MembershipDetails(inXML, format);
                                break;
                            case ActionType.Select_ReportDetails:
                                returnstr = objQuestionMaster.GetReportDetails(inXML, format);
                                break;
                            case ActionType.Save_UserDetail:
                                returnstr = objQuestionMaster.Save_UserDetail(inXML, format);
                                break;
                            case ActionType.Select_UserDetail:
                                returnstr = objQuestionMaster.Select_UserDetail(inXML, format);
                                break;
                            case ActionType.Delete_UserDetail:
                                returnstr = objQuestionMaster.Delete_UserDetail(inXML, format);
                                break;
                            case ActionType.Save_ContactInfo:
                                returnstr = objQuestionMaster.Save_ContactInfo(inXML, format);
                                break;
                            default:
                                return string.Empty;
                                


                        }


                    }
                    
                    else
                    {
                        objResponse = new clsResponse();
                        objResponse.responseCode = (int)clsResponseValue.ResponseCode.InvalidModule;
                        objResponse.responseMessage = clsResponseValue.ResponseMessage.InvalidModule;
                        returnstr = JsonConvert.SerializeObject(objResponse, Newtonsoft.Json.Formatting.Indented);
                    }
                }
                else
                {
                    objResponse = new clsResponse();
                    objResponse.responseCode = (int)clsResponseValue.ResponseCode.InvalidSession;
                    objResponse.responseMessage = clsResponseValue.ResponseMessage.InvalidSession;
                    returnstr = JsonConvert.SerializeObject(objResponse, Newtonsoft.Json.Formatting.Indented);
                }

                return returnstr;
            }
            catch (Exception ex)
            {
                objResponse = new clsResponse();
                objResponse.responseCode = (int)clsResponseValue.ResponseCode.Failed;
                objResponse.responseMessage = ex.Message;
                return JsonConvert.SerializeObject(objResponse, Newtonsoft.Json.Formatting.Indented);
            }
        }

       

        private bool isSessionActive(string sessionId)
        {
            try
            {
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
