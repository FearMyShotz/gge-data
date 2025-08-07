Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./21.js");
var r = require("./32.js");
var l = require("./4.js");
var c = require("./27.js");
var u = require("./68.js");
var d = require("./670.js");
var p = require("./8.js");
var h = require("./141.js");
var g = function (e) {
  function StatusIconNoobProtection() {
    var t = e.call(this, "Btn_NoobProtection", "txt_label", new a.TextVO("")) || this;
    t.setTooltip("panel_attackWarning_noobProtection");
    return t;
  }
  n.__extends(StatusIconNoobProtection, e);
  StatusIconNoobProtection.prototype.setVisibilityLoaded = function () {
    var e = l.CastleModel.userData.isNoobProtectedInKingdom(l.CastleModel.kingdomData.activeKingdomID);
    var t = this.layoutManager.currentState != _.CastleLayoutManager.STATE_KINGDOMMAP;
    var i = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    var n = !this.layoutManager.isInEventState;
    var a = l.CastleModel.userData.userLevel >= 5;
    if (e && t && i && n && a) {
      if (this.layoutManager.currentState != _.CastleLayoutManager.STATE_WORLDMAP && l.CastleModel.kingdomData.activeKingdomID != o.FactionConst.KINGDOM_ID) {
        p.ButtonHelper.enableButton(this.icon, true);
      } else {
        p.ButtonHelper.enableButton(this.icon, false);
        this.icon.useFilters(u.BitmapFilterHelper.NO_FILTER, this.allowCaching);
      }
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconNoobProtection.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.itxt_label.autoFitToBounds = true;
  };
  StatusIconNoobProtection.prototype.addEventListenerForVisibility = function () {
    e.prototype.addEventListenerForVisibility.call(this);
    this.controller.addEventListener(r.CastleUserDataEvent.NOOB_PROTECTION, this.bindFunction(this.onNoobProtectionUpdate));
    this.controller.addEventListener(r.CastleUserDataEvent.NOOBTIME_FINISHED, this.bindFunction(this.onNoobProtectionFinished));
  };
  StatusIconNoobProtection.prototype.removeEventListenerForVisibility = function () {
    e.prototype.removeEventListenerForVisibility.call(this);
    this.controller.removeEventListener(r.CastleUserDataEvent.NOOB_PROTECTION, this.bindFunction(this.onNoobProtectionUpdate));
    this.controller.removeEventListener(r.CastleUserDataEvent.NOOBTIME_FINISHED, this.bindFunction(this.onNoobProtectionFinished));
  };
  StatusIconNoobProtection.prototype.onNoobProtectionUpdate = function (e) {
    this.setVisibility();
  };
  StatusIconNoobProtection.prototype.onNoobProtectionFinished = function (e) {
    this.hide();
  };
  StatusIconNoobProtection.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconNoobProtection.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconNoobProtection.prototype.onTimerUpdate = function (e) {
    this.itxt_label.textContentVO.stringValue = c.CastleTimeStringHelper.getCantAttackTimeString(l.CastleModel.userData.getRemainingNoobTime());
    h.CastleTextFieldHelper.restoreWidth(this.itxt_label);
  };
  StatusIconNoobProtection.prototype.onClick = function () {
    if (this.isOutOfTutorial() && this.layoutManager.currentState != _.CastleLayoutManager.STATE_WORLDMAP && l.CastleModel.kingdomData.activeKingdomID != o.FactionConst.KINGDOM_ID) {
      var e = l.CastleModel.userData.castleList.getCastleVOByID(l.CastleModel.areaData.activeArea.areaId, l.CastleModel.kingdomData.activeKingdomID);
      if (e) {
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleManagementDialog, new d.CastleManagementDialogProperties(e));
      }
    }
  };
  return StatusIconNoobProtection;
}(require("./305.js").ACastleLabeledStatusIcon);
exports.StatusIconNoobProtection = g;
var C = require("./9.js");
var _ = require("./17.js");
var m = require("./671.js");