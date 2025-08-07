Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemUnlockVO() {
    CONSTRUCTOR_HACK;
    return e.call(this, 1) || this;
  }
  n.__extends(CollectableItemUnlockVO, e);
  CollectableItemUnlockVO.prototype.parseXmlObject = function (e) {
    var t = e.substr(0, 1) == CollectableItemUnlockVO.KEY_BUILDING ? a.CollectableEnum.BUILDING : a.CollectableEnum.UNITS;
    var i = parseInt(e.substr(1));
    this._collectableVO = s.CollectableHelper.createVO(t, 1, i);
  };
  CollectableItemUnlockVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  CollectableItemUnlockVO.prototype.getDescriptionTextParams = function () {
    return this.collectableVO.getDescriptionTextParams();
  };
  CollectableItemUnlockVO.prototype.getTooltipTextId = function () {
    return this.collectableVO.getTooltipTextId();
  };
  CollectableItemUnlockVO.prototype.getTextfieldText = function () {
    return this.collectableVO.getTextfieldText();
  };
  CollectableItemUnlockVO.prototype.getNameTextId = function () {
    return this.collectableVO.getNameTextId();
  };
  CollectableItemUnlockVO.prototype.getDescriptionTextId = function () {
    return this.collectableVO.getDescriptionTextId();
  };
  CollectableItemUnlockVO.prototype.getNameTextParams = function () {
    return this.collectableVO.getNameTextParams();
  };
  Object.defineProperty(CollectableItemUnlockVO.prototype, "collectableVO", {
    get: function () {
      return this._collectableVO;
    },
    set: function (e) {
      this._collectableVO = e;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemUnlockVO.__initialize_static_members = function () {
    CollectableItemUnlockVO.KEY_BUILDING = "B";
  };
  return CollectableItemUnlockVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemUnlockVO = o;
var a = require("./12.js");
var s = require("./45.js");
o.__initialize_static_members();