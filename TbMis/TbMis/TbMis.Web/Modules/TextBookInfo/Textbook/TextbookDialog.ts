
namespace TbMis.TextBookInfo {

    @Serenity.Decorators.registerClass()
    export class TextbookDialog extends Serenity.EntityDialog<TextbookRow, any> {
        protected getFormKey() { return TextbookForm.formKey; }
        protected getIdProperty() { return TextbookRow.idProperty; }
        protected getLocalTextPrefix() { return TextbookRow.localTextPrefix; }
        protected getNameProperty() { return TextbookRow.nameProperty; }
        protected getService() { return TextbookService.baseUrl; }

        protected form = new TextbookForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            return buttons;
        }

        protected updateInterface(): void {

            super.updateInterface();

            Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);

            // remove required asterisk (*)
            this.element.find('sup').hide();
            this.deleteButton.hide();
        }

        protected getEntityTitle(): string {

            if (!this.isEditMode()) {
                return "教材信息";
            }
            else {

                var entityType = super.getEntitySingular();

                // get name field value of record this dialog edits
                let name = this.getEntityNameFieldValue() || "";

                return 'View ' + entityType + " (" + name + ")";
            }
        }

        protected updateTitle(): void {
            super.updateTitle();
        }
    }
}