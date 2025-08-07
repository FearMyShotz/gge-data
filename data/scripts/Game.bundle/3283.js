Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1621.js");
var r = function (e) {
  function CollectableItemAllianceGiftVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemAllianceGiftVE, e);
  CollectableItemAllianceGiftVE.prototype.iconCreate = function () {
    var e = s.AllianceGiftTypeEnum.getTypeById(this.itemAllianceGiftVO.giftType.id);
    var t = new (a.getDefinitionByName(e.iconName))();
    this.dispCreator.addDisp(t);
  };
  CollectableItemAllianceGiftVE.prototype.tooltipCreate = function () {
    return s.AllianceGiftTypeEnum.getTypeById(this.itemAllianceGiftVO.giftType.id).tooltipTextId;
  };
  Object.defineProperty(CollectableItemAllianceGiftVE.prototype, "itemAllianceGiftVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemAllianceGiftVE;
}(require("./158.js").ACollectableItemVE);
exports.CollectableItemAllianceGiftVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");