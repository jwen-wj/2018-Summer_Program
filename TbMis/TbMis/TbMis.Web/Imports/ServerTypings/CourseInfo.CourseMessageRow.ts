namespace TbMis.CourseInfo {
    export interface CourseMessageRow {
        CourseNum?: number;
        CourseId?: string;
        CourseCode?: string;
        CourseName?: string;
    }

    export namespace CourseMessageRow {
        export const idProperty = 'CourseNum';
        export const nameProperty = 'CourseName';
        export const localTextPrefix = 'CourseInfo.CourseMessage';
        export const lookupKey = 'CourseInfo.CourseMessage';

        export function getLookup(): Q.Lookup<CourseMessageRow> {
            return Q.getLookup<CourseMessageRow>('CourseInfo.CourseMessage');
        }

        export declare const enum Fields {
            CourseNum = "CourseNum",
            CourseId = "CourseId",
            CourseCode = "CourseCode",
            CourseName = "CourseName"
        }
    }
}

