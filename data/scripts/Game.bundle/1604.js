Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = function (e) {
  function IsoGainFadeEffectVE(t, i, n, o = null) {
    var a = this;
    a._textReplacements = [];
    CONSTRUCTOR_HACK;
    (a = e.call(this, t) || this)._iconClass = i;
    a._textReplacements = n;
    a._textID = o;
    return a;
  }
  n.__extends(IsoGainFadeEffectVE, e);
  IsoGainFadeEffectVE.prototype.createDisp = function () {
    var e = new Library.CastleInterfaceElements_Icons.Get_Icon();
    var t = new this.iconClass();
    o.MovieClipHelper.scaleToFit(t, 80, 80);
    t.x = t.y = 0;
    e.mc_icon.addChild(t);
    d.CastleComponent.textFieldManager.registerTextField(e.txt_amount, new c.LocalizedTextVO(this._textID ? this._textID : s.GenericTextIds.VALUE_NOMINAL_ADD, this._textReplacements), new r.InternalGGSTextFieldConfigVO(true)).textAlign = a.GGSTextAlign.LEFT;
    this.dispComponent.addDisp(e);
  };
  Object.defineProperty(IsoGainFadeEffectVE.prototype, "textReplacements", {
    get: function () {
      return this._textReplacements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGainFadeEffectVE.prototype, "iconClass", {
    get: function () {
      return this._iconClass;
    },
    enumerable: true,
    configurable: true
  });
  return IsoGainFadeEffectVE;
}(require("./1603.js").AIsoFadeEffectVE);
exports.IsoGainFadeEffectVE = u;
var d = require("./14.js");
l.classImplementsInterfaces(u, "ICollectableRendererList", "IIngameUICapable");