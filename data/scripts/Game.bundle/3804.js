Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./16.js");
var d = require("./26.js");
var p = require("./4.js");
var h = require("./8.js");
var g = require("./11.js");
var C = require("./3805.js");
var _ = createjs.MouseEvent;
var m = function (e) {
  function LongTermPointEventRewardListDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, LongTermPointEventRewardListDialog.NAME) || this;
  }
  n.__extends(LongTermPointEventRewardListDialog, e);
  LongTermPointEventRewardListDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_help, this.dialogDisp.btn_up, this.dialogDisp.btn_down]);
    this._itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_longPointsEvent_rewardsList_header"));
    this._itxt_rewardsDesc = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new l.LocalizedTextVO(""));
    this._rewardScrollListComponent = new O.CastleBasicItemListScrollComponent(this.dialogDisp.btn_down, this.dialogDisp.btn_up, this.dialogDisp.txt_page_counter);
  };
  LongTermPointEventRewardListDialog.prototype.setupRewardScrollList = function () {
    this._rewardScrollListComponent.amountOfItems = this.dialogProperties.pointThreshholds.length;
    this._rewardScrollListComponent.startItemIndex = this.dialogProperties.rewardsReceived;
    this._rewardScrollListComponent.show(this._itemScrollList);
  };
  LongTermPointEventRewardListDialog.prototype.addEventListenerOnShow = function () {
    p.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    this.dialogDisp.addEventListener(_.CLICK, this.bindFunction(this.onClick));
  };
  LongTermPointEventRewardListDialog.prototype.onEventRemoved = function (e) {
    if (e.specialEventVO.eventId == s.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT) {
      this.hide();
    }
  };
  LongTermPointEventRewardListDialog.prototype.removeEventListenerOnHide = function () {
    p.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    this.dialogDisp.removeEventListener(_.CLICK, this.bindFunction(this.onClick));
  };
  LongTermPointEventRewardListDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateSkin();
    this.initScrollList();
    this.updateRewardDesc();
    this.setupRewardScrollList();
  };
  LongTermPointEventRewardListDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._rewardScrollListComponent.hide();
    this.disposeScrollList();
  };
  LongTermPointEventRewardListDialog.prototype.updateSkin = function () {
    if (this.disp.mc_background) {
      this.disp.mc_background.gotoAndStop(this.dialogProperties.skin.id);
    }
    this._itxt_title.color = this.dialogProperties.skin.id == y.LongTermPointEventSkin.XMAS.id ? u.ClientConstColor.FONT_DEFAULT_COLOR : u.ClientConstColor.GENERIC_WHITE;
  };
  LongTermPointEventRewardListDialog.prototype.initScrollList = function () {
    this.disposeScrollList();
    this._itemScrollList = new o.ItemScrollList(this.dialogDisp);
    this._itemScrollList.scrollInstanceName = "reward_";
    this._itemScrollList.scrollStep = LongTermPointEventRewardListDialog.SCROLL_STEP;
    this._itemScrollList.scrollItemClass = E.LongTermPointEventRewardScrollItem;
    this.populateScrollList(this._itemScrollList);
  };
  LongTermPointEventRewardListDialog.prototype.populateScrollList = function (e) {
    for (var t = 0; t < this.dialogProperties.pointThreshholds.length; t++) {
      var i = new C.LongTermPointEventRewardListScrollItemVO();
      i.collectableList = this.dialogProperties.rewardList[t];
      i.received = t < this.dialogProperties.rewardsReceived;
      i.thresholdPoints = c.int(this.dialogProperties.pointThreshholds[t]);
      i.skin = this.dialogProperties.skin;
      if (e) {
        e.pushContent(i);
      }
    }
  };
  LongTermPointEventRewardListDialog.prototype.disposeScrollList = function () {
    if (this._itemScrollList) {
      this._itemScrollList.clear();
      this._itemScrollList.remove();
      this._itemScrollList = null;
    }
  };
  LongTermPointEventRewardListDialog.prototype.onClick = function (t) {
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.showHelp();
      }
    }
  };
  LongTermPointEventRewardListDialog.prototype.showHelp = function () {
    f.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_longPointsEvent_rewardsList"));
  };
  Object.defineProperty(LongTermPointEventRewardListDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventRewardListDialog.prototype.updateRewardDesc = function () {
    if (this.dialogProperties.rewardsReceived < this.dialogProperties.rewardList.length) {
      this._itxt_rewardsDesc.textContentVO.textId = "dialog_longPointsEvent_rewardsList_rewards";
      this._itxt_rewardsDesc.textContentVO.textReplacements = [this.dialogProperties.rewardsReceived, this.dialogProperties.pointThreshholds.length];
    } else {
      this._itxt_rewardsDesc.textContentVO.textId = "dialog_longPointsEvent_rewardsList_rewards_all";
    }
  };
  LongTermPointEventRewardListDialog.__initialize_static_members = function () {
    LongTermPointEventRewardListDialog.NAME = "LongTermPointEventRewardsList";
    LongTermPointEventRewardListDialog.SCROLL_STEP = 9;
  };
  return LongTermPointEventRewardListDialog;
}(g.CastleExternalDialog);
exports.LongTermPointEventRewardListDialog = m;
var f = require("./9.js");
var O = require("./1655.js");
var E = require("./3806.js");
var y = require("./468.js");
a.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();