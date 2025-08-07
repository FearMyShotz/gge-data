Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemPlagueDoctorVO(t = 0) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(CollectableItemPlagueDoctorVO, e);
  CollectableItemPlagueDoctorVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this.amount = t;
  };
  CollectableItemPlagueDoctorVO.prototype.getTooltipTextId = function () {
    return "plaguemonks";
  };
  CollectableItemPlagueDoctorVO.prototype.getDescriptionTextId = function () {
    return "plaguemonks_short_info";
  };
  CollectableItemPlagueDoctorVO.__initialize_static_members = function () {
    CollectableItemPlagueDoctorVO.SERVER_KEY = "PLD";
    CollectableItemPlagueDoctorVO.XML_KEY = "plagueDoctor";
  };
  return CollectableItemPlagueDoctorVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemPlagueDoctorVO = o;
o.__initialize_static_members();