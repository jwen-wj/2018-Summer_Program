
namespace TbMis.MaintainDeclarationPlan {

    @Serenity.Decorators.registerClass()
    export class StudentWholeDataDialog extends Serenity.EntityDialog<StudentWholeDataRow, any> {
        protected getFormKey() { return StudentWholeDataForm.formKey; }
        protected getIdProperty() { return StudentWholeDataRow.idProperty; }
        protected getLocalTextPrefix() { return StudentWholeDataRow.localTextPrefix; }
        protected getNameProperty() { return StudentWholeDataRow.nameProperty; }
        protected getService() { return StudentWholeDataService.baseUrl; }

        protected form = new StudentWholeDataForm(this.idPrefix);

    }
}