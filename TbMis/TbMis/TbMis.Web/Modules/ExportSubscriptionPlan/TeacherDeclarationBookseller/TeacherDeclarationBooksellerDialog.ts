
namespace TbMis.ExportSubscriptionPlan {

    @Serenity.Decorators.registerClass()
    export class TeacherDeclarationBooksellerDialog extends Serenity.EntityDialog<TeacherDeclarationBooksellerRow, any> {
        protected getFormKey() { return TeacherDeclarationBooksellerForm.formKey; }
        protected getIdProperty() { return TeacherDeclarationBooksellerRow.idProperty; }
        protected getLocalTextPrefix() { return TeacherDeclarationBooksellerRow.localTextPrefix; }
        protected getNameProperty() { return TeacherDeclarationBooksellerRow.nameProperty; }
        protected getService() { return TeacherDeclarationBooksellerService.baseUrl; }

        protected form = new TeacherDeclarationBooksellerForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            return buttons;
        }
        protected updateInterface(): void {

            super.updateInterface();

            Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);

            this.element.find('sup').hide();

            this.deleteButton.hide();
        }

        protected getEntityTitle(): string {

            if (!this.isEditMode()) {
                return "How did you manage to open this dialog in new record mode?";
            }
            else {
                var entityType = super.getEntitySingular();

                let name = this.getEntityNameFieldValue() || "";

                return 'View ' + entityType + " (" + name + ")";
            }
        }

        protected updateTitle(): void {
            super.updateTitle();
        }
    }
}