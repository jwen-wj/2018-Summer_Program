
namespace TbMis.ImportDeclarationPlan.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("ImportDeclarationPlan.TeacherInfoExcelImport")]
    public class TeacherInfoExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}