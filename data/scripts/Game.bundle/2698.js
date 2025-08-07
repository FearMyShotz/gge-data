Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./39.js");
var c = require("./2699.js");
var u = require("./4.js");
var d = require("./8.js");
var p = function (e) {
  function CastleConstructionItemsExtractDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleConstructionItemsExtractDialog.NAME) || this;
  }
  n.__extends(CastleConstructionItemsExtractDialog, e);
  CastleConstructionItemsExtractDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_ciExtract_header"));
    this.itxt_info = this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new s.LocalizedTextVO("dialog_ciExtract_info"));
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.txt_currency, new a.LocalizedNumberVO(0));
    this.dialogDisp.mc_currencyTooltip.toolTipText = l.ClientConstTextIds.C1;
  };
  CastleConstructionItemsExtractDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.dialogProperties.constructionItemVO;
    this.itxt_cost.textContentVO.numberValue = i.removalCostC1;
    var n = u.CastleModel.currencyData.c1Amount >= i.removalCostC1;
    this.itxt_cost.color = n ? r.ClientConstColor.GENERIC_BLACK : r.ClientConstColor.GENERIC_RED;
    if (i.isAppearanceItem) {
      this.itxt_info.textContentVO.textId = "dialog_ciExtract_apperance_info";
      this.itxt_info.textContentVO.textReplacements = [new s.LocalizedTextVO(i.nameTextId), i.rarityTextId];
    } else {
      this.itxt_info.textContentVO.textId = "dialog_ciExtract_info";
      this.itxt_info.textContentVO.textReplacements = [new s.LocalizedTextVO(i.nameTextId), i.level];
    }
    var o = i.isAppearanceItem;
    this.dialogDisp.mc_extraction.visible = !o;
    this.dialogDisp.mc_appearanceExtraction.visible = o;
    this.renderExtractionChart(o ? this.dialogDisp.mc_appearanceExtraction : this.dialogDisp.mc_extraction);
    var a = u.CastleModel.constructionItemData.isInventoryFull;
    d.ButtonHelper.enableButton(this.dialogDisp.btn_accept, !a);
    this.dialogDisp.btn_accept.toolTipText = a ? "dialog_ciExtract_fullInventory_tooltip" : "";
  };
  CastleConstructionItemsExtractDialog.prototype.renderExtractionChart = function (e) {
    var t = this.dialogProperties.buildingVO;
    var i = this.dialogProperties.constructionItemVO;
    this.renderConstructionItem(i, e.mc_item);
    this.renderBuilding(t, e.mc_current);
    if (i.isAppearanceItem) {
      var n = u.CastleModel.wodData.getBuildingVOById(t.wodId);
      this.renderBuilding(n, e.mc_result);
    }
  };
  CastleConstructionItemsExtractDialog.prototype.onClickAccept = function () {
    u.CastleModel.smartfoxClient.sendCommandVO(new c.C2SRemoveConstructionItemVO(this.dialogProperties.buildingVO.objectId, this.dialogProperties.constructionItemVO.id, this.dialogProperties.slotVO.index, u.CastleModel.kingdomData.activeKingdomID, u.CastleModel.areaData.activeAreaInfo.objectId));
    this.hide();
  };
  CastleConstructionItemsExtractDialog.__initialize_static_members = function () {
    CastleConstructionItemsExtractDialog.NAME = "CastleConstructionItemsExtract";
  };
  return CastleConstructionItemsExtractDialog;
}(require("./770.js").AConstructionItemsActionDialog);
exports.CastleConstructionItemsExtractDialog = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();