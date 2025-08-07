Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./39.js");
var p = require("./24.js");
var h = require("./921.js");
var g = function (e) {
  function CastleAwardWithRewardDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAwardWithRewardDialog.NAME) || this;
  }
  n.__extends(CastleAwardWithRewardDialog, e);
  CastleAwardWithRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_vote]);
    this.dialogDisp.btn_vote.visible = h.CastleForumHelper.isForumVisible();
    h.CastleForumHelper.assignForumButtonTooltip(this.dialogDisp.btn_vote);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO("dialog_EGAevent_message_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new c.LocalizedTextVO("dialog_EGAevent_message"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_vote.txt_label, new c.LocalizedTextVO("panel_option_forum"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new c.LocalizedTextVO("dialog_EGAevent_price1"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward_value, new u.TextVO("500"));
    this.dialogDisp.mc_deco.gotoAndStop(1);
    this.dialogDisp.mc_ruby.toolTipText = d.ClientConstTextIds.C2;
    this.dialogDisp.mc_awardHolder.addChild(new p.CastleGoodgameExternalClip("EGAAward", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl("EGAAward"), null, 1, false, l.getDefinitionByName("LoadingAnimation")));
  };
  CastleAwardWithRewardDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.btn_close) {
      this.hide();
    } else if (t.target == this.dialogDisp.btn_vote) {
      s.CommandController.instance.executeCommand(o.BasicController.COMMAND_OPEN_FORUM);
    }
  };
  CastleAwardWithRewardDialog.__initialize_static_members = function () {
    CastleAwardWithRewardDialog.NAME = "CastleAwardWithRewardMessageEx";
  };
  return CastleAwardWithRewardDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAwardWithRewardDialog = g;
r.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();