
namespace TbMis.ExportSubscriptionPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ExportSubscriptionPlan/TeacherWholeData"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TeacherWholeDataRow))]
    public class TeacherWholeDataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ExportSubscriptionPlan/TeacherWholeData/TeacherWholeDataIndex.cshtml");
        }
    }
}