
namespace TbMis.MaintainDeclarationPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MaintainDeclarationPlan/TextbookMessage"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TextbookMessageRow))]
    public class TextbookMessageController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MaintainDeclarationPlan/TextbookMessage/TextbookMessageIndex.cshtml");
        }
    }
}