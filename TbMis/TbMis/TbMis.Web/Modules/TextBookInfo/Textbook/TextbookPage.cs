
namespace TbMis.TextBookInfo.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("TextBookInfo/Textbook"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TextbookRow))]
    public class TextbookController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/TextBookInfo/Textbook/TextbookIndex.cshtml");
        }
    }
}