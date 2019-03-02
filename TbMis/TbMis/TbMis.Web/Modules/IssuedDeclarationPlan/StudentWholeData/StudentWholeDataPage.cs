
namespace TbMis.IssuedDeclarationPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("IssuedDeclarationPlan/StudentWholeData"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StudentWholeDataRow))]
    public class StudentWholeDataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/IssuedDeclarationPlan/StudentWholeData/StudentWholeDataIndex.cshtml");
        }
    }
}