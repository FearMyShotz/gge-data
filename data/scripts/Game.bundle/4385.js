Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./39.js");
var u = function (e) {
  function CastleAwardVotingEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAwardVotingEventDialog.NAME) || this;
  }
  n.__extends(CastleAwardVotingEventDialog, e);
  CastleAwardVotingEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_vote, this.dialogDisp.btn_close]);
    this.dialogDisp.btn_vote.gotoAndStop(2);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_vote.txt_label, new r.LocalizedTextVO("dialog_award_button"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_EGAevent_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_messageBubble, new r.LocalizedTextVO("dialog_EGAevent_bubble"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward_left_copy, new r.LocalizedTextVO("dialog_EGAevent_price1"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward_left_value, new l.TextVO("200"));
    this.dialogDisp.mc_ruby1.toolTipText = c.ClientConstTextIds.C2;
  };
  CastleAwardVotingEventDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.btn_vote) {
      var i = new o.URLRequest("http://european-games-award.com/voting");
      s.navigateToURL(i, "_blank");
    }
    if (t.target == this.dialogDisp.btn_close) {
      this.hide();
    }
  };
  CastleAwardVotingEventDialog.__initialize_static_members = function () {
    CastleAwardVotingEventDialog.NAME = "CastleAwardVotingEventExternal";
  };
  return CastleAwardVotingEventDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAwardVotingEventDialog = u;
a.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();