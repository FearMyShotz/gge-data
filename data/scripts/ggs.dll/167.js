Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./18.js");
var a = require("./31.js");
var s = require("./30.js");
var r = require("./35.js");
var o = require("./119.js");
var l = require("./343.js");
var u = require("./344.js");
var c = require("./345.js");
var _ = require("./346.js");
var d = require("./168.js");
var m = require("./347.js");
var h = require("./348.js");
var p = require("./349.js");
var g = require("./350.js");
var E = require("./351.js");
var C = require("./352.js");
var f = require("./353.js");
var T = require("./354.js");
var S = require("./2.js");
var y = require("./355.js");
var I = require("./3.js");
var v = S.getLogger("GoodgameTextField");
var A = function () {
  function GoodgameTextField(e) {
    this._availableStrategies = [];
    this.isFontConfigInitiallyApplied = false;
    this._originalTextField = e;
    this._originalFontConfig = new o.FontConfigVO();
    this._originalFontConfig.initalize(this._originalTextField);
    this._model = new T.GGSTextFieldModel(this);
    this.useDefaultStrategy();
  }
  GoodgameTextField.prototype.useTLFStrategy = function () {
    v.debug("useTLFStrategy not implemented");
  };
  GoodgameTextField.prototype.useDefaultStrategy = function () {
    v.debug("useDefaultStrategy ");
    this._availableStrategies[0] ||= new y.GGSTextFieldDefaultStrategy(this);
    this.activateStrategy(this._availableStrategies[0]);
  };
  GoodgameTextField.prototype.activateStrategy = function (e) {
    if (e != this._textStrategy) {
      if (this._textStrategy) {
        this._textStrategy.deactivate();
      }
      this._textStrategy = e;
      this._textStrategy.activate();
      this.updateStrategyListeners();
    }
  };
  GoodgameTextField.prototype.updateStrategyListeners = function () {};
  GoodgameTextField.prototype.onSignalRemoved = function (e) {
    if (this._textStrategy && this._textStrategy.hasEventListenerForEventType(e)) {
      this._model.removeRegisteredEventListener(e);
      this._textStrategy.removeEventListenerForEventType(e);
    }
  };
  GoodgameTextField.prototype.onSignalAdded = function (e) {
    if (!this._textStrategy.hasEventListenerForEventType(e)) {
      this._model.addRegisteredEventListener(e);
      this._textStrategy.addEventListenerForEventType(e);
    }
  };
  Object.defineProperty(GoodgameTextField.prototype, "click", {
    get: function () {
      if (!this._clickSignal) {
        this._clickSignal = new u.ClickSignal();
        this._clickSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._clickSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._clickSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "keyDown", {
    get: function () {
      if (!this._keyDownSignal) {
        this._keyDownSignal = new m.KeyDownSignal();
        this._keyDownSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._keyDownSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._keyDownSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "keyUp", {
    get: function () {
      if (!this._keyUpSignal) {
        this._keyUpSignal = new h.KeyUpSignal();
        this._keyUpSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._keyUpSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._keyUpSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "mouseOver", {
    get: function () {
      if (!this._mouseOverSignal) {
        this._mouseOverSignal = new g.MouseOverSignal();
        this._mouseOverSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._mouseOverSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._mouseOverSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "mouseOut", {
    get: function () {
      if (!this._mouseOutSignal) {
        this._mouseOutSignal = new p.MouseOutSignal();
        this._mouseOutSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._mouseOutSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._mouseOutSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "focusIn", {
    get: function () {
      if (!this._focusInSignal) {
        this._focusInSignal = new c.FocusInSignal();
        this._focusInSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._focusInSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._focusInSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "focusOut", {
    get: function () {
      if (!this._focusOutSignal) {
        this._focusOutSignal = new _.FocusOutSignal();
        this._focusOutSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._focusOutSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._focusOutSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "htmlLinkClick", {
    get: function () {
      if (!this._htmlLinkClickSignal) {
        this._htmlLinkClickSignal = new d.HTMLLinkClickSignal();
        this._htmlLinkClickSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._htmlLinkClickSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._htmlLinkClickSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "textInput", {
    get: function () {
      if (!this._textInputSignal) {
        this._textInputSignal = new f.TextInputSignal();
        this._textInputSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._textInputSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._textInputSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "change", {
    get: function () {
      if (!this._changeSignal) {
        this._changeSignal = new l.ChangeSignal();
        this._changeSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._changeSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._changeSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "removedFromStage", {
    get: function () {
      if (!this._removedFromStageSignal) {
        this._removedFromStageSignal = new E.RemovedFromStageSignal();
        this._removedFromStageSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._removedFromStageSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._removedFromStageSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "scroll", {
    get: function () {
      if (!this._scrollSignal) {
        this._scrollSignal = new C.ScrollSignal();
        this._scrollSignal.removed = this.bindFunction(this.onSignalRemoved);
        this._scrollSignal.added = this.bindFunction(this.onSignalAdded);
      }
      return this._scrollSignal;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.prototype.displayText = function () {
    if (this._textContentVO instanceof i.HTMLTextVO) {
      this._textStrategy.displayText(this._model.text, this._textContentVO);
    } else {
      var e = this._model.text;
      if (!isNaN(this._model.maxChars) && this._model.maxChars > 0) {
        e = this._model.text.slice(0, this._model.maxChars);
      }
      if (e === null) {
        e = "";
        this.printOutDebugInfos();
      }
      this._textStrategy.displayText(e);
    }
  };
  GoodgameTextField.prototype.printOutDebugInfos = function () {
    if (this._originalTextField) {
      var e = this._originalTextField.name;
      var t = (this._originalTextField.parent ? this._originalTextField.parent.name + "." : "") + e;
      var n = this.textContentVO ? ", textContendVO: " + this.textContentVO.toString() : "";
      r.warn("Text is null. TextField:" + t + n);
    }
  };
  GoodgameTextField.prototype.resolveTextContent = function (e) {
    this._model.text = e.compose();
  };
  GoodgameTextField.prototype.applyFontConfiguration = function (e) {
    this._textStrategy.applyFontConfiguration(e);
  };
  Object.defineProperty(GoodgameTextField.prototype, "color", {
    get: function () {
      return this._model.color;
    },
    set: function (e) {
      this._model.color = I.ColorTransform.colorNumToString(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "originalTextField", {
    get: function () {
      return this._originalTextField;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.prototype.unregister = function () {
    if (this.currentFontConfig == this._loadedFontConfig) {
      this.applyFontConfiguration(this._originalFontConfig);
      this._originalTextField.y = this._originalFontConfig.yPosOriginal;
    }
    if (this._clickSignal) {
      this._clickSignal.removeAll();
      this._clickSignal = null;
    }
    if (this._focusInSignal) {
      this._focusInSignal.removeAll();
      this._focusInSignal = null;
    }
    if (this._focusOutSignal) {
      this._focusOutSignal.removeAll();
      this._focusOutSignal = null;
    }
    if (this._keyDownSignal) {
      this._keyDownSignal.removeAll();
      this._keyDownSignal = null;
    }
    if (this._mouseOverSignal) {
      this._mouseOverSignal.removeAll();
      this._mouseOverSignal = null;
    }
    if (this._mouseOutSignal) {
      this._mouseOutSignal.removeAll();
      this._mouseOutSignal = null;
    }
    if (this._htmlLinkClickSignal) {
      this._htmlLinkClickSignal.removeAll();
      this._htmlLinkClickSignal = null;
    }
    if (this._textInputSignal) {
      this._textInputSignal.removeAll();
      this._textInputSignal = null;
    }
    if (this._scrollSignal) {
      this._scrollSignal.removeAll();
      this._scrollSignal = null;
    }
    for (var e = 0, t = this._availableStrategies; e < t.length; e++) {
      var n = t[e];
      n.dispose();
      n = null;
    }
    this._availableStrategies = null;
    this._textStrategy = null;
    this._originalTextField.visible = this._originalFontConfig.visible;
    this._originalTextField = null;
    this._originalFontConfig.dispose();
    this._originalFontConfig = null;
    if (this._loadedFontConfig) {
      this._loadedFontConfig.dispose();
      this._loadedFontConfig = null;
    }
    if (this._textContentVO) {
      this._textContentVO.dispose();
      this._textContentVO = null;
    }
    this._model.dispose();
    this._model = null;
  };
  Object.defineProperty(GoodgameTextField.prototype, "originalFontConfig", {
    get: function () {
      return this._originalFontConfig;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "loadedFontConfig", {
    get: function () {
      return this._loadedFontConfig;
    },
    set: function (e) {
      this._loadedFontConfig = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "autoSize", {
    set: function (e) {
      this._model.autoSize = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "uid", {
    get: function () {
      return this._model.uid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "x", {
    get: function () {
      return this._model.x;
    },
    set: function (e) {
      this._model.x = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "y", {
    get: function () {
      return this._model.y;
    },
    set: function (e) {
      this._model.y = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "width", {
    get: function () {
      return this._model.width;
    },
    set: function (e) {
      this._model.width = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "height", {
    get: function () {
      return this._model.height;
    },
    set: function (e) {
      this._model.height = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "text", {
    get: function () {
      return this._model.text;
    },
    set: function (e) {
      this._model.text = e;
      this.displayText();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "currentFontConfig", {
    get: function () {
      return this._textStrategy.currentFontConfig;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "data", {
    get: function () {
      return this._model.data;
    },
    set: function (e) {
      this._model.data = e;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.prototype.setFocus = function () {
    this._textStrategy.setFocus();
  };
  Object.defineProperty(GoodgameTextField.prototype, "tabIndex", {
    get: function () {
      return this._model.tabIndex;
    },
    set: function (e) {
      this._model.tabIndex = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "tabEnabled", {
    get: function () {
      return this._model.tabEnabled;
    },
    set: function (e) {
      this._model.tabEnabled = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "maxChars", {
    set: function (e) {
      this._model.maxChars = e;
      this.displayText();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "textContentVO", {
    get: function () {
      if (this._textContentVO) {
        this._textContentVO.propertyChangedSignal.add(this.bindFunction(this.onTextContentVOChanged));
        return this._textContentVO;
      } else {
        if (this._originalTextField) {
          s.debug(this._originalTextField.name);
        } else {
          s.debug(" get textContentVO: VO is null. (_originalTextField is null)");
        }
        return null;
      }
    },
    set: function (e) {
      this._textContentVO = e;
      if (this._textContentVO.triggerUpdate) {
        this.displayLocalizedText(a.GGSCountryController.instance.currentCountry.ggsLanguageCode, this._textContentVO);
      }
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.prototype.onTextContentVOChanged = function () {
    if (this._textContentVO.triggerUpdate) {
      this.displayLocalizedText(a.GGSCountryController.instance.currentCountry.ggsLanguageCode, this._textContentVO);
    }
  };
  GoodgameTextField.prototype.displayLocalizedText = function (e, t = null) {
    if (t) {
      this._textContentVO = t;
    }
    if (this._textContentVO.triggerUpdate) {
      this.resolveTextContent(t);
      var n;
      var a = this._originalFontConfig;
      if (a !== this.textStrategy.currentFontConfig || !this.isFontConfigInitiallyApplied || !!this.autoFitToBounds) {
        n = true;
        this.isFontConfigInitiallyApplied = true;
        if (t instanceof i.HTMLTextVO) {
          t.appendText = false;
        }
        this.chooseTextRenderingStrategy(e, a);
        this.applyFontConfiguration(a);
      }
      this.displayText();
      this.updateProperties(n);
    }
  };
  GoodgameTextField.prototype.updateProperties = function (e = false) {
    if (!this._model.initialized || !!e) {
      this._model.updateAllProperties(true);
      this._model.initialized = true;
    }
  };
  GoodgameTextField.prototype.chooseTextRenderingStrategy = function (e, t) {
    this.useDefaultStrategy();
  };
  Object.defineProperty(GoodgameTextField.prototype, "multiline", {
    get: function () {
      return this._model.multiline;
    },
    set: function (e) {
      this._model.multiline = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "restrict", {
    get: function () {
      return this._model.restrict;
    },
    set: function (e) {
      this._model.restrict = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "wordwrap", {
    get: function () {
      return this._model.wordwrap;
    },
    set: function (e) {
      this._model.wordwrap = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "textWidth", {
    get: function () {
      return this._textStrategy.textWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "textHeight", {
    get: function () {
      return this._textStrategy.textHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "caretIndex", {
    get: function () {
      return this._textStrategy.caretIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "mouseEnabled", {
    get: function () {
      return this._model.mouseEnabled;
    },
    set: function (e) {
      this._model.mouseEnabled = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "verticalAlign", {
    set: function (e) {
      this._model.verticalAlign = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "textAlign", {
    set: function (e) {
      this._model.textAlign = e;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.prototype.setSelection = function (e, t) {
    this._textStrategy.setSelection(e, t);
  };
  Object.defineProperty(GoodgameTextField.prototype, "selectable", {
    get: function () {
      return this._model.selectable;
    },
    set: function (e) {
      this._model.selectable = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "type", {
    get: function () {
      return this._model.type;
    },
    set: function (e) {
      this._model.type = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "size", {
    get: function () {
      return this._model.size;
    },
    set: function (e) {
      this._model.size = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "model", {
    get: function () {
      return this._model;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "visible", {
    get: function () {
      return this._model.visible;
    },
    set: function (e) {
      this._model.visible = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "scaleX", {
    get: function () {
      return this._model.scaleX;
    },
    set: function (e) {
      this._model.scaleX = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "scaleY", {
    get: function () {
      return this._model.scaleY;
    },
    set: function (e) {
      this._model.scaleY = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "rotation", {
    get: function () {
      return this._model.rotation;
    },
    set: function (e) {
      this._model.rotation = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "background", {
    get: function () {
      return this._model.background;
    },
    set: function (e) {
      this._model.background = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "backgroundColor", {
    get: function () {
      return this._model.backgroundColor;
    },
    set: function (e) {
      this._model.backgroundColor = e;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.prototype.fitTextSizeToBounds = function (e = null) {
    this._textStrategy.fitTextSizeToBounds(e);
  };
  Object.defineProperty(GoodgameTextField.prototype, "numLines", {
    get: function () {
      return this._textStrategy.numLines;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.prototype.clearText = function () {
    this.text = "";
  };
  GoodgameTextField.prototype.restoreTextContent = function () {
    this.displayText();
  };
  Object.defineProperty(GoodgameTextField.prototype, "indent", {
    set: function (e) {
      this._model.indent = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "textStrategy", {
    get: function () {
      return this._textStrategy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "autoFitToBounds", {
    get: function () {
      return this._model.autoFitToBounds;
    },
    set: function (e) {
      this._model.autoFitToBounds = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "scrollV", {
    get: function () {
      return this._model.scrollV;
    },
    set: function (e) {
      this._model.scrollV = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextField.prototype, "maxScrollV", {
    get: function () {
      return this.textStrategy.maxScrollV;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextField.NAME = "GoodgameTextField";
  return GoodgameTextField;
}();
exports.GoodgameTextField = A;