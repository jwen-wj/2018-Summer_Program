
namespace TbMis.TextBookInfo.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("TextBookInfo.Textbook")]
    [BasedOnRow(typeof(Entities.TextbookRow), CheckNames = true)]
    public class TextbookForm
    {
        public String TextbookId { get; set; }
        public String TextbookNum { get; set; }
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