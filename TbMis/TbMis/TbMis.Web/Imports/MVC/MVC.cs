using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }

        }

        public static class CourseInfo
        {
            public static class Course
            {
                public const string CourseIndex = "~/Modules/CourseInfo/Course/CourseIndex.cshtml";
            }

            public static class CourseMessage
            {
                public const string CourseMessageIndex = "~/Modules/CourseInfo/CourseMessage/CourseMessageIndex.cshtml";
            }

        }

        public static class DeclarationImport
        {
            public static class StudentWholeData
            {
                public const string StudentWholeDataIndex = "~/Modules/DeclarationImport/StudentWholeData/StudentWholeDataIndex.cshtml";
            }

            public static class TeacherWholeData
            {
                public const string TeacherWholeDataIndex = "~/Modules/DeclarationImport/TeacherWholeData/TeacherWholeDataIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class ExportSubscriptionPlan
        {
            public static class Bookseller
            {
                public const string BooksellerIndex = "~/Modules/ExportSubscriptionPlan/Bookseller/BooksellerIndex.cshtml";
            }

            public static class StudentDeclarationBookseller
            {
                public const string StudentDeclarationBooksellerIndex = "~/Modules/ExportSubscriptionPlan/StudentDeclarationBookseller/StudentDeclarationBooksellerIndex.cshtml";
            }

            public static class StudentWholeData
            {
                public const string StudentWholeDataIndex = "~/Modules/ExportSubscriptionPlan/StudentWholeData/StudentWholeDataIndex.cshtml";
            }

            public static class TeacherDeclarationBookseller
            {
                public const string TeacherDeclarationBooksellerIndex = "~/Modules/ExportSubscriptionPlan/TeacherDeclarationBookseller/TeacherDeclarationBooksellerIndex.cshtml";
            }

            public static class TeacherWholeData
            {
                public const string TeacherWholeDataIndex = "~/Modules/ExportSubscriptionPlan/TeacherWholeData/TeacherWholeDataIndex.cshtml";
            }

        }

        public static class FeedbackSubscriptionPlan
        {
            public static class StudentDeclarationBookseller
            {
                public const string StudentDeclarationBooksellerIndex = "~/Modules/FeedbackSubscriptionPlan/StudentDeclarationBookseller/StudentDeclarationBooksellerIndex.cshtml";
            }

            public static class TeacherDeclarationBookseller
            {
                public const string TeacherDeclarationBooksellerIndex = "~/Modules/FeedbackSubscriptionPlan/TeacherDeclarationBookseller/TeacherDeclarationBooksellerIndex.cshtml";
            }

        }

        public static class ImportDeclarationPlan
        {
            public static class StudentWholeData
            {
                public const string StudentWholeDataIndex = "~/Modules/ImportDeclarationPlan/StudentWholeData/StudentWholeDataIndex.cshtml";
            }

            public static class TeacherWholeData
            {
                public const string TeacherWholeDataIndex = "~/Modules/ImportDeclarationPlan/TeacherWholeData/TeacherWholeDataIndex.cshtml";
            }

        }

        public static class IssuedDeclarationPlan
        {
            public static class Bookseller
            {
                public const string BooksellerIndex = "~/Modules/IssuedDeclarationPlan/Bookseller/BooksellerIndex.cshtml";
            }

            public static class StudentDeclarationBookseller
            {
                public const string StudentDeclarationBooksellerIndex = "~/Modules/IssuedDeclarationPlan/StudentDeclarationBookseller/StudentDeclarationBooksellerIndex.cshtml";
            }

            public static class StudentWholeData
            {
                public const string StudentWholeDataIndex = "~/Modules/IssuedDeclarationPlan/StudentWholeData/StudentWholeDataIndex.cshtml";
            }

            public static class TeacherDeclarationBookseller
            {
                public const string TeacherDeclarationBooksellerIndex = "~/Modules/IssuedDeclarationPlan/TeacherDeclarationBookseller/TeacherDeclarationBooksellerIndex.cshtml";
            }

            public static class TeacherWholeData
            {
                public const string TeacherWholeDataIndex = "~/Modules/IssuedDeclarationPlan/TeacherWholeData/TeacherWholeDataIndex.cshtml";
            }

        }

        public static class MaintainDeclarationPlan
        {
            public static class CourseMessage
            {
                public const string CourseMessageIndex = "~/Modules/MaintainDeclarationPlan/CourseMessage/CourseMessageIndex.cshtml";
            }

            public static class StudentWholeData
            {
                public const string StudentWholeDataIndex = "~/Modules/MaintainDeclarationPlan/StudentWholeData/StudentWholeDataIndex.cshtml";
            }

            public static class TeacherWholeData
            {
                public const string TeacherWholeDataIndex = "~/Modules/MaintainDeclarationPlan/TeacherWholeData/TeacherWholeDataIndex.cshtml";
            }

            public static class TextbookMessage
            {
                public const string TextbookMessageIndex = "~/Modules/MaintainDeclarationPlan/TextbookMessage/TextbookMessageIndex.cshtml";
            }

        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

        public static class TextBookInfo
        {
            public static class Textbook
            {
                public const string TextbookIndex = "~/Modules/TextBookInfo/Textbook/TextbookIndex.cshtml";
            }

            public static class TextbookMessage
            {
                public const string TextbookMessageIndex = "~/Modules/TextBookInfo/TextbookMessage/TextbookMessageIndex.cshtml";
            }
        }
    }
}

