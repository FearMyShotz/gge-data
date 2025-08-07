Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./2419.js");
var r = require("./2420.js");
var l = require("./4.js");
var c = function (e) {
  function CastleForumDeleteDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleForumDeleteDialog.NAME) || this;
  }
  n.__extends(CastleForumDeleteDialog, e);
  CastleForumDeleteDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel]);
  };
  CastleForumDeleteDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    var i = "";
    var n = "";
    switch (this.dialogProperties.dialogType) {
      case CastleForumDeleteDialog.TYPE_TOPIC:
        i = "dialog_alliance_communication_eraseTopic_header";
        n = "dialog_alliance_communication_eraseTopic_text";
        break;
      case CastleForumDeleteDialog.TYPE_POST:
        i = "dialog_alliance_communication_eraseAnswer_header";
        n = "dialog_alliance_communication_eraseAnswer_text";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO(i));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new a.LocalizedTextVO(n));
  };
  CastleForumDeleteDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        if (this.dialogProperties.dialogType == CastleForumDeleteDialog.TYPE_TOPIC) {
          l.CastleModel.smartfoxClient.sendCommandVO(new r.C2SAllianceTopicDeleteVO(this.dialogProperties.topicId));
        } else if (this.dialogProperties.dialogType == CastleForumDeleteDialog.TYPE_POST) {
          l.CastleModel.smartfoxClient.sendCommandVO(new s.C2SAllianceDeleteTopicAnswerVO(this.dialogProperties.topicId, this.dialogProperties.postId));
        }
      case this.dialogDisp.btn_cancel:
        this.hide();
    }
  };
  Object.defineProperty(CastleForumDeleteDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumDeleteDialog.__initialize_static_members = function () {
    CastleForumDeleteDialog.NAME = "CastleForumDeleteTopicEx";
    CastleForumDeleteDialog.TYPE_TOPIC = "typeTopic";
    CastleForumDeleteDialog.TYPE_POST = "typePost";
  };
  return CastleForumDeleteDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleForumDeleteDialog = c;
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();