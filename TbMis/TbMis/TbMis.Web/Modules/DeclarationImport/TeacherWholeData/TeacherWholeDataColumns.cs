
namespace TbMis.ImportDeclarationPlan.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ImportDeclarationPlan.TeacherWholeData")]
    [BasedOnRow(typeof(Entities.TeacherWholeDataRow), CheckNames = true)]
    public class TeacherWholeDataColumns
    {
        [Width(40),DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DeclarationId { get; set; }
        [Width(250)]
        public String BatchId { get; set; }
        [Width(150), EditLink(ItemType = "TextBookInfo.Textbook")]
        public String TextbookNum2TextbookName { get; set; }
        [Width(150)]
        public String TermName { get; set; }
        [Width(150)]
        public String SchoolName { get; set; }
        [Width(150)]
        public String DepartmentName { get; set; }
        [Width(150),EditLink(ItemType = "CourseInfo.Course")]
        public String CourseNumCourseCode { get; set; }
        [Width(150),EditLink(ItemType = "CourseInfo.Course")]
        public String CourseNumCourseName { get; set; }
        [Width(130)]
        public String Phone { get; set; }
        [Width(100)]
        public String CheckState { get; set; }
        [Width(100)]
        public String Priority { get; set; }
        [Width(100)]
        public String DataSign { get; set; }
        [Width(100)]
        public Int32 ApprovedAmount { get; set; }
        [Width(150)]
        public String Remarks { get; set; }
    }
}