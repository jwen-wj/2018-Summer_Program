namespace TbMis.IssuedDeclarationPlan {
    export namespace TeacherWholeDataService {
        export const baseUrl = 'IssuedDeclarationPlan/TeacherWholeData';

        export declare function Create(request: Serenity.SaveRequest<TeacherWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TeacherWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TeacherWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TeacherWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "IssuedDeclarationPlan/TeacherWholeData/Create",
            Update = "IssuedDeclarationPlan/TeacherWholeData/Update",
            Delete = "IssuedDeclarationPlan/TeacherWholeData/Delete",
            Retrieve = "IssuedDeclarationPlan/TeacherWholeData/Retrieve",
            List = "IssuedDeclarationPlan/TeacherWholeData/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TeacherWholeDataService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

