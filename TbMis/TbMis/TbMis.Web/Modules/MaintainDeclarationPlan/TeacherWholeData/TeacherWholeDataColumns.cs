
namespace TbMis.MaintainDeclarationPlan.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MaintainDeclarationPlan.TeacherWholeData")]
    [BasedOnRow(typeof(Entities.TeacherWholeDataRow), CheckNames = true)]
    public class TeacherWholeDataColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DeclarationId { get; set; }
        [Width(150), EditLink(ItemType = "MaintainDeclarationPlan.TextbookMessage")]
        public String TextbookNum2TextbookName { get; set; }
        public String TermName { get; set; }       
        [LookupEditor(typeof(Modules.MaintainDeclarationPlan.Lookups.TeacherSchoolNameLookup)), QuickFilter(CssClass = "hidden-xs")]
        public String SchoolName { get; set; }       
        [LookupEditor(typeof(Modules.MaintainDeclarationPlan.Lookups.TeacherDepartmentNameLookup))]
        [QuickFilter(CssClass = "hidden-xs"), QuickFilterOption("cascadeFrom", "SchoolName")]
        public String DepartmentName { get; set; }
        [Width(150), EditLink(ItemType = "MaintainDeclarationPlan.CourseMessage")]
        public String CourseNumCourseCode { get; set; }
        [Width(150), EditLink(ItemType = "MaintainDeclarationPlan.CourseMessage")]
        public String CourseNumCourseName { get; set; }
        public String Phone { get; set; }
        public String CheckState { get; set; }
        public String Priority { get; set; }
        public String DataSign { get; set; }        
        public Int32 ApprovedAmount { get; set; }
        public String Remarks { get; set; }
    }
}