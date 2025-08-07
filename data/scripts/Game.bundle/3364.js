Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./51.js");
var c = require("./107.js");
var u = require("./240.js");
var d = createjs.MovieClip;
var p = createjs.Point;
var h = function (e) {
  function CastleMarauderPremiumShopVO() {
    return e.call(this, "dialog_recuit_hireMarauder", "dialog_marauderHire_copy", s.BoosterConst.MARAUDER_COST_C2, "marauder") || this;
  }
  n.__extends(CastleMarauderPremiumShopVO, e);
  Object.defineProperty(CastleMarauderPremiumShopVO.prototype, "bonusValue", {
    get: function () {
      return Math.round(s.BoosterConst.MARAUDER_BOOST * 100);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "bonusValue").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMarauderPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 20;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "listSortPriority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMarauderPremiumShopVO.prototype, "duration", {
    get: function () {
      if (this.isActive) {
        return o.TimeStringHelper.getCommaTimeStringFromSeconds(this.remainingTimeInSeconds, r.Localize.text);
      } else {
        return o.TimeStringHelper.getCommaTimeStringFromSeconds(s.BoosterConst.MARAUDER_DURATION, r.Localize.text);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "duration").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleMarauderPremiumShopVO.prototype.clickedBuyButton = function () {
    g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleBuyMarauderDialog);
  };
  Object.defineProperty(CastleMarauderPremiumShopVO.prototype, "bonusIconFrame", {
    get: function () {
      return 5;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "bonusIconFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleMarauderPremiumShopVO.prototype.createVisualMovieClip = function () {
    var e = new d();
    var t = c.CharacterHelper.createCharacterBig(l.ClientConstCharacter.CHAR_ID_MARAUDER, e, -1, -1, false, this.bindFunction(this.onLoadedIcon));
    t.recycleAsset = false;
    if (!t.isLoaded) {
      e.visible = false;
    }
    e.addChild(t);
    return e;
  };
  CastleMarauderPremiumShopVO.prototype.createVisualMovieClipForBuyDialog = function () {
    var e = new d();
    e.addChild(c.CharacterHelper.createCharacterBig(l.ClientConstCharacter.CHAR_ID_MARAUDER, e, _.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_WIDTH, _.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_HEIGHT, false));
    return e;
  };
  Object.defineProperty(CastleMarauderPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new p(3, -3);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "offsetIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMarauderPremiumShopVO.prototype, "id", {
    get: function () {
      return s.BoosterConst.MARAUDER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleMarauderPremiumShopVO;
}(u.CastleHeroDefaultBoosterShopVO);
exports.CastleMarauderPremiumShopVO = h;
var g = require("./9.js");
var C = require("./3365.js");
var _ = require("./204.js");
a.classImplementsInterfaces(h, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");