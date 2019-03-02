namespace TbMis.MaintainDeclarationPlan {
    export interface TextbookMessageRow {
        TextbookId?: string;
        TextbookNum2?: number;
        TextbookNum?: string;
        Isbn?: string;
        TextbookName?: string;
        Press?: string;
        Author?: string;
        Edition?: string;
        PrintingCount?: string;
        Price?: string;
        TextbookType?: string;
        Translator?: string;
        Language?: string;
        Page?: number;
        Summary?: string;
        Catalog?: string;
        IsSelfCompile?: string;
    }

    export namespace TextbookMessageRow {
        export const idProperty = 'TextbookNum2';
        export const nameProperty = 'TextbookId';
        export const localTextPrefix = 'MaintainDeclarationPlan.TextbookMessage';

        export declare const enum Fields {
            TextbookId = "TextbookId",
            TextbookNum2 = "TextbookNum2",
            TextbookNum = "TextbookNum",
            Isbn = "Isbn",
            TextbookName = "TextbookName",
            Press = "Press",
            Author = "Author",
            Edition = "Edition",
            PrintingCount = "PrintingCount",
            Price = "Price",
            TextbookType = "TextbookType",
            Translator = "Translator",
            Language = "Language",
            Page = "Page",
            Summary = "Summary",
            Catalog = "Catalog",
            IsSelfCompile = "IsSelfCompile"
        }
    }
}

