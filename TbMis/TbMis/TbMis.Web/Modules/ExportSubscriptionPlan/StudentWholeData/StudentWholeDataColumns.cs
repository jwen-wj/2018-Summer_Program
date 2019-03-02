
namespace TbMis.ExportSubscriptionPlan.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ExportSubscriptionPlan.StudentWholeData")]
    [BasedOnRow(typeof(Entities.StudentWholeDataRow), CheckNames = true)]
    public class StudentWholeDataColumns
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
        [LookupEditor(typeof(Modules.ExportSubscriptionPlan.Lookups.StudentCheckStateLookup)), QuickFilter(CssClass = "hidden-xs")]
        public String CheckState { get; set; }
        public String Priority { get; set; }
        public String DataSign { get; set; }
        public Int32 ApprovedAmount { get; set; }
        public String Remarks { get; set; }
        public String BooksellerID { get; set; }

        [EditLink(ItemType = "ExportSubscriptionPlan.StudentDeclarationBookseller")]
        public String BooksellerName { get; set; }
    }
}