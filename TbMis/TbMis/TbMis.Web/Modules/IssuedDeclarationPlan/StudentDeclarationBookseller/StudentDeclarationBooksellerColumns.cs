
namespace TbMis.IssuedDeclarationPlan.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("IssuedDeclarationPlan.StudentDeclarationBookseller")]
    [BasedOnRow(typeof(Entities.StudentDeclarationBooksellerRow), CheckNames = true)]
    public class StudentDeclarationBooksellerColumns
    {
        //Add These
        [EditLink]
        public Int32 DeclarationId { get; set; }

        public String SchoolName { get; set; }

        public String BooksellerId { get; set; }

        public String DeclarationTermName { get; set; }
        
        public String BooksellerName { get; set; }

    }
}