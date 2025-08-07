Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./4.js");
var a = require("./1493.js");
var s = function (e) {
  function IsoDataObjectGroupJudgement() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoDataObjectGroupJudgement, e);
  IsoDataObjectGroupJudgement.prototype.initObjects = function () {
    if ((this.resetList(), this.isoData.areaData.isMyHomeCastle) && o.CastleModel.judgementData.activeJudgement) {
      var e = new r.EventJudgementVO(a.JudgementEventEnum.getByName(this.activeJudgementVO.visualName), this.activeJudgementVO.spawnSpotType);
      e.init(this.isoData);
      e.updateData();
      this.list.push(e);
    }
  };
  Object.defineProperty(IsoDataObjectGroupJudgement.prototype, "activeJudgementVO", {
    get: function () {
      if (o.CastleModel.judgementData) {
        return o.CastleModel.judgementData.activeJudgement;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataObjectGroupJudgement;
}(require("./358.js").AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupJudgement = s;
var r = require("./1494.js");