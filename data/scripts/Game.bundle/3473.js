Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./26.js");
var c = require("./4.js");
var u = require("./274.js");
var d = require("./8.js");
var p = require("./11.js");
var h = createjs.Point;
var g = function (e) {
  function MultiEventRewardsDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, MultiEventRewardsDialog.NAME) || this;
  }
  n.__extends(MultiEventRewardsDialog, e);
  MultiEventRewardsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._eventInfoClass = a.getDefinitionByName("MultiEventReward_Infos");
  };
  MultiEventRewardsDialog.prototype.showLoaded = function (t = null) {
    if (this.dialogProperties.events.length == 0) {
      if (this.hasPreloaderDialog) {
        this.layoutManager.hideDialog(C.CastleExternalPreloaderDialog);
      }
      this.hide();
      return;
    }
    this.selectBackgroundSize();
    this.positionOkButton();
    this.createEventInfos();
    this.initScrollList();
    this.fillScrollList(this.dialogProperties.events);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_yes, this.dialogDisp.btn_up, this.dialogDisp.btn_down]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_combinedReward_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new s.LocalizedTextVO("dialog_combinedReward_desc"));
    e.prototype.showLoaded.call(this, t);
  };
  MultiEventRewardsDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    c.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    c.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
  };
  MultiEventRewardsDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    c.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    c.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
  };
  MultiEventRewardsDialog.prototype.onEventUpdated = function (e) {
    this.removeScrollList();
    this.initScrollList();
    this.fillScrollList(this.dialogProperties.events);
  };
  MultiEventRewardsDialog.prototype.updateVisibilityOfScrollbar = function () {
    var e = this.dialogProperties.events.length > MultiEventRewardsDialog.EVENTS_PER_PAGE;
    this.dialogDisp.btn_down.visible = e;
    this.dialogDisp.btn_up.visible = e;
    this.dialogDisp.mc_slider.btn_slider.visible = e;
    this.dialogDisp.mc_slider.mc_sliderLine.visible = e;
    this.dialogDisp.mc_slider.sliderbar_bg.visible = e;
  };
  MultiEventRewardsDialog.prototype.selectBackgroundSize = function () {
    var e = r.int(this.dialogProperties.events.length > MultiEventRewardsDialog.EVENTS_PER_PAGE ? this.dialogDisp.background.totalFrames : this.dialogProperties.events.length);
    this.dialogDisp.background.gotoAndStop(e);
  };
  MultiEventRewardsDialog.prototype.positionOkButton = function () {
    var e = this.dialogDisp.background.placeholder_btnYes;
    var t = new h(e.x, e.y);
    var i = this.dialogDisp.background.localToGlobal(t);
    i = this.dialogDisp.globalToLocal(i);
    this.dialogDisp.btn_yes.x = i.x;
    this.dialogDisp.btn_yes.y = i.y;
  };
  MultiEventRewardsDialog.prototype.initScrollList = function () {
    var e = new u.BasicSliderVO(this.dialogDisp.mc_slider.mc_sliderLine, this.dialogDisp.mc_slider.btn_slider, this.dialogProperties.events.length, 0, this.dialogDisp.mc_slider);
    this._scrollList = new m.MultiEventRewardScrollList(this.dialogDisp, null, e);
    this._scrollList.hideButtons = true;
    this._scrollList.scrollStep = 1;
    this.updateVisibilityOfScrollbar();
  };
  MultiEventRewardsDialog.prototype.fillScrollList = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this._scrollList.pushContent(n);
        }
      }
    }
    this._scrollList.scrollItemClass = _.EventRewardScrollItem;
    this._scrollList.initList(0, false);
  };
  MultiEventRewardsDialog.prototype.removeScrollList = function () {
    if (this._scrollList) {
      this._scrollList.remove();
      this._scrollList.clear();
      this._scrollList = null;
    }
  };
  MultiEventRewardsDialog.prototype.createEventInfos = function () {
    if (this._infoMcs) {
      while (this._infoMcs.length > 0) {
        var e = this._infoMcs.pop();
        e.parent.removeChild(e);
      }
    }
    this._infoMcs = [];
    var t;
    for (var i = r.int(Math.min(this.dialogProperties.events.length, MultiEventRewardsDialog.EVENTS_PER_PAGE)), n = 0; n < i; n++) {
      (t = new this._eventInfoClass()).name = "item" + n;
      t.x = this.dialogDisp.event_placeholder.x;
      t.y = this.dialogDisp.event_placeholder.y + n * (t.height + 3);
      this.dialogDisp.addChild(t);
      this._infoMcs.push(t);
    }
  };
  Object.defineProperty(MultiEventRewardsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  MultiEventRewardsDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_yes:
          this.hide();
      }
    }
  };
  MultiEventRewardsDialog.prototype.hideLoaded = function (t = null) {
    this.removeScrollList();
    e.prototype.hideLoaded.call(this, t);
  };
  MultiEventRewardsDialog.__initialize_static_members = function () {
    MultiEventRewardsDialog.NAME = "MultiEventRewards";
    MultiEventRewardsDialog.EVENTS_PER_PAGE = 4;
  };
  return MultiEventRewardsDialog;
}(p.CastleExternalDialog);
exports.MultiEventRewardsDialog = g;
var C = require("./154.js");
var _ = require("./3474.js");
var m = require("./3475.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();