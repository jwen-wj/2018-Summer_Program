
namespace TbMis.FeedbackSubscriptionPlan {

    @Serenity.Decorators.registerClass()
    export class TeacherDeclarationBooksellerDialog extends Serenity.EntityDialog<TeacherDeclarationBooksellerRow, any> {
        protected getFormKey() { return TeacherDeclarationBooksellerForm.formKey; }
        protected getIdProperty() { return TeacherDeclarationBooksellerRow.idProperty; }
        protected getLocalTextPrefix() { return TeacherDeclarationBooksellerRow.localTextPrefix; }
        protected getNameProperty() { return TeacherDeclarationBooksellerRow.nameProperty; }
        protected getService() { return TeacherDeclarationBooksellerService.baseUrl; }

        protected form = new TeacherDeclarationBooksellerForm(this.idPrefix);

        

    }
}