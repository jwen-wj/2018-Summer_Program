namespace TbMis.MaintainDeclarationPlan {
    export interface CourseMessageRow {
        CourseNum?: number;
        CourseId?: string;
        CourseCode?: string;
        CourseName?: string;
    }

    export namespace CourseMessageRow {
        export const idProperty = 'CourseNum';
        export const nameProperty = 'CourseId';
        export const localTextPrefix = 'MaintainDeclarationPlan.CourseMessage';

        export declare const enum Fields {
            CourseNum = "CourseNum",
            CourseId = "CourseId",
            CourseCode = "CourseCode",
            CourseName = "CourseName"
        }
    }
}

