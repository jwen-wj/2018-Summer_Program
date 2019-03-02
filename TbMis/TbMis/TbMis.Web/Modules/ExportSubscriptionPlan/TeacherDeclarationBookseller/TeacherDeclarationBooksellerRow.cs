
namespace TbMis.ExportSubscriptionPlan.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("ExportSubscriptionPlan"), TableName("[dbo].[TeacherDeclaration_Bookseller]")]
    [DisplayName("教师用书"), InstanceName("教师用书")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TeacherDeclarationBooksellerRow : Row, IIdRow, INameRow
    {

        [DisplayName("申报编号"), Column("DeclarationID"), PrimaryKey, ForeignKey("[dbo].[TeacherWholeData]", "DeclarationID"), LeftJoin("jDeclaration"), TextualField("DeclarationTermCode")]
        public Int32? DeclarationId
        {
            get { return Fields.DeclarationId[this]; }
            set { Fields.DeclarationId[this] = value; }
        }

        [DisplayName("书商编号"), Column("BooksellerID"), Size(50), NotNull, ForeignKey("[dbo].[Bookseller]", "BooksellerID"), LeftJoin("jBookseller"), QuickSearch, TextualField("BooksellerBooksellerName")]
        public String BooksellerId
        {
            get { return Fields.BooksellerId[this]; }
            set { Fields.BooksellerId[this] = value; }
        }

        [DisplayName("课程ID"), NotNull, Expression("jDeclaration.[CourseNum]"), ForeignKey("[dbo].[Course]", "CourseNum"), LeftJoin("jCourseNum")]
        public Int32? CourseNum
        {
            get { return Fields.CourseNum[this]; }
            set { Fields.CourseNum[this] = value; }
        }

        [DisplayName("课程编号"), NotNull, Expression("jCourseNum.[CourseCode]")]
        public String CourseCode
        {
            get { return Fields.CourseCode[this]; }
            set { Fields.CourseCode[this] = value; }
        }

        [DisplayName("课程名称"), NotNull, Expression("jCourseNum.[CourseName]")]
        public String CourseName
        {
            get { return Fields.CourseName[this]; }
            set { Fields.CourseName[this] = value; }
        }

        [DisplayName("征订状态"), Size(1), NotNull]
        public String SubscriptionStatus
        {
            get { return Fields.SubscriptionStatus[this]; }
            set { Fields.SubscriptionStatus[this] = value; }
        }

        [DisplayName("回告日期")]
        public DateTime? FeedbackDate
        {
            get { return Fields.FeedbackDate[this]; }
            set { Fields.FeedbackDate[this] = value; }
        }

        [DisplayName("回告人"), Size(50)]
        public String FeedbackStaff
        {
            get { return Fields.FeedbackStaff[this]; }
            set { Fields.FeedbackStaff[this] = value; }
        }

        [DisplayName("回告备注"), Size(200)]
        public String Remark
        {
            get { return Fields.Remark[this]; }
            set { Fields.Remark[this] = value; }
        }

        [DisplayName("重新申报状态"), Size(1), NotNull]
        public String ReDeclareStatus
        {
            get { return Fields.ReDeclareStatus[this]; }
            set { Fields.ReDeclareStatus[this] = value; }
        }



        [DisplayName("学期编号"), Expression("jDeclaration.[TermCode]")]
        public String DeclarationTermCode
        {
            get { return Fields.DeclarationTermCode[this]; }
            set { Fields.DeclarationTermCode[this] = value; }
        }

        [DisplayName("学年学期"), Expression("jDeclaration.[TermName]")]
        public String DeclarationTermName
        {
            get { return Fields.DeclarationTermName[this]; }
            set { Fields.DeclarationTermName[this] = value; }
        }

        [DisplayName("批次编号"), Expression("jDeclaration.[BatchID]")]
        public String DeclarationBatchId
        {
            get { return Fields.DeclarationBatchId[this]; }
            set { Fields.DeclarationBatchId[this] = value; }
        }

        [DisplayName("学院ID"), Expression("jDeclaration.[SchoolID]")]
        public String DeclarationSchoolId
        {
            get { return Fields.DeclarationSchoolId[this]; }
            set { Fields.DeclarationSchoolId[this] = value; }
        }

        [DisplayName("开课学院"), Expression("jDeclaration.[SchoolName]")]
        public String DeclarationSchoolName
        {
            get { return Fields.DeclarationSchoolName[this]; }
            set { Fields.DeclarationSchoolName[this] = value; }
        }

        [DisplayName("系教研室ID"), Expression("jDeclaration.[DepartmentID]")]
        public String DeclarationDepartmentId
        {
            get { return Fields.DeclarationDepartmentId[this]; }
            set { Fields.DeclarationDepartmentId[this] = value; }
        }

        [DisplayName("系教研室"), Expression("jDeclaration.[DepartmentName]")]
        public String DeclarationDepartmentName
        {
            get { return Fields.DeclarationDepartmentName[this]; }
            set { Fields.DeclarationDepartmentName[this] = value; }
        }

        [DisplayName("教育类型"), Expression("jDeclaration.[EducationalType]")]
        public String DeclarationEducationalType
        {
            get { return Fields.DeclarationEducationalType[this]; }
            set { Fields.DeclarationEducationalType[this] = value; }
        }

        [DisplayName("教材信息"), Expression("jDeclaration.[TextbookNum2]"), ForeignKey("[dbo].[Textbook]", "TextbookNum2"), LeftJoin("jTextbookNum2")]
        public Int32? DeclarationTextbookNum2
        {
            get { return Fields.DeclarationTextbookNum2[this]; }
            set { Fields.DeclarationTextbookNum2[this] = value; }
        }

        [DisplayName("教材名称"), Expression("jTextbookNum2.[TextbookName]")]
        public String TextbookName
        {
            get { return Fields.TextbookName[this]; }
            set { Fields.TextbookName[this] = value; }
        }

        [DisplayName("申报数量"), Expression("jDeclaration.[ApprovedAmount]")]
        public Int32? DeclarationApprovedAmount
        {
            get { return Fields.DeclarationApprovedAmount[this]; }
            set { Fields.DeclarationApprovedAmount[this] = value; }
        }

        [DisplayName("优选状态"), Expression("jDeclaration.[Priority]")]
        public String DeclarationPriority
        {
            get { return Fields.DeclarationPriority[this]; }
            set { Fields.DeclarationPriority[this] = value; }
        }

        [DisplayName("联系电话"), Expression("jDeclaration.[Phone]")]
        public String DeclarationPhone
        {
            get { return Fields.DeclarationPhone[this]; }
            set { Fields.DeclarationPhone[this] = value; }
        }

        [DisplayName("备注"), Expression("jDeclaration.[Remarks]")]
        public String DeclarationRemarks
        {
            get { return Fields.DeclarationRemarks[this]; }
            set { Fields.DeclarationRemarks[this] = value; }
        }

        [DisplayName("审核状态"), Expression("jDeclaration.[CheckState]")]
        public String DeclarationCheckState
        {
            get { return Fields.DeclarationCheckState[this]; }
            set { Fields.DeclarationCheckState[this] = value; }
        }

        [DisplayName("数据标识"), Expression("jDeclaration.[DataSign]")]
        public String DeclarationDataSign
        {
            get { return Fields.DeclarationDataSign[this]; }
            set { Fields.DeclarationDataSign[this] = value; }
        }

        [DisplayName("DeclarationCourseNum"), Expression("jDeclaration.[CourseNum]")]
        public Int32? DeclarationCourseNum
        {
            get { return Fields.DeclarationCourseNum[this]; }
            set { Fields.DeclarationCourseNum[this] = value; }
        }

        [DisplayName("书商编号"), Expression("jBookseller.[BooksellerNum]")]
        public Int32? BooksellerBooksellerNum
        {
            get { return Fields.BooksellerBooksellerNum[this]; }
            set { Fields.BooksellerBooksellerNum[this] = value; }
        }

        [DisplayName("书商名称"), Expression("jBookseller.[BooksellerName]")]
        public String BooksellerBooksellerName
        {
            get { return Fields.BooksellerBooksellerName[this]; }
            set { Fields.BooksellerBooksellerName[this] = value; }
        }

        [DisplayName("联系人"), Expression("jBookseller.[Contact]")]
        public String BooksellerContact
        {
            get { return Fields.BooksellerContact[this]; }
            set { Fields.BooksellerContact[this] = value; }
        }

        [DisplayName("联系人电话"), Expression("jBookseller.[Telephone]")]
        public String BooksellerTelephone
        {
            get { return Fields.BooksellerTelephone[this]; }
            set { Fields.BooksellerTelephone[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.DeclarationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BooksellerId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TeacherDeclarationBooksellerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field DeclarationId;

            public StringField BooksellerId;

            public StringField SubscriptionStatus;

            public DateTimeField FeedbackDate;

            public StringField FeedbackStaff;

            public StringField Remark;

            public StringField ReDeclareStatus;



            public StringField DeclarationTermCode;

            public StringField DeclarationTermName;

            public StringField DeclarationBatchId;

            public StringField DeclarationSchoolId;

            public StringField DeclarationSchoolName;

            public StringField DeclarationDepartmentId;

            public StringField DeclarationDepartmentName;

            public StringField DeclarationEducationalType;

            public Int32Field DeclarationTextbookNum2;

            public Int32Field DeclarationApprovedAmount;

            public StringField DeclarationPriority;

            public StringField DeclarationPhone;

            public StringField DeclarationRemarks;

            public StringField DeclarationCheckState;

            public StringField DeclarationDataSign;

            public Int32Field DeclarationCourseNum;



            public Int32Field BooksellerBooksellerNum;

            public StringField BooksellerBooksellerName;

            public StringField BooksellerContact;

            public StringField BooksellerTelephone;

            public StringField CourseCode;

            public StringField CourseName;

            public Int32Field CourseNum;

            public StringField TextbookName;
        }
    }
}
