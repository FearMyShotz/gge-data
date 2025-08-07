Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleBookmarkAttackOrderDetailsVO() {
    this._assignedAttackers = [];
    this.attackTimeStamp = 0;
    this.sendMessageToAssignedAttackers = true;
  }
  CastleBookmarkAttackOrderDetailsVO.prototype.parseParamObject = function (e) {
    var t = new Date();
    this._assignedAttackers = e.M;
    this.attackTimeStamp = t.getTime() + e.TI * o.ClientConstTime.SEC_2_MILLISEC;
    this.attackDate = t;
    this.attackDate.setTime(this.attackTimeStamp);
  };
  Object.defineProperty(CastleBookmarkAttackOrderDetailsVO.prototype, "remainingTimeInMilliSeconds", {
    get: function () {
      var e = new Date();
      return this.attackTimeStamp - e.getTime();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBookmarkAttackOrderDetailsVO.prototype, "assignedAttackers", {
    get: function () {
      return this._assignedAttackers;
    },
    enumerable: true,
    configurable: true
  });
  return CastleBookmarkAttackOrderDetailsVO;
}();
exports.CastleBookmarkAttackOrderDetailsVO = n;
var o = require("./28.js");