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
    public class BooksellerNameLookup : RowLookupScript<BooksellerRow>
    {
        public BooksellerNameLookup()
        {
            IdField = TextField = "BooksellerName";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = BooksellerRow.Fields;
            query.Distinct(true)
                .Select(fld.BooksellerName)
                .Where(
                    new Criteria(fld.BooksellerName) != "" &
                    new Criteria(fld.BooksellerName).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}