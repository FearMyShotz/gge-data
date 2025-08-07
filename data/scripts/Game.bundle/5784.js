Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = function () {
  function BasicButtonTextField(e) {
    this._groupNumber = false;
    this.button = e;
    this.advanced = new o.GoodgameTextField(this.button.textField);
  }
  Object.defineProperty(BasicButtonTextField.prototype, "textField", {
    get: function () {
      return this.advanced.originalTextField;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.unregister = function () {
    this.advanced.unregister();
    this.button = null;
    this.advanced = null;
  };
  Object.defineProperty(BasicButtonTextField.prototype, "groupNumber", {
    get: function () {
      return this._groupNumber;
    },
    set: function (e) {
      this._groupNumber = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.displayText = function () {
    this.advanced.displayLocalizedText(n.GGSCountryController.instance.currentCountry.ggsLanguageCode, this.textContentVO);
    this.button.label = this.advanced.text;
  };
  Object.defineProperty(BasicButtonTextField.prototype, "textContent", {
    get: function () {
      return this.advanced.text;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.applyFontConfiguration = function (e) {
    this.advanced.applyFontConfiguration(e);
  };
  Object.defineProperty(BasicButtonTextField.prototype, "originalFontConfig", {
    get: function () {
      return this.advanced.originalFontConfig;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "loadedFontConfig", {
    get: function () {
      return this.advanced.loadedFontConfig;
    },
    set: function (e) {
      this.advanced.loadedFontConfig = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "uid", {
    get: function () {
      return this.advanced.uid;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.useDefaultStrategy = function () {
    this.advanced.useDefaultStrategy();
  };
  BasicButtonTextField.prototype.useTLFStrategy = function () {
    this.advanced.useTLFStrategy();
  };
  Object.defineProperty(BasicButtonTextField.prototype, "color", {
    get: function () {
      return this.advanced.color;
    },
    set: function (e) {
      this.advanced.color = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "x", {
    get: function () {
      return this.advanced.x;
    },
    set: function (e) {
      this.advanced.x = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "y", {
    get: function () {
      return this.advanced.y;
    },
    set: function (e) {
      this.advanced.y = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "width", {
    get: function () {
      return this.advanced.width;
    },
    set: function (e) {
      this.advanced.width = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "height", {
    get: function () {
      return this.advanced.height;
    },
    set: function (e) {
      this.advanced.height = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "click", {
    get: function () {
      return this.advanced.click;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "text", {
    get: function () {
      return this.advanced.text;
    },
    set: function (e) {
      var t = new s.TextVO(e);
      this.advanced.textContentVO = t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "currentFontConfig", {
    get: function () {
      return this.advanced.currentFontConfig;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "data", {
    get: function () {
      return this.advanced.data;
    },
    set: function (e) {
      this.advanced.data = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "focusIn", {
    get: function () {
      return this.advanced.focusIn;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "focusOut", {
    get: function () {
      return this.advanced.focusOut;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.setFocus = function () {
    this.advanced.setFocus();
  };
  Object.defineProperty(BasicButtonTextField.prototype, "tabIndex", {
    get: function () {
      return this.advanced.tabIndex;
    },
    set: function (e) {
      this.advanced.tabIndex = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "tabEnabled", {
    get: function () {
      return this.advanced.tabEnabled;
    },
    set: function (e) {
      this.advanced.tabEnabled = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "maxChars", {
    set: function (e) {
      this.advanced.maxChars = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "textContentVO", {
    get: function () {
      if (this.advanced) {
        return this.advanced.textContentVO;
      } else {
        return null;
      }
    },
    set: function (e) {
      this.advanced.textContentVO = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "multiline", {
    get: function () {
      return this.advanced.multiline;
    },
    set: function (e) {
      this.advanced.multiline = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "textWidth", {
    get: function () {
      return this.advanced.textWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "textHeight", {
    get: function () {
      return this.advanced.textHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "keyDown", {
    get: function () {
      return this.advanced.keyDown;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "keyUp", {
    get: function () {
      return this.advanced.keyUp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "mouseOver", {
    get: function () {
      return this.advanced.mouseOver;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "mouseOut", {
    get: function () {
      return this.advanced.mouseOut;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "caretIndex", {
    get: function () {
      return this.advanced.caretIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "mouseEnabled", {
    get: function () {
      return this.advanced.mouseEnabled;
    },
    set: function (e) {
      this.advanced.mouseEnabled = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "verticalAlign", {
    set: function (e) {
      this.advanced.verticalAlign = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.setSelection = function (e, t) {
    this.advanced.setSelection(e, t);
  };
  Object.defineProperty(BasicButtonTextField.prototype, "selectable", {
    get: function () {
      return this.advanced.selectable;
    },
    set: function (e) {
      this.advanced.selectable = true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "type", {
    get: function () {
      return this.advanced.type;
    },
    set: function (e) {
      this.advanced.type = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "size", {
    get: function () {
      return this.advanced.size;
    },
    set: function (e) {
      this.advanced.size = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "indent", {
    set: function (e) {
      this.advanced.model.indent = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "model", {
    get: function () {
      return this.advanced.model;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "wordwrap", {
    get: function () {
      return this.advanced.wordwrap;
    },
    set: function (e) {
      this.advanced.wordwrap = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "htmlLinkClick", {
    get: function () {
      return this.advanced.htmlLinkClick;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "textAlign", {
    set: function (e) {
      this.advanced.textAlign = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "visible", {
    get: function () {
      return this.advanced.visible;
    },
    set: function (e) {
      this.advanced.visible = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "originalTextField", {
    get: function () {
      return this.advanced.originalTextField;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.clearText = function () {
    this.advanced.clearText();
  };
  BasicButtonTextField.prototype.restoreTextContent = function () {
    this.advanced.restoreTextContent();
  };
  Object.defineProperty(BasicButtonTextField.prototype, "restrict", {
    get: function () {
      return this.advanced.restrict;
    },
    set: function (e) {
      this.advanced.restrict = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "textInput", {
    get: function () {
      return this.advanced.textInput;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.updateProperties = function (e = false) {
    this.advanced.updateProperties(e);
  };
  Object.defineProperty(BasicButtonTextField.prototype, "textStrategy", {
    get: function () {
      return this.advanced.textStrategy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "autoSize", {
    set: function (e) {
      this.advanced.textStrategy.autoSize = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.displayLocalizedText = function (e, t = null) {
    this.advanced.displayLocalizedText(e, t);
    this.displayText();
  };
  Object.defineProperty(BasicButtonTextField.prototype, "scaleX", {
    get: function () {
      return this.advanced.scaleX;
    },
    set: function (e) {
      this.advanced.scaleX = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "scaleY", {
    get: function () {
      return this.advanced.scaleY;
    },
    set: function (e) {
      this.advanced.scaleY = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "rotation", {
    get: function () {
      return this.advanced.rotation;
    },
    set: function (e) {
      this.advanced.rotation = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "background", {
    get: function () {
      return this.advanced.background;
    },
    set: function (e) {
      this.advanced.background = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "backgroundColor", {
    get: function () {
      return this.advanced.backgroundColor;
    },
    set: function (e) {
      this.advanced.backgroundColor = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "change", {
    get: function () {
      return this.advanced.change;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "removedFromStage", {
    get: function () {
      return this.advanced.removedFromStage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "scroll", {
    get: function () {
      return this.advanced.scroll;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonTextField.prototype.fitTextSizeToBounds = function (e = null) {
    return this.advanced.fitTextSizeToBounds(e);
  };
  Object.defineProperty(BasicButtonTextField.prototype, "autoFitToBounds", {
    get: function () {
      return this.advanced.autoFitToBounds;
    },
    set: function (e) {
      this.advanced.autoFitToBounds = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "scrollV", {
    get: function () {
      return this.model.scrollV;
    },
    set: function (e) {
      this.model.scrollV = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "maxScrollV", {
    get: function () {
      return this.textStrategy.maxScrollV;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButtonTextField.prototype, "numLines", {
    get: function () {
      return this.advanced.numLines;
    },
    enumerable: true,
    configurable: true
  });
  return BasicButtonTextField;
}();
exports.BasicButtonTextField = r;
a.classImplementsInterfaces(r, "IInternalGGSTextField", "IBasicGGSTextField");