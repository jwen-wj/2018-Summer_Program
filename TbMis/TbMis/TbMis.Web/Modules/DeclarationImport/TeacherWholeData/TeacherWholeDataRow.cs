
namespace TbMis.ImportDeclarationPlan.Entities
{
    using CourseInfo.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using TextBookInfo.Entities;

    [ConnectionKey("Default"), Module("ImportDeclarationPlan"), TableName("[dbo].[TeacherWholeData]")]
    [DisplayName("教师用书"), InstanceName("教师用书")]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class TeacherWholeDataRow : Row, IIdRow, INameRow
    {

        [DisplayName("申报编号"), Column("DeclarationID"), Identity, QuickSearch]
        public Int32? DeclarationId
        {
            get { return Fields.DeclarationId[this]; }
            set { Fields.DeclarationId[this] = value; }
        }

        [DisplayName("学期编号"), Size(20), NotNull, QuickSearch]
        public String TermCode
        {
            get { return Fields.TermCode[this]; }
            set { Fields.TermCode[this] = value; }
        }

        [DisplayName("学年学期"), Size(20), NotNull, QuickSearch]
        public String TermName
        {
            get { return Fields.TermName[this]; }
            set { Fields.TermName[this] = value; }
        }

        [DisplayName("批次编号"), Column("BatchID"), Size(50), NotNull, QuickSearch]
        public String BatchId
        {
            get { return Fields.BatchId[this]; }
            set { Fields.BatchId[this] = value; }
        }

        [DisplayName("学院ID"), Column("SchoolID"), Size(50), NotNull, QuickSearch]
        public String SchoolId
        {
            get { return Fields.SchoolId[this]; }
            set { Fields.SchoolId[this] = value; }
        }

        [DisplayName("开课学院"), Size(50), NotNull, QuickSearch]
        public String SchoolName
        {
            get { return Fields.SchoolName[this]; }
            set { Fields.SchoolName[this] = value; }
        }

        [DisplayName("系教研室ID"), Column("DepartmentID"), Size(50), NotNull, QuickSearch]
        public String DepartmentId
        {
            get { return Fields.DepartmentId[this]; }
            set { Fields.DepartmentId[this] = value; }
        }

        [DisplayName("系教研室"), Size(50), NotNull, QuickSearch]
        public String DepartmentName
        {
            get { return Fields.DepartmentName[this]; }
            set { Fields.DepartmentName[this] = value; }
        }

        [DisplayName("教育类型"), Size(50)]
        public String EducationalType
        {
            get { return Fields.EducationalType[this]; }
            set { Fields.EducationalType[this] = value; }
        }

        [DisplayName("教材信息"), ForeignKey("[dbo].[Textbook]", "TextbookNum2"), LeftJoin("jTextbookNum2"), TextualField("TextbookNum2TextbookId")]
        [LookupEditor(typeof(TextbookMessageRow), InplaceAdd = true)]
        public Int32? TextbookNum2
        {
            get { return Fields.TextbookNum2[this]; }
            set { Fields.TextbookNum2[this] = value; }
        }

        [DisplayName("申报数量"), NotNull]
        public Int32? ApprovedAmount
        {
            get { return Fields.ApprovedAmount[this]; }
            set { Fields.ApprovedAmount[this] = value; }
        }

        [DisplayName("优选状态"), Size(50), NotNull, QuickSearch]
        public String Priority
        {
            get { return Fields.Priority[this]; }
            set { Fields.Priority[this] = value; }
        }

        [DisplayName("联系电话"), Size(50)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("备注"), Size(50)]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("审核状态"), Size(50), NotNull, QuickSearch]
        public String CheckState
        {
            get { return Fields.CheckState[this]; }
            set { Fields.CheckState[this] = value; }
        }

        [DisplayName("数据标识"), Size(1), NotNull, QuickSearch]
        public String DataSign
        {
            get { return Fields.DataSign[this]; }
            set { Fields.DataSign[this] = value; }
        }

        [DisplayName("课程信息"), NotNull, ForeignKey("[dbo].[Course]", "CourseNum"), LeftJoin("jCourseNum"), TextualField("CourseNumCourseId")]
        [LookupEditor(typeof(CourseMessageRow), InplaceAdd = true)]
        public Int32? CourseNum
        {
            get { return Fields.CourseNum[this]; }
            set { Fields.CourseNum[this] = value; }
        }



        [DisplayName("教材ID"), Expression("jTextbookNum2.[TextbookID]")]
        public String TextbookNum2TextbookId
        {
            get { return Fields.TextbookNum2TextbookId[this]; }
            set { Fields.TextbookNum2TextbookId[this] = value; }
        }

        [DisplayName("教材编号"), Expression("jTextbookNum2.[TextbookNum]")]
        public String TextbookNum2TextbookNum
        {
            get { return Fields.TextbookNum2TextbookNum[this]; }
            set { Fields.TextbookNum2TextbookNum[this] = value; }
        }

        [DisplayName("ISBN"), Expression("jTextbookNum2.[Isbn]")]
        public String TextbookNum2Isbn
        {
            get { return Fields.TextbookNum2Isbn[this]; }
            set { Fields.TextbookNum2Isbn[this] = value; }
        }

        [DisplayName("教材名称"), Expression("jTextbookNum2.[TextbookName]"), QuickSearch]
        public String TextbookNum2TextbookName
        {
            get { return Fields.TextbookNum2TextbookName[this]; }
            set { Fields.TextbookNum2TextbookName[this] = value; }
        }

        [DisplayName("出版社"), Expression("jTextbookNum2.[Press]")]
        public String TextbookNum2Press
        {
            get { return Fields.TextbookNum2Press[this]; }
            set { Fields.TextbookNum2Press[this] = value; }
        }

        [DisplayName("主编"), Expression("jTextbookNum2.[Author]")]
        public String TextbookNum2Author
        {
            get { return Fields.TextbookNum2Author[this]; }
            set { Fields.TextbookNum2Author[this] = value; }
        }

        [DisplayName("Textbook Num2 Edition"), Expression("jTextbookNum2.[Edition]")]
        public String TextbookNum2Edition
        {
            get { return Fields.TextbookNum2Edition[this]; }
            set { Fields.TextbookNum2Edition[this] = value; }
        }

        [DisplayName("版次"), Expression("jTextbookNum2.[PrintingCount]")]
        public String TextbookNum2PrintingCount
        {
            get { return Fields.TextbookNum2PrintingCount[this]; }
            set { Fields.TextbookNum2PrintingCount[this] = value; }
        }

        [DisplayName("定价"), Expression("jTextbookNum2.[Price]")]
        public String TextbookNum2Price
        {
            get { return Fields.TextbookNum2Price[this]; }
            set { Fields.TextbookNum2Price[this] = value; }
        }

        [DisplayName("教材类型"), Expression("jTextbookNum2.[TextbookType]")]
        public String TextbookNum2TextbookType
        {
            get { return Fields.TextbookNum2TextbookType[this]; }
            set { Fields.TextbookNum2TextbookType[this] = value; }
        }

        [DisplayName("翻译"), Expression("jTextbookNum2.[Translator]")]
        public String TextbookNum2Translator
        {
            get { return Fields.TextbookNum2Translator[this]; }
            set { Fields.TextbookNum2Translator[this] = value; }
        }

        [DisplayName("语言"), Expression("jTextbookNum2.[Language]")]
        public String TextbookNum2Language
        {
            get { return Fields.TextbookNum2Language[this]; }
            set { Fields.TextbookNum2Language[this] = value; }
        }

        [DisplayName("页数"), Expression("jTextbookNum2.[Page]")]
        public Int32? TextbookNum2Page
        {
            get { return Fields.TextbookNum2Page[this]; }
            set { Fields.TextbookNum2Page[this] = value; }
        }

        [DisplayName("Textbook Num2 Summary"), Expression("jTextbookNum2.[Summary]")]
        public String TextbookNum2Summary
        {
            get { return Fields.TextbookNum2Summary[this]; }
            set { Fields.TextbookNum2Summary[this] = value; }
        }

        [DisplayName("Textbook Num2 Catalog"), Expression("jTextbookNum2.[Catalog]")]
        public String TextbookNum2Catalog
        {
            get { return Fields.TextbookNum2Catalog[this]; }
            set { Fields.TextbookNum2Catalog[this] = value; }
        }

        [DisplayName("Textbook Num2 Is Self Compile"), Expression("jTextbookNum2.[IsSelfCompile]")]
        public String TextbookNum2IsSelfCompile
        {
            get { return Fields.TextbookNum2IsSelfCompile[this]; }
            set { Fields.TextbookNum2IsSelfCompile[this] = value; }
        }



        [DisplayName("课程ID"), Expression("jCourseNum.[CourseID]")]
        public String CourseNumCourseId
        {
            get { return Fields.CourseNumCourseId[this]; }
            set { Fields.CourseNumCourseId[this] = value; }
        }

        [DisplayName("课程编号"), Expression("jCourseNum.[CourseCode]"), QuickSearch]
        public String CourseNumCourseCode
        {
            get { return Fields.CourseNumCourseCode[this]; }
            set { Fields.CourseNumCourseCode[this] = value; }
        }

        [DisplayName("课程名称"), Expression("jCourseNum.[CourseName]"), QuickSearch]
        public String CourseNumCourseName
        {
            get { return Fields.CourseNumCourseName[this]; }
            set { Fields.CourseNumCourseName[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.DeclarationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TermCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TeacherWholeDataRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field DeclarationId;

            public StringField TermCode;

            public StringField TermName;

            public StringField BatchId;

            public StringField SchoolId;

            public StringField SchoolName;

            public StringField DepartmentId;

            public StringField DepartmentName;

            public StringField EducationalType;

            public Int32Field TextbookNum2;

            public Int32Field ApprovedAmount;

            public StringField Priority;

            public StringField Phone;

            public StringField Remarks;

            public StringField CheckState;

            public StringField DataSign;

            public Int32Field CourseNum;



            public StringField TextbookNum2TextbookId;

            public StringField TextbookNum2TextbookNum;

            public StringField TextbookNum2Isbn;

            public StringField TextbookNum2TextbookName;

            public StringField TextbookNum2Press;

            public StringField TextbookNum2Author;

            public StringField TextbookNum2Edition;

            public StringField TextbookNum2PrintingCount;

            public StringField TextbookNum2Price;

            public StringField TextbookNum2TextbookType;

            public StringField TextbookNum2Translator;

            public StringField TextbookNum2Language;

            public Int32Field TextbookNum2Page;

            public StringField TextbookNum2Summary;

            public StringField TextbookNum2Catalog;

            public StringField TextbookNum2IsSelfCompile;



            public StringField CourseNumCourseId;

            public StringField CourseNumCourseCode;

            public StringField CourseNumCourseName;


		}
    }
}
