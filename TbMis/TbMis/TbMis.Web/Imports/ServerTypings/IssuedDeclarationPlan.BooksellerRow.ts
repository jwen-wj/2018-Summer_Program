namespace TbMis.IssuedDeclarationPlan {
    export interface BooksellerRow {
        BooksellerId?: string;
        BooksellerNum?: number;
        BooksellerName?: string;
        Contact?: string;
        Telephone?: string;
    }

    export namespace BooksellerRow {
        export const idProperty = 'BooksellerNum';
        export const nameProperty = 'BooksellerId';
        export const localTextPrefix = 'IssuedDeclarationPlan.Bookseller';

        export declare const enum Fields {
            BooksellerId = "BooksellerId",
            BooksellerNum = "BooksellerNum",
            BooksellerName = "BooksellerName",
            Contact = "Contact",
            Telephone = "Telephone"
        }
    }
}

