namespace TbMis.FeedbackSubscriptionPlan {
    export namespace StudentDeclarationBooksellerService {
        export const baseUrl = 'FeedbackSubscriptionPlan/StudentDeclarationBookseller';

        export declare function Create(request: Serenity.SaveRequest<StudentDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<StudentDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "FeedbackSubscriptionPlan/StudentDeclarationBookseller/Create",
            Update = "FeedbackSubscriptionPlan/StudentDeclarationBookseller/Update",
            Delete = "FeedbackSubscriptionPlan/StudentDeclarationBookseller/Delete",
            Retrieve = "FeedbackSubscriptionPlan/StudentDeclarationBookseller/Retrieve",
            List = "FeedbackSubscriptionPlan/StudentDeclarationBookseller/List"
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

