namespace TbMis.ImportDeclarationPlan {
    export interface TeacherWholeDataForm {
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

    export class TeacherWholeDataForm extends Serenity.PrefixedContext {
        static formKey = 'ImportDeclarationPlan.TeacherWholeData';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TeacherWholeDataForm.init)  {
                TeacherWholeDataForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(TeacherWholeDataForm, [
                    'TermCode', w0,
                    'TermName', w0,
                    'BatchId', w0,
                    'SchoolId', w0,
                    'SchoolName', w0,
                    'DepartmentId', w0,
                    'DepartmentName', w0,
                    'CourseNum', w1,
                    'TextbookNum2', w1,
                    'EducationalType', w0,
                    'ApprovedAmount', w2,
                    'Priority', w0,
                    'Phone', w0,
                    'Remarks', w0,
                    'CheckState', w0,
                    'DataSign', w0
                ]);
            }
        }
    }
}

