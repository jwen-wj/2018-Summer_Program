namespace TbMis.MaintainDeclarationPlan {
    export namespace CourseMessageService {
        export const baseUrl = 'MaintainDeclarationPlan/CourseMessage';

        export declare function Create(request: Serenity.SaveRequest<CourseMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CourseMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CourseMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CourseMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "MaintainDeclarationPlan/CourseMessage/Create",
            Update = "MaintainDeclarationPlan/CourseMessage/Update",
            Delete = "MaintainDeclarationPlan/CourseMessage/Delete",
            Retrieve = "MaintainDeclarationPlan/CourseMessage/Retrieve",
            List = "MaintainDeclarationPlan/CourseMessage/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CourseMessageService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

