namespace TbMis.FeedbackSubscriptionPlan {
    export interface TeacherDeclarationBooksellerForm {
        DeclarationId: Serenity.IntegerEditor;
        DeclarationSchoolName: Serenity.StringEditor;
        DeclarationTermName: Serenity.StringEditor;
        BooksellerId: Serenity.StringEditor;
        BooksellerBooksellerName: Serenity.StringEditor;
        SubscriptionStatus: Serenity.StringEditor;
        FeedbackDate: Serenity.DateEditor;
        FeedbackStaff: Serenity.StringEditor;
        Remark: Serenity.StringEditor;
        ReDeclareStatus: Serenity.StringEditor;
    }

    export class TeacherDeclarationBooksellerForm extends Serenity.PrefixedContext {
        static formKey = 'FeedbackSubscriptionPlan.TeacherDeclarationBookseller';
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
                    'DeclarationSchoolName', w1,
                    'DeclarationTermName', w1,
                    'BooksellerId', w1,
                    'BooksellerBooksellerName', w1,
                    'SubscriptionStatus', w1,
                    'FeedbackDate', w2,
                    'FeedbackStaff', w1,
                    'Remark', w1,
                    'ReDeclareStatus', w1
                ]);
            }
        }
    }
}

