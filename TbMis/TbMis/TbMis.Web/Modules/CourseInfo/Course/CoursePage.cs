
namespace TbMis.CourseInfo.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CourseInfo/Course"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CourseRow))]
    public class CourseController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CourseInfo/Course/CourseIndex.cshtml");
        }
    }
}