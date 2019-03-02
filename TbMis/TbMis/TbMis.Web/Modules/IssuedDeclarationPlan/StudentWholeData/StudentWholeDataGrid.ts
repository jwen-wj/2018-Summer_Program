
namespace TbMis.IssuedDeclarationPlan {

    @Serenity.Decorators.registerClass()
    export class StudentWholeDataGrid extends Serenity.EntityGrid<StudentWholeDataRow, any> {
        protected getColumnsKey() { return 'IssuedDeclarationPlan.StudentWholeData'; }
        protected getDialogType() { return StudentWholeDataDialog; }
        protected getIdProperty() { return StudentWholeDataRow.idProperty; }
        protected getLocalTextPrefix() { return StudentWholeDataRow.localTextPrefix; }
        protected getService() { return StudentWholeDataService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}