namespace TbMis.ExportSubscriptionPlan {
    export namespace TeacherDeclarationBooksellerService {
        export const baseUrl = 'ExportSubscriptionPlan/TeacherDeclarationBookseller';

        export declare function Create(request: Serenity.SaveRequest<TeacherDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TeacherDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TeacherDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TeacherDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ExportSubscriptionPlan/TeacherDeclarationBookseller/Create",
            Update = "ExportSubscriptionPlan/TeacherDeclarationBookseller/Update",
            Delete = "ExportSubscriptionPlan/TeacherDeclarationBookseller/Delete",
            Retrieve = "ExportSubscriptionPlan/TeacherDeclarationBookseller/Retrieve",
            List = "ExportSubscriptionPlan/TeacherDeclarationBookseller/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TeacherDeclarationBooksellerService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

