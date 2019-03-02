namespace TbMis.MaintainDeclarationPlan {
    export interface TextbookMessageForm {
        TextbookId: Serenity.StringEditor;
        TextbookNum: Serenity.StringEditor;
        Isbn: Serenity.StringEditor;
        TextbookName: Serenity.StringEditor;
        Press: Serenity.StringEditor;
        Author: Serenity.StringEditor;
        Edition: Serenity.StringEditor;
        PrintingCount: Serenity.StringEditor;
        Price: Serenity.StringEditor;
        TextbookType: Serenity.StringEditor;
        Translator: Serenity.StringEditor;
        Language: Serenity.StringEditor;
        Page: Serenity.IntegerEditor;
        Summary: Serenity.StringEditor;
        Catalog: Serenity.StringEditor;
        IsSelfCompile: Serenity.StringEditor;
    }

    export class TextbookMessageForm extends Serenity.PrefixedContext {
        static formKey = 'MaintainDeclarationPlan.TextbookMessage';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TextbookMessageForm.init)  {
                TextbookMessageForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(TextbookMessageForm, [
                    'TextbookId', w0,
                    'TextbookNum', w0,
                    'Isbn', w0,
                    'TextbookName', w0,
                    'Press', w0,
                    'Author', w0,
                    'Edition', w0,
                    'PrintingCount', w0,
                    'Price', w0,
                    'TextbookType', w0,
                    'Translator', w0,
                    'Language', w0,
                    'Page', w1,
                    'Summary', w0,
                    'Catalog', w0,
                    'IsSelfCompile', w0
                ]);
            }
        }
    }
}

