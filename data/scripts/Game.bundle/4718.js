Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./67.js");
var r = require("./19.js");
var l = function (e) {
  function CastleAllianceGiftCollectedDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceGiftCollectedDialog.NAME) || this;
  }
  n.__extends(CastleAllianceGiftCollectedDialog, e);
  CastleAllianceGiftCollectedDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
  };
  CastleAllianceGiftCollectedDialog.prototype.setToolTips = function () {
    e.prototype.setToolTips.call(this);
  };
  CastleAllianceGiftCollectedDialog.prototype.setCopyTexts = function () {
    e.prototype.setCopyTexts.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new a.LocalizedTextVO("reward"));
  };
  CastleAllianceGiftCollectedDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateRewards();
  };
  CastleAllianceGiftCollectedDialog.prototype.updateRewards = function () {
    c.CollectableRenderHelper.displayMultipleItemsComplete(this, new s.CollectableRenderClipsList(this.dialogDisp, "reward_").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.dialogProperties.rewards, new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_ADVANCED));
  };
  CastleAllianceGiftCollectedDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleAllianceGiftCollectedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceGiftCollectedDialog.__initialize_static_members = function () {
    CastleAllianceGiftCollectedDialog.NAME = "CastleAllianceGiftCollect";
  };
  return CastleAllianceGiftCollectedDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAllianceGiftCollectedDialog = l;
var c = require("./25.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();