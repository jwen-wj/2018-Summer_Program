
namespace TbMis.FeedbackSubscriptionPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("FeedbackSubscriptionPlan/StudentDeclarationBookseller"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StudentDeclarationBooksellerRow))]
    public class StudentDeclarationBooksellerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/FeedbackSubscriptionPlan/StudentDeclarationBookseller/StudentDeclarationBooksellerIndex.cshtml");
        }
    }
}