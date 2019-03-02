
namespace TbMis.ExportSubscriptionPlan {

    @Serenity.Decorators.registerClass()
    export class TeacherDeclarationBooksellerGrid extends Serenity.EntityGrid<TeacherDeclarationBooksellerRow, any> {
        protected getColumnsKey() { return 'ExportSubscriptionPlan.TeacherDeclarationBookseller'; }
        protected getDialogType() { return TeacherDeclarationBooksellerDialog; }
        protected getIdProperty() { return TeacherDeclarationBooksellerRow.idProperty; }
        protected getLocalTextPrefix() { return TeacherDeclarationBooksellerRow.localTextPrefix; }
        protected getService() { return TeacherDeclarationBooksellerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: TeacherDeclarationBooksellerService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}