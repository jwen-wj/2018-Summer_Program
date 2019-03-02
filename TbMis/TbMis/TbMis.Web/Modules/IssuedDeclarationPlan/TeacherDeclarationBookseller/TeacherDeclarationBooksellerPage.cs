
namespace TbMis.IssuedDeclarationPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("IssuedDeclarationPlan/TeacherDeclarationBookseller"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TeacherDeclarationBooksellerRow))]
    public class TeacherDeclarationBooksellerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/IssuedDeclarationPlan/TeacherDeclarationBookseller/TeacherDeclarationBooksellerIndex.cshtml");
        }
    }
}