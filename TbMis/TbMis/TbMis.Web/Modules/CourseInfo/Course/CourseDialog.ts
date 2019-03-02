
namespace TbMis.CourseInfo {

    @Serenity.Decorators.registerClass()
    export class CourseDialog extends Serenity.EntityDialog<CourseRow, any> {
        protected getFormKey() { return CourseForm.formKey; }
        protected getIdProperty() { return CourseRow.idProperty; }
        protected getLocalTextPrefix() { return CourseRow.localTextPrefix; }
        protected getNameProperty() { return CourseRow.nameProperty; }
        protected getService() { return CourseService.baseUrl; }

        protected form = new CourseForm(this.idPrefix);

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
                return "课程信息";
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