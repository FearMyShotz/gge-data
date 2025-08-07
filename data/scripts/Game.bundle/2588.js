Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./32.js");
var r = require("./15.js");
var l = require("./292.js");
var c = require("./4.js");
var u = require("./204.js");
var d = createjs.Point;
var p = function (e) {
  function CastleFlagPremiumShopVO() {
    var t = e.call(this, "flag", "flag_copy_short", [C.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_EVENT, C.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST], a.PlayerConst.PREMIUM_FLAG_COST_C2) || this;
    r.CastleBasicController.getInstance().removeEventListener(s.CastleUserDataEvent.CHANGE_USER_AVATAR, t.bindFunction(t.onCrestUpdated));
    r.CastleBasicController.getInstance().addEventListener(s.CastleUserDataEvent.CHANGE_USER_AVATAR, t.bindFunction(t.onCrestUpdated));
    return t;
  }
  n.__extends(CastleFlagPremiumShopVO, e);
  Object.defineProperty(CastleFlagPremiumShopVO.prototype, "isActive", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastlePremiumMarketShopVO.prototype, "isActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFlagPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 5;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastlePremiumMarketShopVO.prototype, "listSortPriority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleFlagPremiumShopVO.prototype.clickedBuyButton = function () {
    h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleBuyPremiumFlagDialog);
  };
  CastleFlagPremiumShopVO.prototype.createVisualMovieClip = function () {
    return new Library.CastleInterfaceElements_Icons.Icon_PremiumFlag();
  };
  CastleFlagPremiumShopVO.prototype.onCrestUpdated = function (e = null) {
    if (this._iconMC) {
      this._iconMC = this.createVisualMovieClip();
      this.onLoadedIcon(this._iconMC);
    }
  };
  Object.defineProperty(CastleFlagPremiumShopVO.prototype, "canBeBought", {
    get: function () {
      return !c.CastleModel.userData.hasPremiumFlag;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastlePremiumMarketShopVO.prototype, "canBeBought").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFlagPremiumShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      return "premiumFlag_cantbuy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFlagPremiumShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFlagPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new d(0, -7);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastlePremiumMarketShopVO.prototype, "offsetIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleFlagPremiumShopVO.prototype.applyFilter = function () {
    e.prototype.applyFilter.call(this);
    if (this._iconMC) {
      l.FlagHelper.colorFlag(this._iconMC.mc_flag, c.CastleModel.userData.playerCrest);
    }
  };
  return CastleFlagPremiumShopVO;
}(u.CastlePremiumMarketShopVO);
exports.CastleFlagPremiumShopVO = p;
var h = require("./9.js");
var g = require("./2589.js");
var C = require("./170.js");
o.classImplementsInterfaces(p, "IPremiumMarketShopVO");