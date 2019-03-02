namespace TbMis.ImportDeclarationPlan {
    export interface StudentWholeDataForm {
        TermCode: Serenity.StringEditor;
        TermName: Serenity.StringEditor;
        BatchId: Serenity.StringEditor;
        SchoolId: Serenity.StringEditor;
        SchoolName: Serenity.StringEditor;
        DepartmentId: Serenity.StringEditor;
        DepartmentName: Serenity.StringEditor;
        TextbookNum2: Serenity.LookupEditor;
        CourseNum: Serenity.LookupEditor;
        EducationalType: Serenity.StringEditor;
        ApprovedAmount: Serenity.IntegerEditor;
        Priority: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        CheckState: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
        ClassName: Serenity.StringEditor;
        ClassSize: Serenity.StringEditor;
        DataSign: Serenity.StringEditor;
    }

    export class StudentWholeDataForm extends Serenity.PrefixedContext {
        static formKey = 'ImportDeclarationPlan.StudentWholeData';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StudentWholeDataForm.init)  {
                StudentWholeDataForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(StudentWholeDataForm, [
                    'TermCode', w0,
                    'TermName', w0,
                    'BatchId', w0,
                    'SchoolId', w0,
                    'SchoolName', w0,
                    'DepartmentId', w0,
                    'DepartmentName', w0,
                    'TextbookNum2', w1,
                    'CourseNum', w1,
                    'EducationalType', w0,
                    'ApprovedAmount', w2,
                    'Priority', w0,
                    'Phone', w0,
                    'CheckState', w0,
                    'Remarks', w0,
                    'ClassName', w0,
                    'ClassSize', w0,
                    'DataSign', w0
                ]);
            }
        }
    }
}

