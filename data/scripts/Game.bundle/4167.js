Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./23.js");
var r = require("./23.js");
var l = require("./57.js");
var c = require("./14.js");
var u = require("./40.js");
var d = require("./8.js");
var p = createjs.Point;
var h = function (e) {
  function StartscreenFloatingLabelTextfield(t, i, n = false, s = "off") {
    var r = e.call(this, t) || this;
    r._floatingScale = 0.75;
    r._selectedColor = 3367856;
    r._isFloating = false;
    r._needsValidation = false;
    d.ButtonHelper.initBasicButton(r.disp.icon_showPw);
    r._itxt_label = c.CastleComponent.textFieldManager.registerTextField(r.disp.txt_label, new o.LocalizedTextVO(i));
    r._itxt_error = c.CastleComponent.textFieldManager.registerTextField(r.disp.mc_error.txt_error, new o.LocalizedTextVO(""));
    r._itxt_input = c.CastleComponent.textFieldManager.registerTextField(r.disp.txt_input, new a.TextVO(""));
    r._itxt_input.displayAsPassword = n;
    r._isPasswordTextField = n;
    r.disp.txt_input.getTextFieldHTMLElement().autocomplete = s;
    r._onInputChangeSignal = new l.Signal();
    r._originalLabelPos = new p(r._itxt_label.x, r._itxt_label.y);
    r._originalInputPos = new p(r._itxt_input.x, r._itxt_input.y);
    r._originalColor = r._itxt_label.color;
    r._itxt_input.x = r._originalLabelPos.x;
    r._itxt_input.y = r._originalLabelPos.y;
    r._floatingOffset = new p(0, -10);
    r.disp.txt_label.alpha = 0.7;
    r.disp.bg_selected.visible = false;
    r.disp.bg_filled.visible = false;
    r.disp.bg_error.visible = false;
    r.disp.mc_error.visible = false;
    r.disp.icon_showPw.visible = false;
    if (n) {
      r.showPassword(false);
    }
    r.addEventListener();
    return r;
  }
  n.__extends(StartscreenFloatingLabelTextfield, e);
  StartscreenFloatingLabelTextfield.prototype.reset = function () {
    this._itxt_label.scaleX = this._itxt_label.scaleY = 1;
    this._itxt_label.x = this._originalLabelPos.x;
    this._itxt_label.y = this._originalLabelPos.y;
    this._itxt_label.color = this._originalColor;
    this._itxt_input.x = this._originalInputPos.x;
    this._itxt_input.y = this._originalInputPos.y;
    this._itxt_input.clearText();
    this.showPassword(false);
    this.disp.bg_selected.visible = false;
    this.disp.bg_filled.visible = false;
    this.disp.bg_error.visible = false;
    this.disp.mc_error.visible = false;
  };
  StartscreenFloatingLabelTextfield.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this.reset();
  };
  StartscreenFloatingLabelTextfield.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._itxt_input.focusIn.add(this.bindFunction(this.onFocusIn));
    this._itxt_input.focusOut.add(this.bindFunction(this.onFocusOut));
    this._itxt_input.change.add(this.bindFunction(this.onInputChange));
  };
  StartscreenFloatingLabelTextfield.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    this._itxt_input.focusIn.remove(this.bindFunction(this.onFocusIn));
    this._itxt_input.focusOut.remove(this.bindFunction(this.onFocusOut));
    this._itxt_input.change.add(this.bindFunction(this.onInputChange));
  };
  StartscreenFloatingLabelTextfield.prototype.onFocusIn = function () {
    this.disp.bg_selected.visible = true;
    this.updateLabel();
  };
  StartscreenFloatingLabelTextfield.prototype.onFocusOut = function () {
    this.disp.bg_selected.visible = false;
    this.updateLabel();
    if (this._needsValidation) {
      this._onInputChangeSignal.dispatch();
      this._needsValidation = false;
    }
  };
  StartscreenFloatingLabelTextfield.prototype.onInputChange = function () {
    this._needsValidation = !!this.inputText;
    this.disp.icon_showPw.visible = this._isPasswordTextField && this.inputText;
  };
  StartscreenFloatingLabelTextfield.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.disp.icon_showPw:
        this.toggleShowPassword();
        break;
      default:
        this._itxt_input.setFocus();
    }
  };
  StartscreenFloatingLabelTextfield.prototype.updateLabel = function () {
    if (this.isSelected || this._itxt_input.text) {
      if (!this._isFloating) {
        var e = this._itxt_label.x + this._floatingOffset.x;
        var t = this._itxt_label.y + this._floatingOffset.y;
        s.TweenLite.to(this._itxt_label, 0.3, {
          x: e,
          y: t,
          scaleX: this._floatingScale,
          scaleY: this._floatingScale
        });
        this._itxt_input.x = this._originalInputPos.x;
        this._itxt_input.y = this._originalInputPos.y;
        this._isFloating = true;
      }
    } else if (this._isFloating) {
      s.TweenLite.to(this._itxt_label, 0.3, {
        x: this._originalLabelPos.x,
        y: this._originalLabelPos.y,
        scaleX: 1,
        scaleY: 1
      });
      this._itxt_input.x = this._originalLabelPos.x;
      this._itxt_input.y = this._originalLabelPos.y;
      this._isFloating = false;
      this.disp.bg_filled.visible = false;
      this.disp.bg_error.visible = false;
      this.disp.mc_error.visible = false;
    }
    this.updateColor();
  };
  StartscreenFloatingLabelTextfield.prototype.updateColor = function () {
    this.disp.bg_selected.visible = this.isSelected;
    if (this.isSelected) {
      this._itxt_label.color = this._selectedColor;
      this.disp.txt_label.alpha = 1;
    } else {
      this._itxt_label.color = this._originalColor;
      this.disp.txt_label.alpha = 0.7;
    }
  };
  Object.defineProperty(StartscreenFloatingLabelTextfield.prototype, "isSelected", {
    get: function () {
      return this.disp.bg_selected.visible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StartscreenFloatingLabelTextfield.prototype, "inputText", {
    get: function () {
      if (this._itxt_input) {
        return this._itxt_input.text;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StartscreenFloatingLabelTextfield.prototype, "inputTextField", {
    get: function () {
      return this._itxt_input;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StartscreenFloatingLabelTextfield.prototype, "onInputChangeSignal", {
    get: function () {
      return this._onInputChangeSignal;
    },
    enumerable: true,
    configurable: true
  });
  StartscreenFloatingLabelTextfield.prototype.showPassword = function (e) {
    this.disp.icon_showPw.gotoAndStop(e ? 1 : 2);
    this.disp.icon_showPw.toolTipText = e ? "hide" : "show";
    this._itxt_input.displayAsPassword = !e;
  };
  StartscreenFloatingLabelTextfield.prototype.showValidated = function () {
    this.disp.bg_filled.visible = true;
    this.disp.bg_error.visible = false;
    this.disp.mc_error.visible = false;
  };
  StartscreenFloatingLabelTextfield.prototype.showError = function (e, t = null) {
    this.disp.bg_filled.visible = false;
    this.disp.bg_error.visible = true;
    this.disp.mc_error.visible = true;
    this._itxt_error.textContentVO.textId = e;
    this._itxt_error.textContentVO.textReplacements = t;
    var i = this._itxt_error.x;
    s.TweenLite.fromTo(this._itxt_error, 0.3, {
      x: i
    }, {
      x: i,
      ease: r.Bounce.easeOut
    });
  };
  StartscreenFloatingLabelTextfield.prototype.hideError = function () {
    this.disp.bg_error.visible = false;
    this.disp.mc_error.visible = false;
  };
  StartscreenFloatingLabelTextfield.prototype.toggleShowPassword = function () {
    if (this._itxt_input) {
      this.showPassword(this._itxt_input.displayAsPassword);
    }
  };
  StartscreenFloatingLabelTextfield.prototype.fillFromHtmlText = function () {
    var e = this.disp.txt_input.getTextFieldHTMLElement().value;
    if (e) {
      if (this._isPasswordTextField) {
        this.disp.txt_input.text = "";
        this._itxt_input.textContentVO.stringValue = e;
        this.disp.txt_input.text = e;
      } else {
        this._itxt_input.textContentVO.stringValue = e;
      }
      this.onInputChange();
      this.updateLabel();
    }
  };
  return StartscreenFloatingLabelTextfield;
}(u.CastleItemRenderer);
exports.StartscreenFloatingLabelTextfield = h;