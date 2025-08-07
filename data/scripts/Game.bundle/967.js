Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./18.js");
var l = require("./148.js");
var c = require("./28.js");
var u = require("./4.js");
var d = require("./109.js");
var p = function (e) {
  function WolfkingCastleMapObjectVO() {
    var t = this;
    t._baseMoatBonus = 0;
    t._baseGateBonus = 0;
    t._baseWallBonus = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "WolfkingCastle";
    t.type = "-";
    t._areaType = o.WorldConst.AREA_TYPE_WOLF_KING;
    t._isVisibleOnMap = false;
    t._secondsSinceEspionage = -1;
    return t;
  }
  n.__extends(WolfkingCastleMapObjectVO, e);
  WolfkingCastleMapObjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n = new d.CastleDisplayObjectClipContainer();
    var o = this.getAsExternalClip("WolfkingCastle_Mapobject");
    n.addItem(o);
    return n;
  };
  WolfkingCastleMapObjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    if (e.length > 3) {
      this._spyInfoReceivingTime = Date.now() * c.ClientConstTime.MILLISEC_2_SEC;
      this._secondsSinceEspionage = e[3];
      this._dungeonLevel = s.int(e[4]);
      this._isDefeated = e[5] == 1;
      this._baseWallBonus = e[6];
      this._baseGateBonus = e[7];
      this._baseMoatBonus = e[8];
      this._isVisibleOnMap = true;
    } else {
      this._isVisibleOnMap = false;
    }
    this._ownerInfo = u.CastleModel.otherPlayerData.getOwnerInfoVO(l.ClientConstNPCs.NPC_ID_WOLFKING);
  };
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "areaNameString", {
    get: function () {
      return a.Localize.text("kingdom_dungeon_castleName_wolfgard");
    },
    enumerable: true,
    configurable: true
  });
  WolfkingCastleMapObjectVO.prototype.canBeAttacked = function () {
    return true;
  };
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "canBeSpied", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "isDefeated", {
    get: function () {
      return this._isDefeated;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "attackType", {
    get: function () {
      return r.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "baseGateBonus", {
    get: function () {
      return this._baseGateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "baseWallBonus", {
    get: function () {
      return this._baseWallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._baseMoatBonus;
    },
    enumerable: true,
    configurable: true
  });
  return WolfkingCastleMapObjectVO;
}(require("./205.js").ContainerBuilderMapobjectVO);
exports.WolfkingCastleMapObjectVO = p;