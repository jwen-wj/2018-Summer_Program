
namespace TbMis.IssuedDeclarationPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("IssuedDeclarationPlan/StudentDeclarationBookseller"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StudentDeclarationBooksellerRow))]
    public class StudentDeclarationBooksellerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/IssuedDeclarationPlan/StudentDeclarationBookseller/StudentDeclarationBooksellerIndex.cshtml");
        }
    }
}