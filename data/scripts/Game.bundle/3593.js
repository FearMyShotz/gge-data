Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./21.js");
var p = require("./139.js");
var h = require("./4.js");
var g = require("./8.js");
var C = function (e) {
  function CastleShortArmyDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleShortArmyDialog.NAME, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleMovementDetails_APR25")) || this;
  }
  n.__extends(CastleShortArmyDialog, e);
  CastleShortArmyDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._movementDetails = new m.CastleMovementDetailsComponent(this.dialogDisp.mc_movementInfo);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO("dialog_shortArmy_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_army, new c.LocalizedTextVO("dialog_shortArmy_title"));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.itxt_armysize = this.textFieldManager.registerTextField(this.dialogDisp.txt_armysize, new u.TextVO(""));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new c.LocalizedTextVO(""));
    this.itxt_explanation = this.textFieldManager.registerTextField(this.dialogDisp.txt_explanation, new c.LocalizedTextVO("dialog_shortArmy_exactSizeTooFarAway"));
    g.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok, this.dialogDisp.mc_movementInfo.btn_retreat, this.dialogDisp.mc_movementInfo.btn_sendHome]);
  };
  CastleShortArmyDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.iArmyMapmovementVO.isAccurateInfo) {
      this.itxt_explanation.visible = false;
      this.itxt_description.textContentVO.textId = "dialog_shortArmy_exactSize";
    } else {
      this.itxt_explanation.visible = true;
      this.itxt_description.textContentVO.textId = "dialog_shortArmy_guessedSize";
    }
    this.dialogDisp.btn_help.visible = this.iArmyMapmovementVO.isAttackingMovement;
    this._movementDetails.initComponent(this.mapMovementVO, this.bindFunction(this.hide));
    this.itxt_armysize.textContentVO.stringValue = l.Localize.text(a.GenericTextIds.VALUE_CIRCA_NOMINAL, [this.iArmyMapmovementVO.armySize]);
    h.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    this.controller.addEventListener(p.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onMovementRemove));
  };
  CastleShortArmyDialog.prototype.onMovementRemove = function (e) {
    if (e.mapmovementVO.objectId == this.mapMovementVO.objectId) {
      this.hide();
    }
  };
  CastleShortArmyDialog.prototype.onArmyDataUpdated = function (e) {
    if (this.mapMovementVO.getTimeUnitMovmentReachTargetInSeconds() <= 1) {
      this.hide();
    } else {
      this._movementDetails.updateComponent();
    }
  };
  CastleShortArmyDialog.prototype.hideLoaded = function (t = null) {
    this._movementDetails.destroy();
    h.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    this.controller.removeEventListener(p.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onMovementRemove));
    e.prototype.hideLoaded.call(this, t);
  };
  CastleShortArmyDialog.prototype.onClick = function (t) {
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          if (r.instanceOfClass(this.mapMovementVO, "ArmyTravelMapMovementVO")) {
            _.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_armyDialog_returningArmy"));
          } else {
            _.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_armyDialog_enemy"));
          }
      }
    }
  };
  Object.defineProperty(CastleShortArmyDialog.prototype, "iArmyMapmovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShortArmyDialog.prototype, "mapMovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShortArmyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleShortArmyDialog.__initialize_static_members = function () {
    CastleShortArmyDialog.NAME = "CastleShortArmy";
  };
  return CastleShortArmyDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleShortArmyDialog = C;
var _ = require("./9.js");
var m = require("./469.js");
s.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();