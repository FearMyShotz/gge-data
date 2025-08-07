Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./744.js");
var c = require("./102.js");
var u = require("./4.js");
var d = require("./8.js");
var p = require("./11.js");
var h = require("./136.js");
var g = function (e) {
  function ACastleAllianceBuyBoostExternalDialog(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ACastleAllianceBuyBoostExternalDialog, e);
  ACastleAllianceBuyBoostExternalDialog.prototype.addEventListenerOnShow = function () {
    u.CastleModel.allianceData.addEventListener(c.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onOwnAllianceUpdate));
  };
  ACastleAllianceBuyBoostExternalDialog.prototype.removeEventListenerOnHide = function () {
    u.CastleModel.allianceData.removeEventListener(c.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onOwnAllianceUpdate));
  };
  ACastleAllianceBuyBoostExternalDialog.prototype.onOwnAllianceUpdate = function (e) {
    this.hide();
  };
  ACastleAllianceBuyBoostExternalDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_close]);
  };
  ACastleAllianceBuyBoostExternalDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(this.dialogProperties.boostTitle)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_boostDescription, new r.TextVO(this.dialogProperties.boostDescription));
    var i = new _.CastleResourceListComponent(this.dialogDisp.mc_boostCost, this.resourceListComponentClass, 4);
    i.otherResourceStorageForCosts = u.CastleModel.allianceData.myAllianceVO.storage;
    i.displayAsCosts = true;
    i.updateComponent(this.dialogProperties.boostCosts, s.Localize.text("costs"));
    if (u.CastleModel.allianceData.hasRight(u.CastleModel.userData.allianceRank, a.AllianceConst.RIGHT_UPGRADE)) {
      this.dialogDisp.btn_ok.toolTipText = null;
    } else {
      d.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
      this.dialogDisp.btn_ok.toolTipText = "dialog_alliance_rankToLow";
    }
  };
  Object.defineProperty(ACastleAllianceBuyBoostExternalDialog.prototype, "resourceListComponentClass", {
    get: function () {
      return Library.CastleInterfaceElements.ResourceListCompnent_Item;
    },
    enumerable: true,
    configurable: true
  });
  ACastleAllianceBuyBoostExternalDialog.prototype.onClick = function (t) {
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onBuyBoost();
      }
    }
  };
  ACastleAllianceBuyBoostExternalDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this.dialogProperties.targetAllianceSublayer) {
      C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleAllianceDialog, new h.CastleAllianceDialogProperties(this.dialogProperties.targetAllianceSublayer));
      this.dialogProperties.targetAllianceSublayer = null;
    }
  };
  ACastleAllianceBuyBoostExternalDialog.prototype.onBuyBoost = function () {
    u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SAllianceUpgradeVO(this.dialogProperties.buffType));
  };
  Object.defineProperty(ACastleAllianceBuyBoostExternalDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  return ACastleAllianceBuyBoostExternalDialog;
}(p.CastleExternalDialog);
exports.ACastleAllianceBuyBoostExternalDialog = g;
var C = require("./9.js");
var _ = require("./320.js");
var m = require("./125.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");