
namespace TbMis.MaintainDeclarationPlan.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MaintainDeclarationPlan.TextbookMessage")]
    [BasedOnRow(typeof(Entities.TextbookMessageRow), CheckNames = true)]
    public class TextbookMessageForm
    {
        public String TextbookNum2 { get; set; }
        public String TextbookId { get; set; }
        public String Isbn { get; set; }
        public String TextbookName { get; set; }
        public String Press { get; set; }
        public String Author { get; set; }
        public String Edition { get; set; }
        public String PrintingCount { get; set; }
        public String Price { get; set; }
        public String TextbookType { get; set; }
        public String Translator { get; set; }
        public String Language { get; set; }
        public Int32 Page { get; set; }
        public String Summary { get; set; }
        public String Catalog { get; set; }
        public String IsSelfCompile { get; set; }
    }
}