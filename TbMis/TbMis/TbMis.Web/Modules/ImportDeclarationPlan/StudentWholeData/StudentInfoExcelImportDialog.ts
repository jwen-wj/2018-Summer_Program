namespace TbMis.ImportDeclarationPlan {

    @Serenity.Decorators.registerClass()
    export class StudentInfoExcelImportDialog extends Serenity.PropertyDialog<any, any> {

        private form: StudentInfoExcelImportForm;

        constructor() {
            super();

            this.form = new StudentInfoExcelImportForm(this.idPrefix);
        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: '导入',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;

                        if (this.form.FileName.value == null ||
                            Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
                            Q.notifyError("请选择文件!");
                            return;
                        }

                        StudentInfoExcelImportService.StudentExcelImport({
                            FileName: this.form.FileName.value.Filename
                        }, response => {
                            Q.notifyInfo(
                                '导入: ' + (response.Inserted || 0) +
                                ', 更新: ' + (response.Updated || 0));

                            if (response.ErrorList != null && response.ErrorList.length > 0) {
                                Q.notifyError(response.ErrorList.join(',\r\n '));
                            }

                            this.dialogClose();
                        });
                    },
                },
                {
                    text: '取消',
                    click: () => this.dialogClose()
                }
            ];
        }
    }
}