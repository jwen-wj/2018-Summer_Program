
namespace TbMis.Modules.MaintainDeclarationPlan.Lookups
{

  
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using TbMis.MaintainDeclarationPlan.Entities;

    [LookupScript]
    public class TeacherSchoolNameLookup : RowLookupScript<TeacherWholeDataRow>
    {
        public TeacherSchoolNameLookup()
        {
            IdField = TextField = TeacherWholeDataRow.Fields.SchoolName.PropertyName;
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