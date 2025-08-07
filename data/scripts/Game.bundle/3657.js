Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./67.js");
var r = require("./19.js");
var l = require("./11.js");
var c = createjs.Point;
var u = function (e) {
  function CastlePrivateOfferTimeChallengeFinishDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePrivateOfferTimeChallengeFinishDialog.NAME) || this;
  }
  n.__extends(CastlePrivateOfferTimeChallengeFinishDialog, e);
  CastlePrivateOfferTimeChallengeFinishDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("quest_finished"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_itemTitle, new a.LocalizedTextVO("reward"));
  };
  CastlePrivateOfferTimeChallengeFinishDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new a.LocalizedTextVO("dialog_timeOffer_done"));
    this.updateRewards();
  };
  CastlePrivateOfferTimeChallengeFinishDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastlePrivateOfferTimeChallengeFinishDialog.prototype.updateRewards = function () {
    p.CollectableRenderHelper.displayMultipleItemsComplete(this, new s.CollectableRenderClipsList(this.dialogDisp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.dialogProperties.offerVO.getTotalRewardListFromOfferVO(), new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_TIME_CHALLENGE, new c(h.CastlePrivateOfferTimeChallengeDialog.ICON_WIDTH, h.CastlePrivateOfferTimeChallengeDialog.ICON_HEIGHT)), function preRenderFunc(e) {
      if (e.itemVO && e.itemVO.itemType == d.CollectableEnum.VIP_TIME) {
        e.getRenderer(r.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = 7;
      }
    });
  };
  Object.defineProperty(CastlePrivateOfferTimeChallengeFinishDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferTimeChallengeFinishDialog.__initialize_static_members = function () {
    CastlePrivateOfferTimeChallengeFinishDialog.NAME = "CastlePrivateOfferTimeChallengeFinish";
    CastlePrivateOfferTimeChallengeFinishDialog.SHOWN_REWARD_ITEM_COUNT = 13;
  };
  return CastlePrivateOfferTimeChallengeFinishDialog;
}(l.CastleExternalDialog);
exports.CastlePrivateOfferTimeChallengeFinishDialog = u;
var d = require("./12.js");
var p = require("./25.js");
var h = require("./1085.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();