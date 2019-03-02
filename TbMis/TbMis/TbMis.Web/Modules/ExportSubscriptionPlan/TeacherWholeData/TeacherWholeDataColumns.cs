
namespace TbMis.ExportSubscriptionPlan.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ExportSubscriptionPlan.TeacherWholeData")]
    [BasedOnRow(typeof(Entities.TeacherWholeDataRow), CheckNames = true)]
    public class TeacherWholeDataColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DeclarationId { get; set; }
        public String BatchId { get; set; }

        [Width(150), EditLink(ItemType = "TextBookInfo.Textbook")]
        public String TextbookNum2TextbookName { get; set; }
        public String TermName { get; set; }
        
        public String SchoolName { get; set; }
        public String DepartmentName { get; set; }

        [Width(150), EditLink(ItemType = "CourseInfo.Course")]
        public String CourseNumCourseCode { get; set; }
        [Width(150), EditLink(ItemType = "CourseInfo.Course")]
        public String CourseNumCourseName { get; set; }
        
        public String Phone { get; set; }
        public String CheckState { get; set; }
        public String Priority { get; set; }
        public String DataSign { get; set; }
        public Int32 ApprovedAmount { get; set; }
        public String Remarks { get; set; }
        public String BooksellerID { get; set; }

        public String BooksellerName { get; set; }

        [LookupEditor(typeof(Modules.ExportSubscriptionPlan.Lookups.TeacherCheckStateLookup)), QuickFilter(CssClass = "hidden-xs")]
        public String SubscriptionStatus { get; set; }
        public DateTime FeedbackDate { get; set; }
        public String FeedbackStaff { get; set; }
        public String Remark { get; set; }
        public String ReDeclareStatus { get; set; }
    }
}