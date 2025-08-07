Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./795.js");
var a = require("./2941.js");
var s = function (e) {
  function HospitalInventoryListComponent(t, i) {
    var n = e.call(this, t) || this;
    n.selectCallback = i;
    n.init();
    return n;
  }
  n.__extends(HospitalInventoryListComponent, e);
  HospitalInventoryListComponent.prototype.createTooltipComponent = function (e) {
    return new a.HospitalInventoryTooltipComponent(e);
  };
  HospitalInventoryListComponent.prototype.createListItemComponent = function (e, t) {
    return new r.HospitalInventoryListItemComponent(e, t, this.selectCallback);
  };
  return HospitalInventoryListComponent;
}(o.AInventoryList);
exports.HospitalInventoryListComponent = s;
var r = require("./2942.js");