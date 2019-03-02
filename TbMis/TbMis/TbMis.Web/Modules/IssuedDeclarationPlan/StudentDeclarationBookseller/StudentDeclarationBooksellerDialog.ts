
namespace TbMis.IssuedDeclarationPlan {

    @Serenity.Decorators.registerClass()
    export class StudentDeclarationBooksellerDialog extends Serenity.EntityDialog<StudentDeclarationBooksellerRow, any> {
        protected getFormKey() { return StudentDeclarationBooksellerForm.formKey; }
        protected getIdProperty() { return StudentDeclarationBooksellerRow.idProperty; }
        protected getLocalTextPrefix() { return StudentDeclarationBooksellerRow.localTextPrefix; }
        protected getNameProperty() { return StudentDeclarationBooksellerRow.nameProperty; }
        protected getService() { return StudentDeclarationBooksellerService.baseUrl; }

        protected form = new StudentDeclarationBooksellerForm(this.idPrefix);

    }
}