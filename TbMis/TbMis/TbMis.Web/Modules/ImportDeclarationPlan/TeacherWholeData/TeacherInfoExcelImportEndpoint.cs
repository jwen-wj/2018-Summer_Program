
namespace TbMis.ImportDeclarationPlan.Endpoints
{
    using CourseInfo.Entities;
    using CourseInfo.Repositories;
    using Entities;
    using OfficeOpenXml;
    using Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
    using System.Web.Mvc;
    using TextBookInfo.Entities;
    using TextBookInfo.Repositories;
    using MyRow = Entities.TeacherWholeDataRow;

    [RoutePrefix("Services/ImportDeclarationPlan/TeacherInfoExcelImport"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize]
    public class TeacherInfoExcelImportController : ServiceEndpoint
    {
        [HttpPost]
        public ExcelImportResponse TeacherExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var t = MyRow.Fields;
            var b = TextbookRow.Fields;
            var c = CourseRow.Fields;

            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();
            var worksheet = ep.Workbook.Worksheets[1];
            for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    //TeacherWholeData
                    var batchId = Convert.ToString(worksheet.Cells[row, 3].Value ?? "");
                    if (batchId.IsTrimmedEmpty())
                        continue;
                    var declaration = uow.Connection.TryFirst<MyRow>(q1 => q1
                        .Select(t.DeclarationId)
                        .Where(t.DeclarationId == -1));

                    if (declaration == null)
                    {
                        declaration = new MyRow
                        {
                            BatchId = batchId
                        };
                    }
                    else
                    {
                        declaration.TrackWithChecks = false;
                    }

                    //Textbook
                    var textbookID = Convert.ToString(worksheet.Cells[row, 12].Value ?? "");
                    if (textbookID.IsTrimmedEmpty())
                        continue;

                    var textbook = uow.Connection.TryFirst<TextbookRow>(q => q
                    .Select(b.TextbookNum2)
                    .Where(b.TextbookId == textbookID));

                    if (textbook == null)
                    {
                        textbook = new TextbookRow
                        {
                            TextbookId = textbookID
                        };
                    }
                    else
                    {
                        textbook.TrackWithChecks = false;
                    }

                    textbook.TextbookName = Convert.ToString(worksheet.Cells[row, 13].Value ?? "");
                    textbook.Author = Convert.ToString(worksheet.Cells[row, 14].Value ?? "");
                    textbook.Isbn = Convert.ToString(worksheet.Cells[row, 15].Value ?? "");
                    textbook.Press = Convert.ToString(worksheet.Cells[row, 16].Value ?? "");
                    textbook.Edition = Convert.ToString(worksheet.Cells[row, 17].Value ?? "");
                    textbook.PrintingCount = Convert.ToString(worksheet.Cells[row, 18].Value ?? "");
                    textbook.TextbookType = Convert.ToString(worksheet.Cells[row, 19].Value ?? "");
                    textbook.Price = Convert.ToString(worksheet.Cells[row, 20].Value ?? "");
                    textbook.IsSelfCompile = Convert.ToString("0");

                    if (textbook.TextbookNum2 == null)
                    {
                        new TextbookRepository().Create(uow, new SaveRequest<TextbookRow>
                        {
                            Entity = textbook
                        });
                    }
                    else
                    {
                        new TextbookRepository().Update(uow, new SaveRequest<TextbookRow>
                        {
                            Entity = textbook,
                            EntityId = textbook.TextbookNum2.Value
                        });
                    }

                    //Course
                    var courseId = Convert.ToString(worksheet.Cells[row, 8].Value ?? "");
                    if (courseId.IsTrimmedEmpty())
                        continue;

                    var course = uow.Connection.TryFirst<CourseRow>(q => q
                    .Select(c.CourseNum)
                    .Where(c.CourseId == courseId));

                    if (course == null)
                    {
                        course = new CourseRow
                        {
                            CourseId = courseId
                        };
                    }
                    else
                    {
                        course.TrackWithChecks = false;
                    }
                    course.CourseCode = Convert.ToString(worksheet.Cells[row, 10].Value ?? "空");
                    course.CourseName = Convert.ToString(worksheet.Cells[row, 11].Value ?? "");

                    if (course.CourseNum == null)
                    {
                        new CourseRepository().Create(uow, new SaveRequest<CourseRow>
                        {
                            Entity = course
                        });
                    }
                    else
                    {
                        new CourseRepository().Update(uow, new SaveRequest<CourseRow>
                        {
                            Entity = course,
                            EntityId = course.CourseNum.Value
                        });
                    }

                    declaration.TermCode = Convert.ToString(worksheet.Cells[row, 1].Value ?? "");
                    declaration.TermName = Convert.ToString(worksheet.Cells[row, 2].Value ?? "");
                    declaration.SchoolId = Convert.ToString(worksheet.Cells[row, 4].Value ?? "");
                    declaration.SchoolName = Convert.ToString(worksheet.Cells[row, 5].Value ?? "");
                    declaration.DepartmentId = Convert.ToString(worksheet.Cells[row, 6].Value ?? "");
                    declaration.DepartmentName = Convert.ToString(worksheet.Cells[row, 7].Value ?? "");
                    declaration.EducationalType = Convert.ToString(worksheet.Cells[row, 9].Value ?? "");
                    declaration.ApprovedAmount = Convert.ToInt32(worksheet.Cells[row, 21].Value ?? 0);
                    declaration.Priority = Convert.ToString(worksheet.Cells[row, 22].Value ?? "");
                    declaration.Phone = Convert.ToString(worksheet.Cells[row, 23].Value ?? "");
                    declaration.Remarks = Convert.ToString(worksheet.Cells[row, 24].Value ?? "");
                    declaration.CheckState = Convert.ToString(worksheet.Cells[row, 25].Value ?? "");
                    declaration.DataSign = Convert.ToString(worksheet.Cells[row, 26].Value ?? "");
                    declaration.CourseNum = course.CourseNum.Value;
                    declaration.TextbookNum2 = textbook.TextbookNum2.Value;

                    if (declaration.DeclarationId == null)
                    {
                        new TeacherWholeDataRepository().Create(uow, new SaveRequest<MyRow>
                        {
                            Entity = declaration
                        });
                        response.Inserted = response.Inserted + 1;

                    }
                    else
                    {
                        new TeacherWholeDataRepository().Update(uow, new SaveRequest<MyRow>
                        {
                            Entity = declaration,
                            EntityId = declaration.DeclarationId.Value
                        });

                        response.Updated = response.Updated + 1;
                    }
                }
                catch (Exception ex)
                {
                    response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
                }
            }
            return response;
        }
    }
}