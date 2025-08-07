Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleEquipmentDialogProperties(t, i = -1, n = false, o = -1, a = "") {
    var s = e.call(this) || this;
    s.selectedLordID = 0;
    s.showBarons = false;
    s.lordUsed = 0;
    s.selectedFilter = 0;
    s.tabState = "";
    s.showBarons = n;
    s.onCloseFunction = t;
    s.selectedLordID = i;
    s.tabState = a;
    return s;
  }
  n.__extends(CastleEquipmentDialogProperties, e);
  return CastleEquipmentDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleEquipmentDialogProperties = o;