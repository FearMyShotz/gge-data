Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleEquipmentSellDialogProperties(t, i, n, o = -1) {
    var a = e.call(this) || this;
    a.lostAndFoundID = 0;
    a.itemToSell = t;
    a.okFunction = i;
    a.cancelFunction = n;
    a.lostAndFoundID = o;
    return a;
  }
  n.__extends(CastleEquipmentSellDialogProperties, e);
  return CastleEquipmentSellDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleEquipmentSellDialogProperties = o;