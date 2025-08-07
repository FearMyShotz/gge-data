Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./4.js");
var a = require("./1331.js");
var s = require("./2358.js");
var r = function (e) {
  function CastleTreasureMapRenderer() {
    return e.call(this) || this;
  }
  n.__extends(CastleTreasureMapRenderer, e);
  Object.defineProperty(CastleTreasureMapRenderer.prototype, "movementCreator", {
    get: function () {
      return new u.CastleTreasureMovementCreator();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleBaseTreasureMapRenderer.prototype, "movementCreator").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapRenderer.prototype, "mapItemCreator", {
    get: function () {
      return new c.CastleTreasureMapItemCreator();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleBaseTreasureMapRenderer.prototype, "mapItemCreator").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapRenderer.prototype, "routeManager", {
    get: function () {
      return new s.CastleTreasureMapRouteManager();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleBaseTreasureMapRenderer.prototype, "routeManager").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapRenderer.prototype, "treasureMapVO", {
    get: function () {
      return o.CastleModel.treasureHuntData.treasureHuntMapVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleBaseTreasureMapRenderer.prototype, "treasureMapVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapRenderer.prototype, "treasureUpdateComponents", {
    get: function () {
      return [new l.CastleTreasureMapHintComponent()];
    },
    enumerable: true,
    configurable: true
  });
  return CastleTreasureMapRenderer;
}(a.CastleBaseTreasureMapRenderer);
exports.CastleTreasureMapRenderer = r;
var l = require("./2359.js");
var c = require("./2361.js");
var u = require("./2368.js");