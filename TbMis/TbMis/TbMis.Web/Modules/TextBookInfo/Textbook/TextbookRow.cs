
namespace TbMis.TextBookInfo.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("TextBookInfo"), TableName("[dbo].[Textbook]")]
    [DisplayName("Textbook"), InstanceName("Textbook")]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript]
    public sealed class TextbookRow : Row, IIdRow, INameRow
    {

        [DisplayName("教材ID"), Column("TextbookID"), Size(50), NotNull, QuickSearch]
        public String TextbookId
        {
            get { return Fields.TextbookId[this]; }
            set { Fields.TextbookId[this] = value; }
        }

        [DisplayName("Textbook Num2"), Identity]
        public Int32? TextbookNum2
        {
            get { return Fields.TextbookNum2[this]; }
            set { Fields.TextbookNum2[this] = value; }
        }

        [DisplayName("教材编号"), Size(4000)]
        public String TextbookNum
        {
            get { return Fields.TextbookNum[this]; }
            set { Fields.TextbookNum[this] = value; }
        }

        [DisplayName("ISBN"), Size(20), NotNull]
        public String Isbn
        {
            get { return Fields.Isbn[this]; }
            set { Fields.Isbn[this] = value; }
        }

        [DisplayName("教材名称"), Size(200), NotNull]
        public String TextbookName
        {
            get { return Fields.TextbookName[this]; }
            set { Fields.TextbookName[this] = value; }
        }

        [DisplayName("出版社"), Size(50), NotNull]
        public String Press
        {
            get { return Fields.Press[this]; }
            set { Fields.Press[this] = value; }
        }

        [DisplayName("主编"), Size(50), NotNull]
        public String Author
        {
            get { return Fields.Author[this]; }
            set { Fields.Author[this] = value; }
        }

        [DisplayName("版次"), Size(20), NotNull]
        public String Edition
        {
            get { return Fields.Edition[this]; }
            set { Fields.Edition[this] = value; }
        }

        [DisplayName("印刷次数"), Size(20), NotNull]
        public String PrintingCount
        {
            get { return Fields.PrintingCount[this]; }
            set { Fields.PrintingCount[this] = value; }
        }

        [DisplayName("定价"), Size(50), NotNull]
        public String Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("教材类型"), Size(50)]
        public String TextbookType
        {
            get { return Fields.TextbookType[this]; }
            set { Fields.TextbookType[this] = value; }
        }

        [DisplayName("译者"), Size(50)]
        public String Translator
        {
            get { return Fields.Translator[this]; }
            set { Fields.Translator[this] = value; }
        }

        [DisplayName("语言"), Size(20)]
        public String Language
        {
            get { return Fields.Language[this]; }
            set { Fields.Language[this] = value; }
        }

        [DisplayName("页数")]
        public Int32? Page
        {
            get { return Fields.Page[this]; }
            set { Fields.Page[this] = value; }
        }

        [DisplayName("简介"), Size(200)]
        public String Summary
        {
            get { return Fields.Summary[this]; }
            set { Fields.Summary[this] = value; }
        }

        [DisplayName("目录"), Size(200)]
        public String Catalog
        {
            get { return Fields.Catalog[this]; }
            set { Fields.Catalog[this] = value; }
        }

        [DisplayName("个人编辑"), Size(1), NotNull]
        public String IsSelfCompile
        {
            get { return Fields.IsSelfCompile[this]; }
            set { Fields.IsSelfCompile[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.TextbookNum2; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TextbookId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TextbookRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public StringField TextbookId;

            public Int32Field TextbookNum2;

            public StringField TextbookNum;

            public StringField Isbn;

            public StringField TextbookName;

            public StringField Press;

            public StringField Author;

            public StringField Edition;

            public StringField PrintingCount;

            public StringField Price;

            public StringField TextbookType;

            public StringField Translator;

            public StringField Language;

            public Int32Field Page;

            public StringField Summary;

            public StringField Catalog;

            public StringField IsSelfCompile;


		}
    }
}
