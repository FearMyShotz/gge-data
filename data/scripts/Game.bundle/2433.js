Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./203.js");
var s = require("./950.js");
var r = function (e) {
  function AllianceBookmarkFreeAttackRenderer() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(AllianceBookmarkFreeAttackRenderer, e);
  Object.defineProperty(AllianceBookmarkFreeAttackRenderer.prototype, "bookmarkTypeTextID", {
    get: function () {
      return "Bookmarks_worldmap_alliance_freeTarget_tooltip";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAllianceBookmarkRenderer.prototype, "bookmarkTypeTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBookmarkFreeAttackRenderer.prototype, "isAdditionalDetailsVisible", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAllianceBookmarkRenderer.prototype, "isAdditionalDetailsVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBookmarkFreeAttackRenderer.prototype, "backgroundFrame", {
    get: function () {
      return 1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAllianceBookmarkRenderer.prototype, "backgroundFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBookmarkFreeAttackRenderer.prototype, "bookmarkTypeIconFrame", {
    get: function () {
      return 1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAllianceBookmarkRenderer.prototype, "bookmarkTypeIconFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AllianceBookmarkFreeAttackRenderer.prototype.getSublayer = function (e) {
    return e.sublayer_defaultInfo;
  };
  AllianceBookmarkFreeAttackRenderer.prototype.showSublayer = function (e) {
    e.sublayer_attackOrderInfo.visible = false;
    e.sublayer_defaultInfo.visible = true;
  };
  AllianceBookmarkFreeAttackRenderer.__initialize_static_members = function () {
    AllianceBookmarkFreeAttackRenderer.ID = o.int(a.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK.typeIndex);
  };
  return AllianceBookmarkFreeAttackRenderer;
}(s.AAllianceBookmarkRenderer);
exports.AllianceBookmarkFreeAttackRenderer = r;
r.__initialize_static_members();