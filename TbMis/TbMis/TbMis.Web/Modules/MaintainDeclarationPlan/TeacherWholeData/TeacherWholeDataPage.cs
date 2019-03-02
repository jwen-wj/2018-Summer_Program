
namespace TbMis.MaintainDeclarationPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MaintainDeclarationPlan/TeacherWholeData"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TeacherWholeDataRow))]
    public class TeacherWholeDataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MaintainDeclarationPlan/TeacherWholeData/TeacherWholeDataIndex.cshtml");
        }
    }
}