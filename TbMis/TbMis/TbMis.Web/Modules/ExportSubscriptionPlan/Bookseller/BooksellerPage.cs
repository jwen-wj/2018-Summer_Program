
namespace TbMis.ExportSubscriptionPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ExportSubscriptionPlan/Bookseller"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BooksellerRow))]
    public class BooksellerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ExportSubscriptionPlan/Bookseller/BooksellerIndex.cshtml");
        }
    }
}