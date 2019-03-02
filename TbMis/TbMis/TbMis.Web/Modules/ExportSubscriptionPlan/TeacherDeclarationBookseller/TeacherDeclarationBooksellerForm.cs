
namespace TbMis.ExportSubscriptionPlan.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ExportSubscriptionPlan.TeacherDeclarationBookseller")]
    [BasedOnRow(typeof(Entities.TeacherDeclarationBooksellerRow), CheckNames = true)]
    public class TeacherDeclarationBooksellerForm
    {
        public Int32 DeclarationId { set; get; }
        public String DeclarationBatchId { set; get; }
        public String DeclarationTermName { set; get; }
        public String DeclarationSchoolName { set; get; }
        public String DeclarationDepartmentName { set; get; }
        public String CourseCode { get; set; }
        public String CourseName { get; set; }
        public String DeclarationPhone { set; get; }
        public String DeclarationCheckState { set; get; }
        public String DeclarationPriority { set; get; }
        public String DeclarationDataSign { set; get; }
        public Int32 DeclarationApprovedAmount { set; get; }
        public String DeclarationRemarks { set; get; }

        public String BooksellerId { set; get; }
        public String BooksellerBooksellerName { set; get; }
        public String SubscriptionStatus { set; get; }

        public DateTime FeedbackDate { set; get; }

        public String FeedbackStaff { set; get; }

        public String Remark { set; get; }

        public String ReDeclareStatus { set; get; }

        public String DeclarationEducationalType { set; get; }
    }
}