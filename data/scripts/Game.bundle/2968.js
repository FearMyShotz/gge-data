Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./793.js");
var a = require("./1028.js");
var s = function (e) {
  function CastleInventoryListComponent(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(CastleInventoryListComponent, e);
  CastleInventoryListComponent.prototype.createTooltipComponent = function (e) {
    return new a.CastleInventoryTooltipComponent(e);
  };
  CastleInventoryListComponent.prototype.createListItemComponent = function (e, t) {
    return new r.CastleInventoryListItemComponent(e, t);
  };
  return CastleInventoryListComponent;
}(o.AInventoryList);
exports.CastleInventoryListComponent = s;
var r = require("./2969.js");