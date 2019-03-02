/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace TbMis.Administration {
}
declare namespace TbMis.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName",
        }
    }
}
declare namespace TbMis.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List",
        }
    }
}
declare namespace TbMis.Administration {
}
declare namespace TbMis.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace TbMis.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace TbMis.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName",
        }
    }
}
declare namespace TbMis.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List",
        }
    }
}
declare namespace TbMis.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace TbMis.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
        }
    }
}
declare namespace TbMis.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List",
        }
    }
}
declare namespace TbMis.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace TbMis.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace TbMis.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update",
        }
    }
}
declare namespace TbMis.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace TbMis.Administration {
}
declare namespace TbMis.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace TbMis.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User",
        }
    }
}
declare namespace TbMis.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys",
        }
    }
}
declare namespace TbMis.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace TbMis.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace TbMis.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace TbMis.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User",
        }
    }
}
declare namespace TbMis.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List",
        }
    }
}
declare namespace TbMis.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace TbMis.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
        }
    }
}
declare namespace TbMis.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List",
        }
    }
}
declare namespace TbMis.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace TbMis.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace TbMis.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace TbMis.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value",
        }
    }
}
declare namespace TbMis.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve",
        }
    }
}
declare namespace TbMis.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace TbMis.CourseInfo {
}
declare namespace TbMis.CourseInfo {
    interface CourseForm {
        CourseId: Serenity.StringEditor;
        CourseCode: Serenity.StringEditor;
        CourseName: Serenity.StringEditor;
    }
    class CourseForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.CourseInfo {
}
declare namespace TbMis.CourseInfo {
    interface CourseMessageForm {
        CourseId: Serenity.StringEditor;
        CourseCode: Serenity.StringEditor;
        CourseName: Serenity.StringEditor;
    }
    class CourseMessageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.CourseInfo {
    interface CourseMessageRow {
        CourseNum?: number;
        CourseId?: string;
        CourseCode?: string;
        CourseName?: string;
    }
    namespace CourseMessageRow {
        const idProperty = "CourseNum";
        const nameProperty = "CourseName";
        const localTextPrefix = "CourseInfo.CourseMessage";
        const lookupKey = "CourseInfo.CourseMessage";
        function getLookup(): Q.Lookup<CourseMessageRow>;
        const enum Fields {
            CourseNum = "CourseNum",
            CourseId = "CourseId",
            CourseCode = "CourseCode",
            CourseName = "CourseName",
        }
    }
}
declare namespace TbMis.CourseInfo {
    namespace CourseMessageService {
        const baseUrl = "CourseInfo/CourseMessage";
        function Create(request: Serenity.SaveRequest<CourseMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CourseMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CourseMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CourseMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CourseInfo/CourseMessage/Create",
            Update = "CourseInfo/CourseMessage/Update",
            Delete = "CourseInfo/CourseMessage/Delete",
            Retrieve = "CourseInfo/CourseMessage/Retrieve",
            List = "CourseInfo/CourseMessage/List",
        }
    }
}
declare namespace TbMis.CourseInfo {
    interface CourseRow {
        CourseNum?: number;
        CourseId?: string;
        CourseCode?: string;
        CourseName?: string;
    }
    namespace CourseRow {
        const idProperty = "CourseNum";
        const nameProperty = "CourseId";
        const localTextPrefix = "CourseInfo.Course";
        const lookupKey = "CourseInfo.Course";
        function getLookup(): Q.Lookup<CourseRow>;
        const enum Fields {
            CourseNum = "CourseNum",
            CourseId = "CourseId",
            CourseCode = "CourseCode",
            CourseName = "CourseName",
        }
    }
}
declare namespace TbMis.CourseInfo {
    namespace CourseService {
        const baseUrl = "CourseInfo/Course";
        function Create(request: Serenity.SaveRequest<CourseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CourseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CourseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CourseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CourseInfo/Course/Create",
            Update = "CourseInfo/Course/Update",
            Delete = "CourseInfo/Course/Delete",
            Retrieve = "CourseInfo/Course/Retrieve",
            List = "CourseInfo/Course/List",
        }
    }
}
declare namespace TbMis {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace TbMis {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
}
declare namespace TbMis.ExportSubscriptionPlan {
    interface BooksellerForm {
        BooksellerId: Serenity.StringEditor;
        BooksellerName: Serenity.StringEditor;
        Contact: Serenity.StringEditor;
        Telephone: Serenity.StringEditor;
    }
    class BooksellerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    interface BooksellerRow {
        BooksellerId?: string;
        BooksellerNum?: number;
        BooksellerName?: string;
        Contact?: string;
        Telephone?: string;
    }
    namespace BooksellerRow {
        const idProperty = "BooksellerNum";
        const nameProperty = "BooksellerId";
        const localTextPrefix = "ExportSubscriptionPlan.Bookseller";
        const enum Fields {
            BooksellerId = "BooksellerId",
            BooksellerNum = "BooksellerNum",
            BooksellerName = "BooksellerName",
            Contact = "Contact",
            Telephone = "Telephone",
        }
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    namespace BooksellerService {
        const baseUrl = "ExportSubscriptionPlan/Bookseller";
        function Create(request: Serenity.SaveRequest<BooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ExportSubscriptionPlan/Bookseller/Create",
            Update = "ExportSubscriptionPlan/Bookseller/Update",
            Delete = "ExportSubscriptionPlan/Bookseller/Delete",
            Retrieve = "ExportSubscriptionPlan/Bookseller/Retrieve",
            List = "ExportSubscriptionPlan/Bookseller/List",
        }
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
}
declare namespace TbMis.ExportSubscriptionPlan {
    interface StudentDeclarationBooksellerForm {
        DeclarationId: Serenity.IntegerEditor;
        DeclarationBatchId: Serenity.StringEditor;
        DeclarationTermName: Serenity.StringEditor;
        DeclarationSchoolName: Serenity.StringEditor;
        DeclarationDepartmentName: Serenity.StringEditor;
        CourseCode: Serenity.StringEditor;
        CourseName: Serenity.StringEditor;
        DeclarationPhone: Serenity.StringEditor;
        DeclarationCheckState: Serenity.StringEditor;
        DeclarationPriority: Serenity.StringEditor;
        DeclarationDataSign: Serenity.StringEditor;
        DeclarationApprovedAmount: Serenity.IntegerEditor;
        DeclarationRemarks: Serenity.StringEditor;
        BooksellerId: Serenity.StringEditor;
        BooksellerBooksellerName: Serenity.StringEditor;
        SubscriptionStatus: Serenity.StringEditor;
        FeedbackDate: Serenity.DateEditor;
        FeedbackStaff: Serenity.StringEditor;
        Remark: Serenity.StringEditor;
        ReDeclareStatus: Serenity.StringEditor;
        DeclarationEducationalType: Serenity.StringEditor;
    }
    class StudentDeclarationBooksellerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    interface StudentDeclarationBooksellerRow {
        DeclarationId?: number;
        BooksellerId?: string;
        SubscriptionStatus?: string;
        FeedbackDate?: string;
        FeedbackStaff?: string;
        Remark?: string;
        ReDeclareStatus?: string;
        DeclarationTermCode?: string;
        DeclarationTermName?: string;
        DeclarationBatchId?: string;
        DeclarationSchoolId?: string;
        DeclarationSchoolName?: string;
        DeclarationDepartmentId?: string;
        DeclarationDepartmentName?: string;
        DeclarationEducationalType?: string;
        DeclarationTextbookNum2?: number;
        DeclarationApprovedAmount?: number;
        DeclarationPriority?: string;
        DeclarationPhone?: string;
        DeclarationRemarks?: string;
        DeclarationCheckState?: string;
        DeclarationDataSign?: string;
        DeclarationCourseNum?: number;
        BooksellerBooksellerNum?: number;
        BooksellerBooksellerName?: string;
        BooksellerContact?: string;
        BooksellerTelephone?: string;
        CourseCode?: string;
        CourseName?: string;
        CourseNum?: number;
    }
    namespace StudentDeclarationBooksellerRow {
        const idProperty = "DeclarationId";
        const nameProperty = "BooksellerId";
        const localTextPrefix = "ExportSubscriptionPlan.StudentDeclarationBookseller";
        const enum Fields {
            DeclarationId = "DeclarationId",
            BooksellerId = "BooksellerId",
            SubscriptionStatus = "SubscriptionStatus",
            FeedbackDate = "FeedbackDate",
            FeedbackStaff = "FeedbackStaff",
            Remark = "Remark",
            ReDeclareStatus = "ReDeclareStatus",
            DeclarationTermCode = "DeclarationTermCode",
            DeclarationTermName = "DeclarationTermName",
            DeclarationBatchId = "DeclarationBatchId",
            DeclarationSchoolId = "DeclarationSchoolId",
            DeclarationSchoolName = "DeclarationSchoolName",
            DeclarationDepartmentId = "DeclarationDepartmentId",
            DeclarationDepartmentName = "DeclarationDepartmentName",
            DeclarationEducationalType = "DeclarationEducationalType",
            DeclarationTextbookNum2 = "DeclarationTextbookNum2",
            DeclarationApprovedAmount = "DeclarationApprovedAmount",
            DeclarationPriority = "DeclarationPriority",
            DeclarationPhone = "DeclarationPhone",
            DeclarationRemarks = "DeclarationRemarks",
            DeclarationCheckState = "DeclarationCheckState",
            DeclarationDataSign = "DeclarationDataSign",
            DeclarationCourseNum = "DeclarationCourseNum",
            BooksellerBooksellerNum = "BooksellerBooksellerNum",
            BooksellerBooksellerName = "BooksellerBooksellerName",
            BooksellerContact = "BooksellerContact",
            BooksellerTelephone = "BooksellerTelephone",
            CourseCode = "CourseCode",
            CourseName = "CourseName",
            CourseNum = "CourseNum",
        }
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    namespace StudentDeclarationBooksellerService {
        const baseUrl = "ExportSubscriptionPlan/StudentDeclarationBookseller";
        function Create(request: Serenity.SaveRequest<StudentDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StudentDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ExportSubscriptionPlan/StudentDeclarationBookseller/Create",
            Update = "ExportSubscriptionPlan/StudentDeclarationBookseller/Update",
            Delete = "ExportSubscriptionPlan/StudentDeclarationBookseller/Delete",
            Retrieve = "ExportSubscriptionPlan/StudentDeclarationBookseller/Retrieve",
            List = "ExportSubscriptionPlan/StudentDeclarationBookseller/List",
        }
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
}
declare namespace TbMis.ExportSubscriptionPlan {
    interface StudentWholeDataForm {
        TermCode: Serenity.StringEditor;
        TermName: Serenity.StringEditor;
        BatchId: Serenity.StringEditor;
        SchoolId: Serenity.StringEditor;
        SchoolName: Serenity.StringEditor;
        DepartmentId: Serenity.StringEditor;
        DepartmentName: Serenity.StringEditor;
        EducationalType: Serenity.StringEditor;
        TextbookNum2: Serenity.LookupEditor;
        ApprovedAmount: Serenity.IntegerEditor;
        Priority: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        CheckState: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
        ClassName: Serenity.StringEditor;
        ClassSize: Serenity.StringEditor;
        DataSign: Serenity.StringEditor;
        CourseNum: Serenity.LookupEditor;
    }
    class StudentWholeDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    interface StudentWholeDataRow {
        DeclarationId?: number;
        TermCode?: string;
        TermName?: string;
        BatchId?: string;
        SchoolId?: string;
        SchoolName?: string;
        DepartmentId?: string;
        DepartmentName?: string;
        EducationalType?: string;
        TextbookNum2?: number;
        ApprovedAmount?: number;
        Priority?: string;
        Phone?: string;
        CheckState?: string;
        Remarks?: string;
        ClassName?: string;
        ClassSize?: string;
        DataSign?: string;
        CourseNum?: number;
        TextbookNum2TextbookId?: string;
        TextbookNum2TextbookNum?: string;
        TextbookNum2Isbn?: string;
        TextbookNum2TextbookName?: string;
        TextbookNum2Press?: string;
        TextbookNum2Author?: string;
        TextbookNum2Edition?: string;
        TextbookNum2PrintingCount?: string;
        TextbookNum2Price?: string;
        TextbookNum2TextbookType?: string;
        TextbookNum2Translator?: string;
        TextbookNum2Language?: string;
        TextbookNum2Page?: number;
        TextbookNum2Summary?: string;
        TextbookNum2Catalog?: string;
        TextbookNum2IsSelfCompile?: string;
        CourseNumCourseId?: string;
        CourseNumCourseCode?: string;
        CourseNumCourseName?: string;
        BooksellerID?: string;
        BooksellerNum?: number;
        BooksellerName?: string;
    }
    namespace StudentWholeDataRow {
        const idProperty = "DeclarationId";
        const nameProperty = "TermCode";
        const localTextPrefix = "ExportSubscriptionPlan.StudentWholeData";
        const enum Fields {
            DeclarationId = "DeclarationId",
            TermCode = "TermCode",
            TermName = "TermName",
            BatchId = "BatchId",
            SchoolId = "SchoolId",
            SchoolName = "SchoolName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            EducationalType = "EducationalType",
            TextbookNum2 = "TextbookNum2",
            ApprovedAmount = "ApprovedAmount",
            Priority = "Priority",
            Phone = "Phone",
            CheckState = "CheckState",
            Remarks = "Remarks",
            ClassName = "ClassName",
            ClassSize = "ClassSize",
            DataSign = "DataSign",
            CourseNum = "CourseNum",
            TextbookNum2TextbookId = "TextbookNum2TextbookId",
            TextbookNum2TextbookNum = "TextbookNum2TextbookNum",
            TextbookNum2Isbn = "TextbookNum2Isbn",
            TextbookNum2TextbookName = "TextbookNum2TextbookName",
            TextbookNum2Press = "TextbookNum2Press",
            TextbookNum2Author = "TextbookNum2Author",
            TextbookNum2Edition = "TextbookNum2Edition",
            TextbookNum2PrintingCount = "TextbookNum2PrintingCount",
            TextbookNum2Price = "TextbookNum2Price",
            TextbookNum2TextbookType = "TextbookNum2TextbookType",
            TextbookNum2Translator = "TextbookNum2Translator",
            TextbookNum2Language = "TextbookNum2Language",
            TextbookNum2Page = "TextbookNum2Page",
            TextbookNum2Summary = "TextbookNum2Summary",
            TextbookNum2Catalog = "TextbookNum2Catalog",
            TextbookNum2IsSelfCompile = "TextbookNum2IsSelfCompile",
            CourseNumCourseId = "CourseNumCourseId",
            CourseNumCourseCode = "CourseNumCourseCode",
            CourseNumCourseName = "CourseNumCourseName",
            BooksellerID = "BooksellerID",
            BooksellerNum = "BooksellerNum",
            BooksellerName = "BooksellerName",
        }
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    namespace StudentWholeDataService {
        const baseUrl = "ExportSubscriptionPlan/StudentWholeData";
        function Create(request: Serenity.SaveRequest<StudentWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StudentWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ExportSubscriptionPlan/StudentWholeData/Create",
            Update = "ExportSubscriptionPlan/StudentWholeData/Update",
            Delete = "ExportSubscriptionPlan/StudentWholeData/Delete",
            Retrieve = "ExportSubscriptionPlan/StudentWholeData/Retrieve",
            List = "ExportSubscriptionPlan/StudentWholeData/List",
        }
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
}
declare namespace TbMis.ExportSubscriptionPlan {
    interface TeacherDeclarationBooksellerForm {
        DeclarationId: Serenity.IntegerEditor;
        DeclarationBatchId: Serenity.StringEditor;
        DeclarationTermName: Serenity.StringEditor;
        DeclarationSchoolName: Serenity.StringEditor;
        DeclarationDepartmentName: Serenity.StringEditor;
        CourseCode: Serenity.StringEditor;
        CourseName: Serenity.StringEditor;
        DeclarationPhone: Serenity.StringEditor;
        DeclarationCheckState: Serenity.StringEditor;
        DeclarationPriority: Serenity.StringEditor;
        DeclarationDataSign: Serenity.StringEditor;
        DeclarationApprovedAmount: Serenity.IntegerEditor;
        DeclarationRemarks: Serenity.StringEditor;
        BooksellerId: Serenity.StringEditor;
        BooksellerBooksellerName: Serenity.StringEditor;
        SubscriptionStatus: Serenity.StringEditor;
        FeedbackDate: Serenity.DateEditor;
        FeedbackStaff: Serenity.StringEditor;
        Remark: Serenity.StringEditor;
        ReDeclareStatus: Serenity.StringEditor;
        DeclarationEducationalType: Serenity.StringEditor;
    }
    class TeacherDeclarationBooksellerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    interface TeacherDeclarationBooksellerRow {
        DeclarationId?: number;
        BooksellerId?: string;
        SubscriptionStatus?: string;
        FeedbackDate?: string;
        FeedbackStaff?: string;
        Remark?: string;
        ReDeclareStatus?: string;
        DeclarationTermCode?: string;
        DeclarationTermName?: string;
        DeclarationBatchId?: string;
        DeclarationSchoolId?: string;
        DeclarationSchoolName?: string;
        DeclarationDepartmentId?: string;
        DeclarationDepartmentName?: string;
        DeclarationEducationalType?: string;
        DeclarationTextbookNum2?: number;
        DeclarationApprovedAmount?: number;
        DeclarationPriority?: string;
        DeclarationPhone?: string;
        DeclarationRemarks?: string;
        DeclarationCheckState?: string;
        DeclarationDataSign?: string;
        DeclarationCourseNum?: number;
        BooksellerBooksellerNum?: number;
        BooksellerBooksellerName?: string;
        BooksellerContact?: string;
        BooksellerTelephone?: string;
        CourseCode?: string;
        CourseName?: string;
        CourseNum?: number;
    }
    namespace TeacherDeclarationBooksellerRow {
        const idProperty = "DeclarationId";
        const nameProperty = "BooksellerId";
        const localTextPrefix = "ExportSubscriptionPlan.TeacherDeclarationBookseller";
        const enum Fields {
            DeclarationId = "DeclarationId",
            BooksellerId = "BooksellerId",
            SubscriptionStatus = "SubscriptionStatus",
            FeedbackDate = "FeedbackDate",
            FeedbackStaff = "FeedbackStaff",
            Remark = "Remark",
            ReDeclareStatus = "ReDeclareStatus",
            DeclarationTermCode = "DeclarationTermCode",
            DeclarationTermName = "DeclarationTermName",
            DeclarationBatchId = "DeclarationBatchId",
            DeclarationSchoolId = "DeclarationSchoolId",
            DeclarationSchoolName = "DeclarationSchoolName",
            DeclarationDepartmentId = "DeclarationDepartmentId",
            DeclarationDepartmentName = "DeclarationDepartmentName",
            DeclarationEducationalType = "DeclarationEducationalType",
            DeclarationTextbookNum2 = "DeclarationTextbookNum2",
            DeclarationApprovedAmount = "DeclarationApprovedAmount",
            DeclarationPriority = "DeclarationPriority",
            DeclarationPhone = "DeclarationPhone",
            DeclarationRemarks = "DeclarationRemarks",
            DeclarationCheckState = "DeclarationCheckState",
            DeclarationDataSign = "DeclarationDataSign",
            DeclarationCourseNum = "DeclarationCourseNum",
            BooksellerBooksellerNum = "BooksellerBooksellerNum",
            BooksellerBooksellerName = "BooksellerBooksellerName",
            BooksellerContact = "BooksellerContact",
            BooksellerTelephone = "BooksellerTelephone",
            CourseCode = "CourseCode",
            CourseName = "CourseName",
            CourseNum = "CourseNum",
        }
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    namespace TeacherDeclarationBooksellerService {
        const baseUrl = "ExportSubscriptionPlan/TeacherDeclarationBookseller";
        function Create(request: Serenity.SaveRequest<TeacherDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TeacherDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TeacherDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TeacherDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ExportSubscriptionPlan/TeacherDeclarationBookseller/Create",
            Update = "ExportSubscriptionPlan/TeacherDeclarationBookseller/Update",
            Delete = "ExportSubscriptionPlan/TeacherDeclarationBookseller/Delete",
            Retrieve = "ExportSubscriptionPlan/TeacherDeclarationBookseller/Retrieve",
            List = "ExportSubscriptionPlan/TeacherDeclarationBookseller/List",
        }
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
}
declare namespace TbMis.ExportSubscriptionPlan {
    interface TeacherWholeDataForm {
        TermCode: Serenity.StringEditor;
        TermName: Serenity.StringEditor;
        BatchId: Serenity.StringEditor;
        SchoolId: Serenity.StringEditor;
        SchoolName: Serenity.StringEditor;
        DepartmentId: Serenity.StringEditor;
        DepartmentName: Serenity.StringEditor;
        EducationalType: Serenity.StringEditor;
        TextbookNum2: Serenity.IntegerEditor;
        ApprovedAmount: Serenity.IntegerEditor;
        Priority: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
        CheckState: Serenity.StringEditor;
        DataSign: Serenity.StringEditor;
        CourseNum: Serenity.IntegerEditor;
        SubscriptionStatus: Serenity.StringEditor;
        FeedbackDate: Serenity.DateEditor;
        FeedbackStaff: Serenity.StringEditor;
        Remark: Serenity.StringEditor;
        ReDeclareStatus: Serenity.StringEditor;
    }
    class TeacherWholeDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    interface TeacherWholeDataRow {
        DeclarationId?: number;
        TermCode?: string;
        TermName?: string;
        BatchId?: string;
        SchoolId?: string;
        SchoolName?: string;
        DepartmentId?: string;
        DepartmentName?: string;
        EducationalType?: string;
        TextbookNum2?: number;
        ApprovedAmount?: number;
        Priority?: string;
        Phone?: string;
        Remarks?: string;
        CheckState?: string;
        DataSign?: string;
        CourseNum?: number;
        TextbookNum2TextbookId?: string;
        TextbookNum2TextbookNum?: string;
        TextbookNum2Isbn?: string;
        TextbookNum2TextbookName?: string;
        TextbookNum2Press?: string;
        TextbookNum2Author?: string;
        TextbookNum2Edition?: string;
        TextbookNum2PrintingCount?: string;
        TextbookNum2Price?: string;
        TextbookNum2TextbookType?: string;
        TextbookNum2Translator?: string;
        TextbookNum2Language?: string;
        TextbookNum2Page?: number;
        TextbookNum2Summary?: string;
        TextbookNum2Catalog?: string;
        TextbookNum2IsSelfCompile?: string;
        CourseNumCourseId?: string;
        CourseNumCourseCode?: string;
        CourseNumCourseName?: string;
        BooksellerID?: string;
        BooksellerNum?: number;
        BooksellerName?: string;
        SubscriptionStatus?: string;
        FeedbackDate?: string;
        FeedbackStaff?: string;
        Remark?: string;
        ReDeclareStatus?: string;
    }
    namespace TeacherWholeDataRow {
        const idProperty = "DeclarationId";
        const nameProperty = "TermCode";
        const localTextPrefix = "ExportSubscriptionPlan.TeacherWholeData";
        const enum Fields {
            DeclarationId = "DeclarationId",
            TermCode = "TermCode",
            TermName = "TermName",
            BatchId = "BatchId",
            SchoolId = "SchoolId",
            SchoolName = "SchoolName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            EducationalType = "EducationalType",
            TextbookNum2 = "TextbookNum2",
            ApprovedAmount = "ApprovedAmount",
            Priority = "Priority",
            Phone = "Phone",
            Remarks = "Remarks",
            CheckState = "CheckState",
            DataSign = "DataSign",
            CourseNum = "CourseNum",
            TextbookNum2TextbookId = "TextbookNum2TextbookId",
            TextbookNum2TextbookNum = "TextbookNum2TextbookNum",
            TextbookNum2Isbn = "TextbookNum2Isbn",
            TextbookNum2TextbookName = "TextbookNum2TextbookName",
            TextbookNum2Press = "TextbookNum2Press",
            TextbookNum2Author = "TextbookNum2Author",
            TextbookNum2Edition = "TextbookNum2Edition",
            TextbookNum2PrintingCount = "TextbookNum2PrintingCount",
            TextbookNum2Price = "TextbookNum2Price",
            TextbookNum2TextbookType = "TextbookNum2TextbookType",
            TextbookNum2Translator = "TextbookNum2Translator",
            TextbookNum2Language = "TextbookNum2Language",
            TextbookNum2Page = "TextbookNum2Page",
            TextbookNum2Summary = "TextbookNum2Summary",
            TextbookNum2Catalog = "TextbookNum2Catalog",
            TextbookNum2IsSelfCompile = "TextbookNum2IsSelfCompile",
            CourseNumCourseId = "CourseNumCourseId",
            CourseNumCourseCode = "CourseNumCourseCode",
            CourseNumCourseName = "CourseNumCourseName",
            BooksellerID = "BooksellerID",
            BooksellerNum = "BooksellerNum",
            BooksellerName = "BooksellerName",
            SubscriptionStatus = "SubscriptionStatus",
            FeedbackDate = "FeedbackDate",
            FeedbackStaff = "FeedbackStaff",
            Remark = "Remark",
            ReDeclareStatus = "ReDeclareStatus",
        }
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    namespace TeacherWholeDataService {
        const baseUrl = "ExportSubscriptionPlan/TeacherWholeData";
        function Create(request: Serenity.SaveRequest<TeacherWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TeacherWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TeacherWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TeacherWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ExportSubscriptionPlan/TeacherWholeData/Create",
            Update = "ExportSubscriptionPlan/TeacherWholeData/Update",
            Delete = "ExportSubscriptionPlan/TeacherWholeData/Delete",
            Retrieve = "ExportSubscriptionPlan/TeacherWholeData/Retrieve",
            List = "ExportSubscriptionPlan/TeacherWholeData/List",
        }
    }
}
declare namespace TbMis.FeedbackSubscriptionPlan {
}
declare namespace TbMis.FeedbackSubscriptionPlan {
    interface StudentDeclarationBooksellerForm {
        DeclarationId: Serenity.IntegerEditor;
        DeclarationSchoolName: Serenity.StringEditor;
        DeclarationTermName: Serenity.StringEditor;
        BooksellerId: Serenity.StringEditor;
        BooksellerBooksellerName: Serenity.StringEditor;
        SubscriptionStatus: Serenity.StringEditor;
        FeedbackDate: Serenity.DateEditor;
        FeedbackStaff: Serenity.StringEditor;
        Remark: Serenity.StringEditor;
        ReDeclareStatus: Serenity.StringEditor;
    }
    class StudentDeclarationBooksellerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.FeedbackSubscriptionPlan {
    interface StudentDeclarationBooksellerRow {
        DeclarationId?: number;
        BooksellerId?: string;
        SubscriptionStatus?: string;
        FeedbackDate?: string;
        FeedbackStaff?: string;
        Remark?: string;
        ReDeclareStatus?: string;
        DeclarationTermCode?: string;
        DeclarationTermName?: string;
        DeclarationBatchId?: string;
        DeclarationSchoolId?: string;
        DeclarationSchoolName?: string;
        DeclarationDepartmentId?: string;
        DeclarationDepartmentName?: string;
        DeclarationEducationalType?: string;
        DeclarationTextbookNum2?: number;
        DeclarationApprovedAmount?: number;
        DeclarationPriority?: string;
        DeclarationPhone?: string;
        DeclarationCheckState?: string;
        DeclarationRemarks?: string;
        DeclarationClassName?: string;
        DeclarationClassSize?: string;
        DeclarationDataSign?: string;
        DeclarationCourseNum?: number;
        BooksellerBooksellerNum?: number;
        BooksellerBooksellerName?: string;
        BooksellerContact?: string;
        BooksellerTelephone?: string;
    }
    namespace StudentDeclarationBooksellerRow {
        const idProperty = "DeclarationId";
        const nameProperty = "BooksellerId";
        const localTextPrefix = "FeedbackSubscriptionPlan.StudentDeclarationBookseller";
        const enum Fields {
            DeclarationId = "DeclarationId",
            BooksellerId = "BooksellerId",
            SubscriptionStatus = "SubscriptionStatus",
            FeedbackDate = "FeedbackDate",
            FeedbackStaff = "FeedbackStaff",
            Remark = "Remark",
            ReDeclareStatus = "ReDeclareStatus",
            DeclarationTermCode = "DeclarationTermCode",
            DeclarationTermName = "DeclarationTermName",
            DeclarationBatchId = "DeclarationBatchId",
            DeclarationSchoolId = "DeclarationSchoolId",
            DeclarationSchoolName = "DeclarationSchoolName",
            DeclarationDepartmentId = "DeclarationDepartmentId",
            DeclarationDepartmentName = "DeclarationDepartmentName",
            DeclarationEducationalType = "DeclarationEducationalType",
            DeclarationTextbookNum2 = "DeclarationTextbookNum2",
            DeclarationApprovedAmount = "DeclarationApprovedAmount",
            DeclarationPriority = "DeclarationPriority",
            DeclarationPhone = "DeclarationPhone",
            DeclarationCheckState = "DeclarationCheckState",
            DeclarationRemarks = "DeclarationRemarks",
            DeclarationClassName = "DeclarationClassName",
            DeclarationClassSize = "DeclarationClassSize",
            DeclarationDataSign = "DeclarationDataSign",
            DeclarationCourseNum = "DeclarationCourseNum",
            BooksellerBooksellerNum = "BooksellerBooksellerNum",
            BooksellerBooksellerName = "BooksellerBooksellerName",
            BooksellerContact = "BooksellerContact",
            BooksellerTelephone = "BooksellerTelephone",
        }
    }
}
declare namespace TbMis.FeedbackSubscriptionPlan {
    namespace StudentDeclarationBooksellerService {
        const baseUrl = "FeedbackSubscriptionPlan/StudentDeclarationBookseller";
        function Create(request: Serenity.SaveRequest<StudentDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StudentDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "FeedbackSubscriptionPlan/StudentDeclarationBookseller/Create",
            Update = "FeedbackSubscriptionPlan/StudentDeclarationBookseller/Update",
            Delete = "FeedbackSubscriptionPlan/StudentDeclarationBookseller/Delete",
            Retrieve = "FeedbackSubscriptionPlan/StudentDeclarationBookseller/Retrieve",
            List = "FeedbackSubscriptionPlan/StudentDeclarationBookseller/List",
        }
    }
}
declare namespace TbMis.FeedbackSubscriptionPlan {
}
declare namespace TbMis.FeedbackSubscriptionPlan {
    interface TeacherDeclarationBooksellerForm {
        DeclarationId: Serenity.IntegerEditor;
        DeclarationSchoolName: Serenity.StringEditor;
        DeclarationTermName: Serenity.StringEditor;
        BooksellerId: Serenity.StringEditor;
        BooksellerBooksellerName: Serenity.StringEditor;
        SubscriptionStatus: Serenity.StringEditor;
        FeedbackDate: Serenity.DateEditor;
        FeedbackStaff: Serenity.StringEditor;
        Remark: Serenity.StringEditor;
        ReDeclareStatus: Serenity.StringEditor;
    }
    class TeacherDeclarationBooksellerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.FeedbackSubscriptionPlan {
    interface TeacherDeclarationBooksellerRow {
        DeclarationId?: number;
        DeclarationSchoolName?: string;
        DeclarationTermName?: string;
        BooksellerId?: string;
        BooksellerBooksellerName?: string;
        SubscriptionStatus?: string;
        FeedbackDate?: string;
        FeedbackStaff?: string;
        Remark?: string;
        ReDeclareStatus?: string;
        DeclarationTermCode?: string;
        DeclarationBatchId?: string;
        DeclarationSchoolId?: string;
        DeclarationDepartmentId?: string;
        DeclarationDepartmentName?: string;
        DeclarationEducationalType?: string;
        DeclarationTextbookNum2?: number;
        DeclarationApprovedAmount?: number;
        DeclarationPriority?: string;
        DeclarationPhone?: string;
        DeclarationRemarks?: string;
        DeclarationCheckState?: string;
        DeclarationDataSign?: string;
        DeclarationCourseNum?: number;
        BooksellerBooksellerNum?: number;
        BooksellerContact?: string;
        BooksellerTelephone?: string;
    }
    namespace TeacherDeclarationBooksellerRow {
        const idProperty = "DeclarationId";
        const nameProperty = "BooksellerId";
        const localTextPrefix = "FeedbackSubscriptionPlan.TeacherDeclarationBookseller";
        const enum Fields {
            DeclarationId = "DeclarationId",
            DeclarationSchoolName = "DeclarationSchoolName",
            DeclarationTermName = "DeclarationTermName",
            BooksellerId = "BooksellerId",
            BooksellerBooksellerName = "BooksellerBooksellerName",
            SubscriptionStatus = "SubscriptionStatus",
            FeedbackDate = "FeedbackDate",
            FeedbackStaff = "FeedbackStaff",
            Remark = "Remark",
            ReDeclareStatus = "ReDeclareStatus",
            DeclarationTermCode = "DeclarationTermCode",
            DeclarationBatchId = "DeclarationBatchId",
            DeclarationSchoolId = "DeclarationSchoolId",
            DeclarationDepartmentId = "DeclarationDepartmentId",
            DeclarationDepartmentName = "DeclarationDepartmentName",
            DeclarationEducationalType = "DeclarationEducationalType",
            DeclarationTextbookNum2 = "DeclarationTextbookNum2",
            DeclarationApprovedAmount = "DeclarationApprovedAmount",
            DeclarationPriority = "DeclarationPriority",
            DeclarationPhone = "DeclarationPhone",
            DeclarationRemarks = "DeclarationRemarks",
            DeclarationCheckState = "DeclarationCheckState",
            DeclarationDataSign = "DeclarationDataSign",
            DeclarationCourseNum = "DeclarationCourseNum",
            BooksellerBooksellerNum = "BooksellerBooksellerNum",
            BooksellerContact = "BooksellerContact",
            BooksellerTelephone = "BooksellerTelephone",
        }
    }
}
declare namespace TbMis.FeedbackSubscriptionPlan {
    namespace TeacherDeclarationBooksellerService {
        const baseUrl = "FeedbackSubscriptionPlan/TeacherDeclarationBookseller";
        function Create(request: Serenity.SaveRequest<TeacherDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TeacherDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TeacherDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TeacherDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "FeedbackSubscriptionPlan/TeacherDeclarationBookseller/Create",
            Update = "FeedbackSubscriptionPlan/TeacherDeclarationBookseller/Update",
            Delete = "FeedbackSubscriptionPlan/TeacherDeclarationBookseller/Delete",
            Retrieve = "FeedbackSubscriptionPlan/TeacherDeclarationBookseller/Retrieve",
            List = "FeedbackSubscriptionPlan/TeacherDeclarationBookseller/List",
        }
    }
}
declare namespace TbMis {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace TbMis {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    interface StudentInfoExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class StudentInfoExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    namespace StudentInfoExcelImportService {
        const baseUrl = "ImportDeclarationPlan/StudentInfoExcelImport";
        function StudentExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            StudentExcelImport = "ImportDeclarationPlan/StudentInfoExcelImport/StudentExcelImport",
        }
    }
}
declare namespace TbMis.ImportDeclarationPlan {
}
declare namespace TbMis.ImportDeclarationPlan {
    interface StudentWholeDataForm {
        TermCode: Serenity.StringEditor;
        TermName: Serenity.StringEditor;
        BatchId: Serenity.StringEditor;
        SchoolId: Serenity.StringEditor;
        SchoolName: Serenity.StringEditor;
        DepartmentId: Serenity.StringEditor;
        DepartmentName: Serenity.StringEditor;
        TextbookNum2: Serenity.LookupEditor;
        CourseNum: Serenity.LookupEditor;
        EducationalType: Serenity.StringEditor;
        ApprovedAmount: Serenity.IntegerEditor;
        Priority: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        CheckState: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
        ClassName: Serenity.StringEditor;
        ClassSize: Serenity.StringEditor;
        DataSign: Serenity.StringEditor;
    }
    class StudentWholeDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    interface StudentWholeDataRow {
        DeclarationId?: number;
        TermCode?: string;
        TermName?: string;
        BatchId?: string;
        SchoolId?: string;
        SchoolName?: string;
        DepartmentId?: string;
        DepartmentName?: string;
        EducationalType?: string;
        TextbookNum2?: number;
        ApprovedAmount?: number;
        Priority?: string;
        Phone?: string;
        CheckState?: string;
        Remarks?: string;
        ClassName?: string;
        ClassSize?: string;
        DataSign?: string;
        CourseNum?: number;
        TextbookNum2TextbookId?: string;
        TextbookNum2TextbookNum?: string;
        TextbookNum2Isbn?: string;
        TextbookNum2TextbookName?: string;
        TextbookNum2Press?: string;
        TextbookNum2Author?: string;
        TextbookNum2Edition?: string;
        TextbookNum2PrintingCount?: string;
        TextbookNum2Price?: string;
        TextbookNum2TextbookType?: string;
        TextbookNum2Translator?: string;
        TextbookNum2Language?: string;
        TextbookNum2Page?: number;
        TextbookNum2Summary?: string;
        TextbookNum2Catalog?: string;
        TextbookNum2IsSelfCompile?: string;
        CourseNumCourseId?: string;
        CourseNumCourseCode?: string;
        CourseNumCourseName?: string;
    }
    namespace StudentWholeDataRow {
        const idProperty = "DeclarationId";
        const nameProperty = "TermCode";
        const localTextPrefix = "ImportDeclarationPlan.StudentWholeData";
        const enum Fields {
            DeclarationId = "DeclarationId",
            TermCode = "TermCode",
            TermName = "TermName",
            BatchId = "BatchId",
            SchoolId = "SchoolId",
            SchoolName = "SchoolName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            EducationalType = "EducationalType",
            TextbookNum2 = "TextbookNum2",
            ApprovedAmount = "ApprovedAmount",
            Priority = "Priority",
            Phone = "Phone",
            CheckState = "CheckState",
            Remarks = "Remarks",
            ClassName = "ClassName",
            ClassSize = "ClassSize",
            DataSign = "DataSign",
            CourseNum = "CourseNum",
            TextbookNum2TextbookId = "TextbookNum2TextbookId",
            TextbookNum2TextbookNum = "TextbookNum2TextbookNum",
            TextbookNum2Isbn = "TextbookNum2Isbn",
            TextbookNum2TextbookName = "TextbookNum2TextbookName",
            TextbookNum2Press = "TextbookNum2Press",
            TextbookNum2Author = "TextbookNum2Author",
            TextbookNum2Edition = "TextbookNum2Edition",
            TextbookNum2PrintingCount = "TextbookNum2PrintingCount",
            TextbookNum2Price = "TextbookNum2Price",
            TextbookNum2TextbookType = "TextbookNum2TextbookType",
            TextbookNum2Translator = "TextbookNum2Translator",
            TextbookNum2Language = "TextbookNum2Language",
            TextbookNum2Page = "TextbookNum2Page",
            TextbookNum2Summary = "TextbookNum2Summary",
            TextbookNum2Catalog = "TextbookNum2Catalog",
            TextbookNum2IsSelfCompile = "TextbookNum2IsSelfCompile",
            CourseNumCourseId = "CourseNumCourseId",
            CourseNumCourseCode = "CourseNumCourseCode",
            CourseNumCourseName = "CourseNumCourseName",
        }
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    namespace StudentWholeDataService {
        const baseUrl = "ImportDeclarationPlan/StudentWholeData";
        function Create(request: Serenity.SaveRequest<StudentWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StudentWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ImportDeclarationPlan/StudentWholeData/Create",
            Update = "ImportDeclarationPlan/StudentWholeData/Update",
            Delete = "ImportDeclarationPlan/StudentWholeData/Delete",
            Retrieve = "ImportDeclarationPlan/StudentWholeData/Retrieve",
            List = "ImportDeclarationPlan/StudentWholeData/List",
        }
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    interface TeacherInfoExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class TeacherInfoExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    namespace TeacherInfoExcelImportService {
        const baseUrl = "ImportDeclarationPlan/TeacherInfoExcelImport";
        function TeacherExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            TeacherExcelImport = "ImportDeclarationPlan/TeacherInfoExcelImport/TeacherExcelImport",
        }
    }
}
declare namespace TbMis.ImportDeclarationPlan {
}
declare namespace TbMis.ImportDeclarationPlan {
    interface TeacherWholeDataForm {
        TermCode: Serenity.StringEditor;
        TermName: Serenity.StringEditor;
        BatchId: Serenity.StringEditor;
        SchoolId: Serenity.StringEditor;
        SchoolName: Serenity.StringEditor;
        DepartmentId: Serenity.StringEditor;
        DepartmentName: Serenity.StringEditor;
        CourseNum: Serenity.LookupEditor;
        TextbookNum2: Serenity.LookupEditor;
        EducationalType: Serenity.StringEditor;
        ApprovedAmount: Serenity.IntegerEditor;
        Priority: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
        CheckState: Serenity.StringEditor;
        DataSign: Serenity.StringEditor;
    }
    class TeacherWholeDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    interface TeacherWholeDataRow {
        DeclarationId?: number;
        TermCode?: string;
        TermName?: string;
        BatchId?: string;
        SchoolId?: string;
        SchoolName?: string;
        DepartmentId?: string;
        DepartmentName?: string;
        EducationalType?: string;
        TextbookNum2?: number;
        ApprovedAmount?: number;
        Priority?: string;
        Phone?: string;
        Remarks?: string;
        CheckState?: string;
        DataSign?: string;
        CourseNum?: number;
        TextbookNum2TextbookId?: string;
        TextbookNum2TextbookNum?: string;
        TextbookNum2Isbn?: string;
        TextbookNum2TextbookName?: string;
        TextbookNum2Press?: string;
        TextbookNum2Author?: string;
        TextbookNum2Edition?: string;
        TextbookNum2PrintingCount?: string;
        TextbookNum2Price?: string;
        TextbookNum2TextbookType?: string;
        TextbookNum2Translator?: string;
        TextbookNum2Language?: string;
        TextbookNum2Page?: number;
        TextbookNum2Summary?: string;
        TextbookNum2Catalog?: string;
        TextbookNum2IsSelfCompile?: string;
        CourseNumCourseId?: string;
        CourseNumCourseCode?: string;
        CourseNumCourseName?: string;
    }
    namespace TeacherWholeDataRow {
        const idProperty = "DeclarationId";
        const nameProperty = "TermCode";
        const localTextPrefix = "ImportDeclarationPlan.TeacherWholeData";
        const enum Fields {
            DeclarationId = "DeclarationId",
            TermCode = "TermCode",
            TermName = "TermName",
            BatchId = "BatchId",
            SchoolId = "SchoolId",
            SchoolName = "SchoolName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            EducationalType = "EducationalType",
            TextbookNum2 = "TextbookNum2",
            ApprovedAmount = "ApprovedAmount",
            Priority = "Priority",
            Phone = "Phone",
            Remarks = "Remarks",
            CheckState = "CheckState",
            DataSign = "DataSign",
            CourseNum = "CourseNum",
            TextbookNum2TextbookId = "TextbookNum2TextbookId",
            TextbookNum2TextbookNum = "TextbookNum2TextbookNum",
            TextbookNum2Isbn = "TextbookNum2Isbn",
            TextbookNum2TextbookName = "TextbookNum2TextbookName",
            TextbookNum2Press = "TextbookNum2Press",
            TextbookNum2Author = "TextbookNum2Author",
            TextbookNum2Edition = "TextbookNum2Edition",
            TextbookNum2PrintingCount = "TextbookNum2PrintingCount",
            TextbookNum2Price = "TextbookNum2Price",
            TextbookNum2TextbookType = "TextbookNum2TextbookType",
            TextbookNum2Translator = "TextbookNum2Translator",
            TextbookNum2Language = "TextbookNum2Language",
            TextbookNum2Page = "TextbookNum2Page",
            TextbookNum2Summary = "TextbookNum2Summary",
            TextbookNum2Catalog = "TextbookNum2Catalog",
            TextbookNum2IsSelfCompile = "TextbookNum2IsSelfCompile",
            CourseNumCourseId = "CourseNumCourseId",
            CourseNumCourseCode = "CourseNumCourseCode",
            CourseNumCourseName = "CourseNumCourseName",
        }
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    namespace TeacherWholeDataService {
        const baseUrl = "ImportDeclarationPlan/TeacherWholeData";
        function Create(request: Serenity.SaveRequest<TeacherWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TeacherWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TeacherWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TeacherWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ImportDeclarationPlan/TeacherWholeData/Create",
            Update = "ImportDeclarationPlan/TeacherWholeData/Update",
            Delete = "ImportDeclarationPlan/TeacherWholeData/Delete",
            Retrieve = "ImportDeclarationPlan/TeacherWholeData/Retrieve",
            List = "ImportDeclarationPlan/TeacherWholeData/List",
        }
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
}
declare namespace TbMis.IssuedDeclarationPlan {
    interface BooksellerForm {
        BooksellerId: Serenity.StringEditor;
        BooksellerName: Serenity.StringEditor;
        Contact: Serenity.StringEditor;
        Telephone: Serenity.StringEditor;
    }
    class BooksellerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    interface BooksellerRow {
        BooksellerId?: string;
        BooksellerNum?: number;
        BooksellerName?: string;
        Contact?: string;
        Telephone?: string;
    }
    namespace BooksellerRow {
        const idProperty = "BooksellerNum";
        const nameProperty = "BooksellerId";
        const localTextPrefix = "IssuedDeclarationPlan.Bookseller";
        const enum Fields {
            BooksellerId = "BooksellerId",
            BooksellerNum = "BooksellerNum",
            BooksellerName = "BooksellerName",
            Contact = "Contact",
            Telephone = "Telephone",
        }
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    namespace BooksellerService {
        const baseUrl = "IssuedDeclarationPlan/Bookseller";
        function Create(request: Serenity.SaveRequest<BooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "IssuedDeclarationPlan/Bookseller/Create",
            Update = "IssuedDeclarationPlan/Bookseller/Update",
            Delete = "IssuedDeclarationPlan/Bookseller/Delete",
            Retrieve = "IssuedDeclarationPlan/Bookseller/Retrieve",
            List = "IssuedDeclarationPlan/Bookseller/List",
        }
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
}
declare namespace TbMis.IssuedDeclarationPlan {
    interface StudentDeclarationBooksellerForm {
        SchoolName: Serenity.LookupEditor;
        DeclarationId: Serenity.LookupEditor;
        BooksellerName: Serenity.LookupEditor;
        BooksellerId: Serenity.LookupEditor;
        SubscriptionStatus: Serenity.StringEditor;
        FeedbackDate: Serenity.DateEditor;
        FeedbackStaff: Serenity.StringEditor;
        Remark: Serenity.StringEditor;
        ReDeclareStatus: Serenity.StringEditor;
    }
    class StudentDeclarationBooksellerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    interface StudentDeclarationBooksellerRow {
        SchoolName?: string;
        DeclarationId?: number;
        BooksellerName?: string;
        BooksellerId?: string;
        SubscriptionStatus?: string;
        FeedbackDate?: string;
        FeedbackStaff?: string;
        Remark?: string;
        ReDeclareStatus?: string;
        DeclarationTermCode?: string;
        DeclarationTermName?: string;
        DeclarationBatchId?: string;
        DeclarationSchoolId?: string;
        DeclarationDepartmentId?: string;
        DeclarationDepartmentName?: string;
        DeclarationEducationalType?: string;
        DeclarationTextbookNum2?: number;
        DeclarationApprovedAmount?: number;
        DeclarationPriority?: string;
        DeclarationPhone?: string;
        DeclarationCheckState?: string;
        DeclarationRemarks?: string;
        DeclarationClassName?: string;
        DeclarationClassSize?: string;
        DeclarationDataSign?: string;
        DeclarationCourseNum?: number;
        BooksellerBooksellerNum?: number;
        BooksellerContact?: string;
        BooksellerTelephone?: string;
    }
    namespace StudentDeclarationBooksellerRow {
        const idProperty = "DeclarationId";
        const nameProperty = "BooksellerId";
        const localTextPrefix = "IssuedDeclarationPlan.StudentDeclarationBookseller";
        const enum Fields {
            SchoolName = "SchoolName",
            DeclarationId = "DeclarationId",
            BooksellerName = "BooksellerName",
            BooksellerId = "BooksellerId",
            SubscriptionStatus = "SubscriptionStatus",
            FeedbackDate = "FeedbackDate",
            FeedbackStaff = "FeedbackStaff",
            Remark = "Remark",
            ReDeclareStatus = "ReDeclareStatus",
            DeclarationTermCode = "DeclarationTermCode",
            DeclarationTermName = "DeclarationTermName",
            DeclarationBatchId = "DeclarationBatchId",
            DeclarationSchoolId = "DeclarationSchoolId",
            DeclarationDepartmentId = "DeclarationDepartmentId",
            DeclarationDepartmentName = "DeclarationDepartmentName",
            DeclarationEducationalType = "DeclarationEducationalType",
            DeclarationTextbookNum2 = "DeclarationTextbookNum2",
            DeclarationApprovedAmount = "DeclarationApprovedAmount",
            DeclarationPriority = "DeclarationPriority",
            DeclarationPhone = "DeclarationPhone",
            DeclarationCheckState = "DeclarationCheckState",
            DeclarationRemarks = "DeclarationRemarks",
            DeclarationClassName = "DeclarationClassName",
            DeclarationClassSize = "DeclarationClassSize",
            DeclarationDataSign = "DeclarationDataSign",
            DeclarationCourseNum = "DeclarationCourseNum",
            BooksellerBooksellerNum = "BooksellerBooksellerNum",
            BooksellerContact = "BooksellerContact",
            BooksellerTelephone = "BooksellerTelephone",
        }
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    namespace StudentDeclarationBooksellerService {
        const baseUrl = "IssuedDeclarationPlan/StudentDeclarationBookseller";
        function Create(request: Serenity.SaveRequest<StudentDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StudentDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "IssuedDeclarationPlan/StudentDeclarationBookseller/Create",
            Update = "IssuedDeclarationPlan/StudentDeclarationBookseller/Update",
            Delete = "IssuedDeclarationPlan/StudentDeclarationBookseller/Delete",
            Retrieve = "IssuedDeclarationPlan/StudentDeclarationBookseller/Retrieve",
            List = "IssuedDeclarationPlan/StudentDeclarationBookseller/List",
        }
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
}
declare namespace TbMis.IssuedDeclarationPlan {
    interface StudentWholeDataForm {
        TermCode: Serenity.StringEditor;
        TermName: Serenity.StringEditor;
        BatchId: Serenity.StringEditor;
        SchoolId: Serenity.StringEditor;
        SchoolName: Serenity.StringEditor;
        DepartmentId: Serenity.StringEditor;
        DepartmentName: Serenity.StringEditor;
        EducationalType: Serenity.StringEditor;
        TextbookNum2: Serenity.IntegerEditor;
        ApprovedAmount: Serenity.IntegerEditor;
        Priority: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        CheckState: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
        ClassName: Serenity.StringEditor;
        ClassSize: Serenity.StringEditor;
        DataSign: Serenity.StringEditor;
        CourseNum: Serenity.IntegerEditor;
    }
    class StudentWholeDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    interface StudentWholeDataRow {
        DeclarationId?: number;
        TermCode?: string;
        TermName?: string;
        BatchId?: string;
        SchoolId?: string;
        SchoolName?: string;
        DepartmentId?: string;
        DepartmentName?: string;
        EducationalType?: string;
        TextbookNum2?: number;
        ApprovedAmount?: number;
        Priority?: string;
        Phone?: string;
        CheckState?: string;
        Remarks?: string;
        ClassName?: string;
        ClassSize?: string;
        DataSign?: string;
        CourseNum?: number;
        TextbookNum2TextbookId?: string;
        TextbookNum2TextbookNum?: string;
        TextbookNum2Isbn?: string;
        TextbookNum2TextbookName?: string;
        TextbookNum2Press?: string;
        TextbookNum2Author?: string;
        TextbookNum2Edition?: string;
        TextbookNum2PrintingCount?: string;
        TextbookNum2Price?: string;
        TextbookNum2TextbookType?: string;
        TextbookNum2Translator?: string;
        TextbookNum2Language?: string;
        TextbookNum2Page?: number;
        TextbookNum2Summary?: string;
        TextbookNum2Catalog?: string;
        TextbookNum2IsSelfCompile?: string;
        CourseNumCourseId?: string;
        CourseNumCourseCode?: string;
        CourseNumCourseName?: string;
    }
    namespace StudentWholeDataRow {
        const idProperty = "DeclarationId";
        const nameProperty = "TermCode";
        const localTextPrefix = "IssuedDeclarationPlan.StudentWholeData";
        const enum Fields {
            DeclarationId = "DeclarationId",
            TermCode = "TermCode",
            TermName = "TermName",
            BatchId = "BatchId",
            SchoolId = "SchoolId",
            SchoolName = "SchoolName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            EducationalType = "EducationalType",
            TextbookNum2 = "TextbookNum2",
            ApprovedAmount = "ApprovedAmount",
            Priority = "Priority",
            Phone = "Phone",
            CheckState = "CheckState",
            Remarks = "Remarks",
            ClassName = "ClassName",
            ClassSize = "ClassSize",
            DataSign = "DataSign",
            CourseNum = "CourseNum",
            TextbookNum2TextbookId = "TextbookNum2TextbookId",
            TextbookNum2TextbookNum = "TextbookNum2TextbookNum",
            TextbookNum2Isbn = "TextbookNum2Isbn",
            TextbookNum2TextbookName = "TextbookNum2TextbookName",
            TextbookNum2Press = "TextbookNum2Press",
            TextbookNum2Author = "TextbookNum2Author",
            TextbookNum2Edition = "TextbookNum2Edition",
            TextbookNum2PrintingCount = "TextbookNum2PrintingCount",
            TextbookNum2Price = "TextbookNum2Price",
            TextbookNum2TextbookType = "TextbookNum2TextbookType",
            TextbookNum2Translator = "TextbookNum2Translator",
            TextbookNum2Language = "TextbookNum2Language",
            TextbookNum2Page = "TextbookNum2Page",
            TextbookNum2Summary = "TextbookNum2Summary",
            TextbookNum2Catalog = "TextbookNum2Catalog",
            TextbookNum2IsSelfCompile = "TextbookNum2IsSelfCompile",
            CourseNumCourseId = "CourseNumCourseId",
            CourseNumCourseCode = "CourseNumCourseCode",
            CourseNumCourseName = "CourseNumCourseName",
        }
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    namespace StudentWholeDataService {
        const baseUrl = "IssuedDeclarationPlan/StudentWholeData";
        function Create(request: Serenity.SaveRequest<StudentWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StudentWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "IssuedDeclarationPlan/StudentWholeData/Create",
            Update = "IssuedDeclarationPlan/StudentWholeData/Update",
            Delete = "IssuedDeclarationPlan/StudentWholeData/Delete",
            Retrieve = "IssuedDeclarationPlan/StudentWholeData/Retrieve",
            List = "IssuedDeclarationPlan/StudentWholeData/List",
        }
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
}
declare namespace TbMis.IssuedDeclarationPlan {
    interface TeacherDeclarationBooksellerForm {
        SchoolName: Serenity.LookupEditor;
        DeclarationId: Serenity.LookupEditor;
        BooksellerName: Serenity.LookupEditor;
        BooksellerId: Serenity.LookupEditor;
        SubscriptionStatus: Serenity.StringEditor;
        FeedbackDate: Serenity.DateEditor;
        FeedbackStaff: Serenity.StringEditor;
        Remark: Serenity.StringEditor;
        ReDeclareStatus: Serenity.StringEditor;
    }
    class TeacherDeclarationBooksellerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    interface TeacherDeclarationBooksellerRow {
        SchoolName?: string;
        DeclarationId?: number;
        BooksellerName?: string;
        BooksellerId?: string;
        SubscriptionStatus?: string;
        FeedbackDate?: string;
        FeedbackStaff?: string;
        Remark?: string;
        ReDeclareStatus?: string;
        DeclarationTermCode?: string;
        DeclarationTermName?: string;
        DeclarationBatchId?: string;
        DeclarationSchoolId?: string;
        DeclarationDepartmentId?: string;
        DeclarationDepartmentName?: string;
        DeclarationEducationalType?: string;
        DeclarationTextbookNum2?: number;
        DeclarationApprovedAmount?: number;
        DeclarationPriority?: string;
        DeclarationPhone?: string;
        DeclarationRemarks?: string;
        DeclarationCheckState?: string;
        DeclarationDataSign?: string;
        DeclarationCourseNum?: number;
        BooksellerBooksellerNum?: number;
        BooksellerContact?: string;
        BooksellerTelephone?: string;
    }
    namespace TeacherDeclarationBooksellerRow {
        const idProperty = "DeclarationId";
        const nameProperty = "BooksellerId";
        const localTextPrefix = "IssuedDeclarationPlan.TeacherDeclarationBookseller";
        const enum Fields {
            SchoolName = "SchoolName",
            DeclarationId = "DeclarationId",
            BooksellerName = "BooksellerName",
            BooksellerId = "BooksellerId",
            SubscriptionStatus = "SubscriptionStatus",
            FeedbackDate = "FeedbackDate",
            FeedbackStaff = "FeedbackStaff",
            Remark = "Remark",
            ReDeclareStatus = "ReDeclareStatus",
            DeclarationTermCode = "DeclarationTermCode",
            DeclarationTermName = "DeclarationTermName",
            DeclarationBatchId = "DeclarationBatchId",
            DeclarationSchoolId = "DeclarationSchoolId",
            DeclarationDepartmentId = "DeclarationDepartmentId",
            DeclarationDepartmentName = "DeclarationDepartmentName",
            DeclarationEducationalType = "DeclarationEducationalType",
            DeclarationTextbookNum2 = "DeclarationTextbookNum2",
            DeclarationApprovedAmount = "DeclarationApprovedAmount",
            DeclarationPriority = "DeclarationPriority",
            DeclarationPhone = "DeclarationPhone",
            DeclarationRemarks = "DeclarationRemarks",
            DeclarationCheckState = "DeclarationCheckState",
            DeclarationDataSign = "DeclarationDataSign",
            DeclarationCourseNum = "DeclarationCourseNum",
            BooksellerBooksellerNum = "BooksellerBooksellerNum",
            BooksellerContact = "BooksellerContact",
            BooksellerTelephone = "BooksellerTelephone",
        }
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    namespace TeacherDeclarationBooksellerService {
        const baseUrl = "IssuedDeclarationPlan/TeacherDeclarationBookseller";
        function Create(request: Serenity.SaveRequest<TeacherDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TeacherDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TeacherDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TeacherDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "IssuedDeclarationPlan/TeacherDeclarationBookseller/Create",
            Update = "IssuedDeclarationPlan/TeacherDeclarationBookseller/Update",
            Delete = "IssuedDeclarationPlan/TeacherDeclarationBookseller/Delete",
            Retrieve = "IssuedDeclarationPlan/TeacherDeclarationBookseller/Retrieve",
            List = "IssuedDeclarationPlan/TeacherDeclarationBookseller/List",
        }
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
}
declare namespace TbMis.IssuedDeclarationPlan {
    interface TeacherWholeDataForm {
        TermCode: Serenity.StringEditor;
        TermName: Serenity.StringEditor;
        BatchId: Serenity.StringEditor;
        SchoolId: Serenity.StringEditor;
        SchoolName: Serenity.StringEditor;
        DepartmentId: Serenity.StringEditor;
        DepartmentName: Serenity.StringEditor;
        EducationalType: Serenity.StringEditor;
        TextbookNum2: Serenity.IntegerEditor;
        ApprovedAmount: Serenity.IntegerEditor;
        Priority: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
        CheckState: Serenity.StringEditor;
        DataSign: Serenity.StringEditor;
        CourseNum: Serenity.IntegerEditor;
    }
    class TeacherWholeDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    interface TeacherWholeDataRow {
        DeclarationId?: number;
        TermCode?: string;
        TermName?: string;
        BatchId?: string;
        SchoolId?: string;
        SchoolName?: string;
        DepartmentId?: string;
        DepartmentName?: string;
        EducationalType?: string;
        TextbookNum2?: number;
        ApprovedAmount?: number;
        Priority?: string;
        Phone?: string;
        Remarks?: string;
        CheckState?: string;
        DataSign?: string;
        CourseNum?: number;
        TextbookNum2TextbookId?: string;
        TextbookNum2TextbookNum?: string;
        TextbookNum2Isbn?: string;
        TextbookNum2TextbookName?: string;
        TextbookNum2Press?: string;
        TextbookNum2Author?: string;
        TextbookNum2Edition?: string;
        TextbookNum2PrintingCount?: string;
        TextbookNum2Price?: string;
        TextbookNum2TextbookType?: string;
        TextbookNum2Translator?: string;
        TextbookNum2Language?: string;
        TextbookNum2Page?: number;
        TextbookNum2Summary?: string;
        TextbookNum2Catalog?: string;
        TextbookNum2IsSelfCompile?: string;
        CourseNumCourseId?: string;
        CourseNumCourseCode?: string;
        CourseNumCourseName?: string;
    }
    namespace TeacherWholeDataRow {
        const idProperty = "DeclarationId";
        const nameProperty = "TermCode";
        const localTextPrefix = "IssuedDeclarationPlan.TeacherWholeData";
        const enum Fields {
            DeclarationId = "DeclarationId",
            TermCode = "TermCode",
            TermName = "TermName",
            BatchId = "BatchId",
            SchoolId = "SchoolId",
            SchoolName = "SchoolName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            EducationalType = "EducationalType",
            TextbookNum2 = "TextbookNum2",
            ApprovedAmount = "ApprovedAmount",
            Priority = "Priority",
            Phone = "Phone",
            Remarks = "Remarks",
            CheckState = "CheckState",
            DataSign = "DataSign",
            CourseNum = "CourseNum",
            TextbookNum2TextbookId = "TextbookNum2TextbookId",
            TextbookNum2TextbookNum = "TextbookNum2TextbookNum",
            TextbookNum2Isbn = "TextbookNum2Isbn",
            TextbookNum2TextbookName = "TextbookNum2TextbookName",
            TextbookNum2Press = "TextbookNum2Press",
            TextbookNum2Author = "TextbookNum2Author",
            TextbookNum2Edition = "TextbookNum2Edition",
            TextbookNum2PrintingCount = "TextbookNum2PrintingCount",
            TextbookNum2Price = "TextbookNum2Price",
            TextbookNum2TextbookType = "TextbookNum2TextbookType",
            TextbookNum2Translator = "TextbookNum2Translator",
            TextbookNum2Language = "TextbookNum2Language",
            TextbookNum2Page = "TextbookNum2Page",
            TextbookNum2Summary = "TextbookNum2Summary",
            TextbookNum2Catalog = "TextbookNum2Catalog",
            TextbookNum2IsSelfCompile = "TextbookNum2IsSelfCompile",
            CourseNumCourseId = "CourseNumCourseId",
            CourseNumCourseCode = "CourseNumCourseCode",
            CourseNumCourseName = "CourseNumCourseName",
        }
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    namespace TeacherWholeDataService {
        const baseUrl = "IssuedDeclarationPlan/TeacherWholeData";
        function Create(request: Serenity.SaveRequest<TeacherWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TeacherWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TeacherWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TeacherWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "IssuedDeclarationPlan/TeacherWholeData/Create",
            Update = "IssuedDeclarationPlan/TeacherWholeData/Update",
            Delete = "IssuedDeclarationPlan/TeacherWholeData/Delete",
            Retrieve = "IssuedDeclarationPlan/TeacherWholeData/Retrieve",
            List = "IssuedDeclarationPlan/TeacherWholeData/List",
        }
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
}
declare namespace TbMis.MaintainDeclarationPlan {
    interface CourseMessageForm {
        CourseId: Serenity.StringEditor;
        CourseCode: Serenity.StringEditor;
        CourseName: Serenity.StringEditor;
    }
    class CourseMessageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    interface CourseMessageRow {
        CourseNum?: number;
        CourseId?: string;
        CourseCode?: string;
        CourseName?: string;
    }
    namespace CourseMessageRow {
        const idProperty = "CourseNum";
        const nameProperty = "CourseId";
        const localTextPrefix = "MaintainDeclarationPlan.CourseMessage";
        const enum Fields {
            CourseNum = "CourseNum",
            CourseId = "CourseId",
            CourseCode = "CourseCode",
            CourseName = "CourseName",
        }
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    namespace CourseMessageService {
        const baseUrl = "MaintainDeclarationPlan/CourseMessage";
        function Create(request: Serenity.SaveRequest<CourseMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CourseMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CourseMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CourseMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "MaintainDeclarationPlan/CourseMessage/Create",
            Update = "MaintainDeclarationPlan/CourseMessage/Update",
            Delete = "MaintainDeclarationPlan/CourseMessage/Delete",
            Retrieve = "MaintainDeclarationPlan/CourseMessage/Retrieve",
            List = "MaintainDeclarationPlan/CourseMessage/List",
        }
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
}
declare namespace TbMis.MaintainDeclarationPlan {
    interface StudentWholeDataForm {
        TermCode: Serenity.StringEditor;
        TermName: Serenity.StringEditor;
        BatchId: Serenity.StringEditor;
        SchoolId: Serenity.StringEditor;
        SchoolName: Serenity.LookupEditor;
        DepartmentId: Serenity.StringEditor;
        DepartmentName: Serenity.LookupEditor;
        EducationalType: Serenity.StringEditor;
        TextbookNum2: Serenity.IntegerEditor;
        ApprovedAmount: Serenity.IntegerEditor;
        Priority: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        CheckState: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
        ClassName: Serenity.StringEditor;
        ClassSize: Serenity.StringEditor;
        DataSign: Serenity.StringEditor;
        CourseNum: Serenity.IntegerEditor;
    }
    class StudentWholeDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    interface StudentWholeDataRow {
        DeclarationId?: number;
        TermCode?: string;
        TermName?: string;
        BatchId?: string;
        SchoolId?: string;
        SchoolName?: string;
        DepartmentId?: string;
        DepartmentName?: string;
        EducationalType?: string;
        TextbookNum2?: number;
        ApprovedAmount?: number;
        Priority?: string;
        Phone?: string;
        CheckState?: string;
        Remarks?: string;
        ClassName?: string;
        ClassSize?: string;
        DataSign?: string;
        CourseNum?: number;
        TextbookNum2TextbookId?: string;
        TextbookNum2TextbookNum?: string;
        TextbookNum2Isbn?: string;
        TextbookNum2TextbookName?: string;
        TextbookNum2Press?: string;
        TextbookNum2Author?: string;
        TextbookNum2Edition?: string;
        TextbookNum2PrintingCount?: string;
        TextbookNum2Price?: string;
        TextbookNum2TextbookType?: string;
        TextbookNum2Translator?: string;
        TextbookNum2Language?: string;
        TextbookNum2Page?: number;
        TextbookNum2Summary?: string;
        TextbookNum2Catalog?: string;
        TextbookNum2IsSelfCompile?: string;
        CourseNumCourseId?: string;
        CourseNumCourseCode?: string;
        CourseNumCourseName?: string;
    }
    namespace StudentWholeDataRow {
        const idProperty = "DeclarationId";
        const nameProperty = "TermCode";
        const localTextPrefix = "MaintainDeclarationPlan.StudentWholeData";
        const enum Fields {
            DeclarationId = "DeclarationId",
            TermCode = "TermCode",
            TermName = "TermName",
            BatchId = "BatchId",
            SchoolId = "SchoolId",
            SchoolName = "SchoolName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            EducationalType = "EducationalType",
            TextbookNum2 = "TextbookNum2",
            ApprovedAmount = "ApprovedAmount",
            Priority = "Priority",
            Phone = "Phone",
            CheckState = "CheckState",
            Remarks = "Remarks",
            ClassName = "ClassName",
            ClassSize = "ClassSize",
            DataSign = "DataSign",
            CourseNum = "CourseNum",
            TextbookNum2TextbookId = "TextbookNum2TextbookId",
            TextbookNum2TextbookNum = "TextbookNum2TextbookNum",
            TextbookNum2Isbn = "TextbookNum2Isbn",
            TextbookNum2TextbookName = "TextbookNum2TextbookName",
            TextbookNum2Press = "TextbookNum2Press",
            TextbookNum2Author = "TextbookNum2Author",
            TextbookNum2Edition = "TextbookNum2Edition",
            TextbookNum2PrintingCount = "TextbookNum2PrintingCount",
            TextbookNum2Price = "TextbookNum2Price",
            TextbookNum2TextbookType = "TextbookNum2TextbookType",
            TextbookNum2Translator = "TextbookNum2Translator",
            TextbookNum2Language = "TextbookNum2Language",
            TextbookNum2Page = "TextbookNum2Page",
            TextbookNum2Summary = "TextbookNum2Summary",
            TextbookNum2Catalog = "TextbookNum2Catalog",
            TextbookNum2IsSelfCompile = "TextbookNum2IsSelfCompile",
            CourseNumCourseId = "CourseNumCourseId",
            CourseNumCourseCode = "CourseNumCourseCode",
            CourseNumCourseName = "CourseNumCourseName",
        }
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    namespace StudentWholeDataService {
        const baseUrl = "MaintainDeclarationPlan/StudentWholeData";
        function Create(request: Serenity.SaveRequest<StudentWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StudentWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "MaintainDeclarationPlan/StudentWholeData/Create",
            Update = "MaintainDeclarationPlan/StudentWholeData/Update",
            Delete = "MaintainDeclarationPlan/StudentWholeData/Delete",
            Retrieve = "MaintainDeclarationPlan/StudentWholeData/Retrieve",
            List = "MaintainDeclarationPlan/StudentWholeData/List",
        }
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
}
declare namespace TbMis.MaintainDeclarationPlan {
    interface TeacherWholeDataForm {
        TermCode: Serenity.StringEditor;
        TermName: Serenity.StringEditor;
        BatchId: Serenity.StringEditor;
        SchoolId: Serenity.StringEditor;
        SchoolName: Serenity.LookupEditor;
        DepartmentId: Serenity.StringEditor;
        DepartmentName: Serenity.LookupEditor;
        EducationalType: Serenity.StringEditor;
        TextbookNum2: Serenity.IntegerEditor;
        ApprovedAmount: Serenity.IntegerEditor;
        Priority: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
        CheckState: Serenity.StringEditor;
        DataSign: Serenity.StringEditor;
        CourseNum: Serenity.IntegerEditor;
    }
    class TeacherWholeDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    interface TeacherWholeDataRow {
        DeclarationId?: number;
        TermCode?: string;
        TermName?: string;
        BatchId?: string;
        SchoolId?: string;
        SchoolName?: string;
        DepartmentId?: string;
        DepartmentName?: string;
        EducationalType?: string;
        TextbookNum2?: number;
        ApprovedAmount?: number;
        Priority?: string;
        Phone?: string;
        Remarks?: string;
        CheckState?: string;
        DataSign?: string;
        CourseNum?: number;
        TextbookNum2TextbookId?: string;
        TextbookNum2TextbookNum?: string;
        TextbookNum2Isbn?: string;
        TextbookNum2TextbookName?: string;
        TextbookNum2Press?: string;
        TextbookNum2Author?: string;
        TextbookNum2Edition?: string;
        TextbookNum2PrintingCount?: string;
        TextbookNum2Price?: string;
        TextbookNum2TextbookType?: string;
        TextbookNum2Translator?: string;
        TextbookNum2Language?: string;
        TextbookNum2Page?: number;
        TextbookNum2Summary?: string;
        TextbookNum2Catalog?: string;
        TextbookNum2IsSelfCompile?: string;
        CourseNumCourseId?: string;
        CourseNumCourseCode?: string;
        CourseNumCourseName?: string;
    }
    namespace TeacherWholeDataRow {
        const idProperty = "DeclarationId";
        const nameProperty = "TermCode";
        const localTextPrefix = "MaintainDeclarationPlan.TeacherWholeData";
        const enum Fields {
            DeclarationId = "DeclarationId",
            TermCode = "TermCode",
            TermName = "TermName",
            BatchId = "BatchId",
            SchoolId = "SchoolId",
            SchoolName = "SchoolName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            EducationalType = "EducationalType",
            TextbookNum2 = "TextbookNum2",
            ApprovedAmount = "ApprovedAmount",
            Priority = "Priority",
            Phone = "Phone",
            Remarks = "Remarks",
            CheckState = "CheckState",
            DataSign = "DataSign",
            CourseNum = "CourseNum",
            TextbookNum2TextbookId = "TextbookNum2TextbookId",
            TextbookNum2TextbookNum = "TextbookNum2TextbookNum",
            TextbookNum2Isbn = "TextbookNum2Isbn",
            TextbookNum2TextbookName = "TextbookNum2TextbookName",
            TextbookNum2Press = "TextbookNum2Press",
            TextbookNum2Author = "TextbookNum2Author",
            TextbookNum2Edition = "TextbookNum2Edition",
            TextbookNum2PrintingCount = "TextbookNum2PrintingCount",
            TextbookNum2Price = "TextbookNum2Price",
            TextbookNum2TextbookType = "TextbookNum2TextbookType",
            TextbookNum2Translator = "TextbookNum2Translator",
            TextbookNum2Language = "TextbookNum2Language",
            TextbookNum2Page = "TextbookNum2Page",
            TextbookNum2Summary = "TextbookNum2Summary",
            TextbookNum2Catalog = "TextbookNum2Catalog",
            TextbookNum2IsSelfCompile = "TextbookNum2IsSelfCompile",
            CourseNumCourseId = "CourseNumCourseId",
            CourseNumCourseCode = "CourseNumCourseCode",
            CourseNumCourseName = "CourseNumCourseName",
        }
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    namespace TeacherWholeDataService {
        const baseUrl = "MaintainDeclarationPlan/TeacherWholeData";
        function Create(request: Serenity.SaveRequest<TeacherWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TeacherWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TeacherWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TeacherWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "MaintainDeclarationPlan/TeacherWholeData/Create",
            Update = "MaintainDeclarationPlan/TeacherWholeData/Update",
            Delete = "MaintainDeclarationPlan/TeacherWholeData/Delete",
            Retrieve = "MaintainDeclarationPlan/TeacherWholeData/Retrieve",
            List = "MaintainDeclarationPlan/TeacherWholeData/List",
        }
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
}
declare namespace TbMis.MaintainDeclarationPlan {
    interface TextbookMessageForm {
        TextbookId: Serenity.StringEditor;
        TextbookNum: Serenity.StringEditor;
        Isbn: Serenity.StringEditor;
        TextbookName: Serenity.StringEditor;
        Press: Serenity.StringEditor;
        Author: Serenity.StringEditor;
        Edition: Serenity.StringEditor;
        PrintingCount: Serenity.StringEditor;
        Price: Serenity.StringEditor;
        TextbookType: Serenity.StringEditor;
        Translator: Serenity.StringEditor;
        Language: Serenity.StringEditor;
        Page: Serenity.IntegerEditor;
        Summary: Serenity.StringEditor;
        Catalog: Serenity.StringEditor;
        IsSelfCompile: Serenity.StringEditor;
    }
    class TextbookMessageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    interface TextbookMessageRow {
        TextbookId?: string;
        TextbookNum2?: number;
        TextbookNum?: string;
        Isbn?: string;
        TextbookName?: string;
        Press?: string;
        Author?: string;
        Edition?: string;
        PrintingCount?: string;
        Price?: string;
        TextbookType?: string;
        Translator?: string;
        Language?: string;
        Page?: number;
        Summary?: string;
        Catalog?: string;
        IsSelfCompile?: string;
    }
    namespace TextbookMessageRow {
        const idProperty = "TextbookNum2";
        const nameProperty = "TextbookId";
        const localTextPrefix = "MaintainDeclarationPlan.TextbookMessage";
        const enum Fields {
            TextbookId = "TextbookId",
            TextbookNum2 = "TextbookNum2",
            TextbookNum = "TextbookNum",
            Isbn = "Isbn",
            TextbookName = "TextbookName",
            Press = "Press",
            Author = "Author",
            Edition = "Edition",
            PrintingCount = "PrintingCount",
            Price = "Price",
            TextbookType = "TextbookType",
            Translator = "Translator",
            Language = "Language",
            Page = "Page",
            Summary = "Summary",
            Catalog = "Catalog",
            IsSelfCompile = "IsSelfCompile",
        }
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    namespace TextbookMessageService {
        const baseUrl = "MaintainDeclarationPlan/TextbookMessage";
        function Create(request: Serenity.SaveRequest<TextbookMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TextbookMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TextbookMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TextbookMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "MaintainDeclarationPlan/TextbookMessage/Create",
            Update = "MaintainDeclarationPlan/TextbookMessage/Update",
            Delete = "MaintainDeclarationPlan/TextbookMessage/Delete",
            Retrieve = "MaintainDeclarationPlan/TextbookMessage/Retrieve",
            List = "MaintainDeclarationPlan/TextbookMessage/List",
        }
    }
}
declare namespace TbMis.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace TbMis.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace TbMis.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace TbMis.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace TbMis.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace TbMis {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace TbMis.TextBookInfo {
}
declare namespace TbMis.TextBookInfo {
    interface TextbookForm {
        TextbookId: Serenity.StringEditor;
        TextbookNum: Serenity.StringEditor;
        Isbn: Serenity.StringEditor;
        TextbookName: Serenity.StringEditor;
        Press: Serenity.StringEditor;
        Author: Serenity.StringEditor;
        Edition: Serenity.StringEditor;
        PrintingCount: Serenity.StringEditor;
        Price: Serenity.StringEditor;
        TextbookType: Serenity.StringEditor;
        Translator: Serenity.StringEditor;
        Language: Serenity.StringEditor;
        Page: Serenity.IntegerEditor;
        Summary: Serenity.StringEditor;
        Catalog: Serenity.StringEditor;
        IsSelfCompile: Serenity.StringEditor;
    }
    class TextbookForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.TextBookInfo {
}
declare namespace TbMis.TextBookInfo {
    interface TextbookMessageForm {
        TextbookId: Serenity.StringEditor;
        TextbookNum: Serenity.StringEditor;
        Isbn: Serenity.StringEditor;
        TextbookName: Serenity.StringEditor;
        Press: Serenity.StringEditor;
        Author: Serenity.StringEditor;
        Edition: Serenity.StringEditor;
        PrintingCount: Serenity.StringEditor;
        Price: Serenity.StringEditor;
        TextbookType: Serenity.StringEditor;
        Translator: Serenity.StringEditor;
        Language: Serenity.StringEditor;
        Page: Serenity.IntegerEditor;
        Summary: Serenity.StringEditor;
        Catalog: Serenity.StringEditor;
        IsSelfCompile: Serenity.StringEditor;
    }
    class TextbookMessageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TbMis.TextBookInfo {
    interface TextbookMessageRow {
        TextbookId?: string;
        TextbookNum2?: number;
        TextbookNum?: string;
        Isbn?: string;
        TextbookName?: string;
        Press?: string;
        Author?: string;
        Edition?: string;
        PrintingCount?: string;
        Price?: string;
        TextbookType?: string;
        Translator?: string;
        Language?: string;
        Page?: number;
        Summary?: string;
        Catalog?: string;
        IsSelfCompile?: string;
    }
    namespace TextbookMessageRow {
        const idProperty = "TextbookNum2";
        const nameProperty = "TextbookName";
        const localTextPrefix = "TextBookInfo.TextbookMessage";
        const lookupKey = "TextBookInfo.TextbookMessage";
        function getLookup(): Q.Lookup<TextbookMessageRow>;
        const enum Fields {
            TextbookId = "TextbookId",
            TextbookNum2 = "TextbookNum2",
            TextbookNum = "TextbookNum",
            Isbn = "Isbn",
            TextbookName = "TextbookName",
            Press = "Press",
            Author = "Author",
            Edition = "Edition",
            PrintingCount = "PrintingCount",
            Price = "Price",
            TextbookType = "TextbookType",
            Translator = "Translator",
            Language = "Language",
            Page = "Page",
            Summary = "Summary",
            Catalog = "Catalog",
            IsSelfCompile = "IsSelfCompile",
        }
    }
}
declare namespace TbMis.TextBookInfo {
    namespace TextbookMessageService {
        const baseUrl = "TextBookInfo/TextbookMessage";
        function Create(request: Serenity.SaveRequest<TextbookMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TextbookMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TextbookMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TextbookMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "TextBookInfo/TextbookMessage/Create",
            Update = "TextBookInfo/TextbookMessage/Update",
            Delete = "TextBookInfo/TextbookMessage/Delete",
            Retrieve = "TextBookInfo/TextbookMessage/Retrieve",
            List = "TextBookInfo/TextbookMessage/List",
        }
    }
}
declare namespace TbMis.TextBookInfo {
    interface TextbookRow {
        TextbookId?: string;
        TextbookNum2?: number;
        TextbookNum?: string;
        Isbn?: string;
        TextbookName?: string;
        Press?: string;
        Author?: string;
        Edition?: string;
        PrintingCount?: string;
        Price?: string;
        TextbookType?: string;
        Translator?: string;
        Language?: string;
        Page?: number;
        Summary?: string;
        Catalog?: string;
        IsSelfCompile?: string;
    }
    namespace TextbookRow {
        const idProperty = "TextbookNum2";
        const nameProperty = "TextbookId";
        const localTextPrefix = "TextBookInfo.Textbook";
        const lookupKey = "TextBookInfo.Textbook";
        function getLookup(): Q.Lookup<TextbookRow>;
        const enum Fields {
            TextbookId = "TextbookId",
            TextbookNum2 = "TextbookNum2",
            TextbookNum = "TextbookNum",
            Isbn = "Isbn",
            TextbookName = "TextbookName",
            Press = "Press",
            Author = "Author",
            Edition = "Edition",
            PrintingCount = "PrintingCount",
            Price = "Price",
            TextbookType = "TextbookType",
            Translator = "Translator",
            Language = "Language",
            Page = "Page",
            Summary = "Summary",
            Catalog = "Catalog",
            IsSelfCompile = "IsSelfCompile",
        }
    }
}
declare namespace TbMis.TextBookInfo {
    namespace TextbookService {
        const baseUrl = "TextBookInfo/Textbook";
        function Create(request: Serenity.SaveRequest<TextbookRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TextbookRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TextbookRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TextbookRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "TextBookInfo/Textbook/Create",
            Update = "TextBookInfo/Textbook/Update",
            Delete = "TextBookInfo/Textbook/Delete",
            Retrieve = "TextBookInfo/Textbook/Retrieve",
            List = "TextBookInfo/Textbook/List",
        }
    }
}
declare namespace TbMis.LanguageList {
    function getValue(): string[][];
}
declare namespace TbMis.ScriptInitialization {
}
declare namespace TbMis.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace TbMis.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace TbMis.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace TbMis.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace TbMis.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace TbMis.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace TbMis.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace TbMis.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace TbMis.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private roleOrImplicit(key);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace TbMis.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace TbMis.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace TbMis.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace TbMis {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace TbMis.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace TbMis.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace TbMis.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace TbMis.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace TbMis.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace TbMis.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace TbMis {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent();
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace TbMis.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace TbMis.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace TbMis.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace TbMis.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace TbMis.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace TbMis.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace TbMis.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace TbMis.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace TbMis.CourseInfo {
    class CourseDialog extends Serenity.EntityDialog<CourseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CourseForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected getEntityTitle(): string;
        protected updateTitle(): void;
    }
}
declare namespace TbMis.CourseInfo {
    class CourseGrid extends Serenity.EntityGrid<CourseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CourseDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TbMis.CourseInfo {
    class CourseMessageDialog extends Serenity.EntityDialog<CourseMessageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CourseMessageForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace TbMis.CourseInfo {
    class CourseMessageGrid extends Serenity.EntityGrid<CourseMessageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CourseMessageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    class StudentInfoExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    class StudentWholeDataDialog extends Serenity.EntityDialog<StudentWholeDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StudentWholeDataForm;
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    class StudentWholeDataGrid extends Serenity.EntityGrid<StudentWholeDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StudentWholeDataDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
        * get a button of ExcelImport.
        */
        protected getButtons(): Serenity.ToolButton[];
        /**
         * get a column of delete buttons
         */
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    class TeacherInfoExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    class TeacherWholeDataDialog extends Serenity.EntityDialog<TeacherWholeDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TeacherWholeDataForm;
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    class TeacherWholeDataGrid extends Serenity.EntityGrid<TeacherWholeDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TeacherWholeDataDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
        * get a button of ExcelImport.
        */
        protected getButtons(): Serenity.ToolButton[];
        /**
         * get a column of delete buttons
         */
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    class BooksellerDialog extends Serenity.EntityDialog<BooksellerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BooksellerForm;
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    class BooksellerGrid extends Serenity.EntityGrid<BooksellerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BooksellerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    class StudentDeclarationBooksellerDialog extends Serenity.EntityDialog<StudentDeclarationBooksellerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StudentDeclarationBooksellerForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected getEntityTitle(): string;
        protected updateTitle(): void;
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    class StudentDeclarationBooksellerGrid extends Serenity.EntityGrid<StudentDeclarationBooksellerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StudentDeclarationBooksellerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    class StudentWholeDataDialog extends Serenity.EntityDialog<StudentWholeDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StudentWholeDataForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected getEntityTitle(): string;
        protected updateTitle(): void;
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    class StudentWholeDataGrid extends Serenity.EntityGrid<StudentWholeDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StudentWholeDataDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    class TeacherDeclarationBooksellerDialog extends Serenity.EntityDialog<TeacherDeclarationBooksellerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TeacherDeclarationBooksellerForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected getEntityTitle(): string;
        protected updateTitle(): void;
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    class TeacherDeclarationBooksellerGrid extends Serenity.EntityGrid<TeacherDeclarationBooksellerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TeacherDeclarationBooksellerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    class TeacherWholeDataDialog extends Serenity.EntityDialog<TeacherWholeDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TeacherWholeDataForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected getEntityTitle(): string;
        protected updateTitle(): void;
    }
}
declare namespace TbMis.ExportSubscriptionPlan {
    class TeacherWholeDataGrid extends Serenity.EntityGrid<TeacherWholeDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TeacherWholeDataDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace TbMis.FeedbackSubscriptionPlan {
    class StudentDeclarationBooksellerDialog extends Serenity.EntityDialog<StudentDeclarationBooksellerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StudentDeclarationBooksellerForm;
    }
}
declare namespace TbMis.FeedbackSubscriptionPlan {
    class StudentDeclarationBooksellerGrid extends Serenity.EntityGrid<StudentDeclarationBooksellerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StudentDeclarationBooksellerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getButtons(): Serenity.ToolButton[];
        constructor(container: JQuery);
    }
}
declare namespace TbMis.FeedbackSubscriptionPlan {
    class TeacherDeclarationBooksellerDialog extends Serenity.EntityDialog<TeacherDeclarationBooksellerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TeacherDeclarationBooksellerForm;
    }
}
declare namespace TbMis.FeedbackSubscriptionPlan {
    class TeacherDeclarationBooksellerGrid extends Serenity.EntityGrid<TeacherDeclarationBooksellerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TeacherDeclarationBooksellerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getButtons(): Serenity.ToolButton[];
        constructor(container: JQuery);
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    class StudentInfoExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    class StudentWholeDataDialog extends Serenity.EntityDialog<StudentWholeDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StudentWholeDataForm;
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    class StudentWholeDataGrid extends Serenity.EntityGrid<StudentWholeDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StudentWholeDataDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
        * get a button of ExcelImport.
        */
        protected getButtons(): Serenity.ToolButton[];
        /**
         * get a column of delete buttons
         */
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    class TeacherInfoExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    class TeacherWholeDataDialog extends Serenity.EntityDialog<TeacherWholeDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TeacherWholeDataForm;
    }
}
declare namespace TbMis.ImportDeclarationPlan {
    class TeacherWholeDataGrid extends Serenity.EntityGrid<TeacherWholeDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TeacherWholeDataDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
        * get a button of ExcelImport.
        */
        protected getButtons(): Serenity.ToolButton[];
        /**
         * get a column of delete buttons
         */
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    class BooksellerDialog extends Serenity.EntityDialog<BooksellerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BooksellerForm;
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    class BooksellerGrid extends Serenity.EntityGrid<BooksellerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BooksellerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    class StudentDeclarationBooksellerDialog extends Serenity.EntityDialog<StudentDeclarationBooksellerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StudentDeclarationBooksellerForm;
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    class StudentDeclarationBooksellerGrid extends Serenity.EntityGrid<StudentDeclarationBooksellerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StudentDeclarationBooksellerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    class StudentWholeDataDialog extends Serenity.EntityDialog<StudentWholeDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StudentWholeDataForm;
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    class StudentWholeDataGrid extends Serenity.EntityGrid<StudentWholeDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StudentWholeDataDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    class TeacherDeclarationBooksellerDialog extends Serenity.EntityDialog<TeacherDeclarationBooksellerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TeacherDeclarationBooksellerForm;
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    class TeacherDeclarationBooksellerGrid extends Serenity.EntityGrid<TeacherDeclarationBooksellerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TeacherDeclarationBooksellerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    class TeacherWholeDataDialog extends Serenity.EntityDialog<TeacherWholeDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TeacherWholeDataForm;
    }
}
declare namespace TbMis.IssuedDeclarationPlan {
    class TeacherWholeDataGrid extends Serenity.EntityGrid<TeacherWholeDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TeacherWholeDataDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    class CourseMessageDialog extends Serenity.EntityDialog<CourseMessageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CourseMessageForm;
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    class CourseMessageGrid extends Serenity.EntityGrid<CourseMessageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CourseMessageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    class StudentWholeDataDialog extends Serenity.EntityDialog<StudentWholeDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StudentWholeDataForm;
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    class StudentWholeDataGrid extends Serenity.EntityGrid<StudentWholeDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StudentWholeDataDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    class TeacherWholeDataDialog extends Serenity.EntityDialog<TeacherWholeDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TeacherWholeDataForm;
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    class TeacherWholeDataGrid extends Serenity.EntityGrid<TeacherWholeDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TeacherWholeDataDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    class TextbookMessageDialog extends Serenity.EntityDialog<TextbookMessageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TextbookMessageForm;
    }
}
declare namespace TbMis.MaintainDeclarationPlan {
    class TextbookMessageGrid extends Serenity.EntityGrid<TextbookMessageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TextbookMessageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TbMis.TextBookInfo {
    class TextbookDialog extends Serenity.EntityDialog<TextbookRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TextbookForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected getEntityTitle(): string;
        protected updateTitle(): void;
    }
}
declare namespace TbMis.TextBookInfo {
    class TextbookGrid extends Serenity.EntityGrid<TextbookRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TextbookDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TbMis.TextBookInfo {
    class TextbookMessageDialog extends Serenity.EntityDialog<TextbookMessageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TextbookMessageForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace TbMis.TextBookInfo {
    class TextbookMessageGrid extends Serenity.EntityGrid<TextbookMessageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TextbookMessageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TbMis.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace TbMis.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace TbMis.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace TbMis.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace TbMis.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
