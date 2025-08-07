Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoViewObjectGroupEvent() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoViewObjectGroupEvent, e);
  IsoViewObjectGroupEvent.prototype.initObjects = function () {
    this.resetList();
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.eventBuildings.list, this.list);
  };
  return IsoViewObjectGroupEvent;
}(require("./302.js").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupEvent = o;