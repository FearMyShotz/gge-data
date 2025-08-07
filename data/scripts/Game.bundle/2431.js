Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./203.js");
var u = require("./950.js");
var d = function (e) {
  function AllianceBookmarkAttackOrderRenderer() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(AllianceBookmarkAttackOrderRenderer, e);
  Object.defineProperty(AllianceBookmarkAttackOrderRenderer.prototype, "bookmarkTypeTextID", {
    get: function () {
      return "Bookmarks_worldmap_alliance_plannedTarget_2_tooltip";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AAllianceBookmarkRenderer.prototype, "bookmarkTypeTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBookmarkAttackOrderRenderer.prototype, "isAdditionalDetailsVisible", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AAllianceBookmarkRenderer.prototype, "isAdditionalDetailsVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBookmarkAttackOrderRenderer.prototype, "backgroundFrame", {
    get: function () {
      return 3;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AAllianceBookmarkRenderer.prototype, "backgroundFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBookmarkAttackOrderRenderer.prototype, "bookmarkTypeIconFrame", {
    get: function () {
      return 3;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AAllianceBookmarkRenderer.prototype, "bookmarkTypeIconFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AllianceBookmarkAttackOrderRenderer.prototype.renderAdditionalInfos = function (e, t) {
    var i = t.attackOrderDetails;
    var n = i.attackDate;
    var l = new r.TextVO(a.Localize.datetime(n, o.DateTimeStyle.SHORT, o.DateTimeStyle.NONE));
    this.textFieldManager.registerTextField(e.txt_date, l);
    var c = new r.TextVO(a.Localize.datetime(n, o.DateTimeStyle.NONE, o.DateTimeStyle.SHORT));
    this.textFieldManager.registerTextField(e.txt_time, c);
    var u = i.assignedAttackers.length > 1 ? "dialog_alliance_bookmarks_attackerAmount" : "dialog_alliance_bookmarks_attackerAmount_singular";
    this.textFieldManager.registerTextField(e.mc_participants.txt_memberCount, new s.LocalizedTextVO(u, [i.assignedAttackers.length]));
    e.mc_participants.actLikeButton = true;
    e.mc_participants.mouseChildren = false;
    e.mc_participants.toolTipText = "dialog_alliance_bookmarks_attackerList_tooltip";
  };
  AllianceBookmarkAttackOrderRenderer.prototype.getSublayer = function (e) {
    return e.sublayer_attackOrderInfo;
  };
  AllianceBookmarkAttackOrderRenderer.prototype.showSublayer = function (e) {
    e.sublayer_attackOrderInfo.visible = true;
    e.sublayer_defaultInfo.visible = false;
  };
  AllianceBookmarkAttackOrderRenderer.__initialize_static_members = function () {
    AllianceBookmarkAttackOrderRenderer.ID = l.int(c.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER.typeIndex);
  };
  return AllianceBookmarkAttackOrderRenderer;
}(u.AAllianceBookmarkRenderer);
exports.AllianceBookmarkAttackOrderRenderer = d;
d.__initialize_static_members();