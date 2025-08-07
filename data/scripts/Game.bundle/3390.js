Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./742.js");
var c = require("./4.js");
var u = require("./8.js");
var d = require("./11.js");
var p = require("./136.js");
var h = function (e) {
  function CastleAllianceBuyStandardBoostDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceBuyStandardBoostDialog.NAME) || this;
  }
  n.__extends(CastleAllianceBuyStandardBoostDialog, e);
  CastleAllianceBuyStandardBoostDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle, this.dialogDisp.btn_close]);
  };
  CastleAllianceBuyStandardBoostDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(""));
    this.itxt_title.autoFitToBounds = true;
    this.itxt_boostDesctiption = this.textFieldManager.registerTextField(this.dialogDisp.txt_boostDesctiption, new r.TextVO(""));
    this.itxt_boostAmount = this.textFieldManager.registerTextField(this.dialogDisp.txt_boostAmount, new r.TextVO(""));
    this.itxt_title.textContentVO.stringValue = this.dialogProperties.boostTitle;
    this.itxt_boostDesctiption.textContentVO.stringValue = this.dialogProperties.boostDescription;
    this.itxt_boostAmount.textContentVO.stringValue = this.dialogProperties.boostAmount;
    this.costList = new C.CastleResourceListComponent(this.dialogDisp.mc_boostCost, Library.CastleInterfaceElements.ResourceListCompnent_Item, 4);
    this.costList.displayAsCosts = true;
    this.costList.otherResourceStorageForCosts = c.CastleModel.allianceData.myAllianceVO.storage;
    this.costList.updateComponent(this.dialogProperties.boostCosts, s.Localize.text("costs"));
    u.ButtonHelper.enableButton(this.dialogDisp.btn_ok, c.CastleModel.allianceData.hasRight(c.CastleModel.userData.allianceRank, a.AllianceConst.RIGHT_UPGRADE));
    if (c.CastleModel.allianceData.hasRight(c.CastleModel.userData.allianceRank, a.AllianceConst.RIGHT_UPGRADE)) {
      this.dialogDisp.btn_ok.toolTipText = null;
    } else {
      this.dialogDisp.btn_ok.toolTipText = "dialog_alliance_rankToLow";
    }
  };
  CastleAllianceBuyStandardBoostDialog.prototype.onClick = function (t) {
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onBuyBoost();
          this.hide();
      }
    }
  };
  CastleAllianceBuyStandardBoostDialog.prototype.hideLoaded = function (t = null) {
    this.costList.destroy();
    e.prototype.hideLoaded.call(this);
    if (this.dialogProperties.targetAllianceSublayer) {
      g.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleAllianceDialog, new p.CastleAllianceDialogProperties(this.dialogProperties.targetAllianceSublayer));
      this.dialogProperties.targetAllianceSublayer = null;
    }
  };
  CastleAllianceBuyStandardBoostDialog.prototype.onBuyBoost = function () {
    c.CastleModel.smartfoxClient.sendCommandVO(new l.C2SAllianceUpgradeVO(this.dialogProperties.buffType));
  };
  Object.defineProperty(CastleAllianceBuyStandardBoostDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBuyStandardBoostDialog.__initialize_static_members = function () {
    CastleAllianceBuyStandardBoostDialog.NAME = "CastleAllianceBuyBoostEx";
  };
  return CastleAllianceBuyStandardBoostDialog;
}(d.CastleExternalDialog);
exports.CastleAllianceBuyStandardBoostDialog = h;
var g = require("./9.js");
var C = require("./320.js");
var _ = require("./125.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();