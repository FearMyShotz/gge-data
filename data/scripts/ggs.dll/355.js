Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./18.js");
var a = require("./101.js");
var s = require("./3.js");
var r = require("./168.js");
var o = require("./31.js");
var l = require("./356.js");
var u = createjs.Event;
var c = createjs.FocusEvent;
var _ = createjs.MouseEvent;
var d = createjs.TextEvent;
var m = require("./2.js");
var h = require("./29.js");
var p = m.getLogger(h.TEXT_FIELDS_LOGGER + ".GGSTextFieldDefaultStrategy");
var g = function () {
  function GGSTextFieldDefaultStrategy(e) {
    this._textField = e;
    this._currentFontConfig = this._textField.originalFontConfig;
    this._textFieldText = this._textField.originalTextField.text;
    this._originalPosY = this._textField.originalTextField.y;
    this._originalHeight = this._textField.originalTextField.height;
    this._originalTextHeight = this._textField.originalTextField.textHeight;
    this._textLineMetrics = e.originalTextField.getMetrics();
  }
  GGSTextFieldDefaultStrategy.prototype.deactivateInputFieldBehaviour = function () {
    this._textField.originalTextField.removeEventListener(s.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDownEvent));
    this._textField.originalTextField.removeEventListener(c.FOCUS_OUT, this.bindFunction(this.onFocusOutEvent));
    this._textField.originalTextField.removeEventListener(c.FOCUS_IN, this.bindFunction(this.onFocusInEvent));
    this._textField.originalTextField.removeEventListener(u.CHANGE, this.bindFunction(this.onChangeEvent));
  };
  GGSTextFieldDefaultStrategy.prototype.activateInputFieldBehaviour = function () {
    this._textField.originalTextField.addEventListener(s.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDownEvent));
    this._textField.originalTextField.addEventListener(c.FOCUS_OUT, this.bindFunction(this.onFocusOutEvent));
    this._textField.originalTextField.addEventListener(c.FOCUS_IN, this.bindFunction(this.onFocusInEvent));
    this._textField.originalTextField.addEventListener(u.CHANGE, this.bindFunction(this.onChangeEvent));
  };
  GGSTextFieldDefaultStrategy.prototype.onKeyDownEvent = function (e) {
    e.stopPropagation();
    this._textField.keyDown.dispatchTyped(e);
  };
  GGSTextFieldDefaultStrategy.prototype.onKeyUpEvent = function (e) {
    e.stopPropagation();
    this._textField.keyUp.dispatchTyped(e);
  };
  GGSTextFieldDefaultStrategy.prototype.onMouseOutEvent = function (e) {
    this._textField.mouseOut.dispatchTyped(this._textField);
  };
  GGSTextFieldDefaultStrategy.prototype.onMouseOverEvent = function (e) {
    this._textField.mouseOver.dispatchTyped(this._textField);
  };
  GGSTextFieldDefaultStrategy.prototype.onChangeEvent = function (e) {
    this._textField.model.text = this._textField.originalTextField.text;
    this._textField.change.dispatchTyped(e);
  };
  GGSTextFieldDefaultStrategy.prototype.onRemovedFromStageEvent = function (e) {
    this._textField.removedFromStage.dispatchTyped(e);
  };
  GGSTextFieldDefaultStrategy.prototype.onScrollEvent = function (e) {
    this._textField.scroll.dispatchTyped(e);
  };
  GGSTextFieldDefaultStrategy.prototype.onFocusInEvent = function (e) {
    this._textField.focusIn.dispatchTyped(this._textField);
  };
  GGSTextFieldDefaultStrategy.prototype.onFocusOutEvent = function (e) {
    this._textField.focusOut.dispatchTyped(this._textField);
  };
  GGSTextFieldDefaultStrategy.prototype.onClickEvent = function (e) {
    this._textField.click.dispatchTyped(this._textField);
  };
  GGSTextFieldDefaultStrategy.prototype.onTextEventLinkEvent = function (e) {
    this._textField.htmlLinkClick.dispatchTyped(this._textField, e.text);
  };
  GGSTextFieldDefaultStrategy.prototype.displayText = function (e, t = null) {
    if (t && t instanceof i.HTMLTextVO) {
      this._textField.originalTextField.htmlText = e;
    } else {
      this._textField.originalTextField.text = e;
    }
  };
  GGSTextFieldDefaultStrategy.prototype.applyFontConfiguration = function (e) {
    this.currentFontConfig = e;
    this.updateTextFormat();
  };
  GGSTextFieldDefaultStrategy.prototype.activate = function () {
    if (o.GGSCountryController.instance.currentCountry.isLanguageWrittenRightToLeft) {
      this._textField.model.textAlign = this._textField.model.textAlignOriginal !== l.GGSTextAlign.LEFT ? this._textField.model.textAlignOriginal : l.GGSTextAlign.RIGHT;
    } else {
      this._textField.model.textAlign = this._textField.model.textAlignOriginal;
    }
    for (var e = 0, t = this._textField.model.registeredEventListeners; e < t.length; e++) {
      var n = t[e];
      this.addEventListenerForEventType(n);
    }
    this._textField.originalTextField.visible = true;
  };
  GGSTextFieldDefaultStrategy.prototype.deactivate = function () {
    this._textField.originalTextField.visible = false;
    for (var e = 0, t = this._textField.model.registeredEventListeners; e < t.length; e++) {
      var n = t[e];
      this.removeEventListenerForEventType(n);
    }
  };
  GGSTextFieldDefaultStrategy.prototype.setFocus = function () {};
  GGSTextFieldDefaultStrategy.prototype.updateTabIndex = function (e) {
    this._textField.originalTextField.tabIndex = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateTabEnabled = function (e) {
    this._textField.originalTextField.tabEnabled = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateMaxChars = function (e) {
    this._textField.originalTextField.maxChars = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateX = function (e) {
    this._textField.originalTextField.x = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateY = function (e) {
    this._textField.originalTextField.y = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateWidth = function (e) {
    this._textField.originalTextField.width = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateHeight = function (e) {
    this._textField.originalTextField.height = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateScaleX = function (e) {
    this._textField.originalTextField.scaleX = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateScaleY = function (e) {
    this._textField.originalTextField.scaleY = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateScrollV = function (e) {
    this._textField.originalTextField.scrollV = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateRotation = function (e) {
    this._textField.originalTextField.rotation = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateBackground = function (e) {
    this._textField.originalTextField.background = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateBackgroundColor = function (e) {
    this._textField.originalTextField.backgroundColor = e;
  };
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "maxScrollV", {
    get: function () {
      return this._textField.originalTextField.maxScrollV;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "scrollV", {
    get: function () {
      return this._textField.originalTextField.scrollV;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldDefaultStrategy.prototype.updateIndent = function (e) {
    var t = this._textField.originalTextField.defaultTextFormat;
    t.indent = e;
    this._textField.originalTextField.defaultTextFormat = t;
    this._textField.originalTextField.setTextFormat(t);
  };
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "currentFontConfig", {
    get: function () {
      return this._currentFontConfig;
    },
    set: function (e) {
      this._currentFontConfig = e;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldDefaultStrategy.prototype.dispose = function () {
    this._textField.originalTextField.removeEventListener("click", this.bindFunction(this.onClickEvent));
    this._textField.originalTextField.removeEventListener("mouseover", this.bindFunction(this.onMouseOverEvent));
    this._textField.originalTextField.removeEventListener("mouseout", this.bindFunction(this.onMouseOutEvent));
    this._textField.originalTextField.removeEventListener(s.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDownEvent));
    this._textField.originalTextField.removeEventListener(s.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUpEvent));
    this._textField.originalTextField.removeEventListener(c.FOCUS_OUT, this.bindFunction(this.onFocusOutEvent));
    this._textField.originalTextField.removeEventListener(c.FOCUS_IN, this.bindFunction(this.onFocusInEvent));
    this._textField.originalTextField.removeEventListener(u.CHANGE, this.bindFunction(this.onChangeEvent));
    this._textField.originalTextField.removeEventListener(d.LINK, this.bindFunction(this.onTextEventLinkEvent));
    this._textField.originalTextField.removeEventListener(u.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStageEvent));
    this._textField = null;
    this._currentFontConfig = null;
  };
  GGSTextFieldDefaultStrategy.prototype.updateDisplayAsPassword = function (e) {
    this._textField.originalTextField.displayAsPassword = e;
  };
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "containsDefaultTextContent", {
    get: function () {
      var e = this._textField.text;
      if (this._textField.originalTextField.displayAsPassword) {
        e = a.TextValide.trimPassword(this._textField.text);
      }
      return e === this._textField.model.textDefault;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldDefaultStrategy.prototype.updateMultiline = function (e) {
    this._textField.originalTextField.multiline = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateWordwrap = function (e) {
    this._textField.originalTextField.wordWrap = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateRestrict = function (e) {
    this._textField.originalTextField.restrict = e;
  };
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "textWidth", {
    get: function () {
      return this._textField.originalTextField.textWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "textHeight", {
    get: function () {
      return this._textField.originalTextField.textHeight;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldDefaultStrategy.prototype.addEventListenerForEventType = function (e) {
    switch (e) {
      case _.CLICK:
        this._textField.originalTextField.addEventListener(_.CLICK, this.bindFunction(this.onClickEvent));
        break;
      case c.FOCUS_IN:
        this._textField.originalTextField.addEventListener(c.FOCUS_IN, this.bindFunction(this.onFocusInEvent));
        break;
      case c.FOCUS_OUT:
        this._textField.originalTextField.addEventListener(c.FOCUS_OUT, this.bindFunction(this.onFocusOutEvent));
        break;
      case s.KeyboardEvent.KEY_DOWN:
        this._textField.originalTextField.addEventListener(s.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDownEvent));
        break;
      case s.KeyboardEvent.KEY_UP:
        this._textField.originalTextField.addEventListener(s.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUpEvent));
        break;
      case _.MOUSE_OVER:
        this._textField.originalTextField.addEventListener(_.MOUSE_OVER, this.bindFunction(this.onMouseOverEvent));
        break;
      case _.MOUSE_OUT:
        this._textField.originalTextField.addEventListener(_.MOUSE_OUT, this.bindFunction(this.onMouseOutEvent));
        break;
      case r.HTMLLinkClickSignal.HTML_LINK_CLICK:
        this._textField.originalTextField.addEventListener(d.LINK, this.bindFunction(this.onTextEventLinkEvent));
        break;
      case u.CHANGE:
        this._textField.originalTextField.addEventListener(u.CHANGE, this.bindFunction(this.onChangeEvent));
        break;
      case u.REMOVED_FROM_STAGE:
        this._textField.originalTextField.addEventListener(u.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStageEvent));
        break;
      case _.MOUSE_WHEEL:
        this._textField.originalTextField.addEventListener(_.MOUSE_WHEEL, this.bindFunction(this.onScrollEvent));
        break;
      default:
        p.warn("Not supported event type: " + e);
    }
  };
  GGSTextFieldDefaultStrategy.prototype.removeEventListenerForEventType = function (e) {
    switch (e) {
      case _.CLICK:
        this._textField.originalTextField.removeEventListener(_.CLICK, this.bindFunction(this.onClickEvent));
        break;
      case c.FOCUS_IN:
        this._textField.originalTextField.removeEventListener(c.FOCUS_IN, this.bindFunction(this.onFocusInEvent));
        break;
      case c.FOCUS_OUT:
        this._textField.originalTextField.removeEventListener(c.FOCUS_OUT, this.bindFunction(this.onFocusOutEvent));
        break;
      case s.KeyboardEvent.KEY_DOWN:
        this._textField.originalTextField.removeEventListener(s.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDownEvent));
        break;
      case s.KeyboardEvent.KEY_UP:
        this._textField.originalTextField.removeEventListener(s.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUpEvent));
        break;
      case _.MOUSE_OVER:
        this._textField.originalTextField.removeEventListener(_.MOUSE_OVER, this.bindFunction(this.onMouseOverEvent));
        break;
      case _.MOUSE_OUT:
        this._textField.originalTextField.removeEventListener(_.MOUSE_OUT, this.bindFunction(this.onMouseOutEvent));
        break;
      case r.HTMLLinkClickSignal.HTML_LINK_CLICK:
        this._textField.originalTextField.removeEventListener(d.LINK, this.bindFunction(this.onTextEventLinkEvent));
        break;
      case u.CHANGE:
        this._textField.originalTextField.removeEventListener(u.CHANGE, this.bindFunction(this.onChangeEvent));
        break;
      case u.REMOVED_FROM_STAGE:
        this._textField.originalTextField.removeEventListener(u.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStageEvent));
        break;
      case _.MOUSE_WHEEL:
        this._textField.originalTextField.removeEventListener(_.MOUSE_WHEEL, this.bindFunction(this.onScrollEvent));
        break;
      default:
        p.warn("Not supported event type.");
    }
  };
  GGSTextFieldDefaultStrategy.prototype.hasEventListenerForEventType = function (e) {
    return this._textField.originalTextField.hasEventListener(e);
  };
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "caretIndex", {
    get: function () {
      return this._textField.originalTextField.caretIndex;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldDefaultStrategy.prototype.updateMouseEnabled = function (e) {
    this._textField.originalTextField.mouseEnabled = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateVerticalAlign = function (e) {
    this._textField.originalTextField.verticalAlign = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateTextAlign = function (e) {
    this._currentFontConfig.textFormat.align = e;
    this.updateTextFormat();
  };
  GGSTextFieldDefaultStrategy.prototype.setSelection = function (e, t) {
    this._textField.originalTextField.setSelection(e, t);
  };
  GGSTextFieldDefaultStrategy.prototype.updateSelectable = function (e) {
    this._textField.originalTextField.selectable = e;
  };
  GGSTextFieldDefaultStrategy.prototype.updateType = function (e) {
    if (e === s.TextFieldType.INPUT) {
      this._textField.originalTextField.type = e;
      this.activateInputFieldBehaviour();
    } else if (e === s.TextFieldType.DYNAMIC) {
      this._textField.originalTextField.type = e;
      this.deactivateInputFieldBehaviour();
    } else {
      p.warn("Unsupported type: " + e);
    }
  };
  GGSTextFieldDefaultStrategy.prototype.updateSize = function (e) {
    this._currentFontConfig.textFormat.size = e;
    this.updateTextFormat();
  };
  GGSTextFieldDefaultStrategy.prototype.updateColor = function (e) {
    this._currentFontConfig.textFormat.color = e;
    this.updateTextFormat();
  };
  GGSTextFieldDefaultStrategy.prototype.updateTextFormat = function () {
    this._textField.originalTextField.setTextFormat(this._currentFontConfig.textFormat);
  };
  GGSTextFieldDefaultStrategy.prototype.updateVisible = function (e) {
    this._textField.originalTextField.visible = e;
  };
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "autoSize", {
    set: function (e) {
      this._textField.originalTextField.autoSize = e;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldDefaultStrategy.prototype.fitTextSizeToBounds = function (e = null) {};
  GGSTextFieldDefaultStrategy.prototype.updateAutoFitToBounds = function (e) {
    if (e) {
      this.fitTextSizeToBounds();
    }
  };
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "autoFitToBounds", {
    get: function () {
      return this._textField.model.autoFitToBounds;
    },
    set: function (e) {
      this._textField.model.autoFitToBounds = e;
      this.updateAutoFitToBounds(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSTextFieldDefaultStrategy.prototype, "numLines", {
    get: function () {
      return this._textField.originalTextField.numLines;
    },
    enumerable: true,
    configurable: true
  });
  GGSTextFieldDefaultStrategy.NAME = "GGSTextFieldDefaultStrategy";
  return GGSTextFieldDefaultStrategy;
}();
exports.GGSTextFieldDefaultStrategy = g;