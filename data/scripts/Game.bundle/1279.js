Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./233.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./4.js");
var d = require("./52.js");
var p = require("./42.js");
var h = require("./8.js");
var g = require("./908.js");
var C = function (e) {
  function CastleReplaceSocketDialog() {
    return e.call(this, CastleReplaceSocketDialog.NAME) || this;
  }
  n.__extends(CastleReplaceSocketDialog, e);
  CastleReplaceSocketDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    h.ButtonHelper.initBasicButton(this.dialogDisp.btn_extract);
    this.dialogDisp.mc_gem2.mouseChildren = false;
    this.dialogDisp.mc_eq.mouseChildren = false;
  };
  CastleReplaceSocketDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.controller.addEventListener(r.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onGemInventoryChanged));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_gem2, new a.TextVO(this.dialogProperties.oldGemVO.nameString)).verticalAlign = p.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.btn_extract.txt_label, new s.LocalizedTextVO("dialog_gems_replaceGems_extractAndInsert")).verticalAlign = p.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO("dialog_gems_replaceGems_text", [this.dialogProperties.gemVO.nameString, this.dialogProperties.eqVO.nameString, this.dialogProperties.oldGemVO.nameString]));
    this.updateOkButton();
  };
  CastleReplaceSocketDialog.prototype.hide = function () {
    this.controller.removeEventListener(r.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onGemInventoryChanged));
    e.prototype.hide.call(this);
  };
  CastleReplaceSocketDialog.prototype.updateOkButton = function () {
    var e = u.CastleModel.gemData.inventorySpace < 0;
    h.ButtonHelper.enableButton(this.dialogDisp.btn_extract, !e);
    this.dialogDisp.btn_extract.toolTipText = e ? "allyforge_tooltip_inventoryFull_gems" : null;
  };
  CastleReplaceSocketDialog.prototype.updateCosts = function () {
    e.prototype.updateCosts.call(this);
    var t = this.getRemovalCosts();
    f.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new l.CollectableRenderClips(this.dialogDisp.mc_cost2), t, new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_COST_LIST, g.ACastleSocketDialog.COST_ICON_DIMENSION));
    if (t.amount <= 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.txt_text, new s.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_chooseCastle_forFree")).autoFitToBounds = true;
    }
  };
  CastleReplaceSocketDialog.prototype.renderIcons = function () {
    e.prototype.renderIcons.call(this);
    this.dialogDisp.mc_gem2.equipmentVO = this.dialogProperties.oldGemVO;
    this.dialogDisp.mc_gem2.addChild(O.CastleGemRenderer.renderAssetBroken(this.dialogProperties.oldGemVO));
  };
  CastleReplaceSocketDialog.prototype.sendBindGem = function (e) {
    u.CastleModel.gemData.bindGem(this.dialogProperties.gemVO, this.dialogProperties.eqVO, this.dialogProperties.lordID, e);
  };
  CastleReplaceSocketDialog.prototype.getRemovalCosts = function () {
    if (E.instanceOfClass(this.dialogProperties.gemVO, "CastleGemVO")) {
      return m.CollectableHelper.createVO(_.CollectableEnum.C2, this.dialogProperties.oldGemVO.levelInfos.removalCostC2);
    } else {
      return m.CollectableHelper.createVO(_.CollectableEnum.GENERIC_CURRENCY, y.RelicItemConst.EXTRACT_RELIC_GEM_RELIC_FRAGMENT_COST, d.ClientConstCurrency.ID_RELIC_FRAGMENTS);
    }
  };
  CastleReplaceSocketDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_extract:
          this.onExtractButtonClicked();
      }
    }
  };
  CastleReplaceSocketDialog.prototype.onExtractButtonClicked = function () {
    if (this.checkAndShowNotEnoughCurrencyMessage(this.getRemovalCosts())) {
      this.sendBindGem(true);
      if (this.dialogProperties.onConfirm) {
        this.dialogProperties.onConfirm();
      }
      this.hide();
    }
  };
  CastleReplaceSocketDialog.prototype.onGemInventoryChanged = function (e) {
    this.updateOkButton();
  };
  CastleReplaceSocketDialog.prototype.onValidConfirmClicked = function () {
    this.sendBindGem(false);
  };
  CastleReplaceSocketDialog.NAME = "CastleReplaceSocket";
  return CastleReplaceSocketDialog;
}(g.ACastleSocketDialog);
exports.CastleReplaceSocketDialog = C;
var _ = require("./12.js");
var m = require("./45.js");
var f = require("./25.js");
var O = require("./248.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");
var E = require("./1.js");
var y = require("./5.js");