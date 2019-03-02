
namespace TbMis.FeedbackSubscriptionPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("FeedbackSubscriptionPlan/TeacherDeclarationBookseller"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TeacherDeclarationBooksellerRow))]
    public class TeacherDeclarationBooksellerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/FeedbackSubscriptionPlan/TeacherDeclarationBookseller/TeacherDeclarationBooksellerIndex.cshtml");
        }
    }
}