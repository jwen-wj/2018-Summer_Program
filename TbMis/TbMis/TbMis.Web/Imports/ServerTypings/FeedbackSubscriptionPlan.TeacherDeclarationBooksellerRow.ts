namespace TbMis.FeedbackSubscriptionPlan {
    export interface TeacherDeclarationBooksellerRow {
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

    export namespace TeacherDeclarationBooksellerRow {
        export const idProperty = 'DeclarationId';
        export const nameProperty = 'BooksellerId';
        export const localTextPrefix = 'FeedbackSubscriptionPlan.TeacherDeclarationBookseller';

        export declare const enum Fields {
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
            BooksellerTelephone = "BooksellerTelephone"
        }
    }
}

