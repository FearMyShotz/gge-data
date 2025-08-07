Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  return function CredentialsValidationConstants() {};
}();
i.WHITESPACE_CHARS = "\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u0085\\u00A0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000";
i.EMAIL_MIN_LENGTH = 6;
i.EMAIL_MAX_LENGTH = 50;
i.EMAIL_REGEX = "^[A-Za-z0-9\\-+_]+(\\.[A-Za-z0-9\\-+_]+)*@([A-Za-z0-9\\-]+\\.)+[A-Za-z]{2,}$";
i.USERNAME_MIN_LENGTH = 3;
i.USERNAME_MAX_LENGTH = 15;
i.USERNAME_FORBIDDEN_CHARACTERS = "、〃〈〉《》「」『』【】〔〕〖〗〘〙〚〛〝〞〟〿！＂＃＄％＆＇（）＊＋，／；＜＝＞？＠［＼］＾｀｛｜｝｡｢｣､ﾞﾟ￠￡￢￣￤";
i.DOUBLE_WHITESPACES_REGEX = ".*[\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u0085\\u00A0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]{2}.*";
i.WHITESPACE_PREFIX_REGEX = "^[\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u0085\\u00A0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+";
i.WHITESPACE_SUFFIX_REGEX = "[\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u0085\\u00A0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+$";
i.PASSWORD_MIN_LENGTH = 4;
i.PASSWORD_MAX_LENGTH = 16;
i.PASSWORD_FORBIDDEN_CHARACTERS = "%&*/()[]{}'\\´`^°§€²³,;µ$\"";
exports.CredentialsValidationConstants = i;