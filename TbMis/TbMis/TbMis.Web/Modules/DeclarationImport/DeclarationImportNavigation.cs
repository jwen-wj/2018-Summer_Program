using Serenity.Navigation;
using MyPages = TbMis.ImportDeclarationPlan.Pages;

[assembly: NavigationLink(int.MaxValue, "申报计划导入/教师用书", typeof(MyPages.TeacherWholeDataController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "申报计划导入/学生用书", typeof(MyPages.StudentWholeDataController), icon: null)]