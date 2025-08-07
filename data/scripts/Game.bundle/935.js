Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./930.js");
var c = require("./139.js");
var u = require("./4.js");
var d = function (e) {
  function CastleAskRetreatDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, new Library.CastleInterfaceElements.CastleStandardYesNo()) || this;
  }
  n.__extends(CastleAskRetreatDialog, e);
  CastleAskRetreatDialog.prototype.applyProperties = function () {
    if (s.instanceOfClass(this.dialogProperties.mapMovementVO, "SupportDefenceMapmovementVO") && this.dialogProperties.mapMovementVO.isStationed) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_moveOverview_sendHome")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("ringmenu_retreat")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    }
    if (s.instanceOfClass(this.dialogProperties.mapMovementVO, "SpyMapmovementVO")) {
      if (this.dialogProperties.mapMovementVO.isSabotageSpyMovement) {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_retreatyesno_sabotage"));
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_retreatYesNo_spy_copy"));
      }
    } else if (s.instanceOfClass(this.dialogProperties.mapMovementVO, "SiegeMapmovementVO")) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_retreatYesNo_occupation_copy"));
    } else if (s.instanceOfClass(this.dialogProperties.mapMovementVO, "MarketMapmovementVO")) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_retreatYesNo_market_copy"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_retreatYesNo_copy"));
    }
    this.controller.addEventListener(c.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
  };
  CastleAskRetreatDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_yes:
        this.hide();
        u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SCancelMovementVO(this.dialogProperties.mapMovementVO.objectId));
        if (this.dialogProperties.yesCallBack) {
          this.dialogProperties.yesCallBack();
        }
        break;
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_no:
        this.hide();
    }
  };
  CastleAskRetreatDialog.prototype.hide = function () {
    u.CastleModel.armyData.removeEventListener(c.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    e.prototype.hide.call(this);
  };
  CastleAskRetreatDialog.prototype.onArmyRemoved = function (e) {
    if (e.mapmovementVO.objectId == this.dialogProperties.mapMovementVO.objectId) {
      this.hide();
    }
  };
  Object.defineProperty(CastleAskRetreatDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAskRetreatDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleAskRetreatDialog.__initialize_static_members = function () {
    CastleAskRetreatDialog.NAME = "CastleAskRereatDialog";
  };
  return CastleAskRetreatDialog;
}(require("./229.js").CastleDialog);
exports.CastleAskRetreatDialog = d;
a.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();