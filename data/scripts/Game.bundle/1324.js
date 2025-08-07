Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./4.js");
var r = require("./35.js");
var l = require("./518.js");
var c = function (e) {
  function MarketMapmovementVO() {
    var t = this;
    t._carriages = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = MarketMapmovementVO.NAME;
    t.group = "Mapmovement";
    return t;
  }
  n.__extends(MarketMapmovementVO, e);
  MarketMapmovementVO.prototype.loadFromParamObject = function (t) {
    e.prototype.loadFromParamObject.call(this, t);
    if (t.MM) {
      this.parse_MM(t.MM);
    }
  };
  MarketMapmovementVO.prototype.parse_MM = function (e) {
    this._carriages = a.int(e.C);
    if (e.G) {
      this._lootList = u.CollectableManager.parser.s2cParamList.createList(e.G);
    }
  };
  Object.defineProperty(MarketMapmovementVO.prototype, "canBeRetreated", {
    get: function () {
      return this._movementOwnerID == s.CastleModel.userData.playerID && !this.isReturnHome;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BasicMapmovementVO.prototype, "canBeRetreated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MarketMapmovementVO.prototype, "tooLateToBeRetreated", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BasicMapmovementVO.prototype, "tooLateToBeRetreated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MarketMapmovementVO.prototype, "lootList", {
    get: function () {
      return this._lootList;
    },
    enumerable: true,
    configurable: true
  });
  MarketMapmovementVO.prototype.isSubscriptionBuffed = function () {
    return this.targetOwnerID != s.CastleModel.userData.playerID && this.sourceOwnerID == s.CastleModel.userData.playerID && s.CastleModel.userData.allianceID > 0 && this.targetOwnerInfo.allianceID == s.CastleModel.userData.allianceID && s.CastleModel.subscriptionData.getEffectValue(r.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, this.targetArea.areaType, this.targetArea.kingdomID) > 0;
  };
  MarketMapmovementVO.__initialize_static_members = function () {
    MarketMapmovementVO.NAME = "Market";
  };
  return MarketMapmovementVO;
}(l.BasicMapmovementVO);
exports.MarketMapmovementVO = c;
var u = require("./50.js");
o.classImplementsInterfaces(c, "IMapMovementVO");
c.__initialize_static_members();