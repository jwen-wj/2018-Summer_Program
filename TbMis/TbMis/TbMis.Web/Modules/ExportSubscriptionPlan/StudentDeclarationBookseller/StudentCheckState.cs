
namespace TbMis.Modules.ExportSubscriptionPlan.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using TbMis.ExportSubscriptionPlan.Entities;
    [LookupScript]
    public class StudentSubscriptionStatusLookup : RowLookupScript<StudentDeclarationBooksellerRow>
    {
        public StudentSubscriptionStatusLookup()
        {
            IdField = TextField = StudentDeclarationBooksellerRow.Fields.SubscriptionStatus.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = StudentDeclarationBooksellerRow.Fields;
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