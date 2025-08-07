Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./275.js");
var p = require("./2396.js");
var h = require("./2397.js");
var g = require("./503.js");
var C = require("./26.js");
var _ = require("./54.js");
var m = require("./4.js");
var f = require("./724.js");
var O = require("./203.js");
var E = function (e) {
  function CastleBookmarkData() {
    var t = e.call(this) || this;
    t._worldmapBookmarks = [];
    m.CastleModel.specialEventData.addEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, t.bindFunction(t.onSpecialEventRemoved));
    return t;
  }
  n.__extends(CastleBookmarkData, e);
  Object.defineProperty(CastleBookmarkData.prototype, "worldmapBookmarks", {
    get: function () {
      return this._worldmapBookmarks;
    },
    enumerable: true,
    configurable: true
  });
  CastleBookmarkData.prototype.indexOfBookmarkByCoordinates = function (e, t, i) {
    for (var n = 0; n < this._worldmapBookmarks.length; ++n) {
      var o = this._worldmapBookmarks[n];
      if (this.isBookmarkForPosition(o, e, t, i)) {
        return n;
      }
    }
    return -1;
  };
  CastleBookmarkData.prototype.isBookmarkForPosition = function (e, t, i, n) {
    return e != null && e.kingdomId == t && i == e.posX && n == e.posY;
  };
  CastleBookmarkData.prototype.parseBookmarkObject = function (e) {
    if (e) {
      m.CastleModel.otherPlayerData.parseOwnerInfoArray([e.OI]);
      var t = new b.CastleWorldmapBookmarkVO();
      t.parseParamObject(e);
      return t;
    }
    return null;
  };
  CastleBookmarkData.prototype.onSpecialEventRemoved = function (e) {
    var t = e.specialEventVO;
    if (CastleBookmarkData.EVENT_BOOKMARKS_TO_AUTO_DELETE.indexOf(t.eventId) != -1 && o.DictionaryUtil.containsKey(d.ClientConstEvent.EVENT_TO_AREA_TYPE, t.eventId)) {
      var i = this._worldmapBookmarks.filter(this.createFilterByClientRemovableBookmarks(t));
      this.deleteBookmarks(i, false);
    }
  };
  CastleBookmarkData.prototype.createFilterByClientRemovableBookmarks = function (e) {
    return function (t) {
      var i = [];
      for (var n = 1; n < arguments.length; n++) {
        i[n - 1] = arguments[n];
      }
      return t.worldmapObjectVO != null && d.ClientConstEvent.EVENT_TO_AREA_TYPE.get(e.eventId) == t.worldmapObjectVO.areaType;
    };
  };
  CastleBookmarkData.createBookmarkFromWorldmapObjectVO = function (e) {
    var t = new b.CastleWorldmapBookmarkVO();
    t.kingdomId = e.kingdomID;
    t.posX = e.absAreaPosX;
    t.posY = e.absAreaPosY;
    t.worldmapObjectVO = e;
    if (e.ownerInfo && e.ownerInfo.playerID >= 0) {
      t.name = e.ownerInfo.playerName;
    } else {
      t.name = CastleBookmarkData.getCoordinateString(t);
    }
    t.type = O.EWorldmapBookmarkType.PLAYER_FRIEND;
    return t;
  };
  CastleBookmarkData.prototype.parse_BAD = function (e) {
    this._worldmapBookmarks.push(this.parseBookmarkObject(e));
    this.dispatchEvent(new g.CastleBookmarkDataEvent(g.CastleBookmarkDataEvent.ON_LIST_CHANGED));
  };
  CastleBookmarkData.prototype.parse_BCH = function (e) {
    var t = this.parseBookmarkObject(e);
    var i = this.indexOfBookmarkByCoordinates(t.kingdomId, t.posX, t.posY);
    this._worldmapBookmarks[i] = t;
    this.dispatchEvent(new g.CastleBookmarkDataEvent(g.CastleBookmarkDataEvent.ON_LIST_CHANGED));
  };
  CastleBookmarkData.prototype.parse_BDE = function (e) {
    if (e.BM) {
      for (var t = 0, i = e.BM; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this.removeBookmark(n.K, n.X, n.Y);
        }
      }
    } else {
      this.removeBookmark(e.K, e.X, e.Y);
    }
    this.dispatchEvent(new g.CastleBookmarkDataEvent(g.CastleBookmarkDataEvent.ON_LIST_CHANGED));
  };
  CastleBookmarkData.prototype.removeBookmark = function (e, t, i) {
    var n = this.indexOfBookmarkByCoordinates(e, t, i);
    this._worldmapBookmarks.splice(n, 1);
  };
  CastleBookmarkData.prototype.parse_GBL = function (e) {
    this._worldmapBookmarks = [];
    var t;
    var i = 0;
    if (e.BL) {
      var n = e.BL;
      for (i = 0; i < n.length; ++i) {
        t = this.parseBookmarkObject(n[i]);
        this._worldmapBookmarks.push(t);
      }
    }
    if (e.ABL) {
      var o = e.ABL;
      for (i = 0; i < o.length; ++i) {
        t = this.parseBookmarkObject(o[i]);
        this._worldmapBookmarks.push(t);
      }
    }
    this.dispatchEvent(new g.CastleBookmarkDataEvent(g.CastleBookmarkDataEvent.ON_LIST_CHANGED));
  };
  CastleBookmarkData.isBookmarkableForPlayer = function (e) {
    return f.CastleBookmarkHelper.isBookmarkableForPlayer(e);
  };
  CastleBookmarkData.isBookmarkableForAlliance = function (e) {
    return !!m.CastleModel.userData.isInAlliance && f.CastleBookmarkHelper.isBookmarkableForAlliance(e);
  };
  CastleBookmarkData.getCoordinateString = function (e) {
    return u.Localize.text(a.GenericTextIds.VALUE_COORDS, [e.posX, e.posY], true);
  };
  CastleBookmarkData.prototype.getFilteredBookmarks = function (e) {
    var t = this._worldmapBookmarks.filter(this.byMultipleTypes(e));
    t.sort(y.ClientConstSort.sortByBookmarks);
    return t;
  };
  CastleBookmarkData.prototype.byMultipleTypes = function (e) {
    return function (t) {
      var i = [];
      for (var n = 1; n < arguments.length; n++) {
        i[n - 1] = arguments[n];
      }
      return e.indexOf(t.type) != -1;
    };
  };
  CastleBookmarkData.prototype.deleteBookmark = function (e, t = false) {
    if (e.isPlayerBookmark) {
      m.CastleModel.smartfoxClient.sendCommandVO(h.C2SDeleteBookmark.createFromVo(e));
    } else if (e.isAllianceBookmark) {
      m.CastleModel.smartfoxClient.sendCommandVO(p.C2SDeleteAllianceBookmark.createFromVo(e, t));
    }
  };
  CastleBookmarkData.prototype.deleteBookmarks = function (e, t = false) {
    var i = [];
    var n = [];
    if (e != null) {
      for (var o = 0, a = e; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          if (s.isPlayerBookmark) {
            i.push(h.C2SDeleteBookmark.voToCommandContent(s));
          } else if (s.isAllianceBookmark) {
            n.push(p.C2SDeleteAllianceBookmark.voToCommandContent(s, t));
          }
        }
      }
    }
    if (i.length > 0) {
      m.CastleModel.smartfoxClient.sendCommandVO(new h.C2SDeleteBookmark(i));
    }
    if (n.length > 0) {
      m.CastleModel.smartfoxClient.sendCommandVO(new p.C2SDeleteAllianceBookmark(n));
    }
  };
  CastleBookmarkData.prototype.getBookmarkForWMO = function (e, t = null) {
    var i = this.getBookmarksForWMO(e, t);
    if (i.length > 0) {
      return i[0];
    } else {
      return null;
    }
  };
  CastleBookmarkData.prototype.getBookmarksForWMO = function (e, t = null) {
    var i = [];
    if (e) {
      if (this._worldmapBookmarks != null) {
        for (var n = 0, o = this._worldmapBookmarks; n < o.length; n++) {
          var a = o[n];
          if (a !== undefined && this.isBookmarkForPosition(a, e.kingdomID, e.absAreaPosX, e.absAreaPosY)) {
            i.push(a);
          }
        }
      }
      if (t != null) {
        i = i.filter(this.byMultipleTypes(t));
      }
      i.sort(function (e, t) {
        return -e.priority + t.priority;
      });
    }
    return i;
  };
  Object.defineProperty(CastleBookmarkData.prototype, "playerBookmarks", {
    get: function () {
      return this._worldmapBookmarks.filter(this.bindFunction(this.byPlayerBookmarks));
    },
    enumerable: true,
    configurable: true
  });
  CastleBookmarkData.prototype.byPlayerBookmarks = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    return e.isPlayerBookmark;
  };
  Object.defineProperty(CastleBookmarkData.prototype, "numPlayerBookmarks", {
    get: function () {
      return this.playerBookmarks.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBookmarkData.prototype, "isPlayerListFull", {
    get: function () {
      return this.playerBookmarks.length >= c.PlayerConst.BOOKMARKS_MAX_ENTRYS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBookmarkData.prototype, "allianceBookmarks", {
    get: function () {
      return this._worldmapBookmarks.filter(this.bindFunction(this.byAllianceBookmarks));
    },
    enumerable: true,
    configurable: true
  });
  CastleBookmarkData.prototype.byAllianceBookmarks = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    return e.isAllianceBookmark;
  };
  Object.defineProperty(CastleBookmarkData.prototype, "maxAllianceBookmarks", {
    get: function () {
      return r.AllianceConst.ALLIANCE_BOOKMARK_MAX_ENTRIES;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBookmarkData.prototype, "isAllianceListFull", {
    get: function () {
      return this.allianceBookmarks.length >= r.AllianceConst.ALLIANCE_BOOKMARK_MAX_ENTRIES;
    },
    enumerable: true,
    configurable: true
  });
  CastleBookmarkData.prototype.getWorldmapBookmarksByKingdomID = function (e) {
    var t = [];
    if (this._worldmapBookmarks != null) {
      for (var i = 0, n = this._worldmapBookmarks; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.kingdomId == e) {
          t.push(o);
        }
      }
    }
    return t;
  };
  CastleBookmarkData.prototype.getAllianceBookmarkSortIndexByType = function (e) {
    var t = 0;
    switch (e) {
      case O.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER:
        t = 0;
        break;
      case O.EWorldmapBookmarkType.ALLIANCE_DEFEND:
        t = 1;
        break;
      case O.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK:
        t = 2;
    }
    return t;
  };
  CastleBookmarkData.__initialize_static_members = function () {
    CastleBookmarkData.EVENT_BOOKMARKS_TO_AUTO_DELETE = [l.EventConst.EVENTTYPE_DUNGEON];
  };
  return CastleBookmarkData;
}(_.CastleBasicData);
exports.CastleBookmarkData = E;
var y = require("./75.js");
var b = require("./2398.js");
s.classImplementsInterfaces(E, "IUpdatable");
E.__initialize_static_members();