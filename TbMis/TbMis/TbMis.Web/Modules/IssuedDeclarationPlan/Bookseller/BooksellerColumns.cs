
namespace TbMis.IssuedDeclarationPlan.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("IssuedDeclarationPlan.Bookseller")]
    [BasedOnRow(typeof(Entities.BooksellerRow), CheckNames = true)]
    public class BooksellerColumns
    {
        [EditLink]
        public String BooksellerId { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BooksellerNum { get; set; }
        public String BooksellerName { get; set; }
        public String Contact { get; set; }
        public String Telephone { get; set; }
    }
}