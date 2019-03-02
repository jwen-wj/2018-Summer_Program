namespace TbMis.IssuedDeclarationPlan {
    export namespace StudentDeclarationBooksellerService {
        export const baseUrl = 'IssuedDeclarationPlan/StudentDeclarationBookseller';

        export declare function Create(request: Serenity.SaveRequest<StudentDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<StudentDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "IssuedDeclarationPlan/StudentDeclarationBookseller/Create",
            Update = "IssuedDeclarationPlan/StudentDeclarationBookseller/Update",
            Delete = "IssuedDeclarationPlan/StudentDeclarationBookseller/Delete",
            Retrieve = "IssuedDeclarationPlan/StudentDeclarationBookseller/Retrieve",
            List = "IssuedDeclarationPlan/StudentDeclarationBookseller/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>StudentDeclarationBooksellerService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

