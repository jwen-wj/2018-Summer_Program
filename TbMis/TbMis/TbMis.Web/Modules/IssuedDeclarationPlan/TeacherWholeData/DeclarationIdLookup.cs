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
    public class DeclarationIdLookup : RowLookupScript<TeacherWholeDataRow>
    {
        public DeclarationIdLookup()
        {
            IdField = TextField = TeacherWholeDataRow.Fields.DeclarationId.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {

            var fld = TeacherWholeDataRow.Fields;
            query.Distinct(true)
                .Select(fld.SchoolName)
                .Select(fld.DeclarationId)
                .Select(fld.TextbookNum2TextbookName)
                .Where(
                    new Criteria(fld.SchoolName) != "" &
                    new Criteria(fld.SchoolName).IsNotNull() &
                    new Criteria(fld.DeclarationId) != "" &
                    new Criteria(fld.DeclarationId).IsNotNull()&
                    new Criteria(fld.TextbookNum2TextbookName) != "NULL" &
                    new Criteria(fld.TextbookNum2TextbookName).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}