Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./4.js");
var d = require("./9.js");
var p = require("./11.js");
var h = require("./354.js");
var g = require("./435.js");
var C = function (e) {
  function CastleForumAdvertisementDialog() {
    return e.call(this, CastleForumAdvertisementDialog.NAME) || this;
  }
  n.__extends(CastleForumAdvertisementDialog, e);
  CastleForumAdvertisementDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_goToForum]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new c.LocalizedTextVO(CastleForumAdvertisementDialog.MESSAGE_TITLE));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new c.LocalizedTextVO("dialog_messageTip_body_15"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_goToForum.txt_value, new c.LocalizedTextVO("dialog_mailVerification_forum_title"));
  };
  CastleForumAdvertisementDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_goToForum:
        if (u.CastleModel.userData.email == l.PlayerConst.DEFAULT_MAIL && !a.EnvGlobalsHandler.globals.isOnSpecialServer) {
          d.CastleDialogHandler.getInstance().registerDefaultDialogs(h.OptionsDialog, new g.OptionsDialogProperties(h.OptionsDialog.TAB_ACCOUNT_DETAILS, true));
          return;
        }
        s.CommandController.instance.executeCommand(o.BasicController.COMMAND_OPEN_FORUM);
        this.finishForumAdvertisementMessages();
        this.hide();
    }
  };
  CastleForumAdvertisementDialog.prototype.finishForumAdvertisementMessages = function () {
    u.CastleModel.privateOfferData.sendOfferQuestAccept(this.dialogProperties.messageVO.offerID, 1);
  };
  Object.defineProperty(CastleForumAdvertisementDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumAdvertisementDialog.NAME = "CastleForumAdvertisement";
  CastleForumAdvertisementDialog.MESSAGE_TITLE = "dialog_messageTip_title_15";
  return CastleForumAdvertisementDialog;
}(p.CastleExternalDialog);
exports.CastleForumAdvertisementDialog = C;
r.classImplementsInterfaces(C, "ICollectableRendererList");