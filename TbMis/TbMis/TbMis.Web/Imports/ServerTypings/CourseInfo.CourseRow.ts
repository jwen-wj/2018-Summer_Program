namespace TbMis.CourseInfo {
    export interface CourseRow {
        CourseNum?: number;
        CourseId?: string;
        CourseCode?: string;
        CourseName?: string;
    }

    export namespace CourseRow {
        export const idProperty = 'CourseNum';
        export const nameProperty = 'CourseId';
        export const localTextPrefix = 'CourseInfo.Course';
        export const lookupKey = 'CourseInfo.Course';

        export function getLookup(): Q.Lookup<CourseRow> {
            return Q.getLookup<CourseRow>('CourseInfo.Course');
        }

        export declare const enum Fields {
            CourseNum = "CourseNum",
            CourseId = "CourseId",
            CourseCode = "CourseCode",
            CourseName = "CourseName"
        }
    }
}

