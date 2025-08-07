Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./195.js");
var r = function (e) {
  function CollectableItemVipPointVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemVipPointVE, e);
  CollectableItemVipPointVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemVipPointVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemVipPointVE.prototype.tooltipCreate = function () {
    return {
      t: "dialog_buyVipPoints_pointAmount_v2",
      p: [new a.LocalizedNumberVO(this.vo.amount)]
    };
  };
  Object.defineProperty(CollectableItemVipPointVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_VipPoints_Big;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemVipPointVE;
}(s.ACollectableItemSimpleIconVE);
exports.CollectableItemVipPointVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");