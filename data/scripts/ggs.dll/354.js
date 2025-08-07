Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./29.js");
i.getLogger(a.TEXT_FIELDS_LOGGER + ".GGSTextFieldModel");
var s = function () {
  function GGSTextFieldModel(e) {
    this._selectable = false;
    this._uid = Math.round(Math.random() * 10000);
    this._registeredEventListeners = [];
    this._internalTextField = e;
    this._textField = e.originalTextField;
    this._textAlignOriginal = e.originalTextField.getTextFormat().align;
  }
  GGSTextFieldModel.prototype.dispose = function () {
    this._internalTextField = null;
    this._data = null;
    this._registeredEventListeners = null;
  };
  GGSTextFieldModel.prototype.updateAllProperties = function (e = false) {
    if (e) {
      this.updateSelectable();
      this.updateAutoFitToBounds();
    } else {
      this.updateAutoFitToBounds();
    }
  };
  GGSTextFieldModel.prototype.toString = function () {
    return "text: " + this.text + ", textDefault: " + this._textDefault + ", visible: " + this.visible + ", multiline: " + this.multiline + ", wordWrap: " + this.wordwrap;
  };
  Object.defineProperty(GGSTextFieldModel.prototype, "text", {
    get: function () {
      return this._textField.text;
    },
    set: function (e) {
      this._textField.text = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "textDefault", {
    get: function () {
      return this._textDefault;
    },
    set: function (e) {
      this._textDefault = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "x", {
    get: function () {
      return this._textField.x;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateX(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "y", {
    get: function () {
      return this._textField.y;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateY(e + this._internalTextField.currentFontConfig.yOffset);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "width", {
    get: function () {
      return this._textField.width;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateWidth(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "height", {
    get: function () {
      return this._textField.height;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateHeight(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "scaleX", {
    get: function () {
      return this._textField.scaleX;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateScaleX(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "scaleY", {
    get: function () {
      return this._textField.scaleY;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateScaleY(e);
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldModel.prototype.updateScrollV = function () {};
  Object.defineProperty(GGSTextFieldModel.prototype, "scrollV", {
    get: function () {
      return this._textField.scrollV;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateScrollV(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "rotation", {
    get: function () {
      return this._textField.rotation;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateRotation(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "background", {
    get: function () {
      return this._textField.background;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateBackground(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "backgroundColor", {
    get: function () {
      return this._textField.backgroundColor;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateBackgroundColor(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "indent", {
    get: function () {
      return Number(this._textField.getTextFormat().indent);
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateIndent(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "visible", {
    get: function () {
      return this._textField.visible;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateVisible(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "multiline", {
    get: function () {
      return this._textField.multiline;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateMultiline(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "restrict", {
    get: function () {
      return this._textField.restrict;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateRestrict(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "wordwrap", {
    get: function () {
      return this._textField.wordWrap;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateWordwrap(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "displayAsPassword", {
    get: function () {
      return this._textField.displayAsPassword;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateDisplayAsPassword(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "tabIndex", {
    get: function () {
      return this._textField.tabIndex;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateTabIndex(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "tabEnabled", {
    get: function () {
      return this._textField.tabEnabled;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateTabEnabled(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "maxChars", {
    get: function () {
      return this._textField.maxChars;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateMaxChars(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "selectableDefault", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "selectable", {
    get: function () {
      return this._selectable;
    },
    set: function (e) {
      this._selectable = e;
      this.updateSelectable();
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldModel.prototype.updateSelectable = function () {
    this._internalTextField.textStrategy.updateSelectable(this._selectable);
  };
  Object.defineProperty(GGSTextFieldModel.prototype, "type", {
    get: function () {
      return this._textField.type;
    },
    set: function (e) {
      if (!this.initialized || this.type != e) {
        this._internalTextField.textStrategy.updateType(e);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "mouseEnabled", {
    get: function () {
      return this._textField.mouseEnabled;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateMouseEnabled(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "color", {
    get: function () {
      return this._textField.textColor;
    },
    set: function (e) {
      if (this._internalTextField.currentFontConfig.debug) {
        e = this._internalTextField.currentFontConfig.debugColor;
      }
      this._internalTextField.textStrategy.updateColor(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "size", {
    get: function () {
      return this._textField.getTextFormat().size;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateSize(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "verticalAlign", {
    get: function () {
      return this._textField.verticalAlign;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateVerticalAlign(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "textAlign", {
    get: function () {
      return this._textField.getTextFormat().align;
    },
    set: function (e) {
      this._internalTextField.textStrategy.updateTextAlign(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "textAlignOriginal", {
    get: function () {
      return this._textAlignOriginal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "data", {
    get: function () {
      this._data ||= {};
      return this._data;
    },
    set: function (e) {
      this._data = e;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldModel.prototype.addRegisteredEventListener = function (e) {
    this._registeredEventListeners.push(e);
  };
  GGSTextFieldModel.prototype.removeRegisteredEventListener = function (e) {
    var t = this._registeredEventListeners.indexOf(e);
    if (t > -1) {
      this._registeredEventListeners.splice(t, 1);
    }
  };
  Object.defineProperty(GGSTextFieldModel.prototype, "registeredEventListeners", {
    get: function () {
      return this._registeredEventListeners;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "autoSize", {
    set: function (e) {
      this._internalTextField.textStrategy.autoSize = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "uid", {
    get: function () {
      return this._uid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldModel.prototype, "autoFitToBounds", {
    get: function () {
      return this._autoFitToBounds;
    },
    set: function (e) {
      this._autoFitToBounds = e;
      this.updateAutoFitToBounds();
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldModel.prototype.updateAutoFitToBounds = function () {
    this._internalTextField.textStrategy.updateAutoFitToBounds(this._autoFitToBounds);
  };
  return GGSTextFieldModel;
}();
exports.GGSTextFieldModel = s;