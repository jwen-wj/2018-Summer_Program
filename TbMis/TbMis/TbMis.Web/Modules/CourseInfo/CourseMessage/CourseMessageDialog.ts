
namespace TbMis.CourseInfo {

    @Serenity.Decorators.registerClass()
    export class CourseMessageDialog extends Serenity.EntityDialog<CourseMessageRow, any> {
        protected getFormKey() { return CourseMessageForm.formKey; }
        protected getIdProperty() { return CourseMessageRow.idProperty; }
        protected getLocalTextPrefix() { return CourseMessageRow.localTextPrefix; }
        protected getNameProperty() { return CourseMessageRow.nameProperty; }
        protected getService() { return CourseMessageService.baseUrl; }

        protected form = new CourseMessageForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
            return buttons;
        }
    }
}