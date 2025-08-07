Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./3.js");
var o = require("./6.js");
var a = require("./28.js");
var s = require("./45.js");
var r = require("./30.js");
var l = require("./27.js");
var c = require("./1.js");
var u = function () {
  function LostAndFoundListItemVO() {
    this.id = 0;
    this.endTimeStamp = NaN;
    this.receivedTimeStamp = NaN;
    this.rank = 0;
  }
  LostAndFoundListItemVO.prototype.parseData = function (e) {
    var t = s.CollectableHelper.getTypeByServerKey(e.ROT, e.ROV);
    this.collectableVO = s.CollectableHelper.createVO(t.type, -Number.MAX_VALUE, t.id);
    this.collectableVO.parseServerObject(e.ROV);
    this.id = o.int(e.LFID);
    this.endTimeStamp = r.CachedTimer.getCachedTimer() + e.ET * a.ClientConstTime.SEC_2_MILLISEC;
    this.receivedTimeStamp = e.CT;
    var i = o.int(e.LFES);
    if (c.instanceOfClass(this.collectableVO, "CollectableItemEquipmentUniqueVO") && this.collectableVO.equipmentVO.remainingDuration > 0) {
      this.collectableVO.setRemainingTime(this.collectableVO.equipmentVO.totalDuration - i);
    }
  };
  Object.defineProperty(LostAndFoundListItemVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      return Math.max(0, (this.endTimeStamp - r.CachedTimer.getCachedTimer()) * a.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LostAndFoundListItemVO.prototype, "receivedTimeTextVO", {
    get: function () {
      var e = new Date();
      e.setTime(this.receivedTimeStamp * a.ClientConstTime.SEC_2_MILLISEC);
      return new n.TextVO(l.CastleTimeStringHelper.getDateStringFromDate(e));
    },
    enumerable: true,
    configurable: true
  });
  return LostAndFoundListItemVO;
}();
exports.LostAndFoundListItemVO = u;