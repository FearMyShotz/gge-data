Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3758.js");
var l = require("./4.js");
var c = function (e) {
  function CastleTransferResToSeasonProperties() {
    return e.call(this) || this;
  }
  n.__extends(CastleTransferResToSeasonProperties, e);
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "infoText", {
    get: function () {
      return "dialog_season_sendRes_info";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "travelTime", {
    get: function () {
      if (this.treasuremapVO) {
        return this.treasuremapVO.travelTime;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "exceptingKingdomIDs", {
    get: function () {
      return [s.FactionConst.KINGDOM_ID];
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferResToSeasonProperties.prototype.isSpecialEvent = function (e) {
    return !this.seasonVO || this.seasonVO.eventId == e;
  };
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "travelTaxRate", {
    get: function () {
      return (100 - this.seasonVO.treasureMapVO.resourceTravelTaxRate) / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "targetResources", {
    get: function () {
      return this.treasuremapVO.resources;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "maxStorage", {
    get: function () {
      return this.treasuremapVO.resStorageMaxMixedCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "hasInsufficientTime", {
    get: function () {
      return this.seasonVO.remainingEventTimeInSeconds < this.treasuremapVO.travelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "treasuremapVO", {
    get: function () {
      return this.seasonVO.treasureMapVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "seasonVO", {
    get: function () {
      return l.CastleModel.specialEventData.activeSeasonVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferResToSeasonProperties.prototype.getSendResourcesCommand = function (e, t, i) {
    return new r.C2STreasuremapGoodsTransferVO(this.treasuremapVO.mapID, e, t, i);
  };
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "hideTabs", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "resourceStorageCapacity", {
    get: function () {
      return this.treasuremapVO.resourceStorageCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "targetInitialized", {
    get: function () {
      return this.treasuremapVO != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToSeasonProperties.prototype, "isSubscriptionBuffed", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTransferResToSeasonProperties;
}(o.BasicProperties);
exports.CastleTransferResToSeasonProperties = c;
a.classImplementsInterfaces(c, "ITransferResourcesDialogProperties");