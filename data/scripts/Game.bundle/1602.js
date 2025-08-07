Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./31.js");
var u = require("./19.js");
var d = require("./1603.js");
var p = createjs.Point;
var h = function (e) {
  function IsoCollectableFadeEffectVE(t, i) {
    var n = e.call(this, t) || this;
    n._collectableItem = i;
    return n;
  }
  n.__extends(IsoCollectableFadeEffectVE, e);
  IsoCollectableFadeEffectVE.prototype.createDisp = function () {
    var e = new Library.CastleInterfaceElements.MovingInfoIcon_Ressources_Collected();
    if (this.collectableItem.itemType == C.CollectableEnum.UNKNOWN) {
      e.mc_Icon.gotoAndStop(10);
    } else {
      e.mc_Icon.gotoAndStop(1);
      this._collectableRenderer = new _.CollectableRenderer(new c.CollectableRenderClips(e).addIconMc(e.mc_Icon), new u.CollectableRenderOptions(u.CollectableRenderOptions.ICON, new p(80, 80)));
      this.collectableRenderer.updateWithNewVO(this.collectableItem);
    }
    g.CastleComponent.textFieldManager.registerTextField(e.txt_amount, new l.LocalizedTextVO(a.GenericTextIds.VALUE_NOMINAL_ADD, [this.collectableItem.amount]), new s.InternalGGSTextFieldConfigVO(true)).textAlign = o.GGSTextAlign.LEFT;
    this.dispComponent.addDisp(e);
  };
  IsoCollectableFadeEffectVE.prototype.destroyDisp = function () {
    if (this.collectableRenderer) {
      this.collectableRenderer.destroy();
      this._collectableRenderer = null;
    }
    e.prototype.destroyDisp.call(this);
  };
  Object.defineProperty(IsoCollectableFadeEffectVE.prototype, "collectableItem", {
    get: function () {
      return this._collectableItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoCollectableFadeEffectVE.prototype, "collectableRenderer", {
    get: function () {
      return this._collectableRenderer;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCollectableFadeEffectVE;
}(d.AIsoFadeEffectVE);
exports.IsoCollectableFadeEffectVE = h;
var g = require("./14.js");
var C = require("./12.js");
var _ = require("./186.js");
r.classImplementsInterfaces(h, "ICollectableRendererList", "IIngameUICapable");