Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = createjs.TextEvent;
var s = require("./3.js");
var r = require("./2.js");
var o = require("./29.js");
var l = r.getLogger(o.TEXT_FIELDS_LOGGER + ".TextFieldHelper");
var u = function () {
  function TextFieldHelper() {}
  TextFieldHelper.recolorTextField = function (e, t, n = -1, i = -1) {
    var a = e.getTextFormat();
    a.color = s.ColorTransform.colorNumToString(t);
    e.setTextFormat(a, n, i);
    e.defaultTextFormat = a;
  };
  TextFieldHelper.changeTextFromatSizeByTextWidth = function (e, t, n, i = 1) {
    var a = t._fontSizeCache = t._fontSizeCache || new Map();
    if (i === 1 && n.length < 50 && a.get(n)) {
      t.text = n;
      return t.getTextFormat().size = a.get(n);
    }
    t.getTextFormat().size = e;
    t.multiline = true;
    t.wordWrap = true;
    t.text = n;
    while (t.numLines > i && t.getTextFormat().size > 6) {
      TextFieldHelper.shrinkText(t);
    }
    var s = t.getTextFormat().size;
    if (i === 1 && n.length < 50 && s > 6) {
      a.set(n, s);
    }
    return s;
  };
  TextFieldHelper.shrinkText = function (e) {
    e.getTextFormat().size -= 1;
    e.invalidate("font size reduced");
  };
  TextFieldHelper.changeTextFromatSizeByMaxHeight = function (e, t, n) {
    var i = t.height;
    t.getTextFormat().size = e;
    t.multiline = true;
    t.wordWrap = true;
    t.text = n;
    while (t.textHeight > i && t.getTextFormat().size > 6) {
      TextFieldHelper.shrinkText(t);
    }
  };
  TextFieldHelper.changeSingleLineTextVerticalAlignInMultiLineTextfield = function (e, t = 0) {
    var n = e.text;
    var i = e.defaultTextFormat;
    i.leading = t;
    e.defaultTextFormat = i;
    e.setTextFormat(i);
    if (e.numLines == 1) {
      e.text = " \n" + n;
      i.leading = 0 - Number(i.size) / 2;
      e.defaultTextFormat = i;
      e.setTextFormat(i);
    }
  };
  TextFieldHelper.changeTextFieldVerticalAllignByLinesNumber = function (e, t = 1) {
    if (e.numLines < t) {
      l.warn("TODO: @HTML5 - changeTextFieldVerticalAllignByLinesNumber");
    }
  };
  TextFieldHelper.changeVerticalAlignInMultiLineTextfield = function (e) {
    var t = e.text;
    var n = e.defaultTextFormat;
    var i = e.height - (e.textHeight + Number(n.leading));
    if (!(i < 0)) {
      for (var a = Math.floor(i / (Number(n.size) + Number(n.leading)) / 2), s = 0; s < a; s++) {
        e.text = " \n" + t;
        t = e.text;
      }
    }
  };
  TextFieldHelper.sliceTextAnAddPoints = function (e) {
    var t = e.textWidth;
    var n = e.width - 4;
    if (t > n) {
      var i = e.text.split(" ");
      var a = "";
      e.text = "";
      for (var s = 0, r = i; s < r.length; s++) {
        var o = r[s];
        e.appendText(o + " ...");
        if (!(e.textWidth < n)) {
          break;
        }
        a += o + " ";
        e.text = e.text.slice(0, e.text.indexOf("..."));
      }
      a += "...";
      e.text = a;
    }
  };
  TextFieldHelper.generateStringByValue = function (e, t, n) {
    if (e > 1) {
      return e + " " + n;
    } else {
      return e + " " + t;
    }
  };
  TextFieldHelper.changeInputDirection = function (e, t) {
    if (e.type == s.TextFieldType.INPUT) {
      var n = e.defaultTextFormat;
      switch (t) {
        case "ar":
          n.align = s.TextFormatAlign.RIGHT;
          e.addEventListener(a.TEXT_INPUT, this.bindFunction(TextFieldHelper.onTextInput));
          break;
        default:
          n.align = s.TextFormatAlign.LEFT;
          if (e.hasEventListener(a.TEXT_INPUT)) {
            e.removeEventListener(a.TEXT_INPUT, this.bindFunction(TextFieldHelper.onTextInput));
          }
      }
      e.defaultTextFormat = n;
    }
  };
  TextFieldHelper.onTextInput = function (e) {};
  TextFieldHelper.adjustUnwantedMultilineLabels = function (e, t) {
    if (t.indexOf(" ") == -1 && t.indexOf("\n") == -1 && t.indexOf("-") == -1) {
      e.multiline = false;
      e.wordWrap = false;
    }
  };
  TextFieldHelper.replace = function (e, t, n) {
    return e = e.split(t).join(n);
  };
  TextFieldHelper.manageBrackets = function (e) {
    e = TextFieldHelper.replace(e, ")", "^1^");
    e = TextFieldHelper.replace(e, "(", "^2^");
    e = TextFieldHelper.replace(e, "^1^", "(");
    e = TextFieldHelper.replace(e, "^2^", ")");
    e = TextFieldHelper.replace(e, "]", "^1^");
    e = TextFieldHelper.replace(e, "[", "^2^");
    e = TextFieldHelper.replace(e, "^1^", "[");
    e = TextFieldHelper.replace(e, "^2^", "]");
    e = TextFieldHelper.replace(e, "}", "^1^");
    e = TextFieldHelper.replace(e, "{", "^2^");
    e = TextFieldHelper.replace(e, "^1^", "{");
    e = TextFieldHelper.replace(e, "^2^", "}");
    e = TextFieldHelper.replace(e, ">", "^1^");
    e = TextFieldHelper.replace(e, "<", "^2^");
    e = TextFieldHelper.replace(e, "^1^", ">");
    return e = TextFieldHelper.replace(e, "^2^", "<");
  };
  TextFieldHelper.reverse = function (e) {
    var t = "";
    for (var n = 0; n < e.length; n++) {
      t = e.charAt(n) + t;
    }
    return t;
  };
  TextFieldHelper.changeFormat = function (e, t) {
    var n = e.getTextFormat();
    n.size = t;
    e.setTextFormat(n);
    e.defaultTextFormat = n;
  };
  TextFieldHelper.scaleFontSizeAndDimensions = function (e, t) {
    var n = e.getTextFormat();
    e.setTextFormat(i.__assign({}, n, {
      size: (n.size || 12) * t
    }));
    e.height *= t;
    e.width *= t;
  };
  return TextFieldHelper;
}();
exports.TextFieldHelper = u;
(function () {
  function Word(e, t, n, i) {
    this._text = e;
    this._type = t;
    this._index = n;
    this._format = i;
  }
  Object.defineProperty(Word.prototype, "text", {
    get: function () {
      return this._text;
    },
    set: function (e) {
      this._text = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Word.prototype, "type", {
    get: function () {
      return this._type;
    },
    set: function (e) {
      this._type = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Word.prototype, "index", {
    get: function () {
      return this._index;
    },
    set: function (e) {
      this._index = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Word.prototype, "format", {
    get: function () {
      return this._format;
    },
    set: function (e) {
      this._format = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Word.prototype, "EL", {
    get: function () {
      return this._el;
    },
    set: function (e) {
      this._el = e;
    },
    enumerable: true,
    configurable: true
  });
})();