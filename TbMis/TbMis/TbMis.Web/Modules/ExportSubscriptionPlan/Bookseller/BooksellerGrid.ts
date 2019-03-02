
namespace TbMis.ExportSubscriptionPlan {

    @Serenity.Decorators.registerClass()
    export class BooksellerGrid extends Serenity.EntityGrid<BooksellerRow, any> {
        protected getColumnsKey() { return 'ExportSubscriptionPlan.Bookseller'; }
        protected getDialogType() { return BooksellerDialog; }
        protected getIdProperty() { return BooksellerRow.idProperty; }
        protected getLocalTextPrefix() { return BooksellerRow.localTextPrefix; }
        protected getService() { return BooksellerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}