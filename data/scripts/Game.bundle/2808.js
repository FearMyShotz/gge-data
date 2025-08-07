Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoViewObjectGroupEffect() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoViewObjectGroupEffect, e);
  IsoViewObjectGroupEffect.prototype.initObjects = function () {
    this.resetList();
  };
  IsoViewObjectGroupEffect.prototype.render = function () {
    if (this.list != null) {
      for (var e = 0, t = this.list; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.start();
        }
      }
    }
  };
  IsoViewObjectGroupEffect.prototype.addObject = function (e) {
    this.addObjectToLayerAndList(e, this.list);
  };
  return IsoViewObjectGroupEffect;
}(require("./302.js").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupEffect = o;