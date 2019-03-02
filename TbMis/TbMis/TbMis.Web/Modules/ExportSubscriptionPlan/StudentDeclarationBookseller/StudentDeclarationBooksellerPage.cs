
namespace TbMis.ExportSubscriptionPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ExportSubscriptionPlan/StudentDeclarationBookseller"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StudentDeclarationBooksellerRow))]
    public class StudentDeclarationBooksellerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ExportSubscriptionPlan/StudentDeclarationBookseller/StudentDeclarationBooksellerIndex.cshtml");
        }
    }
}