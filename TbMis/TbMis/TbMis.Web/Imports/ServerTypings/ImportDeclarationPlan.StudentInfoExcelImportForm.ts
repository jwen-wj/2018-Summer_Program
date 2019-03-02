namespace TbMis.ImportDeclarationPlan {
    export interface StudentInfoExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class StudentInfoExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'ImportDeclarationPlan.StudentInfoExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StudentInfoExcelImportForm.init)  {
                StudentInfoExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(StudentInfoExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

