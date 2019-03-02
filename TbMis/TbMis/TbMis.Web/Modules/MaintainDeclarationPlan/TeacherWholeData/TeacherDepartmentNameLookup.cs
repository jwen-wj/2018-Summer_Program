
namespace TbMis.Modules.MaintainDeclarationPlan.Lookups
{

    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using TbMis.MaintainDeclarationPlan.Entities;

    [LookupScript]
    public class TeacherDepartmentNameLookup : RowLookupScript<TeacherWholeDataRow>
    {
        public TeacherDepartmentNameLookup()
        {
            IdField = TextField = TeacherWholeDataRow.Fields.DepartmentName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = TeacherWholeDataRow.Fields;
            query.Distinct(true)
                .Select(fld.SchoolName)
                .Select(fld.DepartmentName)
                .Where(
                    new Criteria(fld.SchoolName) != "" &
                    new Criteria(fld.SchoolName).IsNotNull() &
                    new Criteria(fld.DepartmentName) != "" &
                    new Criteria(fld.DepartmentName).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}