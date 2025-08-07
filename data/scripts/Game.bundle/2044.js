Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = require("./6.js");
var s = function () {
  function IsoCommandProcessor() {
    this._queue = [];
  }
  IsoCommandProcessor.prototype.addPackageToQueue = function (e) {
    var t = e.createCommandList();
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this.addCommandToQueue(o);
        }
      }
    }
  };
  IsoCommandProcessor.prototype.addCommandToQueue = function (e) {
    this._queue.push(e);
  };
  IsoCommandProcessor.prototype.executeQueue = function (e = true) {
    if (!(this._queue.length <= 0)) {
      if (e) {
        this.optimizeQueue(this._queue);
      }
      if (this._queue != null) {
        for (var t = 0, i = this._queue; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            this.executeCommand(n);
          }
        }
      }
      this._queue.length = 0;
    }
  };
  IsoCommandProcessor.prototype.executeCommand = function (e) {
    if (!e.isExecuted) {
      e.execute();
      e.isExecuted = true;
    }
  };
  IsoCommandProcessor.prototype.executePackage = function (e, t = true) {
    var i = e.createCommandList();
    if (i && !(i.length <= 0) && (t && this.optimizeQueue(i), i != null)) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          this.executeCommand(a);
        }
      }
    }
  };
  IsoCommandProcessor.prototype.optimizeQueue = function (e) {
    this.removeDuplicatedCommandsByClass(e, r.IsoCommandAreaDataUpdated);
    this.removeDuplicatedCommandsByClass(e, l.IsoCommandGridUpdate);
    this.removeDuplicatedCommandsByClass(e, c.IsoCommandZSortAll);
  };
  IsoCommandProcessor.prototype.removeDuplicatedCommandsByClass = function (e, t) {
    var i = this.getIndicesOfCommands(e, t);
    for (var n = a.int(i.length - 2); n >= 0; --n) {
      e.splice(i[n], 1);
    }
  };
  IsoCommandProcessor.prototype.getIndicesOfCommands = function (e, t) {
    var i = [];
    for (var a = 0; a < e.length; ++a) {
      if (o.instanceOfClass(e[a], n.getQualifiedClassName(t))) {
        i.push(a);
      }
    }
    return i;
  };
  return IsoCommandProcessor;
}();
exports.IsoCommandProcessor = s;
var r = require("./485.js");
var l = require("./865.js");
var c = require("./691.js");