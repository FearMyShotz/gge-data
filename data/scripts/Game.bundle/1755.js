Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./18.js");
var c = require("./655.js");
var u = require("./3683.js");
var d = require("./4.js");
var p = function (e) {
  function CastleTransferTroopsToSeasonProperties() {
    return e.call(this) || this;
  }
  n.__extends(CastleTransferTroopsToSeasonProperties, e);
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "unitTravelTime", {
    get: function () {
      return this.treasuremapVO.travelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "unitTravelTaxRate", {
    get: function () {
      return this.treasuremapVO.unitTravelTaxRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "exceptingKingdomID", {
    get: function () {
      return [s.FactionConst.KINGDOM_ID];
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferTroopsToSeasonProperties.prototype.isToolTravelingAllowed = function (e) {
    return e.isTravelingToTargetAllowed(this.treasuremapVO.mapID, this.getAreaType()) && e.attackType == l.ClientConstCastle.ATTACK_TOOL && e.canBeUsedToAttackNPC;
  };
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "addUnitsDialogKey", {
    get: function () {
      return h.CastleSendTroopsToSeasonAddUnitsDialog;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "insufficentTimeAlert", {
    get: function () {
      return this.seasonVO.remainingEventTimeInSeconds < this.treasuremapVO.travelTime;
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferTroopsToSeasonProperties.prototype.getUnitTransferCommand = function (e, t, i) {
    return new u.C2STreasuremapUnitTransferVO(this.treasuremapVO.mapID, e.selectedCastleVO.objectId, e.selectedCastleVO.kingdomID, t);
  };
  CastleTransferTroopsToSeasonProperties.prototype.isSpecialEvent = function (e) {
    return !this.seasonVO || this.seasonVO.eventId == e;
  };
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "targetCapacity", {
    get: function () {
      return this.treasuremapVO.freeUnitSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "seasonVO", {
    get: function () {
      return d.CastleModel.specialEventData.activeSeasonVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "treasuremapVO", {
    get: function () {
      return d.CastleModel.specialEventData.activeSeasonVO.treasureMapVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferTroopsToSeasonProperties.prototype.getAreaType = function () {
    return r.WorldConst.AREA_TYPE_TREASURE_CAMP;
  };
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "descriptionTextID", {
    get: function () {
      return "dialog_season_sendTroops_info";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "additionalDataUpdateCommands", {
    get: function () {
      var e = [];
      e.push(new c.C2STreasureMapsVO(this.treasuremapVO.mapID));
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToSeasonProperties.prototype, "targetFoodConsumption", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTransferTroopsToSeasonProperties;
}(o.BasicProperties);
exports.CastleTransferTroopsToSeasonProperties = p;
var h = require("./3684.js");
a.classImplementsInterfaces(p, "ITransferTroopsDialogProperties");