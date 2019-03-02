
namespace TbMis.MaintainDeclarationPlan.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("MaintainDeclarationPlan"), TableName("[dbo].[Course]")]
    [DisplayName("Course Message"), InstanceName("Course Message")]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class CourseMessageRow : Row, IIdRow, INameRow
    {

        [DisplayName("Course Num"), Identity]
        public Int32? CourseNum
        {
            get { return Fields.CourseNum[this]; }
            set { Fields.CourseNum[this] = value; }
        }

        [DisplayName("课程ID"), Column("CourseID"), Size(50), NotNull, QuickSearch]
        public String CourseId
        {
            get { return Fields.CourseId[this]; }
            set { Fields.CourseId[this] = value; }
        }

        [DisplayName("课程编号"), Size(50)]
        public String CourseCode
        {
            get { return Fields.CourseCode[this]; }
            set { Fields.CourseCode[this] = value; }
        }

        [DisplayName("课程名称"), Size(50), NotNull]
        public String CourseName
        {
            get { return Fields.CourseName[this]; }
            set { Fields.CourseName[this] = value; }
        }




        IIdField IIdRow.IdField
        {
            get { return Fields.CourseNum; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CourseId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CourseMessageRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field CourseNum;

            public StringField CourseId;

            public StringField CourseCode;

            public StringField CourseName;


		}
    }
}
