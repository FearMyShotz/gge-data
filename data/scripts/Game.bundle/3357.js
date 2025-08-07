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
var d = require("./56.js");
var p = require("./240.js");
var h = createjs.MovieClip;
var g = createjs.Point;
var C = function (e) {
  function CastleOverseerBeefPremiumShopVO() {
    var t = e.call(this, "dialog_resourcesBoost_hireOverseer", "overseer_beef_copy_short", s.BoosterConst.OVERSEER_BEEF_COST_C2, "overseer") || this;
    t.shopTypes.push(O.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_EVENT, O.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO);
    return t;
  }
  n.__extends(CastleOverseerBeefPremiumShopVO, e);
  Object.defineProperty(CastleOverseerBeefPremiumShopVO.prototype, "duration", {
    get: function () {
      if (this.isActive) {
        return o.TimeStringHelper.getCommaTimeStringFromSeconds(this.remainingTimeInSeconds, r.Localize.text);
      } else {
        return o.TimeStringHelper.getCommaTimeStringFromSeconds(s.BoosterConst.OVERSEER_DURATION, r.Localize.text);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleHeroDefaultBoosterShopVO.prototype, "duration").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOverseerBeefPremiumShopVO.prototype, "bonusValue", {
    get: function () {
      return s.BoosterConst.OVERSEER_BEEF_BOOST;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleHeroDefaultBoosterShopVO.prototype, "bonusValue").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOverseerBeefPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 60;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleHeroDefaultBoosterShopVO.prototype, "listSortPriority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleOverseerBeefPremiumShopVO.prototype.clickedBuyButton = function () {
    _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleBuyResourceBoostDialog, new c.CastleBuyResourceBoostDialogProperties(f.CastlePremiumBoostData.BOOST_BEEF));
  };
  Object.defineProperty(CastleOverseerBeefPremiumShopVO.prototype, "bonusIconFrame", {
    get: function () {
      return 13;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleHeroDefaultBoosterShopVO.prototype, "bonusIconFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleOverseerBeefPremiumShopVO.prototype.createVisualMovieClip = function () {
    var e = new Library.CastleInterfaceElements.CharOverseer_WithBonus();
    var t = u.CharacterHelper.createCharacterBig(l.ClientConstCharacter.CHAR_ID_OVERSEER, e.mc_charPlaceHolder, -1, -1, false, this.bindFunction(this.onLoadedIcon));
    t.recycleAsset = false;
    if (!t.isLoaded) {
      e.visible = false;
    }
    e.mc_charPlaceHolder.addChild(t);
    e.mc_icon.gotoAndStop(16);
    return e;
  };
  CastleOverseerBeefPremiumShopVO.prototype.createVisualMovieClipForBuyDialog = function () {
    var e = new h();
    e.addChild(u.CharacterHelper.createCharacterBig(l.ClientConstCharacter.CHAR_ID_OVERSEER, e, E.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_WIDTH, E.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_HEIGHT, false));
    return e;
  };
  Object.defineProperty(CastleOverseerBeefPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new g(-5, -5);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleHeroDefaultBoosterShopVO.prototype, "offsetIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOverseerBeefPremiumShopVO.prototype, "id", {
    get: function () {
      return f.CastlePremiumBoostData.BOOST_BEEF;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOverseerBeefPremiumShopVO.prototype, "isVisible", {
    get: function () {
      for (var e = b.CastleModel.wodData.createVObyWOD(CastleOverseerBeefPremiumShopVO.CATTLE_FARM_WODID, d.CastleWodData.TYPE_BUILDING); e;) {
        if (b.CastleModel.legendSkillData.getSceatSkillEffectValue(y.EffectTypeEnum.EFFECT_ENABLE_BUILDINGS).rawValues.indexOf(e.wodId) > -1) {
          return true;
        }
        e = e.getUpgradeVO();
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastleOverseerBeefPremiumShopVO.CATTLE_FARM_WODID = 3117;
  return CastleOverseerBeefPremiumShopVO;
}(p.CastleHeroDefaultBoosterShopVO);
exports.CastleOverseerBeefPremiumShopVO = C;
var _ = require("./9.js");
var m = require("./417.js");
var f = require("./402.js");
var O = require("./170.js");
var E = require("./204.js");
var y = require("./35.js");
var b = require("./4.js");
a.classImplementsInterfaces(C, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");