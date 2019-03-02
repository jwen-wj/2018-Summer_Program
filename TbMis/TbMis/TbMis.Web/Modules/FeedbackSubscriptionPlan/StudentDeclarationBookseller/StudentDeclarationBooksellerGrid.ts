
namespace TbMis.FeedbackSubscriptionPlan {

    @Serenity.Decorators.registerClass()
    export class StudentDeclarationBooksellerGrid extends Serenity.EntityGrid<StudentDeclarationBooksellerRow, any> {
        protected getColumnsKey() { return 'FeedbackSubscriptionPlan.StudentDeclarationBookseller'; }
        protected getDialogType() { return StudentDeclarationBooksellerDialog; }
        protected getIdProperty() { return StudentDeclarationBooksellerRow.idProperty; }
        protected getLocalTextPrefix() { return StudentDeclarationBooksellerRow.localTextPrefix; }
        protected getService() { return StudentDeclarationBooksellerService.baseUrl; }
        protected getButtons() {
            var buttons = super.getButtons(); buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
        constructor(container: JQuery) {
            super(container);
        }
    }
}