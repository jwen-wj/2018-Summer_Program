
namespace TbMis.ImportDeclarationPlan {

    @Serenity.Decorators.registerClass()
    export class TeacherWholeDataGrid extends Serenity.EntityGrid<TeacherWholeDataRow, any> {
        protected getColumnsKey() { return 'ImportDeclarationPlan.TeacherWholeData'; }
        protected getDialogType() { return TeacherWholeDataDialog; }
        protected getIdProperty() { return TeacherWholeDataRow.idProperty; }
        protected getLocalTextPrefix() { return TeacherWholeDataRow.localTextPrefix; }
        protected getService() { return TeacherWholeDataService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        /**
        * get a button of ExcelImport.
        */
        protected getButtons(): Serenity.ToolButton[] {

            // call base method to get list of buttons
            var buttons = super.getButtons();

            // add our import button
            buttons.push({
                title: '导入',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new TeacherInfoExcelImportDialog();
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                }
            });
            return buttons;
        }

        /**
         * get a column of delete buttons
         */
        protected getColumns() {
            var column = super.getColumns();

            column.unshift({
                field: 'Delete Row',
                name: '',
                format: ctx => '<a class="inline-action delete-row" title="delete">' +
                    '<i class="fa fa-trash-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return column;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('delete-row')) {
                    Q.confirm('Delete record?', () => {
                        ImportDeclarationPlan.TeacherWholeDataService.Delete({
                            EntityId: item.DeclarationId,
                        }, response => {
                            this.refresh();
                        });
                    });
                }
            }
        }
    }
}