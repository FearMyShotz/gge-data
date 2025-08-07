Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./2456.js");
var c = require("./102.js");
var u = require("./4.js");
var d = require("./512.js");
var p = require("./13.js");
var h = require("./285.js");
var g = require("./8.js");
var C = require("./20.js");
var _ = function (e) {
  function CastleNameAllianceDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleNameAllianceDialog.NAME) || this;
  }
  n.__extends(CastleNameAllianceDialog, e);
  CastleNameAllianceDialog.prototype.initLoaded = function (t = null) {
    g.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_back, this.dialogDisp.btn_close], C.ClickFeedbackButtonHover);
    e.prototype.initLoaded.call(this, t);
  };
  CastleNameAllianceDialog.prototype.showLoaded = function (t = null) {
    this.initStaticText(this.dialogDisp.txt_title, p.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_editName"));
    this.initStaticText(this.dialogDisp.txt_copy, "dialog_alliance_editName_copy");
    this.initStaticText(this.dialogDisp.txt_insertTitle, "dialog_alliance_name");
    this.initStaticText(this.dialogDisp.mc_costs.txt_title, "costs");
    this.imc_costs = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new r.LocalizedNumberVO(0));
    this.controller.addEventListener(c.CastleAllianceDataEvent.ON_ALLIANCE_NAME_CHANGED, this.bindFunction(this.onAllianceNameChanged));
    var i = this.dialogProperties.allianceVO.freeRenames == 0 ? s.AllianceConst.RENAME_COST_C2 : 0;
    this.imc_costs.textContentVO.numberValue = i;
    e.prototype.showLoaded.call(this, t);
    if (this._inputBehaviourName) {
      this._inputBehaviourName.onHide();
    }
    this._inputBehaviourName = new h.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_name, this.itxt_insert);
    this._inputBehaviourName.onShow();
  };
  CastleNameAllianceDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._inputBehaviourName.onHide();
    this.controller.removeEventListener(c.CastleAllianceDataEvent.ON_ALLIANCE_NAME_CHANGED, this.bindFunction(this.onAllianceNameChanged));
  };
  Object.defineProperty(CastleNameAllianceDialog.prototype, "textMaxChars", {
    get: function () {
      return s.AllianceConst.NAME_MAX_LENGTH;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.BasicRenameDialog.prototype, "textMaxChars").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNameAllianceDialog.prototype, "defaultName", {
    get: function () {
      return this.dialogProperties.allianceVO.allianceName;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.BasicRenameDialog.prototype, "defaultName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleNameAllianceDialog.prototype.validate = function () {
    if (e.prototype.validate.call(this)) {
      if (this.itxt_insert.text == "") {
        this.alert("generic_alert_watchout", "dialog_alliance_noName");
      } else {
        if (o.TextValide.isUsernameValide(this.itxt_insert.text)) {
          return true;
        }
        this.alert("generic_alert_watchout", "alliance_name_invalide");
      }
    }
    return false;
  };
  CastleNameAllianceDialog.prototype.sendCommand = function () {
    u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SAllianceChangeNameVO(o.TextValide.getValidUsername(this.itxt_insert.text)));
  };
  CastleNameAllianceDialog.prototype.onAllianceNameChanged = function (e) {
    this.hide();
  };
  Object.defineProperty(CastleNameAllianceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleNameAllianceDialog.NAME = "CastleNameAlliance_W";
  return CastleNameAllianceDialog;
}(d.BasicRenameDialog);
exports.CastleNameAllianceDialog = _;
a.classImplementsInterfaces(_, "ICollectableRendererList");