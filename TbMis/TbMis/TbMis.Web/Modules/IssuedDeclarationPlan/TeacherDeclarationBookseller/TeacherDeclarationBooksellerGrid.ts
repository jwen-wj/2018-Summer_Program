
namespace TbMis.IssuedDeclarationPlan {

    @Serenity.Decorators.registerClass()
    export class TeacherDeclarationBooksellerGrid extends Serenity.EntityGrid<TeacherDeclarationBooksellerRow, any> {
        protected getColumnsKey() { return 'IssuedDeclarationPlan.TeacherDeclarationBookseller'; }
        protected getDialogType() { return TeacherDeclarationBooksellerDialog; }
        protected getIdProperty() { return TeacherDeclarationBooksellerRow.idProperty; }
        protected getLocalTextPrefix() { return TeacherDeclarationBooksellerRow.localTextPrefix; }
        protected getService() { return TeacherDeclarationBooksellerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}