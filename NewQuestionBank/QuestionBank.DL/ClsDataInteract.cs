using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuestionBank.DL
{
    public enum Select
    {
        QBAdmin_Login,
        Select_Lookups,
        Select_TopicWise_Questions,
        Select_TopicWise_Questions_Details,
        Select_Geo,
        Select_Qualification,
        Select_ExamBoard,
        Select_Mapping,
        Select_MappedGeo,
        Select_MappedQualification,
        Select_MappedExamBoard,
        Select_Subject,
        Select_Unit,
        Select_QuestionDetails_FillForUpdate,
        Select_Topic,
        Select_Category,
        Select_Subject_Unit,
        Select_DistinctSubject,
        DeshBoard,
        select_Menu,
        Select_ExamBoardDesc,
        Select_MembershipPlanDetails,
        Select_ReportDetails,
        Select_UserDetail,
    }

    public enum InsertUpdate
    {
        InsertData = 1,
        InsertQMBulkData=2,
        Save_Geo = 3,
        Save_Qualification = 4,
        Save_ExamBoard = 5,
        Save_Mapping = 6,
        Save_Subject = 7,
        Save_Unit,
        Save_Topic,
        Save_Category,
        Save_AnswerDetails,
        Save_MembershipDetails,
        Save_UserDetail,
        Save_ContactInfo,
     
    }

    public enum Delete
    {
        deleteMasters = 1,
        delete_Geo = 2,
        delete_Qualification = 3,
        delete_ExamBoard = 4,
        delete_Mapping = 5,
        delete_Subject = 6,
        delete_Unit = 7,
        delete_Topic=8,
        delete_Category=9,
        Delete_UserDetail=10,
        
    }

    public enum Insert
    {
        InsertClient = 1,
        
    }

    public enum Update
    {
        UpdateClient = 1,
      
    }
}
