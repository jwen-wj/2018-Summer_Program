
namespace TbMis.CourseInfo.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CourseInfo/CourseMessage"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CourseMessageRow))]
    public class CourseMessageController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CourseInfo/CourseMessage/CourseMessageIndex.cshtml");
        }
    }
}