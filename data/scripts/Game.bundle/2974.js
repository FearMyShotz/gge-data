Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./795.js");
var a = require("./1029.js");
var s = function (e) {
  function CastleInventoryStrongholdListComponent(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(CastleInventoryStrongholdListComponent, e);
  CastleInventoryStrongholdListComponent.prototype.createTooltipComponent = function (e) {
    return new a.CastleInventoryTooltipComponent(e);
  };
  CastleInventoryStrongholdListComponent.prototype.createListItemComponent = function (e, t) {
    return new r.CastleInventoryStrongholdListItemComponent(e, t);
  };
  return CastleInventoryStrongholdListComponent;
}(o.AInventoryList);
exports.CastleInventoryStrongholdListComponent = s;
var r = require("./2975.js");