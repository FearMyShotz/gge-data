Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./233.js");
var r = require("./4.js");
var l = require("./52.js");
var c = require("./8.js");
var u = require("./907.js");
var d = function (e) {
  function CastleExtractSocketDialog() {
    return e.call(this, CastleExtractSocketDialog.NAME) || this;
  }
  n.__extends(CastleExtractSocketDialog, e);
  CastleExtractSocketDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.controller.addEventListener(s.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onGemInventoryChanged));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new a.LocalizedTextVO("dialog_gemExtract_info", [this.dialogProperties.gemVO.nameString, this.dialogProperties.eqVO.nameString]));
    this.updateOkButton();
  };
  CastleExtractSocketDialog.prototype.hide = function () {
    this.controller.removeEventListener(s.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onGemInventoryChanged));
    e.prototype.hide.call(this);
  };
  CastleExtractSocketDialog.prototype.updateCosts = function () {
    e.prototype.updateCosts.call(this);
    if (this.getCosts().amount <= 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.txt_text, new a.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_chooseCastle_forFree")).autoFitToBounds = true;
    }
  };
  CastleExtractSocketDialog.prototype.updateOkButton = function () {
    c.ButtonHelper.enableButton(this.dialogDisp.btn_ok, !r.CastleModel.gemData.isInventoryFull);
    this.dialogDisp.btn_ok.toolTipText = r.CastleModel.gemData.isInventoryFull ? "allyforge_tooltip_inventoryFull_gems" : null;
  };
  Object.defineProperty(CastleExtractSocketDialog.prototype, "titleTextID", {
    get: function () {
      return "dialog_gemExtract_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ACastleSocketDialog.prototype, "titleTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleExtractSocketDialog.prototype.getCosts = function () {
    if (g.instanceOfClass(this.dialogProperties.gemVO, "CastleGemVO")) {
      return h.CollectableHelper.createVO(p.CollectableEnum.C2, this.dialogProperties.gemVO.levelInfos.removalCostC2);
    } else {
      return h.CollectableHelper.createVO(p.CollectableEnum.GENERIC_CURRENCY, C.RelicItemConst.EXTRACT_RELIC_GEM_RELIC_FRAGMENT_COST, l.ClientConstCurrency.ID_RELIC_FRAGMENTS);
    }
  };
  CastleExtractSocketDialog.prototype.onGemInventoryChanged = function (e) {
    this.updateOkButton();
  };
  CastleExtractSocketDialog.prototype.onValidConfirmClicked = function () {
    r.CastleModel.gemData.extractGem(this.dialogProperties.eqVO, this.dialogProperties.lordID);
  };
  CastleExtractSocketDialog.NAME = "CastleExtractSocket";
  return CastleExtractSocketDialog;
}(u.ACastleSocketDialog);
exports.CastleExtractSocketDialog = d;
var p = require("./12.js");
var h = require("./45.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");
var g = require("./1.js");
var C = require("./5.js");