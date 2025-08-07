Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function IsoCommandGridUpdate(t) {
    return e.call(this, t) || this;
  }
  n.__extends(IsoCommandGridUpdate, e);
  IsoCommandGridUpdate.prototype.execute = function () {
    this.grid.updateCompleteMap();
  };
  return IsoCommandGridUpdate;
}(require("./310.js").AIsoCommandModel);
exports.IsoCommandGridUpdate = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");