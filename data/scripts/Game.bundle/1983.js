Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./30.js");
var s = function () {
  function CastleProfiler() {
    this.rootMeasure = new r("root");
    this.measureStack = [];
    this.measureStack.push(this.rootMeasure);
  }
  CastleProfiler.prototype.start = function (e) {
    var t = this.measureStack[this.measureStack.length - 1].getSubMeasurer(e);
    this.measureStack.push(t);
    t.startTimer();
  };
  CastleProfiler.prototype.stop = function () {
    this.measureStack.pop().stopTimer();
  };
  CastleProfiler.prototype.output = function () {
    return this.rootMeasure.getResult();
  };
  CastleProfiler.prototype.save = function (e = "measures.csv") {
    new n.FileReference().save(this.output(), e);
  };
  return CastleProfiler;
}();
exports.CastleProfiler = s;
var r = function () {
  function Measurer(e) {
    this.measurers = new Map();
    this.count = 0;
    this.totalTime = 0;
    this.lastMeasureStarted = 0;
    this.id = e;
  }
  Measurer.prototype.startTimer = function () {
    this.lastMeasureStarted = o.int(a.CachedTimer.getCachedTimer());
  };
  Measurer.prototype.stopTimer = function () {
    this.count++;
    this.totalTime += o.int(a.CachedTimer.getCachedTimer() - this.lastMeasureStarted);
  };
  Measurer.prototype.getSubMeasurer = function (e) {
    if (this.measurers.get(e) == undefined) {
      this.measurers.set(e, new Measurer(e));
    }
    return this.measurers.get(e);
  };
  Measurer.prototype.addResult = function (e = "") {
    var t = e + this.id + Measurer.DELIMITER + this.totalTime + Measurer.DELIMITER + this.count + "\n";
    var i = this.totalTime;
    var n = e + "    ";
    var o = true;
    if (this.measurers != null) {
      for (var a = 0, s = Array.from(this.measurers.values()); a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          t += r.addResult(n);
          i -= r.totalTime;
          o = false;
        }
      }
    }
    if (!o && i > 0) {
      t += n + "(other)" + Measurer.DELIMITER + i + Measurer.DELIMITER + this.count + "\n";
    }
    return t;
  };
  Measurer.prototype.getResult = function () {
    return this.addResult("");
  };
  Measurer.__initialize_static_members = function () {
    Measurer.DELIMITER = "\t";
  };
  return Measurer;
}();
r.__initialize_static_members();