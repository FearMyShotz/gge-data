Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./39.js");
var u = require("./24.js");
var d = function (e) {
  function CastleAwardWithRewardWinDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAwardWithRewardWinDialog.NAME) || this;
  }
  n.__extends(CastleAwardWithRewardWinDialog, e);
  CastleAwardWithRewardWinDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this.dialogDisp.mc_deco.gotoAndStop(2);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_EGAevent_message_won"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_EGAevent_message_won_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward_value, new r.LocalizedNumberVO(200));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new l.LocalizedTextVO("dialog_EGAevent_price1"));
    this.dialogDisp.mc_ruby.toolTipText = c.ClientConstTextIds.C2;
    this.dialogDisp.mc_awardHolder.addChild(new u.CastleGoodgameExternalClip("CastleWelcomeNewsEGA14", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleWelcomeNewsEGA14"), null, 1, false, s.getDefinitionByName("LoadingAnimation")));
  };
  CastleAwardWithRewardWinDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.btn_close) {
      this.hide();
    }
  };
  CastleAwardWithRewardWinDialog.__initialize_static_members = function () {
    CastleAwardWithRewardWinDialog.NAME = "CastleAwardWithRewardWinEx";
  };
  return CastleAwardWithRewardWinDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAwardWithRewardWinDialog = d;
a.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();