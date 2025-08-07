var e = require("./47.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function TextValide() {}
  TextValide.isSmartFoxValide = function (e) {
    if (e.trim() == "") {
      return false;
    }
    for (var t = 0, n = TextValide.invalidChars; t < n.length; t++) {
      var i = n[t];
      if (e.indexOf(i) >= 0) {
        return false;
      }
    }
    return true;
  };
  TextValide.isUsernameValide = function (t) {
    if (e.env.DEBUG) {
      t = t.replace("|", "");
    }
    if (t.trim() == "") {
      return false;
    }
    if (!TextValide.isSmartFoxValide(t)) {
      return false;
    }
    for (var n = 0, i = TextValide.invalidUsernameChars; n < i.length; n++) {
      var a = i[n];
      if (t.indexOf(a) >= 0) {
        return false;
      }
    }
    return true;
  };
  TextValide.getValidUsername = function (e) {
    for (var t = 0, n = TextValide.invalidUsernameChars; t < n.length; t++) {
      var i = n[t];
      var a = new RegExp("\\" + i, "gim");
      e = e.replace(a, "");
    }
    for (var s = 0, r = TextValide.invalidChars; s < r.length; s++) {
      var o = r[s];
      var l = new RegExp("\\" + o, "gim");
      e = e.replace(l, "");
    }
    return TextValide.getValideSmartFoxText(e);
  };
  TextValide.getSmartFoxInvalideChar = function (e) {
    var t = "";
    if (e.trim() == "") {
      return t;
    }
    for (var n = 0, i = TextValide.invalidChars; n < i.length; n++) {
      var a = i[n];
      if (e.indexOf(a) >= 0) {
        t += a;
      }
    }
    return t;
  };
  TextValide.getCleanText = function (e) {
    for (var t = 0, n = TextValide.invalidChars; t < n.length; t++) {
      var i = n[t];
      var a = new RegExp("\\" + i, "gim");
      e = e.replace(a, "");
    }
    return TextValide.getValideSmartFoxText(e);
  };
  TextValide.getCleanChatText = function (e) {
    for (var t = 0, n = TextValide.invalidChatChars; t < n.length; t++) {
      var i = n[t];
      var a = new RegExp("\\" + i, "gm");
      e = e.replace(a, "");
    }
    return TextValide.getValideSmartFoxText(e);
  };
  TextValide.getValideSmartFoxText = function (e) {
    return e = (e = e.replace(/%/g, TextValide.SUBST_PERCENT)).replace(/'/g, "");
  };
  TextValide.getValideSmartFoxJSONTextMessage = function (e) {
    return e = (e = (e = (e = (e = (e = (e = e.replace(TextValide.pattern1, TextValide.SUBST_PERCENT)).replace(TextValide.pattern2, TextValide.SUBST_APOSTROPHE)).replace(TextValide.pattern3, TextValide.SUBST_QUOTE)).replace(TextValide.pattern4, TextValide.SUBST_NEWLINE)).replace(TextValide.pattern5, TextValide.SUBST_BACKSLASH)).replace(TextValide.pattern6, TextValide.SUBST_NEWLINE)).replace(TextValide.pattern7, " ");
  };
  TextValide.parseChatMessage = function (e) {
    return e = e.replace(/&percnt;/g, "%");
  };
  TextValide.parseChatJSONMessage = function (e) {
    if (!e) {
      return "";
    }
    return e = e.replace(/&percnt;/g, "%").replace(/&quot;/g, "\"").replace(/&145;/g, "'").replace(/<br \/>/g, "\n").replace(/%5C/g, "\\").replace(/(\[|\])/g, " ");
  };
  TextValide.isEmailString = function (e) {
    return /^[A-Za-z0-9\-+_]+(\.[A-Za-z0-9\-+_]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,}$/.test(e);
  };
  TextValide.trimPassword = function (e) {
    return e.trim();
  };
  TextValide.SUBST_PERCENT = "&percnt;";
  TextValide.SUBST_QUOTE = "&quot;";
  TextValide.SUBST_APOSTROPHE = "&145;";
  TextValide.SUBST_NEWLINE = "<br />";
  TextValide.SUBST_BACKSLASH = "%5C";
  TextValide.invalidChars = ["%", "&", "*", "/", "(", ")", "[", "]", "{", "}", "\"", "'", "\\", "´", "`", "^", "°", "§", "€", "²", "³", ",", ";", "µ", "$"];
  TextValide.invalidChatChars = ["\\+", "#", "<", ">", "\"", "\\$"];
  TextValide.invalidUsernameChars = ["!", "=", "?", "+", "#", "<", ">", "|"];
  TextValide.pattern1 = /%/g;
  TextValide.pattern2 = /'/g;
  TextValide.pattern3 = /"/g;
  TextValide.pattern4 = /\r/g;
  TextValide.pattern5 = /\\/g;
  TextValide.pattern6 = /\n/g;
  TextValide.pattern7 = /\t/g;
  return TextValide;
}();
exports.TextValide = n;