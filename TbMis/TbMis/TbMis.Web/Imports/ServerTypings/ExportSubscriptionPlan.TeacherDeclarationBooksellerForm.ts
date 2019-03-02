namespace TbMis.ExportSubscriptionPlan {
    export interface TeacherDeclarationBooksellerForm {
        DeclarationId: Serenity.IntegerEditor;
        DeclarationBatchId: Serenity.StringEditor;
        DeclarationTermName: Serenity.StringEditor;
        DeclarationSchoolName: Serenity.StringEditor;
        DeclarationDepartmentName: Serenity.StringEditor;
        CourseCode: Serenity.StringEditor;
        CourseName: Serenity.StringEditor;
        DeclarationPhone: Serenity.StringEditor;
        DeclarationCheckState: Serenity.StringEditor;
        DeclarationPriority: Serenity.StringEditor;
        DeclarationDataSign: Serenity.StringEditor;
        DeclarationApprovedAmount: Serenity.IntegerEditor;
        DeclarationRemarks: Serenity.StringEditor;
        BooksellerId: Serenity.StringEditor;
        BooksellerBooksellerName: Serenity.StringEditor;
        SubscriptionStatus: Serenity.StringEditor;
        FeedbackDate: Serenity.DateEditor;
        FeedbackStaff: Serenity.StringEditor;
        Remark: Serenity.StringEditor;
        ReDeclareStatus: Serenity.StringEditor;
        DeclarationEducationalType: Serenity.StringEditor;
    }

    export class TeacherDeclarationBooksellerForm extends Serenity.PrefixedContext {
        static formKey = 'ExportSubscriptionPlan.TeacherDeclarationBookseller';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TeacherDeclarationBooksellerForm.init)  {
                TeacherDeclarationBooksellerForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TeacherDeclarationBooksellerForm, [
                    'DeclarationId', w0,
                    'DeclarationBatchId', w1,
                    'DeclarationTermName', w1,
                    'DeclarationSchoolName', w1,
                    'DeclarationDepartmentName', w1,
                    'CourseCode', w1,
                    'CourseName', w1,
                    'DeclarationPhone', w1,
                    'DeclarationCheckState', w1,
                    'DeclarationPriority', w1,
                    'DeclarationDataSign', w1,
                    'DeclarationApprovedAmount', w0,
                    'DeclarationRemarks', w1,
                    'BooksellerId', w1,
                    'BooksellerBooksellerName', w1,
                    'SubscriptionStatus', w1,
                    'FeedbackDate', w2,
                    'FeedbackStaff', w1,
                    'Remark', w1,
                    'ReDeclareStatus', w1,
                    'DeclarationEducationalType', w1
                ]);
            }
        }
    }
}

