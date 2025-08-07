Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./4.js");
var c = require("./14.js");
var u = require("./81.js");
var d = require("./394.js");
var p = function (e) {
  function CollectEventDialogMainRewardItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectEventDialogMainRewardItem, e);
  CollectEventDialogMainRewardItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    this._rewards = new d.TempServerSimpleRewardsComponent(this.getItemMc());
  };
  CollectEventDialogMainRewardItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  CollectEventDialogMainRewardItem.prototype.onHide = function () {
    this._rewards.onHide();
    e.prototype.onHide.call(this);
  };
  CollectEventDialogMainRewardItem.prototype.fill = function () {
    var e = this.data;
    var t = this.getItemMc();
    this._rewards.updateWithNewData(e.collectable);
    var i = (e.minCurrencyAmount == 1 ? "Reward_single_value_" : "Reward_plural_value_") + this.eventVO.collectInfoVO.collectorEventSkinName;
    c.CastleComponent.textFieldManager.registerTextField(t.mc_title.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId(i, [e.minCurrencyAmount])));
    c.CastleComponent.textFieldManager.registerTextField(t.mc_title_collected.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId(i, [e.minCurrencyAmount])));
    t.mc_title_collected.visible = this.eventCurrencyAmount >= e.minCurrencyAmount;
    t.mc_title.visible = this.eventCurrencyAmount < e.minCurrencyAmount;
  };
  Object.defineProperty(CollectEventDialogMainRewardItem.prototype, "eventCurrencyAmount", {
    get: function () {
      return l.CastleModel.currencyData.getAmountById(this.eventVO.collectInfoVO.collectorCurrencyID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventDialogMainRewardItem.prototype, "eventVO", {
    get: function () {
      return l.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_COLLECTOR);
    },
    enumerable: true,
    configurable: true
  });
  return CollectEventDialogMainRewardItem;
}(u.AInfiniteScrollListItem);
exports.CollectEventDialogMainRewardItem = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");