Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./39.js");
var c = require("./1466.js");
var u = require("./4.js");
var d = require("./8.js");
var p = function (e) {
  function CastleConstructionItemsOverwriteDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleConstructionItemsOverwriteDialog.NAME) || this;
  }
  n.__extends(CastleConstructionItemsOverwriteDialog, e);
  CastleConstructionItemsOverwriteDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_ciOverwrite_header"));
    this.itxt_info = this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new s.LocalizedTextVO("dialog_ciOverwrite_info"));
    this.itxt_info_temp = this.textFieldManager.registerTextField(this.dialogDisp.mc_temporary.txt_info, new s.LocalizedTextVO("dialog_ciOverwrite_tempCI_info_01"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bottom, new s.LocalizedTextVO("dialog_ciOverwrite_quickReplace"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_extract.txt_value, new s.LocalizedTextVO("dialog_ciOverwrite_button"));
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.txt_currency, new a.LocalizedNumberVO(0));
    this.dialogDisp.mc_currencyTooltip.toolTipText = l.ClientConstTextIds.C1;
  };
  CastleConstructionItemsOverwriteDialog.prototype.initBasicButtons = function (t) {
    t = t.concat([this.dialogDisp.btn_extract]);
    e.prototype.initBasicButtons.call(this, t);
  };
  CastleConstructionItemsOverwriteDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.dialogProperties.constructionItemVO;
    var n = this.dialogProperties.buildingVO.getConstructionItem(this.dialogProperties.slotVO);
    this.itxt_cost.textContentVO.numberValue = n.removalCostC1;
    var o = u.CastleModel.currencyData.c1Amount >= n.removalCostC1;
    this.itxt_cost.color = o ? r.ClientConstColor.GENERIC_BLACK : r.ClientConstColor.GENERIC_RED;
    if (n.isAppearanceItem) {
      this.itxt_info.textContentVO.textId = "dialog_ciOverwrite_apperance_info";
      this.itxt_info.textContentVO.textReplacements = [new s.LocalizedTextVO(n.nameTextId), n.rarityTextId, new s.LocalizedTextVO(i.nameTextId), i.rarityTextId];
    } else {
      this.itxt_info.textContentVO.textId = "dialog_ciOverwrite_info";
      this.itxt_info.textContentVO.textReplacements = [new s.LocalizedTextVO(n.nameTextId), n.level, new s.LocalizedTextVO(i.nameTextId), i.level];
    }
    this.itxt_info_temp.textContentVO.textReplacements = [new s.LocalizedTextVO(n.nameTextId), n.rarityTextId, new s.LocalizedTextVO(i.nameTextId), i.rarityTextId];
    var a = this.dialogProperties.constructionItemVO.isAppearanceItem;
    this.dialogDisp.mc_overwrite.visible = !a;
    this.dialogDisp.mc_overwriteAppearance.visible = a;
    this.renderOverwriteChart(a ? this.dialogDisp.mc_overwriteAppearance : this.dialogDisp.mc_overwrite);
    var l = u.CastleModel.constructionItemData.isInventoryFull;
    d.ButtonHelper.enableButton(this.dialogDisp.btn_extract, !l);
    this.dialogDisp.btn_extract.toolTipText = l ? "dialog_ciExtract_fullInventory_tooltip" : "";
    this.dialogDisp.mc_temporary.visible = n.isTemporary;
  };
  CastleConstructionItemsOverwriteDialog.prototype.renderOverwriteChart = function (e) {
    var t = this.dialogProperties.buildingVO;
    var i = this.dialogProperties.constructionItemVO;
    var n = t.getConstructionItem(this.dialogProperties.slotVO);
    this.renderConstructionItem(i, e.mc_newItem, false, e.mc_timerNew);
    this.renderConstructionItem(n, e.mc_oldItem, true, e.mc_timerOld);
    this.renderBuilding(t, e.mc_current);
    if (i.isAppearanceItem) {
      this.renderBuilding(i.skinnedBuildingVO, e.mc_result);
    }
  };
  CastleConstructionItemsOverwriteDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (d.ButtonHelper.isButtonEnabled(t.target) && t.target == this.dialogDisp.btn_extract) {
      this.onClickExtract();
    }
  };
  CastleConstructionItemsOverwriteDialog.prototype.onClickAccept = function () {
    this.sendReplaceCommand(c.C2SConstructionItemModeEnum.OVERWRITE);
    this.hide();
  };
  CastleConstructionItemsOverwriteDialog.prototype.onClickExtract = function () {
    this.sendReplaceCommand(c.C2SConstructionItemModeEnum.REPLACE);
    this.hide();
  };
  CastleConstructionItemsOverwriteDialog.NAME = "CastleConstructionItemsOverwrite_Z";
  return CastleConstructionItemsOverwriteDialog;
}(require("./768.js").AConstructionItemsActionDialog);
exports.CastleConstructionItemsOverwriteDialog = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");