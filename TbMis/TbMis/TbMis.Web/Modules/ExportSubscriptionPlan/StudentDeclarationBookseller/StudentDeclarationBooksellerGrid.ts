
namespace TbMis.ExportSubscriptionPlan {

    @Serenity.Decorators.registerClass()
    export class StudentDeclarationBooksellerGrid extends Serenity.EntityGrid<StudentDeclarationBooksellerRow, any> {
        protected getColumnsKey() { return 'ExportSubscriptionPlan.StudentDeclarationBookseller'; }
        protected getDialogType() { return StudentDeclarationBooksellerDialog; }
        protected getIdProperty() { return StudentDeclarationBooksellerRow.idProperty; }
        protected getLocalTextPrefix() { return StudentDeclarationBooksellerRow.localTextPrefix; }
        protected getService() { return StudentDeclarationBooksellerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: StudentDeclarationBooksellerService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}