Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./8.js");
var a = require("./11.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./13.js");
var c = require("./49.js");
var u = require("./78.js");
var d = require("./77.js");
var p = require("./76.js");
var h = require("./3540.js");
var g = function (e) {
  function RewardHubErrorsDialog() {
    return e.call(this, RewardHubErrorsDialog.NAME) || this;
  }
  n.__extends(RewardHubErrorsDialog, e);
  RewardHubErrorsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("generic_alert_bug")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_rewardHub_error_pickupBlocked_copy"));
    o.ButtonHelper.initButtons([this.dialogDisp.btn_close], c.ClickFeedbackButtonHover);
    this.dialogDisp.btn_close.toolTipText = "generic_btn_close";
    var i = new d.InfiniteScrollListOptions(h.RewardHubErrorsItem, "Item_RewardHubError", RewardHubErrorsDialog.NAME);
    i.useSmoothScroll = true;
    this._scrollList = new u.InfiniteScrollListComponent(new p.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addItemContainerMc(this.dialogDisp.mc_list.mc_items).addSliderMc(this.dialogDisp.mc_list.mc_slider), i);
  };
  RewardHubErrorsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._scrollList.onShow();
    this.updateList();
  };
  RewardHubErrorsDialog.prototype.updateList = function () {
    this._scrollList.updateWithNewData(this.dialogProperties.listItemVOs);
  };
  RewardHubErrorsDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    this._scrollList.onHide();
  };
  RewardHubErrorsDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.btn_close) {
      this.hide();
    }
  };
  Object.defineProperty(RewardHubErrorsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  RewardHubErrorsDialog.NAME = "CastleRewardHubErrorMessage";
  return RewardHubErrorsDialog;
}(a.CastleExternalDialog);
exports.RewardHubErrorsDialog = g;
s.classImplementsInterfaces(g, "ICollectableRendererList");