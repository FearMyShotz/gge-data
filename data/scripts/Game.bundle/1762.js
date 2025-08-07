Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3708.js");
var l = require("./183.js");
var c = require("./4.js");
var u = function (e) {
  function CastleTransferResToKingdomProperties(t) {
    var i = e.call(this) || this;
    i._targetKingdomVO = t;
    return i;
  }
  n.__extends(CastleTransferResToKingdomProperties, e);
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "infoText", {
    get: function () {
      return "dialog_kingdom_sendRes_info";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "travelTime", {
    get: function () {
      return this.kingdomVO.ressourceTravelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "exceptingKingdomIDs", {
    get: function () {
      return [this.kingdomVO.kID, s.FactionConst.KINGDOM_ID];
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferResToKingdomProperties.prototype.isSpecialEvent = function (e) {
    return false;
  };
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "travelTaxRate", {
    get: function () {
      return (100 - this.kingdomVO.boostedResourceTravelTaxRate) / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "targetResources", {
    get: function () {
      return this.targetDetailedCastleVO.getResourcesAsCollectableList();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "maxStorage", {
    get: function () {
      return this.targetDetailedCastleVO.maxResourceStorageAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "hasInsufficientTime", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "kingdomVO", {
    get: function () {
      return this._targetKingdomVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "targetDetailedCastleVO", {
    get: function () {
      return c.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(this.kingdomVO.kID);
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferResToKingdomProperties.prototype.getSendResourcesCommand = function (e, t, i) {
    c.CastleModel.treasureMapData.dispatchEvent(new l.CastleTreasureMapEvent(l.CastleTreasureMapEvent.RESOURCE_TRANSFER_WERE_SEND, null));
    return new r.C2SKingdomGoodsTransferVO(e, t, this.kingdomVO.kID, i);
  };
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "hideTabs", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "resourceStorageCapacity", {
    get: function () {
      return this.targetDetailedCastleVO.createStorageList();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "targetInitialized", {
    get: function () {
      return this.targetDetailedCastleVO != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "isSubscriptionBuffed", {
    get: function () {
      return this.kingdomVO.isSubscriptionBuffed;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTransferResToKingdomProperties;
}(o.BasicProperties);
exports.CastleTransferResToKingdomProperties = u;
a.classImplementsInterfaces(u, "ITransferResourcesDialogProperties");