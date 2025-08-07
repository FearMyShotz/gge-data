Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ARewardHubDialogSublayer(t, i) {
    var n = e.call(this, t) || this;
    n.parent = i;
    n.init();
    return n;
  }
  n.__extends(ARewardHubDialogSublayer, e);
  ARewardHubDialogSublayer.prototype.init = function () {
    s.ButtonHelper.initButtons([this.subLayerDisp.mc_events.btn_triggerAll, this.subLayerDisp.mc_events.btn_deleteAll, this.subLayerDisp.mc_season.btn_all, this.subLayerDisp.mc_reward.btn_config, this.subLayerDisp.mc_start.btn_config], r.ClickFeedbackButtonHover);
    this._checkboxStart = new l.CheckBoxButton(this.subLayerDisp.mc_start.cbx_start, true);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_start.txt_start, new h.LocalizedTextVO("dialog_rewardHub_showAtGameStart_desc"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_reward.txt_rewardNotify, new h.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_rewardHub_pending_header")));
    this.tx_empty = this.textFieldManager.registerTextField(this.subLayerDisp.txt_empty, new h.LocalizedTextVO("dialog_rewardHub_pending_noNotifications_desc"));
    this.subLayerDisp.mc_reward.btn_config.toolTipText = "settings";
    this.subLayerDisp.mc_start.btn_config.toolTipText = "settings";
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_season.btn_all.txt_copy, new h.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_rewardHub_manageAll_button")));
    this.subLayerDisp.mc_reward.mc_progress.mouseChildren = false;
    this.subLayerDisp.mc_reward.mc_progress.toolTipText = "dialog_rewardHub_notificationsCapacity_pending_tt";
    this.dataList();
  };
  ARewardHubDialogSublayer.prototype.updateTabButton = function (e) {};
  ARewardHubDialogSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.parent.isSettingTabOpen = this.subLayerDisp.mc_start.visible = t[0] || this.parent.isSettingTabOpen;
    g.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_list.mc_items);
    this._checkboxStart.selectButton = f.CastleModel.localData.readOpenRewardHubAtStart();
    this.parent.dialogProperties.openOnGameStart = false;
    var i = new d.InfiniteScrollListOptions(_.RewardHubDialogItem, "RewardHubItem", p.RewardHubMainDialog.NAME);
    i.itemPaddingY = 4;
    i.useSmoothScroll = true;
    this._list = new c.InfiniteScrollListComponent(new u.InfiniteScrollListClips(this.subLayerDisp.mc_list).addSliderMc(this.subLayerDisp.mc_list.mc_slider), i);
    m.CastleRewardHubMicroservice.Instance.onRewardsUpdatedSignal.add(this.bindFunction(this.updateAllInfos));
    this._list.onShow();
    this.updateAllInfos();
  };
  ARewardHubDialogSublayer.prototype.hide = function () {
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
    m.CastleRewardHubMicroservice.Instance.onRewardsUpdatedSignal.remove(this.bindFunction(this.updateAllInfos));
    e.prototype.hide.call(this);
  };
  ARewardHubDialogSublayer.prototype.updateAllInfos = function () {
    if (!this._isLoading) {
      var e = this.dataList();
      this.tx_empty.visible = e.length <= 0;
      this._list.updateWithNewData(e);
      this._list.onShow();
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_reward.mc_progress.txt_amount, new h.LocalizedTextVO("numbersXY", [e.length, this.inventoryLimit]));
      this.subLayerDisp.mc_reward.mc_progress.mc_bar.scaleX = Math.min(e.length / this.inventoryLimit, 1);
      this.subLayerDisp.mc_reward.mc_progress.mc_bar.gotoAndStop(e.length >= this.inventoryLimit ? 2 : 1);
    }
  };
  ARewardHubDialogSublayer.prototype.dataList = function () {
    return null;
  };
  ARewardHubDialogSublayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.mc_reward.btn_config:
        this.parent.isSettingTabOpen = true;
        this.subLayerDisp.mc_start.visible = true;
        break;
      case this.subLayerDisp.mc_start.btn_config:
        this.parent.isSettingTabOpen = false;
        this.subLayerDisp.mc_start.visible = false;
        break;
      case this.subLayerDisp.mc_start.cbx_start:
        this._checkboxStart.toggleSelected();
        f.CastleModel.localData.saveOpenRewardHubAtStart(this._checkboxStart.isSelected);
    }
  };
  Object.defineProperty(ARewardHubDialogSublayer.prototype, "inventoryLimit", {
    get: function () {
      return 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ARewardHubDialogSublayer.prototype, "isLoading", {
    get: function () {
      return this._isLoading;
    },
    set: function (e) {
      this._isLoading = e;
      this.tx_empty.visible = !e;
    },
    enumerable: true,
    configurable: true
  });
  return ARewardHubDialogSublayer;
}(require("./34.js").CastleDialogSubLayer);
exports.ARewardHubDialogSublayer = a;
var s = require("./8.js");
var r = require("./20.js");
var l = require("./49.js");
var c = require("./78.js");
var u = require("./76.js");
var d = require("./77.js");
var p = require("./404.js");
var h = require("./3.js");
var g = require("./2.js");
var C = require("./13.js");
var _ = require("./1666.js");
var m = require("./360.js");
var f = require("./4.js");
o.classImplementsInterfaces(a, "ICollectableRendererList", "ISublayer");