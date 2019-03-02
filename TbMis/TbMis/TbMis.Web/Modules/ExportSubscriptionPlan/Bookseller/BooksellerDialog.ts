
namespace TbMis.ExportSubscriptionPlan {

    @Serenity.Decorators.registerClass()
    export class BooksellerDialog extends Serenity.EntityDialog<BooksellerRow, any> {
        protected getFormKey() { return BooksellerForm.formKey; }
        protected getIdProperty() { return BooksellerRow.idProperty; }
        protected getLocalTextPrefix() { return BooksellerRow.localTextPrefix; }
        protected getNameProperty() { return BooksellerRow.nameProperty; }
        protected getService() { return BooksellerService.baseUrl; }

        protected form = new BooksellerForm(this.idPrefix);

    }
}