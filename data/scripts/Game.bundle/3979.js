Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SOpenActivityChest() {
    return e.call(this) || this;
  }
  n.__extends(C2SOpenActivityChest, e);
  C2SOpenActivityChest.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_OPEN_ACTIVITY_CHEST;
  };
  return C2SOpenActivityChest;
}(o.BasicCommandVO);
exports.C2SOpenActivityChest = s;