Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SOptionEvent(t, i, n) {
    var o = this;
    o.SVF = 0;
    o.OFF = 0;
    o.CC2T = -1;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).SVF = a.int(t ? 1 : 0);
    o.OFF = a.int(i ? 1 : 0);
    o.CC2T = n;
    return o;
  }
  n.__extends(C2SOptionEvent, e);
  C2SOptionEvent.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_OPTION_EVENT;
  };
  return C2SOptionEvent;
}(o.BasicCommandVO);
exports.C2SOptionEvent = r;