//Add these
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TbMis.ImportDeclarationPlan.Entities;

namespace TbMis.Student.Lookups
{
    [LookupScript]
    public class SchoolNameLookup : RowLookupScript<StudentWholeDataRow>
    {
        public SchoolNameLookup()
        {
            IdField = TextField = "SchoolName";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = StudentWholeDataRow.Fields;
            query.Distinct(true)
                .Select(fld.SchoolName)
                .Where(
                    new Criteria(fld.SchoolName) != "" &
                    new Criteria(fld.SchoolName).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}