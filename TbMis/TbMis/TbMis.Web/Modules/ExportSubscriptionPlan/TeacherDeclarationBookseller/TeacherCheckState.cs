
namespace TbMis.Modules.ExportSubscriptionPlan.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using TbMis.ExportSubscriptionPlan.Entities;
    [LookupScript]
    public class TeacherSubscriptionStatusLookup : RowLookupScript<TeacherDeclarationBooksellerRow>
    {
        public TeacherSubscriptionStatusLookup()
        {
            IdField = TextField = TeacherDeclarationBooksellerRow.Fields.SubscriptionStatus.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = TeacherDeclarationBooksellerRow.Fields;
            query.Distinct(true)
                .Select(fld.SubscriptionStatus)
                .Where(
                    new Criteria(fld.SubscriptionStatus) != "" &
                    new Criteria(fld.SubscriptionStatus).IsNotNull()
                    );
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}