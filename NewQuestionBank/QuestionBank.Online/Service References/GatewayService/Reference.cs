﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.1
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QuestionBank.Online.GatewayService {
    using System.Runtime.Serialization;
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="Module", Namespace="http://schemas.datacontract.org/2004/07/GatewayService")]
    public enum Module : int {
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Security = 1,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Admin = 2,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        OnlinePlateForm = 3,
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="ActionType", Namespace="http://schemas.datacontract.org/2004/07/GatewayService")]
    public enum ActionType : int {
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        SELECT_MenuMaster = 0,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_Lookups = 1,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        QBAdmin_Login = 2,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        InsertQMBulkData = 3,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_TopicWise_Questions = 4,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_TopicWise_Questions_Details = 5,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_Geo = 6,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Save_Geo = 7,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        delete_Geo = 8,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_Qualification = 9,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Save_Qualification = 10,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        delete_Qualification = 11,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_ExamBoard = 12,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Save_ExamBoard = 13,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        delete_ExamBoard = 14,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_Mapping = 15,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Save_Mapping = 16,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        delete_Mapping = 17,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_MappedGeo = 18,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_MappedQualification = 19,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_MappedExamBoard = 20,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_Subject = 21,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Save_Subject = 22,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        delete_Subject = 23,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_Unit = 24,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Save_Unit = 25,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        delete_Unit = 26,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_QuestionDetails_FillForUpdate = 27,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_Topic = 28,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Save_Topic = 29,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        delete_Topic = 30,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_Category = 31,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Save_Category = 32,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        delete_Category = 33,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_Subject_Unit = 34,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_DistinctSubject = 35,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        DeshBoard = 36,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_ExamBoardDesc = 37,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Save_AnswerDetails = 38,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_MembershipPlanDetails = 39,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Save_MembershipDetails = 40,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_ReportDetails = 41,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Save_UserDetail = 42,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Select_UserDetail = 43,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Delete_UserDetail = 44,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Save_ContactInfo = 45,
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="GatewayService.IGatewayService")]
    public interface IGatewayService {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IGatewayService/Execute", ReplyAction="http://tempuri.org/IGatewayService/ExecuteResponse")]
        string Execute(QuestionBank.Online.GatewayService.Module ModuleName, QuestionBank.Online.GatewayService.ActionType Action, string inXML, string SessionID, QuestionBank.Common.OutputType Format);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IGatewayServiceChannel : QuestionBank.Online.GatewayService.IGatewayService, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class GatewayServiceClient : System.ServiceModel.ClientBase<QuestionBank.Online.GatewayService.IGatewayService>, QuestionBank.Online.GatewayService.IGatewayService {
        
        public GatewayServiceClient() {
        }
        
        public GatewayServiceClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public GatewayServiceClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public GatewayServiceClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public GatewayServiceClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public string Execute(QuestionBank.Online.GatewayService.Module ModuleName, QuestionBank.Online.GatewayService.ActionType Action, string inXML, string SessionID, QuestionBank.Common.OutputType Format) {
            return base.Channel.Execute(ModuleName, Action, inXML, SessionID, Format);
        }
    }
}
