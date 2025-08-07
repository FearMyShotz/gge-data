Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./241.js");
var c = require("./21.js");
var u = require("./26.js");
var d = require("./13.js");
var p = require("./4.js");
var h = require("./1823.js");
var g = require("./27.js");
var C = require("./24.js");
var _ = require("./20.js");
var m = require("./8.js");
var f = require("./11.js");
var O = require("./112.js");
var E = require("./3929.js");
var y = function (e) {
  function GachaEventMainDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, GachaEventMainDialog.NAME) || this;
  }
  n.__extends(GachaEventMainDialog, e);
  GachaEventMainDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    m.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_district, this.dialogDisp.tab_0, this.dialogDisp.tab_1, this.dialogDisp.tab_2, this.dialogDisp.tab_3], _.ClickFeedbackButtonHover);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_text, new r.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_tenthAnniversary_timer")));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timer.txt_time, new r.TextVO(""));
    var i = new E.GachaEventMainDistrict(this.dialogDisp.sublayer_gacha);
    this._subLayer = new Map();
    for (var n = 0; n < GachaEventMainDialog.MAX_TABS; n++) {
      this._subLayer.set("tab_" + n, i);
      this.dialogDisp["tab_" + n].visible = this.getActiveGachaEvents().length >= n;
    }
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_timer.toolTipText = "dialog_tenthAnniversary_timer";
    this.loadTabIcons();
  };
  GachaEventMainDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.changeCategory(GachaEventMainDialog.TAB_MAIN);
    p.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    p.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  GachaEventMainDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    p.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    p.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  GachaEventMainDialog.prototype.onSpecialEventRemoved = function (e) {
    if (this.getActiveGachaEvents().length < 1) {
      this.hide();
    } else {
      this.loadTabIcons();
      this.changeCategory(GachaEventMainDialog.TAB_MAIN);
    }
  };
  GachaEventMainDialog.prototype.onLockDialog = function (e) {
    this.lockDialog();
  };
  GachaEventMainDialog.prototype.onUnlockDialog = function (e) {
    this.unLockDialog();
  };
  GachaEventMainDialog.prototype.onTimerUpdate = function (e) {
    this.updateTimer();
  };
  GachaEventMainDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (!this.isLocked && m.ButtonHelper.isButtonEnabled(t.target)) {
      if (t.target.name && t.target.name.indexOf("tab_") == 0 && m.ButtonHelper.isButtonEnabled(t.target)) {
        this.changeCategory(t.target.name);
      } else {
        switch (t.target) {
          case this.dialogDisp.btn_close:
            this.hide();
            break;
          case this.dialogDisp.btn_help:
            f.CastleExternalDialog.dialogHandler.showHelper("", "helpPopup_GachaDeco2x2");
            break;
          case this.dialogDisp.btn_district:
            this.hide();
            this.openDistrictDialog();
        }
      }
    }
  };
  GachaEventMainDialog.prototype.changeCategory = function (t) {
    e.prototype.changeCategory.call(this, t);
    this.updateActiveEvent();
    for (var i = 0; i < 4; i++) {
      this.dialogDisp["tab_" + i].mc_selected.visible = this._currentCategory == "tab_" + i;
      if (this.dialogDisp["tab_" + i].mc_icon.children.length > 0) {
        this.dialogDisp["tab_" + i].mc_icon.children[0].y = this._currentCategory == "tab_" + i ? 0 : 7;
      }
      if (this.dialogDisp["tab_" + i].cacheCanvas) {
        this.dialogDisp["tab_" + i].updateCache();
      }
    }
    this.showSublayer(this._subLayer.get(t), [this._selectedEvent]);
    p.CastleModel.smartfoxClient.sendCommandVO(new l.C2SPointEventGetPointsVO(this._selectedEvent.eventId));
  };
  GachaEventMainDialog.prototype.loadTabIcons = function () {
    var e = this;
    var t = 0;
    this.getActiveGachaEvents().forEach(function (i, n) {
      var s = GachaEventMainDialog.NAME + "_Elements_" + i.assetName();
      var r = GachaEventMainDialog.NAME + "_TabIcon_" + i.assetName();
      var l = new C.CastleGoodgameExternalClip(r, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(s), null, 0, false);
      var c = e.dialogDisp["tab_" + n];
      c.toolTipText = i.eventBuildingNameId;
      o.MovieClipHelper.clearMovieClip(c.mc_icon);
      c.mc_icon.addChild(l);
      m.ButtonHelper.enableButton(c, true);
      t++;
    });
    if (t < GachaEventMainDialog.MAX_TABS - 1) {
      var i = new C.CastleGoodgameExternalClip("GenericGachaIcon", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(GachaEventMainDialog.NAME), null, 0, false);
      var n = this.dialogDisp["tab_" + t];
      n.toolTipText = "comingSoon";
      o.MovieClipHelper.clearMovieClip(n.mc_icon);
      n.mc_icon.addChild(i);
      m.ButtonHelper.enableButton(n, false);
    }
  };
  GachaEventMainDialog.prototype.updateActiveEvent = function () {
    var e = parseInt(this._currentCategory.replace("tab_", ""));
    var t = this.getActiveGachaEvents();
    var i = t[e].assetName();
    var n = GachaEventMainDialog.NAME + "_Elements_" + i;
    var s = GachaEventMainDialog.NAME + "_DistrictIcon_" + i;
    var r = new C.CastleGoodgameExternalClip(s, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(n), null, 0, false);
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.btn_district.mc_icon);
    this.dialogDisp.btn_district.mc_icon.addChild(r);
    m.ButtonHelper.enableButton(this.dialogDisp.btn_district, t[e].hasDistrict());
    if (t[e].hasDistrict()) {
      this.dialogDisp.btn_district.toolTipText = t[e].getDistrictBuildingVO().getNameString();
    } else {
      this.dialogDisp.btn_district.toolTipText = "DecoDistrict2x2_notbuilt";
    }
    this._selectedEvent = t[e];
    this.updateTimer();
  };
  GachaEventMainDialog.prototype.updateTimer = function () {
    var e = this._selectedEvent.remainingEventTimeInSeconds;
    this.itxt_time.textContentVO.stringValue = g.CastleTimeStringHelper.getEventTimeString(e);
  };
  GachaEventMainDialog.prototype.openDistrictDialog = function () {
    this._selectedEvent.openDistrictDialog();
  };
  GachaEventMainDialog.prototype.getActiveGachaEvents = function () {
    return Array.from(p.CastleModel.specialEventData.activeEvents.values()).filter(function (e) {
      return e instanceof h.ADistrictGachaEventVO;
    });
  };
  GachaEventMainDialog.NAME = "GachaEventMain";
  GachaEventMainDialog.TAB_MAIN = "tab_0";
  GachaEventMainDialog.MAX_TABS = 4;
  return GachaEventMainDialog;
}(O.CastleExternalSubLayerDialog);
exports.GachaEventMainDialog = y;
s.classImplementsInterfaces(y, "ICollectableRendererList");