
namespace TbMis.ExportSubscriptionPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ExportSubscriptionPlan/StudentWholeData"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StudentWholeDataRow))]
    public class StudentWholeDataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ExportSubscriptionPlan/StudentWholeData/StudentWholeDataIndex.cshtml");
        }
    }
}