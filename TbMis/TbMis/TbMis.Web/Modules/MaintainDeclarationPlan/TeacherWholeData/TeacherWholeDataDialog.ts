
namespace TbMis.MaintainDeclarationPlan {

    @Serenity.Decorators.registerClass()
    export class TeacherWholeDataDialog extends Serenity.EntityDialog<TeacherWholeDataRow, any> {
        protected getFormKey() { return TeacherWholeDataForm.formKey; }
        protected getIdProperty() { return TeacherWholeDataRow.idProperty; }
        protected getLocalTextPrefix() { return TeacherWholeDataRow.localTextPrefix; }
        protected getNameProperty() { return TeacherWholeDataRow.nameProperty; }
        protected getService() { return TeacherWholeDataService.baseUrl; }

        protected form = new TeacherWholeDataForm(this.idPrefix);

    }
}