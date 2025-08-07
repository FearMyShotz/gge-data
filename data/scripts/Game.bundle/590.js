Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./16.js");
var u = require("./2188.js");
var d = require("./349.js");
var p = function (e) {
  function LordEffectItem(t, i = null, n = c.ClientConstColor.FONT_DEFAULT_COLOR, o = c.ClientConstColor.FONT_DEFAULT_COLOR) {
    var a = this;
    a.defaultFontColor = 0;
    a.malusFontColor = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, i) || this).defaultFontColor = n;
    a.malusFontColor = o;
    return a;
  }
  n.__extends(LordEffectItem, e);
  LordEffectItem.prototype.applyText = function (e, t = false, i = 0) {
    this.itxt_effect = LordEffectItem.textFieldManager.registerTextField(this.disp.txt_text, new l.TextVO(e), new s.InternalGGSTextFieldConfigVO(true));
    this._additionalBGHeight = i;
    if (this.disp.mc_textBackground) {
      this.disp.mc_textBackground.height = this.itxt_effect.textHeight + i;
    }
    this.itxt_effect.color = t ? this.malusFontColor : this.defaultFontColor;
    if (this.disp.mc_arrow) {
      this.disp.mc_arrow.gotoAndStop(t ? 2 : 1);
    }
  };
  Object.defineProperty(LordEffectItem, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordEffectItem.prototype, "height", {
    get: function () {
      var e = this.disp.mc_textBackground ? this.disp.mc_textBackground.height : this.itxt_effect.textHeight + this.itxt_effect.y;
      return e = this.disp.mc_source ? Math.max(e, 23) : e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.MovieClipLayoutable.prototype, "height").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LordEffectItem.prototype.applySources = function (e) {
    if (this.disp.mc_source) {
      var t = this.itxt_effect ? this.itxt_effect.numLines : 0;
      if (t == 1 && this.disp.mc_textBackground) {
        this.disp.mc_textBackground.height = 23;
      }
      if (t == 1 && this.itxt_effect) {
        this.itxt_effect.y = 4;
      }
      o.MovieClipHelper.clearMovieClip(this.disp.mc_source);
      var i = new u.LordEffectSourceItem(e);
      this.disp.mc_source.addChild(i.disp);
    }
  };
  return LordEffectItem;
}(d.MovieClipLayoutable);
exports.LordEffectItem = p;
r.classImplementsInterfaces(p, "ILayoutable");