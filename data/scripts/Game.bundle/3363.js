Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./51.js");
var c = require("./106.js");
var u = require("./240.js");
var d = createjs.MovieClip;
var p = createjs.Point;
var h = function (e) {
  function CastleInstructorPremiumShopVO() {
    return e.call(this, "instructor_title", "instructor_copy_short", s.BoosterConst.INSTRUCTOR_COST_C2, "instructor") || this;
  }
  n.__extends(CastleInstructorPremiumShopVO, e);
  Object.defineProperty(CastleInstructorPremiumShopVO.prototype, "bonusValue", {
    get: function () {
      return Math.round(s.BoosterConst.INSTRUCTOR_BOOST * 100);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "bonusValue").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInstructorPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 210;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "listSortPriority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInstructorPremiumShopVO.prototype, "duration", {
    get: function () {
      if (this.isActive) {
        return o.TimeStringHelper.getCommaTimeStringFromSeconds(this.remainingTimeInSeconds, r.Localize.text);
      } else {
        return o.TimeStringHelper.getCommaTimeStringFromSeconds(s.BoosterConst.INSTRUCTOR_DURATION, r.Localize.text);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "duration").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleInstructorPremiumShopVO.prototype.clickedBuyButton = function () {
    g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleBuyInstructorDialog);
  };
  Object.defineProperty(CastleInstructorPremiumShopVO.prototype, "bonusIconFrame", {
    get: function () {
      return 8;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "bonusIconFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleInstructorPremiumShopVO.prototype.createVisualMovieClip = function () {
    var e = new d();
    var t = c.CharacterHelper.createCharacterBig(l.ClientConstCharacter.CHAR_ID_INSTRUCTOR, e, -1, -1, false, this.bindFunction(this.onLoadedIcon));
    t.recycleAsset = false;
    if (!t.isLoaded) {
      e.visible = false;
    }
    e.addChild(t);
    return e;
  };
  CastleInstructorPremiumShopVO.prototype.createVisualMovieClipForBuyDialog = function () {
    var e = new d();
    e.addChild(c.CharacterHelper.createCharacterBig(l.ClientConstCharacter.CHAR_ID_INSTRUCTOR, e, _.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_WIDTH, _.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_HEIGHT, false));
    return e;
  };
  Object.defineProperty(CastleInstructorPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new p(0, 0);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "offsetIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInstructorPremiumShopVO.prototype, "id", {
    get: function () {
      return s.BoosterConst.INSTRUCTOR;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleInstructorPremiumShopVO;
}(u.CastleHeroDefaultBoosterShopVO);
exports.CastleInstructorPremiumShopVO = h;
var g = require("./9.js");
var C = require("./3364.js");
var _ = require("./204.js");
a.classImplementsInterfaces(h, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");