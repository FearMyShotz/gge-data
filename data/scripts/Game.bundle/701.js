Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./6.js");
var s = require("./16.js");
var r = require("./53.js");
var l = function (e) {
  function ABGTowerConnectionVO() {
    var t = e.call(this) || this;
    t._status = 0;
    return t;
  }
  n.__extends(ABGTowerConnectionVO, e);
  ABGTowerConnectionVO.prototype.fillFromConnectionValues = function (e) {
    this.absAreaPos.x = e[0];
    this.absAreaPos.y = e[1];
    this._playerName = e[2];
    this._status = a.int(e[3]);
    this.useSpecialConnectionLineColor = true;
    if (r.ABGHelper.isOnABGServer) {
      this.specialConnectionLineColor = this.status == 1 ? s.ClientConstColor.COLORBLIND_RED : s.ClientConstColor.COLORBLIND_GREEN;
    } else {
      this.specialConnectionLineColor = this.status == 1 ? s.ClientConstColor.GENERIC_RED : s.ClientConstColor.GENERIC_GREEN;
    }
    this.kingdomId = o.WorldClassic.KINGDOM_ID;
  };
  Object.defineProperty(ABGTowerConnectionVO.prototype, "playerName", {
    get: function () {
      return this._playerName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGTowerConnectionVO.prototype, "status", {
    get: function () {
      return this._status;
    },
    enumerable: true,
    configurable: true
  });
  return ABGTowerConnectionVO;
}(require("./498.js").MinWorldMapCastleInfoVO);
exports.ABGTowerConnectionVO = l;