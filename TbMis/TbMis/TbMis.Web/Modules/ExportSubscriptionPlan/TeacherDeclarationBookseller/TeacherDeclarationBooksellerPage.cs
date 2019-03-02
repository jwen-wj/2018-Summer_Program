
namespace TbMis.ExportSubscriptionPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ExportSubscriptionPlan/TeacherDeclarationBookseller"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TeacherDeclarationBooksellerRow))]
    public class TeacherDeclarationBooksellerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ExportSubscriptionPlan/TeacherDeclarationBookseller/TeacherDeclarationBooksellerIndex.cshtml");
        }
    }
}