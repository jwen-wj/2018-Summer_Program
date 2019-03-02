
namespace TbMis.ExportSubscriptionPlan {

    @Serenity.Decorators.registerClass()
    export class TeacherWholeDataGrid extends Serenity.EntityGrid<TeacherWholeDataRow, any> {
        protected getColumnsKey() { return 'ExportSubscriptionPlan.TeacherWholeData'; }
        protected getDialogType() { return TeacherWholeDataDialog; }
        protected getIdProperty() { return TeacherWholeDataRow.idProperty; }
        protected getLocalTextPrefix() { return TeacherWholeDataRow.localTextPrefix; }
        protected getService() { return TeacherWholeDataService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: TeacherWholeDataService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}