Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./4.js");
var s = require("./1331.js");
var r = require("./4147.js");
var l = require("./4151.js");
var c = function (e) {
  function CastleSeasonMapRenderer() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleSeasonMapRenderer, e);
  Object.defineProperty(CastleSeasonMapRenderer.prototype, "mapItemCreator", {
    get: function () {
      if (a.CastleModel.specialEventData.isEventActive(o.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD)) {
        return new h.CastleUnderworldSeasonMapItemCreator();
      } else if (a.CastleModel.specialEventData.isEventActive(o.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN)) {
        return new u.CastleSeaQueenSeasonMapItemCreator();
      } else {
        return new d.CastleSeasonMapItemCreator();
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleBaseTreasureMapRenderer.prototype, "mapItemCreator").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonMapRenderer.prototype, "movementCreator", {
    get: function () {
      return new p.CastleSeasonMovementCreator();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleBaseTreasureMapRenderer.prototype, "movementCreator").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonMapRenderer.prototype, "treasureMapVO", {
    get: function () {
      if (a.CastleModel.specialEventData.activeSeasonVO) {
        return a.CastleModel.specialEventData.activeSeasonVO.treasureMapVO;
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleBaseTreasureMapRenderer.prototype, "treasureMapVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonMapRenderer.prototype, "routeManager", {
    get: function () {
      return new l.SeaQueenMapRouteManager();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleBaseTreasureMapRenderer.prototype, "routeManager").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonMapRenderer.prototype, "treasureUpdateComponents", {
    get: function () {
      return [new r.CastleSeasonAppearanceItemComponent()];
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonMapRenderer.prototype.setMapItemsActivity = function () {
    if (this._mapItems != null) {
      for (var e = 0, t = this._mapItems; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var n = true;
          if (this._mapMovements != null) {
            for (var o = 0, a = this._mapMovements; o < a.length; o++) {
              var s = a[o];
              if (s !== undefined && s.target == i.tMapNodeVO.pos && s.movementVO) {
                n = false;
              }
            }
          }
          i.isActive = n;
        }
      }
    }
  };
  return CastleSeasonMapRenderer;
}(s.CastleBaseTreasureMapRenderer);
exports.CastleSeasonMapRenderer = c;
var u = require("./4152.js");
var d = require("./1133.js");
var p = require("./4156.js");
var h = require("./4157.js");