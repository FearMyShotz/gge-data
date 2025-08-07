Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./22.js");
var a = function (e) {
  function HorseTravelboosterVO() {
    var t = this;
    t._costFactorC1 = 0;
    t._costFactorC2 = 0;
    t._unitBoost = 0;
    t._marketBoost = 0;
    t._spyBoost = 0;
    t._isInstantSpyHorse = false;
    t._payInPegasusTickets = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(HorseTravelboosterVO, e);
  HorseTravelboosterVO.prototype.createNonPegasusDuplicate = function () {
    var e = new HorseTravelboosterVO();
    e._costFactorC1 = this.costFactorC1;
    e._costFactorC2 = this.costFactorC2;
    e._unitBoost = this.unitBoost;
    e._marketBoost = this.marketBoost;
    e._spyBoost = this.spyBoost;
    e._isInstantSpyHorse = this._isInstantSpyHorse;
    e._payInPegasusTickets = false;
    e.objectId = this.objectId;
    e.wodId = this.wodId;
    e.name = this.name;
    e.group = this.group;
    e.type = this.type;
    return e;
  };
  HorseTravelboosterVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._costFactorC1 = Number(t.costFactorC1 || "");
    this._costFactorC2 = Number(t.costFactorC2 || "");
    this._unitBoost = parseInt(t.unitBoost || "");
    this._marketBoost = parseInt(t.marketBoost || "");
    this._spyBoost = parseInt(t.spyBoost || "");
    this._payInPegasusTickets = this._isInstantSpyHorse = !!parseInt(o.CastleXMLUtils.getValueOrDefault("isInstantSpyHorse", t, "0"));
  };
  Object.defineProperty(HorseTravelboosterVO.prototype, "costFactorC1", {
    get: function () {
      return this._costFactorC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HorseTravelboosterVO.prototype, "costFactorC2", {
    get: function () {
      return this._costFactorC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HorseTravelboosterVO.prototype, "unitBoost", {
    get: function () {
      return this._unitBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HorseTravelboosterVO.prototype, "marketBoost", {
    get: function () {
      return this._marketBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HorseTravelboosterVO.prototype, "spyBoost", {
    get: function () {
      return this._spyBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HorseTravelboosterVO.prototype, "isPayedWithPegasusTickets", {
    get: function () {
      return this._payInPegasusTickets;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HorseTravelboosterVO.prototype, "isInstantSpyHorse", {
    get: function () {
      return this._isInstantSpyHorse;
    },
    enumerable: true,
    configurable: true
  });
  return HorseTravelboosterVO;
}(require("./481.js").AVisualVO);
exports.HorseTravelboosterVO = a;