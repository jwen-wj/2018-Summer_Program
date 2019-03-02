namespace TbMis.IssuedDeclarationPlan {
    export namespace BooksellerService {
        export const baseUrl = 'IssuedDeclarationPlan/Bookseller';

        export declare function Create(request: Serenity.SaveRequest<BooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<BooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "IssuedDeclarationPlan/Bookseller/Create",
            Update = "IssuedDeclarationPlan/Bookseller/Update",
            Delete = "IssuedDeclarationPlan/Bookseller/Delete",
            Retrieve = "IssuedDeclarationPlan/Bookseller/Retrieve",
            List = "IssuedDeclarationPlan/Bookseller/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>BooksellerService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

