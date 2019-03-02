
namespace TbMis.IssuedDeclarationPlan.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("IssuedDeclarationPlan.Bookseller")]
    [BasedOnRow(typeof(Entities.BooksellerRow), CheckNames = true)]
    public class BooksellerForm
    {
        public String BooksellerId { get; set; }
        public String BooksellerName { get; set; }
        public String Contact { get; set; }
        public String Telephone { get; set; }
    }
}