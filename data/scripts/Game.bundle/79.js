Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./28.js");
var c = require("./22.js");
var u = require("./26.js");
var d = require("./30.js");
var p = require("./44.js");
var h = require("./4.js");
var g = require("./2100.js");
var C = createjs.Event;
var _ = function () {
  function ASpecialEventVO() {
    this._eventId = -1;
    this._endTimestamp = 0;
    this._minLevel = 6;
    this._crossplayMinLevel = -1;
    this._maxLevel = 99;
    this._kingdomIDs = [];
    this._allowedAreaTypes = [];
    this._mapIDs = [];
    this._additionalLibLoaded = false;
    this._openWithLogin = false;
    this._isPrivateEvent = false;
    this._isoSortOrder = 0;
    this._seasonLeague = new g.SpecialEventSeasonLeagueComponent();
    this.eventExtensionUnlock = 0;
    this.openEventDialogAfterNewParse = false;
    this._eventOverviewConfig = new O.EventOverviewEventConfig();
  }
  ASpecialEventVO.prototype.update = function () {};
  ASpecialEventVO.prototype.onDestroy = function () {};
  ASpecialEventVO.prototype.parseData = function (e, t, i) {
    this.parseBasicsFromParamObject(i);
    this.parseBasicsFromXmlNode(e);
    this.parseEventXmlNode(e);
    this.parseAdditionalXmlFromRoot(t);
    this.parseParamObject(i);
  };
  ASpecialEventVO.prototype.checkOpenDialog = function () {
    if (this.openEventDialogAfterNewParse) {
      this.openDialog();
    }
    this.openEventDialogAfterNewParse = false;
  };
  ASpecialEventVO.prototype.parseBasicsFromParamObject = function (e) {
    if (e) {
      if (e.EID) {
        this._eventId = r.int(e.EID);
      }
      if (e.RS) {
        this._endTimestamp = d.CachedTimer.getCachedTimer() + e.RS * l.ClientConstTime.SEC_2_MILLISEC;
      }
    }
  };
  ASpecialEventVO.prototype.parseBasicsFromXmlNode = function (e) {
    if (e) {
      this.eventExtensionUnlock = parseInt(c.CastleXMLUtils.getValueOrDefault("eventExtensionUnlock", e, "0"));
      this._eventType = String(c.CastleXMLUtils.getValueOrDefault("eventType", e, "", true));
      this._minLevel = parseInt(c.CastleXMLUtils.getValueOrDefault("minLevel", e, "0"));
      this._maxLevel = parseInt(c.CastleXMLUtils.getValueOrDefault("maxLevel", e, "99"));
      this._openWithLogin = parseInt(c.CastleXMLUtils.getValueOrDefault("openWithLogin", e, "0")) == 1;
      this._isoSortOrder = parseInt(c.CastleXMLUtils.getValueOrDefault("sortOrder", e, "0"));
      this._crossplayMinLevel = parseInt(c.CastleXMLUtils.getValueOrDefault("crossplayMinLevel", e, "-1"));
      var t = c.CastleXMLUtils.getValueOrDefault("kIDs", e, "0").split(",");
      this._kingdomIDs = Array(t.length).fill(0);
      for (var i = 0; i < this._kingdomIDs.length; i++) {
        this._kingdomIDs[i] = parseInt(t[i]);
      }
      var n = c.CastleXMLUtils.getValueOrDefault("areaTypes", e, "1").split(",");
      this._allowedAreaTypes = Array(n.length).fill(0);
      for (var o = 0; o < this._allowedAreaTypes.length; o++) {
        this._allowedAreaTypes[o] = parseInt(n[o]);
      }
      var a = c.CastleXMLUtils.getValueOrDefault("mapID", e, "0").split(",");
      this._mapIDs = Array(a.length).fill(0);
      for (var s = 0; s < this._mapIDs.length; s++) {
        this._mapIDs[s] = parseInt(a[s]);
      }
    }
  };
  ASpecialEventVO.prototype.parseParamObject = function (e) {
    this._seasonLeague.parseServerData(e);
  };
  ASpecialEventVO.prototype.parseEventXmlNode = function (e) {};
  ASpecialEventVO.prototype.parseAdditionalXmlFromRoot = function (e) {};
  ASpecialEventVO.prototype.parseByPrivateEventData = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    this._isPrivateEvent = true;
    this.parsePrivateEventEnum(e);
    this.parsePrivateEventParams(t);
    this.loadAdditionalEventLib();
  };
  ASpecialEventVO.prototype.parsePrivateEventParams = function (e) {};
  ASpecialEventVO.prototype.parsePrivateEventEnum = function (e) {
    this._eventId = e.privateEventID;
    this._eventType = e.eventType;
    this._minLevel = e.minLevel;
    this._maxLevel = e.maxLevel;
    this._openWithLogin = e.openWithLogin;
    this._kingdomIDs = Array(e.kIDs.length).fill(0);
    for (var t = 0; t < this._kingdomIDs.length; t++) {
      this._kingdomIDs[t] = e.kIDs[t];
    }
    this._allowedAreaTypes = Array(e.areaTypes.length).fill(0);
    for (var i = 0; i < this._allowedAreaTypes.length; i++) {
      this._allowedAreaTypes[i] = e.areaTypes[i];
    }
    this._mapIDs = Array(e.mapIDs.length).fill(0);
    for (var n = 0; n < this._mapIDs.length; n++) {
      this._mapIDs[n] = e.mapIDs[n];
    }
  };
  Object.defineProperty(ASpecialEventVO.prototype, "requiresAdditionalEventLib", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  ASpecialEventVO.prototype.loadAdditionalEventLib = function () {
    if (this.requiresAdditionalEventLib) {
      this._additionalLibLoaded = false;
      var e = o.BasicModel.basicLoaderData.loadVersionedItemAsset(this.getEventLibName());
      if (e._isLoaded) {
        this.onAdditionalLibLoaded(null);
      } else {
        e.addEventListener(C.COMPLETE, this.bindFunction(this.onAdditionalLibLoaded));
      }
      o.BasicModel.basicLoaderData.assetLoader.start(a.GoodgameBitmapEngine.numConnections);
    }
  };
  ASpecialEventVO.prototype.getEventLibName = function () {
    return "Event" + this._eventId + "Lib";
  };
  ASpecialEventVO.prototype.onAdditionalLibLoaded = function (e) {
    this._additionalLibLoaded = true;
    h.CastleModel.specialEventData.updateEvents();
    h.CastleModel.specialEventData.dispatchEvent(new u.CastleSpecialEventEvent(u.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this));
  };
  ASpecialEventVO.prototype.openDialog = function (e = true) {};
  ASpecialEventVO.prototype.executeOpenDialog = function (e, t, i = null) {
    if (!h.CastleModel.privateOfferData.isHiddenEvent(this._eventId)) {
      if (e) {
        m.CastleDialogHandler.getInstance().registerDefaultDialogs(t, i);
      } else {
        m.CastleDialogHandler.getInstance().registerDefaultDialogs(t, i, true, n.BasicDialogHandler.PRIORITY_LOW);
      }
    }
  };
  ASpecialEventVO.prototype.refreshWorldMap = function () {
    if (f.CastleLayoutManager.getInstance().currentState == f.CastleLayoutManager.STATE_WORLDMAP) {
      var e = f.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
      h.CastleModel.worldmapData.updateAreaRange(e.x, e.y, e.x + e.width, e.y + e.height);
    }
  };
  Object.defineProperty(ASpecialEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "hasUserSolvedEvent", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "isVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  ASpecialEventVO.prototype.isBuildingVisibleInArea = function (e, t, i, n = 0) {
    return this.isVisible && this.isActive && this.eventBuildingWOD > 0 && e >= this.minLevel && this.kingdomIDs.indexOf(i) != -1 && this.allowedAreaTypes.indexOf(t) != -1 && (n <= 0 || this._mapIDs.length == 0 || this._mapIDs.indexOf(n) != -1);
  };
  Object.defineProperty(ASpecialEventVO.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    set: function (e) {
      this._eventId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "endTimestamp", {
    get: function () {
      return this._endTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "eventType", {
    get: function () {
      return this._eventType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "kingdomIDs", {
    get: function () {
      return this._kingdomIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "minLevel", {
    get: function () {
      if (p.SpecialServerHelper.isCrossplay() && this._crossplayMinLevel > -1) {
        return this._crossplayMinLevel;
      } else {
        return this._minLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "allowedAreaTypes", {
    get: function () {
      return this._allowedAreaTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "isAdditionalLibLoaded", {
    get: function () {
      return this._additionalLibLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "openWithLogin", {
    get: function () {
      return this._openWithLogin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      return Math.max(0, (this.endTimestamp - d.CachedTimer.getCachedTimer()) * l.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "isActive", {
    get: function () {
      return this.endTimestamp > d.CachedTimer.getCachedTimer() && (!this.requiresAdditionalEventLib || this._additionalLibLoaded);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "eventPackagesVO", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "isPrivateEvent", {
    get: function () {
      return this._isPrivateEvent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "isoSortOrder", {
    get: function () {
      return this._isoSortOrder;
    },
    enumerable: true,
    configurable: true
  });
  ASpecialEventVO.prototype.canBeAddedToActiveEvents = function () {
    return true;
  };
  ASpecialEventVO.prototype.isOwnWmoVO = function (e) {
    return false;
  };
  Object.defineProperty(ASpecialEventVO.prototype, "eventOverviewConfig", {
    get: function () {
      return this._eventOverviewConfig;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "addToOverview", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  ASpecialEventVO.prototype.hasRewards = function () {
    return false;
  };
  ASpecialEventVO.prototype.getRewards = function (e) {
    return null;
  };
  ASpecialEventVO.prototype.getRank = function (e) {
    return 0;
  };
  ASpecialEventVO.prototype.getScore = function (e) {
    return 0;
  };
  Object.defineProperty(ASpecialEventVO.prototype, "seasonLeague", {
    get: function () {
      return this._seasonLeague;
    },
    enumerable: true,
    configurable: true
  });
  return ASpecialEventVO;
}();
exports.ASpecialEventVO = _;
var m = require("./9.js");
var f = require("./17.js");
var O = require("./2101.js");
s.classImplementsInterfaces(_, "IEventOverviewable");