Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function PartpaypriceVO() {
    this._id = -1;
  }
  PartpaypriceVO.prototype.fillFromParamXml = function (e) {
    this._id = parseInt(e.partPayPriceID || "");
    this._costsList = o.CollectableManager.parser.x2cRewards.createList(e);
  };
  Object.defineProperty(PartpaypriceVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PartpaypriceVO.prototype, "costsList", {
    get: function () {
      return this._costsList;
    },
    enumerable: true,
    configurable: true
  });
  return PartpaypriceVO;
}();
exports.PartpaypriceVO = n;
var o = require("./50.js");