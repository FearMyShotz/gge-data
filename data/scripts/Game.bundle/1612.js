Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./39.js");
var d = require("./28.js");
var p = require("./776.js");
var h = require("./777.js");
var g = require("./32.js");
var C = require("./4.js");
var _ = require("./259.js");
var m = require("./42.js");
var f = function (e) {
  function CastleMercenaryOverviewDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleMercenaryOverviewDialog.NAME) || this;
  }
  n.__extends(CastleMercenaryOverviewDialog, e);
  CastleMercenaryOverviewDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.mc_itemContainer.btn_up, this.dialogDisp.mc_itemContainer.btn_down]);
    this.reinitScrollList();
    this.dialogDisp.mc_time.mouseChildren = false;
    this.dialogDisp.mc_time.toolTipText = u.ClientConstTextIds.RESTTIME;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_mission_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_mission_desc")).verticalAlign = m.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_nextMissions, new r.LocalizedTextVO("dialog_mission_time_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_empty.txt_empty, new r.LocalizedTextVO("dialog_mission_empty"));
    this.timerTextField = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_nextMissionsTime, new l.TextVO(""));
  };
  CastleMercenaryOverviewDialog.prototype.destroyScrollList = function () {
    if (this.missionList) {
      this.missionList.remove();
      this.missionList.clear();
      this.missionList = null;
    }
  };
  CastleMercenaryOverviewDialog.prototype.reinitScrollList = function () {
    this.destroyScrollList();
    this.missionList = new E.CastleMercenaryItemScrollList(this.dialogDisp.mc_itemContainer, this.dialogDisp);
    this.missionList.scrollItemClass = y.CastleMercenaryMissionItem;
  };
  CastleMercenaryOverviewDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    C.CastleModel.smartfoxClient.sendCommandVO(new p.C2SMercenaryPackageVO(-1));
    C.CastleModel.mercenaryData.sortMissionsOnUpdate = true;
    C.CastleModel.mercenaryData.waitingForServer = true;
    this.initScroller(0);
    this.setOfferTimer();
  };
  CastleMercenaryOverviewDialog.prototype.hideLoaded = function (t = null) {
    this.destroyScrollList();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleMercenaryOverviewDialog.prototype.addEventListenerOnShow = function () {
    C.CastleModel.mercenaryData.addEventListener(h.CastleMercenaryDataEvent.DATA_CHANGED, this.bindFunction(this.onMercenaryDataUpdate));
    this.controller.addEventListener(g.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserChangeCurreny));
  };
  CastleMercenaryOverviewDialog.prototype.removeEventListenerOnHide = function () {
    C.CastleModel.mercenaryData.removeEventListener(h.CastleMercenaryDataEvent.DATA_CHANGED, this.bindFunction(this.onMercenaryDataUpdate));
    this.controller.addEventListener(g.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserChangeCurreny));
  };
  CastleMercenaryOverviewDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        O.CastleDialogHandler.getInstance().showHelper("", s.Localize.text("dialog_mission_help"));
    }
  };
  CastleMercenaryOverviewDialog.prototype.onMercenaryDataUpdate = function (e) {
    this.initScroller();
    this.setOfferTimer();
  };
  CastleMercenaryOverviewDialog.prototype.onUserChangeCurreny = function (e) {
    if (!C.CastleModel.mercenaryData.waitingForServer) {
      this.initScroller();
    }
  };
  CastleMercenaryOverviewDialog.prototype.setOfferTimer = function () {
    if (this.nextMissionTimer) {
      this.nextMissionTimer.stop();
    }
    this.nextMissionTimer = new _.CastleTimerComponent(this.timerTextField, this.bindFunction(this.getNextMissionTimeString), C.CastleModel.mercenaryData.remainingNextPackageTime / d.ClientConstTime.SEC_2_MILLISEC);
  };
  CastleMercenaryOverviewDialog.prototype.getNextMissionTimeString = function (e) {
    return o.TimeStringHelper.getShortTimeStringBySeconds(e);
  };
  CastleMercenaryOverviewDialog.prototype.initScroller = function (e = -1) {
    var t = c.int(this.missionList ? this.missionList.currentStartIndex : 0);
    this.reinitScrollList();
    var i = C.CastleModel.mercenaryData.missions;
    if (i.length == 0) {
      this.dialogDisp.mc_empty.visible = true;
      this.dialogDisp.mc_itemContainer.visible = false;
    } else {
      var n = e > -1 ? e : t;
      this.dialogDisp.mc_empty.visible = false;
      this.dialogDisp.mc_itemContainer.visible = true;
      if (i != null) {
        for (var o = 0, a = i; o < a.length; o++) {
          var s = a[o];
          if (s !== undefined) {
            this.missionList.pushContent(s);
          }
        }
      }
      this.missionList.initList(n);
    }
  };
  CastleMercenaryOverviewDialog.__initialize_static_members = function () {
    CastleMercenaryOverviewDialog.NAME = "CastleMercenaryOverview";
  };
  return CastleMercenaryOverviewDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleMercenaryOverviewDialog = f;
var O = require("./9.js");
var E = require("./3178.js");
var y = require("./3179.js");
a.classImplementsInterfaces(f, "ICollectableRendererList");
f.__initialize_static_members();