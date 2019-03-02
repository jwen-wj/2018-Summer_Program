
namespace TbMis.CourseInfo.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CourseInfo.Course")]
    [BasedOnRow(typeof(Entities.CourseRow), CheckNames = true)]
    public class CourseForm
    {
        public String CourseId { get; set; }
        public String CourseCode { get; set; }
        public String CourseName { get; set; }
    }
}