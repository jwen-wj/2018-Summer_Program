namespace TbMis.FeedbackSubscriptionPlan {
    export interface StudentDeclarationBooksellerRow {
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

    export namespace StudentDeclarationBooksellerRow {
        export const idProperty = 'DeclarationId';
        export const nameProperty = 'BooksellerId';
        export const localTextPrefix = 'FeedbackSubscriptionPlan.StudentDeclarationBookseller';

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
            DeclarationCheckState = "DeclarationCheckState",
            DeclarationRemarks = "DeclarationRemarks",
            DeclarationClassName = "DeclarationClassName",
            DeclarationClassSize = "DeclarationClassSize",
            DeclarationDataSign = "DeclarationDataSign",
            DeclarationCourseNum = "DeclarationCourseNum",
            BooksellerBooksellerNum = "BooksellerBooksellerNum",
            BooksellerBooksellerName = "BooksellerBooksellerName",
            BooksellerContact = "BooksellerContact",
            BooksellerTelephone = "BooksellerTelephone"
        }
    }
}

