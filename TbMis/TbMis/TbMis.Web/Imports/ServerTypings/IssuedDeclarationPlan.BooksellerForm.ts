namespace TbMis.IssuedDeclarationPlan {
    export interface BooksellerForm {
        BooksellerId: Serenity.StringEditor;
        BooksellerName: Serenity.StringEditor;
        Contact: Serenity.StringEditor;
        Telephone: Serenity.StringEditor;
    }

    export class BooksellerForm extends Serenity.PrefixedContext {
        static formKey = 'IssuedDeclarationPlan.Bookseller';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BooksellerForm.init)  {
                BooksellerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(BooksellerForm, [
                    'BooksellerId', w0,
                    'BooksellerName', w0,
                    'Contact', w0,
                    'Telephone', w0
                ]);
            }
        }
    }
}

