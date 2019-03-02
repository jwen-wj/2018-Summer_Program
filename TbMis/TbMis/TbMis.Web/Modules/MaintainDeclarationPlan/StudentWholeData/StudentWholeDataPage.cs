
namespace TbMis.MaintainDeclarationPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MaintainDeclarationPlan/StudentWholeData"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StudentWholeDataRow))]
    public class StudentWholeDataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MaintainDeclarationPlan/StudentWholeData/StudentWholeDataIndex.cshtml");
        }
    }
}