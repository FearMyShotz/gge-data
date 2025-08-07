Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = require("./4.js");
var r = function (e) {
  function C2SSetMeadPrioVO() {
    var t = this;
    t.KID = 0;
    t.AID = 0;
    t.PPOT = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).KID = s.CastleModel.areaData.activeArea.areaInfo.kingdomID;
    t.AID = s.CastleModel.areaData.activeArea.areaInfo.objectId;
    t.PPOT = s.CastleModel.breweryData.meadPrioSet ? 1 : 0;
    return t;
  }
  n.__extends(C2SSetMeadPrioVO, e);
  C2SSetMeadPrioVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SET_MEAD_PRIORITY;
  };
  return C2SSetMeadPrioVO;
}(o.BasicCommandVO);
exports.C2SSetMeadPrioVO = r;