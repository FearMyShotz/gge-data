Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./195.js");
var u = function (e) {
  function CollectableItemSkipDiscountVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemSkipDiscountVE, e);
  CollectableItemSkipDiscountVE.prototype.tooltipCreate = function () {
    var e = this.itemSkipDiscountVO.skipDiscountVO;
    var t = l.int(e.duration) / 60;
    var i = t / 60;
    var n = t;
    var a = "Minutes";
    if (n < 1) {
      n = 1;
    }
    if (i > 0) {
      n = i;
      a = "Hours";
    }
    return {
      t: "dialog_StarterDailyLoginBonus_buildingSkip" + a + (n == 1 ? "_singular" : "_plural"),
      p: [new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [e.discount], true), new s.LocalizedNumberVO(n)]
    };
  };
  Object.defineProperty(CollectableItemSkipDiscountVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_SkipDiscount;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemSkipDiscountVE.prototype, "itemSkipDiscountVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemSkipDiscountVE;
}(c.ACollectableItemSimpleIconVE);
exports.CollectableItemSkipDiscountVE = u;
a.classImplementsInterfaces(u, "ICollectableRendererList");