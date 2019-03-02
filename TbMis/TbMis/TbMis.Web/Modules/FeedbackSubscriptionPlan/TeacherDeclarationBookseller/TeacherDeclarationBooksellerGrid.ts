
namespace TbMis.FeedbackSubscriptionPlan {

    @Serenity.Decorators.registerClass()
    export class TeacherDeclarationBooksellerGrid extends Serenity.EntityGrid<TeacherDeclarationBooksellerRow, any> {
        protected getColumnsKey() { return 'FeedbackSubscriptionPlan.TeacherDeclarationBookseller'; }
        protected getDialogType() { return TeacherDeclarationBooksellerDialog; }
        protected getIdProperty() { return TeacherDeclarationBooksellerRow.idProperty; }
        protected getLocalTextPrefix() { return TeacherDeclarationBooksellerRow.localTextPrefix; }
        protected getService() { return TeacherDeclarationBooksellerService.baseUrl; }
        //Add these 
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }

        constructor(container: JQuery) {
            super(container);
        }
    }
}