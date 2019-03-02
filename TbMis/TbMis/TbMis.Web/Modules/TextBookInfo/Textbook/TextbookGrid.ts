
namespace TbMis.TextBookInfo {

    @Serenity.Decorators.registerClass()
    export class TextbookGrid extends Serenity.EntityGrid<TextbookRow, any> {
        protected getColumnsKey() { return 'TextBookInfo.Textbook'; }
        protected getDialogType() { return TextbookDialog; }
        protected getIdProperty() { return TextbookRow.idProperty; }
        protected getLocalTextPrefix() { return TextbookRow.localTextPrefix; }
        protected getService() { return TextbookService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}