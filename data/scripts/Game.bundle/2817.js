Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoViewObjectGroupMovement() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoViewObjectGroupMovement, e);
  IsoViewObjectGroupMovement.prototype.initObjects = function () {
    e.prototype.initObjects.call(this);
    this.resetList();
  };
  IsoViewObjectGroupMovement.prototype.addObject = function (e) {
    this.addObjectToLayerAndList(e, this.list);
  };
  return IsoViewObjectGroupMovement;
}(require("./302.js").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupMovement = o;