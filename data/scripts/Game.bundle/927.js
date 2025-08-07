Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = function (e) {
  function CollectableItemGemVO(t = -1) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, 1) || this;
  }
  n.__extends(CollectableItemGemVO, e);
  CollectableItemGemVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this.id = t;
  };
  CollectableItemGemVO.prototype.parseXmlObject = function (e) {
    this.id = o.int(e);
  };
  CollectableItemGemVO.__initialize_static_members = function () {
    CollectableItemGemVO.SERVER_KEY = "GID";
    CollectableItemGemVO.XML_KEY = "gemIDs";
  };
  return CollectableItemGemVO;
}(require("./568.js").ACollectableItemGemVO);
exports.CollectableItemGemVO = a;
a.__initialize_static_members();