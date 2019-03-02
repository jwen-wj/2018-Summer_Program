//Add these
using Serenity.Navigation;
using MyPages = TbMis.FeedbackSubscriptionPlan.Pages;

[assembly: NavigationLink(4, "征订计划回告/教师用书", typeof(MyPages.TeacherDeclarationBooksellerController), icon: null)]
[assembly: NavigationLink(4, "征订计划回告/学生用书", typeof(MyPages.StudentDeclarationBooksellerController), icon: null)]
