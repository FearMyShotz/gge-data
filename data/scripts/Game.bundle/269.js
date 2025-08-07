Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemWoodVO(t = 0) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(CollectableItemWoodVO, e);
  CollectableItemWoodVO.__initialize_static_members = function () {
    CollectableItemWoodVO.SERVER_KEY = "W";
    CollectableItemWoodVO.XML_KEY = "wood";
  };
  return CollectableItemWoodVO;
}(require("./254.js").ACollectableItemResourceVO);
exports.CollectableItemWoodVO = o;
o.__initialize_static_members();