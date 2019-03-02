namespace TbMis.ExportSubscriptionPlan {
    export interface TeacherDeclarationBooksellerRow {
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

    export namespace TeacherDeclarationBooksellerRow {
        export const idProperty = 'DeclarationId';
        export const nameProperty = 'BooksellerId';
        export const localTextPrefix = 'ExportSubscriptionPlan.TeacherDeclarationBookseller';

        export declare const enum Fields {
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
            CourseNum = "CourseNum"
        }
    }
}

