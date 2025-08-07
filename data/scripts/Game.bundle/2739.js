Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./451.js");
var a = require("./631.js");
var s = createjs.Point;
var r = function (e) {
  function IsoGeneratorDefenceGate() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(IsoGeneratorDefenceGate, e);
  IsoGeneratorDefenceGate.prototype.execute = function () {
    var e;
    var t = this.getRelevantGateGround();
    e = t.rotatedWidth == t.rotatedHeight ? new s(t.x2 + 1, t.y + t.rotatedHeight / 2) : t.rotatedWidth > t.rotatedHeight ? new s(t.x2 + 1, t.y) : new s(t.x2 + 1, t.y + t.rotatedHeight / 2);
    this.parentGenerator.result.gate = new o.IsoDefencePosition(e, 0, IsoGeneratorDefenceGate.GATE_DIMENSION);
  };
  IsoGeneratorDefenceGate.prototype.getRelevantGateGround = function () {
    var e;
    for (var t = 0, i = this.parentGenerator.grounds; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && (!e || e.x2 + e.y2 < n.x2 + n.y2 || n.x2 > e.x2)) {
        e = n;
      }
    }
    return e;
  };
  IsoGeneratorDefenceGate.__initialize_static_members = function () {
    IsoGeneratorDefenceGate.GATE_DIMENSION = new s(3, 4);
  };
  return IsoGeneratorDefenceGate;
}(a.AIsoGeneratorDefenceComponent);
exports.IsoGeneratorDefenceGate = r;
r.__initialize_static_members();