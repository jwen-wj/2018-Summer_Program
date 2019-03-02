namespace TbMis.ImportDeclarationPlan {
    export interface TeacherInfoExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class TeacherInfoExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'ImportDeclarationPlan.TeacherInfoExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TeacherInfoExcelImportForm.init)  {
                TeacherInfoExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(TeacherInfoExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

