Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./31.js");
var r = require("./19.js");
var l = require("./24.js");
var c = require("./14.js");
var u = require("./42.js");
var d = createjs.MovieClip;
var p = createjs.Point;
var h = function (e) {
  function SubscriptionDialogOfferItem(t, i, n) {
    var o = this;
    o._dispHeight = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this)._disp = new d();
    t.addChild(o._disp);
    if (!o._itemClip) {
      o._itemClip = new l.CastleGoodgameExternalClip(n, C.IsoHelper.view.getAssetFileURL(m.SubscriptionDialog.NAME), null, 24, false);
      o._disp.addChild(o._itemClip);
    }
    var h;
    var O = o._itemClip.currentshownDisplayObject;
    o._dispHeight = O.height;
    var E = f.castAs(i, "ACollectableItemVO");
    if (E) {
      h = c.CastleComponent.textFieldManager.registerTextField(O.txt_text, new a.LocalizedTextVO("subscription_effect_description_featureMonthlyGift_short", [E.amount]));
    } else {
      var y = i;
      h = c.CastleComponent.textFieldManager.registerTextField(O.txt_text, new a.LocalizedTextVO("subscription_effect_description_" + y.boni[0].effect.name + "_short", y.boni[0].effectValue.textReplacements));
      E = new g.CollectableItemEffectVO(y.boni[0].effect.effectID);
    }
    _.CollectableRenderHelper.displaySingleItemComplete(o, new s.CollectableRenderClips(O), E, new r.CollectableRenderOptions(r.CollectableRenderOptions.ICON, new p(35, 35)));
    h.verticalAlign = u.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    return o;
  }
  n.__extends(SubscriptionDialogOfferItem, e);
  SubscriptionDialogOfferItem.prototype.destroy = function () {
    if (this._itemClip && this._itemClip.parent) {
      this._itemClip.parent.removeChild(this._itemClip);
    }
    this._itemClip = null;
    e.prototype.destroy.call(this);
  };
  Object.defineProperty(SubscriptionDialogOfferItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionDialogOfferItem.prototype, "dispHeight", {
    get: function () {
      return this._dispHeight;
    },
    enumerable: true,
    configurable: true
  });
  SubscriptionDialogOfferItem.ASSET_CLIP_NAME_BONUS_ITEM = "Subscription_Bonus_List_Item";
  SubscriptionDialogOfferItem.ASSET_CLIP_NAME_INFO_ITEM = "Subscription_Info_Page_1_Item_V_2";
  return SubscriptionDialogOfferItem;
}(c.CastleComponent);
exports.SubscriptionDialogOfferItem = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");
var g = require("./612.js");
var C = require("./46.js");
var _ = require("./25.js");
var m = require("./523.js");
var f = require("./1.js");