Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./21.js");
var l = require("./725.js");
var c = require("./4.js");
var u = require("./672.js");
var d = require("./141.js");
var p = function (e) {
  function StatusIconOpenGate() {
    var t = e.call(this, "Btn_OpengateIcon", "txt_label", new s.TextVO(""), _.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
    t.setTooltip("dialog_startOpenGate_title");
    return t;
  }
  n.__extends(StatusIconOpenGate, e);
  StatusIconOpenGate.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.itxt_label.autoFitToBounds = true;
  };
  StatusIconOpenGate.prototype.setVisibilityLoaded = function () {
    if (this.openGateVisible && this.isNotOnWorldmapOrOtherCastle) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconOpenGate.prototype.onClick = function () {
    e.prototype.onClick.call(this);
    if (this.layoutManager.currentState != g.CastleLayoutManager.STATE_WORLDMAP && c.CastleModel.kingdomData.activeKingdomID != a.FactionConst.KINGDOM_ID) {
      h.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleManagementDialog, new u.CastleManagementDialogProperties(c.CastleModel.areaData.activeAreaInfo));
    }
  };
  StatusIconOpenGate.prototype.addEventListenerForVisibility = function () {
    e.prototype.addEventListenerForVisibility.call(this);
    this.controller.addEventListener(l.OpenGateEvent.OPEN_GATE_CHANGED, this.bindFunction(this.onOpenGateUpdate));
    this.controller.addEventListener(l.OpenGateEvent.OPEN_GATE_FINISHED, this.bindFunction(this.onOpenGateUpdate));
  };
  StatusIconOpenGate.prototype.removeEventListenerForVisibility = function () {
    e.prototype.removeEventListenerForVisibility.call(this);
    this.controller.removeEventListener(l.OpenGateEvent.OPEN_GATE_CHANGED, this.bindFunction(this.onOpenGateUpdate));
    this.controller.removeEventListener(l.OpenGateEvent.OPEN_GATE_FINISHED, this.bindFunction(this.onOpenGateUpdate));
  };
  StatusIconOpenGate.prototype.onOpenGateUpdate = function (e) {
    this.setVisibility();
  };
  StatusIconOpenGate.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconOpenGate.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconOpenGate.prototype.onTimerUpdate = function (e) {
    this.itxt_label.textContentVO.stringValue = o.TimeStringHelper.getShortTimeStringBySeconds(c.CastleModel.userData.getOwnCastle(c.CastleModel.areaData.activeArea.areaId, c.CastleModel.kingdomData.activeKingdomID).remainingOpenGateTime, o.TimeStringHelper.ONE_TIME_FORMAT);
    d.CastleTextFieldHelper.restoreWidth(this.itxt_label);
  };
  Object.defineProperty(StatusIconOpenGate.prototype, "isNotOnWorldmapOrOtherCastle", {
    get: function () {
      return this.layoutManager.currentState != g.CastleLayoutManager.STATE_WORLDMAP && this.layoutManager.currentState != g.CastleLayoutManager.STATE_KINGDOMMAP && !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconOpenGate.prototype, "openGateVisible", {
    get: function () {
      return !!this.layoutManager.isInMyCastle && !!this.myCastle && this.myCastle.remainingOpenGateTime > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconOpenGate.prototype, "myCastle", {
    get: function () {
      if (c.CastleModel.userData.castleList && this.layoutManager.isInMyCastle && c.CastleModel.areaData.activeAreaInfo) {
        return c.CastleModel.userData.castleList.getCastleVOByID(c.CastleModel.areaData.activeAreaInfo.objectId, c.CastleModel.areaData.activeAreaInfo.kingdomID);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return StatusIconOpenGate;
}(require("./305.js").ACastleLabeledStatusIcon);
exports.StatusIconOpenGate = p;
var h = require("./9.js");
var g = require("./17.js");
var C = require("./673.js");
var _ = require("./109.js");