Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./22.js");
var r = function (e) {
  function APalaceBuildingVO() {
    var t = this;
    t._palaceUnlockIds = [];
    t._damageThreshold = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(APalaceBuildingVO, e);
  APalaceBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._damageThreshold = a.int(s.CastleXMLUtils.getIntAttribute("damageTreshold", t));
    this._palaceUnlockIds = s.CastleXMLUtils.createIntListFromAttribute("palaceUnlockID", t);
  };
  Object.defineProperty(APalaceBuildingVO.prototype, "palaceUnlockIds", {
    get: function () {
      return this._palaceUnlockIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APalaceBuildingVO.prototype, "damageThreshold", {
    get: function () {
      return this._damageThreshold;
    },
    enumerable: true,
    configurable: true
  });
  return APalaceBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.APalaceBuildingVO = r;
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");