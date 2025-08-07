Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./146.js");
var d = require("./27.js");
var p = require("./68.js");
var h = require("./24.js");
var g = require("./259.js");
var C = function () {
  function ACastleWorldCupDialogState(e) {
    this.dialog = e;
    this.initTextFields();
    this.initElements();
  }
  ACastleWorldCupDialogState.prototype.stopTimer = function () {
    this.remainingTimeComponent.stop();
  };
  ACastleWorldCupDialogState.prototype.initTextFields = function () {
    this.tfBubble = this.textFieldManager.registerTextField(this.dialogDisp.tfBubble, new l.LocalizedTextVO(""));
    this.tfRemainingTime = this.textFieldManager.registerTextField(this.dialogDisp.tfRemainingTime, new c.TextVO(""));
    this.tfRules = this.textFieldManager.registerTextField(this.dialogDisp.btnRules.tfRules, new l.LocalizedTextVO("dialog_worldCup_rules"));
    this.tfDesc = this.textFieldManager.registerTextField(this.dialogDisp.tfDesc, new l.LocalizedTextVO("dialog_worldCup_regularTime"));
    this.tfDesc.autoFitToBounds = true;
    this.tfBox = this.textFieldManager.registerTextField(this.dialogDisp.tfBox, new l.LocalizedTextVO(""));
    this.tfTeamA = this.textFieldManager.registerTextField(this.dialogDisp.btnTeamA.tfTeam, new l.LocalizedTextVO(""));
    this.tfTeamB = this.textFieldManager.registerTextField(this.dialogDisp.btnTeamB.tfTeam, new l.LocalizedTextVO(""));
    this.tfTeamDraw = this.textFieldManager.registerTextField(this.dialogDisp.btnDraw.tfDraw, new l.LocalizedTextVO(""));
    this.tfBonus = this.textFieldManager.registerTextField(this.dialogDisp.tfBonus, new l.LocalizedTextVO("dialog_privatePrimeTime_bonusValue"));
    this.tfBonus.autoFitToBounds = true;
    this.tfC2 = this.textFieldManager.registerTextField(this.dialogDisp.tfC2, new l.LocalizedTextVO("plus_value_gold"));
    this.tfC2.autoFitToBounds = true;
    this.tfRemainingTime.mouseEnabled = false;
    this.remainingTimeComponent = new g.CastleTimerComponent(this.tfRemainingTime, this.bindFunction(this.getTimerText));
  };
  ACastleWorldCupDialogState.prototype.initElements = function () {
    this.dialogDisp.btnRules.mouseChildren = false;
    this.dialogDisp.btnTeamA.mouseChildren = false;
    this.dialogDisp.btnTeamB.mouseChildren = false;
    this.dialogDisp.btnDraw.mouseChildren = false;
    this.dialogDisp.btnRules.toolTipText = "generic_help";
    this.buyC2Component = new f.ButtonAddGoldComponent(this.dialogDisp.btnBuyC2);
  };
  ACastleWorldCupDialogState.prototype.updateTexts = function () {
    this.remainingTimeComponent.start(this.worldCupEventVO.remainingEventTimeInSeconds);
    this.tfBubble.textContentVO.textId = "";
    this.tfTeamA.textContentVO.textId = this.getTeamString(this.worldCupEventVO.teamA);
    this.tfTeamB.textContentVO.textId = this.getTeamString(this.worldCupEventVO.teamB);
    this.tfTeamDraw.textContentVO.textId = "dialog_worldCup_draw";
    this.tfBonus.textContentVO.textReplacements = [this.worldCupEventVO.bonusC2];
    this.tfC2.textContentVO.textReplacements = [this.worldCupEventVO.bonusRubies];
    this.buyC2Component.init();
    this.dialogDisp.bgRemainingTime.toolTipText = "resttime";
  };
  ACastleWorldCupDialogState.prototype.updateElements = function () {
    this.updateFlag(this.dialogDisp.flagAContainer, this.flagA, this.worldCupEventVO.teamA);
    this.updateFlag(this.dialogDisp.flagBContainer, this.flagB, this.worldCupEventVO.teamB);
  };
  ACastleWorldCupDialogState.prototype.updateFlag = function (e, t, i) {
    a.MovieClipHelper.clearMovieClip(e);
    t = this.getTeamFlagClip(i);
    e.addChild(t);
  };
  ACastleWorldCupDialogState.prototype.getTeamFlagClip = function (e) {
    var t = ACastleWorldCupDialogState.FLAG_ASSET_NAME_PREFIX + e;
    return new h.CastleGoodgameExternalClip(t, ACastleWorldCupDialogState.assetFileURL(t), null, 0, false);
  };
  ACastleWorldCupDialogState.assetFileURL = function (e) {
    return n.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
  };
  ACastleWorldCupDialogState.prototype.getTimerText = function (e) {
    return d.CastleTimeStringHelper.getEventTimeString(e);
  };
  ACastleWorldCupDialogState.prototype.activateButton = function (e) {
    e.bg.gotoAndStop(ACastleWorldCupDialogState.BUTTON_NORMAL_STATE);
    e.actLikeButton = true;
    e.enabled = true;
    e.useFilters(p.BitmapFilterHelper.NO_FILTER);
  };
  ACastleWorldCupDialogState.prototype.deactivateButton = function (e) {
    e.enabled = false;
    e.bg.gotoAndStop(ACastleWorldCupDialogState.BUTTON_NORMAL_STATE);
    e.actLikeButton = false;
    e.useFilters(p.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX);
    e.scaleX = e.scaleY = ACastleWorldCupDialogState.DEFAULT_SCALE;
  };
  ACastleWorldCupDialogState.prototype.getTeamString = function (e) {
    return "dialog_worldCup_team" + e.toString();
  };
  ACastleWorldCupDialogState.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btnClose:
        this.dialog.hideDialog();
        break;
      case this.dialogDisp.btnRules:
        _.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("dialog_worldCup_rules_text"));
        break;
      case this.dialogDisp.btnBuyC2:
        this.buyC2Component.onClickButton(u.CastleOpenShopExecutor.SOURCE_PRIME_TIME_WORLDCUP, O.CXFSourceTrackingConstants.SOURCE_PRIME_TIME_WORLDCUP);
    }
  };
  ACastleWorldCupDialogState.prototype.destroy = function () {
    if (this.buyC2Component) {
      this.buyC2Component.destroy();
    }
  };
  ACastleWorldCupDialogState.prototype.resetState = function () {
    this.stopTimer();
  };
  Object.defineProperty(ACastleWorldCupDialogState.prototype, "dialogDisp", {
    get: function () {
      return this.dialog.dialogDisp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleWorldCupDialogState.prototype, "worldCupEventVO", {
    get: function () {
      return this.dialog.dialogProperties.worldCupEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleWorldCupDialogState.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleWorldCupDialogState.prototype, "layoutManager", {
    get: function () {
      return m.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ACastleWorldCupDialogState.__initialize_static_members = function () {
    ACastleWorldCupDialogState.FLAG_ASSET_NAME_PREFIX = "WorldCupFlagTeam";
    ACastleWorldCupDialogState.MOUSE_OVER_SCALE = 1.05;
    ACastleWorldCupDialogState.DEFAULT_SCALE = 1;
    ACastleWorldCupDialogState.BUTTON_NORMAL_STATE = 1;
    ACastleWorldCupDialogState.BUTTON_SELECTED_STATE = 2;
  };
  return ACastleWorldCupDialogState;
}();
exports.ACastleWorldCupDialogState = C;
var _ = require("./9.js");
var m = require("./17.js");
var f = require("./428.js");
var O = require("./108.js");
s.classImplementsInterfaces(C, "ICastleWorldCupDialogState");
C.__initialize_static_members();