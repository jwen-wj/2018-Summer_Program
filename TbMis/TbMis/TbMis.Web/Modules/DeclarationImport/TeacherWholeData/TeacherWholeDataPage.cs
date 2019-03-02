
namespace TbMis.ImportDeclarationPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ImportDeclarationPlan/TeacherWholeData"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TeacherWholeDataRow))]
    public class TeacherWholeDataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ImportDeclarationPlan/TeacherWholeData/TeacherWholeDataIndex.cshtml");
        }
    }
}