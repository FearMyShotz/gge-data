Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetLootBoxesStatus() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetLootBoxesStatus, e);
  C2SGetLootBoxesStatus.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_LOOT_BOXES_STATUS;
  };
  return C2SGetLootBoxesStatus;
}(o.BasicCommandVO);
exports.C2SGetLootBoxesStatus = s;