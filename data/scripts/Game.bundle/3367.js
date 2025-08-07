Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./51.js");
var c = require("./416.js");
var u = require("./107.js");
var d = require("./240.js");
var p = createjs.Point;
var h = function (e) {
  function CastleOverseerStonePremiumShopVO() {
    return e.call(this, "dialog_resourcesBoost_hireOverseer", "overseer_stone_copy_short", s.BoosterConst.OVERSEER_COST_C2, "overseer") || this;
  }
  n.__extends(CastleOverseerStonePremiumShopVO, e);
  Object.defineProperty(CastleOverseerStonePremiumShopVO.prototype, "duration", {
    get: function () {
      if (this.isActive) {
        return o.TimeStringHelper.getCommaTimeStringFromSeconds(this.remainingTimeInSeconds, r.Localize.text);
      } else {
        return o.TimeStringHelper.getCommaTimeStringFromSeconds(s.BoosterConst.OVERSEER_DURATION, r.Localize.text);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleHeroDefaultBoosterShopVO.prototype, "duration").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOverseerStonePremiumShopVO.prototype, "bonusValue", {
    get: function () {
      return s.BoosterConst.OVERSEER_BOOST;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleHeroDefaultBoosterShopVO.prototype, "bonusValue").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOverseerStonePremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 40;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleHeroDefaultBoosterShopVO.prototype, "listSortPriority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleOverseerStonePremiumShopVO.prototype.clickedBuyButton = function () {
    g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleBuyResourceBoostDialog, new c.CastleBuyResourceBoostDialogProperties(_.CastlePremiumBoostData.BOOST_STONE));
  };
  Object.defineProperty(CastleOverseerStonePremiumShopVO.prototype, "bonusIconFrame", {
    get: function () {
      return 2;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleHeroDefaultBoosterShopVO.prototype, "bonusIconFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleOverseerStonePremiumShopVO.prototype.createVisualMovieClip = function () {
    var e = new Library.CastleInterfaceElements.CharOverseer_WithBonus();
    var t = u.CharacterHelper.createCharacterBig(l.ClientConstCharacter.CHAR_ID_OVERSEER, e.mc_charPlaceHolder, -1, -1, false, this.bindFunction(this.onLoadedIcon));
    t.recycleAsset = false;
    if (!t.isLoaded) {
      e.visible = false;
    }
    e.mc_charPlaceHolder.addChild(t);
    e.mc_icon.gotoAndStop(4);
    return e;
  };
  Object.defineProperty(CastleOverseerStonePremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new p(-5, -5);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleHeroDefaultBoosterShopVO.prototype, "offsetIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOverseerStonePremiumShopVO.prototype, "id", {
    get: function () {
      return s.BoosterConst.OVERSEER_STONE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleOverseerStonePremiumShopVO;
}(d.CastleHeroDefaultBoosterShopVO);
exports.CastleOverseerStonePremiumShopVO = h;
var g = require("./9.js");
var C = require("./417.js");
var _ = require("./402.js");
a.classImplementsInterfaces(h, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");