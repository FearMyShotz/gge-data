Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = function () {
  function RerollCostVO(e) {
    this.id = 0;
    this.rerollCount = 0;
    this.c1Cost = 0;
    this.c2Cost = 0;
    this.id = n.int(o.CastleXMLUtils.getIntAttribute("id", e, -1));
    this.type = o.CastleXMLUtils.getStringAttribute("type", e);
    this.rerollCount = n.int(o.CastleXMLUtils.getIntAttribute("rerollCount", e, -1));
    this.c1Cost = n.int(o.CastleXMLUtils.getIntAttribute("c1Cost", e, -1));
    this.c2Cost = n.int(o.CastleXMLUtils.getIntAttribute("c2Cost", e, -1));
    this.softCosts = r.CollectableManager.parser.x2cList.createList(e, s.ClientConstCollectable.XML_PREFIX_COST);
  }
  RerollCostVO.prototype.getEventCostsAsCollectableVOByID = function (e) {
    return this.softCosts.getFirstItemOfTypeVO(new c.CollectableTypeVO(l.CollectableEnum.GENERIC_CURRENCY, e));
  };
  return RerollCostVO;
}();
exports.RerollCostVO = a;
var s = require("./86.js");
var r = require("./50.js");
var l = require("./12.js");
var c = require("./74.js");