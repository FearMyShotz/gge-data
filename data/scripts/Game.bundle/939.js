Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetFriendConnectionsVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetFriendConnectionsVO, e);
  C2SGetFriendConnectionsVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_FRIEND_CONNECTIONS;
  };
  return C2SGetFriendConnectionsVO;
}(o.BasicCommandVO);
exports.C2SGetFriendConnectionsVO = s;