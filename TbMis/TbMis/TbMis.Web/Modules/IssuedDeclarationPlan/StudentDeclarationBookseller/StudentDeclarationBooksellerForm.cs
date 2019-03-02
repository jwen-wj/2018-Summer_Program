
namespace TbMis.IssuedDeclarationPlan.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("IssuedDeclarationPlan.StudentDeclarationBookseller")]
    [BasedOnRow(typeof(Entities.StudentDeclarationBooksellerRow), CheckNames = true)]
    public class StudentDeclarationBooksellerForm
    {
        //Add these
        public String SchoolName { get; set; }
        public Int32 DeclarationId { get; set; }
        public String BooksellerName { get; set; }
        public String BooksellerId { get; set; }
        public String SubscriptionStatus { get; set; }
        public DateTime FeedbackDate { get; set; }
        public String FeedbackStaff { get; set; }
        public String Remark { get; set; }
        public String ReDeclareStatus { get; set; }
    }
}