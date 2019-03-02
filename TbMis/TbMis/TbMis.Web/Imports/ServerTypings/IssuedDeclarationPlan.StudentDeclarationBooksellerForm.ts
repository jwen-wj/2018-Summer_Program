namespace TbMis.IssuedDeclarationPlan {
    export interface StudentDeclarationBooksellerForm {
        SchoolName: Serenity.LookupEditor;
        DeclarationId: Serenity.LookupEditor;
        BooksellerName: Serenity.LookupEditor;
        BooksellerId: Serenity.LookupEditor;
        SubscriptionStatus: Serenity.StringEditor;
        FeedbackDate: Serenity.DateEditor;
        FeedbackStaff: Serenity.StringEditor;
        Remark: Serenity.StringEditor;
        ReDeclareStatus: Serenity.StringEditor;
    }

    export class StudentDeclarationBooksellerForm extends Serenity.PrefixedContext {
        static formKey = 'IssuedDeclarationPlan.StudentDeclarationBookseller';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StudentDeclarationBooksellerForm.init)  {
                StudentDeclarationBooksellerForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(StudentDeclarationBooksellerForm, [
                    'SchoolName', w0,
                    'DeclarationId', w0,
                    'BooksellerName', w0,
                    'BooksellerId', w0,
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

