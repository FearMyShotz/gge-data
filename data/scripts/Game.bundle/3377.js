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
var p = createjs.MovieClip;
var h = createjs.Point;
var g = function (e) {
  function CastleOverseerHoneyPremiumShopVO() {
    var t = e.call(this, "dialog_resourcesBoost_hireOverseer", "overseer_honey_copy_short", s.BoosterConst.OVERSEER_COST_C2, "overseer") || this;
    t.shopTypes.push(f.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_EVENT, f.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO);
    return t;
  }
  n.__extends(CastleOverseerHoneyPremiumShopVO, e);
  Object.defineProperty(CastleOverseerHoneyPremiumShopVO.prototype, "duration", {
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
  Object.defineProperty(CastleOverseerHoneyPremiumShopVO.prototype, "bonusValue", {
    get: function () {
      return s.BoosterConst.OVERSEER_BOOST;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleHeroDefaultBoosterShopVO.prototype, "bonusValue").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOverseerHoneyPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 70;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleHeroDefaultBoosterShopVO.prototype, "listSortPriority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleOverseerHoneyPremiumShopVO.prototype.clickedBuyButton = function () {
    C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleBuyResourceBoostDialog, new c.CastleBuyResourceBoostDialogProperties(m.CastlePremiumBoostData.BOOST_HONEY));
  };
  Object.defineProperty(CastleOverseerHoneyPremiumShopVO.prototype, "bonusIconFrame", {
    get: function () {
      return 12;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleHeroDefaultBoosterShopVO.prototype, "bonusIconFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleOverseerHoneyPremiumShopVO.prototype.createVisualMovieClip = function () {
    var e = new Library.CastleInterfaceElements.CharOverseer_WithBonus();
    var t = u.CharacterHelper.createCharacterBig(l.ClientConstCharacter.CHAR_ID_OVERSEER, e.mc_charPlaceHolder, -1, -1, false, this.bindFunction(this.onLoadedIcon));
    t.recycleAsset = false;
    if (!t.isLoaded) {
      e.visible = false;
    }
    e.mc_charPlaceHolder.addChild(t);
    e.mc_icon.gotoAndStop(15);
    return e;
  };
  CastleOverseerHoneyPremiumShopVO.prototype.createVisualMovieClipForBuyDialog = function () {
    var e = new p();
    e.addChild(u.CharacterHelper.createCharacterBig(l.ClientConstCharacter.CHAR_ID_OVERSEER, e, O.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_WIDTH, O.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_HEIGHT, false));
    return e;
  };
  Object.defineProperty(CastleOverseerHoneyPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new h(-5, -5);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleHeroDefaultBoosterShopVO.prototype, "offsetIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOverseerHoneyPremiumShopVO.prototype, "id", {
    get: function () {
      return m.CastlePremiumBoostData.BOOST_HONEY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOverseerHoneyPremiumShopVO.prototype, "isVisible", {
    get: function () {
      return E.CastleModel.legendSkillData.getSceatSkillEffectValue(y.EffectTypeEnum.EFFECT_ENABLE_BUILDINGS).rawValues.indexOf(CastleOverseerHoneyPremiumShopVO.BEEKEEPER_WODID) > -1;
    },
    enumerable: true,
    configurable: true
  });
  CastleOverseerHoneyPremiumShopVO.BEEKEEPER_WODID = 1944;
  return CastleOverseerHoneyPremiumShopVO;
}(d.CastleHeroDefaultBoosterShopVO);
exports.CastleOverseerHoneyPremiumShopVO = g;
var C = require("./9.js");
var _ = require("./417.js");
var m = require("./402.js");
var f = require("./170.js");
var O = require("./204.js");
var E = require("./4.js");
var y = require("./35.js");
a.classImplementsInterfaces(g, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");