Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./4.js");
var d = require("./204.js");
var p = createjs.Point;
var h = function (e) {
  function CastleFactionProtectionPremiumShopVO() {
    return e.call(this, "factionProtection_title", "factionProtection_copy_short", [_.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST, _.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_EVENT], l.FactionConst.getPeaceC2Cost()) || this;
  }
  n.__extends(CastleFactionProtectionPremiumShopVO, e);
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "isActive", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "isActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "canBeBought", {
    get: function () {
      return this.factionEventVO.remainingFactionProtectionTimeInSeconds < 1 && this.factionEventVO.remainingNoobProtectionTimeInSeconds < 1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "canBeBought").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "factionEventVO", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      if (this.factionEventVO.remainingNoobProtectionTimeInSeconds > 0) {
        return "dialog_management_openGateNotInNoobProtection";
      }
      switch (this.factionEventVO.factionProtectionStatus) {
        case m.FactionEventVO.FACTION_PROTECTION_STATUS_ACTIVE:
          return "premiumFlag_cantbuy";
        case m.FactionEventVO.FACTION_PROTECTION_STATUS_COOLDOWN:
          return {
            t: "dialog_management_reStartableIn_tt",
            p: [this.duration]
          };
        case m.FactionEventVO.FACTION_PROTECTION_STATUS_PRETIME:
          return {
            t: "dialog_management_startIn_tt",
            p: [this.duration]
          };
      }
      return "runTime";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "timeStringTooltip", {
    get: function () {
      switch (this.factionEventVO.factionProtectionStatus) {
        case m.FactionEventVO.FACTION_PROTECTION_STATUS_ACTIVE:
          return c.Localize.text("runTime");
        case m.FactionEventVO.FACTION_PROTECTION_STATUS_COOLDOWN:
          return "dialog_management_reStartableIn";
        case m.FactionEventVO.FACTION_PROTECTION_STATUS_PRETIME:
          return "dialog_management_startIn";
      }
      return "runTime";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "timeStringTooltip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "hasRebuyDiscount", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "hasRebuyDiscount").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "hasVisualBonus", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "hasVisualBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "duration", {
    get: function () {
      if (this.factionEventVO.remainingFactionProtectionTimeInSeconds > 0) {
        return a.TimeStringHelper.getCommaTimeStringFromSeconds(this.factionEventVO.remainingFactionProtectionTimeInSeconds, c.Localize.text);
      } else {
        return a.TimeStringHelper.getCommaTimeStringFromSeconds(l.FactionConst.getPeaceDuration(o.EnvGlobalsHandler.globals.isTest), c.Localize.text);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "duration").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "listSortPriority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionProtectionPremiumShopVO.prototype.clickedBuyButton = function () {
    if (this.factionEventVO.remainingFactionProtectionTimeInSeconds < 0 || this.factionEventVO.factionProtectionStatus == m.FactionEventVO.FACTION_PROTECTION_STATUS_OFF) {
      g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleFactionProtectionModeDialog);
    }
  };
  CastleFactionProtectionPremiumShopVO.prototype.createVisualMovieClip = function () {
    return new Library.CastleInterfaceElements_Icons.Icon_FactionProtection();
  };
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "isVisible", {
    get: function () {
      return this.factionEventVO != null && !this.factionEventVO.isLocked && !this.factionEventVO.isOneLMSActive;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "isVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new p(0, 0);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "offsetIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionProtectionPremiumShopVO;
}(d.CastlePremiumMarketShopVO);
exports.CastleFactionProtectionPremiumShopVO = h;
var g = require("./9.js");
var C = require("./2113.js");
var _ = require("./170.js");
var m = require("./202.js");
s.classImplementsInterfaces(h, "IPremiumMarketShopVO");