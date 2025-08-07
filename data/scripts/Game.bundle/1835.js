Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./16.js");
var d = require("./39.js");
var p = require("./1293.js");
var h = require("./4.js");
var g = require("./513.js");
var C = function (e) {
  function CastleRenameCastleDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleRenameCastleDialog.NAME) || this;
  }
  n.__extends(CastleRenameCastleDialog, e);
  CastleRenameCastleDialog.prototype.showLoaded = function (t = null) {
    this.initStaticText(this.dialogDisp.txt_title, "dialog_renameCastle_title");
    this.initStaticText(this.dialogDisp.txt_copy, "dialog_renameCastle_description");
    this.initStaticText(this.dialogDisp.txt_insertTitle, "dialog_nameCastle_title");
    this.initStaticText(this.dialogDisp.mc_costs.txt_title, "costs");
    this.i_costs_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new l.LocalizedNumberVO(0));
    var i = c.int(h.CastleModel.boostData.premiumAccountVO.isActive ? 0 : h.CastleModel.costsData.getFinalCostsC2(r.PlayerConst.CHANGE_CASTLE_NAME_C2));
    this.layoutManager.revertFullscreen();
    this.dialogDisp.mc_costs.toolTipText = d.ClientConstTextIds.C2;
    this.i_costs_txt_value.textContentVO.numberValue = i;
    if (h.CastleModel.currencyData.c2Amount < i) {
      this.i_costs_txt_value.color = u.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    } else {
      this.i_costs_txt_value.color = u.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    e.prototype.showLoaded.call(this, t);
  };
  Object.defineProperty(CastleRenameCastleDialog.prototype, "defaultName", {
    get: function () {
      return this.nameDialogProperties.prefillName;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.BasicRenameDialog.prototype, "defaultName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRenameCastleDialog.prototype, "textMaxChars", {
    get: function () {
      return r.PlayerConst.CASTLE_NAME_MAX_LENGTH;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.BasicRenameDialog.prototype, "textMaxChars").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleRenameCastleDialog.prototype.validate = function () {
    if (e.prototype.validate.call(this)) {
      if (this.itxt_insert.text.length < o.BasicModel.basicLocalization.getUsernameMinLength) {
        this.alert("generic_alert_watchout", "alert_castlenameTooShort");
      } else if (a.TextValide.isSmartFoxValide(this.itxt_insert.text) && a.TextValide.isUsernameValide(this.itxt_insert.text)) {
        if (this.itxt_insert.text != this.nameDialogProperties.worldmapObjectVO.areaNameString) {
          return true;
        }
        this.alert("generic_alert_watchout", "dialog_renameCastle_sameName");
      } else {
        this.alert("generic_alert_watchout", "errorCode_28");
      }
    }
    return false;
  };
  CastleRenameCastleDialog.prototype.sendCommand = function () {
    h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SRenameCastleVO(this.nameDialogProperties.worldmapObjectVO.objectId, this.nameDialogProperties.worldmapObjectVO.kingdomID, this.itxt_insert.text, 1, this.nameDialogProperties.worldmapObjectVO.areaType));
    this.hide();
  };
  Object.defineProperty(CastleRenameCastleDialog.prototype, "nameDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRenameCastleDialog.__initialize_static_members = function () {
    CastleRenameCastleDialog.NAME = "CastleNameAlliance";
  };
  return CastleRenameCastleDialog;
}(g.BasicRenameDialog);
exports.CastleRenameCastleDialog = C;
s.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();