Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./31.js");
var l = require("./19.js");
var c = require("./4.js");
var u = require("./24.js");
var d = require("./40.js");
var p = require("./322.js");
var h = require("./222.js");
var g = createjs.MovieClip;
var C = createjs.Point;
var _ = function (e) {
  function CastleAllianceDialogTreasurySubscriptionsItem(t, i) {
    var n = e.call(this, new g()) || this;
    n._seriesId = -1;
    n._seriesBuffs = [];
    t.addChild(n.disp);
    n._itemClip = new u.CastleGoodgameExternalClip(CastleAllianceDialogTreasurySubscriptionsItem.ASSET_CLIP_NAME, f.IsoHelper.view.getAssetFileURL(y.CastleAllianceDialog.NAME));
    n.disp.addChild(n._itemClip);
    n._seriesId = i;
    n._seriesBuffs = c.CastleModel.subscriptionData.getPackageSeriesBuffs(h.SubscriptionPackageEnum.ALLIANCE, i);
    return n;
  }
  n.__extends(CastleAllianceDialogTreasurySubscriptionsItem, e);
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.update = function () {
    this.updateIcon();
    this.updateText();
    this.updateProgressBar();
  };
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.updateIcon = function () {
    E.CollectableRenderHelper.displaySingleItemComplete(this, new r.CollectableRenderClips(this.itemMc.mc_icon).addIconMc(this.itemMc.mc_icon), new m.CollectableItemEffectVO(this.seriesBuffs[0].boni[0].effect.effectID), new l.CollectableRenderOptions(l.CollectableRenderOptions.ICON, new C(70, 70)));
  };
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.updateText = function () {
    var e = this.seriesBuffs[0];
    var t = this.getCurrentBuffVO();
    var i = this.getNextBuffVO();
    var n = e.boni[0].effect.name;
    O.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_text1, new a.LocalizedTextVO("subscription_effect_description_" + n, t ? t.boni[0].effectValue.textReplacements : [0]));
    O.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_text2, new a.LocalizedTextVO(i ? "dialog_alliance_stageBonus_next_" + n : "dialog_alliance_treasury_subscription_subEffect_max", i ? i.boni[0].effectValue.textReplacements : [0]));
  };
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.updateProgressBar = function () {
    var e = this.getCurrentBuffVO();
    var t = this.getNextBuffVO();
    var i = s.int(t ? c.CastleModel.subscriptionData.allianceSubscriberCount : e.requiredMembers);
    var n = s.int(t ? t.requiredMembers : e.requiredMembers);
    new p.SimpleProgressBarComponent(this.itemMc.mc_progress, 504).setProgressByPercent(i / n);
    O.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_progress.txt_text, new a.LocalizedTextVO(t ? "dialog_alliance_treasury_subscription_subEffect_subscriberCounter" : "dialog_alliance_treasury_subscription_subEffect_subscriberCounterMax", [i, n]));
  };
  Object.defineProperty(CastleAllianceDialogTreasurySubscriptionsItem.prototype, "itemMc", {
    get: function () {
      return this._itemClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.getCurrentBuffIndex = function () {
    var e = s.int(c.CastleModel.subscriptionData.allianceSubscriberCount);
    var t = -1;
    for (var i = 0; i < this.seriesBuffs.length; ++i) {
      var n = this.seriesBuffs[i];
      if (t < 0) {
        if (e >= n.requiredMembers) {
          t = i;
        }
      } else if (e >= n.requiredMembers && n.requiredMembers >= this.seriesBuffs[t].requiredMembers) {
        t = i;
      }
    }
    return t;
  };
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.getBuffVOSafe = function (e) {
    if (e >= 0 && e < this.seriesBuffs.length) {
      return this.seriesBuffs[e];
    } else {
      return null;
    }
  };
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.getCurrentBuffVO = function () {
    return this.getBuffVOSafe(this.getCurrentBuffIndex());
  };
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.getNextBuffVO = function () {
    return this.getBuffVOSafe(this.getCurrentBuffIndex() + 1);
  };
  Object.defineProperty(CastleAllianceDialogTreasurySubscriptionsItem.prototype, "seriesId", {
    get: function () {
      return this._seriesId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogTreasurySubscriptionsItem.prototype, "seriesBuffs", {
    get: function () {
      return this._seriesBuffs;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogTreasurySubscriptionsItem.ASSET_CLIP_NAME = "CastleAlliance_Treasury_Item_Subscriptions";
  return CastleAllianceDialogTreasurySubscriptionsItem;
}(d.CastleItemRenderer);
exports.CastleAllianceDialogTreasurySubscriptionsItem = _;
var m = require("./612.js");
var f = require("./46.js");
var O = require("./14.js");
var E = require("./25.js");
var y = require("./125.js");
o.classImplementsInterfaces(_, "ICollectableRendererList");