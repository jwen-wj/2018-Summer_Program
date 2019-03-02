
namespace TbMis.TextBookInfo {

    @Serenity.Decorators.registerClass()
    export class TextbookMessageGrid extends Serenity.EntityGrid<TextbookMessageRow, any> {
        protected getColumnsKey() { return 'TextBookInfo.TextbookMessage'; }
        protected getDialogType() { return TextbookMessageDialog; }
        protected getIdProperty() { return TextbookMessageRow.idProperty; }
        protected getLocalTextPrefix() { return TextbookMessageRow.localTextPrefix; }
        protected getService() { return TextbookMessageService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}