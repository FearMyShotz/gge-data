Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./23.js");
var h = require("./23.js");
var g = require("./39.js");
var C = require("./4394.js");
var _ = require("./21.js");
var m = require("./26.js");
var f = require("./4.js");
var O = require("./27.js");
var E = require("./24.js");
var y = require("./41.js");
var b = function (e) {
  function CastleBountyhunterEventDialog() {
    return e.call(this, CastleBountyhunterEventDialog.NAME) || this;
  }
  n.__extends(CastleBountyhunterEventDialog, e);
  CastleBountyhunterEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_buyNextTarget, this.dialogDisp.btn_visit]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_TipHeadline, new u.LocalizedTextVO("dialog_bountyhunter_tipHeadine"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_Tip, new u.LocalizedTextVO("dialog_bountyhunter_tip"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new u.LocalizedTextVO("reward"));
    this.itxt_c1 = this.textFieldManager.registerTextField(this.dialogDisp.txt_c1, new c.LocalizedNumberVO(0));
    this.itxt_c2 = this.textFieldManager.registerTextField(this.dialogDisp.txt_c2, new c.LocalizedNumberVO(0));
    this.i_skipTool_txt_cost = this.textFieldManager.registerTextField(this.dialogDisp.mc_skipTooltip.txt_cost0.txt_cost, new d.TextVO(""));
    this.i_skipTool_txt_name = this.textFieldManager.registerTextField(this.dialogDisp.mc_skipTooltip.txt_name, new u.LocalizedTextVO("dialog_bountyhunter_skipTooltip", [""]));
    this.itxt_speechBubble = this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new u.LocalizedTextVO("dialog_bountyhunter_title_won"));
    this.itxt_coordinates = this.textFieldManager.registerTextField(this.dialogDisp.mc_coordinates.txt_coordinates, new u.LocalizedTextVO(""));
    this.itxt_castleName = this.textFieldManager.registerTextField(this.dialogDisp.txt_castleName, new d.TextVO(""));
    this.itxt_castleName.autoFitToBounds = true;
    this.itxt_remainingTime = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_remainingTime, new d.TextVO(""));
    this.dialogDisp.mc_c1.toolTipText = g.ClientConstTextIds.C1;
    this.dialogDisp.mc_c2.toolTipText = g.ClientConstTextIds.C2;
    this.dialogDisp.btn_visit.toolTipText = "panel_action_jumpTo";
    this.dialogDisp.mc_skipTooltip.txt_cost0.mc_icon.gotoAndStop(5);
    this.dialogDisp.mc_skipTooltip.visible = false;
  };
  CastleBountyhunterEventDialog.prototype.applyPropertiesLoaded = function (e = null) {
    f.CastleModel.specialEventData.addEventListener(m.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    f.CastleModel.specialEventData.addEventListener(m.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialevent));
    this.showTime();
    this.initDialog();
    f.CastleModel.smartfoxClient.sendCommandVO(new I.C2SBountyHunterValidateOrResetTargetVO());
  };
  CastleBountyhunterEventDialog.prototype.initDialog = function () {
    this.dialogDisp.btn_visit.visible = !this.dialogProperties.specialEventVO.hasWon;
    this.dialogDisp.mc_wonReward.visible = this.dialogProperties.specialEventVO.hasWon;
    this.itxt_c1.textContentVO.numberValue = this.dialogProperties.specialEventVO.bountyRewardC1;
    this.itxt_c2.textContentVO.numberValue = this.dialogProperties.specialEventVO.bountyRewardC2;
    this.i_skipTool_txt_cost.textContentVO.stringValue = String(this.dialogProperties.specialEventVO.skipPriceC2);
    if (this.dialogProperties.specialEventVO.hasWon) {
      this.itxt_speechBubble.textContentVO.textId = "dialog_bountyhunter_title_won";
    } else {
      this.itxt_speechBubble.textContentVO.textId = "dialog_bountyhunter_title";
    }
    this.dialogDisp.btn_visit.visible = !this.dialogProperties.specialEventVO.hasWon;
    this.dialogDisp.mc_wonReward.visible = this.dialogProperties.specialEventVO.hasWon;
    this.dialogDisp.btn_buyNextTarget.visible = !this.dialogProperties.specialEventVO.hasWon;
    this.drawTargetCastle();
    if (this.dialogProperties.specialEventVO.hasUserSolvedEvent && this.dialogDisp.mc_time.txt_remainingTime.visible) {
      this.hideTime();
    }
  };
  CastleBountyhunterEventDialog.prototype.drawTargetCastle = function () {
    var e = this.dialogProperties.specialEventVO.targetAreaVO;
    if (e) {
      this.itxt_coordinates.textContentVO.textId = s.GenericTextIds.VALUE_COORDS;
      this.itxt_coordinates.textContentVO.textReplacements = [e.absAreaPosX, e.absAreaPosY];
      this.itxt_castleName.textContentVO.stringValue = e.areaNameString;
      r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castle);
      var t = e.getDisplayObjectClipContainer(false, null, false);
      if (this.dialogProperties.specialEventVO.hasWon) {
        var i = this.getFlamesClip();
        i.y = -15;
        t.addItem(i);
      }
      t.asDisplayObject().y = -15;
      this.dialogDisp.mc_castle.addChild(t.asDisplayObject());
      this.dialogDisp.mc_castle.scaleX = this.dialogDisp.mc_castle.scaleY = 0.7;
    } else {
      this.itxt_coordinates.textContentVO.textId = "";
      this.itxt_castleName.textContentVO.stringValue = "";
      r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castle);
    }
  };
  CastleBountyhunterEventDialog.prototype.getFlamesClip = function () {
    return new E.CastleGoodgameExternalClip("FlamesLayer", this.worldmapObjectAssetFileURL, null, 0, false);
  };
  Object.defineProperty(CastleBountyhunterEventDialog.prototype, "worldmapObjectAssetFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("FlamesLayer");
    },
    enumerable: true,
    configurable: true
  });
  CastleBountyhunterEventDialog.prototype.onUpdateSpecialEvent = function (e) {
    this.setTime();
  };
  CastleBountyhunterEventDialog.prototype.onRefreshSpecialevent = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.specialEventVO.eventId) {
      this.dialogProperties.specialEventVO = e.specialEventVO;
      this.initDialog();
    }
  };
  CastleBountyhunterEventDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.specialEventVO.eventId) {
      this.hide();
    }
  };
  CastleBountyhunterEventDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.mc_mouse:
        break;
      case this.dialogDisp.btn_visit:
        a.CommandController.instance.executeCommand(D.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.dialogProperties.specialEventVO.targetAreaVO);
        this.hide();
        break;
      case this.dialogDisp.btn_buyNextTarget:
        f.CastleModel.smartfoxClient.sendCommandVO(new C.C2SBountyHunterBuySkipTargetVO());
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleBountyhunterEventDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.btn_buyNextTarget) {
      this.dialogDisp.mc_skipTooltip.alpha = 0;
      this.dialogDisp.mc_skipTooltip.visible = true;
      this.dialogDisp.setChildIndex(this.dialogDisp.mc_skipTooltip, this.dialogDisp.numChildren - 1);
      h.TweenMax.fromTo(this.dialogDisp.mc_skipTooltip, 0.2, {
        alpha: 0
      }, {
        alpha: 1,
        ease: p.Linear.easeIn
      });
    }
  };
  CastleBountyhunterEventDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (t.target == this.dialogDisp.btn_buyNextTarget) {
      h.TweenMax.fromTo(this.dialogDisp.mc_skipTooltip, 0.2, {
        alpha: 1
      }, {
        alpha: 0,
        ease: p.Linear.easeIn,
        onComplete: this.bindFunction(this.onTweenComplete)
      });
    }
  };
  CastleBountyhunterEventDialog.prototype.onTweenComplete = function () {
    this.dialogDisp.mc_skipTooltip.visible = false;
  };
  CastleBountyhunterEventDialog.prototype.hideLoaded = function (t = null) {
    this.hideTime();
    f.CastleModel.specialEventData.removeEventListener(m.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialevent));
    f.CastleModel.specialEventData.removeEventListener(m.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    e.prototype.hideLoaded.call(this);
  };
  CastleBountyhunterEventDialog.prototype.setToolTips = function () {
    e.prototype.setToolTips.call(this);
    this.dialogDisp.mc_coordinates.mouseChildren = false;
    this.dialogDisp.mc_coordinates.toolTipText = "coordinates";
  };
  CastleBountyhunterEventDialog.prototype.setTime = function () {
    y.CastleMovieClipHelper.createHitArea(this.dialogDisp.mc_time);
    O.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_remainingTime, this.dialogProperties.specialEventVO.remainingEventTimeInSeconds);
    O.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.dialogProperties.specialEventVO.remainingEventTimeInSeconds);
  };
  CastleBountyhunterEventDialog.prototype.showTime = function () {
    this.itxt_remainingTime.visible = true;
    f.CastleModel.timerData.addEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
  };
  CastleBountyhunterEventDialog.prototype.hideTime = function () {
    this.itxt_remainingTime.visible = false;
    f.CastleModel.timerData.removeEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
  };
  Object.defineProperty(CastleBountyhunterEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBountyhunterEventDialog.NAME = "CastleBountyhunterEventExternal";
  return CastleBountyhunterEventDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleBountyhunterEventDialog = b;
var D = require("./29.js");
var I = require("./4395.js");
l.classImplementsInterfaces(b, "ICollectableRendererList");