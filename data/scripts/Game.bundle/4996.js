Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./67.js");
var u = require("./19.js");
var d = require("./4.js");
var p = require("./11.js");
var h = createjs.Point;
var g = function (e) {
  function CastleTieredPrimeDayRewardDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleTieredPrimeDayRewardDialog.NAME) || this;
  }
  n.__extends(CastleTieredPrimeDayRewardDialog, e);
  CastleTieredPrimeDayRewardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initBasicButtons(this.dialogButtons);
    this.initText();
    this.setupRewardBox();
    this.displayRewards();
  };
  CastleTieredPrimeDayRewardDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
  };
  CastleTieredPrimeDayRewardDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleTieredPrimeDayRewardDialog.prototype.initText = function () {
    var e = 0;
    var t = o.castAs(d.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_TIERED_PRIME_DAY), "TieredPaymentrewardEventVO");
    if (t && t.getBoughtCount(t.nextRewardIndex) < t.maxBuyCount) {
      var i = l.int(t.c2BoughtInCurrentCycle);
      e = l.int(t.rewards[t.nextRewardIndex].c2ForReward - i);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_primeday_rewardPopup_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new r.LocalizedTextVO("dialog_primeday_rewardPopup_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timesLeft, new r.LocalizedTextVO("dialog_primeday_rewardPopup_nextReward", [e]));
    this.dialogDisp.txt_timesLeft.visible = e > 0;
  };
  CastleTieredPrimeDayRewardDialog.prototype.setupRewardBox = function () {
    switch (this.props.rewards.length) {
      case 2:
        this.dialogDisp.mc_rewards.gotoAndStop("small");
        this._activeRewardsMC = this.dialogDisp.mc_rewards.mc_rewardContainer2;
        break;
      case 4:
        this.dialogDisp.mc_rewards.gotoAndStop("medium");
        this._activeRewardsMC = this.dialogDisp.mc_rewards.mc_rewardContainer4;
        break;
      case 6:
        this.dialogDisp.mc_rewards.gotoAndStop("big");
        this._activeRewardsMC = this.dialogDisp.mc_rewards.mc_rewardContainer6;
        break;
      default:
        throw new Error("CastleTieredPrimeDayRewardBoxVE.setupRewardBoxes() received an amount of rewards that are not supported");
    }
  };
  CastleTieredPrimeDayRewardDialog.prototype.displayRewards = function () {
    C.CollectableRenderHelper.displayMultipleItemsComplete(this, new c.CollectableRenderClipsList(this._activeRewardsMC, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.props.rewards, new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_ADVANCED, new h(CastleTieredPrimeDayRewardDialog.REWARD_ICON_WIDTH, CastleTieredPrimeDayRewardDialog.REWARD_ICON_HEIGHT)));
  };
  Object.defineProperty(CastleTieredPrimeDayRewardDialog.prototype, "dialogButtons", {
    get: function () {
      return [this.dialogDisp.btn_close, this.dialogDisp.btn_ok];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardDialog.prototype, "props", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTieredPrimeDayRewardDialog.__initialize_static_members = function () {
    CastleTieredPrimeDayRewardDialog.NAME = "CastleTieredPrimeDayReward";
    CastleTieredPrimeDayRewardDialog.REWARD_ICON_WIDTH = 57;
    CastleTieredPrimeDayRewardDialog.REWARD_ICON_HEIGHT = 50;
  };
  return CastleTieredPrimeDayRewardDialog;
}(p.CastleExternalDialog);
exports.CastleTieredPrimeDayRewardDialog = g;
var C = require("./25.js");
a.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();