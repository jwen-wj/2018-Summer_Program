namespace TbMis.IssuedDeclarationPlan {
    export namespace StudentWholeDataService {
        export const baseUrl = 'IssuedDeclarationPlan/StudentWholeData';

        export declare function Create(request: Serenity.SaveRequest<StudentWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<StudentWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "IssuedDeclarationPlan/StudentWholeData/Create",
            Update = "IssuedDeclarationPlan/StudentWholeData/Update",
            Delete = "IssuedDeclarationPlan/StudentWholeData/Delete",
            Retrieve = "IssuedDeclarationPlan/StudentWholeData/Retrieve",
            List = "IssuedDeclarationPlan/StudentWholeData/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>StudentWholeDataService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

