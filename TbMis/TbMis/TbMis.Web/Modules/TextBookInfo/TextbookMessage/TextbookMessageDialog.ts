
namespace TbMis.TextBookInfo {

    @Serenity.Decorators.registerClass()
    export class TextbookMessageDialog extends Serenity.EntityDialog<TextbookMessageRow, any> {
        protected getFormKey() { return TextbookMessageForm.formKey; }
        protected getIdProperty() { return TextbookMessageRow.idProperty; }
        protected getLocalTextPrefix() { return TextbookMessageRow.localTextPrefix; }
        protected getNameProperty() { return TextbookMessageRow.nameProperty; }
        protected getService() { return TextbookMessageService.baseUrl; }

        protected form = new TextbookMessageForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }

    }
}