Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./203.js");
var s = require("./949.js");
var r = function (e) {
  function AllianceBookmarkDefendRenderer() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(AllianceBookmarkDefendRenderer, e);
  Object.defineProperty(AllianceBookmarkDefendRenderer.prototype, "bookmarkTypeTextID", {
    get: function () {
      return "Bookmarks_worldmap_alliance_supportTarget_tooltip";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAllianceBookmarkRenderer.prototype, "bookmarkTypeTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBookmarkDefendRenderer.prototype, "isAdditionalDetailsVisible", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAllianceBookmarkRenderer.prototype, "isAdditionalDetailsVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBookmarkDefendRenderer.prototype, "backgroundFrame", {
    get: function () {
      return 2;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAllianceBookmarkRenderer.prototype, "backgroundFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBookmarkDefendRenderer.prototype, "bookmarkTypeIconFrame", {
    get: function () {
      return 2;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAllianceBookmarkRenderer.prototype, "bookmarkTypeIconFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AllianceBookmarkDefendRenderer.prototype.showSublayer = function (e) {
    e.sublayer_attackOrderInfo.visible = false;
    e.sublayer_defaultInfo.visible = true;
  };
  AllianceBookmarkDefendRenderer.prototype.getSublayer = function (e) {
    return e.sublayer_defaultInfo;
  };
  AllianceBookmarkDefendRenderer.__initialize_static_members = function () {
    AllianceBookmarkDefendRenderer.ID = o.int(a.EWorldmapBookmarkType.ALLIANCE_DEFEND.typeIndex);
  };
  return AllianceBookmarkDefendRenderer;
}(s.AAllianceBookmarkRenderer);
exports.AllianceBookmarkDefendRenderer = r;
r.__initialize_static_members();