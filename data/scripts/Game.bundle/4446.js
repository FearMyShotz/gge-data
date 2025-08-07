Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./13.js");
var c = require("./4.js");
var u = require("./76.js");
var d = require("./78.js");
var p = require("./77.js");
var h = require("./8.js");
var g = require("./11.js");
var C = require("./4447.js");
var _ = function (e) {
  function FortuneTellerEventRewardInfoDialog() {
    return e.call(this, FortuneTellerEventRewardInfoDialog.NAME) || this;
  }
  n.__extends(FortuneTellerEventRewardInfoDialog, e);
  FortuneTellerEventRewardInfoDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    h.ButtonHelper.initButtons([this.dialogDisp.btn_close], f.ClickFeedbackButton);
    var i = new p.InfiniteScrollListOptions(C.FortuneTellerEventRewardInfoDialogItem, "FortuneTellerEventRewardInfoItem", m.FortuneTellerEventDialog.NAME);
    i.itemPaddingY = 0;
    i.useSmoothScroll = true;
    this._scrollComponent = new d.InfiniteScrollListComponent(new u.InfiniteScrollListClips(this.dialogDisp.mc_items).addMaskMc(this.dialogDisp.mc_items.mc_mask).addSliderMc(this.dialogDisp.mc_items.mc_slider).addItemContainerMc(this.dialogDisp.mc_items.mc_items), i);
  };
  FortuneTellerEventRewardInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("divination_info_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("divination_info_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new s.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("reward")));
    this._scrollComponent.onShow();
    this._scrollComponent.updateWithNewData(this.getRewardData());
  };
  FortuneTellerEventRewardInfoDialog.prototype.hide = function () {
    this._scrollComponent.onHide();
    e.prototype.hide.call(this);
  };
  Object.defineProperty(FortuneTellerEventRewardInfoDialog.prototype, "canBuyPrize", {
    get: function () {
      return this.eventVO.tryCount <= c.CastleModel.fortuneTeller.maxTriesPerDay;
    },
    enumerable: true,
    configurable: true
  });
  FortuneTellerEventRewardInfoDialog.prototype.getRewardData = function () {
    var e = [];
    for (var t = c.CastleModel.fortuneTeller.getFortuneTellerClassByCount(this.canBuyPrize ? this.eventVO.tryCount : 1).rewardIDs, i = 0; i < t.length; i++) {
      e.push(t[i]);
    }
    return e;
  };
  FortuneTellerEventRewardInfoDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(FortuneTellerEventRewardInfoDialog.prototype, "eventVO", {
    get: function () {
      return c.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FORTUNE_TELLER);
    },
    enumerable: true,
    configurable: true
  });
  FortuneTellerEventRewardInfoDialog.NAME = "FortuneTellerEventRewardInfo";
  return FortuneTellerEventRewardInfoDialog;
}(g.CastleExternalDialog);
exports.FortuneTellerEventRewardInfoDialog = _;
var m = require("./1907.js");
var f = require("./36.js");
o.classImplementsInterfaces(_, "ICollectableRendererList");