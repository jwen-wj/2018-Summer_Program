
namespace TbMis.Modules.ExportSubscriptionPlan.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using TbMis.ExportSubscriptionPlan.Entities;
    [LookupScript]
    public class StudentCheckStateLookup : RowLookupScript<TeacherWholeDataRow>
    {
        public StudentCheckStateLookup()
        {
            IdField = TextField = StudentWholeDataRow.Fields.CheckState.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = StudentWholeDataRow.Fields;
            query.Distinct(true)
                .Select(fld.CheckState)
                .Where(
                    new Criteria(fld.CheckState) != "" &
                    new Criteria(fld.CheckState).IsNotNull()
                    );
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}