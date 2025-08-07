Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./58.js");
var u = require("./974.js");
var d = require("./4.js");
var p = require("./27.js");
var h = require("./204.js");
var g = createjs.Point;
var C = function (e) {
  function CastlePeaceProtectionPremiumShopVO() {
    return e.call(this, "dialog_startPeaceMode_title", "peaceProtection_copy_short", [f.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST], r.PlayerConst.PEACE_MODE_C2[0]) || this;
  }
  n.__extends(CastlePeaceProtectionPremiumShopVO, e);
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "isActive", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "isActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "canBeBought", {
    get: function () {
      if (!d.CastleModel.userData.noobProtected) {
        d.CastleModel.userData.userLevel;
        c.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT;
      }
      return d.CastleModel.userData.peaceModeStatus == O.CastleUserData.PEACEMODE_STATUS_OFF && !d.CastleModel.userData.noobProtected;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "canBeBought").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "buttonBuyToolTipEnabled", {
    get: function () {
      return "dialog_management_openGateNotInNoobProtection";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      if (d.CastleModel.userData.noobProtected) {
        return "dialog_management_openGateNotInNoobProtection";
      }
      switch (d.CastleModel.userData.peaceModeStatus) {
        case O.CastleUserData.PEACEMODE_STATUS_PEACETIME:
          return "premiumFlag_cantbuy";
        case O.CastleUserData.PEACEMODE_STATUS_POSTTIME:
          return {
            t: "dialog_management_reStartableIn_tt",
            p: [this.duration]
          };
        case O.CastleUserData.PEACEMODE_STATUS_PRETIME:
          return {
            t: "dialog_management_startIn_tt",
            p: [this.duration]
          };
      }
      return "runTime";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "timeStringTooltip", {
    get: function () {
      switch (d.CastleModel.userData.peaceModeStatus) {
        case O.CastleUserData.PEACEMODE_STATUS_PEACETIME:
          return l.Localize.text("runTime");
        case O.CastleUserData.PEACEMODE_STATUS_POSTTIME:
          return l.Localize.text("dialog_management_reStartableIn");
        case O.CastleUserData.PEACEMODE_STATUS_PRETIME:
          return l.Localize.text("dialog_management_startIn");
      }
      return l.Localize.text("runTime");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "timeStringTooltip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "hasRebuyDiscount", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "hasRebuyDiscount").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "hasVisualBonus", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "hasVisualBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "duration", {
    get: function () {
      if (d.CastleModel.userData.peaceModeStatus != O.CastleUserData.PEACEMODE_STATUS_OFF) {
        return p.CastleTimeStringHelper.getCantAttackTimeString(d.CastleModel.userData.getRemainingPeaceStatusTime());
      } else {
        return l.Localize.text("variable");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "duration").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 10;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "listSortPriority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePeaceProtectionPremiumShopVO.prototype.clickedBuyButton = function () {
    if (d.CastleModel.userData.peaceModeStatus == O.CastleUserData.PEACEMODE_STATUS_OFF) {
      _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleStartPeaceModeDialog, new u.CastleStartPeaceModeDialogProperties());
    }
  };
  CastlePeaceProtectionPremiumShopVO.prototype.createVisualMovieClip = function () {
    return new Library.CastleInterfaceElements_Icons.Icon_PeaceProtection();
  };
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "isVisible", {
    get: function () {
      return d.CastleModel.kingdomData.activeKingdomID != s.FactionConst.KINGDOM_ID && !o.EnvGlobalsHandler.globals.isOnSpecialServer;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "isVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new g(5, -3);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "offsetIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastlePeaceProtectionPremiumShopVO;
}(h.CastlePremiumMarketShopVO);
exports.CastlePeaceProtectionPremiumShopVO = C;
var _ = require("./9.js");
var m = require("./975.js");
var f = require("./170.js");
var O = require("./284.js");
a.classImplementsInterfaces(C, "IPremiumMarketShopVO");