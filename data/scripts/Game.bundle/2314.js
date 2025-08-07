Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./32.js");
var a = require("./4.js");
var s = function (e) {
  function CastleLaboratoryList() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleLaboratoryList, e);
  CastleLaboratoryList.prototype.parseGLL = function (e) {
    if (e) {
      this._list = [];
      for (var t = 0, i = e.AI; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var s = new r.LaboratoryMapobjectVO();
          s.parseGLL(n);
          s.ownerInfo = a.CastleModel.otherPlayerData.getOwnInfoVO();
          this._list.push(s);
        }
      }
      this.controller.dispatchEvent(new o.CastleUserDataEvent(o.CastleUserDataEvent.CHANGE_LABORATORYLIST));
    }
  };
  CastleLaboratoryList.prototype.kingdomList = function (e) {
    return this.completeList.filter(this.getFilterByKingdomID(e));
  };
  CastleLaboratoryList.prototype.hasLaboratoryInKingdom = function (e) {
    return this.kingdomList(e).length > 0;
  };
  CastleLaboratoryList.prototype.getFilterByKingdomID = function (e) {
    return function (t) {
      var i = [];
      for (var n = 1; n < arguments.length; n++) {
        i[n - 1] = arguments[n];
      }
      return t.kingdomID == e;
    };
  };
  return CastleLaboratoryList;
}(require("./1301.js").UpgradableLandmarkList);
exports.CastleLaboratoryList = s;
var r = require("./705.js");