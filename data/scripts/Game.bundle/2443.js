Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./16.js");
var d = require("./39.js");
var p = require("./742.js");
var h = require("./4.js");
var g = require("./8.js");
var C = function (e) {
  function CastleAllianceForgeUpgradeDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceForgeUpgradeDialog.NAME) || this;
  }
  n.__extends(CastleAllianceForgeUpgradeDialog, e);
  CastleAllianceForgeUpgradeDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    g.ButtonHelper.enableButton(this.dialogDisp.btn_ok, h.CastleModel.allianceData.myAllianceVO && h.CastleModel.allianceData.hasRight(h.CastleModel.userData.allianceRank, s.AllianceConst.TYPE_FORGE_UPGRADE));
  };
  CastleAllianceForgeUpgradeDialog.prototype.setToolTips = function () {
    e.prototype.setToolTips.call(this);
    this.dialogDisp.mc_costsStone.toolTipText = d.ClientConstTextIds.STONE;
    this.dialogDisp.mc_costsStone.mouseChildren = false;
    this.dialogDisp.mc_costsWood.toolTipText = d.ClientConstTextIds.WOOD;
    this.dialogDisp.mc_costsWood.mouseChildren = false;
    this.dialogDisp.mc_costsC1.toolTipText = d.ClientConstTextIds.C1;
    this.dialogDisp.mc_costsC1.mouseChildren = false;
  };
  CastleAllianceForgeUpgradeDialog.prototype.setCopyTexts = function () {
    e.prototype.setCopyTexts.call(this);
    var t = h.CastleModel.allianceData.myAllianceVO.getUpgradeCosts(s.AllianceConst.TYPE_FORGE_UPGRADE);
    var i = h.CastleModel.allianceData.myAllianceVO.storage.getAmountOrDefaultByType(_.CollectableEnum.STONE);
    var n = t.getAmountOrDefaultByType(_.CollectableEnum.STONE);
    var a = h.CastleModel.allianceData.myAllianceVO.storage.getAmountOrDefaultByType(_.CollectableEnum.WOOD);
    var d = t.getAmountOrDefaultByType(_.CollectableEnum.WOOD);
    var p = h.CastleModel.allianceData.myAllianceVO.storage.getAmountOrDefaultByType(_.CollectableEnum.C1);
    var g = t.getAmountOrDefaultByType(_.CollectableEnum.C1);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_dialog_headline, new l.LocalizedTextVO("allyForge_upgrade_title"), new o.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_dialog_copy, new l.LocalizedTextVO("allyforge_upgrade_copytext"), new o.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy_nextlevel, new l.LocalizedTextVO("allyforge_upgrade_nextlevel"), new o.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_value_level, new c.TextVO(String(h.CastleModel.allianceData.allyForgeLevel + 1)), new o.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy_costs, new l.LocalizedTextVO("allyforge_upgrade_copycost"), new o.InternalGGSTextFieldConfigVO(true));
    this.itxt_costWood = this.textFieldManager.registerTextField(this.dialogDisp.mc_costsWood.txt_value_costwood, new r.LocalizedNumberVO(d), new o.InternalGGSTextFieldConfigVO(true));
    this.itxt_costCoins = this.textFieldManager.registerTextField(this.dialogDisp.mc_costsC1.txt_value_costcoins, new r.LocalizedNumberVO(g), new o.InternalGGSTextFieldConfigVO(true));
    this.itxt_costStone = this.textFieldManager.registerTextField(this.dialogDisp.mc_costsStone.txt_value_coststone, new r.LocalizedNumberVO(n), new o.InternalGGSTextFieldConfigVO(true));
    this.itxt_costWood.color = a < d ? u.ClientConstColor.FONT_INSUFFICIENT_COLOR : u.ClientConstColor.FONT_DEFAULT_COLOR;
    this.itxt_costCoins.color = p < g ? u.ClientConstColor.FONT_INSUFFICIENT_COLOR : u.ClientConstColor.FONT_DEFAULT_COLOR;
    this.itxt_costStone.color = i < n ? u.ClientConstColor.FONT_INSUFFICIENT_COLOR : u.ClientConstColor.FONT_DEFAULT_COLOR;
  };
  CastleAllianceForgeUpgradeDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onCheckConfirmUpgrade();
          this.hide();
      }
    }
  };
  CastleAllianceForgeUpgradeDialog.prototype.onCheckConfirmUpgrade = function () {
    h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SAllianceUpgradeVO(s.AllianceConst.TYPE_FORGE_UPGRADE));
  };
  CastleAllianceForgeUpgradeDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel]);
    this.itxt_costWood = this.textFieldManager.registerTextField(this.dialogDisp.mc_costsWood.txt_value_costwood, new c.TextVO(""), new o.InternalGGSTextFieldConfigVO(true));
    this.itxt_costCoins = this.textFieldManager.registerTextField(this.dialogDisp.mc_costsC1.txt_value_costcoins, new c.TextVO(""), new o.InternalGGSTextFieldConfigVO(true));
    this.itxt_costStone = this.textFieldManager.registerTextField(this.dialogDisp.mc_costsStone.txt_value_coststone, new c.TextVO(""), new o.InternalGGSTextFieldConfigVO(true));
    this.itxt_dialogHeadline = this.textFieldManager.registerTextField(this.dialogDisp.txt_dialog_headline, new l.LocalizedTextVO("allyForge_upgrade_title"), new o.InternalGGSTextFieldConfigVO(true));
    this.itxt_dialogCopy = this.textFieldManager.registerTextField(this.dialogDisp.txt_dialog_copy, new l.LocalizedTextVO("allyforge_upgrade_copytext"), new o.InternalGGSTextFieldConfigVO(true));
    this.itxt_copyNextLevel = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy_nextlevel, new l.LocalizedTextVO("allyforge_upgrade_nextlevel"), new o.InternalGGSTextFieldConfigVO(true));
    this.itxt_valueLevel = this.textFieldManager.registerTextField(this.dialogDisp.txt_value_level, new c.TextVO(""), new o.InternalGGSTextFieldConfigVO(true));
    this.itxt_copyCosts = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy_costs, new l.LocalizedTextVO("allyforge_upgrade_copycost"), new o.InternalGGSTextFieldConfigVO(true));
  };
  CastleAllianceForgeUpgradeDialog.__initialize_static_members = function () {
    CastleAllianceForgeUpgradeDialog.NAME = "CastleAllianceForgeUpgrade";
  };
  return CastleAllianceForgeUpgradeDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAllianceForgeUpgradeDialog = C;
var _ = require("./12.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();