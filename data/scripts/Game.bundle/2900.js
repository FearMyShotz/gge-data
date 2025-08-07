Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function TutorialBuildingVO() {
    var t = e.call(this) || this;
    t.hitPoints = 100;
    return t;
  }
  n.__extends(TutorialBuildingVO, e);
  TutorialBuildingVO.prototype.getNameString = function () {
    return a.Localize.text("barracks_name");
  };
  return TutorialBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.TutorialBuildingVO = s;
o.classImplementsInterfaces(s, "IShopVO", "ICostVO", "IInventoryVO");