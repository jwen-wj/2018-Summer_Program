namespace TbMis.MaintainDeclarationPlan {
    export interface TeacherWholeDataForm {
        TermCode: Serenity.StringEditor;
        TermName: Serenity.StringEditor;
        BatchId: Serenity.StringEditor;
        SchoolId: Serenity.StringEditor;
        SchoolName: Serenity.LookupEditor;
        DepartmentId: Serenity.StringEditor;
        DepartmentName: Serenity.LookupEditor;
        EducationalType: Serenity.StringEditor;
        TextbookNum2: Serenity.IntegerEditor;
        ApprovedAmount: Serenity.IntegerEditor;
        Priority: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
        CheckState: Serenity.StringEditor;
        DataSign: Serenity.StringEditor;
        CourseNum: Serenity.IntegerEditor;
    }

    export class TeacherWholeDataForm extends Serenity.PrefixedContext {
        static formKey = 'MaintainDeclarationPlan.TeacherWholeData';
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
                    'SchoolName', w1,
                    'DepartmentId', w0,
                    'DepartmentName', w1,
                    'EducationalType', w0,
                    'TextbookNum2', w2,
                    'ApprovedAmount', w2,
                    'Priority', w0,
                    'Phone', w0,
                    'Remarks', w0,
                    'CheckState', w0,
                    'DataSign', w0,
                    'CourseNum', w2
                ]);
            }
        }
    }
}

