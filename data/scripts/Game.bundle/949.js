Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function AAllianceBookmarkRenderer() {}
  AAllianceBookmarkRenderer.prototype.render = function (e, t) {
    l.MovieClipHelper.clearMovieClip(e.mc_placeHolder);
    var i = a.WorldmapObjectIconHelper.drawMapObjectIcon(t.worldmapObjectVO, AAllianceBookmarkRenderer.WMO_ICON_SIZE, true, false, false);
    e.mc_placeHolder.addChild(i);
    e.bg.gotoAndStop(this.backgroundFrame);
    this.showSublayer(e);
    var n = this.getSublayer(e);
    this.textFieldManager.registerTextField(n.txt_name, new u.TextVO(c.TextValide.parseChatJSONMessage(t.name)));
    n.mc_bookmarkType.gotoAndStop(this.bookmarkTypeIconFrame);
    n.mc_bookmarkType.mouseChildren = false;
    n.mc_bookmarkType.toolTipText = this.bookmarkTypeTextID;
    this.renderAdditionalInfos(n, t);
  };
  AAllianceBookmarkRenderer.prototype.showSublayer = function (e) {
    throw new s.AbstractMethodError();
  };
  Object.defineProperty(AAllianceBookmarkRenderer.prototype, "bookmarkTypeTextID", {
    get: function () {
      throw new s.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceBookmarkRenderer.prototype, "isAdditionalDetailsVisible", {
    get: function () {
      throw new s.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AAllianceBookmarkRenderer.prototype.renderAdditionalInfos = function (e, t) {};
  Object.defineProperty(AAllianceBookmarkRenderer.prototype, "backgroundFrame", {
    get: function () {
      throw new s.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceBookmarkRenderer.prototype, "bookmarkTypeIconFrame", {
    get: function () {
      throw new s.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceBookmarkRenderer.prototype, "textFieldManager", {
    get: function () {
      return r.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AAllianceBookmarkRenderer.prototype.getSublayer = function (e) {
    throw new s.AbstractMethodError();
  };
  AAllianceBookmarkRenderer.__initialize_static_members = function () {
    AAllianceBookmarkRenderer.WMO_ICON_SIZE = new n(100, 100);
  };
  return AAllianceBookmarkRenderer;
}();
exports.AAllianceBookmarkRenderer = o;
var a = require("./70.js");
var s = require("./69.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./3.js");
o.__initialize_static_members();