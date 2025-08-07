Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./1466.js");
var r = function (e) {
  function CastleConstructionItemsEmbedDialog() {
    return e.call(this, CastleConstructionItemsEmbedDialog.NAME) || this;
  }
  n.__extends(CastleConstructionItemsEmbedDialog, e);
  CastleConstructionItemsEmbedDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_ciAssign_header"));
  };
  CastleConstructionItemsEmbedDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.dialogProperties.constructionItemVO;
    this.itxt_info = this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new a.LocalizedTextVO(i.isAppearanceItem ? i.isTemporary ? "dialog_ciAssign_tempCI_info" : "dialog_ciAssign_appearance_info" : "dialog_ciAssign_info"));
    this.itxt_info.textContentVO.textReplacements = [new a.LocalizedTextVO(i.nameTextId), i.level];
    var n = i.isAppearanceItem;
    this.dialogDisp.mc_embed.visible = !n;
    this.dialogDisp.mc_appearanceEmbed.visible = n;
    this.renderEmbedChart(n ? this.dialogDisp.mc_appearanceEmbed : this.dialogDisp.mc_embed);
  };
  CastleConstructionItemsEmbedDialog.prototype.renderEmbedChart = function (e) {
    var t = this.dialogProperties.buildingVO;
    var i = this.dialogProperties.constructionItemVO;
    this.renderConstructionItem(i, e.mc_item, false, e.mc_timer);
    this.renderBuilding(t, e.mc_current);
    if (i.isAppearanceItem) {
      this.renderBuilding(i.skinnedBuildingVO, e.mc_result);
    }
  };
  CastleConstructionItemsEmbedDialog.prototype.onClickAccept = function () {
    this.sendReplaceCommand(s.C2SConstructionItemModeEnum.ADD);
    this.hide();
  };
  CastleConstructionItemsEmbedDialog.NAME = "CastleConstructionItemsEmbed_Z";
  return CastleConstructionItemsEmbedDialog;
}(require("./768.js").AConstructionItemsActionDialog);
exports.CastleConstructionItemsEmbedDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");