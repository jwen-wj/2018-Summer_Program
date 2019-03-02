
namespace TbMis.IssuedDeclarationPlan {

    @Serenity.Decorators.registerClass()
    export class TeacherWholeDataGrid extends Serenity.EntityGrid<TeacherWholeDataRow, any> {
        protected getColumnsKey() { return 'IssuedDeclarationPlan.TeacherWholeData'; }
        protected getDialogType() { return TeacherWholeDataDialog; }
        protected getIdProperty() { return TeacherWholeDataRow.idProperty; }
        protected getLocalTextPrefix() { return TeacherWholeDataRow.localTextPrefix; }
        protected getService() { return TeacherWholeDataService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}