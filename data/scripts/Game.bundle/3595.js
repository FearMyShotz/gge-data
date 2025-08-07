Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./18.js");
var d = require("./51.js");
var p = require("./21.js");
var h = require("./139.js");
var g = require("./15.js");
var C = require("./4.js");
var _ = require("./8.js");
var m = require("./107.js");
var f = function (e) {
  function CastleSpyInfoDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSpyInfoDialog.NAME) || this;
  }
  n.__extends(CastleSpyInfoDialog, e);
  CastleSpyInfoDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._movementDetails = new E.CastleMovementDetailsComponent(this.dialogDisp.mc_movementInfo);
    this.dialogDisp.mc_spyCount.toolTipText = "spy_dialog_spyCount";
    this.dialogDisp.mc_spyRisk.toolTipText = "spy_dialog_spyRisk";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new c.LocalizedTextVO("dialog_spyInfo_description"));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO(""));
    this.ispyCount_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_spyCount.txt_value, new l.LocalizedNumberVO(0));
    this.ispyRisk_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_spyRisk.txt_value, new c.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.ispyEffect_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_spyEffect.txt_value, new c.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE, [0]));
    _.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok, this.dialogDisp.mc_movementInfo.btn_retreat, this.dialogDisp.mc_movementInfo.btn_sendHome]);
  };
  CastleSpyInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    m.CharacterHelper.createCharacterBig(d.ClientConstCharacter.CHAR_ID_SPY, this.dialogDisp.mc_char, 147, 128);
    if (this.spyMapmovementVO.spyType == u.ClientConstCastle.SPYTYPE_MILITARY) {
      this.itxt_title.textContentVO.textId = "dialog_spy_military";
    } else if (this.spyMapmovementVO.spyType == u.ClientConstCastle.SPYTYPE_ECO) {
      this.itxt_title.textContentVO.textId = "dialog_spy_economy";
    } else if (this.spyMapmovementVO.spyType == u.ClientConstCastle.SPYTYPE_SABOTAGE) {
      this.itxt_title.textContentVO.textId = "dialog_spy_titleSabotage";
    }
    this.itxt_title.verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.ispyCount_txt_value.textContentVO.numberValue = this.spyMapmovementVO.spyCount;
    this.ispyRisk_txt_value.textContentVO.textReplacements = [this.spyMapmovementVO.spyRisk];
    if (this.spyMapmovementVO.isSabotageSpyMovement) {
      this.dialogDisp.mc_spyEffect.mc_icon.gotoAndStop(2);
      this.ispyEffect_txt_value.textContentVO.textId = a.GenericTextIds.VALUE_PERCENTAGE;
      this.ispyEffect_txt_value.textContentVO.textReplacements = [this.spyMapmovementVO.sabotageDamage];
      this.dialogDisp.mc_spyEffect.toolTipText = "spy_dialog_sabotageDamage";
    } else {
      this.dialogDisp.mc_spyEffect.mc_icon.gotoAndStop(1);
      this.ispyEffect_txt_value.textContentVO.textId = a.GenericTextIds.VALUE_PERCENTAGE;
      this.ispyEffect_txt_value.textContentVO.textReplacements = [this.spyMapmovementVO.spyAccuracy];
      this.dialogDisp.mc_spyEffect.toolTipText = "spy_dialog_spyAccuracy";
    }
    C.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    g.CastleBasicController.getInstance().addEventListener(h.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    this._movementDetails.initComponent(this.spyMapmovementVO, this.bindFunction(this.hide));
  };
  CastleSpyInfoDialog.prototype.onArmyDataUpdated = function (e) {
    if (this.spyMapmovementVO.getTimeUnitMovmentReachTargetInSeconds() < 2) {
      this.hide();
    } else {
      this._movementDetails.updateComponent();
    }
  };
  CastleSpyInfoDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        O.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_spyMove"));
    }
  };
  CastleSpyInfoDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._movementDetails.destroy();
    C.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    g.CastleBasicController.getInstance().removeEventListener(h.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
  };
  CastleSpyInfoDialog.prototype.onArmyRemoved = function (e) {
    if (e.mapmovementVO.objectId == this.spyMapmovementVO.objectId) {
      this.hide();
    }
  };
  Object.defineProperty(CastleSpyInfoDialog.prototype, "spyMapmovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpyInfoDialog.__initialize_static_members = function () {
    CastleSpyInfoDialog.NAME = "CastleSpyInfoEx";
  };
  return CastleSpyInfoDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleSpyInfoDialog = f;
var O = require("./9.js");
var E = require("./468.js");
s.classImplementsInterfaces(f, "ICollectableRendererList");
f.__initialize_static_members();