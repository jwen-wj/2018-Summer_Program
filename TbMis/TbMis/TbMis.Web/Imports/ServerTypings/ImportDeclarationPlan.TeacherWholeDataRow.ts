namespace TbMis.ImportDeclarationPlan {
    export interface TeacherWholeDataRow {
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

    export namespace TeacherWholeDataRow {
        export const idProperty = 'DeclarationId';
        export const nameProperty = 'TermCode';
        export const localTextPrefix = 'ImportDeclarationPlan.TeacherWholeData';

        export declare const enum Fields {
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
            CourseNumCourseName = "CourseNumCourseName"
        }
    }
}

