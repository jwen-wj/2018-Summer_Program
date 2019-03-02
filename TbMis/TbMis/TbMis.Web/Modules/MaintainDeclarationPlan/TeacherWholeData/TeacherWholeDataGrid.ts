
namespace TbMis.MaintainDeclarationPlan {

    @Serenity.Decorators.registerClass()
    export class TeacherWholeDataGrid extends Serenity.EntityGrid<TeacherWholeDataRow, any> {
        protected getColumnsKey() { return 'MaintainDeclarationPlan.TeacherWholeData'; }
        protected getDialogType() { return TeacherWholeDataDialog; }
        protected getIdProperty() { return TeacherWholeDataRow.idProperty; }
        protected getLocalTextPrefix() { return TeacherWholeDataRow.localTextPrefix; }
        protected getService() { return TeacherWholeDataService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons(); buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}