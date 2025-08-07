Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./22.js");
var r = function (e) {
  function ACraftingBuildingVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(ACraftingBuildingVO, e);
  ACraftingBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._craftingQueueId = a.int(s.CastleXMLUtils.getIntAttribute("craftingQueueId", t));
  };
  Object.defineProperty(ACraftingBuildingVO.prototype, "craftingQueueId", {
    get: function () {
      return this._craftingQueueId;
    },
    enumerable: true,
    configurable: true
  });
  return ACraftingBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.ACraftingBuildingVO = r;
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");