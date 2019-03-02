
namespace TbMis.ExportSubscriptionPlan.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ExportSubscriptionPlan.TeacherDeclarationBookseller")]
    [BasedOnRow(typeof(Entities.TeacherDeclarationBooksellerRow), CheckNames = true)]
    public class TeacherDeclarationBooksellerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DeclarationId { set; get; }
        public String DeclarationBatchId { set; get; }

        [Width(150), EditLink(ItemType = "TextBookInfo.Textbook")]
        public StringField TextbookName { set; get; }
        public String DeclarationTermName { set; get; }
        public String DeclarationSchoolName { set; get; }
        public String DeclarationDepartmentName { set; get; }
        [Width(150), EditLink(ItemType = "CourseInfo.Course")]
        public String CourseCode { get; set; }
        [Width(150), EditLink(ItemType = "CourseInfo.Course")]
        public String CourseName{ get; set; }
        public String DeclarationPhone { set; get; }
        public String DeclarationCheckState { set; get; }
        public String DeclarationPriority { set; get; }
        public String DeclarationDataSign { set; get; }
        public Int32 DeclarationApprovedAmount { set; get; }
        public String DeclarationRemarks { set; get; }
        
        public String BooksellerId { set; get; }
        public String BooksellerBooksellerName { set; get; }
        [LookupEditor(typeof(Modules.ExportSubscriptionPlan.Lookups.TeacherSubscriptionStatusLookup)), QuickFilter(CssClass = "hidden-xs")]
        public String SubscriptionStatus { set; get; }
        
        public DateTime FeedbackDate { set; get; }

        public String FeedbackStaff { set; get; }

        public String Remark { set; get; }

        public String ReDeclareStatus { set; get; }
       
        public String DeclarationEducationalType { set; get; }
    }
}