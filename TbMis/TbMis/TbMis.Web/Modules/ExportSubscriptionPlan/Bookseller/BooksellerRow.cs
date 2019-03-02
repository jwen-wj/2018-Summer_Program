
namespace TbMis.ExportSubscriptionPlan.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("ExportSubscriptionPlan"), TableName("[dbo].[Bookseller]")]
    [DisplayName("Bookseller"), InstanceName("Bookseller")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BooksellerRow : Row, IIdRow, INameRow
    {

        [DisplayName("Bookseller Id"), Column("BooksellerID"), Size(50), PrimaryKey, QuickSearch]
        public String BooksellerId
        {
            get { return Fields.BooksellerId[this]; }
            set { Fields.BooksellerId[this] = value; }
        }

        [DisplayName("Bookseller Num"), Identity]
        public Int32? BooksellerNum
        {
            get { return Fields.BooksellerNum[this]; }
            set { Fields.BooksellerNum[this] = value; }
        }

        [DisplayName("Bookseller Name"), Size(50), NotNull]
        public String BooksellerName
        {
            get { return Fields.BooksellerName[this]; }
            set { Fields.BooksellerName[this] = value; }
        }

        [DisplayName("Contact"), Size(50)]
        public String Contact
        {
            get { return Fields.Contact[this]; }
            set { Fields.Contact[this] = value; }
        }

        [DisplayName("Telephone"), Size(20)]
        public String Telephone
        {
            get { return Fields.Telephone[this]; }
            set { Fields.Telephone[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.BooksellerNum; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BooksellerId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BooksellerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public StringField BooksellerId;

            public Int32Field BooksellerNum;

            public StringField BooksellerName;

            public StringField Contact;

            public StringField Telephone;


		}
    }
}
