Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./795.js");
var a = require("./1029.js");
var s = function (e) {
  function StrongholdInventoryListComponent(t) {
    var i = e.call(this, t, 6) || this;
    i.init();
    return i;
  }
  n.__extends(StrongholdInventoryListComponent, e);
  StrongholdInventoryListComponent.prototype.createTooltipComponent = function (e) {
    return new a.CastleInventoryTooltipComponent(e);
  };
  StrongholdInventoryListComponent.prototype.createListItemComponent = function (e, t) {
    return new r.StrongholdInventoryListItemComponent(e, t);
  };
  return StrongholdInventoryListComponent;
}(o.AInventoryList);
exports.StrongholdInventoryListComponent = s;
var r = require("./2978.js");