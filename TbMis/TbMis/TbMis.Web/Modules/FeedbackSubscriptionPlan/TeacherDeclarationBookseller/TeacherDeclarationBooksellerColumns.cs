
namespace TbMis.FeedbackSubscriptionPlan.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("FeedbackSubscriptionPlan.TeacherDeclarationBookseller")]
    [BasedOnRow(typeof(Entities.TeacherDeclarationBooksellerRow), CheckNames = true)]
    public class TeacherDeclarationBooksellerColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [EditLink]
        public Int32 DeclarationId { get; set; }
        public String DeclarationSchoolName { get; set; }
        public String DeclarationTermName { get; set; }
        public String BooksellerId { get; set; }
        public String BooksellerBooksellerName { get; set; }
        public String SubscriptionStatus { get; set; }
        public DateTime FeedbackDate { get; set; }
        public String FeedbackStaff { get; set; }
        public String Remark { get; set; }
        public String ReDeclareStatus { get; set; }
    }
}