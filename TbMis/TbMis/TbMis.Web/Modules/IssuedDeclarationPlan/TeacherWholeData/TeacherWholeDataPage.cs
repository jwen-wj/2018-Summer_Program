
namespace TbMis.IssuedDeclarationPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("IssuedDeclarationPlan/TeacherWholeData"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TeacherWholeDataRow))]
    public class TeacherWholeDataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/IssuedDeclarationPlan/TeacherWholeData/TeacherWholeDataIndex.cshtml");
        }
    }
}