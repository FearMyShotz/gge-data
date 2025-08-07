Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./166.js");
var a = require("./18.js");
var s = require("./31.js");
var r = require("./73.js");
var o = require("./3.js");
var l = require("./2.js");
var u = require("./29.js");
var c = createjs.Event;
var _ = l.getLogger(u.TEXT_FIELDS_LOGGER + ".GoodgameTextFieldManager");
var d = function () {
  function GoodgameTextFieldManager() {
    this._minimumAutoFitFontSize = 8;
    this._maximumAutoFitFontSize = 20;
    this.resetTextFieldList();
    if (GoodgameTextFieldManager.textFieldManager) {
      throw new Error(GoodgameTextFieldManager.NAME + " Calling constructor not allowed! Use getInstance instead.");
    }
  }
  GoodgameTextFieldManager.getInstance = function () {
    GoodgameTextFieldManager.textFieldManager ||= new GoodgameTextFieldManager();
    return GoodgameTextFieldManager.textFieldManager;
  };
  GoodgameTextFieldManager.prototype.resetTextFieldList = function () {
    this._textFieldList = new Map();
    this._maxRegisteredTextFields = 0;
  };
  Object.defineProperty(GoodgameTextFieldManager.prototype, "countryController", {
    get: function () {
      return s.GGSCountryController.instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextFieldManager.prototype, "textFieldFactory", {
    get: function () {
      this._textFieldFactory ||= new i.GoodgameAdvancedTextFieldFactory();
      return this._textFieldFactory;
    },
    set: function (e) {
      this._textFieldFactory = e;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextFieldManager.prototype.isTextFieldRegistered = function (e) {
    return r.DictionaryUtil.containsKey(this._textFieldList, e);
  };
  GoodgameTextFieldManager.prototype.getTextField = function (e) {
    return this.getInternalTextField(e);
  };
  GoodgameTextFieldManager.prototype.getInternalTextField = function (e) {
    if (e) {
      return this._textFieldList.get(e) || this.referenceTextField(e);
    } else {
      _.info("textField is null");
      return null;
    }
  };
  GoodgameTextFieldManager.prototype.referenceTextField = function (e) {
    var t = this.textFieldFactory.createAdvancedTextField(e);
    this._textFieldList.set(e, t);
    return t;
  };
  GoodgameTextFieldManager.prototype.onMouseOut = function (e) {
    this._mouseOutBehaviour.execute();
  };
  GoodgameTextFieldManager.prototype.onMouseOver = function (e) {
    this._mouseOverBehaviour.execute();
  };
  GoodgameTextFieldManager.prototype.unregisterTextField = function (e) {
    var t;
    return !!r.DictionaryUtil.containsKey(this._textFieldList, e) && (t = this._textFieldList.get(e), this._textFieldList.delete(e), t.unregister(), true);
  };
  GoodgameTextFieldManager.prototype.unregisterTextFieldByReference = function (e) {
    var t;
    if (r.DictionaryUtil.containsValue(this._textFieldList, e)) {
      var n = r.DictionaryUtil.getKeyForValue(this._textFieldList, e);
      t = this._textFieldList.get(n);
      this._textFieldList.delete(n);
      t.unregister();
      return true;
    }
    return false;
  };
  Object.defineProperty(GoodgameTextFieldManager.prototype, "registeredTextFieldAmount", {
    get: function () {
      return this._textFieldList.size;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextFieldManager.prototype.unregisterAllTextFields = function () {
    for (var e = 0, t = Array.from(this._textFieldList.values()); e < t.length; e++) {
      var n = t[e];
      this._textFieldList.delete(n.originalTextField);
      n.unregister();
      n = null;
    }
    this.resetTextFieldList();
  };
  GoodgameTextFieldManager.prototype.saveAndSetText = function (e, t, n = null, i = true) {
    if (e) {
      if (t != null) {
        var s = this.getInternalTextField(e);
        this.updateText(s, new a.LocalizedTextVO(t, n, i));
      } else {
        _.warn("id for textField: " + e.name + " is null");
      }
    } else {
      _.warn("textfield for id: " + t + " is missing");
    }
  };
  GoodgameTextFieldManager.prototype.setText = function (e, t, n = true) {
    if (e) {
      if (t == null) {
        _.warn("text for textField: " + e.name + " is null");
        t = "";
      }
      var i = this.getInternalTextField(e);
      var s = Number(t);
      if (t != "" && n && !Number.isNaN(s)) {
        i.textContentVO = new a.LocalizedNumberVO(s);
      } else {
        i.textContentVO = new a.TextVO(t);
      }
    } else {
      _.warn("textfield for id: " + t + " is missing");
    }
  };
  GoodgameTextFieldManager.prototype.updateText = function (e, t) {
    _.debug("updateText ", e, t);
    if (!this._languageData || !this._languageData.languageXMLLoaded) {
      _.debug("Language XML not loaded yet, cannot update textfields." + this._languageData, this._languageData.languageXMLLoaded, e.textContentVO);
      t.triggerUpdate = false;
      e.textContentVO = t;
      e.clearText();
      return;
    }
    t.triggerUpdate = true;
    if (e.type == o.TextFieldType.INPUT) {
      e.mouseOver.add(this.bindFunction(this.onMouseOver));
      e.mouseOut.add(this.bindFunction(this.onMouseOut));
    }
    e.displayLocalizedText(s.GGSCountryController.instance.currentCountry.ggsLanguageCode, t);
  };
  GoodgameTextFieldManager.prototype.registerInputTextField = function (e, t, n = null, i = true) {
    return this.saveAndSetText(e, t, n, i);
  };
  GoodgameTextFieldManager.prototype.validateColor = function (e) {
    if (typeof e == "string") {
      return e;
    } else {
      return o.ColorTransform.colorNumToString(e);
    }
  };
  GoodgameTextFieldManager.prototype.registerTextField = function (e, t, n = null) {
    if (!e) {
      var i = t ? " textContentVO: " + t.toString() : "";
      _.error("TextField is null." + i);
      return null;
    }
    if (t === null) {
      _.error("textObject is null");
      return null;
    }
    if (n) {
      this.applyInternalGGSTextFieldConfiguration(n, e);
    }
    if (t instanceof a.HTMLTextVO && t.linkFormats) {
      var s = t.linkFormats;
      e.htmlLinkFormats = {
        hover: {
          color: this.validateColor(s.linkHoverFormat.color),
          underline: s.linkHoverFormat.textDecoration === u.GGSTextDecoration.UNDERLINE
        },
        normal: {
          color: this.validateColor(s.linkNormalFormat.color),
          underline: s.linkNormalFormat.textDecoration === u.GGSTextDecoration.UNDERLINE
        },
        active: {
          color: this.validateColor(s.linkActiveFormat.color),
          underline: s.linkActiveFormat.textDecoration === u.GGSTextDecoration.UNDERLINE
        }
      };
    }
    var r = this.getInternalTextField(e);
    if (r.model.type === "input") {
      r.textContentVO = t;
    }
    this.updateText(r, t);
    return r;
  };
  GoodgameTextFieldManager.prototype.applyInternalGGSTextFieldConfiguration = function (e, t) {
    _.debug("applyInternalGGSTextFieldConfiguration", e, t);
    if (e.unRegisterAutomaticallyOnRemovedFromStage) {
      t.addEventListener(c.REMOVED_FROM_STAGE, this.bindFunction(this.onOriginalTextFieldRemoved));
    }
  };
  GoodgameTextFieldManager.prototype.onOriginalTextFieldRemoved = function (e) {
    e.target.removeEventListener(c.REMOVED_FROM_STAGE, this.bindFunction(this.onOriginalTextFieldRemoved));
    this.unregisterTextField(e.target);
  };
  GoodgameTextFieldManager.prototype.updateTextInAllTextFields = function () {
    for (var e = 0, t = Array.from(this._textFieldList.values()); e < t.length; e++) {
      var n = t[e];
      if (n.textContentVO) {
        n.textStrategy.activate();
        this.updateText(n, n.textContentVO);
      }
    }
  };
  GoodgameTextFieldManager.prototype.dispose = function () {};
  Object.defineProperty(GoodgameTextFieldManager.prototype, "mouseOutBehaviour", {
    set: function (e) {
      this._mouseOutBehaviour = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextFieldManager.prototype, "mouseOverBehaviour", {
    set: function (e) {
      this._mouseOverBehaviour = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextFieldManager.prototype, "languageData", {
    get: function () {
      return this._languageData;
    },
    set: function (e) {
      this._languageData = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextFieldManager.prototype, "minimumAutoFitFontSize", {
    get: function () {
      return this._minimumAutoFitFontSize;
    },
    set: function (e) {
      this._minimumAutoFitFontSize = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextFieldManager.prototype, "maximumAutoFitFontSize", {
    get: function () {
      return this._maximumAutoFitFontSize;
    },
    set: function (e) {
      this._maximumAutoFitFontSize = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextFieldManager.prototype, "textFieldList", {
    get: function () {
      return this._textFieldList;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextFieldManager.NAME = "GoodgameTextFieldManager";
  return GoodgameTextFieldManager;
}();
exports.GoodgameTextFieldManager = d;