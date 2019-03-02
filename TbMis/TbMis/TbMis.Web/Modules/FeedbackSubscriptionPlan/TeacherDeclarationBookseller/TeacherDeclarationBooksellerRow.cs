
namespace TbMis.FeedbackSubscriptionPlan.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("FeedbackSubscriptionPlan"), TableName("[dbo].[TeacherDeclaration_Bookseller]")]
    [DisplayName("教师用书"), InstanceName("Teacher Declaration Bookseller")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TeacherDeclarationBooksellerRow : Row, IIdRow, INameRow
    {

        [DisplayName("申报编号"), Column("DeclarationID"), PrimaryKey, ForeignKey("[dbo].[TeacherWholeData]", "DeclarationID"), LeftJoin("jDeclaration"), TextualField("DeclarationTermCode")]
        //Add this
        [ReadOnly(true)]
        public Int32? DeclarationId
        {
            get { return Fields.DeclarationId[this]; }
            set { Fields.DeclarationId[this] = value; }
        }

        [DisplayName("书商编号"), Column("BooksellerID"), Size(50), NotNull, ForeignKey("[dbo].[Bookseller]", "BooksellerID"), LeftJoin("jBookseller"), QuickSearch, TextualField("BooksellerBooksellerName")]
        [ReadOnly(true)]
        public String BooksellerId
        {
            get { return Fields.BooksellerId[this]; }
            set { Fields.BooksellerId[this] = value; }
        }

        [DisplayName("征订状态"), Size(1), NotNull]
        public String SubscriptionStatus
        {
            get { return Fields.SubscriptionStatus[this]; }
            set { Fields.SubscriptionStatus[this] = value; }
        }

        [DisplayName("回告时间")]
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

        [DisplayName("备注"), Size(200)]
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



        [DisplayName("Declaration Term Code"), Expression("jDeclaration.[TermCode]")]
        public String DeclarationTermCode
        {
            get { return Fields.DeclarationTermCode[this]; }
            set { Fields.DeclarationTermCode[this] = value; }
        }

        [DisplayName("学年学期"), Expression("jDeclaration.[TermName]")]
        [ReadOnly(true)]
        public String DeclarationTermName
        {
            get { return Fields.DeclarationTermName[this]; }
            set { Fields.DeclarationTermName[this] = value; }
        }

        [DisplayName("Declaration Batch Id"), Expression("jDeclaration.[BatchID]")]
        public String DeclarationBatchId
        {
            get { return Fields.DeclarationBatchId[this]; }
            set { Fields.DeclarationBatchId[this] = value; }
        }

        [DisplayName("Declaration School Id"), Expression("jDeclaration.[SchoolID]")]
        public String DeclarationSchoolId
        {
            get { return Fields.DeclarationSchoolId[this]; }
            set { Fields.DeclarationSchoolId[this] = value; }
        }

        [DisplayName("开课学院"), Expression("jDeclaration.[SchoolName]")]
        [ReadOnly(true)]
        public String DeclarationSchoolName
        {
            get { return Fields.DeclarationSchoolName[this]; }
            set { Fields.DeclarationSchoolName[this] = value; }
        }

        [DisplayName("Declaration Department Id"), Expression("jDeclaration.[DepartmentID]")]
        public String DeclarationDepartmentId
        {
            get { return Fields.DeclarationDepartmentId[this]; }
            set { Fields.DeclarationDepartmentId[this] = value; }
        }

        [DisplayName("Declaration Department Name"), Expression("jDeclaration.[DepartmentName]")]
        public String DeclarationDepartmentName
        {
            get { return Fields.DeclarationDepartmentName[this]; }
            set { Fields.DeclarationDepartmentName[this] = value; }
        }

        [DisplayName("Declaration Educational Type"), Expression("jDeclaration.[EducationalType]")]
        public String DeclarationEducationalType
        {
            get { return Fields.DeclarationEducationalType[this]; }
            set { Fields.DeclarationEducationalType[this] = value; }
        }

        [DisplayName("Declaration Textbook Num2"), Expression("jDeclaration.[TextbookNum2]")]
        public Int32? DeclarationTextbookNum2
        {
            get { return Fields.DeclarationTextbookNum2[this]; }
            set { Fields.DeclarationTextbookNum2[this] = value; }
        }

        [DisplayName("Declaration Approved Amount"), Expression("jDeclaration.[ApprovedAmount]")]
        public Int32? DeclarationApprovedAmount
        {
            get { return Fields.DeclarationApprovedAmount[this]; }
            set { Fields.DeclarationApprovedAmount[this] = value; }
        }

        [DisplayName("Declaration Priority"), Expression("jDeclaration.[Priority]")]
        public String DeclarationPriority
        {
            get { return Fields.DeclarationPriority[this]; }
            set { Fields.DeclarationPriority[this] = value; }
        }

        [DisplayName("Declaration Phone"), Expression("jDeclaration.[Phone]")]
        public String DeclarationPhone
        {
            get { return Fields.DeclarationPhone[this]; }
            set { Fields.DeclarationPhone[this] = value; }
        }

        [DisplayName("Declaration Remarks"), Expression("jDeclaration.[Remarks]")]
        public String DeclarationRemarks
        {
            get { return Fields.DeclarationRemarks[this]; }
            set { Fields.DeclarationRemarks[this] = value; }
        }

        [DisplayName("Declaration Check State"), Expression("jDeclaration.[CheckState]")]
        public String DeclarationCheckState
        {
            get { return Fields.DeclarationCheckState[this]; }
            set { Fields.DeclarationCheckState[this] = value; }
        }

        [DisplayName("Declaration Data Sign"), Expression("jDeclaration.[DataSign]")]
        public String DeclarationDataSign
        {
            get { return Fields.DeclarationDataSign[this]; }
            set { Fields.DeclarationDataSign[this] = value; }
        }

        [DisplayName("Declaration Course Num"), Expression("jDeclaration.[CourseNum]")]
        public Int32? DeclarationCourseNum
        {
            get { return Fields.DeclarationCourseNum[this]; }
            set { Fields.DeclarationCourseNum[this] = value; }
        }



        [DisplayName("Bookseller Bookseller Num"), Expression("jBookseller.[BooksellerNum]")]
        public Int32? BooksellerBooksellerNum
        {
            get { return Fields.BooksellerBooksellerNum[this]; }
            set { Fields.BooksellerBooksellerNum[this] = value; }
        }

        [DisplayName("书商名称"), Expression("jBookseller.[BooksellerName]")]
        [ReadOnly(true)]
        public String BooksellerBooksellerName
        {
            get { return Fields.BooksellerBooksellerName[this]; }
            set { Fields.BooksellerBooksellerName[this] = value; }
        }

        [DisplayName("Bookseller Contact"), Expression("jBookseller.[Contact]")]
        public String BooksellerContact
        {
            get { return Fields.BooksellerContact[this]; }
            set { Fields.BooksellerContact[this] = value; }
        }

        [DisplayName("Bookseller Telephone"), Expression("jBookseller.[Telephone]")]
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

            public StringField DeclarationSchoolName;

            public StringField DeclarationTermName;

            public StringField BooksellerId;

            public StringField BooksellerBooksellerName;

            public StringField SubscriptionStatus;

            public DateTimeField FeedbackDate;

            public StringField FeedbackStaff;

            public StringField Remark;

            public StringField ReDeclareStatus;



            public StringField DeclarationTermCode;

            

            public StringField DeclarationBatchId;

            public StringField DeclarationSchoolId;

            

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

            

            public StringField BooksellerContact;

            public StringField BooksellerTelephone;


		}
    }
}
