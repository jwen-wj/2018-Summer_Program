
namespace TbMis.ImportDeclarationPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ImportDeclarationPlan/StudentWholeData"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StudentWholeDataRow))]
    public class StudentWholeDataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ImportDeclarationPlan/StudentWholeData/StudentWholeDataIndex.cshtml");
        }
    }
}