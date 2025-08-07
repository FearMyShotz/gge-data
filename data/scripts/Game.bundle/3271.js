Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = function (e) {
  function CollectableItemAlienProtectionVO(t = -1) {
    var i = this;
    i._id = -1;
    CONSTRUCTOR_HACK;
    (i = e.call(this, 1) || this)._id = t;
    return i;
  }
  n.__extends(CollectableItemAlienProtectionVO, e);
  CollectableItemAlienProtectionVO.prototype.parseXmlObject = function (e) {
    this.id = o.int(o.int(e));
  };
  CollectableItemAlienProtectionVO.prototype.getTooltipTextId = function () {
    return "repairAll_gift";
  };
  CollectableItemAlienProtectionVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.id = this.id;
    return t;
  };
  CollectableItemAlienProtectionVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  Object.defineProperty(CollectableItemAlienProtectionVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemAlienProtectionVO.__initialize_static_members = function () {
    CollectableItemAlienProtectionVO.SERVER_KEY = "AIP";
    CollectableItemAlienProtectionVO.XML_KEY = "alienProtection";
  };
  return CollectableItemAlienProtectionVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemAlienProtectionVO = a;
a.__initialize_static_members();