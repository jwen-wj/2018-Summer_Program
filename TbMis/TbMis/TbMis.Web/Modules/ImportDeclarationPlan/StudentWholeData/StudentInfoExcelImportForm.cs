
namespace TbMis.ImportDeclarationPlan.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("ImportDeclarationPlan.StudentInfoExcelImport")]
    public class StudentInfoExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}