
namespace TbMis.CourseInfo.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CourseInfo.Course")]
    [BasedOnRow(typeof(Entities.CourseRow), CheckNames = true)]
    public class CourseColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CourseNum { get; set; }
        [EditLink]
        public String CourseId { get; set; }
        public String CourseCode { get; set; }
        public String CourseName { get; set; }
    }
}