Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./6.js");
var r = require("./85.js");
var l = require("./42.js");
var c = require("./880.js");
var u = function (e) {
  function TextPicker(t) {
    var i = this;
    i._preFix = "";
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).initTextField();
    return i;
  }
  n.__extends(TextPicker, e);
  TextPicker.prototype.initTextField = function () {
    this._itxt_pick = this.textFieldManager.registerTextField(this._disp.txt_pick, new r.CastleLocalizedNumberVO(0));
    this._itxt_pick.textAlign = o.GGSTextAlign.CENTER;
    this._itxt_pick.verticalAlign = l.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.enableTextfield(this._isEnabled);
  };
  TextPicker.prototype.updateInfo = function () {
    if (this.selectedValue > -1) {
      var e = s.int((this.selectedValue + 1) * this.amountFactor);
      if (this._preFix && this._preFix != "") {
        this._itxt_pick.textContentVO.textReplacements = [this._preFix, e];
      } else {
        this._itxt_pick.textContentVO.numberValue = e;
      }
      this._itxt_pick.verticalAlign = l.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    }
  };
  Object.defineProperty(TextPicker.prototype, "enabled", {
    get: function () {
      return Object.getOwnPropertyDescriptor(c.BasicPicker.prototype, "enabled").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BasicPicker.prototype, "enabled").set.call(this, e);
      this.enableTextfield(e);
    },
    enumerable: true,
    configurable: true
  });
  TextPicker.prototype.enableTextfield = function (e) {
    if (this._itxt_pick) {
      this._itxt_pick.tabEnabled = e;
      this._itxt_pick.mouseEnabled = e;
    }
  };
  Object.defineProperty(TextPicker.prototype, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextPicker.prototype, "itxt_pick", {
    get: function () {
      return this._itxt_pick;
    },
    enumerable: true,
    configurable: true
  });
  return TextPicker;
}(c.BasicPicker);
exports.TextPicker = u;