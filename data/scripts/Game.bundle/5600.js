Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./18.js");
var u = require("./5601.js");
var d = require("./1846.js");
var p = require("./654.js");
var h = require("./22.js");
var g = require("./26.js");
var C = require("./183.js");
var _ = require("./54.js");
var m = require("./4.js");
var f = function (e) {
  function CastleTreasureMapData(t) {
    var i = e.call(this) || this;
    i._configXML = t;
    i.parseTreasureMapXML();
    m.CastleModel.specialEventData.addEventListener(g.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, i.bindFunction(i.onSpecialEventRemoved));
    return i;
  }
  n.__extends(CastleTreasureMapData, e);
  CastleTreasureMapData.prototype.executeUpdate = function (e) {
    if (this._activeTreasureMaps) {
      var t = false;
      var i = false;
      if (this._activeTreasureMaps != null) {
        for (var n = 0, o = Array.from(this._activeTreasureMaps.values()); n < o.length; n++) {
          var a = o[n];
          if (a !== undefined) {
            if (!a) {
              return;
            }
            if (t && i) {
              break;
            }
            if (a.isGoodsTransferActive || a.isTroopsTransferActive) {
              t = true;
            }
            if (a.isGoodsTransferReady || a.isTroopTransferReady) {
              i = true;
            }
          }
        }
      }
      if (i) {
        m.CastleModel.smartfoxClient.sendCommandVO(new p.C2STreasureMapsVO());
      }
    }
  };
  CastleTreasureMapData.prototype.onSpecialEventRemoved = function (e) {
    var t = e.specialEventVO;
    if (s.instanceOfClass(t, "ASeasonEventVO")) {
      this.removeFromActiveTreasureMaps(t.mapID);
    }
  };
  CastleTreasureMapData.prototype.removeFromActiveTreasureMaps = function (e) {
    if (this._activeTreasureMaps && this._activeTreasureMaps.get(e)) {
      this._activeTreasureMaps.delete(e);
    }
  };
  CastleTreasureMapData.prototype.clearTreasureMap = function (e) {
    if (this.currentLowLevelSeasonMap && this.currentLowLevelSeasonMap.mapID == e) {
      m.CastleModel.specialEventData.removePrivateEventByType(y.PrivateEventEnum.getPrivateEventTypeFromName(CastleTreasureMapData.TREASUREMAP_NAME + this.currentLowLevelSeasonMap.mapID));
      m.CastleModel.specialEventData.removePrivateEventByType(y.PrivateEventEnum.LOW_LEVEL_UNIT_DEALER);
    }
    this.removeFromActiveTreasureMaps(e);
  };
  CastleTreasureMapData.prototype.parseTreasureMapXML = function () {
    this._tNodeXMLList = new Map();
    var e = this._configXML.tmapnodes;
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = parseInt(n.tmapnodeID || "");
          this._tNodeXMLList.set(o, n);
        }
      }
    }
    this._tMapsXMLList = new Map();
    var a = this._configXML.tmaps;
    if (a != null) {
      for (var s = 0, r = a; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined) {
          var c = parseInt(l.mapID || "");
          this._tMapsXMLList.set(c, l);
        }
      }
    }
  };
  CastleTreasureMapData.prototype.createTreasureMapById = function (e) {
    var t = new b.TreasureMapVO();
    t.fillFromParamXML(this._tMapsXMLList.get(e));
    t.fillNodes(this._tNodeXMLList);
    return t;
  };
  CastleTreasureMapData.prototype.createTreasureMapNode = function (e, t) {
    var i = new b.TreasureMapVO();
    i.fillFromParamXML(this._tMapsXMLList.get(e));
    return i.createNode(this._tNodeXMLList, t);
  };
  CastleTreasureMapData.prototype.parse_TMP = function (e) {
    if (e) {
      var t = this._currentLowLevelSeasonMap;
      if (!this._activeTreasureMaps || e.UA == 1) {
        this._activeTreasureMaps = new Map();
        this._currentLowLevelSeasonMap = null;
      }
      var i = this.activeTreasuremapID;
      var n = [];
      if (e.TM) {
        for (var a = 0, s = e.TM; a < s.length; a++) {
          var c = s[a];
          if (c !== undefined) {
            var u;
            var p = l.int(c.MID);
            if (this._activeTreasureMaps.get(p)) {
              u = this._activeTreasureMaps.get(p);
            } else {
              u = this.createTreasureMapById(p);
              this._activeTreasureMaps.set(p, u);
            }
            u.loadFromParamObject(c);
            if (i == p) {
              if (u.progressType == r.TreasureMapsConst.PROGRESS_DESTROYED_END_NODE) {
                m.CastleModel.smartfoxClient.sendCommandVO(new d.C2STreasureFinishMap(u.mapID));
                this._activeTreasureMaps.delete(p);
              }
            } else if (m.CastleModel.specialEventData.activeSeasonVO && m.CastleModel.specialEventData.activeSeasonVO.treasureMapVO && m.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID == p && m.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapType == r.TreasureMapsConst.MAP_TYPE_CRUSADE) {
              o.CommandController.instance.executeCommand(O.IngameClientCommands.OPEN_SEASON_INFODIALOG_COMMAND, [u, m.CastleModel.specialEventData.activeSeasonVO.eventId, m.CastleModel.specialEventData.activeSeasonVO.rewardList.getItemByIndexSave(0)]);
            }
            if ((i = this.activeTreasuremapID) == CastleTreasureMapData.NO_MORE_MAPS) {
              this._currentNonSeasonTreasuremap = null;
            } else {
              this._currentNonSeasonTreasuremap = u;
            }
            if (u.mapType == r.TreasureMapsConst.MAP_TYPE_CRUSADE_TIMED) {
              this.setCurrentLowLevelSeasonMap(u);
            }
            o.CommandController.instance.executeCommand(O.IngameClientCommands.OPEN_TREASUREHUNT_INFODIALOG_COMMAND, u);
            n.push(u);
          }
        }
      }
      if (!this._currentLowLevelSeasonMap && t) {
        m.CastleModel.specialEventData.removePrivateEventByType(y.PrivateEventEnum.getPrivateEventTypeFromName(CastleTreasureMapData.TREASUREMAP_NAME + t.mapID));
        m.CastleModel.specialEventData.removePrivateEventByType(y.PrivateEventEnum.LOW_LEVEL_UNIT_DEALER);
      }
      if (n != null) {
        for (var h = 0, g = n; h < g.length; h++) {
          var _ = g[h];
          if (_ !== undefined) {
            this.dispatchEvent(new C.CastleTreasureMapEvent(C.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, _));
          }
        }
      }
    }
  };
  CastleTreasureMapData.prototype.getTreasureMapByID = function (e, t = true) {
    if (t || this._activeTreasureMaps && this._activeTreasureMaps.get(e)) {
      if (this._activeTreasureMaps) {
        return this._activeTreasureMaps.get(e);
      } else {
        return null;
      }
    } else {
      return this.createTreasureMapById(e);
    }
  };
  CastleTreasureMapData.prototype.sendTreasureHuntAttack = function (e, t, i, n, o) {
    if (e.isAttackComplete()) {
      m.CastleModel.smartfoxClient.sendCommandVO(new u.C2SCreateTreasureHuntMovementVO(e.army.getArmyData(), t, i, e.treasureMapVO.mapID, e.tmapNode.nodeID, n ? n.id : 0, o));
    }
  };
  CastleTreasureMapData.prototype.parse_TAI = function (e) {
    var t = new E.CastleTreasureHuntFightscreenVO();
    t.targetActionType = c.ClientConstCastle.ACTION_TYPE_TREASUREATTACK;
    t.fillFromParamObject(e);
    return t;
  };
  Object.defineProperty(CastleTreasureMapData.prototype, "activeTreasuremapID", {
    get: function () {
      return m.CastleModel.treasureHuntData.currentMapID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapData.prototype, "hasMapAvailable", {
    get: function () {
      return this.activeTreasuremapID != CastleTreasureMapData.NO_MORE_MAPS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapData.prototype, "currentNonSeasonTreasuremap", {
    get: function () {
      return this._currentNonSeasonTreasuremap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapData.prototype, "hasTreasuremap", {
    get: function () {
      return this._currentNonSeasonTreasuremap != null;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureMapData.prototype.reset = function () {
    this._currentNonSeasonTreasuremap = null;
    this._activeTreasureMaps = null;
  };
  CastleTreasureMapData.prototype.isIDEndNodeOfMap = function (e, t) {
    return e == parseInt(h.CastleXMLUtils.getValueOrDefault("endNodeID", this._tMapsXMLList.get(t), "0"));
  };
  Object.defineProperty(CastleTreasureMapData.prototype, "currentLowLevelSeasonMap", {
    get: function () {
      return this._currentLowLevelSeasonMap;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureMapData.prototype.setCurrentLowLevelSeasonMap = function (e) {
    m.CastleModel.specialEventData.addPrivateEventByType(y.PrivateEventEnum.getPrivateEventTypeFromName(CastleTreasureMapData.TREASUREMAP_NAME + e.mapID), e.mapID);
    m.CastleModel.specialEventData.addPrivateEventByType(y.PrivateEventEnum.LOW_LEVEL_UNIT_DEALER, e.mapID);
    this._currentLowLevelSeasonMap = e;
  };
  CastleTreasureMapData.prototype.setMapHighlights = function (e, t) {
    var i = this.getTreasureMapByID(e);
    if (i) {
      i.setMapHighlights(t);
      this.dispatchEvent(new C.CastleTreasureMapEvent(C.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, i));
    }
  };
  CastleTreasureMapData.prototype.clearMapHighlights = function (e) {
    this.setMapHighlights(e, []);
  };
  CastleTreasureMapData.NO_MORE_MAPS = -1;
  CastleTreasureMapData.TREASUREMAP_NAME = "treasureMap";
  return CastleTreasureMapData;
}(_.CastleBasicData);
exports.CastleTreasureMapData = f;
var O = require("./29.js");
var E = require("./5602.js");
var y = require("./1752.js");
var b = require("./5603.js");
a.classImplementsInterfaces(f, "IUpdatable");