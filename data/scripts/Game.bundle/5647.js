Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AutoRecruitmentPriceVO() {
    this._id = 0;
    this._loop = 0;
  }
  AutoRecruitmentPriceVO.prototype.fillByXmlNode = function (e) {
    this._id = parseInt(a.CastleXMLUtils.getValueOrDefault("autoRecruitmentPriceID", e, "-1", true));
    this._loop = parseInt(a.CastleXMLUtils.getValueOrDefault("loop", e, "-1", true));
    this._priceType = s.AutoRecruitmentPriceEnum.getTypeByName(a.CastleXMLUtils.getValueOrDefault("type", e, "", false));
    this._costs = new o.CollectableItemC2VO(parseInt(a.CastleXMLUtils.getValueOrDefault("costC2", e, "0", false)));
  };
  Object.defineProperty(AutoRecruitmentPriceVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPriceVO.prototype, "loop", {
    get: function () {
      return this._loop;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPriceVO.prototype, "priceType", {
    get: function () {
      return this._priceType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPriceVO.prototype, "costs", {
    get: function () {
      return this._costs;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentPriceVO;
}();
exports.AutoRecruitmentPriceVO = n;
var o = require("./128.js");
var a = require("./22.js");
var s = require("./539.js");