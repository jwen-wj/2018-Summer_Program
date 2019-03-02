
namespace TbMis.IssuedDeclarationPlan {

    @Serenity.Decorators.registerClass()
    export class StudentDeclarationBooksellerGrid extends Serenity.EntityGrid<StudentDeclarationBooksellerRow, any> {
        protected getColumnsKey() { return 'IssuedDeclarationPlan.StudentDeclarationBookseller'; }
        protected getDialogType() { return StudentDeclarationBooksellerDialog; }
        protected getIdProperty() { return StudentDeclarationBooksellerRow.idProperty; }
        protected getLocalTextPrefix() { return StudentDeclarationBooksellerRow.localTextPrefix; }
        protected getService() { return StudentDeclarationBooksellerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}