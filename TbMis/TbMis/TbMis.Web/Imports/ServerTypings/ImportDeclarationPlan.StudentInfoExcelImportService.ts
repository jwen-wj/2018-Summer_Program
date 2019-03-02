namespace TbMis.ImportDeclarationPlan {
    export namespace StudentInfoExcelImportService {
        export const baseUrl = 'ImportDeclarationPlan/StudentInfoExcelImport';

        export declare function StudentExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            StudentExcelImport = "ImportDeclarationPlan/StudentInfoExcelImport/StudentExcelImport"
        }

        [
            'StudentExcelImport'
        ].forEach(x => {
            (<any>StudentInfoExcelImportService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

