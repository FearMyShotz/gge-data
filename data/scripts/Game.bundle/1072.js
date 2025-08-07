Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./3555.js");
var p = require("./1715.js");
var h = require("./4.js");
var g = function (e) {
  function CastleTransferTroopsToKingdomProperties(t) {
    var i = e.call(this) || this;
    i.targetKingdomVO = t;
    return i;
  }
  n.__extends(CastleTransferTroopsToKingdomProperties, e);
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "unitTravelTime", {
    get: function () {
      return h.CastleModel.kingdomData.getKingdomVOByID(this.targetKingdomVO.kID).unitTravelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "exceptingKingdomID", {
    get: function () {
      return [this.targetKingdomVO.kID, l.FactionConst.KINGDOM_ID];
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferTroopsToKingdomProperties.prototype.isToolTravelingAllowed = function (e) {
    return e.isTravelingToTargetAllowed(this.targetKingdomVO.kID, c.WorldConst.AREA_TYPE_ALIEN_CAMP) || e.isTravelingToTargetAllowed(this.targetKingdomVO.kID, c.WorldConst.AREA_TYPE_RED_ALIEN_CAMP) || e.isTravelingToTargetAllowed(this.targetKingdomVO.kID, c.WorldConst.AREA_TYPE_KINGDOM_CASTLE) || e.isTravelingToTargetAllowed(this.targetKingdomVO.kID, c.WorldConst.AREA_TYPE_FACTION_CAMP);
  };
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "addUnitsDialogKey", {
    get: function () {
      if (this.targetKingdomVO.kID == l.FactionConst.KINGDOM_ID) {
        return m.CastleSendTroopsToFactionAddUnitsDialog;
      } else {
        return _.CastleSendTroopsAddUnitsDialog;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "unitTravelTaxRate", {
    get: function () {
      return this.targetKingdomVO.unitTravelTaxRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "insufficentTimeAlert", {
    get: function () {
      if (this.targetKingdomVO.kID == l.FactionConst.KINGDOM_ID) {
        var e = a.castAs(h.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
        if (e && e.remainingEventTimeInSeconds < this.unitTravelTime) {
          return true;
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferTroopsToKingdomProperties.prototype.getUnitTransferCommand = function (e, t, i) {
    if (i) {
      return new d.C2SKingdomUnitTransferVO(e.selectedCastleVO.objectId, e.selectedCastleVO.kingdomID, this.targetKingdomVO.kID, t, i.selectedData.objectId);
    } else {
      return new d.C2SKingdomUnitTransferVO(e.selectedCastleVO.objectId, e.selectedCastleVO.kingdomID, this.targetKingdomVO.kID, t, -1);
    }
  };
  CastleTransferTroopsToKingdomProperties.prototype.isSpecialEvent = function (e) {
    switch (e) {
      case r.EventConst.EVENTTYPE_FACTION:
        return this.targetKingdomVO.kID == l.FactionConst.KINGDOM_ID;
      case r.EventConst.EVENTTYPE_ISLAND_KINGDOM:
        return this.targetKingdomVO.kID == u.WorldIsland.KINGDOM_ID;
    }
    return false;
  };
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "targetCapacity", {
    get: function () {
      return Number.MAX_VALUE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "descriptionTextID", {
    get: function () {
      return "dialog_kingdom_sendTroops_info";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "additionalDataUpdateCommands", {
    get: function () {
      var e = [];
      if (this.targetKingdomVO.kID == l.FactionConst.KINGDOM_ID) {
        e.push(new p.C2SGetCampUnitCapacity(h.CastleModel.userData.castleList.getMainFactionCastle().objectId));
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsToKingdomProperties.prototype, "targetFoodConsumption", {
    get: function () {
      if (h.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(this.targetKingdomVO.kID)) {
        return h.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(this.targetKingdomVO.kID).getResourceProduction(C.CollectableEnum.FOOD);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleTransferTroopsToKingdomProperties;
}(o.BasicProperties);
exports.CastleTransferTroopsToKingdomProperties = g;
var C = require("./12.js");
var _ = require("./1073.js");
var m = require("./3556.js");
s.classImplementsInterfaces(g, "ITransferTroopsDialogProperties");