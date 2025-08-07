Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./21.js");
var p = require("./31.js");
var h = require("./19.js");
var g = require("./4.js");
var C = require("./27.js");
var _ = require("./11.js");
var m = createjs.MovieClip;
var f = createjs.Point;
var O = function (e) {
  function CastleDungeonTreasureChestDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleDungeonTreasureChestDialog.NAME) || this;
  }
  n.__extends(CastleDungeonTreasureChestDialog, e);
  CastleDungeonTreasureChestDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    this.dialogDisp.btn_ok.toolTipText = o.GenericTextIds.BUTTON_ACCEPT;
    this.dialogDisp.btn_close.toolTipText = o.GenericTextIds.BUTTON_CLOSE;
  };
  CastleDungeonTreasureChestDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateRewards();
    this.setPayment();
    this.setRemainingTime();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO("dialog_specialOfferDungeonTreasure_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new c.LocalizedTextVO("dialog_specialOfferDungeonTreasure_copy"));
    this.dialogDisp.mc_costs.mouseChildren = false;
    this.dialogDisp.mc_costs.toolTipText = "dialog_specialOfferDungeonTreasure_payRubiesToOpen";
    g.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
  };
  CastleDungeonTreasureChestDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    g.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
  };
  CastleDungeonTreasureChestDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        g.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id);
        this.hide();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleDungeonTreasureChestDialog.prototype.updateRewards = function () {
    var e;
    var t = this.offerVO.getTotalRewardListFromOfferVO();
    this.destroyCollectableRenderList();
    var i = CastleDungeonTreasureChestDialog.REWARD_START_X;
    for (var n = 0; n < t.length && n < 13; ++n) {
      e = t.getItemByIndex(n);
      if (r.instanceOfClass(e, "ACollectableItemEquipmentVO")) {
        this.addEquipmentItem(e, i);
      } else {
        this.addRewardItem(e, i);
      }
      i += CastleDungeonTreasureChestDialog.REWARD_ITEM_DIST;
    }
  };
  CastleDungeonTreasureChestDialog.prototype.addRewardItem = function (e, t) {
    var i = new (s.getDefinitionByName("StandardRewardItem"))();
    this.dialogDisp.addChild(i);
    y.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new p.CollectableRenderClips(i), e, new h.CollectableRenderOptions(h.CollectableRenderOptions.SET_ADVANCED));
    i.x = t;
    i.y = CastleDungeonTreasureChestDialog.REWARD_ITEM_YPOS;
  };
  CastleDungeonTreasureChestDialog.prototype.addEquipmentItem = function (e, t) {
    var i = new m();
    this.dialogDisp.addChild(i);
    y.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new p.CollectableRenderClips(i).addIconMc(i), e, new h.CollectableRenderOptions(h.CollectableRenderOptions.SET_BASIC, new f(50, 50)));
    i.x = t;
    i.y = CastleDungeonTreasureChestDialog.REWARD_ITEM_YPOS;
  };
  CastleDungeonTreasureChestDialog.prototype.setPayment = function () {
    var e = this.offerVO.getCostsForOfferAcception().getAmountOrDefaultByType(E.CollectableEnum.C2);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new l.LocalizedNumberVO(e));
  };
  CastleDungeonTreasureChestDialog.prototype.setRemainingTime = function (e = null) {
    var t = u.int(this.dialogProperties.offerVO.remainingSeconds);
    C.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, t);
    C.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, t);
  };
  Object.defineProperty(CastleDungeonTreasureChestDialog.prototype, "offerVO", {
    get: function () {
      return this.dialogProperties.offerVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDungeonTreasureChestDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDungeonTreasureChestDialog.__initialize_static_members = function () {
    CastleDungeonTreasureChestDialog.REWARD_ITEM_DIST = 75;
    CastleDungeonTreasureChestDialog.NAME = "CastleDungeonTreasureChestExternal";
  };
  CastleDungeonTreasureChestDialog.REWARD_START_X = -160;
  CastleDungeonTreasureChestDialog.REWARD_ITEM_YPOS = -82;
  return CastleDungeonTreasureChestDialog;
}(_.CastleExternalDialog);
exports.CastleDungeonTreasureChestDialog = O;
var E = require("./12.js");
var y = require("./25.js");
a.classImplementsInterfaces(O, "ICollectableRendererList");
O.__initialize_static_members();