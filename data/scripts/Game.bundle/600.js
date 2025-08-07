Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetGemInventory() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetGemInventory, e);
  C2SGetGemInventory.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_GEMS_EVENT;
  };
  return C2SGetGemInventory;
}(o.BasicCommandVO);
exports.C2SGetGemInventory = s;