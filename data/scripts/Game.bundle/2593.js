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
  function CastleRelocateShopVO() {
    return e.call(this, "panel_relocate_title", "relocate_decription_short", [m.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST], 0) || this;
  }
  n.__extends(CastleRelocateShopVO, e);
  Object.defineProperty(CastleRelocateShopVO.prototype, "isActive", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "isActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "baseCosts", {
    get: function () {
      return r.RelocationConst.getRelocationCost(u.CastleModel.userData.relocationCount);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "baseCosts").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "listSortPriority", {
    get: function () {
      return 531;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "listSortPriority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleRelocateShopVO.prototype.clickedBuyButton = function () {
    o.CommandController.instance.executeCommand(C.IngameClientCommands.SWITCH_TO_RELOCATEWORLDMAP_COMMAND);
  };
  Object.defineProperty(CastleRelocateShopVO.prototype, "canBeBought", {
    get: function () {
      return u.CastleModel.userData.remainingRelocationCooldown <= 0 && u.CastleModel.userData.remainingRelocationDuration <= 0 && u.CastleModel.userData.userLevel >= r.RelocationConst.MIN_RELOCATION_LEVEL && u.CastleModel.kingdomData.activeKingdomID == l.WorldClassic.KINGDOM_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "canBeBought").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      var e = "";
      if (u.CastleModel.userData.userLevel < r.RelocationConst.MIN_RELOCATION_LEVEL) {
        e = {
          t: "expansion_higherLevelNeeded",
          p: [r.RelocationConst.MIN_RELOCATION_LEVEL]
        };
      } else if (u.CastleModel.userData.remainingRelocationDuration > 0) {
        e = {
          t: "dialog_management_inprogress_tt",
          p: [a.TimeStringHelper.getTimeToString(u.CastleModel.userData.remainingRelocationDuration, a.TimeStringHelper.TWO_TIME_FORMAT, c.Localize.text)]
        };
      } else if (u.CastleModel.userData.remainingRelocationCooldown > 0) {
        e = {
          t: "dialog_management_reStartableIn_tt",
          p: [a.TimeStringHelper.getTimeToString(u.CastleModel.userData.remainingRelocationCooldown, a.TimeStringHelper.TWO_TIME_FORMAT, c.Localize.text)]
        };
      }
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleRelocateShopVO.prototype.createVisualMovieClip = function () {
    return new Library.CastleInterfaceElements_Icons.Icon_Relocate();
  };
  Object.defineProperty(CastleRelocateShopVO.prototype, "isVisible", {
    get: function () {
      if (u.CastleModel.kingdomData.activeKingdomID != l.WorldClassic.KINGDOM_ID) {
        return false;
      }
      var e = true;
      switch (_.CastleLayoutManager.getInstance().currentState) {
        case _.CastleLayoutManager.STATE_KINGDOMMAP:
        case _.CastleLayoutManager.STATE_SEASON_WORLDMAP:
          e = false;
      }
      if (_.CastleLayoutManager.getInstance().currentState == _.CastleLayoutManager.STATE_ISO && g.Iso.renderer.isoData.areaData.isTreasureCamp) {
        e = false;
      }
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "isVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "payType", {
    get: function () {
      return d.CastlePremiumMarketShopVO.PAYTYPE_C2;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "payType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "isExtendable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "isExtendable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "offsetIcon", {
    get: function () {
      return new p(3, 0);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "offsetIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleRelocateShopVO;
}(d.CastlePremiumMarketShopVO);
exports.CastleRelocateShopVO = h;
var g = require("./33.js");
var C = require("./29.js");
var _ = require("./17.js");
var m = require("./170.js");
s.classImplementsInterfaces(h, "IPremiumMarketShopVO");