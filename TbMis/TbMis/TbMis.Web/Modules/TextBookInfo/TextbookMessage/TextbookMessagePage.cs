
namespace TbMis.TextBookInfo.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("TextBookInfo/TextbookMessage"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TextbookMessageRow))]
    public class TextbookMessageController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/TextBookInfo/TextbookMessage/TextbookMessageIndex.cshtml");
        }
    }
}