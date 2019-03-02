
namespace TbMis.IssuedDeclarationPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("IssuedDeclarationPlan/Bookseller"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BooksellerRow))]
    public class BooksellerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/IssuedDeclarationPlan/Bookseller/BooksellerIndex.cshtml");
        }
    }
}