Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemStoneVO(t = 0) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(CollectableItemStoneVO, e);
  CollectableItemStoneVO.__initialize_static_members = function () {
    CollectableItemStoneVO.SERVER_KEY = "S";
    CollectableItemStoneVO.XML_KEY = "stone";
  };
  return CollectableItemStoneVO;
}(require("./254.js").ACollectableItemResourceVO);
exports.CollectableItemStoneVO = o;
o.__initialize_static_members();