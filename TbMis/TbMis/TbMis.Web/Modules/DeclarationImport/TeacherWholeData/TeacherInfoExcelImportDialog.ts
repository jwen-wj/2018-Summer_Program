namespace TbMis.ImportDeclarationPlan {

    @Serenity.Decorators.registerClass()
    export class TeacherInfoExcelImportDialog extends Serenity.PropertyDialog<any, any> {

        private form: TeacherInfoExcelImportForm;

        constructor() {
            super();

            this.form = new TeacherInfoExcelImportForm(this.idPrefix);
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

                        TeacherInfoExcelImportService.TeacherExcelImport({
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