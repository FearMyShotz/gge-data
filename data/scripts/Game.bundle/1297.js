Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./7.js");
var a = function (e) {
  function C2SChangePlayerNameInfo() {
    return e.call(this) || this;
  }
  n.__extends(C2SChangePlayerNameInfo, e);
  C2SChangePlayerNameInfo.prototype.getCmdId = function () {
    return o.ClientConstSF.C2S_GET_PLAYER_NAME_CHANGE_INFO_EVENT;
  };
  return C2SChangePlayerNameInfo;
}(require("./2.js").BasicCommandVO);
exports.C2SChangePlayerNameInfo = a;