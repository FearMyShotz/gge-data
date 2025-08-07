Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./58.js");
var l = require("./21.js");
var c = require("./32.js");
var u = require("./4.js");
var d = require("./27.js");
var p = require("./68.js");
var h = require("./670.js");
var g = require("./8.js");
var C = require("./141.js");
var _ = function (e) {
  function StatusIconPeaceProtection() {
    var t = e.call(this, "Btn_NoobProtection", "txt_label", new s.TextVO("")) || this;
    t.setTooltip("panel_attackWarning_noobProtection");
    return t;
  }
  n.__extends(StatusIconPeaceProtection, e);
  StatusIconPeaceProtection.prototype.setVisibilityLoaded = function () {
    if (!u.CastleModel.areaData.activeArea || !u.CastleModel.areaData.activeAreaInfo || u.CastleModel.areaData.activeAreaInfo.areaType != a.WorldConst.AREA_TYPE_CAPITAL && u.CastleModel.areaData.activeAreaInfo.areaType != a.WorldConst.AREA_TYPE_METROPOL && u.CastleModel.kingdomData.activeKingdomID != o.FactionConst.KINGDOM_ID) {
      var e = !this.layoutManager.isInEventState;
      var t = u.CastleModel.userData.userLevel >= r.ClientConstLevelRestrictions.MIN_LEVEL_PEACE_PROTECTION_ICON;
      var i = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
      if (e && t && i && u.CastleModel.userData.peaceModeStatus == m.CastleUserData.PEACEMODE_STATUS_PEACETIME) {
        if (this.layoutManager.currentState != O.CastleLayoutManager.STATE_WORLDMAP && u.CastleModel.kingdomData.activeKingdomID != o.FactionConst.KINGDOM_ID) {
          g.ButtonHelper.enableButton(this.icon, true);
        } else {
          g.ButtonHelper.enableButton(this.icon, false);
          this.icon.useFilters(p.BitmapFilterHelper.NO_FILTER, this.allowCaching);
        }
        this.show();
        return;
      }
    }
    this.hide();
  };
  StatusIconPeaceProtection.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.itxt_label.autoFitToBounds = true;
  };
  StatusIconPeaceProtection.prototype.addEventListenerForVisibility = function () {
    e.prototype.addEventListenerForVisibility.call(this);
    this.controller.addEventListener(c.CastleUserDataEvent.PEACE_PROTECTION, this.bindFunction(this.onProtectionUpdate));
  };
  StatusIconPeaceProtection.prototype.removeEventListenerForVisibility = function () {
    e.prototype.removeEventListenerForVisibility.call(this);
    this.controller.removeEventListener(c.CastleUserDataEvent.PEACE_PROTECTION, this.bindFunction(this.onProtectionUpdate));
  };
  StatusIconPeaceProtection.prototype.onProtectionUpdate = function (e) {
    this.setVisibility();
  };
  StatusIconPeaceProtection.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPeaceProtection.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPeaceProtection.prototype.onTimerUpdate = function (e) {
    this.itxt_label.textContentVO.stringValue = d.CastleTimeStringHelper.getCantAttackTimeString(u.CastleModel.userData.getRemainingPeaceStatusTime());
    C.CastleTextFieldHelper.restoreWidth(this.itxt_label);
  };
  StatusIconPeaceProtection.prototype.onClick = function () {
    if (!(u.CastleModel.userData.userLevel < r.ClientConstLevelRestrictions.MIN_LEVEL_PEACE_PROTECTION_ICON) && this.layoutManager.currentState != O.CastleLayoutManager.STATE_WORLDMAP && u.CastleModel.kingdomData.activeKingdomID != o.FactionConst.KINGDOM_ID) {
      var e = u.CastleModel.userData.castleList.getCastleVOByID(u.CastleModel.areaData.activeArea.areaId, u.CastleModel.kingdomData.activeKingdomID);
      f.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CastleManagementDialog, new h.CastleManagementDialogProperties(e));
    }
  };
  return StatusIconPeaceProtection;
}(require("./305.js").ACastleLabeledStatusIcon);
exports.StatusIconPeaceProtection = _;
var m = require("./284.js");
var f = require("./9.js");
var O = require("./17.js");
var E = require("./671.js");