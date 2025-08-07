Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./4.js");
var l = require("./488.js");
var c = createjs.Rectangle;
var u = function (e) {
  function IsoViewSettings() {
    var t = this;
    t._scrollBounds = new c();
    t._minScrollBounds = new c();
    t._isDebugCrossVisible = false;
    t._isDebugPosVisible = false;
    t._isZSortChildIndexVisible = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoViewSettings, e);
  IsoViewSettings.prototype.setup = function () {
    e.prototype.setup.call(this);
    this._scrollBounds = this.createScrollBounds();
  };
  IsoViewSettings.prototype.createScrollBounds = function () {
    var e = this.isoRenderer.isoData.areaData;
    var t = new c();
    if (r.CastleModel.userData.level < 10) {
      t.bottom = 1200;
    } else {
      t.bottom = 1800;
    }
    t.left = -1000;
    t.right = 1000;
    t.top = -1400;
    this.minScrollBounds.right = 2000;
    if (e.areaInfo.kingdomID == s.WorldIsland.KINGDOM_ID) {
      t.top = -1300;
      t.bottom = 1800;
    } else if (e.isKingdomCastle) {
      t.top = -1800;
      t.left = -1650;
    } else if (e.isTreasureCamp && r.CastleModel.specialEventData.activeSeasonVO.eventId == a.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN) {
      t.bottom = 1750;
    }
    return t;
  };
  Object.defineProperty(IsoViewSettings.prototype, "scrollBounds", {
    get: function () {
      return this._scrollBounds;
    },
    set: function (e) {
      this._scrollBounds = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewSettings.prototype, "isDebugCrossVisible", {
    get: function () {
      return this._isDebugCrossVisible;
    },
    set: function (e) {
      this._isDebugCrossVisible = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewSettings.prototype, "isDebugPosVisible", {
    get: function () {
      return this._isDebugPosVisible;
    },
    set: function (e) {
      this._isDebugPosVisible = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewSettings.prototype, "minScrollBounds", {
    get: function () {
      return this._minScrollBounds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewSettings.prototype, "isZSortChildIndexVisible", {
    get: function () {
      return this._isZSortChildIndexVisible;
    },
    set: function (e) {
      this._isZSortChildIndexVisible = e;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewSettings;
}(l.AIsoViewComponent);
exports.IsoViewSettings = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");