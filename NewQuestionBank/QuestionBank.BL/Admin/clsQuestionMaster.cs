using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using QuestionBank.DL;
using QuestionBank.Common;

namespace QuestionBank.BL.Admin
{
    public class clsQuestionMaster
    {
        ClsDataAccess objDB;

        public string Select_TopicWise_Questions(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_TopicWise_Questions, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }


        public string Select_TopicWise_Questions_Details(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_TopicWise_Questions_Details, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        //

        public string Select_Lookups(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_Lookups, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string InsertQMBulkData(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlInsertUpdate(InsertUpdate.InsertQMBulkData, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string Select_Geo(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_Geo, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Save_Geo(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlInsertUpdate(InsertUpdate.Save_Geo, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string delete_Geo(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlDelete(Delete.delete_Geo, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Select_Qualification(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_Qualification, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Save_Qualification(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlInsertUpdate(InsertUpdate.Save_Qualification, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string delete_Qualification(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlDelete(Delete.delete_Qualification, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Select_ExamBoard(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_ExamBoard, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Save_ExamBoard(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlInsertUpdate(InsertUpdate.Save_ExamBoard, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string delete_ExamBoard(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlDelete(Delete.delete_ExamBoard, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Select_Mapping(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_Mapping, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Save_Mapping(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlInsertUpdate(InsertUpdate.Save_Mapping, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string delete_Mapping(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlDelete(Delete.delete_Mapping, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string Select_MappedGeo(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_MappedGeo, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string Select_MappedQualification(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_MappedQualification, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string Select_MappedExamBoard(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_MappedExamBoard, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Select_Subject(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_Subject, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string Select_DistinctSubject(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_DistinctSubject, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string Save_Subject(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlInsertUpdate(InsertUpdate.Save_Subject, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string delete_Subject(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlDelete(Delete.delete_Subject, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Select_Unit(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_Unit, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string Save_Unit(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlInsertUpdate(InsertUpdate.Save_Unit, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string Select_QuestionDetails_FillForUpdate(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_QuestionDetails_FillForUpdate, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        //
        public string delete_Unit(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlDelete(Delete.delete_Unit, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Select_Topic(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_Topic, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string Save_Topic(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlInsertUpdate(InsertUpdate.Save_Topic, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string delete_Topic(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlDelete(Delete.delete_Topic, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Select_Category(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_Category, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string Save_Category(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlInsertUpdate(InsertUpdate.Save_Category, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string delete_Category(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlDelete(Delete.delete_Category, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Select_Subject_Unit(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_Subject_Unit, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string DeshBoard(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.DeshBoard, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string GetExamBoardDesc(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_ExamBoardDesc, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Save_AnserDetails(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlInsertUpdate(InsertUpdate.Save_AnswerDetails, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string GetMembershipPlanDetails(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_MembershipPlanDetails, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Save_MembershipDetails(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlInsertUpdate(InsertUpdate.Save_MembershipDetails, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string GetReportDetails(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_ReportDetails, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Save_UserDetail(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlInsertUpdate(InsertUpdate.Save_UserDetail, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string Select_UserDetail(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.Select_UserDetail, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string Delete_UserDetail(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlDelete(Delete.Delete_UserDetail, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
        public string Save_ContactInfo(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlInsertUpdate(InsertUpdate.Save_ContactInfo, inXML);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }
    }
}
