Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./58.js");
var d = require("./973.js");
var p = require("./4.js");
var h = require("./204.js");
var g = createjs.Point;
var C = function (e) {
  function CastleOpenGatePremiumShopVO() {
    return e.call(this, "dialog_startOpenGate_title", "dialog_startOpenGate_decription_short", [O.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST], CastleOpenGatePremiumShopVO.getCosts()) || this;
  }
  n.__extends(CastleOpenGatePremiumShopVO, e);
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      if (p.CastleModel.userData.isInNormalNoobProtection()) {
        return "dialog_management_openGateNotInNoobProtection";
      } else {
        return {
          t: "expansion_higherLevelNeeded",
          p: [u.ClientConstLevelRestrictions.MIN_LEVEL_OPENGATE]
        };
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "finalCostsC2", {
    get: function () {
      return CastleOpenGatePremiumShopVO.getCosts();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "finalCostsC2").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleOpenGatePremiumShopVO.getCosts = function () {
    var e = CastleOpenGatePremiumShopVO.getRelevantCastle();
    if (e) {
      return c.int(s.PlayerConst.getOpenGateCosts(0, e.openGateCounter + 1));
    } else {
      return c.int(s.PlayerConst.getOpenGateCosts(0, 1));
    }
  };
  CastleOpenGatePremiumShopVO.getRelevantCastle = function () {
    if (p.CastleModel.userData.castleList) {
      if (m.CastleLayoutManager.getInstance().isInMyCastle) {
        return p.CastleModel.userData.castleList.getCastleVOByID(p.CastleModel.areaData.activeAreaInfo.objectId, p.CastleModel.areaData.activeAreaInfo.kingdomID);
      } else {
        return p.CastleModel.userData.castleList.getMainCastleByKingdomID(r.WorldClassic.KINGDOM_ID);
      }
    } else {
      return null;
    }
  };
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "isActive", {
    get: function () {
      var e = CastleOpenGatePremiumShopVO.getRelevantCastle();
      return !!e && e.remainingOpenGateTime > 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "isActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "duration", {
    get: function () {
      var e = CastleOpenGatePremiumShopVO.getRelevantCastle();
      if (e && this.isActive) {
        return o.TimeStringHelper.getCommaTimeStringFromSeconds(e.remainingOpenGateTime, l.Localize.text);
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
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 200;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "listSortPriority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleOpenGatePremiumShopVO.prototype.clickedBuyButton = function () {
    _.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleStartOpenGateDialog, new d.CastleStartOpenGateDialogProperties(p.CastleModel.areaData.activeArea.areaId, p.CastleModel.areaData.activeAreaInfo.kingdomID, true));
  };
  CastleOpenGatePremiumShopVO.prototype.createVisualMovieClip = function () {
    return new Library.CastleInterfaceElements_Icons.Icon_OpenGate();
  };
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "isVisible", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "isVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new g(3, -3);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "offsetIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "canBeBought", {
    get: function () {
      return p.CastleModel.userData.hasLevelFor(u.ClientConstLevelRestrictions.MIN_LEVEL_OPENGATE);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastlePremiumMarketShopVO.prototype, "canBeBought").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleOpenGatePremiumShopVO;
}(h.CastlePremiumMarketShopVO);
exports.CastleOpenGatePremiumShopVO = C;
var _ = require("./9.js");
var m = require("./17.js");
var f = require("./974.js");
var O = require("./170.js");
a.classImplementsInterfaces(C, "IPremiumMarketShopVO");