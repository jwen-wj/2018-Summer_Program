
namespace TbMis.MaintainDeclarationPlan {

    @Serenity.Decorators.registerClass()
    export class CourseMessageGrid extends Serenity.EntityGrid<CourseMessageRow, any> {
        protected getColumnsKey() { return 'MaintainDeclarationPlan.CourseMessage'; }
        protected getDialogType() { return CourseMessageDialog; }
        protected getIdProperty() { return CourseMessageRow.idProperty; }
        protected getLocalTextPrefix() { return CourseMessageRow.localTextPrefix; }
        protected getService() { return CourseMessageService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}