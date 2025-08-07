Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./192.js");
var r = require("./90.js");
var l = require("./54.js");
var c = require("./4.js");
var u = function (e) {
  function CastleWorldmapCameraData() {
    var t = this;
    t._savedMapZoom = NaN;
    CONSTRUCTOR_HACK;
    t = e.call(this) || this;
    c.CastleModel.kingdomData.addEventListener(s.CastleKingdomEvent.KINGDOM_SWITCHED, t.bindFunction(t.onKingdomSwitched));
    return t;
  }
  n.__extends(CastleWorldmapCameraData, e);
  CastleWorldmapCameraData.prototype.reset = function () {
    this._currentSelectedCastleInActionPanel = null;
    this._lastVisitedCastlePosition = null;
    this._savedMapPosition = null;
    this._savedMapZoom = 0;
  };
  CastleWorldmapCameraData.prototype.onKingdomSwitched = function (e) {
    var t = a.int(c.CastleModel.kingdomData.activeKingdomID);
    var i = c.CastleModel.userData.castleList.getMainCastleByKingdomID(t);
    if (!this.currentSelectedCastleInActionPanel || this.currentSelectedCastleInActionPanel.kingdomID != t) {
      this.currentSelectedCastleInActionPanel = i;
    }
    if (i) {
      this.savedMapPosition = i.absAreaPos;
    }
  };
  CastleWorldmapCameraData.prototype.getInitialWorldMapPos = function () {
    var e;
    if (this._savedMapPosition) {
      e = this._savedMapPosition;
      this._savedMapPosition = null;
    } else {
      e = this._lastVisitedCastlePosition && this._lastVisitedCastlePosition.x > 0 && this._lastVisitedCastlePosition.y > 0 ? this._lastVisitedCastlePosition : c.CastleModel.userData.castleList.getMainCastleByKingdomID(c.CastleModel.kingdomData.activeKingdomID).absAreaPos;
    }
    return e;
  };
  CastleWorldmapCameraData.prototype.saveCameraPosition = function (e, t = -1) {
    this._savedMapPosition = e;
    if (t != -1) {
      this._savedMapZoom = t;
    }
  };
  Object.defineProperty(CastleWorldmapCameraData.prototype, "currentSelectedCastleInActionPanel", {
    get: function () {
      return this._currentSelectedCastleInActionPanel;
    },
    set: function (e) {
      if (e != this._currentSelectedCastleInActionPanel) {
        this._currentSelectedCastleInActionPanel = e;
        this.dispatchEvent(new r.CastleWorldmapEvent(r.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED));
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapCameraData.prototype, "lastVisitedCastlePosition", {
    set: function (e) {
      this._lastVisitedCastlePosition = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapCameraData.prototype, "savedMapPosition", {
    set: function (e) {
      this._savedMapPosition = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapCameraData.prototype, "savedMapZoom", {
    get: function () {
      if (this._savedMapZoom) {
        return this._savedMapZoom;
      } else {
        return 1;
      }
    },
    set: function (e) {
      this._savedMapZoom = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleWorldmapCameraData;
}(l.CastleBasicData);
exports.CastleWorldmapCameraData = u;
o.classImplementsInterfaces(u, "IUpdatable");