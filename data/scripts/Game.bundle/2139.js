Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function SearchMemberListItemVO() {
    this.playerID = 0;
    this.distance = 0;
  }
  SearchMemberListItemVO.prototype.parseItem = function (e) {
    this.playerID = o.int(e.PID);
    this.distance = o.int(e.D);
    this.playerOwnerInfo = a.CastleModel.otherPlayerData.getOwnerInfoVO(this.playerID);
  };
  return SearchMemberListItemVO;
}();
exports.SearchMemberListItemVO = n;
var o = require("./6.js");
var a = require("./4.js");