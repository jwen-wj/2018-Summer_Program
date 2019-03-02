//Add these
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TbMis.IssuedDeclarationPlan.Entities;

namespace TbMis.Lookups
{
    [LookupScript]
    public class BooksellerIdLookup : RowLookupScript<BooksellerRow>
    {
        public BooksellerIdLookup()
        {
            IdField = TextField = BooksellerRow.Fields.BooksellerId.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {

            var fld = BooksellerRow.Fields;
            query.Distinct(true)
                .Select(fld.BooksellerName)
                .Select(fld.BooksellerId)
                .Where(
                    new Criteria(fld.BooksellerName) != "" &
                    new Criteria(fld.BooksellerName).IsNotNull() &
                    new Criteria(fld.BooksellerId) != "" &
                    new Criteria(fld.BooksellerId).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}