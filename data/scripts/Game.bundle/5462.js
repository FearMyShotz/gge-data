Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleWeeklyHighscoreRewardReadyMessage() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleWeeklyHighscoreRewardReadyMessage.NAME) || this;
  }
  n.__extends(CastleWeeklyHighscoreRewardReadyMessage, e);
  CastleWeeklyHighscoreRewardReadyMessage.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_rankreward_message_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_rankreward_message_copy"));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_rank]);
    this.dialogDisp.btn_rank.toolTipText = "dialog_rankreward_title";
  };
  CastleWeeklyHighscoreRewardReadyMessage.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_rank:
        r.CastleDialogHandler.getInstance().registerDefaultDialogs(l.CastleWeeklyHighscoreRewardDialog);
    }
  };
  CastleWeeklyHighscoreRewardReadyMessage.__initialize_static_members = function () {
    CastleWeeklyHighscoreRewardReadyMessage.NAME = "CastleWeeklyHighscoreRewardReady";
  };
  return CastleWeeklyHighscoreRewardReadyMessage;
}(require("./11.js").CastleExternalDialog);
exports.CastleWeeklyHighscoreRewardReadyMessage = s;
var r = require("./9.js");
var l = require("./1384.js");
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();