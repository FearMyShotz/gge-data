Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./37.js");
var a = require("./101.js");
var s = createjs.Event;
var r = createjs.FocusEvent;
var o = createjs.TextEvent;
var l = function () {
  function TextFieldWatcher() {
    TextFieldWatcher.textFieldParams = new Map();
  }
  TextFieldWatcher.watchTextField = function (e, t, n, a = 0, o = false) {
    e.addEventListener(r.FOCUS_OUT, this.bindFunction(TextFieldWatcher.instance.onFocusOut));
    e.addEventListener(r.FOCUS_IN, this.bindFunction(TextFieldWatcher.instance.onValueChanged));
    e.addEventListener(s.CHANGE, this.bindFunction(TextFieldWatcher.instance.onValueChanged));
    e.addEventListener(s.REMOVED_FROM_STAGE, this.bindFunction(TextFieldWatcher.instance.onTextFieldRemoved));
    i.info("Watching TextField " + e.name);
    var l = new Map();
    l.set(TextFieldWatcher.DICTIONARY_RULES, t);
    l.set(TextFieldWatcher.DICTIONARY_CHANGE_FUNCTION, n);
    l.set(TextFieldWatcher.DICTIONARY_MIN_LENGTH, a);
    l.set(TextFieldWatcher.DICTIONARY_VALIDATE_ON_INPUT, o);
    TextFieldWatcher.textFieldParams.set(e, l);
  };
  TextFieldWatcher.stopWatchingTextField = function (e) {
    if (TextFieldWatcher.textFieldParams && TextFieldWatcher.textFieldParams.get(e)) {
      if (e.hasEventListener(o.TEXT_INPUT)) {
        e.removeEventListener(o.TEXT_INPUT, this.bindFunction(TextFieldWatcher.instance.onValueChanged));
      }
      if (e.hasEventListener(r.FOCUS_IN)) {
        e.removeEventListener(r.FOCUS_IN, this.bindFunction(TextFieldWatcher.instance.onValueChanged));
      }
      if (e.hasEventListener(r.FOCUS_OUT)) {
        e.removeEventListener(r.FOCUS_OUT, this.bindFunction(TextFieldWatcher.instance.onFocusOut));
      }
      if (e.hasEventListener(s.REMOVED_FROM_STAGE)) {
        e.addEventListener(s.REMOVED_FROM_STAGE, this.bindFunction(TextFieldWatcher.instance.onTextFieldRemoved));
      }
      i.info("Stopped watching TextField " + e.name);
      TextFieldWatcher.textFieldParams.delete(e);
    }
  };
  TextFieldWatcher.validateString = function (e, t, n) {
    return Math.max(TextFieldWatcher.checkCharacters(e, t), TextFieldWatcher.checkValidity(e, t, n));
  };
  TextFieldWatcher.prototype.onFocusOut = function (e = null) {
    var t = e.target;
    var n = TextFieldWatcher.textFieldParams.get(t);
    var i = n.get(TextFieldWatcher.DICTIONARY_MIN_LENGTH);
    var a = n.get(TextFieldWatcher.DICTIONARY_RULES);
    var s = Math.max(TextFieldWatcher.checkCharacters(t.text, a), TextFieldWatcher.checkValidity(t.text, a, i));
    n.get(TextFieldWatcher.DICTIONARY_CHANGE_FUNCTION).apply(null, [s]);
  };
  TextFieldWatcher.prototype.onValueChanged = function (e = null) {
    var t = e.target;
    var n = TextFieldWatcher.textFieldParams.get(t);
    var i = n.get(TextFieldWatcher.DICTIONARY_MIN_LENGTH);
    var a = n.get(TextFieldWatcher.DICTIONARY_RULES);
    var s = TextFieldWatcher.checkCharacters(t.text, a);
    if (n.get(TextFieldWatcher.DICTIONARY_VALIDATE_ON_INPUT)) {
      s = Math.max(s, TextFieldWatcher.checkValidity(t.text, a, i));
    }
    n.get(TextFieldWatcher.DICTIONARY_CHANGE_FUNCTION).apply(null, [s]);
  };
  TextFieldWatcher.checkCharacters = function (e, t) {
    var n = this.trimString(e);
    if (n.length > 0 && !this.isSmartFoxValide(n)) {
      return TextFieldWatcher.ERRORCODE_INVALID_CHARS;
    } else if (n.length > 0 && t == TextFieldWatcher.RULE_USERNAME && !TextFieldWatcher.isValidUsername(n)) {
      return TextFieldWatcher.ERRORCODE_INVALID_CHARS;
    } else {
      return TextFieldWatcher.ERRORCODE_ALL_OK;
    }
  };
  TextFieldWatcher.checkValidity = function (e, t, n = 0) {
    var i = TextFieldWatcher.trimString(e);
    if (i.length <= 0) {
      return TextFieldWatcher.ERRORCODE_EMPTY_TEXTFIELD;
    } else if (i.length < n) {
      return TextFieldWatcher.ERRORCODE_TOO_SHORT;
    } else if (t != TextFieldWatcher.RULE_EMAIL || TextFieldWatcher.isEmailString(i)) {
      return TextFieldWatcher.ERRORCODE_ALL_OK;
    } else {
      return TextFieldWatcher.ERRORCODE_NO_EMAIL;
    }
  };
  TextFieldWatcher.prototype.onTextFieldRemoved = function (e = null) {
    TextFieldWatcher.stopWatchingTextField(e.target);
  };
  Object.defineProperty(TextFieldWatcher, "instance", {
    get: function () {
      TextFieldWatcher._textFieldWatcher ||= new TextFieldWatcher();
      return TextFieldWatcher._textFieldWatcher;
    },
    enumerable: true,
    configurable: true
  });
  TextFieldWatcher.isSmartFoxValide = function (e) {
    if (e.trim() == "") {
      return false;
    }
    for (var t = 0, n = a.TextValide.invalidChars; t < n.length; t++) {
      var i = n[t];
      if (e.indexOf(i) >= 0) {
        return false;
      }
    }
    return true;
  };
  TextFieldWatcher.isValidUsername = function (e) {
    for (var t = 0, n = a.TextValide.invalidUsernameChars; t < n.length; t++) {
      var i = n[t];
      if (e.indexOf(i) >= 0) {
        return false;
      }
    }
    return !new RegExp("^[0-9]+$").exec(e);
  };
  TextFieldWatcher.isEmailString = function (e) {
    if (e.length < TextFieldWatcher.MIN_MAIL_LENGTH || e.length > TextFieldWatcher.MAX_MAIL_LENGTH) {
      return false;
    }
    return /^[A-Za-z0-9\-+_]+(\.[A-Za-z0-9\-+_]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,}$/.test(e);
  };
  TextFieldWatcher.trimString = function (e) {
    return e.trim();
  };
  TextFieldWatcher.ERRORCODE_ALL_OK = 0;
  TextFieldWatcher.ERRORCODE_TOO_SHORT = 1;
  TextFieldWatcher.ERRORCODE_INVALID_CHARS = 2;
  TextFieldWatcher.ERRORCODE_NO_EMAIL = 3;
  TextFieldWatcher.ERRORCODE_EMPTY_TEXTFIELD = 5;
  TextFieldWatcher.RULE_EMAIL = 1;
  TextFieldWatcher.RULE_TEXT = 2;
  TextFieldWatcher.RULE_USERNAME = 3;
  TextFieldWatcher.MIN_MAIL_LENGTH = 6;
  TextFieldWatcher.MAX_MAIL_LENGTH = 254;
  TextFieldWatcher.DICTIONARY_RULES = "_rules";
  TextFieldWatcher.DICTIONARY_CHANGE_FUNCTION = "_functionOk";
  TextFieldWatcher.DICTIONARY_MIN_LENGTH = "_minLength";
  TextFieldWatcher.DICTIONARY_VALIDATE_ON_INPUT = "_validate";
  return TextFieldWatcher;
}();
exports.TextFieldWatcher = l;