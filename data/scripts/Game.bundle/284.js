Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./8.js");
var a = require("./20.js");
var s = require("./40.js");
var r = createjs.MouseEvent;
var l = function (e) {
  function HighlightAndClearInputTextBehaviour(t, i, n = true) {
    var s = e.call(this, t) || this;
    s._itxt_text = i;
    s._defaultText = s._itxt_text.text;
    s._hasDefaultText = n;
    o.ButtonHelper.initButtons([s.disp.mc_selected.btn_clear], a.ClickFeedbackButtonHover);
    return s;
  }
  n.__extends(HighlightAndClearInputTextBehaviour, e);
  HighlightAndClearInputTextBehaviour.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this._itxt_text) {
      this._itxt_text.focusIn.add(this.bindFunction(this.onFocusInSearchText));
      this._itxt_text.focusOut.add(this.bindFunction(this.onFocusOutSearchText));
    }
    if (this.disp) {
      this.disp.addEventListener(r.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    }
  };
  HighlightAndClearInputTextBehaviour.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this._itxt_text) {
      if (this._itxt_text.textContentVO) {
        this._itxt_text.textContentVO.stringValue = this._defaultText;
      }
      this._itxt_text.focusIn.remove(this.bindFunction(this.onFocusInSearchText));
      this._itxt_text.focusOut.remove(this.bindFunction(this.onFocusOutSearchText));
    }
    if (this.disp) {
      this.disp.addEventListener(r.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.mc_selected.visible = false;
    }
  };
  HighlightAndClearInputTextBehaviour.prototype.onMouseDown = function (e) {
    switch (e.target) {
      case this.disp.mc_selected.btn_clear:
        this._itxt_text.clearText();
        if (this._hasDefaultText && this._itxt_text.text == "" && this._hasDefaultText) {
          this._itxt_text.textContentVO.stringValue = this._defaultText;
        }
        this._itxt_text.change.dispatch(null);
        this._itxt_text.focusOut.dispatch(null);
    }
  };
  HighlightAndClearInputTextBehaviour.prototype.onFocusInSearchText = function (e) {
    this.disp.mc_selected.visible = true;
    if (this._itxt_text.text == this._defaultText && this._hasDefaultText) {
      this._itxt_text.clearText();
    }
  };
  HighlightAndClearInputTextBehaviour.prototype.onFocusOutSearchText = function (e) {
    this.disp.mc_selected.visible = false;
    if (this._itxt_text.text == "" && this._hasDefaultText) {
      this._itxt_text.textContentVO.stringValue = this._defaultText;
    }
  };
  HighlightAndClearInputTextBehaviour.prototype.isEmpty = function () {
    return this._hasDefaultText && this._itxt_text.text == this.defaultText || this._itxt_text.text == "";
  };
  Object.defineProperty(HighlightAndClearInputTextBehaviour.prototype, "text", {
    get: function () {
      if (this.isEmpty()) {
        return "";
      } else {
        return this._itxt_text.text;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighlightAndClearInputTextBehaviour.prototype, "defaultText", {
    get: function () {
      return this._defaultText;
    },
    set: function (e) {
      this._defaultText = e;
    },
    enumerable: true,
    configurable: true
  });
  return HighlightAndClearInputTextBehaviour;
}(s.CastleItemRenderer);
exports.HighlightAndClearInputTextBehaviour = l;