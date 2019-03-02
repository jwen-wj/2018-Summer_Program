namespace TbMis.CourseInfo {
    export interface CourseForm {
        CourseId: Serenity.StringEditor;
        CourseCode: Serenity.StringEditor;
        CourseName: Serenity.StringEditor;
    }

    export class CourseForm extends Serenity.PrefixedContext {
        static formKey = 'CourseInfo.Course';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CourseForm.init)  {
                CourseForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CourseForm, [
                    'CourseId', w0,
                    'CourseCode', w0,
                    'CourseName', w0
                ]);
            }
        }
    }
}

