
namespace TbMis.IssuedDeclarationPlan.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("IssuedDeclarationPlan.StudentWholeData")]
    [BasedOnRow(typeof(Entities.StudentWholeDataRow), CheckNames = true)]
    public class StudentWholeDataColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DeclarationId { get; set; }
        [EditLink]
        public String TermCode { get; set; }
        public String TermName { get; set; }
        public String BatchId { get; set; }
        public String SchoolId { get; set; }
        public String SchoolName { get; set; }
        public String DepartmentId { get; set; }
        public String DepartmentName { get; set; }
        public String EducationalType { get; set; }
        public String TextbookNum2TextbookId { get; set; }
        public Int32 ApprovedAmount { get; set; }
        public String Priority { get; set; }
        public String Phone { get; set; }
        public String CheckState { get; set; }
        public String Remarks { get; set; }
        public String ClassName { get; set; }
        public String ClassSize { get; set; }
        public String DataSign { get; set; }
        public String CourseNumCourseId { get; set; }
    }
}