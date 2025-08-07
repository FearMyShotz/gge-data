Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./20.js");
var c = require("./76.js");
var u = require("./78.js");
var d = require("./77.js");
var p = require("./8.js");
var h = require("./11.js");
var g = require("./394.js");
var C = require("./3452.js");
var _ = function (e) {
  function DonationEventEndDialog() {
    return e.call(this, DonationEventEndDialog.NAME) || this;
  }
  n.__extends(DonationEventEndDialog, e);
  DonationEventEndDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    p.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], l.ClickFeedbackButtonHover);
    var i = new c.InfiniteScrollListClips(this.dialogDisp).addSliderMc(this.dialogDisp.mc_slider).addItemContainerMc(this.dialogDisp.mc_list).addMouseWheelAreaMc(this.dialogDisp).addMaskMc(this.dialogDisp.mc_mask);
    var n = new d.InfiniteScrollListOptions(C.DonationEventEndDialogItem, DonationEventEndDialog.ITEM_NAME, DonationEventEndDialog.NAME);
    n.itemPaddingY = 4;
    n.useSmoothScroll = true;
    this._scrollList = new u.InfiniteScrollListComponent(i, n);
    this._rewards = new g.TempServerSimpleRewardsComponent(this.dialogDisp, true, false, 0);
    this.dialogDisp.mc_rewardHub.toolTipText = "hud_rewardHub_hudButton_tt";
  };
  DonationEventEndDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_eventEndDonationEvent_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank_title, new a.LocalizedTextVO("rankingGlobal"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank_copy, new a.LocalizedTextVO("rewardHubRankingInfo"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank, new a.LocalizedTextVO("ranking_calculating"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new a.LocalizedTextVO("dialog_eventEndDonationEvent_desc"));
    this._scrollList.onShow();
    this._scrollList.updateWithNewData(this.dialogProperties().getData());
    this._rewards.onShow();
  };
  DonationEventEndDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this._scrollList) {
      this._scrollList.onHide();
    }
    this._rewards.onHide();
  };
  DonationEventEndDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  DonationEventEndDialog.prototype.dialogProperties = function () {
    return this.properties;
  };
  DonationEventEndDialog.NAME = "DonationEventEnd_1";
  DonationEventEndDialog.ITEM_NAME = "DonationEventEnd_Item";
  return DonationEventEndDialog;
}(h.CastleExternalDialog);
exports.DonationEventEndDialog = _;
o.classImplementsInterfaces(_, "ICollectableRendererList");