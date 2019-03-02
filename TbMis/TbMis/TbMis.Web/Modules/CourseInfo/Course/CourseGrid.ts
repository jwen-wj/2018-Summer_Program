
namespace TbMis.CourseInfo {

    @Serenity.Decorators.registerClass()
    export class CourseGrid extends Serenity.EntityGrid<CourseRow, any> {
        protected getColumnsKey() { return 'CourseInfo.Course'; }
        protected getDialogType() { return CourseDialog; }
        protected getIdProperty() { return CourseRow.idProperty; }
        protected getLocalTextPrefix() { return CourseRow.localTextPrefix; }
        protected getService() { return CourseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}