namespace TbMis.CourseInfo {
    export interface CourseMessageForm {
        CourseId: Serenity.StringEditor;
        CourseCode: Serenity.StringEditor;
        CourseName: Serenity.StringEditor;
    }

    export class CourseMessageForm extends Serenity.PrefixedContext {
        static formKey = 'CourseInfo.CourseMessage';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CourseMessageForm.init)  {
                CourseMessageForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CourseMessageForm, [
                    'CourseId', w0,
                    'CourseCode', w0,
                    'CourseName', w0
                ]);
            }
        }
    }
}

