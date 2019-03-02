
namespace TbMis.Modules.MaintainDeclarationPlan.Lookups
{

    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using TbMis.MaintainDeclarationPlan.Entities;

    [LookupScript]
    public class StudentDepartmentNameLookup : RowLookupScript<StudentWholeDataRow>
    {
        public StudentDepartmentNameLookup()
        {
            IdField = TextField = StudentWholeDataRow.Fields.DepartmentName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = StudentWholeDataRow.Fields;
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