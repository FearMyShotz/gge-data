Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = function (e) {
  function CastleBasicAddUnitsDialogProperties(t, i, n = null, o = false, s = null, r = a.int(Number.MAX_VALUE), l = false) {
    var c = this;
    c.editMode = false;
    c.maxAmount = 0;
    c.maxAmountOnlyForSoldier = false;
    c.targetAreaType = 0;
    CONSTRUCTOR_HACK;
    (c = e.call(this) || this).unitVO = t;
    c.addItemFunction = i;
    c.itemVO = n;
    c.editMode = o;
    c.itemContainer = s;
    c.maxAmount = r;
    c.maxAmountOnlyForSoldier = l;
    return c;
  }
  n.__extends(CastleBasicAddUnitsDialogProperties, e);
  return CastleBasicAddUnitsDialogProperties;
}(o.BasicProperties);
exports.CastleBasicAddUnitsDialogProperties = s;