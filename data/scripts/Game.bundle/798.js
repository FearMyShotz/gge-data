Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./67.js");
var c = require("./19.js");
var u = require("./8.js");
var d = function (e) {
  function CastleTreasureChestOpenDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleTreasureChestOpenDialog.NAME) || this;
  }
  n.__extends(CastleTreasureChestOpenDialog, e);
  CastleTreasureChestOpenDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_treasurechestOpen_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new r.LocalizedTextVO("dialog_treasurechestOpen_desc")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
  };
  CastleTreasureChestOpenDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this);
    this.updateRewards();
  };
  CastleTreasureChestOpenDialog.prototype.updateRewards = function () {
    p.CollectableRenderHelper.displayMultipleItemsComplete(this, new l.CollectableRenderClipsList(this.dialogDisp, "mc_rewardItem"), this.getRewardList(), new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_ADVANCED), function preRenderFunc(e) {
      e.clips.itemMc.mc_loading.visible = !e.itemVO;
    }, function afterRenderFunc(e) {
      e.setVisibility(true);
    });
  };
  CastleTreasureChestOpenDialog.prototype.onClick = function (t) {
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  CastleTreasureChestOpenDialog.prototype.getRewardList = function () {
    var e;
    if (s.instanceOfClass(this.properties, "CastlePrivateOfferDialogProperties")) {
      var t = this.properties.offerVO;
      if (t) {
        e = t.getTotalRewardListFromOfferVO();
      }
    } else if (s.instanceOfClass(this.properties, "CastleTreasureChestOpenDialogProperties")) {
      e = this.properties.rewardList;
    }
    return e;
  };
  CastleTreasureChestOpenDialog.__initialize_static_members = function () {
    CastleTreasureChestOpenDialog.NAME = "CastleTreasureChestOpen";
  };
  return CastleTreasureChestOpenDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleTreasureChestOpenDialog = d;
var p = require("./25.js");
a.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();