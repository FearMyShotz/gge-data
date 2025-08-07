Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./119.js");
var p = require("./1852.js");
var h = function () {
  function FactionWorldMapObjectInfoCreator() {}
  FactionWorldMapObjectInfoCreator.prototype.createWorldMapInfo = function (e) {
    this._mapObjectInfoVO = new p.WorldMapObjectInfoVO();
    this._worldMapObjectVO = e;
    this._mapObjectInfoVO.xPos = e.absAreaPosX;
    this._mapObjectInfoVO.yPos = e.absAreaPosY;
    var t = u.int(this.getPlayerLevel(e));
    this._mapObjectInfoVO.levelTextVO = new l.LocalizedTextVO(n.GenericTextIds.VALUE_SIMPLE_COMP, [r.Localize.text("level"), t]);
    this._mapObjectInfoVO.crestVO = g.CrestHelper.getPlayerOrFactionCrest(e.ownerInfo);
    this._mapObjectInfoVO.playerID = u.int(this._worldMapObjectVO.ownerInfo.playerID);
    this._mapObjectInfoVO.isPlayerClickAble = !d.PlayerHelper.isNPCPlayer(this._mapObjectInfoVO.playerID);
    this._mapObjectInfoVO.isProtected = false;
    this.setPlayerName(false);
    this.setCastleName(false);
    if (this._worldMapObjectVO.ownerInfo.isFactionProtected) {
      this._mapObjectInfoVO.isProtected = true;
      this._mapObjectInfoVO.remainingProtectionTime = this._worldMapObjectVO.ownerInfo.remainingFactionProtectionTimeInSeconds;
    }
    if (this.hasPlayerName(this._worldMapObjectVO)) {
      var i = this._worldMapObjectVO.ownerInfo.factionID == s.FactionConst.RED_FACTION ? "red_faction" : "blue_faction";
      this._mapObjectInfoVO.isInAlliance = true;
      this._mapObjectInfoVO.clanNameTextVO = new l.LocalizedTextVO(i);
      this._mapObjectInfoVO.isClanNameClickAble = false;
    }
  };
  FactionWorldMapObjectInfoCreator.prototype.hasPlayerName = function (e) {
    return !a.instanceOfClass(e, "FactionVillageMapobjectVO") && !a.instanceOfClass(e, "FactionCapitalMapobjectVO") && !a.instanceOfClass(e, "FactionTowerMapobjectVO");
  };
  FactionWorldMapObjectInfoCreator.prototype.getPlayerLevel = function (e) {
    if (a.instanceOfClass(e, "FactionVillageMapobjectVO")) {
      return u.int(e.dungeonLevel);
    } else if (a.instanceOfClass(e, "FactionCapitalMapobjectVO")) {
      return u.int(e.dungeonLevel);
    } else if (a.instanceOfClass(e, "FactionTowerMapobjectVO")) {
      return u.int(e.dungeonLevel);
    } else {
      return u.int(this._worldMapObjectVO.ownerInfo.playerLevel);
    }
  };
  FactionWorldMapObjectInfoCreator.prototype.setPlayerName = function (e) {
    if (this._worldMapObjectVO.isDestroyed) {
      this._mapObjectInfoVO.playerNameTextVO = new l.LocalizedTextVO("mapobject_destroyed");
    } else {
      this._mapObjectInfoVO.playerNameTextVO = e ? new l.LocalizedTextVO(this._worldMapObjectVO.ownerInfo.playerName) : new c.TextVO(this._worldMapObjectVO.ownerInfo.playerName);
    }
  };
  FactionWorldMapObjectInfoCreator.prototype.setCastleName = function (e) {
    this._mapObjectInfoVO.castleNameTextVO = e ? new l.LocalizedTextVO(this._worldMapObjectVO.areaNameString) : new c.TextVO(this._worldMapObjectVO.areaNameString);
  };
  Object.defineProperty(FactionWorldMapObjectInfoCreator.prototype, "worldMapInfo", {
    get: function () {
      return this._mapObjectInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  return FactionWorldMapObjectInfoCreator;
}();
exports.FactionWorldMapObjectInfoCreator = h;
var g = require("./61.js");
o.classImplementsInterfaces(h, "IWorldMapInfoCreator");