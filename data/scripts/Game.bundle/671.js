Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./26.js");
var r = require("./4.js");
var l = function (e) {
  function WorldCupEventVO() {
    var t = this;
    t._matchDate = 0;
    t._teamA = 0;
    t._teamB = 0;
    t._paymentC2 = 0;
    t._bonusC2 = 0;
    t._voted = 0;
    t._currencyC2 = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._teamA = -1;
    t._teamB = -1;
    t._paymentC2 = -1;
    t._bonusC2 = -1;
    t._voted = -1;
    t._currencyC2 = -1;
    return t;
  }
  n.__extends(WorldCupEventVO, e);
  WorldCupEventVO.prototype.parseParamObject = function (e) {
    this._teamA = a.int(e.TA);
    this._teamB = a.int(e.TB);
    this._paymentC2 = a.int(e.PC2);
    this._bonusC2 = a.int(e.BC2);
    this._voted = a.int(e.V);
    this._currencyC2 = a.int(e.CC2);
  };
  WorldCupEventVO.prototype.parse_VWC = function (e) {
    this._voted = a.int(e.V);
    this._currencyC2 = a.int(e.CC2);
    r.CastleModel.specialEventData.dispatchEvent(new s.CastleSpecialEventEvent(WorldCupEventVO.VALUES_UPDATED, this));
  };
  Object.defineProperty(WorldCupEventVO.prototype, "teamA", {
    get: function () {
      return this._teamA;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldCupEventVO.prototype, "teamB", {
    get: function () {
      return this._teamB;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldCupEventVO.prototype, "paymentC2", {
    get: function () {
      return this._paymentC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldCupEventVO.prototype, "bonusC2", {
    get: function () {
      return this._bonusC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldCupEventVO.prototype, "voted", {
    get: function () {
      return this._voted;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldCupEventVO.prototype, "currencyC2", {
    get: function () {
      return this._currencyC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldCupEventVO.prototype, "bonusRubies", {
    get: function () {
      return this._paymentC2 * this._bonusC2 / 100;
    },
    enumerable: true,
    configurable: true
  });
  WorldCupEventVO.__initialize_static_members = function () {
    WorldCupEventVO.VALUES_UPDATED = "worldCupEventValuesUpdated";
    WorldCupEventVO.VOTE_VALUE_TEAM_DRAW = 0;
    WorldCupEventVO.VOTE_VALUE_TEAM_A = 1;
    WorldCupEventVO.VOTE_VALUE_TEAM_B = 2;
  };
  WorldCupEventVO.VOTE_VALUE_QUERY = -1;
  return WorldCupEventVO;
}(require("./79.js").ASpecialEventVO);
exports.WorldCupEventVO = l;
o.classImplementsInterfaces(l, "IEventOverviewable");
l.__initialize_static_members();