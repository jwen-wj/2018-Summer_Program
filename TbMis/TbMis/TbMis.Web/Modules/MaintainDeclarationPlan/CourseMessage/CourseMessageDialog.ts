
namespace TbMis.MaintainDeclarationPlan {

    @Serenity.Decorators.registerClass()
    export class CourseMessageDialog extends Serenity.EntityDialog<CourseMessageRow, any> {
        protected getFormKey() { return CourseMessageForm.formKey; }
        protected getIdProperty() { return CourseMessageRow.idProperty; }
        protected getLocalTextPrefix() { return CourseMessageRow.localTextPrefix; }
        protected getNameProperty() { return CourseMessageRow.nameProperty; }
        protected getService() { return CourseMessageService.baseUrl; }

        protected form = new CourseMessageForm(this.idPrefix);

    }
}