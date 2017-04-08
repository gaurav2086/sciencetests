using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GatewayService
{
    
        public enum ActionType // : int
        {
           
          
            SELECT_MenuMaster,
            Select_Lookups,
            QBAdmin_Login,
            InsertQMBulkData,
            Select_TopicWise_Questions,
            Select_TopicWise_Questions_Details,
            Select_Geo,
            Save_Geo,
            delete_Geo,
            Select_Qualification,
            Save_Qualification,
            delete_Qualification,
            Select_ExamBoard,
            Save_ExamBoard,
            delete_ExamBoard,
            Select_Mapping,
            Save_Mapping,
            delete_Mapping,
            Select_MappedGeo,
            Select_MappedQualification,
            Select_MappedExamBoard,
            Select_Subject,
            Save_Subject,
            delete_Subject,
            Select_Unit,
            Save_Unit,
            delete_Unit,
            Select_QuestionDetails_FillForUpdate,
            Select_Topic,
            Save_Topic,
            delete_Topic,
            Select_Category,
            Save_Category,
            delete_Category,
            Select_Subject_Unit,
            Select_DistinctSubject,
            DeshBoard,
            Select_ExamBoardDesc,
            Save_AnswerDetails,
            Select_MembershipPlanDetails,
            Save_MembershipDetails,
            Select_ReportDetails,
            Save_UserDetail,
            Select_UserDetail,
            Delete_UserDetail,
            Save_ContactInfo,

           

            

        }

        public enum Module //: int
        {
            Security=1,
            Admin = 2,
            OnlinePlateForm=3,
        }
    
}