Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = function () {
  function GemColorVO() {
    this._id = -1;
    this._color = 0;
  }
  GemColorVO.prototype.parseXml = function (e) {
    this._id = n.int(o.CastleXMLUtils.getIntAttribute("gemColorID", e, -1));
    this._color = o.CastleXMLUtils.getUintAttribute("colorCode", e);
  };
  Object.defineProperty(GemColorVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GemColorVO.prototype, "color", {
    get: function () {
      return this._color;
    },
    enumerable: true,
    configurable: true
  });
  return GemColorVO;
}();
exports.GemColorVO = a;