Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetBookmarkList() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetBookmarkList, e);
  C2SGetBookmarkList.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_BOOKMARKLIST;
  };
  return C2SGetBookmarkList;
}(o.BasicCommandVO);
exports.C2SGetBookmarkList = s;