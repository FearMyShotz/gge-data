Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./18.js");
var s = require("./18.js");
var r = require("./101.js");
var o = function (e) {
  function GoodgameInputTextField(t) {
    var n = e.call(this, t) || this;
    n._userWroteSomething = false;
    n.updateStrategyListeners();
    n.selectable = true;
    return n;
  }
  i.__extends(GoodgameInputTextField, e);
  GoodgameInputTextField.prototype.updateStrategyListeners = function () {
    this.focusOut.add(this.bindFunction(this.restoreDefaultTextContentForEmptyTextFields));
    this.focusIn.add(this.bindFunction(this.removeDefaultTextContent));
  };
  GoodgameInputTextField.prototype.resolveTextContent = function (t) {
    if (t instanceof a.HTMLTextVO) {
      throw new Error(GoodgameInputTextField.NAME + ", resolveTextContent() -> Input TextFields doesn't support HTMLTextVOs.");
    }
    if (this.text == "" || !this._userWroteSomething) {
      e.prototype.resolveTextContent.call(this, t);
    }
  };
  GoodgameInputTextField.prototype.removeDefaultTextContent = function (e) {
    var t = this._model.text;
    if (this.displayAsPassword) {
      t = r.TextValide.trimPassword(t);
    }
    if (t == this._model.textDefault) {
      this.text = "";
      this._userWroteSomething = true;
    }
  };
  GoodgameInputTextField.prototype.restoreDefaultTextContentForEmptyTextFields = function (e) {
    if (this._textContentDefaultVO) {
      var t = this.text;
      if (this.displayAsPassword) {
        t = r.TextValide.trimPassword(t);
      }
      if (t == "") {
        this.text = this._textContentDefaultVO.compose();
        this._userWroteSomething = false;
      }
    }
  };
  GoodgameInputTextField.prototype.displayText = function () {
    if (!(this._textContentVO instanceof a.HTMLTextVO)) {
      var e = this._model.text;
      if (!isNaN(this._model.maxChars) && this._model.maxChars > 0 && !this.containsDefaultTextContent) {
        e = this._model.text.slice(0, this._model.maxChars);
      }
      if (e === null) {
        e = "";
        this.printOutDebugInfos();
      }
      if (this._textContentDefaultVO instanceof s.LocalizedTextVO) {
        this._model.textDefault = this._textContentDefaultVO.compose();
      }
      if (this._displayAsPassword) {
        if (this.text != this._model.textDefault || this._model.textDefault == "") {
          this._model.displayAsPassword = true;
        } else {
          this._model.displayAsPassword = false;
        }
      }
      this._textStrategy.displayText(e);
    }
  };
  Object.defineProperty(GoodgameInputTextField.prototype, "textContentDefaultVO", {
    get: function () {
      return this._textContentDefaultVO;
    },
    set: function (e) {
      if (e instanceof a.HTMLTextVO) {
        throw new Error(GoodgameInputTextField.NAME + "textContentDefaultVO() -> Input TextFields doesn't support HTMLTextVOs.");
      }
      this._textContentDefaultVO = e;
      this._model.textDefault = e.compose();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameInputTextField.prototype, "containsDefaultTextContent", {
    get: function () {
      return this._textStrategy.containsDefaultTextContent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameInputTextField.prototype, "displayAsPassword", {
    get: function () {
      return this._displayAsPassword;
    },
    set: function (e) {
      this._displayAsPassword = e;
      if (this._originalTextField) {
        this._originalTextField.displayAsPassword = e;
      }
    },
    enumerable: true,
    configurable: true
  });
  GoodgameInputTextField.NAME = "GoodgameInputTextField";
  return GoodgameInputTextField;
}(require("./167.js").GoodgameTextField);
exports.GoodgameInputTextField = o;