var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = TbMis.Common || (TbMis.Common = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = TbMis.Common || (TbMis.Common = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var CourseInfo;
    (function (CourseInfo) {
        var CourseForm = /** @class */ (function (_super) {
            __extends(CourseForm, _super);
            function CourseForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CourseForm.init) {
                    CourseForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CourseForm, [
                        'CourseId', w0,
                        'CourseCode', w0,
                        'CourseName', w0
                    ]);
                }
                return _this;
            }
            CourseForm.formKey = 'CourseInfo.Course';
            return CourseForm;
        }(Serenity.PrefixedContext));
        CourseInfo.CourseForm = CourseForm;
    })(CourseInfo = TbMis.CourseInfo || (TbMis.CourseInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var CourseInfo;
    (function (CourseInfo) {
        var CourseMessageForm = /** @class */ (function (_super) {
            __extends(CourseMessageForm, _super);
            function CourseMessageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CourseMessageForm.init) {
                    CourseMessageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CourseMessageForm, [
                        'CourseId', w0,
                        'CourseCode', w0,
                        'CourseName', w0
                    ]);
                }
                return _this;
            }
            CourseMessageForm.formKey = 'CourseInfo.CourseMessage';
            return CourseMessageForm;
        }(Serenity.PrefixedContext));
        CourseInfo.CourseMessageForm = CourseMessageForm;
    })(CourseInfo = TbMis.CourseInfo || (TbMis.CourseInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var CourseInfo;
    (function (CourseInfo) {
        var CourseMessageRow;
        (function (CourseMessageRow) {
            CourseMessageRow.idProperty = 'CourseNum';
            CourseMessageRow.nameProperty = 'CourseName';
            CourseMessageRow.localTextPrefix = 'CourseInfo.CourseMessage';
            CourseMessageRow.lookupKey = 'CourseInfo.CourseMessage';
            function getLookup() {
                return Q.getLookup('CourseInfo.CourseMessage');
            }
            CourseMessageRow.getLookup = getLookup;
        })(CourseMessageRow = CourseInfo.CourseMessageRow || (CourseInfo.CourseMessageRow = {}));
    })(CourseInfo = TbMis.CourseInfo || (TbMis.CourseInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var CourseInfo;
    (function (CourseInfo) {
        var CourseMessageService;
        (function (CourseMessageService) {
            CourseMessageService.baseUrl = 'CourseInfo/CourseMessage';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CourseMessageService[x] = function (r, s, o) {
                    return Q.serviceRequest(CourseMessageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CourseMessageService = CourseInfo.CourseMessageService || (CourseInfo.CourseMessageService = {}));
    })(CourseInfo = TbMis.CourseInfo || (TbMis.CourseInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var CourseInfo;
    (function (CourseInfo) {
        var CourseRow;
        (function (CourseRow) {
            CourseRow.idProperty = 'CourseNum';
            CourseRow.nameProperty = 'CourseId';
            CourseRow.localTextPrefix = 'CourseInfo.Course';
            CourseRow.lookupKey = 'CourseInfo.Course';
            function getLookup() {
                return Q.getLookup('CourseInfo.Course');
            }
            CourseRow.getLookup = getLookup;
        })(CourseRow = CourseInfo.CourseRow || (CourseInfo.CourseRow = {}));
    })(CourseInfo = TbMis.CourseInfo || (TbMis.CourseInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var CourseInfo;
    (function (CourseInfo) {
        var CourseService;
        (function (CourseService) {
            CourseService.baseUrl = 'CourseInfo/Course';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CourseService[x] = function (r, s, o) {
                    return Q.serviceRequest(CourseService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CourseService = CourseInfo.CourseService || (CourseInfo.CourseService = {}));
    })(CourseInfo = TbMis.CourseInfo || (TbMis.CourseInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var BooksellerForm = /** @class */ (function (_super) {
            __extends(BooksellerForm, _super);
            function BooksellerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BooksellerForm.init) {
                    BooksellerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(BooksellerForm, [
                        'BooksellerId', w0,
                        'BooksellerName', w0,
                        'Contact', w0,
                        'Telephone', w0
                    ]);
                }
                return _this;
            }
            BooksellerForm.formKey = 'ExportSubscriptionPlan.Bookseller';
            return BooksellerForm;
        }(Serenity.PrefixedContext));
        ExportSubscriptionPlan.BooksellerForm = BooksellerForm;
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var BooksellerRow;
        (function (BooksellerRow) {
            BooksellerRow.idProperty = 'BooksellerNum';
            BooksellerRow.nameProperty = 'BooksellerId';
            BooksellerRow.localTextPrefix = 'ExportSubscriptionPlan.Bookseller';
        })(BooksellerRow = ExportSubscriptionPlan.BooksellerRow || (ExportSubscriptionPlan.BooksellerRow = {}));
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var BooksellerService;
        (function (BooksellerService) {
            BooksellerService.baseUrl = 'ExportSubscriptionPlan/Bookseller';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BooksellerService[x] = function (r, s, o) {
                    return Q.serviceRequest(BooksellerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BooksellerService = ExportSubscriptionPlan.BooksellerService || (ExportSubscriptionPlan.BooksellerService = {}));
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var StudentDeclarationBooksellerForm = /** @class */ (function (_super) {
            __extends(StudentDeclarationBooksellerForm, _super);
            function StudentDeclarationBooksellerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StudentDeclarationBooksellerForm.init) {
                    StudentDeclarationBooksellerForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(StudentDeclarationBooksellerForm, [
                        'DeclarationId', w0,
                        'DeclarationBatchId', w1,
                        'DeclarationTermName', w1,
                        'DeclarationSchoolName', w1,
                        'DeclarationDepartmentName', w1,
                        'CourseCode', w1,
                        'CourseName', w1,
                        'DeclarationPhone', w1,
                        'DeclarationCheckState', w1,
                        'DeclarationPriority', w1,
                        'DeclarationDataSign', w1,
                        'DeclarationApprovedAmount', w0,
                        'DeclarationRemarks', w1,
                        'BooksellerId', w1,
                        'BooksellerBooksellerName', w1,
                        'SubscriptionStatus', w1,
                        'FeedbackDate', w2,
                        'FeedbackStaff', w1,
                        'Remark', w1,
                        'ReDeclareStatus', w1,
                        'DeclarationEducationalType', w1
                    ]);
                }
                return _this;
            }
            StudentDeclarationBooksellerForm.formKey = 'ExportSubscriptionPlan.StudentDeclarationBookseller';
            return StudentDeclarationBooksellerForm;
        }(Serenity.PrefixedContext));
        ExportSubscriptionPlan.StudentDeclarationBooksellerForm = StudentDeclarationBooksellerForm;
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var StudentDeclarationBooksellerRow;
        (function (StudentDeclarationBooksellerRow) {
            StudentDeclarationBooksellerRow.idProperty = 'DeclarationId';
            StudentDeclarationBooksellerRow.nameProperty = 'BooksellerId';
            StudentDeclarationBooksellerRow.localTextPrefix = 'ExportSubscriptionPlan.StudentDeclarationBookseller';
        })(StudentDeclarationBooksellerRow = ExportSubscriptionPlan.StudentDeclarationBooksellerRow || (ExportSubscriptionPlan.StudentDeclarationBooksellerRow = {}));
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var StudentDeclarationBooksellerService;
        (function (StudentDeclarationBooksellerService) {
            StudentDeclarationBooksellerService.baseUrl = 'ExportSubscriptionPlan/StudentDeclarationBookseller';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StudentDeclarationBooksellerService[x] = function (r, s, o) {
                    return Q.serviceRequest(StudentDeclarationBooksellerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StudentDeclarationBooksellerService = ExportSubscriptionPlan.StudentDeclarationBooksellerService || (ExportSubscriptionPlan.StudentDeclarationBooksellerService = {}));
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var StudentWholeDataForm = /** @class */ (function (_super) {
            __extends(StudentWholeDataForm, _super);
            function StudentWholeDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StudentWholeDataForm.init) {
                    StudentWholeDataForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(StudentWholeDataForm, [
                        'TermCode', w0,
                        'TermName', w0,
                        'BatchId', w0,
                        'SchoolId', w0,
                        'SchoolName', w0,
                        'DepartmentId', w0,
                        'DepartmentName', w0,
                        'EducationalType', w0,
                        'TextbookNum2', w1,
                        'ApprovedAmount', w2,
                        'Priority', w0,
                        'Phone', w0,
                        'CheckState', w0,
                        'Remarks', w0,
                        'ClassName', w0,
                        'ClassSize', w0,
                        'DataSign', w0,
                        'CourseNum', w1
                    ]);
                }
                return _this;
            }
            StudentWholeDataForm.formKey = 'ExportSubscriptionPlan.StudentWholeData';
            return StudentWholeDataForm;
        }(Serenity.PrefixedContext));
        ExportSubscriptionPlan.StudentWholeDataForm = StudentWholeDataForm;
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var StudentWholeDataRow;
        (function (StudentWholeDataRow) {
            StudentWholeDataRow.idProperty = 'DeclarationId';
            StudentWholeDataRow.nameProperty = 'TermCode';
            StudentWholeDataRow.localTextPrefix = 'ExportSubscriptionPlan.StudentWholeData';
        })(StudentWholeDataRow = ExportSubscriptionPlan.StudentWholeDataRow || (ExportSubscriptionPlan.StudentWholeDataRow = {}));
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var StudentWholeDataService;
        (function (StudentWholeDataService) {
            StudentWholeDataService.baseUrl = 'ExportSubscriptionPlan/StudentWholeData';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StudentWholeDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(StudentWholeDataService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StudentWholeDataService = ExportSubscriptionPlan.StudentWholeDataService || (ExportSubscriptionPlan.StudentWholeDataService = {}));
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var TeacherDeclarationBooksellerForm = /** @class */ (function (_super) {
            __extends(TeacherDeclarationBooksellerForm, _super);
            function TeacherDeclarationBooksellerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TeacherDeclarationBooksellerForm.init) {
                    TeacherDeclarationBooksellerForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(TeacherDeclarationBooksellerForm, [
                        'DeclarationId', w0,
                        'DeclarationBatchId', w1,
                        'DeclarationTermName', w1,
                        'DeclarationSchoolName', w1,
                        'DeclarationDepartmentName', w1,
                        'CourseCode', w1,
                        'CourseName', w1,
                        'DeclarationPhone', w1,
                        'DeclarationCheckState', w1,
                        'DeclarationPriority', w1,
                        'DeclarationDataSign', w1,
                        'DeclarationApprovedAmount', w0,
                        'DeclarationRemarks', w1,
                        'BooksellerId', w1,
                        'BooksellerBooksellerName', w1,
                        'SubscriptionStatus', w1,
                        'FeedbackDate', w2,
                        'FeedbackStaff', w1,
                        'Remark', w1,
                        'ReDeclareStatus', w1,
                        'DeclarationEducationalType', w1
                    ]);
                }
                return _this;
            }
            TeacherDeclarationBooksellerForm.formKey = 'ExportSubscriptionPlan.TeacherDeclarationBookseller';
            return TeacherDeclarationBooksellerForm;
        }(Serenity.PrefixedContext));
        ExportSubscriptionPlan.TeacherDeclarationBooksellerForm = TeacherDeclarationBooksellerForm;
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var TeacherDeclarationBooksellerRow;
        (function (TeacherDeclarationBooksellerRow) {
            TeacherDeclarationBooksellerRow.idProperty = 'DeclarationId';
            TeacherDeclarationBooksellerRow.nameProperty = 'BooksellerId';
            TeacherDeclarationBooksellerRow.localTextPrefix = 'ExportSubscriptionPlan.TeacherDeclarationBookseller';
        })(TeacherDeclarationBooksellerRow = ExportSubscriptionPlan.TeacherDeclarationBooksellerRow || (ExportSubscriptionPlan.TeacherDeclarationBooksellerRow = {}));
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var TeacherDeclarationBooksellerService;
        (function (TeacherDeclarationBooksellerService) {
            TeacherDeclarationBooksellerService.baseUrl = 'ExportSubscriptionPlan/TeacherDeclarationBookseller';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TeacherDeclarationBooksellerService[x] = function (r, s, o) {
                    return Q.serviceRequest(TeacherDeclarationBooksellerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TeacherDeclarationBooksellerService = ExportSubscriptionPlan.TeacherDeclarationBooksellerService || (ExportSubscriptionPlan.TeacherDeclarationBooksellerService = {}));
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var TeacherWholeDataForm = /** @class */ (function (_super) {
            __extends(TeacherWholeDataForm, _super);
            function TeacherWholeDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TeacherWholeDataForm.init) {
                    TeacherWholeDataForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(TeacherWholeDataForm, [
                        'TermCode', w0,
                        'TermName', w0,
                        'BatchId', w0,
                        'SchoolId', w0,
                        'SchoolName', w0,
                        'DepartmentId', w0,
                        'DepartmentName', w0,
                        'EducationalType', w0,
                        'TextbookNum2', w1,
                        'ApprovedAmount', w1,
                        'Priority', w0,
                        'Phone', w0,
                        'Remarks', w0,
                        'CheckState', w0,
                        'DataSign', w0,
                        'CourseNum', w1,
                        'SubscriptionStatus', w0,
                        'FeedbackDate', w2,
                        'FeedbackStaff', w0,
                        'Remark', w0,
                        'ReDeclareStatus', w0
                    ]);
                }
                return _this;
            }
            TeacherWholeDataForm.formKey = 'ExportSubscriptionPlan.TeacherWholeData';
            return TeacherWholeDataForm;
        }(Serenity.PrefixedContext));
        ExportSubscriptionPlan.TeacherWholeDataForm = TeacherWholeDataForm;
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var TeacherWholeDataRow;
        (function (TeacherWholeDataRow) {
            TeacherWholeDataRow.idProperty = 'DeclarationId';
            TeacherWholeDataRow.nameProperty = 'TermCode';
            TeacherWholeDataRow.localTextPrefix = 'ExportSubscriptionPlan.TeacherWholeData';
        })(TeacherWholeDataRow = ExportSubscriptionPlan.TeacherWholeDataRow || (ExportSubscriptionPlan.TeacherWholeDataRow = {}));
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var TeacherWholeDataService;
        (function (TeacherWholeDataService) {
            TeacherWholeDataService.baseUrl = 'ExportSubscriptionPlan/TeacherWholeData';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TeacherWholeDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(TeacherWholeDataService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TeacherWholeDataService = ExportSubscriptionPlan.TeacherWholeDataService || (ExportSubscriptionPlan.TeacherWholeDataService = {}));
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var FeedbackSubscriptionPlan;
    (function (FeedbackSubscriptionPlan) {
        var StudentDeclarationBooksellerForm = /** @class */ (function (_super) {
            __extends(StudentDeclarationBooksellerForm, _super);
            function StudentDeclarationBooksellerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StudentDeclarationBooksellerForm.init) {
                    StudentDeclarationBooksellerForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(StudentDeclarationBooksellerForm, [
                        'DeclarationId', w0,
                        'DeclarationSchoolName', w1,
                        'DeclarationTermName', w1,
                        'BooksellerId', w1,
                        'BooksellerBooksellerName', w1,
                        'SubscriptionStatus', w1,
                        'FeedbackDate', w2,
                        'FeedbackStaff', w1,
                        'Remark', w1,
                        'ReDeclareStatus', w1
                    ]);
                }
                return _this;
            }
            StudentDeclarationBooksellerForm.formKey = 'FeedbackSubscriptionPlan.StudentDeclarationBookseller';
            return StudentDeclarationBooksellerForm;
        }(Serenity.PrefixedContext));
        FeedbackSubscriptionPlan.StudentDeclarationBooksellerForm = StudentDeclarationBooksellerForm;
    })(FeedbackSubscriptionPlan = TbMis.FeedbackSubscriptionPlan || (TbMis.FeedbackSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var FeedbackSubscriptionPlan;
    (function (FeedbackSubscriptionPlan) {
        var StudentDeclarationBooksellerRow;
        (function (StudentDeclarationBooksellerRow) {
            StudentDeclarationBooksellerRow.idProperty = 'DeclarationId';
            StudentDeclarationBooksellerRow.nameProperty = 'BooksellerId';
            StudentDeclarationBooksellerRow.localTextPrefix = 'FeedbackSubscriptionPlan.StudentDeclarationBookseller';
        })(StudentDeclarationBooksellerRow = FeedbackSubscriptionPlan.StudentDeclarationBooksellerRow || (FeedbackSubscriptionPlan.StudentDeclarationBooksellerRow = {}));
    })(FeedbackSubscriptionPlan = TbMis.FeedbackSubscriptionPlan || (TbMis.FeedbackSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var FeedbackSubscriptionPlan;
    (function (FeedbackSubscriptionPlan) {
        var StudentDeclarationBooksellerService;
        (function (StudentDeclarationBooksellerService) {
            StudentDeclarationBooksellerService.baseUrl = 'FeedbackSubscriptionPlan/StudentDeclarationBookseller';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StudentDeclarationBooksellerService[x] = function (r, s, o) {
                    return Q.serviceRequest(StudentDeclarationBooksellerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StudentDeclarationBooksellerService = FeedbackSubscriptionPlan.StudentDeclarationBooksellerService || (FeedbackSubscriptionPlan.StudentDeclarationBooksellerService = {}));
    })(FeedbackSubscriptionPlan = TbMis.FeedbackSubscriptionPlan || (TbMis.FeedbackSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var FeedbackSubscriptionPlan;
    (function (FeedbackSubscriptionPlan) {
        var TeacherDeclarationBooksellerForm = /** @class */ (function (_super) {
            __extends(TeacherDeclarationBooksellerForm, _super);
            function TeacherDeclarationBooksellerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TeacherDeclarationBooksellerForm.init) {
                    TeacherDeclarationBooksellerForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(TeacherDeclarationBooksellerForm, [
                        'DeclarationId', w0,
                        'DeclarationSchoolName', w1,
                        'DeclarationTermName', w1,
                        'BooksellerId', w1,
                        'BooksellerBooksellerName', w1,
                        'SubscriptionStatus', w1,
                        'FeedbackDate', w2,
                        'FeedbackStaff', w1,
                        'Remark', w1,
                        'ReDeclareStatus', w1
                    ]);
                }
                return _this;
            }
            TeacherDeclarationBooksellerForm.formKey = 'FeedbackSubscriptionPlan.TeacherDeclarationBookseller';
            return TeacherDeclarationBooksellerForm;
        }(Serenity.PrefixedContext));
        FeedbackSubscriptionPlan.TeacherDeclarationBooksellerForm = TeacherDeclarationBooksellerForm;
    })(FeedbackSubscriptionPlan = TbMis.FeedbackSubscriptionPlan || (TbMis.FeedbackSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var FeedbackSubscriptionPlan;
    (function (FeedbackSubscriptionPlan) {
        var TeacherDeclarationBooksellerRow;
        (function (TeacherDeclarationBooksellerRow) {
            TeacherDeclarationBooksellerRow.idProperty = 'DeclarationId';
            TeacherDeclarationBooksellerRow.nameProperty = 'BooksellerId';
            TeacherDeclarationBooksellerRow.localTextPrefix = 'FeedbackSubscriptionPlan.TeacherDeclarationBookseller';
        })(TeacherDeclarationBooksellerRow = FeedbackSubscriptionPlan.TeacherDeclarationBooksellerRow || (FeedbackSubscriptionPlan.TeacherDeclarationBooksellerRow = {}));
    })(FeedbackSubscriptionPlan = TbMis.FeedbackSubscriptionPlan || (TbMis.FeedbackSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var FeedbackSubscriptionPlan;
    (function (FeedbackSubscriptionPlan) {
        var TeacherDeclarationBooksellerService;
        (function (TeacherDeclarationBooksellerService) {
            TeacherDeclarationBooksellerService.baseUrl = 'FeedbackSubscriptionPlan/TeacherDeclarationBookseller';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TeacherDeclarationBooksellerService[x] = function (r, s, o) {
                    return Q.serviceRequest(TeacherDeclarationBooksellerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TeacherDeclarationBooksellerService = FeedbackSubscriptionPlan.TeacherDeclarationBooksellerService || (FeedbackSubscriptionPlan.TeacherDeclarationBooksellerService = {}));
    })(FeedbackSubscriptionPlan = TbMis.FeedbackSubscriptionPlan || (TbMis.FeedbackSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var StudentInfoExcelImportForm = /** @class */ (function (_super) {
            __extends(StudentInfoExcelImportForm, _super);
            function StudentInfoExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StudentInfoExcelImportForm.init) {
                    StudentInfoExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(StudentInfoExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            StudentInfoExcelImportForm.formKey = 'ImportDeclarationPlan.StudentInfoExcelImport';
            return StudentInfoExcelImportForm;
        }(Serenity.PrefixedContext));
        ImportDeclarationPlan.StudentInfoExcelImportForm = StudentInfoExcelImportForm;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var StudentInfoExcelImportService;
        (function (StudentInfoExcelImportService) {
            StudentInfoExcelImportService.baseUrl = 'ImportDeclarationPlan/StudentInfoExcelImport';
            [
                'StudentExcelImport'
            ].forEach(function (x) {
                StudentInfoExcelImportService[x] = function (r, s, o) {
                    return Q.serviceRequest(StudentInfoExcelImportService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StudentInfoExcelImportService = ImportDeclarationPlan.StudentInfoExcelImportService || (ImportDeclarationPlan.StudentInfoExcelImportService = {}));
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var StudentWholeDataForm = /** @class */ (function (_super) {
            __extends(StudentWholeDataForm, _super);
            function StudentWholeDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StudentWholeDataForm.init) {
                    StudentWholeDataForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(StudentWholeDataForm, [
                        'TermCode', w0,
                        'TermName', w0,
                        'BatchId', w0,
                        'SchoolId', w0,
                        'SchoolName', w0,
                        'DepartmentId', w0,
                        'DepartmentName', w0,
                        'TextbookNum2', w1,
                        'CourseNum', w1,
                        'EducationalType', w0,
                        'ApprovedAmount', w2,
                        'Priority', w0,
                        'Phone', w0,
                        'CheckState', w0,
                        'Remarks', w0,
                        'ClassName', w0,
                        'ClassSize', w0,
                        'DataSign', w0
                    ]);
                }
                return _this;
            }
            StudentWholeDataForm.formKey = 'ImportDeclarationPlan.StudentWholeData';
            return StudentWholeDataForm;
        }(Serenity.PrefixedContext));
        ImportDeclarationPlan.StudentWholeDataForm = StudentWholeDataForm;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var StudentWholeDataRow;
        (function (StudentWholeDataRow) {
            StudentWholeDataRow.idProperty = 'DeclarationId';
            StudentWholeDataRow.nameProperty = 'TermCode';
            StudentWholeDataRow.localTextPrefix = 'ImportDeclarationPlan.StudentWholeData';
        })(StudentWholeDataRow = ImportDeclarationPlan.StudentWholeDataRow || (ImportDeclarationPlan.StudentWholeDataRow = {}));
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var StudentWholeDataService;
        (function (StudentWholeDataService) {
            StudentWholeDataService.baseUrl = 'ImportDeclarationPlan/StudentWholeData';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StudentWholeDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(StudentWholeDataService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StudentWholeDataService = ImportDeclarationPlan.StudentWholeDataService || (ImportDeclarationPlan.StudentWholeDataService = {}));
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var TeacherInfoExcelImportForm = /** @class */ (function (_super) {
            __extends(TeacherInfoExcelImportForm, _super);
            function TeacherInfoExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TeacherInfoExcelImportForm.init) {
                    TeacherInfoExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(TeacherInfoExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            TeacherInfoExcelImportForm.formKey = 'ImportDeclarationPlan.TeacherInfoExcelImport';
            return TeacherInfoExcelImportForm;
        }(Serenity.PrefixedContext));
        ImportDeclarationPlan.TeacherInfoExcelImportForm = TeacherInfoExcelImportForm;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var TeacherInfoExcelImportService;
        (function (TeacherInfoExcelImportService) {
            TeacherInfoExcelImportService.baseUrl = 'ImportDeclarationPlan/TeacherInfoExcelImport';
            [
                'TeacherExcelImport'
            ].forEach(function (x) {
                TeacherInfoExcelImportService[x] = function (r, s, o) {
                    return Q.serviceRequest(TeacherInfoExcelImportService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TeacherInfoExcelImportService = ImportDeclarationPlan.TeacherInfoExcelImportService || (ImportDeclarationPlan.TeacherInfoExcelImportService = {}));
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var TeacherWholeDataForm = /** @class */ (function (_super) {
            __extends(TeacherWholeDataForm, _super);
            function TeacherWholeDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TeacherWholeDataForm.init) {
                    TeacherWholeDataForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(TeacherWholeDataForm, [
                        'TermCode', w0,
                        'TermName', w0,
                        'BatchId', w0,
                        'SchoolId', w0,
                        'SchoolName', w0,
                        'DepartmentId', w0,
                        'DepartmentName', w0,
                        'CourseNum', w1,
                        'TextbookNum2', w1,
                        'EducationalType', w0,
                        'ApprovedAmount', w2,
                        'Priority', w0,
                        'Phone', w0,
                        'Remarks', w0,
                        'CheckState', w0,
                        'DataSign', w0
                    ]);
                }
                return _this;
            }
            TeacherWholeDataForm.formKey = 'ImportDeclarationPlan.TeacherWholeData';
            return TeacherWholeDataForm;
        }(Serenity.PrefixedContext));
        ImportDeclarationPlan.TeacherWholeDataForm = TeacherWholeDataForm;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var TeacherWholeDataRow;
        (function (TeacherWholeDataRow) {
            TeacherWholeDataRow.idProperty = 'DeclarationId';
            TeacherWholeDataRow.nameProperty = 'TermCode';
            TeacherWholeDataRow.localTextPrefix = 'ImportDeclarationPlan.TeacherWholeData';
        })(TeacherWholeDataRow = ImportDeclarationPlan.TeacherWholeDataRow || (ImportDeclarationPlan.TeacherWholeDataRow = {}));
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var TeacherWholeDataService;
        (function (TeacherWholeDataService) {
            TeacherWholeDataService.baseUrl = 'ImportDeclarationPlan/TeacherWholeData';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TeacherWholeDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(TeacherWholeDataService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TeacherWholeDataService = ImportDeclarationPlan.TeacherWholeDataService || (ImportDeclarationPlan.TeacherWholeDataService = {}));
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var BooksellerForm = /** @class */ (function (_super) {
            __extends(BooksellerForm, _super);
            function BooksellerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BooksellerForm.init) {
                    BooksellerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(BooksellerForm, [
                        'BooksellerId', w0,
                        'BooksellerName', w0,
                        'Contact', w0,
                        'Telephone', w0
                    ]);
                }
                return _this;
            }
            BooksellerForm.formKey = 'IssuedDeclarationPlan.Bookseller';
            return BooksellerForm;
        }(Serenity.PrefixedContext));
        IssuedDeclarationPlan.BooksellerForm = BooksellerForm;
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var BooksellerRow;
        (function (BooksellerRow) {
            BooksellerRow.idProperty = 'BooksellerNum';
            BooksellerRow.nameProperty = 'BooksellerId';
            BooksellerRow.localTextPrefix = 'IssuedDeclarationPlan.Bookseller';
        })(BooksellerRow = IssuedDeclarationPlan.BooksellerRow || (IssuedDeclarationPlan.BooksellerRow = {}));
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var BooksellerService;
        (function (BooksellerService) {
            BooksellerService.baseUrl = 'IssuedDeclarationPlan/Bookseller';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BooksellerService[x] = function (r, s, o) {
                    return Q.serviceRequest(BooksellerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BooksellerService = IssuedDeclarationPlan.BooksellerService || (IssuedDeclarationPlan.BooksellerService = {}));
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var StudentDeclarationBooksellerForm = /** @class */ (function (_super) {
            __extends(StudentDeclarationBooksellerForm, _super);
            function StudentDeclarationBooksellerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StudentDeclarationBooksellerForm.init) {
                    StudentDeclarationBooksellerForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(StudentDeclarationBooksellerForm, [
                        'SchoolName', w0,
                        'DeclarationId', w0,
                        'BooksellerName', w0,
                        'BooksellerId', w0,
                        'SubscriptionStatus', w1,
                        'FeedbackDate', w2,
                        'FeedbackStaff', w1,
                        'Remark', w1,
                        'ReDeclareStatus', w1
                    ]);
                }
                return _this;
            }
            StudentDeclarationBooksellerForm.formKey = 'IssuedDeclarationPlan.StudentDeclarationBookseller';
            return StudentDeclarationBooksellerForm;
        }(Serenity.PrefixedContext));
        IssuedDeclarationPlan.StudentDeclarationBooksellerForm = StudentDeclarationBooksellerForm;
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var StudentDeclarationBooksellerRow;
        (function (StudentDeclarationBooksellerRow) {
            StudentDeclarationBooksellerRow.idProperty = 'DeclarationId';
            StudentDeclarationBooksellerRow.nameProperty = 'BooksellerId';
            StudentDeclarationBooksellerRow.localTextPrefix = 'IssuedDeclarationPlan.StudentDeclarationBookseller';
        })(StudentDeclarationBooksellerRow = IssuedDeclarationPlan.StudentDeclarationBooksellerRow || (IssuedDeclarationPlan.StudentDeclarationBooksellerRow = {}));
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var StudentDeclarationBooksellerService;
        (function (StudentDeclarationBooksellerService) {
            StudentDeclarationBooksellerService.baseUrl = 'IssuedDeclarationPlan/StudentDeclarationBookseller';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StudentDeclarationBooksellerService[x] = function (r, s, o) {
                    return Q.serviceRequest(StudentDeclarationBooksellerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StudentDeclarationBooksellerService = IssuedDeclarationPlan.StudentDeclarationBooksellerService || (IssuedDeclarationPlan.StudentDeclarationBooksellerService = {}));
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var StudentWholeDataForm = /** @class */ (function (_super) {
            __extends(StudentWholeDataForm, _super);
            function StudentWholeDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StudentWholeDataForm.init) {
                    StudentWholeDataForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(StudentWholeDataForm, [
                        'TermCode', w0,
                        'TermName', w0,
                        'BatchId', w0,
                        'SchoolId', w0,
                        'SchoolName', w0,
                        'DepartmentId', w0,
                        'DepartmentName', w0,
                        'EducationalType', w0,
                        'TextbookNum2', w1,
                        'ApprovedAmount', w1,
                        'Priority', w0,
                        'Phone', w0,
                        'CheckState', w0,
                        'Remarks', w0,
                        'ClassName', w0,
                        'ClassSize', w0,
                        'DataSign', w0,
                        'CourseNum', w1
                    ]);
                }
                return _this;
            }
            StudentWholeDataForm.formKey = 'IssuedDeclarationPlan.StudentWholeData';
            return StudentWholeDataForm;
        }(Serenity.PrefixedContext));
        IssuedDeclarationPlan.StudentWholeDataForm = StudentWholeDataForm;
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var StudentWholeDataRow;
        (function (StudentWholeDataRow) {
            StudentWholeDataRow.idProperty = 'DeclarationId';
            StudentWholeDataRow.nameProperty = 'TermCode';
            StudentWholeDataRow.localTextPrefix = 'IssuedDeclarationPlan.StudentWholeData';
        })(StudentWholeDataRow = IssuedDeclarationPlan.StudentWholeDataRow || (IssuedDeclarationPlan.StudentWholeDataRow = {}));
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var StudentWholeDataService;
        (function (StudentWholeDataService) {
            StudentWholeDataService.baseUrl = 'IssuedDeclarationPlan/StudentWholeData';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StudentWholeDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(StudentWholeDataService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StudentWholeDataService = IssuedDeclarationPlan.StudentWholeDataService || (IssuedDeclarationPlan.StudentWholeDataService = {}));
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var TeacherDeclarationBooksellerForm = /** @class */ (function (_super) {
            __extends(TeacherDeclarationBooksellerForm, _super);
            function TeacherDeclarationBooksellerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TeacherDeclarationBooksellerForm.init) {
                    TeacherDeclarationBooksellerForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(TeacherDeclarationBooksellerForm, [
                        'SchoolName', w0,
                        'DeclarationId', w0,
                        'BooksellerName', w0,
                        'BooksellerId', w0,
                        'SubscriptionStatus', w1,
                        'FeedbackDate', w2,
                        'FeedbackStaff', w1,
                        'Remark', w1,
                        'ReDeclareStatus', w1
                    ]);
                }
                return _this;
            }
            TeacherDeclarationBooksellerForm.formKey = 'IssuedDeclarationPlan.TeacherDeclarationBookseller';
            return TeacherDeclarationBooksellerForm;
        }(Serenity.PrefixedContext));
        IssuedDeclarationPlan.TeacherDeclarationBooksellerForm = TeacherDeclarationBooksellerForm;
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var TeacherDeclarationBooksellerRow;
        (function (TeacherDeclarationBooksellerRow) {
            TeacherDeclarationBooksellerRow.idProperty = 'DeclarationId';
            TeacherDeclarationBooksellerRow.nameProperty = 'BooksellerId';
            TeacherDeclarationBooksellerRow.localTextPrefix = 'IssuedDeclarationPlan.TeacherDeclarationBookseller';
        })(TeacherDeclarationBooksellerRow = IssuedDeclarationPlan.TeacherDeclarationBooksellerRow || (IssuedDeclarationPlan.TeacherDeclarationBooksellerRow = {}));
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var TeacherDeclarationBooksellerService;
        (function (TeacherDeclarationBooksellerService) {
            TeacherDeclarationBooksellerService.baseUrl = 'IssuedDeclarationPlan/TeacherDeclarationBookseller';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TeacherDeclarationBooksellerService[x] = function (r, s, o) {
                    return Q.serviceRequest(TeacherDeclarationBooksellerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TeacherDeclarationBooksellerService = IssuedDeclarationPlan.TeacherDeclarationBooksellerService || (IssuedDeclarationPlan.TeacherDeclarationBooksellerService = {}));
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var TeacherWholeDataForm = /** @class */ (function (_super) {
            __extends(TeacherWholeDataForm, _super);
            function TeacherWholeDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TeacherWholeDataForm.init) {
                    TeacherWholeDataForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(TeacherWholeDataForm, [
                        'TermCode', w0,
                        'TermName', w0,
                        'BatchId', w0,
                        'SchoolId', w0,
                        'SchoolName', w0,
                        'DepartmentId', w0,
                        'DepartmentName', w0,
                        'EducationalType', w0,
                        'TextbookNum2', w1,
                        'ApprovedAmount', w1,
                        'Priority', w0,
                        'Phone', w0,
                        'Remarks', w0,
                        'CheckState', w0,
                        'DataSign', w0,
                        'CourseNum', w1
                    ]);
                }
                return _this;
            }
            TeacherWholeDataForm.formKey = 'IssuedDeclarationPlan.TeacherWholeData';
            return TeacherWholeDataForm;
        }(Serenity.PrefixedContext));
        IssuedDeclarationPlan.TeacherWholeDataForm = TeacherWholeDataForm;
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var TeacherWholeDataRow;
        (function (TeacherWholeDataRow) {
            TeacherWholeDataRow.idProperty = 'DeclarationId';
            TeacherWholeDataRow.nameProperty = 'TermCode';
            TeacherWholeDataRow.localTextPrefix = 'IssuedDeclarationPlan.TeacherWholeData';
        })(TeacherWholeDataRow = IssuedDeclarationPlan.TeacherWholeDataRow || (IssuedDeclarationPlan.TeacherWholeDataRow = {}));
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var TeacherWholeDataService;
        (function (TeacherWholeDataService) {
            TeacherWholeDataService.baseUrl = 'IssuedDeclarationPlan/TeacherWholeData';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TeacherWholeDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(TeacherWholeDataService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TeacherWholeDataService = IssuedDeclarationPlan.TeacherWholeDataService || (IssuedDeclarationPlan.TeacherWholeDataService = {}));
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var CourseMessageForm = /** @class */ (function (_super) {
            __extends(CourseMessageForm, _super);
            function CourseMessageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CourseMessageForm.init) {
                    CourseMessageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CourseMessageForm, [
                        'CourseId', w0,
                        'CourseCode', w0,
                        'CourseName', w0
                    ]);
                }
                return _this;
            }
            CourseMessageForm.formKey = 'MaintainDeclarationPlan.CourseMessage';
            return CourseMessageForm;
        }(Serenity.PrefixedContext));
        MaintainDeclarationPlan.CourseMessageForm = CourseMessageForm;
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var CourseMessageRow;
        (function (CourseMessageRow) {
            CourseMessageRow.idProperty = 'CourseNum';
            CourseMessageRow.nameProperty = 'CourseId';
            CourseMessageRow.localTextPrefix = 'MaintainDeclarationPlan.CourseMessage';
        })(CourseMessageRow = MaintainDeclarationPlan.CourseMessageRow || (MaintainDeclarationPlan.CourseMessageRow = {}));
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var CourseMessageService;
        (function (CourseMessageService) {
            CourseMessageService.baseUrl = 'MaintainDeclarationPlan/CourseMessage';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CourseMessageService[x] = function (r, s, o) {
                    return Q.serviceRequest(CourseMessageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CourseMessageService = MaintainDeclarationPlan.CourseMessageService || (MaintainDeclarationPlan.CourseMessageService = {}));
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var StudentWholeDataForm = /** @class */ (function (_super) {
            __extends(StudentWholeDataForm, _super);
            function StudentWholeDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StudentWholeDataForm.init) {
                    StudentWholeDataForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(StudentWholeDataForm, [
                        'TermCode', w0,
                        'TermName', w0,
                        'BatchId', w0,
                        'SchoolId', w0,
                        'SchoolName', w1,
                        'DepartmentId', w0,
                        'DepartmentName', w1,
                        'EducationalType', w0,
                        'TextbookNum2', w2,
                        'ApprovedAmount', w2,
                        'Priority', w0,
                        'Phone', w0,
                        'CheckState', w0,
                        'Remarks', w0,
                        'ClassName', w0,
                        'ClassSize', w0,
                        'DataSign', w0,
                        'CourseNum', w2
                    ]);
                }
                return _this;
            }
            StudentWholeDataForm.formKey = 'MaintainDeclarationPlan.StudentWholeData';
            return StudentWholeDataForm;
        }(Serenity.PrefixedContext));
        MaintainDeclarationPlan.StudentWholeDataForm = StudentWholeDataForm;
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var StudentWholeDataRow;
        (function (StudentWholeDataRow) {
            StudentWholeDataRow.idProperty = 'DeclarationId';
            StudentWholeDataRow.nameProperty = 'TermCode';
            StudentWholeDataRow.localTextPrefix = 'MaintainDeclarationPlan.StudentWholeData';
        })(StudentWholeDataRow = MaintainDeclarationPlan.StudentWholeDataRow || (MaintainDeclarationPlan.StudentWholeDataRow = {}));
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var StudentWholeDataService;
        (function (StudentWholeDataService) {
            StudentWholeDataService.baseUrl = 'MaintainDeclarationPlan/StudentWholeData';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StudentWholeDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(StudentWholeDataService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StudentWholeDataService = MaintainDeclarationPlan.StudentWholeDataService || (MaintainDeclarationPlan.StudentWholeDataService = {}));
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var TeacherWholeDataForm = /** @class */ (function (_super) {
            __extends(TeacherWholeDataForm, _super);
            function TeacherWholeDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TeacherWholeDataForm.init) {
                    TeacherWholeDataForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(TeacherWholeDataForm, [
                        'TermCode', w0,
                        'TermName', w0,
                        'BatchId', w0,
                        'SchoolId', w0,
                        'SchoolName', w1,
                        'DepartmentId', w0,
                        'DepartmentName', w1,
                        'EducationalType', w0,
                        'TextbookNum2', w2,
                        'ApprovedAmount', w2,
                        'Priority', w0,
                        'Phone', w0,
                        'Remarks', w0,
                        'CheckState', w0,
                        'DataSign', w0,
                        'CourseNum', w2
                    ]);
                }
                return _this;
            }
            TeacherWholeDataForm.formKey = 'MaintainDeclarationPlan.TeacherWholeData';
            return TeacherWholeDataForm;
        }(Serenity.PrefixedContext));
        MaintainDeclarationPlan.TeacherWholeDataForm = TeacherWholeDataForm;
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var TeacherWholeDataRow;
        (function (TeacherWholeDataRow) {
            TeacherWholeDataRow.idProperty = 'DeclarationId';
            TeacherWholeDataRow.nameProperty = 'TermCode';
            TeacherWholeDataRow.localTextPrefix = 'MaintainDeclarationPlan.TeacherWholeData';
        })(TeacherWholeDataRow = MaintainDeclarationPlan.TeacherWholeDataRow || (MaintainDeclarationPlan.TeacherWholeDataRow = {}));
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var TeacherWholeDataService;
        (function (TeacherWholeDataService) {
            TeacherWholeDataService.baseUrl = 'MaintainDeclarationPlan/TeacherWholeData';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TeacherWholeDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(TeacherWholeDataService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TeacherWholeDataService = MaintainDeclarationPlan.TeacherWholeDataService || (MaintainDeclarationPlan.TeacherWholeDataService = {}));
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var TextbookMessageForm = /** @class */ (function (_super) {
            __extends(TextbookMessageForm, _super);
            function TextbookMessageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TextbookMessageForm.init) {
                    TextbookMessageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(TextbookMessageForm, [
                        'TextbookId', w0,
                        'TextbookNum', w0,
                        'Isbn', w0,
                        'TextbookName', w0,
                        'Press', w0,
                        'Author', w0,
                        'Edition', w0,
                        'PrintingCount', w0,
                        'Price', w0,
                        'TextbookType', w0,
                        'Translator', w0,
                        'Language', w0,
                        'Page', w1,
                        'Summary', w0,
                        'Catalog', w0,
                        'IsSelfCompile', w0
                    ]);
                }
                return _this;
            }
            TextbookMessageForm.formKey = 'MaintainDeclarationPlan.TextbookMessage';
            return TextbookMessageForm;
        }(Serenity.PrefixedContext));
        MaintainDeclarationPlan.TextbookMessageForm = TextbookMessageForm;
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var TextbookMessageRow;
        (function (TextbookMessageRow) {
            TextbookMessageRow.idProperty = 'TextbookNum2';
            TextbookMessageRow.nameProperty = 'TextbookId';
            TextbookMessageRow.localTextPrefix = 'MaintainDeclarationPlan.TextbookMessage';
        })(TextbookMessageRow = MaintainDeclarationPlan.TextbookMessageRow || (MaintainDeclarationPlan.TextbookMessageRow = {}));
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var TextbookMessageService;
        (function (TextbookMessageService) {
            TextbookMessageService.baseUrl = 'MaintainDeclarationPlan/TextbookMessage';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TextbookMessageService[x] = function (r, s, o) {
                    return Q.serviceRequest(TextbookMessageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TextbookMessageService = MaintainDeclarationPlan.TextbookMessageService || (MaintainDeclarationPlan.TextbookMessageService = {}));
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = TbMis.Membership || (TbMis.Membership = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = TbMis.Membership || (TbMis.Membership = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = TbMis.Membership || (TbMis.Membership = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = TbMis.Membership || (TbMis.Membership = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = TbMis.Membership || (TbMis.Membership = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var TextBookInfo;
    (function (TextBookInfo) {
        var TextbookForm = /** @class */ (function (_super) {
            __extends(TextbookForm, _super);
            function TextbookForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TextbookForm.init) {
                    TextbookForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(TextbookForm, [
                        'TextbookId', w0,
                        'TextbookNum', w0,
                        'Isbn', w0,
                        'TextbookName', w0,
                        'Press', w0,
                        'Author', w0,
                        'Edition', w0,
                        'PrintingCount', w0,
                        'Price', w0,
                        'TextbookType', w0,
                        'Translator', w0,
                        'Language', w0,
                        'Page', w1,
                        'Summary', w0,
                        'Catalog', w0,
                        'IsSelfCompile', w0
                    ]);
                }
                return _this;
            }
            TextbookForm.formKey = 'TextBookInfo.Textbook';
            return TextbookForm;
        }(Serenity.PrefixedContext));
        TextBookInfo.TextbookForm = TextbookForm;
    })(TextBookInfo = TbMis.TextBookInfo || (TbMis.TextBookInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var TextBookInfo;
    (function (TextBookInfo) {
        var TextbookMessageForm = /** @class */ (function (_super) {
            __extends(TextbookMessageForm, _super);
            function TextbookMessageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TextbookMessageForm.init) {
                    TextbookMessageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(TextbookMessageForm, [
                        'TextbookId', w0,
                        'TextbookNum', w0,
                        'Isbn', w0,
                        'TextbookName', w0,
                        'Press', w0,
                        'Author', w0,
                        'Edition', w0,
                        'PrintingCount', w0,
                        'Price', w0,
                        'TextbookType', w0,
                        'Translator', w0,
                        'Language', w0,
                        'Page', w1,
                        'Summary', w0,
                        'Catalog', w0,
                        'IsSelfCompile', w0
                    ]);
                }
                return _this;
            }
            TextbookMessageForm.formKey = 'TextBookInfo.TextbookMessage';
            return TextbookMessageForm;
        }(Serenity.PrefixedContext));
        TextBookInfo.TextbookMessageForm = TextbookMessageForm;
    })(TextBookInfo = TbMis.TextBookInfo || (TbMis.TextBookInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var TextBookInfo;
    (function (TextBookInfo) {
        var TextbookMessageRow;
        (function (TextbookMessageRow) {
            TextbookMessageRow.idProperty = 'TextbookNum2';
            TextbookMessageRow.nameProperty = 'TextbookName';
            TextbookMessageRow.localTextPrefix = 'TextBookInfo.TextbookMessage';
            TextbookMessageRow.lookupKey = 'TextBookInfo.TextbookMessage';
            function getLookup() {
                return Q.getLookup('TextBookInfo.TextbookMessage');
            }
            TextbookMessageRow.getLookup = getLookup;
        })(TextbookMessageRow = TextBookInfo.TextbookMessageRow || (TextBookInfo.TextbookMessageRow = {}));
    })(TextBookInfo = TbMis.TextBookInfo || (TbMis.TextBookInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var TextBookInfo;
    (function (TextBookInfo) {
        var TextbookMessageService;
        (function (TextbookMessageService) {
            TextbookMessageService.baseUrl = 'TextBookInfo/TextbookMessage';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TextbookMessageService[x] = function (r, s, o) {
                    return Q.serviceRequest(TextbookMessageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TextbookMessageService = TextBookInfo.TextbookMessageService || (TextBookInfo.TextbookMessageService = {}));
    })(TextBookInfo = TbMis.TextBookInfo || (TbMis.TextBookInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var TextBookInfo;
    (function (TextBookInfo) {
        var TextbookRow;
        (function (TextbookRow) {
            TextbookRow.idProperty = 'TextbookNum2';
            TextbookRow.nameProperty = 'TextbookId';
            TextbookRow.localTextPrefix = 'TextBookInfo.Textbook';
            TextbookRow.lookupKey = 'TextBookInfo.Textbook';
            function getLookup() {
                return Q.getLookup('TextBookInfo.Textbook');
            }
            TextbookRow.getLookup = getLookup;
        })(TextbookRow = TextBookInfo.TextbookRow || (TextBookInfo.TextbookRow = {}));
    })(TextBookInfo = TbMis.TextBookInfo || (TbMis.TextBookInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var TextBookInfo;
    (function (TextBookInfo) {
        var TextbookService;
        (function (TextbookService) {
            TextbookService.baseUrl = 'TextBookInfo/Textbook';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TextbookService[x] = function (r, s, o) {
                    return Q.serviceRequest(TextbookService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TextbookService = TextBookInfo.TextbookService || (TextBookInfo.TextbookService = {}));
    })(TextBookInfo = TbMis.TextBookInfo || (TbMis.TextBookInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = TbMis.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = TbMis.LanguageList || (TbMis.LanguageList = {}));
})(TbMis || (TbMis = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var TbMis;
(function (TbMis) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('TbMis');
        Serenity.EntityDialog.defaultLanguageList = TbMis.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = TbMis.ScriptInitialization || (TbMis.ScriptInitialization = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = TbMis.Administration || (TbMis.Administration = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    TbMis.BasicProgressDialog = BasicProgressDialog;
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new TbMis.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = TbMis.Common || (TbMis.Common = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = TbMis.DialogUtils || (TbMis.DialogUtils = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = TbMis.Common || (TbMis.Common = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = TbMis.Common || (TbMis.Common = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = TbMis.Common || (TbMis.Common = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = TbMis.Common || (TbMis.Common = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    TbMis.StaticTextBlock = StaticTextBlock;
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = TbMis.Common || (TbMis.Common = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = TbMis.Common || (TbMis.Common = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = TbMis.Common || (TbMis.Common = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = TbMis.Common || (TbMis.Common = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = TbMis.Common || (TbMis.Common = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = TbMis.Common || (TbMis.Common = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = TbMis.Common || (TbMis.Common = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = TbMis.Common || (TbMis.Common = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var CourseInfo;
    (function (CourseInfo) {
        var CourseDialog = /** @class */ (function (_super) {
            __extends(CourseDialog, _super);
            function CourseDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CourseInfo.CourseForm(_this.idPrefix);
                return _this;
            }
            CourseDialog.prototype.getFormKey = function () { return CourseInfo.CourseForm.formKey; };
            CourseDialog.prototype.getIdProperty = function () { return CourseInfo.CourseRow.idProperty; };
            CourseDialog.prototype.getLocalTextPrefix = function () { return CourseInfo.CourseRow.localTextPrefix; };
            CourseDialog.prototype.getNameProperty = function () { return CourseInfo.CourseRow.nameProperty; };
            CourseDialog.prototype.getService = function () { return CourseInfo.CourseService.baseUrl; };
            CourseDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return buttons;
            };
            CourseDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                // remove required asterisk (*)
                this.element.find('sup').hide();
                this.deleteButton.hide();
            };
            CourseDialog.prototype.getEntityTitle = function () {
                if (!this.isEditMode()) {
                    return "课程信息";
                }
                else {
                    var entityType = _super.prototype.getEntitySingular.call(this);
                    // get name field value of record this dialog edits
                    var name_1 = this.getEntityNameFieldValue() || "";
                    return 'View ' + entityType + " (" + name_1 + ")";
                }
            };
            CourseDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
            };
            CourseDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CourseDialog);
            return CourseDialog;
        }(Serenity.EntityDialog));
        CourseInfo.CourseDialog = CourseDialog;
    })(CourseInfo = TbMis.CourseInfo || (TbMis.CourseInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var CourseInfo;
    (function (CourseInfo) {
        var CourseGrid = /** @class */ (function (_super) {
            __extends(CourseGrid, _super);
            function CourseGrid(container) {
                return _super.call(this, container) || this;
            }
            CourseGrid.prototype.getColumnsKey = function () { return 'CourseInfo.Course'; };
            CourseGrid.prototype.getDialogType = function () { return CourseInfo.CourseDialog; };
            CourseGrid.prototype.getIdProperty = function () { return CourseInfo.CourseRow.idProperty; };
            CourseGrid.prototype.getLocalTextPrefix = function () { return CourseInfo.CourseRow.localTextPrefix; };
            CourseGrid.prototype.getService = function () { return CourseInfo.CourseService.baseUrl; };
            CourseGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CourseGrid);
            return CourseGrid;
        }(Serenity.EntityGrid));
        CourseInfo.CourseGrid = CourseGrid;
    })(CourseInfo = TbMis.CourseInfo || (TbMis.CourseInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var CourseInfo;
    (function (CourseInfo) {
        var CourseMessageDialog = /** @class */ (function (_super) {
            __extends(CourseMessageDialog, _super);
            function CourseMessageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CourseInfo.CourseMessageForm(_this.idPrefix);
                return _this;
            }
            CourseMessageDialog.prototype.getFormKey = function () { return CourseInfo.CourseMessageForm.formKey; };
            CourseMessageDialog.prototype.getIdProperty = function () { return CourseInfo.CourseMessageRow.idProperty; };
            CourseMessageDialog.prototype.getLocalTextPrefix = function () { return CourseInfo.CourseMessageRow.localTextPrefix; };
            CourseMessageDialog.prototype.getNameProperty = function () { return CourseInfo.CourseMessageRow.nameProperty; };
            CourseMessageDialog.prototype.getService = function () { return CourseInfo.CourseMessageService.baseUrl; };
            CourseMessageDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "delete-button"; }), 1);
                return buttons;
            };
            CourseMessageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CourseMessageDialog);
            return CourseMessageDialog;
        }(Serenity.EntityDialog));
        CourseInfo.CourseMessageDialog = CourseMessageDialog;
    })(CourseInfo = TbMis.CourseInfo || (TbMis.CourseInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var CourseInfo;
    (function (CourseInfo) {
        var CourseMessageGrid = /** @class */ (function (_super) {
            __extends(CourseMessageGrid, _super);
            function CourseMessageGrid(container) {
                return _super.call(this, container) || this;
            }
            CourseMessageGrid.prototype.getColumnsKey = function () { return 'CourseInfo.CourseMessage'; };
            CourseMessageGrid.prototype.getDialogType = function () { return CourseInfo.CourseMessageDialog; };
            CourseMessageGrid.prototype.getIdProperty = function () { return CourseInfo.CourseMessageRow.idProperty; };
            CourseMessageGrid.prototype.getLocalTextPrefix = function () { return CourseInfo.CourseMessageRow.localTextPrefix; };
            CourseMessageGrid.prototype.getService = function () { return CourseInfo.CourseMessageService.baseUrl; };
            CourseMessageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CourseMessageGrid);
            return CourseMessageGrid;
        }(Serenity.EntityGrid));
        CourseInfo.CourseMessageGrid = CourseMessageGrid;
    })(CourseInfo = TbMis.CourseInfo || (TbMis.CourseInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var StudentInfoExcelImportDialog = /** @class */ (function (_super) {
            __extends(StudentInfoExcelImportDialog, _super);
            function StudentInfoExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new ImportDeclarationPlan.StudentInfoExcelImportForm(_this.idPrefix);
                return _this;
            }
            StudentInfoExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: '导入',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("请选择文件!");
                                return;
                            }
                            ImportDeclarationPlan.StudentInfoExcelImportService.StudentExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('导入: ' + (response.Inserted || 0) +
                                    ', 更新: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: '取消',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            StudentInfoExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentInfoExcelImportDialog);
            return StudentInfoExcelImportDialog;
        }(Serenity.PropertyDialog));
        ImportDeclarationPlan.StudentInfoExcelImportDialog = StudentInfoExcelImportDialog;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var StudentWholeDataDialog = /** @class */ (function (_super) {
            __extends(StudentWholeDataDialog, _super);
            function StudentWholeDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new ImportDeclarationPlan.StudentWholeDataForm(_this.idPrefix);
                return _this;
            }
            StudentWholeDataDialog.prototype.getFormKey = function () { return ImportDeclarationPlan.StudentWholeDataForm.formKey; };
            StudentWholeDataDialog.prototype.getIdProperty = function () { return ImportDeclarationPlan.StudentWholeDataRow.idProperty; };
            StudentWholeDataDialog.prototype.getLocalTextPrefix = function () { return ImportDeclarationPlan.StudentWholeDataRow.localTextPrefix; };
            StudentWholeDataDialog.prototype.getNameProperty = function () { return ImportDeclarationPlan.StudentWholeDataRow.nameProperty; };
            StudentWholeDataDialog.prototype.getService = function () { return ImportDeclarationPlan.StudentWholeDataService.baseUrl; };
            StudentWholeDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentWholeDataDialog);
            return StudentWholeDataDialog;
        }(Serenity.EntityDialog));
        ImportDeclarationPlan.StudentWholeDataDialog = StudentWholeDataDialog;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var StudentWholeDataGrid = /** @class */ (function (_super) {
            __extends(StudentWholeDataGrid, _super);
            function StudentWholeDataGrid(container) {
                return _super.call(this, container) || this;
            }
            StudentWholeDataGrid.prototype.getColumnsKey = function () { return 'ImportDeclarationPlan.StudentWholeData'; };
            StudentWholeDataGrid.prototype.getDialogType = function () { return ImportDeclarationPlan.StudentWholeDataDialog; };
            StudentWholeDataGrid.prototype.getIdProperty = function () { return ImportDeclarationPlan.StudentWholeDataRow.idProperty; };
            StudentWholeDataGrid.prototype.getLocalTextPrefix = function () { return ImportDeclarationPlan.StudentWholeDataRow.localTextPrefix; };
            StudentWholeDataGrid.prototype.getService = function () { return ImportDeclarationPlan.StudentWholeDataService.baseUrl; };
            /**
            * get a button of ExcelImport.
            */
            StudentWholeDataGrid.prototype.getButtons = function () {
                var _this = this;
                // call base method to get list of buttons
                var buttons = _super.prototype.getButtons.call(this);
                // add our import button
                buttons.push({
                    title: '导入',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new ImportDeclarationPlan.StudentInfoExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            /**
             * get a column of delete buttons
             */
            StudentWholeDataGrid.prototype.getColumns = function () {
                var column = _super.prototype.getColumns.call(this);
                column.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return column;
            };
            StudentWholeDataGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            ImportDeclarationPlan.StudentWholeDataService.Delete({
                                EntityId: item.DeclarationId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            StudentWholeDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentWholeDataGrid);
            return StudentWholeDataGrid;
        }(Serenity.EntityGrid));
        ImportDeclarationPlan.StudentWholeDataGrid = StudentWholeDataGrid;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var TeacherInfoExcelImportDialog = /** @class */ (function (_super) {
            __extends(TeacherInfoExcelImportDialog, _super);
            function TeacherInfoExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new ImportDeclarationPlan.TeacherInfoExcelImportForm(_this.idPrefix);
                return _this;
            }
            TeacherInfoExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: '导入',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("请选择文件!");
                                return;
                            }
                            ImportDeclarationPlan.TeacherInfoExcelImportService.TeacherExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('导入: ' + (response.Inserted || 0) +
                                    ', 更新: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: '取消',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            TeacherInfoExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherInfoExcelImportDialog);
            return TeacherInfoExcelImportDialog;
        }(Serenity.PropertyDialog));
        ImportDeclarationPlan.TeacherInfoExcelImportDialog = TeacherInfoExcelImportDialog;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var TeacherWholeDataDialog = /** @class */ (function (_super) {
            __extends(TeacherWholeDataDialog, _super);
            function TeacherWholeDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new ImportDeclarationPlan.TeacherWholeDataForm(_this.idPrefix);
                return _this;
            }
            TeacherWholeDataDialog.prototype.getFormKey = function () { return ImportDeclarationPlan.TeacherWholeDataForm.formKey; };
            TeacherWholeDataDialog.prototype.getIdProperty = function () { return ImportDeclarationPlan.TeacherWholeDataRow.idProperty; };
            TeacherWholeDataDialog.prototype.getLocalTextPrefix = function () { return ImportDeclarationPlan.TeacherWholeDataRow.localTextPrefix; };
            TeacherWholeDataDialog.prototype.getNameProperty = function () { return ImportDeclarationPlan.TeacherWholeDataRow.nameProperty; };
            TeacherWholeDataDialog.prototype.getService = function () { return ImportDeclarationPlan.TeacherWholeDataService.baseUrl; };
            TeacherWholeDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherWholeDataDialog);
            return TeacherWholeDataDialog;
        }(Serenity.EntityDialog));
        ImportDeclarationPlan.TeacherWholeDataDialog = TeacherWholeDataDialog;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var TeacherWholeDataGrid = /** @class */ (function (_super) {
            __extends(TeacherWholeDataGrid, _super);
            function TeacherWholeDataGrid(container) {
                return _super.call(this, container) || this;
            }
            TeacherWholeDataGrid.prototype.getColumnsKey = function () { return 'ImportDeclarationPlan.TeacherWholeData'; };
            TeacherWholeDataGrid.prototype.getDialogType = function () { return ImportDeclarationPlan.TeacherWholeDataDialog; };
            TeacherWholeDataGrid.prototype.getIdProperty = function () { return ImportDeclarationPlan.TeacherWholeDataRow.idProperty; };
            TeacherWholeDataGrid.prototype.getLocalTextPrefix = function () { return ImportDeclarationPlan.TeacherWholeDataRow.localTextPrefix; };
            TeacherWholeDataGrid.prototype.getService = function () { return ImportDeclarationPlan.TeacherWholeDataService.baseUrl; };
            /**
            * get a button of ExcelImport.
            */
            TeacherWholeDataGrid.prototype.getButtons = function () {
                var _this = this;
                // call base method to get list of buttons
                var buttons = _super.prototype.getButtons.call(this);
                // add our import button
                buttons.push({
                    title: '导入',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new ImportDeclarationPlan.TeacherInfoExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            /**
             * get a column of delete buttons
             */
            TeacherWholeDataGrid.prototype.getColumns = function () {
                var column = _super.prototype.getColumns.call(this);
                column.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return column;
            };
            TeacherWholeDataGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            ImportDeclarationPlan.TeacherWholeDataService.Delete({
                                EntityId: item.DeclarationId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            TeacherWholeDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherWholeDataGrid);
            return TeacherWholeDataGrid;
        }(Serenity.EntityGrid));
        ImportDeclarationPlan.TeacherWholeDataGrid = TeacherWholeDataGrid;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var BooksellerDialog = /** @class */ (function (_super) {
            __extends(BooksellerDialog, _super);
            function BooksellerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new ExportSubscriptionPlan.BooksellerForm(_this.idPrefix);
                return _this;
            }
            BooksellerDialog.prototype.getFormKey = function () { return ExportSubscriptionPlan.BooksellerForm.formKey; };
            BooksellerDialog.prototype.getIdProperty = function () { return ExportSubscriptionPlan.BooksellerRow.idProperty; };
            BooksellerDialog.prototype.getLocalTextPrefix = function () { return ExportSubscriptionPlan.BooksellerRow.localTextPrefix; };
            BooksellerDialog.prototype.getNameProperty = function () { return ExportSubscriptionPlan.BooksellerRow.nameProperty; };
            BooksellerDialog.prototype.getService = function () { return ExportSubscriptionPlan.BooksellerService.baseUrl; };
            BooksellerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BooksellerDialog);
            return BooksellerDialog;
        }(Serenity.EntityDialog));
        ExportSubscriptionPlan.BooksellerDialog = BooksellerDialog;
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var BooksellerGrid = /** @class */ (function (_super) {
            __extends(BooksellerGrid, _super);
            function BooksellerGrid(container) {
                return _super.call(this, container) || this;
            }
            BooksellerGrid.prototype.getColumnsKey = function () { return 'ExportSubscriptionPlan.Bookseller'; };
            BooksellerGrid.prototype.getDialogType = function () { return ExportSubscriptionPlan.BooksellerDialog; };
            BooksellerGrid.prototype.getIdProperty = function () { return ExportSubscriptionPlan.BooksellerRow.idProperty; };
            BooksellerGrid.prototype.getLocalTextPrefix = function () { return ExportSubscriptionPlan.BooksellerRow.localTextPrefix; };
            BooksellerGrid.prototype.getService = function () { return ExportSubscriptionPlan.BooksellerService.baseUrl; };
            BooksellerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BooksellerGrid);
            return BooksellerGrid;
        }(Serenity.EntityGrid));
        ExportSubscriptionPlan.BooksellerGrid = BooksellerGrid;
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var StudentDeclarationBooksellerDialog = /** @class */ (function (_super) {
            __extends(StudentDeclarationBooksellerDialog, _super);
            function StudentDeclarationBooksellerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new ExportSubscriptionPlan.StudentDeclarationBooksellerForm(_this.idPrefix);
                return _this;
            }
            StudentDeclarationBooksellerDialog.prototype.getFormKey = function () { return ExportSubscriptionPlan.StudentDeclarationBooksellerForm.formKey; };
            StudentDeclarationBooksellerDialog.prototype.getIdProperty = function () { return ExportSubscriptionPlan.StudentDeclarationBooksellerRow.idProperty; };
            StudentDeclarationBooksellerDialog.prototype.getLocalTextPrefix = function () { return ExportSubscriptionPlan.StudentDeclarationBooksellerRow.localTextPrefix; };
            StudentDeclarationBooksellerDialog.prototype.getNameProperty = function () { return ExportSubscriptionPlan.StudentDeclarationBooksellerRow.nameProperty; };
            StudentDeclarationBooksellerDialog.prototype.getService = function () { return ExportSubscriptionPlan.StudentDeclarationBooksellerService.baseUrl; };
            StudentDeclarationBooksellerDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return buttons;
            };
            StudentDeclarationBooksellerDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                this.element.find('sup').hide();
                this.deleteButton.hide();
            };
            StudentDeclarationBooksellerDialog.prototype.getEntityTitle = function () {
                if (!this.isEditMode()) {
                    return "How did you manage to open this dialog in new record mode?";
                }
                else {
                    var entityType = _super.prototype.getEntitySingular.call(this);
                    var name_2 = this.getEntityNameFieldValue() || "";
                    return 'View ' + entityType + " (" + name_2 + ")";
                }
            };
            StudentDeclarationBooksellerDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
            };
            StudentDeclarationBooksellerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentDeclarationBooksellerDialog);
            return StudentDeclarationBooksellerDialog;
        }(Serenity.EntityDialog));
        ExportSubscriptionPlan.StudentDeclarationBooksellerDialog = StudentDeclarationBooksellerDialog;
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var StudentDeclarationBooksellerGrid = /** @class */ (function (_super) {
            __extends(StudentDeclarationBooksellerGrid, _super);
            function StudentDeclarationBooksellerGrid(container) {
                return _super.call(this, container) || this;
            }
            StudentDeclarationBooksellerGrid.prototype.getColumnsKey = function () { return 'ExportSubscriptionPlan.StudentDeclarationBookseller'; };
            StudentDeclarationBooksellerGrid.prototype.getDialogType = function () { return ExportSubscriptionPlan.StudentDeclarationBooksellerDialog; };
            StudentDeclarationBooksellerGrid.prototype.getIdProperty = function () { return ExportSubscriptionPlan.StudentDeclarationBooksellerRow.idProperty; };
            StudentDeclarationBooksellerGrid.prototype.getLocalTextPrefix = function () { return ExportSubscriptionPlan.StudentDeclarationBooksellerRow.localTextPrefix; };
            StudentDeclarationBooksellerGrid.prototype.getService = function () { return ExportSubscriptionPlan.StudentDeclarationBooksellerService.baseUrl; };
            StudentDeclarationBooksellerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(TbMis.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: ExportSubscriptionPlan.StudentDeclarationBooksellerService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            StudentDeclarationBooksellerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentDeclarationBooksellerGrid);
            return StudentDeclarationBooksellerGrid;
        }(Serenity.EntityGrid));
        ExportSubscriptionPlan.StudentDeclarationBooksellerGrid = StudentDeclarationBooksellerGrid;
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var StudentWholeDataDialog = /** @class */ (function (_super) {
            __extends(StudentWholeDataDialog, _super);
            function StudentWholeDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new ExportSubscriptionPlan.StudentWholeDataForm(_this.idPrefix);
                return _this;
            }
            StudentWholeDataDialog.prototype.getFormKey = function () { return ExportSubscriptionPlan.StudentWholeDataForm.formKey; };
            StudentWholeDataDialog.prototype.getIdProperty = function () { return ExportSubscriptionPlan.StudentWholeDataRow.idProperty; };
            StudentWholeDataDialog.prototype.getLocalTextPrefix = function () { return ExportSubscriptionPlan.StudentWholeDataRow.localTextPrefix; };
            StudentWholeDataDialog.prototype.getNameProperty = function () { return ExportSubscriptionPlan.StudentWholeDataRow.nameProperty; };
            StudentWholeDataDialog.prototype.getService = function () { return ExportSubscriptionPlan.StudentWholeDataService.baseUrl; };
            StudentWholeDataDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return buttons;
            };
            StudentWholeDataDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                this.element.find('sup').hide();
                this.deleteButton.hide();
            };
            StudentWholeDataDialog.prototype.getEntityTitle = function () {
                if (!this.isEditMode()) {
                    return "How did you manage to open this dialog in new record mode?";
                }
                else {
                    var entityType = _super.prototype.getEntitySingular.call(this);
                    var name_3 = this.getEntityNameFieldValue() || "";
                    return 'View ' + entityType + " (" + name_3 + ")";
                }
            };
            StudentWholeDataDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
            };
            StudentWholeDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentWholeDataDialog);
            return StudentWholeDataDialog;
        }(Serenity.EntityDialog));
        ExportSubscriptionPlan.StudentWholeDataDialog = StudentWholeDataDialog;
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var StudentWholeDataGrid = /** @class */ (function (_super) {
            __extends(StudentWholeDataGrid, _super);
            function StudentWholeDataGrid(container) {
                return _super.call(this, container) || this;
            }
            StudentWholeDataGrid.prototype.getColumnsKey = function () { return 'ExportSubscriptionPlan.StudentWholeData'; };
            StudentWholeDataGrid.prototype.getDialogType = function () { return ExportSubscriptionPlan.StudentWholeDataDialog; };
            StudentWholeDataGrid.prototype.getIdProperty = function () { return ExportSubscriptionPlan.StudentWholeDataRow.idProperty; };
            StudentWholeDataGrid.prototype.getLocalTextPrefix = function () { return ExportSubscriptionPlan.StudentWholeDataRow.localTextPrefix; };
            StudentWholeDataGrid.prototype.getService = function () { return ExportSubscriptionPlan.StudentWholeDataService.baseUrl; };
            StudentWholeDataGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(TbMis.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: ExportSubscriptionPlan.TeacherWholeDataService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            StudentWholeDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentWholeDataGrid);
            return StudentWholeDataGrid;
        }(Serenity.EntityGrid));
        ExportSubscriptionPlan.StudentWholeDataGrid = StudentWholeDataGrid;
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var TeacherDeclarationBooksellerDialog = /** @class */ (function (_super) {
            __extends(TeacherDeclarationBooksellerDialog, _super);
            function TeacherDeclarationBooksellerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new ExportSubscriptionPlan.TeacherDeclarationBooksellerForm(_this.idPrefix);
                return _this;
            }
            TeacherDeclarationBooksellerDialog.prototype.getFormKey = function () { return ExportSubscriptionPlan.TeacherDeclarationBooksellerForm.formKey; };
            TeacherDeclarationBooksellerDialog.prototype.getIdProperty = function () { return ExportSubscriptionPlan.TeacherDeclarationBooksellerRow.idProperty; };
            TeacherDeclarationBooksellerDialog.prototype.getLocalTextPrefix = function () { return ExportSubscriptionPlan.TeacherDeclarationBooksellerRow.localTextPrefix; };
            TeacherDeclarationBooksellerDialog.prototype.getNameProperty = function () { return ExportSubscriptionPlan.TeacherDeclarationBooksellerRow.nameProperty; };
            TeacherDeclarationBooksellerDialog.prototype.getService = function () { return ExportSubscriptionPlan.TeacherDeclarationBooksellerService.baseUrl; };
            TeacherDeclarationBooksellerDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return buttons;
            };
            TeacherDeclarationBooksellerDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                this.element.find('sup').hide();
                this.deleteButton.hide();
            };
            TeacherDeclarationBooksellerDialog.prototype.getEntityTitle = function () {
                if (!this.isEditMode()) {
                    return "How did you manage to open this dialog in new record mode?";
                }
                else {
                    var entityType = _super.prototype.getEntitySingular.call(this);
                    var name_4 = this.getEntityNameFieldValue() || "";
                    return 'View ' + entityType + " (" + name_4 + ")";
                }
            };
            TeacherDeclarationBooksellerDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
            };
            TeacherDeclarationBooksellerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherDeclarationBooksellerDialog);
            return TeacherDeclarationBooksellerDialog;
        }(Serenity.EntityDialog));
        ExportSubscriptionPlan.TeacherDeclarationBooksellerDialog = TeacherDeclarationBooksellerDialog;
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var TeacherDeclarationBooksellerGrid = /** @class */ (function (_super) {
            __extends(TeacherDeclarationBooksellerGrid, _super);
            function TeacherDeclarationBooksellerGrid(container) {
                return _super.call(this, container) || this;
            }
            TeacherDeclarationBooksellerGrid.prototype.getColumnsKey = function () { return 'ExportSubscriptionPlan.TeacherDeclarationBookseller'; };
            TeacherDeclarationBooksellerGrid.prototype.getDialogType = function () { return ExportSubscriptionPlan.TeacherDeclarationBooksellerDialog; };
            TeacherDeclarationBooksellerGrid.prototype.getIdProperty = function () { return ExportSubscriptionPlan.TeacherDeclarationBooksellerRow.idProperty; };
            TeacherDeclarationBooksellerGrid.prototype.getLocalTextPrefix = function () { return ExportSubscriptionPlan.TeacherDeclarationBooksellerRow.localTextPrefix; };
            TeacherDeclarationBooksellerGrid.prototype.getService = function () { return ExportSubscriptionPlan.TeacherDeclarationBooksellerService.baseUrl; };
            TeacherDeclarationBooksellerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(TbMis.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: ExportSubscriptionPlan.TeacherDeclarationBooksellerService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            TeacherDeclarationBooksellerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherDeclarationBooksellerGrid);
            return TeacherDeclarationBooksellerGrid;
        }(Serenity.EntityGrid));
        ExportSubscriptionPlan.TeacherDeclarationBooksellerGrid = TeacherDeclarationBooksellerGrid;
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var TeacherWholeDataDialog = /** @class */ (function (_super) {
            __extends(TeacherWholeDataDialog, _super);
            function TeacherWholeDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new ExportSubscriptionPlan.TeacherWholeDataForm(_this.idPrefix);
                return _this;
            }
            TeacherWholeDataDialog.prototype.getFormKey = function () { return ExportSubscriptionPlan.TeacherWholeDataForm.formKey; };
            TeacherWholeDataDialog.prototype.getIdProperty = function () { return ExportSubscriptionPlan.TeacherWholeDataRow.idProperty; };
            TeacherWholeDataDialog.prototype.getLocalTextPrefix = function () { return ExportSubscriptionPlan.TeacherWholeDataRow.localTextPrefix; };
            TeacherWholeDataDialog.prototype.getNameProperty = function () { return ExportSubscriptionPlan.TeacherWholeDataRow.nameProperty; };
            TeacherWholeDataDialog.prototype.getService = function () { return ExportSubscriptionPlan.TeacherWholeDataService.baseUrl; };
            TeacherWholeDataDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return buttons;
            };
            TeacherWholeDataDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                this.element.find('sup').hide();
                this.deleteButton.hide();
            };
            TeacherWholeDataDialog.prototype.getEntityTitle = function () {
                if (!this.isEditMode()) {
                    return "How did you manage to open this dialog in new record mode?";
                }
                else {
                    var entityType = _super.prototype.getEntitySingular.call(this);
                    var name_5 = this.getEntityNameFieldValue() || "";
                    return 'View ' + entityType + " (" + name_5 + ")";
                }
            };
            TeacherWholeDataDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
            };
            TeacherWholeDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherWholeDataDialog);
            return TeacherWholeDataDialog;
        }(Serenity.EntityDialog));
        ExportSubscriptionPlan.TeacherWholeDataDialog = TeacherWholeDataDialog;
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ExportSubscriptionPlan;
    (function (ExportSubscriptionPlan) {
        var TeacherWholeDataGrid = /** @class */ (function (_super) {
            __extends(TeacherWholeDataGrid, _super);
            function TeacherWholeDataGrid(container) {
                return _super.call(this, container) || this;
            }
            TeacherWholeDataGrid.prototype.getColumnsKey = function () { return 'ExportSubscriptionPlan.TeacherWholeData'; };
            TeacherWholeDataGrid.prototype.getDialogType = function () { return ExportSubscriptionPlan.TeacherWholeDataDialog; };
            TeacherWholeDataGrid.prototype.getIdProperty = function () { return ExportSubscriptionPlan.TeacherWholeDataRow.idProperty; };
            TeacherWholeDataGrid.prototype.getLocalTextPrefix = function () { return ExportSubscriptionPlan.TeacherWholeDataRow.localTextPrefix; };
            TeacherWholeDataGrid.prototype.getService = function () { return ExportSubscriptionPlan.TeacherWholeDataService.baseUrl; };
            TeacherWholeDataGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(TbMis.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: ExportSubscriptionPlan.TeacherWholeDataService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            TeacherWholeDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherWholeDataGrid);
            return TeacherWholeDataGrid;
        }(Serenity.EntityGrid));
        ExportSubscriptionPlan.TeacherWholeDataGrid = TeacherWholeDataGrid;
    })(ExportSubscriptionPlan = TbMis.ExportSubscriptionPlan || (TbMis.ExportSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var FeedbackSubscriptionPlan;
    (function (FeedbackSubscriptionPlan) {
        var StudentDeclarationBooksellerDialog = /** @class */ (function (_super) {
            __extends(StudentDeclarationBooksellerDialog, _super);
            function StudentDeclarationBooksellerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new FeedbackSubscriptionPlan.StudentDeclarationBooksellerForm(_this.idPrefix);
                return _this;
            }
            StudentDeclarationBooksellerDialog.prototype.getFormKey = function () { return FeedbackSubscriptionPlan.StudentDeclarationBooksellerForm.formKey; };
            StudentDeclarationBooksellerDialog.prototype.getIdProperty = function () { return FeedbackSubscriptionPlan.StudentDeclarationBooksellerRow.idProperty; };
            StudentDeclarationBooksellerDialog.prototype.getLocalTextPrefix = function () { return FeedbackSubscriptionPlan.StudentDeclarationBooksellerRow.localTextPrefix; };
            StudentDeclarationBooksellerDialog.prototype.getNameProperty = function () { return FeedbackSubscriptionPlan.StudentDeclarationBooksellerRow.nameProperty; };
            StudentDeclarationBooksellerDialog.prototype.getService = function () { return FeedbackSubscriptionPlan.StudentDeclarationBooksellerService.baseUrl; };
            StudentDeclarationBooksellerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentDeclarationBooksellerDialog);
            return StudentDeclarationBooksellerDialog;
        }(Serenity.EntityDialog));
        FeedbackSubscriptionPlan.StudentDeclarationBooksellerDialog = StudentDeclarationBooksellerDialog;
    })(FeedbackSubscriptionPlan = TbMis.FeedbackSubscriptionPlan || (TbMis.FeedbackSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var FeedbackSubscriptionPlan;
    (function (FeedbackSubscriptionPlan) {
        var StudentDeclarationBooksellerGrid = /** @class */ (function (_super) {
            __extends(StudentDeclarationBooksellerGrid, _super);
            function StudentDeclarationBooksellerGrid(container) {
                return _super.call(this, container) || this;
            }
            StudentDeclarationBooksellerGrid.prototype.getColumnsKey = function () { return 'FeedbackSubscriptionPlan.StudentDeclarationBookseller'; };
            StudentDeclarationBooksellerGrid.prototype.getDialogType = function () { return FeedbackSubscriptionPlan.StudentDeclarationBooksellerDialog; };
            StudentDeclarationBooksellerGrid.prototype.getIdProperty = function () { return FeedbackSubscriptionPlan.StudentDeclarationBooksellerRow.idProperty; };
            StudentDeclarationBooksellerGrid.prototype.getLocalTextPrefix = function () { return FeedbackSubscriptionPlan.StudentDeclarationBooksellerRow.localTextPrefix; };
            StudentDeclarationBooksellerGrid.prototype.getService = function () { return FeedbackSubscriptionPlan.StudentDeclarationBooksellerService.baseUrl; };
            StudentDeclarationBooksellerGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            StudentDeclarationBooksellerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentDeclarationBooksellerGrid);
            return StudentDeclarationBooksellerGrid;
        }(Serenity.EntityGrid));
        FeedbackSubscriptionPlan.StudentDeclarationBooksellerGrid = StudentDeclarationBooksellerGrid;
    })(FeedbackSubscriptionPlan = TbMis.FeedbackSubscriptionPlan || (TbMis.FeedbackSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var FeedbackSubscriptionPlan;
    (function (FeedbackSubscriptionPlan) {
        var TeacherDeclarationBooksellerDialog = /** @class */ (function (_super) {
            __extends(TeacherDeclarationBooksellerDialog, _super);
            function TeacherDeclarationBooksellerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new FeedbackSubscriptionPlan.TeacherDeclarationBooksellerForm(_this.idPrefix);
                return _this;
            }
            TeacherDeclarationBooksellerDialog.prototype.getFormKey = function () { return FeedbackSubscriptionPlan.TeacherDeclarationBooksellerForm.formKey; };
            TeacherDeclarationBooksellerDialog.prototype.getIdProperty = function () { return FeedbackSubscriptionPlan.TeacherDeclarationBooksellerRow.idProperty; };
            TeacherDeclarationBooksellerDialog.prototype.getLocalTextPrefix = function () { return FeedbackSubscriptionPlan.TeacherDeclarationBooksellerRow.localTextPrefix; };
            TeacherDeclarationBooksellerDialog.prototype.getNameProperty = function () { return FeedbackSubscriptionPlan.TeacherDeclarationBooksellerRow.nameProperty; };
            TeacherDeclarationBooksellerDialog.prototype.getService = function () { return FeedbackSubscriptionPlan.TeacherDeclarationBooksellerService.baseUrl; };
            TeacherDeclarationBooksellerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherDeclarationBooksellerDialog);
            return TeacherDeclarationBooksellerDialog;
        }(Serenity.EntityDialog));
        FeedbackSubscriptionPlan.TeacherDeclarationBooksellerDialog = TeacherDeclarationBooksellerDialog;
    })(FeedbackSubscriptionPlan = TbMis.FeedbackSubscriptionPlan || (TbMis.FeedbackSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var FeedbackSubscriptionPlan;
    (function (FeedbackSubscriptionPlan) {
        var TeacherDeclarationBooksellerGrid = /** @class */ (function (_super) {
            __extends(TeacherDeclarationBooksellerGrid, _super);
            function TeacherDeclarationBooksellerGrid(container) {
                return _super.call(this, container) || this;
            }
            TeacherDeclarationBooksellerGrid.prototype.getColumnsKey = function () { return 'FeedbackSubscriptionPlan.TeacherDeclarationBookseller'; };
            TeacherDeclarationBooksellerGrid.prototype.getDialogType = function () { return FeedbackSubscriptionPlan.TeacherDeclarationBooksellerDialog; };
            TeacherDeclarationBooksellerGrid.prototype.getIdProperty = function () { return FeedbackSubscriptionPlan.TeacherDeclarationBooksellerRow.idProperty; };
            TeacherDeclarationBooksellerGrid.prototype.getLocalTextPrefix = function () { return FeedbackSubscriptionPlan.TeacherDeclarationBooksellerRow.localTextPrefix; };
            TeacherDeclarationBooksellerGrid.prototype.getService = function () { return FeedbackSubscriptionPlan.TeacherDeclarationBooksellerService.baseUrl; };
            //Add these 
            TeacherDeclarationBooksellerGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            TeacherDeclarationBooksellerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherDeclarationBooksellerGrid);
            return TeacherDeclarationBooksellerGrid;
        }(Serenity.EntityGrid));
        FeedbackSubscriptionPlan.TeacherDeclarationBooksellerGrid = TeacherDeclarationBooksellerGrid;
    })(FeedbackSubscriptionPlan = TbMis.FeedbackSubscriptionPlan || (TbMis.FeedbackSubscriptionPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var StudentInfoExcelImportDialog = /** @class */ (function (_super) {
            __extends(StudentInfoExcelImportDialog, _super);
            function StudentInfoExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new ImportDeclarationPlan.StudentInfoExcelImportForm(_this.idPrefix);
                return _this;
            }
            StudentInfoExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: '导入',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("请选择文件!");
                                return;
                            }
                            ImportDeclarationPlan.StudentInfoExcelImportService.StudentExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('导入: ' + (response.Inserted || 0) +
                                    ', 更新: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: '取消',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            StudentInfoExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentInfoExcelImportDialog);
            return StudentInfoExcelImportDialog;
        }(Serenity.PropertyDialog));
        ImportDeclarationPlan.StudentInfoExcelImportDialog = StudentInfoExcelImportDialog;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var StudentWholeDataDialog = /** @class */ (function (_super) {
            __extends(StudentWholeDataDialog, _super);
            function StudentWholeDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new ImportDeclarationPlan.StudentWholeDataForm(_this.idPrefix);
                return _this;
            }
            StudentWholeDataDialog.prototype.getFormKey = function () { return ImportDeclarationPlan.StudentWholeDataForm.formKey; };
            StudentWholeDataDialog.prototype.getIdProperty = function () { return ImportDeclarationPlan.StudentWholeDataRow.idProperty; };
            StudentWholeDataDialog.prototype.getLocalTextPrefix = function () { return ImportDeclarationPlan.StudentWholeDataRow.localTextPrefix; };
            StudentWholeDataDialog.prototype.getNameProperty = function () { return ImportDeclarationPlan.StudentWholeDataRow.nameProperty; };
            StudentWholeDataDialog.prototype.getService = function () { return ImportDeclarationPlan.StudentWholeDataService.baseUrl; };
            StudentWholeDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentWholeDataDialog);
            return StudentWholeDataDialog;
        }(Serenity.EntityDialog));
        ImportDeclarationPlan.StudentWholeDataDialog = StudentWholeDataDialog;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var StudentWholeDataGrid = /** @class */ (function (_super) {
            __extends(StudentWholeDataGrid, _super);
            function StudentWholeDataGrid(container) {
                return _super.call(this, container) || this;
            }
            StudentWholeDataGrid.prototype.getColumnsKey = function () { return 'ImportDeclarationPlan.StudentWholeData'; };
            StudentWholeDataGrid.prototype.getDialogType = function () { return ImportDeclarationPlan.StudentWholeDataDialog; };
            StudentWholeDataGrid.prototype.getIdProperty = function () { return ImportDeclarationPlan.StudentWholeDataRow.idProperty; };
            StudentWholeDataGrid.prototype.getLocalTextPrefix = function () { return ImportDeclarationPlan.StudentWholeDataRow.localTextPrefix; };
            StudentWholeDataGrid.prototype.getService = function () { return ImportDeclarationPlan.StudentWholeDataService.baseUrl; };
            /**
            * get a button of ExcelImport.
            */
            StudentWholeDataGrid.prototype.getButtons = function () {
                var _this = this;
                // call base method to get list of buttons
                var buttons = _super.prototype.getButtons.call(this);
                // add our import button
                buttons.push({
                    title: '导入',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new ImportDeclarationPlan.StudentInfoExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            /**
             * get a column of delete buttons
             */
            StudentWholeDataGrid.prototype.getColumns = function () {
                var column = _super.prototype.getColumns.call(this);
                column.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return column;
            };
            StudentWholeDataGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            ImportDeclarationPlan.StudentWholeDataService.Delete({
                                EntityId: item.DeclarationId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            StudentWholeDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentWholeDataGrid);
            return StudentWholeDataGrid;
        }(Serenity.EntityGrid));
        ImportDeclarationPlan.StudentWholeDataGrid = StudentWholeDataGrid;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var TeacherInfoExcelImportDialog = /** @class */ (function (_super) {
            __extends(TeacherInfoExcelImportDialog, _super);
            function TeacherInfoExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new ImportDeclarationPlan.TeacherInfoExcelImportForm(_this.idPrefix);
                return _this;
            }
            TeacherInfoExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: '导入',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("请选择文件!");
                                return;
                            }
                            ImportDeclarationPlan.TeacherInfoExcelImportService.TeacherExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('导入: ' + (response.Inserted || 0) +
                                    ', 更新: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: '取消',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            TeacherInfoExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherInfoExcelImportDialog);
            return TeacherInfoExcelImportDialog;
        }(Serenity.PropertyDialog));
        ImportDeclarationPlan.TeacherInfoExcelImportDialog = TeacherInfoExcelImportDialog;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var TeacherWholeDataDialog = /** @class */ (function (_super) {
            __extends(TeacherWholeDataDialog, _super);
            function TeacherWholeDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new ImportDeclarationPlan.TeacherWholeDataForm(_this.idPrefix);
                return _this;
            }
            TeacherWholeDataDialog.prototype.getFormKey = function () { return ImportDeclarationPlan.TeacherWholeDataForm.formKey; };
            TeacherWholeDataDialog.prototype.getIdProperty = function () { return ImportDeclarationPlan.TeacherWholeDataRow.idProperty; };
            TeacherWholeDataDialog.prototype.getLocalTextPrefix = function () { return ImportDeclarationPlan.TeacherWholeDataRow.localTextPrefix; };
            TeacherWholeDataDialog.prototype.getNameProperty = function () { return ImportDeclarationPlan.TeacherWholeDataRow.nameProperty; };
            TeacherWholeDataDialog.prototype.getService = function () { return ImportDeclarationPlan.TeacherWholeDataService.baseUrl; };
            TeacherWholeDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherWholeDataDialog);
            return TeacherWholeDataDialog;
        }(Serenity.EntityDialog));
        ImportDeclarationPlan.TeacherWholeDataDialog = TeacherWholeDataDialog;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var ImportDeclarationPlan;
    (function (ImportDeclarationPlan) {
        var TeacherWholeDataGrid = /** @class */ (function (_super) {
            __extends(TeacherWholeDataGrid, _super);
            function TeacherWholeDataGrid(container) {
                return _super.call(this, container) || this;
            }
            TeacherWholeDataGrid.prototype.getColumnsKey = function () { return 'ImportDeclarationPlan.TeacherWholeData'; };
            TeacherWholeDataGrid.prototype.getDialogType = function () { return ImportDeclarationPlan.TeacherWholeDataDialog; };
            TeacherWholeDataGrid.prototype.getIdProperty = function () { return ImportDeclarationPlan.TeacherWholeDataRow.idProperty; };
            TeacherWholeDataGrid.prototype.getLocalTextPrefix = function () { return ImportDeclarationPlan.TeacherWholeDataRow.localTextPrefix; };
            TeacherWholeDataGrid.prototype.getService = function () { return ImportDeclarationPlan.TeacherWholeDataService.baseUrl; };
            /**
            * get a button of ExcelImport.
            */
            TeacherWholeDataGrid.prototype.getButtons = function () {
                var _this = this;
                // call base method to get list of buttons
                var buttons = _super.prototype.getButtons.call(this);
                // add our import button
                buttons.push({
                    title: '导入',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new ImportDeclarationPlan.TeacherInfoExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            /**
             * get a column of delete buttons
             */
            TeacherWholeDataGrid.prototype.getColumns = function () {
                var column = _super.prototype.getColumns.call(this);
                column.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return column;
            };
            TeacherWholeDataGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            ImportDeclarationPlan.TeacherWholeDataService.Delete({
                                EntityId: item.DeclarationId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            TeacherWholeDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherWholeDataGrid);
            return TeacherWholeDataGrid;
        }(Serenity.EntityGrid));
        ImportDeclarationPlan.TeacherWholeDataGrid = TeacherWholeDataGrid;
    })(ImportDeclarationPlan = TbMis.ImportDeclarationPlan || (TbMis.ImportDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var BooksellerDialog = /** @class */ (function (_super) {
            __extends(BooksellerDialog, _super);
            function BooksellerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new IssuedDeclarationPlan.BooksellerForm(_this.idPrefix);
                return _this;
            }
            BooksellerDialog.prototype.getFormKey = function () { return IssuedDeclarationPlan.BooksellerForm.formKey; };
            BooksellerDialog.prototype.getIdProperty = function () { return IssuedDeclarationPlan.BooksellerRow.idProperty; };
            BooksellerDialog.prototype.getLocalTextPrefix = function () { return IssuedDeclarationPlan.BooksellerRow.localTextPrefix; };
            BooksellerDialog.prototype.getNameProperty = function () { return IssuedDeclarationPlan.BooksellerRow.nameProperty; };
            BooksellerDialog.prototype.getService = function () { return IssuedDeclarationPlan.BooksellerService.baseUrl; };
            BooksellerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BooksellerDialog);
            return BooksellerDialog;
        }(Serenity.EntityDialog));
        IssuedDeclarationPlan.BooksellerDialog = BooksellerDialog;
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var BooksellerGrid = /** @class */ (function (_super) {
            __extends(BooksellerGrid, _super);
            function BooksellerGrid(container) {
                return _super.call(this, container) || this;
            }
            BooksellerGrid.prototype.getColumnsKey = function () { return 'IssuedDeclarationPlan.Bookseller'; };
            BooksellerGrid.prototype.getDialogType = function () { return IssuedDeclarationPlan.BooksellerDialog; };
            BooksellerGrid.prototype.getIdProperty = function () { return IssuedDeclarationPlan.BooksellerRow.idProperty; };
            BooksellerGrid.prototype.getLocalTextPrefix = function () { return IssuedDeclarationPlan.BooksellerRow.localTextPrefix; };
            BooksellerGrid.prototype.getService = function () { return IssuedDeclarationPlan.BooksellerService.baseUrl; };
            BooksellerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BooksellerGrid);
            return BooksellerGrid;
        }(Serenity.EntityGrid));
        IssuedDeclarationPlan.BooksellerGrid = BooksellerGrid;
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var StudentDeclarationBooksellerDialog = /** @class */ (function (_super) {
            __extends(StudentDeclarationBooksellerDialog, _super);
            function StudentDeclarationBooksellerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new IssuedDeclarationPlan.StudentDeclarationBooksellerForm(_this.idPrefix);
                return _this;
            }
            StudentDeclarationBooksellerDialog.prototype.getFormKey = function () { return IssuedDeclarationPlan.StudentDeclarationBooksellerForm.formKey; };
            StudentDeclarationBooksellerDialog.prototype.getIdProperty = function () { return IssuedDeclarationPlan.StudentDeclarationBooksellerRow.idProperty; };
            StudentDeclarationBooksellerDialog.prototype.getLocalTextPrefix = function () { return IssuedDeclarationPlan.StudentDeclarationBooksellerRow.localTextPrefix; };
            StudentDeclarationBooksellerDialog.prototype.getNameProperty = function () { return IssuedDeclarationPlan.StudentDeclarationBooksellerRow.nameProperty; };
            StudentDeclarationBooksellerDialog.prototype.getService = function () { return IssuedDeclarationPlan.StudentDeclarationBooksellerService.baseUrl; };
            StudentDeclarationBooksellerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentDeclarationBooksellerDialog);
            return StudentDeclarationBooksellerDialog;
        }(Serenity.EntityDialog));
        IssuedDeclarationPlan.StudentDeclarationBooksellerDialog = StudentDeclarationBooksellerDialog;
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var StudentDeclarationBooksellerGrid = /** @class */ (function (_super) {
            __extends(StudentDeclarationBooksellerGrid, _super);
            function StudentDeclarationBooksellerGrid(container) {
                return _super.call(this, container) || this;
            }
            StudentDeclarationBooksellerGrid.prototype.getColumnsKey = function () { return 'IssuedDeclarationPlan.StudentDeclarationBookseller'; };
            StudentDeclarationBooksellerGrid.prototype.getDialogType = function () { return IssuedDeclarationPlan.StudentDeclarationBooksellerDialog; };
            StudentDeclarationBooksellerGrid.prototype.getIdProperty = function () { return IssuedDeclarationPlan.StudentDeclarationBooksellerRow.idProperty; };
            StudentDeclarationBooksellerGrid.prototype.getLocalTextPrefix = function () { return IssuedDeclarationPlan.StudentDeclarationBooksellerRow.localTextPrefix; };
            StudentDeclarationBooksellerGrid.prototype.getService = function () { return IssuedDeclarationPlan.StudentDeclarationBooksellerService.baseUrl; };
            StudentDeclarationBooksellerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentDeclarationBooksellerGrid);
            return StudentDeclarationBooksellerGrid;
        }(Serenity.EntityGrid));
        IssuedDeclarationPlan.StudentDeclarationBooksellerGrid = StudentDeclarationBooksellerGrid;
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var StudentWholeDataDialog = /** @class */ (function (_super) {
            __extends(StudentWholeDataDialog, _super);
            function StudentWholeDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new IssuedDeclarationPlan.StudentWholeDataForm(_this.idPrefix);
                return _this;
            }
            StudentWholeDataDialog.prototype.getFormKey = function () { return IssuedDeclarationPlan.StudentWholeDataForm.formKey; };
            StudentWholeDataDialog.prototype.getIdProperty = function () { return IssuedDeclarationPlan.StudentWholeDataRow.idProperty; };
            StudentWholeDataDialog.prototype.getLocalTextPrefix = function () { return IssuedDeclarationPlan.StudentWholeDataRow.localTextPrefix; };
            StudentWholeDataDialog.prototype.getNameProperty = function () { return IssuedDeclarationPlan.StudentWholeDataRow.nameProperty; };
            StudentWholeDataDialog.prototype.getService = function () { return IssuedDeclarationPlan.StudentWholeDataService.baseUrl; };
            StudentWholeDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentWholeDataDialog);
            return StudentWholeDataDialog;
        }(Serenity.EntityDialog));
        IssuedDeclarationPlan.StudentWholeDataDialog = StudentWholeDataDialog;
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var StudentWholeDataGrid = /** @class */ (function (_super) {
            __extends(StudentWholeDataGrid, _super);
            function StudentWholeDataGrid(container) {
                return _super.call(this, container) || this;
            }
            StudentWholeDataGrid.prototype.getColumnsKey = function () { return 'IssuedDeclarationPlan.StudentWholeData'; };
            StudentWholeDataGrid.prototype.getDialogType = function () { return IssuedDeclarationPlan.StudentWholeDataDialog; };
            StudentWholeDataGrid.prototype.getIdProperty = function () { return IssuedDeclarationPlan.StudentWholeDataRow.idProperty; };
            StudentWholeDataGrid.prototype.getLocalTextPrefix = function () { return IssuedDeclarationPlan.StudentWholeDataRow.localTextPrefix; };
            StudentWholeDataGrid.prototype.getService = function () { return IssuedDeclarationPlan.StudentWholeDataService.baseUrl; };
            StudentWholeDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentWholeDataGrid);
            return StudentWholeDataGrid;
        }(Serenity.EntityGrid));
        IssuedDeclarationPlan.StudentWholeDataGrid = StudentWholeDataGrid;
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var TeacherDeclarationBooksellerDialog = /** @class */ (function (_super) {
            __extends(TeacherDeclarationBooksellerDialog, _super);
            function TeacherDeclarationBooksellerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new IssuedDeclarationPlan.TeacherDeclarationBooksellerForm(_this.idPrefix);
                return _this;
            }
            TeacherDeclarationBooksellerDialog.prototype.getFormKey = function () { return IssuedDeclarationPlan.TeacherDeclarationBooksellerForm.formKey; };
            TeacherDeclarationBooksellerDialog.prototype.getIdProperty = function () { return IssuedDeclarationPlan.TeacherDeclarationBooksellerRow.idProperty; };
            TeacherDeclarationBooksellerDialog.prototype.getLocalTextPrefix = function () { return IssuedDeclarationPlan.TeacherDeclarationBooksellerRow.localTextPrefix; };
            TeacherDeclarationBooksellerDialog.prototype.getNameProperty = function () { return IssuedDeclarationPlan.TeacherDeclarationBooksellerRow.nameProperty; };
            TeacherDeclarationBooksellerDialog.prototype.getService = function () { return IssuedDeclarationPlan.TeacherDeclarationBooksellerService.baseUrl; };
            TeacherDeclarationBooksellerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherDeclarationBooksellerDialog);
            return TeacherDeclarationBooksellerDialog;
        }(Serenity.EntityDialog));
        IssuedDeclarationPlan.TeacherDeclarationBooksellerDialog = TeacherDeclarationBooksellerDialog;
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var TeacherDeclarationBooksellerGrid = /** @class */ (function (_super) {
            __extends(TeacherDeclarationBooksellerGrid, _super);
            function TeacherDeclarationBooksellerGrid(container) {
                return _super.call(this, container) || this;
            }
            TeacherDeclarationBooksellerGrid.prototype.getColumnsKey = function () { return 'IssuedDeclarationPlan.TeacherDeclarationBookseller'; };
            TeacherDeclarationBooksellerGrid.prototype.getDialogType = function () { return IssuedDeclarationPlan.TeacherDeclarationBooksellerDialog; };
            TeacherDeclarationBooksellerGrid.prototype.getIdProperty = function () { return IssuedDeclarationPlan.TeacherDeclarationBooksellerRow.idProperty; };
            TeacherDeclarationBooksellerGrid.prototype.getLocalTextPrefix = function () { return IssuedDeclarationPlan.TeacherDeclarationBooksellerRow.localTextPrefix; };
            TeacherDeclarationBooksellerGrid.prototype.getService = function () { return IssuedDeclarationPlan.TeacherDeclarationBooksellerService.baseUrl; };
            TeacherDeclarationBooksellerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherDeclarationBooksellerGrid);
            return TeacherDeclarationBooksellerGrid;
        }(Serenity.EntityGrid));
        IssuedDeclarationPlan.TeacherDeclarationBooksellerGrid = TeacherDeclarationBooksellerGrid;
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var TeacherWholeDataDialog = /** @class */ (function (_super) {
            __extends(TeacherWholeDataDialog, _super);
            function TeacherWholeDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new IssuedDeclarationPlan.TeacherWholeDataForm(_this.idPrefix);
                return _this;
            }
            TeacherWholeDataDialog.prototype.getFormKey = function () { return IssuedDeclarationPlan.TeacherWholeDataForm.formKey; };
            TeacherWholeDataDialog.prototype.getIdProperty = function () { return IssuedDeclarationPlan.TeacherWholeDataRow.idProperty; };
            TeacherWholeDataDialog.prototype.getLocalTextPrefix = function () { return IssuedDeclarationPlan.TeacherWholeDataRow.localTextPrefix; };
            TeacherWholeDataDialog.prototype.getNameProperty = function () { return IssuedDeclarationPlan.TeacherWholeDataRow.nameProperty; };
            TeacherWholeDataDialog.prototype.getService = function () { return IssuedDeclarationPlan.TeacherWholeDataService.baseUrl; };
            TeacherWholeDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherWholeDataDialog);
            return TeacherWholeDataDialog;
        }(Serenity.EntityDialog));
        IssuedDeclarationPlan.TeacherWholeDataDialog = TeacherWholeDataDialog;
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var IssuedDeclarationPlan;
    (function (IssuedDeclarationPlan) {
        var TeacherWholeDataGrid = /** @class */ (function (_super) {
            __extends(TeacherWholeDataGrid, _super);
            function TeacherWholeDataGrid(container) {
                return _super.call(this, container) || this;
            }
            TeacherWholeDataGrid.prototype.getColumnsKey = function () { return 'IssuedDeclarationPlan.TeacherWholeData'; };
            TeacherWholeDataGrid.prototype.getDialogType = function () { return IssuedDeclarationPlan.TeacherWholeDataDialog; };
            TeacherWholeDataGrid.prototype.getIdProperty = function () { return IssuedDeclarationPlan.TeacherWholeDataRow.idProperty; };
            TeacherWholeDataGrid.prototype.getLocalTextPrefix = function () { return IssuedDeclarationPlan.TeacherWholeDataRow.localTextPrefix; };
            TeacherWholeDataGrid.prototype.getService = function () { return IssuedDeclarationPlan.TeacherWholeDataService.baseUrl; };
            TeacherWholeDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherWholeDataGrid);
            return TeacherWholeDataGrid;
        }(Serenity.EntityGrid));
        IssuedDeclarationPlan.TeacherWholeDataGrid = TeacherWholeDataGrid;
    })(IssuedDeclarationPlan = TbMis.IssuedDeclarationPlan || (TbMis.IssuedDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var CourseMessageDialog = /** @class */ (function (_super) {
            __extends(CourseMessageDialog, _super);
            function CourseMessageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new MaintainDeclarationPlan.CourseMessageForm(_this.idPrefix);
                return _this;
            }
            CourseMessageDialog.prototype.getFormKey = function () { return MaintainDeclarationPlan.CourseMessageForm.formKey; };
            CourseMessageDialog.prototype.getIdProperty = function () { return MaintainDeclarationPlan.CourseMessageRow.idProperty; };
            CourseMessageDialog.prototype.getLocalTextPrefix = function () { return MaintainDeclarationPlan.CourseMessageRow.localTextPrefix; };
            CourseMessageDialog.prototype.getNameProperty = function () { return MaintainDeclarationPlan.CourseMessageRow.nameProperty; };
            CourseMessageDialog.prototype.getService = function () { return MaintainDeclarationPlan.CourseMessageService.baseUrl; };
            CourseMessageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CourseMessageDialog);
            return CourseMessageDialog;
        }(Serenity.EntityDialog));
        MaintainDeclarationPlan.CourseMessageDialog = CourseMessageDialog;
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var CourseMessageGrid = /** @class */ (function (_super) {
            __extends(CourseMessageGrid, _super);
            function CourseMessageGrid(container) {
                return _super.call(this, container) || this;
            }
            CourseMessageGrid.prototype.getColumnsKey = function () { return 'MaintainDeclarationPlan.CourseMessage'; };
            CourseMessageGrid.prototype.getDialogType = function () { return MaintainDeclarationPlan.CourseMessageDialog; };
            CourseMessageGrid.prototype.getIdProperty = function () { return MaintainDeclarationPlan.CourseMessageRow.idProperty; };
            CourseMessageGrid.prototype.getLocalTextPrefix = function () { return MaintainDeclarationPlan.CourseMessageRow.localTextPrefix; };
            CourseMessageGrid.prototype.getService = function () { return MaintainDeclarationPlan.CourseMessageService.baseUrl; };
            CourseMessageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CourseMessageGrid);
            return CourseMessageGrid;
        }(Serenity.EntityGrid));
        MaintainDeclarationPlan.CourseMessageGrid = CourseMessageGrid;
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var StudentWholeDataDialog = /** @class */ (function (_super) {
            __extends(StudentWholeDataDialog, _super);
            function StudentWholeDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new MaintainDeclarationPlan.StudentWholeDataForm(_this.idPrefix);
                return _this;
            }
            StudentWholeDataDialog.prototype.getFormKey = function () { return MaintainDeclarationPlan.StudentWholeDataForm.formKey; };
            StudentWholeDataDialog.prototype.getIdProperty = function () { return MaintainDeclarationPlan.StudentWholeDataRow.idProperty; };
            StudentWholeDataDialog.prototype.getLocalTextPrefix = function () { return MaintainDeclarationPlan.StudentWholeDataRow.localTextPrefix; };
            StudentWholeDataDialog.prototype.getNameProperty = function () { return MaintainDeclarationPlan.StudentWholeDataRow.nameProperty; };
            StudentWholeDataDialog.prototype.getService = function () { return MaintainDeclarationPlan.StudentWholeDataService.baseUrl; };
            StudentWholeDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentWholeDataDialog);
            return StudentWholeDataDialog;
        }(Serenity.EntityDialog));
        MaintainDeclarationPlan.StudentWholeDataDialog = StudentWholeDataDialog;
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var StudentWholeDataGrid = /** @class */ (function (_super) {
            __extends(StudentWholeDataGrid, _super);
            function StudentWholeDataGrid(container) {
                return _super.call(this, container) || this;
            }
            StudentWholeDataGrid.prototype.getColumnsKey = function () { return 'MaintainDeclarationPlan.StudentWholeData'; };
            StudentWholeDataGrid.prototype.getDialogType = function () { return MaintainDeclarationPlan.StudentWholeDataDialog; };
            StudentWholeDataGrid.prototype.getIdProperty = function () { return MaintainDeclarationPlan.StudentWholeDataRow.idProperty; };
            StudentWholeDataGrid.prototype.getLocalTextPrefix = function () { return MaintainDeclarationPlan.StudentWholeDataRow.localTextPrefix; };
            StudentWholeDataGrid.prototype.getService = function () { return MaintainDeclarationPlan.StudentWholeDataService.baseUrl; };
            StudentWholeDataGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            StudentWholeDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StudentWholeDataGrid);
            return StudentWholeDataGrid;
        }(Serenity.EntityGrid));
        MaintainDeclarationPlan.StudentWholeDataGrid = StudentWholeDataGrid;
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var TeacherWholeDataDialog = /** @class */ (function (_super) {
            __extends(TeacherWholeDataDialog, _super);
            function TeacherWholeDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new MaintainDeclarationPlan.TeacherWholeDataForm(_this.idPrefix);
                return _this;
            }
            TeacherWholeDataDialog.prototype.getFormKey = function () { return MaintainDeclarationPlan.TeacherWholeDataForm.formKey; };
            TeacherWholeDataDialog.prototype.getIdProperty = function () { return MaintainDeclarationPlan.TeacherWholeDataRow.idProperty; };
            TeacherWholeDataDialog.prototype.getLocalTextPrefix = function () { return MaintainDeclarationPlan.TeacherWholeDataRow.localTextPrefix; };
            TeacherWholeDataDialog.prototype.getNameProperty = function () { return MaintainDeclarationPlan.TeacherWholeDataRow.nameProperty; };
            TeacherWholeDataDialog.prototype.getService = function () { return MaintainDeclarationPlan.TeacherWholeDataService.baseUrl; };
            TeacherWholeDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherWholeDataDialog);
            return TeacherWholeDataDialog;
        }(Serenity.EntityDialog));
        MaintainDeclarationPlan.TeacherWholeDataDialog = TeacherWholeDataDialog;
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var TeacherWholeDataGrid = /** @class */ (function (_super) {
            __extends(TeacherWholeDataGrid, _super);
            function TeacherWholeDataGrid(container) {
                return _super.call(this, container) || this;
            }
            TeacherWholeDataGrid.prototype.getColumnsKey = function () { return 'MaintainDeclarationPlan.TeacherWholeData'; };
            TeacherWholeDataGrid.prototype.getDialogType = function () { return MaintainDeclarationPlan.TeacherWholeDataDialog; };
            TeacherWholeDataGrid.prototype.getIdProperty = function () { return MaintainDeclarationPlan.TeacherWholeDataRow.idProperty; };
            TeacherWholeDataGrid.prototype.getLocalTextPrefix = function () { return MaintainDeclarationPlan.TeacherWholeDataRow.localTextPrefix; };
            TeacherWholeDataGrid.prototype.getService = function () { return MaintainDeclarationPlan.TeacherWholeDataService.baseUrl; };
            TeacherWholeDataGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            TeacherWholeDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TeacherWholeDataGrid);
            return TeacherWholeDataGrid;
        }(Serenity.EntityGrid));
        MaintainDeclarationPlan.TeacherWholeDataGrid = TeacherWholeDataGrid;
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var TextbookMessageDialog = /** @class */ (function (_super) {
            __extends(TextbookMessageDialog, _super);
            function TextbookMessageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new MaintainDeclarationPlan.TextbookMessageForm(_this.idPrefix);
                return _this;
            }
            TextbookMessageDialog.prototype.getFormKey = function () { return MaintainDeclarationPlan.TextbookMessageForm.formKey; };
            TextbookMessageDialog.prototype.getIdProperty = function () { return MaintainDeclarationPlan.TextbookMessageRow.idProperty; };
            TextbookMessageDialog.prototype.getLocalTextPrefix = function () { return MaintainDeclarationPlan.TextbookMessageRow.localTextPrefix; };
            TextbookMessageDialog.prototype.getNameProperty = function () { return MaintainDeclarationPlan.TextbookMessageRow.nameProperty; };
            TextbookMessageDialog.prototype.getService = function () { return MaintainDeclarationPlan.TextbookMessageService.baseUrl; };
            TextbookMessageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TextbookMessageDialog);
            return TextbookMessageDialog;
        }(Serenity.EntityDialog));
        MaintainDeclarationPlan.TextbookMessageDialog = TextbookMessageDialog;
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var MaintainDeclarationPlan;
    (function (MaintainDeclarationPlan) {
        var TextbookMessageGrid = /** @class */ (function (_super) {
            __extends(TextbookMessageGrid, _super);
            function TextbookMessageGrid(container) {
                return _super.call(this, container) || this;
            }
            TextbookMessageGrid.prototype.getColumnsKey = function () { return 'MaintainDeclarationPlan.TextbookMessage'; };
            TextbookMessageGrid.prototype.getDialogType = function () { return MaintainDeclarationPlan.TextbookMessageDialog; };
            TextbookMessageGrid.prototype.getIdProperty = function () { return MaintainDeclarationPlan.TextbookMessageRow.idProperty; };
            TextbookMessageGrid.prototype.getLocalTextPrefix = function () { return MaintainDeclarationPlan.TextbookMessageRow.localTextPrefix; };
            TextbookMessageGrid.prototype.getService = function () { return MaintainDeclarationPlan.TextbookMessageService.baseUrl; };
            TextbookMessageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TextbookMessageGrid);
            return TextbookMessageGrid;
        }(Serenity.EntityGrid));
        MaintainDeclarationPlan.TextbookMessageGrid = TextbookMessageGrid;
    })(MaintainDeclarationPlan = TbMis.MaintainDeclarationPlan || (TbMis.MaintainDeclarationPlan = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var TextBookInfo;
    (function (TextBookInfo) {
        var TextbookDialog = /** @class */ (function (_super) {
            __extends(TextbookDialog, _super);
            function TextbookDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new TextBookInfo.TextbookForm(_this.idPrefix);
                return _this;
            }
            TextbookDialog.prototype.getFormKey = function () { return TextBookInfo.TextbookForm.formKey; };
            TextbookDialog.prototype.getIdProperty = function () { return TextBookInfo.TextbookRow.idProperty; };
            TextbookDialog.prototype.getLocalTextPrefix = function () { return TextBookInfo.TextbookRow.localTextPrefix; };
            TextbookDialog.prototype.getNameProperty = function () { return TextBookInfo.TextbookRow.nameProperty; };
            TextbookDialog.prototype.getService = function () { return TextBookInfo.TextbookService.baseUrl; };
            TextbookDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return buttons;
            };
            TextbookDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                // remove required asterisk (*)
                this.element.find('sup').hide();
                this.deleteButton.hide();
            };
            TextbookDialog.prototype.getEntityTitle = function () {
                if (!this.isEditMode()) {
                    return "教材信息";
                }
                else {
                    var entityType = _super.prototype.getEntitySingular.call(this);
                    // get name field value of record this dialog edits
                    var name_6 = this.getEntityNameFieldValue() || "";
                    return 'View ' + entityType + " (" + name_6 + ")";
                }
            };
            TextbookDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
            };
            TextbookDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TextbookDialog);
            return TextbookDialog;
        }(Serenity.EntityDialog));
        TextBookInfo.TextbookDialog = TextbookDialog;
    })(TextBookInfo = TbMis.TextBookInfo || (TbMis.TextBookInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var TextBookInfo;
    (function (TextBookInfo) {
        var TextbookGrid = /** @class */ (function (_super) {
            __extends(TextbookGrid, _super);
            function TextbookGrid(container) {
                return _super.call(this, container) || this;
            }
            TextbookGrid.prototype.getColumnsKey = function () { return 'TextBookInfo.Textbook'; };
            TextbookGrid.prototype.getDialogType = function () { return TextBookInfo.TextbookDialog; };
            TextbookGrid.prototype.getIdProperty = function () { return TextBookInfo.TextbookRow.idProperty; };
            TextbookGrid.prototype.getLocalTextPrefix = function () { return TextBookInfo.TextbookRow.localTextPrefix; };
            TextbookGrid.prototype.getService = function () { return TextBookInfo.TextbookService.baseUrl; };
            TextbookGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TextbookGrid);
            return TextbookGrid;
        }(Serenity.EntityGrid));
        TextBookInfo.TextbookGrid = TextbookGrid;
    })(TextBookInfo = TbMis.TextBookInfo || (TbMis.TextBookInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var TextBookInfo;
    (function (TextBookInfo) {
        var TextbookMessageDialog = /** @class */ (function (_super) {
            __extends(TextbookMessageDialog, _super);
            function TextbookMessageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new TextBookInfo.TextbookMessageForm(_this.idPrefix);
                return _this;
            }
            TextbookMessageDialog.prototype.getFormKey = function () { return TextBookInfo.TextbookMessageForm.formKey; };
            TextbookMessageDialog.prototype.getIdProperty = function () { return TextBookInfo.TextbookMessageRow.idProperty; };
            TextbookMessageDialog.prototype.getLocalTextPrefix = function () { return TextBookInfo.TextbookMessageRow.localTextPrefix; };
            TextbookMessageDialog.prototype.getNameProperty = function () { return TextBookInfo.TextbookMessageRow.nameProperty; };
            TextbookMessageDialog.prototype.getService = function () { return TextBookInfo.TextbookMessageService.baseUrl; };
            TextbookMessageDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "delete-button"; }), 1);
                return buttons;
            };
            TextbookMessageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TextbookMessageDialog);
            return TextbookMessageDialog;
        }(Serenity.EntityDialog));
        TextBookInfo.TextbookMessageDialog = TextbookMessageDialog;
    })(TextBookInfo = TbMis.TextBookInfo || (TbMis.TextBookInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var TextBookInfo;
    (function (TextBookInfo) {
        var TextbookMessageGrid = /** @class */ (function (_super) {
            __extends(TextbookMessageGrid, _super);
            function TextbookMessageGrid(container) {
                return _super.call(this, container) || this;
            }
            TextbookMessageGrid.prototype.getColumnsKey = function () { return 'TextBookInfo.TextbookMessage'; };
            TextbookMessageGrid.prototype.getDialogType = function () { return TextBookInfo.TextbookMessageDialog; };
            TextbookMessageGrid.prototype.getIdProperty = function () { return TextBookInfo.TextbookMessageRow.idProperty; };
            TextbookMessageGrid.prototype.getLocalTextPrefix = function () { return TextBookInfo.TextbookMessageRow.localTextPrefix; };
            TextbookMessageGrid.prototype.getService = function () { return TextBookInfo.TextbookMessageService.baseUrl; };
            TextbookMessageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TextbookMessageGrid);
            return TextbookMessageGrid;
        }(Serenity.EntityGrid));
        TextBookInfo.TextbookMessageGrid = TextbookMessageGrid;
    })(TextBookInfo = TbMis.TextBookInfo || (TbMis.TextBookInfo = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = TbMis.Authorization || (TbMis.Authorization = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = TbMis.Membership || (TbMis.Membership = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = TbMis.Membership || (TbMis.Membership = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = TbMis.Membership || (TbMis.Membership = {}));
})(TbMis || (TbMis = {}));
var TbMis;
(function (TbMis) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = TbMis.Membership || (TbMis.Membership = {}));
})(TbMis || (TbMis = {}));
//# sourceMappingURL=TbMis.Web.js.map