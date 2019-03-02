namespace TbMis.Modules.MaintainDeclarationPlan.Lookups
{

    ///using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using TbMis.MaintainDeclarationPlan.Entities;

    [LookupScript]
    public class StudentSchoolNameLookup : RowLookupScript<StudentWholeDataRow>
    {
        public StudentSchoolNameLookup()
        {
            IdField = TextField = StudentWholeDataRow.Fields.SchoolName.PropertyName;
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