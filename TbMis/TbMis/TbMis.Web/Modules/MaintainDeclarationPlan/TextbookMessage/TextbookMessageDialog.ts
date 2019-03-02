
namespace TbMis.MaintainDeclarationPlan {

    @Serenity.Decorators.registerClass()
    export class TextbookMessageDialog extends Serenity.EntityDialog<TextbookMessageRow, any> {
        protected getFormKey() { return TextbookMessageForm.formKey; }
        protected getIdProperty() { return TextbookMessageRow.idProperty; }
        protected getLocalTextPrefix() { return TextbookMessageRow.localTextPrefix; }
        protected getNameProperty() { return TextbookMessageRow.nameProperty; }
        protected getService() { return TextbookMessageService.baseUrl; }

        protected form = new TextbookMessageForm(this.idPrefix);

    }
}