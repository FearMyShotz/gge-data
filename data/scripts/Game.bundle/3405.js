Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./28.js");
var d = require("./241.js");
var p = require("./279.js");
var h = require("./21.js");
var g = require("./26.js");
var C = require("./4.js");
var _ = require("./27.js");
var m = require("./8.js");
var f = require("./11.js");
var O = require("./950.js");
var E = function (e) {
  function CastleFactionInvasionEventDialog() {
    return e.call(this, CastleFactionInvasionEventDialog.NAME) || this;
  }
  n.__extends(CastleFactionInvasionEventDialog, e);
  CastleFactionInvasionEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_remaining_time, new l.TextVO(""));
    this.itxt_time.autoFitToBounds = true;
    this.dialogDisp.mc_time.mouseChildren = false;
    this.dialogDisp.tab_instruction.toolTipText = "dialog_berimondInvasion_header";
    this.dialogDisp.tab_singleplayer.toolTipText = "dialog_berimondInvasion_sp_header";
    this.dialogDisp.tab_multiplayer.toolTipText = "dialog_berimondInvasion_alliance_header";
    this.dialogDisp.tab_gallantry.toolTipText = "dialog_factionTitles_header";
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help]);
  };
  CastleFactionInvasionEventDialog.prototype.createProperties = function (e) {
    switch (e) {
      case CastleFactionInvasionEventDialog.TAB_GALLANTRY_TITLES:
        return new O.CastleTitleSublayerFactionProperties();
      default:
        return null;
    }
  };
  CastleFactionInvasionEventDialog.prototype.onClick = function (e) {
    if (m.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.sublayer_teaser.btn_open_sublayer_singleplayer:
          this.sublayerSwitcher.switchTo(CastleFactionInvasionEventDialog.TAB_SINGLEPLAYER);
          break;
        case this.dialogDisp.sublayer_teaser.btn_open_sublayer_alliance:
          this.sublayerSwitcher.switchTo(CastleFactionInvasionEventDialog.TAB_ALLIANCE);
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          y.CastleDialogHandler.getInstance().showHelper("", this.helpText);
      }
    }
  };
  Object.defineProperty(CastleFactionInvasionEventDialog.prototype, "helpText", {
    get: function () {
      switch (this.sublayerSwitcher.activeTab) {
        case CastleFactionInvasionEventDialog.TAB_INSTRUCTION:
          return r.Localize.text("help_berimondInvasion_overview");
        case CastleFactionInvasionEventDialog.TAB_SINGLEPLAYER:
          return r.Localize.text("help_berimondInvasion_sp");
        case CastleFactionInvasionEventDialog.TAB_ALLIANCE:
          return r.Localize.text("help_berimondInvasion_alliance");
        case CastleFactionInvasionEventDialog.TAB_GALLANTRY_TITLES:
          return r.Localize.text("help_berimond_titles", [s.FactionConst.TITLE_RESET_INTERVAL_SECONDS / u.ClientConstTime.HOURES_2_SEC]);
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionInvasionEventDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    C.CastleModel.specialEventData.addEventListener(g.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    C.CastleModel.timerData.addEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastleFactionInvasionEventDialog.prototype.onEventRemoved = function (e) {
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_FACTION_INVASION) {
      this.hide();
    }
  };
  CastleFactionInvasionEventDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    C.CastleModel.specialEventData.removeEventListener(g.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    C.CastleModel.timerData.removeEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastleFactionInvasionEventDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.sublayerSwitcher.hide();
  };
  CastleFactionInvasionEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (C.CastleModel.specialEventData.isEventActive(a.EventConst.EVENTTYPE_FACTION_INVASION)) {
      C.CastleModel.smartfoxClient.sendCommandVO(new d.C2SPointEventGetPointsVO(a.EventConst.EVENTTYPE_FACTION_INVASION));
    }
    if (!this.sublayerSwitcher) {
      this.dialogDisp.titles_sublayer_container.addChild(this.dialogProperties.titlesSublayer);
      this.sublayerSwitcher = new p.SublayerSwitcher(this.bindFunction(this.createProperties));
      this.sublayerSwitcher.add(CastleFactionInvasionEventDialog.TAB_INSTRUCTION, this.dialogDisp.tab_instruction, new I.CastleFactionInvasionEventDialogInstructionSublayer(this.dialogDisp.sublayer_teaser));
      this.sublayerSwitcher.add(CastleFactionInvasionEventDialog.TAB_SINGLEPLAYER, this.dialogDisp.tab_singleplayer, new T.CastleFactionInvasionEventDialogSingleplayerSublayer(this.dialogDisp.sublayer_singleplayer));
      this.sublayerSwitcher.add(CastleFactionInvasionEventDialog.TAB_ALLIANCE, this.dialogDisp.tab_multiplayer, new D.CastleFactionInvasionEventDialogAllianceSublayer(this.dialogDisp.sublayer_multiplayer));
      this.sublayerSwitcher.add(CastleFactionInvasionEventDialog.TAB_GALLANTRY_TITLES, this.dialogDisp.tab_gallantry, new b.FactionEventTitlesSublayer(this.dialogProperties.titlesSublayer));
      this.sublayerSwitcher.switchTo(CastleFactionInvasionEventDialog.TAB_INSTRUCTION);
    }
    this.sublayerSwitcher.show();
    this.updateTimer();
  };
  CastleFactionInvasionEventDialog.prototype.onUpdateEventTime = function (e) {
    if (c.int(this.eventVO.remainingEventTimeInSeconds) <= 0) {
      this.hide();
    } else {
      this.updateTimer();
    }
  };
  CastleFactionInvasionEventDialog.prototype.updateTimer = function () {
    var e = c.int(this.eventVO.remainingEventTimeInSeconds);
    this.itxt_time.textContentVO.stringValue = _.CastleTimeStringHelper.getEventTimeString(e);
    this.dialogDisp.mc_time.toolTipText = _.CastleTimeStringHelper.getEventToolTipString(e);
  };
  Object.defineProperty(CastleFactionInvasionEventDialog.prototype, "eventVO", {
    get: function () {
      return C.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION_INVASION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionInvasionEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionInvasionEventDialog.NAME = "CastleFactionInvasionEvent_O";
  CastleFactionInvasionEventDialog.TAB_INSTRUCTION = 1;
  CastleFactionInvasionEventDialog.TAB_SINGLEPLAYER = 2;
  CastleFactionInvasionEventDialog.TAB_ALLIANCE = 3;
  CastleFactionInvasionEventDialog.TAB_GALLANTRY_TITLES = 4;
  return CastleFactionInvasionEventDialog;
}(f.CastleExternalDialog);
exports.CastleFactionInvasionEventDialog = E;
var y = require("./9.js");
var b = require("./1652.js");
var D = require("./3406.js");
var I = require("./3417.js");
var T = require("./3549.js");
o.classImplementsInterfaces(E, "ICollectableRendererList");