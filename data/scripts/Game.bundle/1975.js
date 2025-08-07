Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./6.js");
var l = createjs.Rectangle;
var c = function (e) {
  function CastleGGSTextFieldDefaultStrategy(t) {
    var i = this;
    i.originalTextSize = 0;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastleGGSTextFieldDefaultStrategy, e);
  CastleGGSTextFieldDefaultStrategy.prototype.fitTextSizeToBounds = function (e = null) {
    e ||= new l(0, 0, this._textField.model.width, this._textField.model.height);
    if (this.textWidth != 0 && this.textHeight != 0 && this._textField.text != "") {
      this.originalTextSize ||= r.int(r.int(this._textField.model.size));
      var t = r.int(this.originalTextSize);
      if (!(e.width >= this.textWidth) || !(e.height >= this.textHeight) || !(this._textField.model.size >= t)) {
        var i = r.int(a.GoodgameTextFieldManager.getInstance().minimumAutoFitFontSize);
        var n = t + 1;
        var o = e.height > this.originalTextSize * 2;
        do {
          n--;
          this.updateSize(n);
        } while (n >= i && (e.width + (o ? n : 0) < this.textWidth || e.height < this.textHeight));
        this._textField.model.size = n;
      }
    }
  };
  Object.defineProperty(CastleGGSTextFieldDefaultStrategy.prototype, "textWidth", {
    get: function () {
      return this._textField.originalTextField.textWidth + 4;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.GGSTextFieldDefaultStrategy.prototype, "textWidth").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGGSTextFieldDefaultStrategy.prototype, "textHeight", {
    get: function () {
      return this._textField.originalTextField.textHeight + 4;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.GGSTextFieldDefaultStrategy.prototype, "textHeight").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleGGSTextFieldDefaultStrategy.prototype.dispose = function () {
    this._textField.originalTextField.y = this._originalPosY;
    e.prototype.dispose.call(this);
  };
  CastleGGSTextFieldDefaultStrategy.prototype.setFocus = function () {
    this._textField.originalTextField.focus();
  };
  return CastleGGSTextFieldDefaultStrategy;
}(o.GGSTextFieldDefaultStrategy);
exports.CastleGGSTextFieldDefaultStrategy = c;
s.classImplementsInterfaces(c, "ITextFieldStrategy");