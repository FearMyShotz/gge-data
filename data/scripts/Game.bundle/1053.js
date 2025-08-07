Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./44.js");
var a = function (e) {
  function CollectableItemDungeonProtectionVO(t = 0) {
    var i = this;
    i._duration = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, 1) || this)._duration = t;
    return i;
  }
  n.__extends(CollectableItemDungeonProtectionVO, e);
  CollectableItemDungeonProtectionVO.prototype.combineWith = function (e) {
    this.duration += e.duration;
  };
  CollectableItemDungeonProtectionVO.prototype.getDescriptionTextId = function () {
    return o.SpecialServerHelper.checkTextIDForSkinText("dungeon_protection_short_info");
  };
  CollectableItemDungeonProtectionVO.prototype.getTooltipTextId = function () {
    return "protection";
  };
  Object.defineProperty(CollectableItemDungeonProtectionVO.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    set: function (e) {
      this._duration = e;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemDungeonProtectionVO.SERVER_KEY = "DPT";
  CollectableItemDungeonProtectionVO.XML_KEY = "dungeonProtectionTime";
  return CollectableItemDungeonProtectionVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemDungeonProtectionVO = a;