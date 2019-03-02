
namespace TbMis.ImportDeclarationPlan {

    @Serenity.Decorators.registerClass()
    export class StudentWholeDataGrid extends Serenity.EntityGrid<StudentWholeDataRow, any> {
        protected getColumnsKey() { return 'ImportDeclarationPlan.StudentWholeData'; }
        protected getDialogType() { return StudentWholeDataDialog; }
        protected getIdProperty() { return StudentWholeDataRow.idProperty; }
        protected getLocalTextPrefix() { return StudentWholeDataRow.localTextPrefix; }
        protected getService() { return StudentWholeDataService.baseUrl; }

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
                    var dialog = new StudentInfoExcelImportDialog();
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
                        ImportDeclarationPlan.StudentWholeDataService.Delete({
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