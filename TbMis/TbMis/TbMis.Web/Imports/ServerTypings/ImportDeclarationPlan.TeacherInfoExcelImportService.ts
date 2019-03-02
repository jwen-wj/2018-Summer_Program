namespace TbMis.ImportDeclarationPlan {
    export namespace TeacherInfoExcelImportService {
        export const baseUrl = 'ImportDeclarationPlan/TeacherInfoExcelImport';

        export declare function TeacherExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            TeacherExcelImport = "ImportDeclarationPlan/TeacherInfoExcelImport/TeacherExcelImport"
        }

        [
            'TeacherExcelImport'
        ].forEach(x => {
            (<any>TeacherInfoExcelImportService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

