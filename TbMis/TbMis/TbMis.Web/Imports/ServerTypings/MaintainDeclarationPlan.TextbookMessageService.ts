namespace TbMis.MaintainDeclarationPlan {
    export namespace TextbookMessageService {
        export const baseUrl = 'MaintainDeclarationPlan/TextbookMessage';

        export declare function Create(request: Serenity.SaveRequest<TextbookMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TextbookMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TextbookMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TextbookMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "MaintainDeclarationPlan/TextbookMessage/Create",
            Update = "MaintainDeclarationPlan/TextbookMessage/Update",
            Delete = "MaintainDeclarationPlan/TextbookMessage/Delete",
            Retrieve = "MaintainDeclarationPlan/TextbookMessage/Retrieve",
            List = "MaintainDeclarationPlan/TextbookMessage/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TextbookMessageService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

