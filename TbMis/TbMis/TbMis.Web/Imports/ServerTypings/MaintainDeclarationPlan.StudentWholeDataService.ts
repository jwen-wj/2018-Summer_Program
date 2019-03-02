namespace TbMis.MaintainDeclarationPlan {
    export namespace StudentWholeDataService {
        export const baseUrl = 'MaintainDeclarationPlan/StudentWholeData';

        export declare function Create(request: Serenity.SaveRequest<StudentWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<StudentWholeDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentWholeDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "MaintainDeclarationPlan/StudentWholeData/Create",
            Update = "MaintainDeclarationPlan/StudentWholeData/Update",
            Delete = "MaintainDeclarationPlan/StudentWholeData/Delete",
            Retrieve = "MaintainDeclarationPlan/StudentWholeData/Retrieve",
            List = "MaintainDeclarationPlan/StudentWholeData/List"
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

