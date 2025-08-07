Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./4.js");
var d = require("./1409.js");
var p = require("./112.js");
var h = require("./1850.js");
var g = function () {
  function BaseWorldMapObjectInfoCreator() {}
  BaseWorldMapObjectInfoCreator.prototype.createWorldMapInfo = function (e) {
    this._mapObjectInfoVO = new h.WorldMapObjectInfoVO();
    this._worldMapObjectVO = e;
    this._mapObjectInfoVO.xPos = e.absAreaPosX;
    this._mapObjectInfoVO.yPos = e.absAreaPosY;
    var t = c.int(this.getPlayerLevel(e));
    this._mapObjectInfoVO.levelTextVO = new r.LocalizedTextVO(n.GenericTextIds.VALUE_SIMPLE_COMP, [s.Localize.text("level"), t]);
    this._mapObjectInfoVO.crestVO = this._worldMapObjectVO.ownerInfo.crest;
    this._mapObjectInfoVO.playerID = c.int(this._worldMapObjectVO.ownerInfo.playerID);
    this._mapObjectInfoVO.isPlayerClickAble = !p.PlayerHelper.isNPCPlayer(this._mapObjectInfoVO.playerID);
    this._mapObjectInfoVO.isProtected = false;
    this.setPlayerName(false);
    this.setCastleName(false);
    if (!this._worldMapObjectVO.ignoresPeaceMode) {
      if (this._worldMapObjectVO.ownerInfo.isNoobProtected || this._worldMapObjectVO.ownerInfo.isPeaceProtected) {
        this._mapObjectInfoVO.isProtected = true;
        if (this._worldMapObjectVO.ownerInfo.playerID == u.CastleModel.userData.playerID) {
          this._mapObjectInfoVO.remainingProtectionTime = Math.max(u.CastleModel.userData.getRemainingNoobTime(), u.CastleModel.userData.getRemainingPeaceStatusTime());
        } else {
          this._mapObjectInfoVO.remainingProtectionTime = Math.max(this._worldMapObjectVO.ownerInfo.remainingPeaceTime, this._worldMapObjectVO.ownerInfo.remainingNoobTime);
        }
      }
    }
    if (a.instanceOfClass(this._worldMapObjectVO, "AAlienInvasionMapobjectVO")) {
      var i = this._worldMapObjectVO;
      this._mapObjectInfoVO.isProtected = i.canBeAttackedButHasPeacemode();
    }
    if (e.ownerInfo.isInAlliance) {
      this._mapObjectInfoVO.isInAlliance = true;
      this._mapObjectInfoVO.isClanNameClickAble = true;
      this._mapObjectInfoVO.allianceID = c.int(e.ownerInfo.allianceID);
      this._mapObjectInfoVO.clanNameTextVO = new l.TextVO(e.ownerInfo.allianceName);
    }
  };
  BaseWorldMapObjectInfoCreator.prototype.getPlayerLevel = function (e) {
    if (d.instanceOf_IDungeonMapobjectVO(e)) {
      return c.int(e.dungeonLevel);
    } else if (a.instanceOfClass(e, "ResourceIsleMapobjectVO")) {
      if (e.ownerInfo && e.ownerInfo.playerID > 0) {
        return c.int(e.ownerInfo.playerLevel);
      } else {
        return c.int(e.villageLevel);
      }
    } else if (a.instanceOfClass(e, "VillageMapobjectVO")) {
      return e.minimumOwnerLevel;
    } else {
      return c.int(this._worldMapObjectVO.ownerInfo.playerLevel);
    }
  };
  BaseWorldMapObjectInfoCreator.prototype.setPlayerName = function (e) {
    this._mapObjectInfoVO.playerNameTextVO = e ? new r.LocalizedTextVO(this._worldMapObjectVO.ownerInfo.playerName) : new l.TextVO(this._worldMapObjectVO.ownerInfo.playerName);
  };
  BaseWorldMapObjectInfoCreator.prototype.setCastleName = function (e) {
    this._mapObjectInfoVO.castleNameTextVO = e ? new r.LocalizedTextVO(this._worldMapObjectVO.areaNameString) : new l.TextVO(this._worldMapObjectVO.areaNameString);
  };
  Object.defineProperty(BaseWorldMapObjectInfoCreator.prototype, "worldMapInfo", {
    get: function () {
      return this._mapObjectInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  return BaseWorldMapObjectInfoCreator;
}();
exports.BaseWorldMapObjectInfoCreator = g;
o.classImplementsInterfaces(g, "IWorldMapInfoCreator");