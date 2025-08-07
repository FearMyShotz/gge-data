Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./80.js");
var r = require("./1823.js");
var l = require("./557.js");
var c = function (e) {
  function GachaDeco2x2EventVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GachaDeco2x2EventVO, e);
  GachaDeco2x2EventVO.prototype.getDistrictType = function () {
    return s.IsoObjectEnum.DECO_DISTRICT_2X2;
  };
  Object.defineProperty(GachaDeco2x2EventVO.prototype, "currencyMerchantEventID", {
    get: function () {
      return a.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaDeco2x2EventVO.prototype, "eventName", {
    get: function () {
      return "GachaDeco2x2";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaDeco2x2EventVO.prototype, "animationFPS", {
    get: function () {
      return 24;
    },
    enumerable: true,
    configurable: true
  });
  return GachaDeco2x2EventVO;
}(r.ADistrictGachaEventVO);
exports.GachaDeco2x2EventVO = c;
o.classImplementsInterfaces(l.AGachaEventVO, "IEventOverviewable");