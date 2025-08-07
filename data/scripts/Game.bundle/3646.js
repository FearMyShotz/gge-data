Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./39.js");
var c = require("./67.js");
var u = require("./19.js");
var d = require("./4.js");
var p = require("./8.js");
var h = function (e) {
  function CastleTreasureChestDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleTreasureChestDialog.NAME) || this;
  }
  n.__extends(CastleTreasureChestDialog, e);
  CastleTreasureChestDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_treasurechest_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO("dialog_treasurechest_desc"));
    this.itxt_costs = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new a.LocalizedNumberVO(0));
  };
  CastleTreasureChestDialog.prototype.setToolTips = function () {
    this.dialogDisp.mc_costs.toolTipText = {
      t: "generic_amount_reward",
      p: [new a.LocalizedNumberVO(this.dialogProperties.offerVO.getCostsForOfferAcception().getAmountOrDefaultByType(g.CollectableEnum.C2)), l.ClientConstTextIds.C2]
    };
    this.dialogDisp.mc_costs.mouseChildren = false;
  };
  CastleTreasureChestDialog.prototype.applyPropertiesLoaded = function (e = null) {
    var t = r.int(this.dialogProperties.offerVO.getCostsForOfferAcception().getAmountOrDefaultByType(g.CollectableEnum.C2));
    this.itxt_costs.textContentVO.numberValue = t;
    this.updateRewards();
  };
  CastleTreasureChestDialog.prototype.updateRewards = function () {
    C.CollectableRenderHelper.displayMultipleItemsComplete(this, new c.CollectableRenderClipsList(this.dialogDisp, "mc_rewardItem"), this.getRewardList(), new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_ADVANCED), function preRenderFunc(e) {
      e.clips.itemMc.mc_loading.visible = false;
    });
  };
  CastleTreasureChestDialog.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_ok:
          d.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id);
          this.hide();
          break;
        case this.dialogDisp.btn_cancel:
          this.hide();
      }
    }
  };
  CastleTreasureChestDialog.prototype.getRewardList = function () {
    return this.dialogProperties.offerVO.getTotalRewardListFromOfferVO();
  };
  Object.defineProperty(CastleTreasureChestDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureChestDialog.__initialize_static_members = function () {
    CastleTreasureChestDialog.NAME = "CastleTreasureChest";
  };
  return CastleTreasureChestDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleTreasureChestDialog = h;
var g = require("./12.js");
var C = require("./25.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();