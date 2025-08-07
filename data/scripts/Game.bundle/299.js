Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./14.js");
var d = function (e) {
  function ACollectableItemPercentageBoosterVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ACollectableItemPercentageBoosterVE, e);
  ACollectableItemPercentageBoosterVE.prototype.iconCreate = function () {
    var e = c.int(this.itemPercentageBoosterVO.percentageBoosterVO.percentage);
    var t = new this.percentageIconClass();
    this.dispCreator.addDisp(t);
    u.CastleComponent.textFieldManager.registerTextField(t.txt_percentage, new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [e]), new a.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
  };
  ACollectableItemPercentageBoosterVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  ACollectableItemPercentageBoosterVE.prototype.tooltipCreate = function () {
    return {
      t: this.getBoosterTooltipId(),
      p: [new r.LocalizedNumberVO(this.itemPercentageBoosterVO.percentageBoosterVO.percentage)]
    };
  };
  ACollectableItemPercentageBoosterVE.prototype.getBoosterTooltipId = function () {
    return "";
  };
  Object.defineProperty(ACollectableItemPercentageBoosterVE.prototype, "percentageIconClass", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemPercentageBoosterVE.prototype, "itemPercentageBoosterVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ACollectableItemPercentageBoosterVE;
}(require("./158.js").ACollectableItemVE);
exports.ACollectableItemPercentageBoosterVE = d;
s.classImplementsInterfaces(d, "ICollectableRendererList");