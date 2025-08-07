Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./541.js");
var s = require("./128.js");
var r = require("./31.js");
var l = require("./19.js");
var c = require("./15.js");
var u = require("./20.js");
var d = require("./8.js");
var p = require("./25.js");
var h = require("./11.js");
var g = createjs.Point;
var C = function (e) {
  function CastleSkipCraftingDialog() {
    return e.call(this, CastleSkipCraftingDialog.NAME) || this;
  }
  n.__extends(CastleSkipCraftingDialog, e);
  CastleSkipCraftingDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new o.LocalizedTextVO("dialog_crafting_skipCrafting_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_info.txt_desc, new o.LocalizedTextVO("dialog_crafting_skipCrafting_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_cost, new o.LocalizedTextVO("cost")).autoFitToBounds = true;
    d.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], u.ClickFeedbackButtonHover);
  };
  CastleSkipCraftingDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.destroyCollectableRenderList();
    var i = this.dialogProperties.slotVO.recipeVO.output.list[0];
    var n = i.clone();
    n.amount = Math.floor(i.amount * (1 + this.dialogProperties.slotVO.boosterValue / 100));
    p.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new r.CollectableRenderClips(this.dialogDisp.mc_info.mc_reward).addInfoBtn(this.dialogDisp.mc_info.btn_info), n, new l.CollectableRenderOptions(l.CollectableRenderOptions.SET_BASIC, CastleSkipCraftingDialog.REWARD_ICON_SIZE));
    var o = new s.CollectableItemC2VO(this.dialogProperties.slotVO.getAdjustedSkipCostC2());
    var a = new l.CollectableRenderOptions(l.CollectableRenderOptions.SET_COST_LIST, CastleSkipCraftingDialog.COST_ICON_DIMENSION);
    a.tooltip.useAmount = false;
    p.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new r.CollectableRenderClips(this.dialogDisp.mc_cost), o, a);
    d.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true, 1000);
  };
  CastleSkipCraftingDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.hide();
          this.dialogProperties.slotVO.rubySkip();
      }
    }
  };
  CastleSkipCraftingDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    c.CastleBasicController.getInstance().dispatchEvent(new a.CraftingEvent(a.CraftingEvent.BRIEFLY_DISABLE_CRAFT_BUTTON));
  };
  Object.defineProperty(CastleSkipCraftingDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSkipCraftingDialog.NAME = "CraftingSkip";
  CastleSkipCraftingDialog.REWARD_ICON_SIZE = new g(136, 132);
  CastleSkipCraftingDialog.COST_ICON_DIMENSION = new g(42, 35);
  return CastleSkipCraftingDialog;
}(h.CastleExternalDialog);
exports.CastleSkipCraftingDialog = C;