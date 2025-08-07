Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./27.js");
var a = function (e) {
  function CollectableItemVipTimeVO(t = 0) {
    var i = this;
    i._duration = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, 1) || this)._duration = t;
    if (isNaN(t)) {
      i._duration = 0;
    }
    return i;
  }
  n.__extends(CollectableItemVipTimeVO, e);
  CollectableItemVipTimeVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this._duration = t;
  };
  CollectableItemVipTimeVO.prototype.parseXmlObject = function (e) {
    this._duration = Number(e);
  };
  CollectableItemVipTimeVO.prototype.combineWith = function (e) {
    this.duration += e.duration;
  };
  CollectableItemVipTimeVO.prototype.getTooltipTextId = function () {
    return "dialog_VipScreen_vipTime";
  };
  CollectableItemVipTimeVO.prototype.getDescriptionTextId = function () {
    return "vipTime_short_info";
  };
  CollectableItemVipTimeVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.duration = this.duration;
    return t;
  };
  CollectableItemVipTimeVO.prototype.getTextfieldText = function () {
    return o.CastleTimeStringHelper.getEventTimeString(this.duration);
  };
  Object.defineProperty(CollectableItemVipTimeVO.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    set: function (e) {
      this._duration = e;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemVipTimeVO.__initialize_static_members = function () {
    CollectableItemVipTimeVO.SERVER_KEY = "VT";
    CollectableItemVipTimeVO.XML_KEY = "vipTime";
  };
  return CollectableItemVipTimeVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemVipTimeVO = a;
a.__initialize_static_members();