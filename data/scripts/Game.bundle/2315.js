Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./32.js");
var a = require("./4.js");
var s = function (e) {
  function CastleMonumentList() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleMonumentList, e);
  CastleMonumentList.prototype.parseGML = function (e) {
    if (e) {
      this._list = [];
      for (var t = 0, i = e.AI; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var s = new r.MonumentMapobjectVO();
          s.parseGML(n);
          s.ownerInfo = a.CastleModel.otherPlayerData.getOwnInfoVO();
          this._list.push(s);
        }
      }
      this.controller.dispatchEvent(new o.CastleUserDataEvent(o.CastleUserDataEvent.CHANGE_MONUMENTLIST));
    }
  };
  return CastleMonumentList;
}(require("./1301.js").UpgradableLandmarkList);
exports.CastleMonumentList = s;
var r = require("./579.js");