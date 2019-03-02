
namespace TbMis.MaintainDeclarationPlan.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MaintainDeclarationPlan/CourseMessage"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CourseMessageRow))]
    public class CourseMessageController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MaintainDeclarationPlan/CourseMessage/CourseMessageIndex.cshtml");
        }
    }
}