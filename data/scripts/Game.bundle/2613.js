Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SVIPInfoEvent() {
    return e.call(this) || this;
  }
  n.__extends(C2SVIPInfoEvent, e);
  C2SVIPInfoEvent.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_VIP_INFO_EVENT;
  };
  return C2SVIPInfoEvent;
}(o.BasicCommandVO);
exports.C2SVIPInfoEvent = s;