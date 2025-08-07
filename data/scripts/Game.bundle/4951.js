Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleBuySlotAndUnitDialogProperties(t, i, n, o, a = null) {
    var s = this;
    s.listId = 0;
    s.amount = 0;
    s.cost = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).buyItemVO = t;
    s.listId = i;
    s.amount = n;
    s.cost = o;
    s.functionOk = a;
    return s;
  }
  n.__extends(CastleBuySlotAndUnitDialogProperties, e);
  return CastleBuySlotAndUnitDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleBuySlotAndUnitDialogProperties = o;