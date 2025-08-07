Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./2121.js");
var c = require("./2122.js");
var u = require("./702.js");
var d = require("./504.js");
var p = require("./54.js");
var h = require("./101.js");
var g = require("./4.js");
var C = createjs.Point;
var _ = function (e) {
  function CastleWorldmapData() {
    var t = this;
    t._allowGAARequests = false;
    CONSTRUCTOR_HACK;
    t = e.call(this) || this;
    g.CastleModel.bookmarkData.addEventListener(d.CastleBookmarkDataEvent.ON_LIST_CHANGED, t.bindFunction(t.updateAllBookmarks));
    t.bgTiles = new O.CastleWorldMapBackgroundTilesDirectory();
    t.areaTiles = new f.CastleWorldMapAreaTilesDirectory();
    t.requestExtraData();
    o.debug("[ATTENTION]: Worldmap is running in debug mode. Sector updates have been set to 5 seconds.");
    return t;
  }
  n.__extends(CastleWorldmapData, e);
  CastleWorldmapData.prototype.reset = function () {
    this.bgTiles = new O.CastleWorldMapBackgroundTilesDirectory();
    this.areaTiles.destroy();
    this.areaTiles = new f.CastleWorldMapAreaTilesDirectory();
    this._areasWithCoolDown = [];
    this._areasWithSpyTime = [];
    this._areasWithNoobProtection = [];
    this._areasWithPeaceProtection = [];
    this._areasWithBookmarks = [];
  };
  CastleWorldmapData.prototype.executeUpdate = function (e) {
    this.updateCoolDownAreas();
    this.updateWithNoobProtectionAreas();
    this.updateWithPeaceProtectionAreas();
    this.updateSpyTimeAreas();
  };
  CastleWorldmapData.prototype.updateCoolDownAreas = function () {
    this._areasWithCoolDown = CastleWorldmapData.checkTimedAreas(this._areasWithCoolDown, function (e) {
      return e.remainingCooldownTimeInSeconds <= 0;
    });
  };
  CastleWorldmapData.prototype.updateAllBookmarks = function (e) {
    var t = [];
    var i = new Map();
    var n = r.int(g.CastleModel.kingdomData.activeKingdomID);
    var o = g.CastleModel.bookmarkData.getWorldmapBookmarksByKingdomID(n);
    if (this._areasWithBookmarks && this._areasWithBookmarks != null) {
      for (var a = 0, s = this._areasWithBookmarks; a < s.length; a++) {
        var l = s[a];
        if (l !== undefined) {
          l.bookmark = null;
          i.set(l, true);
        }
      }
    }
    if (o != null) {
      for (var c = 0, u = o; c < u.length; c++) {
        var d;
        var p = u[c];
        if (p !== undefined) {
          if (this.areaTiles) {
            d = this.areaTiles.getVOForAreaByXY(p.posX, p.posY);
          }
          if (d) {
            if (!d.bookmark || p.priority > d.bookmark.priority) {
              d.bookmark = p;
            }
            i.set(d, true);
            t.push(d);
          }
        }
      }
    }
    if (i != null) {
      for (var C = 0, _ = Array.from(i.keys()); C < _.length; C++) {
        var m = _[C];
        if (m instanceof h.InteractiveMapobjectVO) {
          m.updateVE();
        }
      }
    }
    this._areasWithBookmarks = t;
  };
  CastleWorldmapData.prototype.updateSpyTimeAreas = function () {
    this._areasWithSpyTime = CastleWorldmapData.checkTimedAreas(this._areasWithSpyTime, function (e) {
      return e.remainingSpyInfoTime <= 0;
    });
  };
  CastleWorldmapData.prototype.updateWithNoobProtectionAreas = function () {
    this._areasWithNoobProtection = CastleWorldmapData.checkTimedAreas(this._areasWithNoobProtection, function (e) {
      return !e.ownerInfo || e.ownerInfo.remainingNoobTime <= 0;
    });
  };
  CastleWorldmapData.prototype.updateWithPeaceProtectionAreas = function () {
    this._areasWithPeaceProtection = CastleWorldmapData.checkTimedAreas(this._areasWithPeaceProtection, function (e) {
      return !e.ownerInfo || e.ownerInfo.remainingPeaceTime <= 0;
    });
  };
  CastleWorldmapData.checkTimedAreas = function (e, t) {
    if (e) {
      var i = false;
      for (var n = 0; n < e.length; n++) {
        if (t(e[n])) {
          e[n].updateVE();
          i = true;
        }
      }
      if (!i) {
        return e;
      }
      var o = [];
      for (var a = 0; a < e.length; a++) {
        if (!t(e[a])) {
          o.push(e[a]);
        }
      }
      if (e.length > 0) {
        return o;
      } else {
        return null;
      }
    }
    return null;
  };
  CastleWorldmapData.prototype.parseAreaInfos = function (e) {
    if (!e || !Array.isArray(e) || e.length == 0) {
      return [];
    }
    var t = [];
    var i = 0;
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var s = this.areaTiles.getVOForAreaByXY(a[1], a[2]);
          if (s instanceof y.EmptyMapobjectVO) {
            s = null;
          }
          var l = r.int(a[1]);
          var c = r.int(a[2]);
          if (a.length <= 0) {
            return [];
          }
          s = s ? s.castAsAreaTypeAndParse(a) : E.WorldmapObjectFactory.parseWorldMapArea(a);
          this.areaTiles.insertAreaVOByXY(s, l, c);
          if (s.remainingCooldownTimeInSeconds > 0) {
            this._areasWithCoolDown ||= [];
            this._areasWithCoolDown.push(s);
          }
          if (s.remainingSpyInfoTime > 0) {
            this._areasWithSpyTime ||= [];
            this._areasWithSpyTime.push(s);
          }
          if (s.ownerInfo && s.ownerInfo.remainingNoobTime > 0) {
            this._areasWithNoobProtection ||= [];
            this._areasWithNoobProtection.push(s);
          }
          if (s.ownerInfo && s.ownerInfo.remainingPeaceTime > 0) {
            this._areasWithPeaceProtection ||= [];
            this._areasWithPeaceProtection.push(s);
          }
          t[i++] = s.absAreaPos;
        }
      }
    }
    return t;
  };
  CastleWorldmapData.prototype.requestExtraData = function () {
    this._allowGAARequests = true;
    g.CastleModel.smartfoxClient.sendCommandVO(new u.C2SGetBookmarkList());
  };
  CastleWorldmapData.prototype.updateAreaRange = function (e, t, i, n) {
    if (i - e > 100) {
      i = e + 99;
    }
    if (n - t > 100) {
      n = t + 99;
    }
    if (!!this._allowGAARequests && (this.layoutManager.currentState == m.CastleLayoutManager.STATE_WORLDMAP || this.layoutManager.currentState == m.CastleLayoutManager.STATE_WORLDMAP_RELOCATION)) {
      if (g.CastleModel.kingdomData.willBecomeFaction != -1) {
        g.CastleModel.smartfoxClient.sendCommandVO(new l.C2SGetAreasVO(g.CastleModel.kingdomData.willBecomeFaction, e, t, i, n));
      } else {
        g.CastleModel.smartfoxClient.sendCommandVO(new l.C2SGetAreasVO(g.CastleModel.kingdomData.activeKingdomID, e, t, i, n));
      }
    }
  };
  Object.defineProperty(CastleWorldmapData.prototype, "allowGAARequests", {
    set: function (e) {
      this._allowGAARequests = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapData.prototype.searchPlayerByName = function (e) {
    g.CastleModel.smartfoxClient.sendCommandVO(new c.C2SSearchPlayerVO(e));
  };
  CastleWorldmapData.prototype.parseSearchInfos = function (e) {
    var t = new C(e.X, e.Y);
    this.layoutManager.worldmapScreen.camera.centerArea(t);
    var i = this.getAreaVEByXY(t, true);
    if (i) {
      i.showRingMenu();
    } else {
      var n = this.areaTiles.getVOForAreaByXY(t.x, t.y);
      if (n && n.ownerInfo && !n.ownerInfo.isOwnOwnerInfo) {
        this.layoutManager.worldmapScreen.delayOpenRingMenu(n);
      }
    }
  };
  CastleWorldmapData.prototype.getAreaVEByXY = function (e, t = false) {
    return this.layoutManager.worldmapScreen.renderer.getVEforAreaXY(e.x, e.y, t);
  };
  Object.defineProperty(CastleWorldmapData.prototype, "layoutManager", {
    get: function () {
      return m.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapData.prototype.isSectorPopulated = function (e, t) {
    return this.areaTiles.isSectorPopulated(e, t);
  };
  Object.defineProperty(CastleWorldmapData.prototype, "relocationObjects", {
    get: function () {
      this._relocationObjects ||= [];
      return this._relocationObjects;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapData.prototype.getExpiredRelocationObject = function () {
    var e;
    for (var t = 0; t < this.relocationObjects.length; t++) {
      if ((e = this.relocationObjects[t]) && a.instanceOfClass(e, "CastleMapobjectVO")) {
        var i = g.CastleModel.otherPlayerData.getOwnerInfoVO(e.occupierID);
        if (i && i.remainingRelocateDuration <= 0) {
          return e;
        }
      }
    }
    return null;
  };
  CastleWorldmapData.__initialize_static_members = function () {
    CastleWorldmapData.AREA_INVALIDATION_TIME = 120000;
  };
  return CastleWorldmapData;
}(p.CastleBasicData);
exports.CastleWorldmapData = _;
var m = require("./17.js");
var f = require("./2123.js");
var O = require("./2127.js");
var E = require("./147.js");
var y = require("./703.js");
s.classImplementsInterfaces(_, "IUpdatable");
_.__initialize_static_members();