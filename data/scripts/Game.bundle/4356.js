Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./241.js");
var l = require("./21.js");
var c = require("./26.js");
var u = require("./4.js");
var d = require("./27.js");
var p = require("./8.js");
var h = function (e) {
  function CastleAllianceAlienInvasionEventDialog() {
    return e.call(this, CastleAllianceAlienInvasionEventDialog.NAME) || this;
  }
  n.__extends(CastleAllianceAlienInvasionEventDialog, e);
  CastleAllianceAlienInvasionEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._subLayer = new Map();
    this._subLayer.set(CastleAllianceAlienInvasionEventDialog.CAT_PLAYER, new C.CastleAllianceAlienInvasionEventDialogPlayer(this.dialogDisp.mc_sublayer_player));
    this._subLayer.set(CastleAllianceAlienInvasionEventDialog.CAT_ALLIANCE, new g.CastleAllianceAlienInvasionEventDialogAlliance(this.dialogDisp.mc_sublayer_alliance));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_nextEnemy]);
    p.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_player, this.dialogDisp.btn_tab_alliance]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleAllianceAlienInvasionEventDialog.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this._currentSublayer.showHelp();
          break;
        case this.dialogDisp.btn_tab_player:
          this.changeCategory(CastleAllianceAlienInvasionEventDialog.CAT_PLAYER);
          break;
        case this.dialogDisp.btn_tab_alliance:
          this.changeCategory(CastleAllianceAlienInvasionEventDialog.CAT_ALLIANCE);
          break;
        case this.dialogDisp.btn_nextEnemy:
          u.CastleModel.smartfoxClient.sendCommandVO(this.dialogProperties.getFindNextMapObjectVO());
          this.hide();
      }
    }
  };
  CastleAllianceAlienInvasionEventDialog.prototype.updateCopyTexts = function () {
    if (this._currentCategory == CastleAllianceAlienInvasionEventDialog.CAT_PLAYER) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new a.LocalizedTextVO("dialog_" + this.dialogProperties.textIDType + "_camp_points_copy"));
    } else if (u.CastleModel.userData.isInAlliance) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new a.LocalizedTextVO("dialog_" + this.dialogProperties.textIDType + "Alliance_camp_points_copy", [this.eventVO.allianceEventVO.pointThresholds[0]]));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new a.LocalizedTextVO("dialog_" + this.dialogProperties.textIDType + "Alliance_camp_points_noAlliance_copy"));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new a.LocalizedTextVO(this.eventVO.useReroll ? "dialog_invasion_camp_dethrone_copy" : " "));
  };
  CastleAllianceAlienInvasionEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.btn_tab_alliance.toolTipText = "dialog_" + this.dialogProperties.textIDType + "_allianceRanking_tooltip";
    this.dialogDisp.btn_tab_player.toolTipText = "dialog_" + this.dialogProperties.textIDType + "_singleRanking_tooltip";
    this.dialogDisp.btn_nextEnemy.toolTipText = "dialog_" + this.dialogProperties.textIDType + "_jumpto_castleName";
    this.updateCopyTexts();
    this.dialogDisp.mc_difficulty.visible = this.eventVO.isDifficultyScalingActivated;
    if (this.dialogDisp.mc_difficulty.visible) {
      _.DifficultyScalingHelper.addDifficultyIcon(this.dialogDisp.mc_difficulty.mc_icon, u.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(this.eventVO.difficultyIDChoosen), 45, 45, this.dialogDisp.mc_difficulty);
    }
    u.CastleModel.smartfoxClient.sendCommandVO(new r.C2SPointEventGetPointsVO(this.dialogProperties.eventId));
    this.setSkin();
    this.setButtonVisibility();
    if (this._currentCategory) {
      this.changeCategory(this._currentCategory);
    } else {
      this.changeCategory(CastleAllianceAlienInvasionEventDialog.CAT_PLAYER);
    }
    this.updateTime();
  };
  CastleAllianceAlienInvasionEventDialog.prototype.setSkin = function () {
    var e = s.int(this.dialogProperties.skinFrame);
    this.dialogDisp.mc_curtain.gotoAndStop(e);
    this.dialogDisp.mc_teaserImage.gotoAndStop(e);
  };
  CastleAllianceAlienInvasionEventDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    u.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  CastleAllianceAlienInvasionEventDialog.prototype.changeCategory = function (t) {
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(t), [this.dialogProperties]);
      p.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_player, this._currentCategory == CastleAllianceAlienInvasionEventDialog.CAT_PLAYER);
      p.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_alliance, this._currentCategory == CastleAllianceAlienInvasionEventDialog.CAT_ALLIANCE);
      this.updateCopyTexts();
    }
  };
  CastleAllianceAlienInvasionEventDialog.prototype.setButtonVisibility = function () {
    if (this.eventVO.isDualEvent) {
      this.dialogDisp.btn_tab_player.visible = true;
      this.dialogDisp.btn_tab_alliance.visible = true;
    } else {
      this.dialogDisp.btn_tab_player.visible = false;
      this.dialogDisp.btn_tab_alliance.visible = false;
    }
  };
  CastleAllianceAlienInvasionEventDialog.prototype.setCopyTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new a.LocalizedTextVO("dialog_" + this.dialogProperties.textIDType + "_camp_copy"));
    var e = u.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
    var t = e && e.eventId == this.eventVO.eventId ? "_seasonLeague_info" : "_camp_info";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc2, new a.LocalizedTextVO("dialog_" + this.dialogProperties.textIDType + t));
  };
  CastleAllianceAlienInvasionEventDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    u.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  CastleAllianceAlienInvasionEventDialog.prototype.updateTime = function (e = null) {
    if (this.eventVO) {
      d.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, this.eventVO.remainingEventTimeInSeconds);
      d.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.eventVO.remainingEventTimeInSeconds);
    }
  };
  CastleAllianceAlienInvasionEventDialog.prototype.onRemoveEvent = function (e) {
    if (!this.eventVO || e.specialEventVO.eventId == this.eventVO.eventId) {
      this.hide();
    }
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialog.prototype, "eventVO", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialog.NAME = "CastleAllianceAlienInvasionEvent_G";
  CastleAllianceAlienInvasionEventDialog.CAT_PLAYER = "CAT_PLAYER";
  CastleAllianceAlienInvasionEventDialog.CAT_ALLIANCE = "CAT_ALLIANCE";
  return CastleAllianceAlienInvasionEventDialog;
}(require("./114.js").CastleExternalSubLayerDialog);
exports.CastleAllianceAlienInvasionEventDialog = h;
var g = require("./4357.js");
var C = require("./4359.js");
var _ = require("./288.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");