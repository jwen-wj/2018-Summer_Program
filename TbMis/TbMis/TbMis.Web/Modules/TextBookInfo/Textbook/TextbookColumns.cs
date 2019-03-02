
namespace TbMis.TextBookInfo.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("TextBookInfo.Textbook")]
    [BasedOnRow(typeof(Entities.TextbookRow), CheckNames = true)]
    public class TextbookColumns
    {
        [EditLink]
        public String TextbookId { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TextbookNum2 { get; set; }
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