Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./522.js");
var u = require("./1649.js");
var d = createjs.Point;
var p = function (e) {
  function CastleAttackOrderReceivedDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleAttackOrderReceivedDialog, e);
  Object.defineProperty(CastleAttackOrderReceivedDialog.prototype, "isMessageObsolete", {
    get: function () {
      return Object.getOwnPropertyDescriptor(u.CastleAttackOrderCanceledDialog.prototype, "isMessageObsolete").get.call(this) || !this.dialogProperties.bookmarkVO.attackOrderDetails;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleAttackOrderCanceledDialog.prototype, "isMessageObsolete").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackOrderReceivedDialog.prototype.initAttackOrderDetails = function () {
    var e = this.dialogDisp.mc_details;
    e.visible = true;
    var t = this.dialogProperties.bookmarkVO.attackOrderDetails;
    var i = t.attackDate;
    var n = new l.TextVO(s.Localize.datetime(i, a.DateTimeStyle.SHORT, a.DateTimeStyle.NONE));
    this.textFieldManager.registerTextField(e.txt_date, n);
    var o = new l.TextVO(s.Localize.datetime(i, a.DateTimeStyle.NONE, a.DateTimeStyle.SHORT));
    this.textFieldManager.registerTextField(e.txt_time, o);
    var c = t.assignedAttackers.length > 1 ? "dialog_alliance_bookmarks_attackerAmount" : "dialog_alliance_bookmarks_attackerAmount_singular";
    this.textFieldManager.registerTextField(e.mc_participants.txt_participants, new r.LocalizedTextVO(c, [t.assignedAttackers.length]));
    e.mc_participants.actLikeButton = true;
    e.mc_participants.mouseChildren = false;
    e.mc_participants.toolTipText = "dialog_alliance_bookmarks_attackerList_tooltip";
  };
  CastleAttackOrderReceivedDialog.prototype.getPosition = function () {
    return new d(this.dialogProperties.bookmarkVO.posX, this.dialogProperties.bookmarkVO.posY);
  };
  CastleAttackOrderReceivedDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.mc_details.mc_participants:
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleBookmarkShowAttackersDialog, new c.CastleBookmarkPasserProperties(this.dialogProperties.bookmarkVO));
    }
  };
  Object.defineProperty(CastleAttackOrderReceivedDialog.prototype, "copyTextId", {
    get: function () {
      return "dialog_alliance_bookmarks_attackMessage_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleAttackOrderCanceledDialog.prototype, "copyTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackOrderReceivedDialog.prototype, "titleTextId", {
    get: function () {
      return "dialog_alliance_bookmarks_attackMessage_header";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleAttackOrderCanceledDialog.prototype, "titleTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackOrderReceivedDialog.__initialize_static_members = function () {
    CastleAttackOrderReceivedDialog.NAME = "CastleAttackOrderReceivedDialog";
  };
  return CastleAttackOrderReceivedDialog;
}(u.CastleAttackOrderCanceledDialog);
exports.CastleAttackOrderReceivedDialog = p;
var h = require("./9.js");
var g = require("./1362.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();