using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TbMis.ImportDeclarationPlan.Entities;

namespace TbMis.Teacher.Lookups
{
    [LookupScript]
    public class SchoolNameLookup : RowLookupScript<TeacherWholeDataRow>
    {
        public SchoolNameLookup()
        {
            IdField = TextField = "SchoolName";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = TeacherWholeDataRow.Fields;
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