
namespace TbMis.ExportSubscriptionPlan.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ExportSubscriptionPlan.TeacherWholeData")]
    [BasedOnRow(typeof(Entities.TeacherWholeDataRow), CheckNames = true)]
    public class TeacherWholeDataForm
    {
        public String TermCode { get; set; }
        public String TermName { get; set; }
        public String BatchId { get; set; }
        public String SchoolId { get; set; }
        public String SchoolName { get; set; }
        public String DepartmentId { get; set; }
        public String DepartmentName { get; set; }
        public String EducationalType { get; set; }
        public Int32 TextbookNum2 { get; set; }
        public Int32 ApprovedAmount { get; set; }
        public String Priority { get; set; }
        public String Phone { get; set; }
        public String Remarks { get; set; }
        public String CheckState { get; set; }
        public String DataSign { get; set; }
        public Int32 CourseNum { get; set; }
        public String SubscriptionStatus { get; set; }
        public DateTime FeedbackDate { get; set; }
        public String FeedbackStaff { get; set; }
        public String Remark { get; set; }
        public String ReDeclareStatus { get; set; }
    }
}