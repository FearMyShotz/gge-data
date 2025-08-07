Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemFoodVO(t = 0) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(CollectableItemFoodVO, e);
  CollectableItemFoodVO.__initialize_static_members = function () {
    CollectableItemFoodVO.SERVER_KEY = "F";
    CollectableItemFoodVO.XML_KEY = "food";
  };
  return CollectableItemFoodVO;
}(require("./254.js").ACollectableItemResourceVO);
exports.CollectableItemFoodVO = o;
o.__initialize_static_members();