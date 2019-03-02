
namespace TbMis.CourseInfo.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CourseInfo.CourseMessage")]
    [BasedOnRow(typeof(Entities.CourseMessageRow), CheckNames = true)]
    public class CourseMessageForm
    {
        public String CourseId { get; set; }
        public String CourseCode { get; set; }
        public String CourseName { get; set; }
    }
}