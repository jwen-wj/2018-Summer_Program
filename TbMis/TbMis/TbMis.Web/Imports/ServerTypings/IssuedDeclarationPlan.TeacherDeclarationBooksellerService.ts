namespace TbMis.IssuedDeclarationPlan {
    export namespace TeacherDeclarationBooksellerService {
        export const baseUrl = 'IssuedDeclarationPlan/TeacherDeclarationBookseller';

        export declare function Create(request: Serenity.SaveRequest<TeacherDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TeacherDeclarationBooksellerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TeacherDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TeacherDeclarationBooksellerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "IssuedDeclarationPlan/TeacherDeclarationBookseller/Create",
            Update = "IssuedDeclarationPlan/TeacherDeclarationBookseller/Update",
            Delete = "IssuedDeclarationPlan/TeacherDeclarationBookseller/Delete",
            Retrieve = "IssuedDeclarationPlan/TeacherDeclarationBookseller/Retrieve",
            List = "IssuedDeclarationPlan/TeacherDeclarationBookseller/List"
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

